import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { TiendaService  } from '../tienda.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  emailPatter: any = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";

  registerForm = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.pattern(this.emailPatter)]),
    password: new FormControl('',[Validators.required, Validators.minLength(8)]),
  });

  constructor(private authSvc: TiendaService, private router: Router) { }

  ngOnInit(): void {  
  }

  onRegister(){
    if(this.registerForm.valid){
      const {email, password} = this.registerForm.value;    
      this.authSvc.register(email, password);
      alert('Perfecto! "Inicia Sesión" para ingresar a la Tienda!!');
      this.router.navigate([''])

      console.log('Form-Register>', this.registerForm.value);

    }else{
      console.log('Registro No Valido')
    }
   
  }

}
