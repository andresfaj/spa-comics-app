import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  heroes: Heroe[] = [];
  termino: string;

  constructor( private activatedRoute: ActivatedRoute, private _heroesService: HeroesService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe( params => {
      this.termino = params.get('termino');
      this.heroes = this._heroesService.searchHeroes( params.get('termino') );
      console.log(this.heroes);
    });
  }

}
