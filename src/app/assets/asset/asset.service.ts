import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({providedIn: 'root'})
export class AssetService{

    constructor(private http: HttpClient){
    }

    getAssetsList(){
        //let apiUrl = 'http://ec2-18-230-195-106.sa-east-1.compute.amazonaws.com';
        let apiUrl = 'http://localhost';
        //rxjs observables
        return this.http.get<Object>(apiUrl+':8080/assets?page=0&size=2');
    }

}