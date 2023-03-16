import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';

import { CameraPreview, CameraPreviewOptions, CameraSampleOptions } from '@capacitor-community/camera-preview';

import { imageConverter } from 'src/utils/imageConverter';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public simi: unknown;

  private cameraPreviewOptions: CameraPreviewOptions = {
    position: 'rear',
    height: 715,
    width: 540,
    x: 0,
    y: 58,
    storeToFile: true
  };

  private cameraSampleOptions: CameraSampleOptions = {
    quality: 50
  };

  constructor() { }
  
  ngOnInit() {
    CameraPreview.start(this.cameraPreviewOptions);
  }


  public comparaImagens() {
    
    CameraPreview.captureSample(this.cameraSampleOptions)
      .then(result => {
        console.log(result.value);
        imageConverter.compareImages('./src/assets/carteira.png', result.value)
          .then(similaridade => {
            this.simi = similaridade
          })
      })
      .catch(error => console.log(error));   
    
  }


}
