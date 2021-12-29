import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ActivatedRoute,Router } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';

@Component({
  selector: 'app-app-movie-info',
  templateUrl: './app-movie-info.component.html',
  styleUrls: ['./app-movie-info.component.css']
})
export class AppMovieInfoComponent implements OnInit {
  userId:any;
  movieId:any;
  nombre   = "";
  detalle = "";
  director    = "";
  clasificacion    = ""; 
  imagen     = "";    
  costo       = "";
  readonly root_utl = "https://61b9300238f69a0017ce5f02.mockapi.io/pelisss/?nombre=";

  constructor(public http:HttpClient, private ActivatedRoute: ActivatedRoute, public router:Router) { }
  
  ngOnInit(): void {
    this.movieId = this.ActivatedRoute.snapshot.paramMap.get('name');
    console.log(this.movieId)
    console.log(this.root_utl + this.movieId)
    let source:Observable<object> =  this.http.get(this.root_utl + this.movieId);
    forkJoin(source).subscribe( (x)=> this.onUpdateMovieInfo(x));
  }

  onUpdateMovieInfo(arrayMovieInfo:any){
    this.nombre   = arrayMovieInfo[0][0].nombre;
    this.detalle = arrayMovieInfo[0][0].detalle;
    this.director    = arrayMovieInfo[0][0].director;   
    this.clasificacion    = arrayMovieInfo[0][0].clasificacion;   
    this.imagen     = arrayMovieInfo[0][0].imagen;    
    this.costo       = arrayMovieInfo[0][0].costo;


  }
}
