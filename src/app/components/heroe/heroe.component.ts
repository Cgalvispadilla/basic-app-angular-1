import { Heroe } from "./../shared/interfaces/hero.interface";
import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { HeroesService } from "src/app/services/heroes.service";

@Component({
  selector: "app-heroe",
  templateUrl: "./heroe.component.html",
})
export class HeroeComponent {
  private heroe: Heroe;
  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe(
      (params) => (this.heroe = this._heroesService.getHeroe(params["id"]))
    );}
    regresar(){
      this.router.navigate(['/heroes'])
    }
}
