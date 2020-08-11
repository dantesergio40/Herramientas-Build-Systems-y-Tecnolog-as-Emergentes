import { Component, OnInit } from '@angular/core';
import { TiendaService } from '../tienda.service';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  productsCarrito:any;   

  constructor(public data: TiendaService, private router : Router) { 
    this.productsCarrito = this.data.getProductsCarrito();
     console.log('productsCarrito=>',this.productsCarrito)
     console.log('carrito')   
  }

  ngOnInit(): void {
      
  }

  onActualizar(productsCarrito){    
    this.data.updateProduct(productsCarrito);
  }

  onCancelar(){    
    this.data.cancelCarrito();
    this.router.navigate(['inicio'])
  }

  gotoAtras(){
    console.log("carrito atras");
    this.router.navigate(['inicio'])
  }

}
