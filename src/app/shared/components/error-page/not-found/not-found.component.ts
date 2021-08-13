import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css'],
})
export class NotFoundComponent {
  @Input() titlePage: string = '404 We are searching for your page...';
  @Input() content: string = '... But we can not find it.';
}
