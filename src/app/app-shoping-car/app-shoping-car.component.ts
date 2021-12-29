import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';

@Component({
  selector: 'app-app-shoping-car',
  templateUrl: './app-shoping-car.component.html',
  styleUrls: ['./app-shoping-car.component.css']
})
export class AppShopingCarComponent implements OnInit {
  Lista=[ {id:null},
          {imgMovie:null},
          {idMovie:null},
          {generoMovie:null},
          {count:null},
          {costoTotal:null},
          {nameMovie:null},
        ];
  readonly root_utl = "https://61be51602a1dd4001708a2c3.mockapi.io/shopingCar/";

  constructor(public http:HttpClient) { }

  ngOnInit(): void {
    let listObser:Observable<Object>=  this.http.get(this.root_utl);
    forkJoin(listObser).subscribe( (x)=> this.onCargar(x[0]));

  }
  onCargar(arr:any){
    this.Lista= arr;
    console.log(arr.id)
  }
  onDeleteMovie(idMovie:any){
    this.http.delete(this.root_utl+idMovie)
               .subscribe(respuesta => {
      this.ngOnInit();
    });
  }

  editaCountADD(idMovieADD:any,count:any){
    let add:Observable<Object>=  this.http.get(this.root_utl+idMovieADD);
    forkJoin(add).subscribe( (x)=> this.countADD(x[0]));
  }

  countADD(arrayADD:any){
    let idadd = arrayADD.id;
    let add = arrayADD.count;
    const valAdd = arrayADD.costoTotal/add;
    let costoadd = arrayADD.costoTotal;

    let cADD:Observable<Object>=  this.http.put(this.root_utl+idadd,{"count":add+1,"costoTotal":costoadd+valAdd});
    forkJoin(cADD).subscribe( (x)=>  this.ngOnInit());
  }


  editaCountREMOVE(idMovieREMOVE:any,count:any){
    let remove:Observable<Object>=  this.http.get(this.root_utl+idMovieREMOVE);
    forkJoin(remove).subscribe( (x)=> this.countREMOVE(x[0]));
  }

  countREMOVE(arrayREMOVE:any){
    let idremove = arrayREMOVE.id;
    let remove = arrayREMOVE.count;
    const valRemove = arrayREMOVE.costoTotal/remove;
    let costoremove = arrayREMOVE.costoTotal;

    let cREMOVE:Observable<Object>=  this.http.put(this.root_utl+idremove,{"count":remove-1,"costoTotal":costoremove-valRemove});
    forkJoin(cREMOVE).subscribe( (x)=>  this.ngOnInit());
    if(remove==1){
      this.onDeleteMovie(idremove);

    }
  }
}
