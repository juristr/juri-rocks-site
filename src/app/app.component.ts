import { Component, ElementRef } from '@angular/core';

import { GlobalRef } from "./globalRefs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private elementRef: ElementRef, private globalRef: GlobalRef) {
  }

  ngAfterViewInit() {
    var s = this.globalRef.nativeGlobal.createElement("script");
    if(s) {
      s.type = "text/javascript";
      s.src = "//platform.twitter.com/widgets.js";
      this.elementRef.nativeElement.appendChild(s);
    }
  }

}
