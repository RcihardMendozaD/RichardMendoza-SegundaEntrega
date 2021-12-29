import { HttpClient } from '@angular/common/http';
import { devOnlyGuardedExpression } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';

@Component({
  selector: 'app-app-admin-user',
  templateUrl: './app-admin-user.component.html',
  styleUrls: ['./app-admin-user.component.css']
})
export class AppAdminUserComponent implements OnInit {
  readonly root_utl = "https://61bd1046d8542f0017824af8.mockapi.io/user/";
  listUser:any;

  //usuario edit
  valId:any;
  valNombres:String="";
  valApellidos:String="";
  valCorreo:String="";
  valPerfil:String="";

  //usuario Info
  tbNombres:String="";
  tbApellidos:String="";
  tbCorreo:String="";
  tbPerfil:String="";
  tbGenero:String="";
  tbClave:String="";

  constructor(public http:HttpClient) { }

  ngOnInit(): void {
    let listObser:Observable<Object>=  this.http.get(this.root_utl);
    forkJoin(listObser).subscribe( (x)=> this.onList(x[0]));
  }

  onList(array:any){
    this.listUser=array;
  }

  onEdit(id:number){
    let add:Observable<Object>=  this.http.get(this.root_utl+id);
    forkJoin(add).subscribe( (x)=> this.loadEdit(x[0]));
  }
  loadEdit(arrayEditUser:any){
    console.log(arrayEditUser)
    this.valId=arrayEditUser.id;
    this.valNombres=arrayEditUser.nombres;
    this.valApellidos=arrayEditUser.apellidos;
    this.valCorreo=arrayEditUser.correo;
    this.valPerfil=arrayEditUser.rol;
  }

  onUpdate(id:number){
    let nombres= ((document.getElementById("inputNombres") as HTMLInputElement).value);
    let apellidos = ((document.getElementById("inputApellidos") as HTMLInputElement).value);
    let rol = ((document.getElementById("inputPerfil") as HTMLInputElement).value);

    let userUpdate:Observable<Object>=  this.http.put(this.root_utl+id,
      {
        "apellidos": apellidos,
        "nombres": nombres,
        "rol": rol,
      });
    forkJoin(userUpdate).subscribe( (x)=>  this.closeModal());

  }
  closeModal(){
    document.getElementById("exampleModal")?.setAttribute("style","display:none;");
    document.getElementsByClassName("modal-backdrop fade show")[0]?.setAttribute("style","display:none;");
    this.ngOnInit();
  }
  

  onInfo(id:number){
    let add:Observable<Object>=  this.http.get(this.root_utl+id);
    forkJoin(add).subscribe( (x)=> this.loadList(x[0]));
  }
  loadList(arrayLoadUser:any){
    console.log(arrayLoadUser)
    this.tbNombres=arrayLoadUser.nombres;
    this.tbApellidos=arrayLoadUser.apellidos;
    this.tbCorreo=arrayLoadUser.correo;
    this.tbPerfil=arrayLoadUser.rol;
    this.tbGenero=arrayLoadUser.genero;
    this.tbClave=arrayLoadUser.clave;
  }



  onDelete(id:number){
    this.http.delete(this.root_utl+id)
    .subscribe(respuesta => {this.ngOnInit()});
  }
}
