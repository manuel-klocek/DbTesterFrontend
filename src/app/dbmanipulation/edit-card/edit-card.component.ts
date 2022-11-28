import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.scss']
})
export class EditCardComponent implements OnInit {

  @Input() object: Object = {}

  keys: string[] = []

  constructor() { }

  ngOnInit(): void {
    this.keys = Object.keys(this.object)


    var key: string = this.keys[0]
    console.log(key)
    var something = Object.assign(this.object)
    console.log(something[key])

  }
}
