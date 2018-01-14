import { Units } from './../units/units';
import { Component } from '@angular/core';
import { ArmyBuilderService } from './../../armybuilderservice';
import { NavController, ModalController, NavParams } from 'ionic-angular';


@Component({
    selector: 'page-newlist',
    templateUrl: 'newlist.html'
  })
  export class NewListPage{
    constructor(public mdlCtrl: ModalController,public navCtrl: NavController,public _aBService:ArmyBuilderService, public _navParams: NavParams) {    
    this.abService = _aBService;
    this.unitParams = _navParams;
    console.log(this.unitParams);
    }
    abService: ArmyBuilderService;
    itemList = [];
    currentFaction = 1;
    unitParams: NavParams;
    goToUnits(role: number)
    {
        var payload = {currentFaction: this.currentFaction, role: role};
        let units = this.mdlCtrl.create(Units,payload);
        units.onDidDismiss(dataToAdd => {       
          if(dataToAdd != null)
          this.itemList.push(dataToAdd);
        });
        units.present();

    }
    filterItemsOfType(type){
      return this.itemList.filter(x => x.roleId == type);
  }
  }