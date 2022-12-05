import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {

  constructor(private router: Router) { }
numero:any;
nombre_variable:number=0;
suma:number=0;
suma2:number=0;
vector: string[] = [];

  ngOnInit(): void {
  this.numero=10;
  this.vector=
  [

  ];
  this.total();
  }

  navegacion(){
    this.router.navigate([''])
  }
  navegacion1(){
    this.router.navigate(['web2'])
  }
  navegacion2(){
    this.router.navigate(['web3'])
  }
  navegacion3(){
    this.router.navigate(['web4'])
  }
  navegacion4(){
    this.router.navigate(['web5'])
  }
  navegacion5(){
    this.router.navigate(['web6'])
  }
  
  total()
  {
    let numero1:number=0;
    let numero2:number=2;

    this.suma= numero1+numero2;
    console.log(this.suma);

    this.suma=this.suma+5;
    console.log(this.suma);

    this.total2(this.suma)

  }
  total2(sum:number)
  {
   console.log(sum*2);
  }

}
