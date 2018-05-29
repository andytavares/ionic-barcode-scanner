import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

import { BarcodeScanner } from "@ionic-native/barcode-scanner";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  public lastScan: Object = {
    text: "N/A",
    format: "N/A"
  };
  constructor(
    public navCtrl: NavController,
    private barcodeScanner: BarcodeScanner,
  ) {}

  scan() {
    this.barcodeScanner
      .scan()
      .then(barcodeData => {
        this.lastScan = barcodeData;
      })
      .catch(err => {
        console.log(err);
      });
  }

  clear() {
    this.lastScan = {};
  }
}
