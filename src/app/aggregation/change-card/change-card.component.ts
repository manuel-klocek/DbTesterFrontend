import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Change, ChangeCards } from '../../interfaces/AggregationTypes';

@Component({
  selector: 'app-change-card',
  templateUrl: './change-card.component.html',
  styleUrls: ['./change-card.component.scss']
})
export class ChangeCardComponent implements OnInit, AfterViewInit {

  @Input() changeCard?: ChangeCards

  constructor() { }

  changeTime?: string
  changes: Change[] = []
  oldLiListLength = 0

  ngOnInit(): void {
    var card = this.changeCard
    var timestamp = new Date(card?.timestamp!)
    this.changeTime = timestamp.toLocaleDateString("de-DE") + " " + timestamp.toLocaleTimeString("de-DE")

    for (let i = 0; i < this.changeCard!.keys.length; i++) {
      this.changes.push({ key: card!.keys[i], value: card!.values[i] })
    }

    this.oldLiListLength = document.getElementsByTagName("li").length
  }

  ngAfterViewInit(): void {
    this.paintChanges()
  }

  paintChanges(): void {
    console.log(this.changeCard)
    var liList = document.getElementsByTagName("li")
    var changedKeys = this.changeCard?.changedKeys
    for (let i = 0; i < liList.length; i++) {
      if (i < this.oldLiListLength) continue

      var element = liList[i].textContent?.toString()
      var content = element?.substring(1, element.length - 1)
      var li: HTMLLIElement
      var nextLi: HTMLLIElement
      if (changedKeys!.includes(content!)) {
        li = liList[i]
        nextLi = liList[(liList.length - this.oldLiListLength) / 2 + i]
        if (nextLi.textContent?.substring(1, nextLi.textContent.length - 1) == "DELETE!") {
          li!.style.color = "red"
          nextLi!.style.color = "red"
        } else {
          li!.style.color = "orange"
          nextLi!.style.color = "orange"
        }
      }
    }
  }
}
