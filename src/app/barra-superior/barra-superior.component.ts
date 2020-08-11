import { Component, OnInit } from '@angular/core';
import { TiendaService  } from '../tienda.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'barra-superior',
  templateUrl: './barra-superior.component.html',
  styleUrls: ['./barra-superior.component.css']
})
export class BarraSuperiorComponent implements OnInit {

  public user$: Observable<any> = this.authSvc.afAuth.user;
  
  
    constructor(private authSvc: TiendaService, private router: Router) { }
  

  ngOnInit() {  
    
  }

  onLogout() {    
    this.authSvc.logout();
    console.log('click logout');
  }


  
}
