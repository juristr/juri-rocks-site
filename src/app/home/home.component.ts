import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <div class="pure-g">
    <div class="pure-u-1-1 profile">
        <img src="https://pbs.twimg.com/profile_images/758788500443500544/EGhOu1BS.jpg">
        <h1>juri.rocks <i class="em  em-stuck_out_tongue_winking_eye"></i></h1>
        <div>
            <a href="https://twitter.com/juristr" class="twitter-follow-button" data-show-count="true">Follow me on Twitter</a>
        </div>
    </div>
  </div>
  `
})
export class HomeComponent {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  ngAfterViewInit() {
    let el = this.renderer.createElement('script');
    el.type = "text/javascript";
    el.src = "//platform.twitter.com/widgets.js";
    this.renderer.appendChild(this.elementRef.nativeElement, el);
  }

}
