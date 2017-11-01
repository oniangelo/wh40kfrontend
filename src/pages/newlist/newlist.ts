import { Component } from '@angular/core';
import { ArmyBuilderService } from './../../armybuilderservice';
import { NavController, AlertController } from 'ionic-angular';


@Component({
    selector: 'page-newlist',
    templateUrl: 'newlist.html'
  })
  export class NewListPage{
    constructor(public navCtrl: NavController,public _aBService:ArmyBuilderService) {    
    this.abService = _aBService;
    }
    abService: ArmyBuilderService;
    itemList = [];
    currentFaction = 1;
    addUnit(role: number)
    {
        this.abService.getIndex(this.currentFaction,role);
    }
  }