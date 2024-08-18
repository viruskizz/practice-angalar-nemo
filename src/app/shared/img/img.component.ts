import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html'
})
export class ImgComponent {
  @Input() imgUrl = 'https://icrier.org/wp-content/uploads/2022/10/media-Event-Image-Not-Found.jpg';
}
