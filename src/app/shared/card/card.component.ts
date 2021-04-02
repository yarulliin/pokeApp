import {Component, Input, OnInit} from '@angular/core';
import {IPokemon} from '../../utils/interfaces/poke.interfaces';
import {LocalStorageService} from '../../utils/services/local-storage.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() pokemon: IPokemon;

  constructor(private storage: LocalStorageService) { }

  ngOnInit(): void {
  }

  toFav(): void {
    this.storage.setPoke(this.pokemon);
  }
}
