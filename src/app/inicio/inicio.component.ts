import { Component, OnInit } from '@angular/core';
import { BarraSuperiorComponent } from "../barra-superior/barra-superior.component";
import { CatalogoComponent } from "../catalogo/catalogo.component";

@Component({
  selector: 'inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
