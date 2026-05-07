import {AfterViewInit, Component, ElementRef, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {fromEvent, Observable, Subject, Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit {

  @ViewChild('popup')
  popup!: TemplateRef<ElementRef>;

  private pageLoad$ = fromEvent(document, 'DOMContentLoaded');

  constructor(private activatedRoute: ActivatedRoute, private modalService: NgbModal) {
  }
  ngOnInit(): void {
  }

  // ngAfterViewInit() {
  //   this.pageLoad$.subscribe(() => {
  //     setTimeout(() => {
  //       this.modalService.open(this.popup, {
  //         backdrop: false,
  //         windowClass: 'my-custom-modal-window',
  //       });
  //     }, 10000)
  //   })
  // }
  closePopup() {
    this.modalService.dismissAll();
  }
}
