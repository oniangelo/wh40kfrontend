import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';


@Component({
    selector: 'page-newlist',
    templateUrl: 'newlist.html'
  })
  export class NewListPage{
    constructor(public navCtrl: NavController) {    
    }
    itemList = [];

  }