import { Component } from '@angular/core';

import { CameraPreview, CameraPreviewOptions, CameraSampleOptions } from '@capacitor-community/camera-preview';

import { imageConverter } from 'src/utils/imageConverter';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public simi: unknown;

  private cameraPreviewOptions: CameraPreviewOptions = {
    position: 'rear',
    height: window.screen.height,
    width: window.screen.width,
    // x: 0,
    // y: 58,
    storeToFile: true,
    enableZoom: true,
    parent: "content",
    toBack: true
  };

  private cameraSampleOptions: CameraSampleOptions = {
    quality: 50
  };

  constructor(private alertController: AlertController) { }
  
  ngOnInit() {
    CameraPreview.start(this.cameraPreviewOptions);
  }


  async presentAlert(aviso: string) {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: aviso,
      buttons: ['OK'],
    });

    await alert.present();
  }


  public comparaImagens() {

    CameraPreview.captureSample(this.cameraSampleOptions)
      .then(result => {
        this.presentAlert(result.value);
        // imageConverter.compareImages('./src/assets/carteira.png', result.value)
        //   .then(similaridade => {
        //     this.simi = similaridade
        //   })
      })
      .catch(error => this.presentAlert(error));   
    
  }


}
