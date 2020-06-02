import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe: any = {};

  constructor( private activatedRoute: ActivatedRoute, private _heroesService: HeroesService) {
    this.activatedRoute.paramMap.subscribe(params => {
      console.log(params.get('id'));
      this.heroe =  this._heroesService.getHeroe( params.get('id') );
      console.log(this.heroe);
    });
  }

}
