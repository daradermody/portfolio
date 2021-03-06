import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-rotating-arrow',
  templateUrl: './rotating-arrow.component.html',
  styleUrls: ['./rotating-arrow.component.css']
})
export class RotatingArrowComponent {
  @ViewChild('tail') tail: ElementRef;
  @ViewChild('stem') stem: ElementRef;
  @ViewChild('head') head: ElementRef;
}
