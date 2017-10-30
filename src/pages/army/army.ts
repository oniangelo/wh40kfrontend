import { ArmyBuilderService } from './../../armybuilderservice';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-army',
  templateUrl: 'army.html'
})
export class ArmyPage {
  constructor(public navCtrl: NavController, private abService: ArmyBuilderService) {
    this.abService.getIndex(1).then(res => {
      var result = res.json();
      result.forEach(element => {
        this.units.push(element);
      });
      debugger;
  });
  }
 units = [];

}