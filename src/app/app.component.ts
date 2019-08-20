import { Component } from '@angular/core';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora';
  var1=0;
  var2=0;
  result =0;
  nombre:string='';

  suma(){

    this.result=this.var1+this.var2;
    
  }

  resta(){

    this.result=this.var1-this.var2;
    

  }

  multiplicacion(){

    this.result=this.var1*this.var2;
   

  }

  division(){
    if(this.var2==0){  
      alert("No se puede dividir entre cero");
    }else{
      
      this.result=(this.var1/this.var2);
    }
  }

  modulo(){

    this.result=this.var1%this.var2;

  }

  reset(){

    this.var1=0;
    this.var2=0;  
    this.result=0;
  }




}
