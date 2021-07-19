import { Component, Input, OnInit } from '@angular/core';
import { Picture } from '../types';

@Component({
  selector: 'picture-card',
  templateUrl: './picture-card.component.html',
  styleUrls: ['./picture-card.component.css']
})
export class PictureCardComponent {

  @Input() picture: Picture = {};

}
