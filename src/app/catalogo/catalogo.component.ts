import { Component, OnInit } from '@angular/core';
import { Producto } from '../product';
import { TiendaService  } from '../tienda.service';  

@Component({
  selector: 'catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  productList: Producto[];

  private productAgregado:any = [];
  private productCarrito:any;
  private subtotal:number;
  private productDisponibles:any;  

  constructor(public productService: TiendaService) { }

  filtro = '';

  ngOnInit(): void {
    this.productService.getProducts()
      .snapshotChanges()//traer cambios de la basedatos
      .subscribe(item => {
          this.productList = [];
          item.forEach(element =>{
            let x = element.payload.toJSON();
            x["$key"] = element.key;
            this.productList.push(x as Producto);
          });
      });
    

  }

  addProductCarrito(product, unidadesPedidas){

    //badge. bootstrap insignias
    this.productAgregado = document.getElementById('badge').textContent;
    document.getElementById("badge").innerHTML  = String(Number(this.productAgregado) + 1);

    this.subtotal = product.precio * unidadesPedidas;
    this.productDisponibles = product.cantidad - unidadesPedidas;   

    this.productCarrito = {
      product : product,
      cantidad : unidadesPedidas,
      subtotal : this.subtotal,
      quedan: this.productDisponibles      
    }

    this.productService.addProductCarrito(this.productCarrito);
      console.log('agregado al carrito')
      console.log('carrito',this.productCarrito )
  }

}
