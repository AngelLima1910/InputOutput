import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  public characters : Character[] = [
    {name : "Goku", power : 20000}
  ];
  public getNewCharacter(character : Character) : void {
    console.log(character);
  }
}
