import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';

import { CameraPreview, CameraPreviewOptions } from '@capacitor-community/camera-preview';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private cameraPreviewOptions: CameraPreviewOptions = {
    position: 'rear',
    height: 1920,
    width: 1080
  };

  constructor() { }
  
  ngOnInit() {
    CameraPreview.start(this.cameraPreviewOptions);
  }

  /*initCamera() {
    CameraPreview.start({
      parent: "content",
      toBack: true,
      position: "front"
    });
  }*/


}
