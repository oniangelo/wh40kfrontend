import { NewListPage } from './../newlist/newlist';
import { Component, ViewChild } from '@angular/core';
import { ArmyBuilderService } from './../../armybuilderservice';
import { NavController, ModalController, NavParams, Nav } from 'ionic-angular';


@Component({
    selector: 'page-factions',
    templateUrl: 'factions.html'
  })
  export class Factions{
    constructor(public navCtrl: NavController,public _aBService:ArmyBuilderService, public _navParams: NavParams) {    
    this.abService = _aBService;    
    }
    abService: ArmyBuilderService;    
    currentFaction = 1; 
    
    
    createNewArmy( factionId: number)
    {
        this.navCtrl.setRoot(NewListPage,{factionId: 1});
    }
    
}