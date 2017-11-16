import { Component } from '@angular/core';
import { ArmyBuilderService } from './../../armybuilderservice';
import { ViewController,NavController, AlertController, NavParams } from 'ionic-angular';



@Component({
    selector: 'page-units',
    templateUrl: 'units.html'
  })
  export class Units{
    constructor(public _viewCtrl: ViewController, public navCtrl: NavController,public _aBService:ArmyBuilderService, public paramsNav: NavParams) {    
    this.abService = _aBService;
    this.unitFaction = paramsNav.get("currentFaction");
    this.unitRole = paramsNav.get("role");
    debugger;
    this.GetIndexUnits(this.unitFaction,this.unitRole);
    }
abService: ArmyBuilderService;
unitToPick;
itemList = [];
unitFaction:number;
unitRole:number;
GetIndexUnits(currentFaction: any,role: number) {
    this.abService.getIndex(currentFaction,role).then(
        res => {
          this.itemList = JSON.parse(res._body);
    
        }
      );
    }
goback(){
   this._viewCtrl.dismiss();
}
updateTotal(unitToAdd:any){
var newunit = {id: unitToAdd.id, name: unitToAdd.name, point: unitToAdd.point,roleId: this.unitRole}
this._viewCtrl.dismiss(newunit);
}
}