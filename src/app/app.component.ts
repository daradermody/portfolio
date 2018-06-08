import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { RotatingArrowComponent } from './rotating-arrow/rotating-arrow.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('perspectiveWrap') public perspectiveWrap: ElementRef;
  @ViewChild(RotatingArrowComponent) public rotatingArrows: RotatingArrowComponent;

  private readonly rotationStopPoint = window.innerHeight / 3;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.renderer.listen(this.perspectiveWrap.nativeElement, 'scroll', this.rotateComponents.bind(this));
  }

  rotateComponents() {
    this.rotateElement(this.rotatingArrows.tail, true);
    this.rotateElement(this.rotatingArrows.stem, false);
    this.rotateElement(this.rotatingArrows.head, true);
  }

  private rotateElement(element: ElementRef, clockwise: boolean) {
    const offset = element.nativeElement.getBoundingClientRect().top - this.rotationStopPoint;
    let theta = (offset > 0) ? offset / 1000 % Math.PI : 0;
    if (!clockwise) {
      theta *= -1;
    }
    element.nativeElement.style.transform = `rotate(${theta}rad)`;
  }
}
