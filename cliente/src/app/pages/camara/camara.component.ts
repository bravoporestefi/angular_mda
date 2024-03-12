import { Component, ElementRef, ViewChild } from '@angular/core'; 

@Component({
  selector: 'app-camera', 
  templateUrl: './camara.component.html', 
  styleUrls: ['./camara.component.css'] 
})

export class CamaraComponent {
  @ViewChild('cameraFeed', { static: true }) cameraFeed: ElementRef = {} as ElementRef; 
  cameraStream: MediaStream | null = null; 
  cameraVisible = false; 

  openCamera() { 
    navigator.mediaDevices.getUserMedia({ video: true }) 
      .then((stream) => { 
        this.cameraVisible = true; 
        this.cameraFeed.nativeElement.srcObject = stream; 
        this.cameraStream = stream; 
      })
      .catch((error) => { 
        console.error('Error accessing camera: ', error); 
      });
  }

  closeCamera() { 
    if (this.cameraStream) { 
      this.cameraStream.getTracks().forEach((track) => { 
        track.stop(); 
      });
      this.cameraVisible = false; 
    }
  }
}
