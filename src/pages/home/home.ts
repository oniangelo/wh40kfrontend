import { FileSystem, FileReader, File } from '@ionic-native/file';
import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

//import {SQLite,SQLiteObject, SQLiteDatabaseConfig } from '@ionic-native/sqlite';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage{
  constructor(public navCtrl: NavController, public alertController: AlertController) {
  
  }
}
// export class HomePage {
//   constructor(public navCtrl: NavController,private sqlite: SQLite, public alertController: AlertController) {
// sqlite.create({
//   name: 'ArmyList.sqlite',
//   location: 'default',
//   createFromLocation:1
// })
//  .then((db: SQLiteObject) => {
//      let alert2 = this.alertController.create({
//       title: 'New Friend!',
//       subTitle: "success",
//       buttons: ['OK']
//     });
//     alert2.present();

//     db.executeSql('select * from Units', {})
//       .then(() => console.log('Executed SQL'))
//       .catch(e =>{
//          let alert = this.alertController.create({
//       title: 'non trovato!',
//       subTitle: e,
//       buttons: ['OK']
//     });
//     alert.present();
//       console.log("dono qui");
//       console.log(e);
//       } 
      
//       );


//   })
//   .catch(e =>{
//      let alert1 = alertController.create({
//       title: 'non funziona!',
//       subTitle: e,
//       buttons: ['OK']
//     });
//     alert1.present();
//   console.log("sono qui 1"); 
//   console.log(e);
// });

//   }


// }



