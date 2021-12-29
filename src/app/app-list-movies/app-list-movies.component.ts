import { coerceNumberProperty } from '@angular/cdk/coercion';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';

@Component({
  selector: 'app-app-list-movies',
  templateUrl: './app-list-movies.component.html',
  styleUrls: ['./app-list-movies.component.css']
})
export class AppListMoviesComponent implements OnInit {
  readonly root_utl = "https://61b9300238f69a0017ce5f02.mockapi.io/";
  readonly root_utl_addMovie = "https://61be51602a1dd4001708a2c3.mockapi.io/shopingCar";
  listProduct:any;
  userId:any;
  listMovies:any;
  countAddMovie:number = 0;
  shopingCar:FormGroup = this.fb.group({
    imgMovie:[null, [Validators.required]],
    idMovie:[null, [Validators.required]],
    generoMovie:[null, [Validators.required]],
    count:[null, [Validators.required]],
    costoTotal:[null, [Validators.required]],
    nameMovie:[null, [Validators.required]],
  });
 
  concatUrl:string='';
  countMovie=0;
  constructor(public http:HttpClient,private router:Router, private ActivatedRoute: ActivatedRoute,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.listMovies = this.http.get(this.root_utl+'pelisss');
  
  }

  loadInformation(id:number){
    let source:Observable<object> =  this.http.get(this.root_utl+'pelisss/'+id);
    forkJoin(source).subscribe( (x)=> this.onLoadMovie(x));
  }
  onLoadMovie(arrayMovie:any){
    this.userId = this.ActivatedRoute.snapshot.paramMap.get('id');
    this.router.navigate(['/profile/'+this.userId +'/movieInfo/'+arrayMovie[0].nombre]);
    console.log(arrayMovie[0]);
 
  }
  addMovie(idMovie:any){
    
    let source:Observable<object> =  this.http.get(this.root_utl+'pelisss/'+idMovie);
    forkJoin(source).subscribe( (x)=> this.createArray(x));

  }
  createArray(arrayShopingCar:any){
    let count:number = 1;
    let countTotal:number = ((arrayShopingCar[0].costo) * count);

    this.shopingCar.controls["imgMovie"].setValue(arrayShopingCar[0].imagen);
    this.shopingCar.controls["idMovie"].setValue(Number(arrayShopingCar[0].id));
    this.shopingCar.controls["generoMovie"].setValue(arrayShopingCar[0].clasificacion);
    this.shopingCar.controls["count"].setValue(count);
    this.shopingCar.controls["costoTotal"].setValue(countTotal);
    this.shopingCar.controls["nameMovie"].setValue(arrayShopingCar[0].nombre);


    this.http.post(this.root_utl_addMovie ,this.shopingCar.value)
               .subscribe(respuesta => {
                this.countAddMovie = this.countAddMovie + 1;
    });
  }
  onShopingCar(){
    this.listProduct = this.ActivatedRoute.snapshot.paramMap.get('listProduct');
    this.router.navigate(['profile/'+this.ActivatedRoute.snapshot.paramMap.get('id')+'/shopingCar/']);
  }
}
