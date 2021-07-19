import { Component, OnInit } from '@angular/core';
import { Picture } from '../types';

@Component({
  selector: 'pictures-list',
  templateUrl: './pictures-list.component.html',
  styleUrls: ['./pictures-list.component.css']
})
export class PicturesListComponent implements OnInit {

  pictures: Picture[] = [];

  constructor() { }

  ngOnInit(): void {
    this.pictures = [
      {name:"Mi amada hija", tags:["hija","ana"]},
      {name:"Mi amado esposo", tags:["familia"]},
      {name:"Mi mom"},
      {name:"Mi hermana"},
      {name:"Mi padre"}
    ];
  }

}
