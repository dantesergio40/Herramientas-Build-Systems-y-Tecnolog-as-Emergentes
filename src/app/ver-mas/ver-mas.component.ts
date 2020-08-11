import { Component, OnInit } from '@angular/core';
import { TiendaService } from '../tienda.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../product';

@Component({
  selector: 'app-ver-mas',
  templateUrl: './ver-mas.component.html',
  styleUrls: ['./ver-mas.component.css']
})
export class VerMasComponent implements OnInit {
  
  product: Producto[];
  keyProducto:any = undefined;

  constructor(private data :TiendaService, private activatedRoute : ActivatedRoute, private router : Router) { 
    this.keyProducto = this.activatedRoute.snapshot.params['$key'];  
  }

  ngOnInit(): void {
    this.data.getProducts()
    .snapshotChanges()//traer cambios de la basedatos
    .subscribe(item => {
        this.product = [];
        item.forEach(element =>{
          let x = element.payload.toJSON();          
          if(element.key == this.keyProducto){
          this.product.push(x as Producto);
          }
          
        });
    });
    
  }

  gotoBack(){
    console.log("verMas atras");
    this.router.navigate(['inicio'])
  }

}
