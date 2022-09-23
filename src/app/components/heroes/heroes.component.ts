import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HeroesService } from "../../services/heroes.service";
import { Heroe } from "../shared/interfaces/hero.interface";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
})
export class HeroesComponent implements OnInit {
  private heroes: Heroe[] = [];
  constructor(private _heroesService: HeroesService, private router: Router) {}

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
  }
  verInfoHeroe(idHeroe: number) {
    this.router.navigate(["/heroe", idHeroe]);
  }
}
