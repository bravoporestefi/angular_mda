const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 3000; // Puerto del servidor

// Middleware para parsear datos JSON
app.use(bodyParser.json());

// Ruta para obtener todos los gatos
app.get('/gatos', (req, res) => {
  fs.readFile('db.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error al leer la base de datos');
      return;
    }
    const gatos = JSON.parse(data).gatos;
    res.json(gatos);
  });
});

// Ruta para crear un nuevo gato
app.post('/gatos', (req, res) => {
  const nuevoGato = req.body;
  fs.readFile('db.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error al leer la base de datos');
      return;
    }
    const db = JSON.parse(data);
    db.gatos.push(nuevoGato);
    fs.writeFile('db.json', JSON.stringify(db, null, 2), (err) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error al escribir en la base de datos');
        return;
      }
      res.status(201).send('Gato creado exitosamente');
    });
  });
});

// Ruta para actualizar la información de un gato
app.put('/gatos/:id', (req, res) => {
  const id = req.params.id;
  const newData = req.body;
  fs.readFile('db.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error al leer la base de datos');
      return;
    }
    const db = JSON.parse(data);
    const index = db.gatos.findIndex(gato => gato.id === id);
    if (index === -1) {
      res.status(404).send('Gato no encontrado');
      return;
    }
    db.gatos[index] = { ...db.gatos[index], ...newData };
    fs.writeFile('db.json', JSON.stringify(db, null, 2), (err) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error al escribir en la base de datos');
        return;
      }
      res.status(200).send('Gato actualizado exitosamente');
    });
  });
});

// Ruta para eliminar un gato
app.delete('/gatos/:id', (req, res) => {
  const id = req.params.id;
  fs.readFile('db.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error al leer la base de datos');
      return;
    }
    const db = JSON.parse(data);
    const index = db.gatos.findIndex(gato => gato.id === id);
    if (index === -1) {
      res.status(404).send('Gato no encontrado');
      return;
    }
    db.gatos.splice(index, 1);
    fs.writeFile('db.json', JSON.stringify(db, null, 2), (err) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error al escribir en la base de datos');
        return;
      }
      res.status(200).send('Gato eliminado exitosamente');
    });
  });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
