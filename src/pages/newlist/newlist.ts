import { Units } from './../units/units';
import { Component } from '@angular/core';
import { ArmyBuilderService } from './../../armybuilderservice';
import { NavController, AlertController, NavParams } from 'ionic-angular';


@Component({
    selector: 'page-newlist',
    templateUrl: 'newlist.html'
  })
  export class NewListPage{
    constructor(public navCtrl: NavController,public _aBService:ArmyBuilderService, public _navParams: NavParams) {    
    this.abService = _aBService;
    this.unitParams = _navParams;
    }
    abService: ArmyBuilderService;
    itemList = [];
    currentFaction = 1;
    unitParams: NavParams;
    goToUnits(role: number)
    {
        var payload = {currentFaction: this.currentFaction, role: role};
        this.navCtrl.push(Units,payload);
    }
    ionViewWillEnter()
    {
      var item = this._navParams.get("newunit");
      debugger;
      if(item != null)
      this.itemList.push(item);
    }
  }