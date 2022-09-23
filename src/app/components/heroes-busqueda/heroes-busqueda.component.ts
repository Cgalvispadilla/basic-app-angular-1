import { HeroesService } from 'src/app/services/heroes.service';
import { Heroe } from './../shared/interfaces/hero.interface';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-heroes-busqueda',
  templateUrl: './heroes-busqueda.component.html'
})
export class HeroesBusquedaComponent implements OnInit {
   heroes: Heroe[] = [];
   paramsBusqueda: string= '';
  constructor(private activatedRoute:ActivatedRoute, private heroesService:HeroesService  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.heroes = this.heroesService.buscarHeroes(params['termino']);
    })
    this.activatedRoute.params.subscribe(params => this.paramsBusqueda = params['termino']);
  }


}
