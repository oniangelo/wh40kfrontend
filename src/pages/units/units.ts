import { Component } from '@angular/core';
import { ArmyBuilderService } from './../../armybuilderservice';
import { NavController, AlertController, NavParams } from 'ionic-angular';



@Component({
    selector: 'page-units',
    templateUrl: 'units.html'
  })
  export class Units{
    constructor(public navCtrl: NavController,public _aBService:ArmyBuilderService, public paramsNav: NavParams) {    
    this.abService = _aBService;
    var faction = paramsNav.get("currentFaction");
    var warRole = paramsNav.get("role");
    debugger;
    this.GetIndexUnits(faction,warRole);
    }
abService: ArmyBuilderService;
unitToPick;
itemList = [];
GetIndexUnits(currentFaction: any,role: number) {
    this.abService.getIndex(currentFaction,role).then(
        res => {
          debugger;
          this.itemList = JSON.parse(res._body);
    
        }
      );
    }
goback(){
    this.navCtrl.pop();
}
updateTotal(unitToAdd:any){
var newunit = {id: unitToAdd.id, name: unitToAdd.name, point: unitToAdd.point}
this.navCtrl.pop(newunit);
}
}