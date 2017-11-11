import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs';

@Injectable()
export class ArmyBuilderService 
{
    constructor(private http: Http) { 
    }
    
    getIndex(factionId: number,roleId?: number):Promise<any> {
        return this.http.get('http://localhost:3000/api/getArmyIndex/'+factionId+'/role/'+roleId).toPromise();
       
        // return this.http.get('https://wh40kapi.herokuapp.com/api/getArmyIndex/'+factionId+'/role/'+roleId).toPromise();
    }        
    pointCounter: number = 0;
}

