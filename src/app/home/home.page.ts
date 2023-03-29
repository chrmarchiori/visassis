import { Component } from '@angular/core';

import { CameraPreview, CameraPreviewOptions, CameraSampleOptions } from '@capacitor-community/camera-preview';

import { imageConverter } from 'src/utils/imageConverter';
import { AlertController } from '@ionic/angular';

// import { ImageColorPicker } from 'src/utils/image-color-picker';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public corIdentificada = null;

  private cameraPreviewOptions: CameraPreviewOptions = {
    position: 'rear',
    height: 715,
    width: 540,
    x: 0,
    y: 58,
    storeToFile: true,
    enableZoom: true
  };

  private cameraSampleOptions: CameraSampleOptions = {
    quality: 50
  };

  constructor(private alertController: AlertController) { }
  
  ngOnInit() {
    CameraPreview.start(this.cameraPreviewOptions);
  }


  private identificarCor() {
    
      // var colorPicker = new ImageColorPicker('.thumbnail img', {
      //   preview: '.preview',
      //   clicked: function(data){
      //     // instance data
      //     console.log(data);
          
      //     document.getElementById('hex').innerHTML = data.result_hex;
      //     document.getElementById('rgb').innerHTML = data.result_rgb_string;
    
      //     document.body.style.background = data.result_hex;
      //   }
      // });

  }


}
