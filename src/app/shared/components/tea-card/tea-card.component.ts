import {Component, Input, OnInit} from '@angular/core';
import {TeaCardType} from "../../../../types/tea.card.type";

@Component({
  selector: 'tea-card-component',
  templateUrl: './tea-card.component.html',
  styleUrls: ['./tea-card.component.scss']
})
export class TeaCardComponent implements OnInit {
  @Input() teaCard: TeaCardType;
  constructor() {

    this.teaCard = {
      id: 0,
      image: '',
      title: '',
      description: ''
    }
  }

  ngOnInit(): void {
  }

}


// import {Component, Input, OnInit} from '@angular/core';
// import {TeaCardType} from "../../types/tea.card.type";
//
// @Component({
//   selector: 'tea-card-component',
//   templateUrl: './tea-card.component.html',
//   styleUrls: ['./tea-card.component.scss']
// })
// export class TeaCardComponent implements OnInit {
//   @Input() teaCard: TeaCardType;
//   constructor() {
//
//     this.teaCard = {
//       id: 0,
//       image: '',
//       title: '',
//       description: ''
//     }
//
//     console.log(this.teaCard)
//   }
//
//   ngOnInit(): void {
//   }
//
// }
