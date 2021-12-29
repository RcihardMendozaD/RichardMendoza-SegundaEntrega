import { HttpClient } from '@angular/common/http';
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
  constructor(public http:HttpClient) { }

  ngOnInit(): void {
    let listObser:Observable<Object>=  this.http.get(this.root_utl);
    forkJoin(listObser).subscribe( (x)=> this.onList(x[0]));
  }

  onList(array:any){
    this.listUser=array;
  }
}
