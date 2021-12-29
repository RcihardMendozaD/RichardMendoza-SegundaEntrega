import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.css']
})
export class AppLoginComponent implements OnInit {

  readonly root_utl = "https://61bd1046d8542f0017824af8.mockapi.io/user";

  //Datos de usuarios 
  userLogin:FormGroup = this.fb.group({
    correo: [null, [Validators.required,Validators.email]],
    clave: [null, [Validators.required]]
  })

  //Variable ID de usuario
  idUser="";

  constructor(private fb:FormBuilder,public http:HttpClient,public router:Router) { }

  ngOnInit(): void {
  }
  
  onLogin(){
    let validateEmail = this.userLogin.get('correo')?.value;
 
    let source:Observable<object> =  this.http.get(this.root_utl+'/?correo='+validateEmail);
    forkJoin(source).subscribe( (x)=> this.onValidateLogin(x))
  }
  onValidateLogin(array:any){
    let email = array[0][0].correo;
    let pass = array[0][0].clave;
    let idUser = array[0][0].id;
    console.log(idUser);
    if(this.userLogin.get('correo')?.value == email && this.userLogin.get('clave')?.value == pass){
      console.log("Entro");
      this.router.navigate(['profile/'+idUser]);
    }else{
      console.log("FAIL");
    }
  }
}
