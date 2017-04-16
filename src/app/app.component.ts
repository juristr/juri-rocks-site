import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  ngAfterViewInit() {
    // let el = this.renderer.createElement('script');
    // el.type = "text/javascript";
    // el.src = "//platform.twitter.com/widgets.js";
    // this.renderer.appendChild(this.elementRef.nativeElement, el);
  }

}
