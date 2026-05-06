import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {fromEvent, Observable, Subject, Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @ViewChild('popup') popupEl!: ElementRef<HTMLElement>;

  private pageLoad$ = fromEvent(document, 'DOMContentLoaded');

  constructor(private activatedRoute: ActivatedRoute) {
  }
  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.pageLoad$.subscribe(() => {
      this.popupEl.nativeElement.style.display = 'none';
      setTimeout(() => {
        this.popupEl.nativeElement.style.display = 'block';
      }, 10000)
    })

  }


}
