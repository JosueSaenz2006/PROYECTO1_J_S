import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
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

}
