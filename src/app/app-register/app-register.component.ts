import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { formatDate } from '@angular/common';
import {MatDialog} from '@angular/material/dialog';
import { forkJoin, Observable, of } from 'rxjs';
import { ArrayType, isEmptyExpression } from '@angular/compiler';

@Component({
  selector: 'app-app-register',
  templateUrl: './app-register.component.html',
  styleUrls: ['./app-register.component.css']
})
export class AppRegisterComponent implements OnInit {
  //Obtener API de Usuarios
  readonly root_utl = "https://61bd1046d8542f0017824af8.mockapi.io/user";

  //Datos de usuarios 
  userRegister:FormGroup = this.fb.group({
    nombres: [null, [Validators.required]],
    apellidos: [null, [Validators.required]],
    correo: [null, [Validators.required,Validators.email]],
    genero: [null, [Validators.required]],
    clave: [null, [Validators.required]],
    claveConfirmacion: [null, [Validators.required]],
    rol:"user",
    fecha:formatDate(Date.now(), 'dd-MM-yyyy', 'en-US', '+0530'),
  })

  //Estado de correo registrado
  statusEamil:number=0;

  constructor(private fb:FormBuilder,public http:HttpClient,public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  //Registrar usuario
  onRegister(){
    let validateEmail = this.userRegister.get('correo')?.value;
 
    let source:Observable<object> =  this.http.get(this.root_utl+'/?correo='+validateEmail);
    forkJoin(source).subscribe( (x)=> this.onValidateOneEmail(x))
  }
  

  //Validaremos que correo no exista
  onValidateOneEmail(array:any){
 
    if(array[0][0]===undefined){
      this.statusEamil=0;
    }else{
      this.statusEamil=1;
    }
    this.onInsert();
  }

  onInsert(){
    let pass = this.userRegister.get('clave')?.value;
    let passConfirm = this.userRegister.get('claveConfirmacion')?.value;

    if(pass === passConfirm && this.statusEamil===0){
      this.http.post(this.root_utl ,this.userRegister.value)
               .subscribe(respuesta => {
      this.userRegister.reset()
      this.openDialog();
    });
    }else{
      this.userRegister.get('clave')?.reset();
      this.userRegister.get('claveConfirmacion')?.reset();
      this.DiaglogFail();
    }

  }

  //Modal confirmación
  openDialog() {
    const dialogRef = this.dialog.open(DiaglogConfrimation);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  //Modal fails
  DiaglogFail() {
    const dialogRef = this.dialog.open(DiaglogFail);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}


@Component({
  selector: '../app-app-dialog-confirmation',
  templateUrl: '../app-dialog-confirmation/app-dialog-confirmation.component.html',
  styleUrls: ['../app-dialog-confirmation/app-dialog-confirmation.component.css']
})
export class DiaglogConfrimation {}


@Component({
  selector: '../app-app-dialog-fail',
  templateUrl: '../app-dialog-fail/app-dialog-fail.component.html',
  styleUrls: ['../app-dialog-fail/app-dialog-fail.component.css']
})
export class DiaglogFail {}
