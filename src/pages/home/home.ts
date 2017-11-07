import { Camera, CameraOptions } from '@ionic-native/camera';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { File } from '@ionic-native/file';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public scans: any[];
  public base64image: string;

  constructor(private file: File, public navCtrl: NavController, private camera: Camera) {

  }

  attachFile() {
    this.file.checkDir(this.file.dataDirectory, 'mydir').then(_ => console.log('Directory exists')).catch(err => console.log('Directory doesnt exist'));
  }

  takePhoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then( (imageData) => {
      this.base64image = 'data:image/jpeg;base64,' + imageData
    }, (err) => {
      // do sth
    });
  }

}
