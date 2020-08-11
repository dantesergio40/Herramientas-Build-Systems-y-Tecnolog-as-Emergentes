import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { User } from "firebase";
import { FormGroup, FormControl } from "@angular/forms";
import { TiendaService  } from '../tienda.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {  
  
  public isLogged = false;

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private authSvc: TiendaService, public afAuth: AngularFireAuth, private router: Router) { }
 
  errorLogin:boolean = false;

  ngOnInit(): void {
    
  }
  onLogin() {
    const {email, password} = this.loginForm.value;
    this.authSvc.login(email, password).then(()=>{
      this.router.navigateByUrl('inicio');
    })
    .catch((error) => {
      var errorMessage = error.message;
      var errorCode = error.code;
      this.errorLogin = true;
      if(errorCode == "auth/user-not-found"){
        alert("Usuario NO Registrado. Pudo haber sido eliminado")
      }else if(errorCode == "auth/wrong-password"){
        alert("La contraseña es Inválida")
      }else if(errorCode == "auth/invalid-email"){
        alert("formato de email incorrecto")
      };
      //alert(errorMessage)
      console.log(error)
    })

  };
   
}
 