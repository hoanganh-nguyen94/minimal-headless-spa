import { Component, Input } from '@angular/core';

@Component({
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {
  @Input() text: any;
}
