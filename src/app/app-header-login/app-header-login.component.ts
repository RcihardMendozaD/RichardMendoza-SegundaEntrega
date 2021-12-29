import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ActivatedRoute,Router } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
@Component({
  selector: 'app-app-header-login',
  templateUrl: './app-header-login.component.html',
  styleUrls: ['./app-header-login.component.css']
})
export class AppHeaderLoginComponent implements OnInit {
  readonly root_utl = "https://61bd1046d8542f0017824af8.mockapi.io/user";

  userId:any;
  listProduct:any;
  countMovie:number=0;
  listUser:any;
  constructor(public http:HttpClient, private ActivatedRoute: ActivatedRoute, public router:Router) { }

  ngOnInit(): void {
    this.userId = this.ActivatedRoute.snapshot.paramMap.get('id');
    document.getElementById("moduleAdminUser")?.setAttribute("style","display:none;");
    let userAdmin:Observable<object> =  this.http.get(this.root_utl+'/'+this.userId);
    forkJoin(userAdmin).subscribe( (x)=> this.validateTypeUser(x[0]));
  }
  validateTypeUser(array:any){
    let typeUser:string= array.rol;
    if(typeUser==="admin"){
      document.getElementById("moduleAdminUser")?.setAttribute("style","display:block;");
    }
  }
  onProfile(){
    this.router.navigate(['profile/'+this.userId]);
  }
  onLoadMovies(){
    this.router.navigate(['profile/'+this.userId+'/listMovies/']);
  }
  onAdminUser(){
    this.router.navigate(['profile/'+this.userId+'/listUser/']);
  }
  onShopingCar(){
    this.listProduct = this.ActivatedRoute.snapshot.paramMap.get('listProduct');
    this.router.navigate(['profile/'+this.userId+'/shopingCar/']);
  }
}
