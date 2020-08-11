import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { AngularFireAuth } from 'angularfire2/auth';
import { Producto } from "./product";
import { auth } from "firebase/app";
import { User } from "firebase";
import { Router } from '@angular/router';


@Injectable()

export class TiendaService {

  authState: any = null;
  public user: User;

  carritoArray:any = [];
  compraTotal:number = 0; 
 
  productList: AngularFireList<any>;  
  

  constructor(private firebase: AngularFireDatabase, public afAuth: AngularFireAuth, public router: Router) { }

  
  
login(email:string, password:string){
    try {
      const result = this.afAuth.auth.signInWithEmailAndPassword(email, password);
      return result;
    } catch (error) {

      console.log(error)
    }   
  }

register(email:string, password:string){

    this.afAuth.auth.createUserWithEmailAndPassword(email, password)      
      
     .catch(function(error) {
      console.log(error);
      var errorCode = error.code;
      var errorMessage = error.message;      
      alert('La dirección de correo electrónico ya está registrada.'+ errorMessage)
      
    });
  }

logout(){
    try {
      this.afAuth.auth.signOut()
      this.router.navigate([''])
      this.carritoArray = [];
      this.compraTotal = 0;
    } catch (error) {
      console.log(error)
    }     
  }

getCurrentUser() {
    return this.afAuth.authState;
  }

getProducts() {
    return this.productList = this.firebase.list('productos');
  }
  
updateProduct(productsCarrito){

    for(let i=0; i<productsCarrito.length; i++){
      let index = productsCarrito[i].product.$key;
      let quedan = productsCarrito[i].quedan;
      console.log(index, quedan)
    this.productList.update(index, {
       
       cantidad: quedan,
      
    });
    this.carritoArray = [];
    this.compraTotal = 0;
    
    this.router.navigate(['inicio']);
    console.log('update');
   }
 }

cancelCarrito(){
    this.carritoArray = [];
    this.compraTotal = 0;
}


addProductCarrito( product:any ){
    this.compraTotal = this.compraTotal + product.subtotal;    
    this.carritoArray.push(product);
    this.router.navigate(['inicio']);
  }
  
getProductsCarrito(){
    return this.carritoArray;
  }  
  

}

