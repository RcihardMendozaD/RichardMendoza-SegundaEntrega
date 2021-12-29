import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-app-profile',
  templateUrl: './app-profile.component.html',
  styleUrls: ['./app-profile.component.css']
})
export class AppProfileComponent implements OnInit {
  nombres   = "";
  apellidos = "";
  correo    = "";
  genero    = ""; 
  clave     = "";    
  rol       = "";
  readonly root_utl = "https://61bd1046d8542f0017824af8.mockapi.io/user/";

  constructor(public http:HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let userId=this.route.snapshot.paramMap.get('id');
    let source:Observable<object> =  this.http.get(this.root_utl+userId);
    forkJoin(source).subscribe( (x)=> this.onLoadUser(x));
  }

  onLoadUser(arrayUser:any){

    this.nombres   = arrayUser[0].nombres;
    this.apellidos = arrayUser[0].apellidos;
    this.correo    = arrayUser[0].correo;   
    this.genero    = arrayUser[0].genero;   
    this.clave     = arrayUser[0].clave;    
    this.rol       = arrayUser[0].rol;

    console.log("hola" + this.nombres +', '+ this.apellidos);
 
  }
}
