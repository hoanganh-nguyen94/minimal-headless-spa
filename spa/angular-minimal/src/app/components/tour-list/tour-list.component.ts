import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-tour-list',
    template: `
        <div>
            <h1>{{ headline }}</h1>
        </div>
    `,
    styleUrls: ['./tour-list.component.scss']
})
export class TourListComponent implements OnInit {
    @Input() headline: any;

    constructor() {
    }

    ngOnInit() {
    }

}
