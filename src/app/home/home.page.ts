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

  public similaridade = null;

  private cameraPreviewOptions: CameraPreviewOptions = {
    position: 'rear',
    height: 914,
    width: 412,
    enableZoom: true,
    toBack: true
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
        imageConverter.compareImages('./src/assets/carteira.png', result.value)
      })
      .catch(error => console.log(error));   
    
  }


}
