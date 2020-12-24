import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

const API_ENDPOINT = "http://localhost:8080/magnoliaAuthor/.rest/delivery/tours";
const IMAGE_BASE = "http://localhost:8080";

@Component({
    selector: 'app-tour-list',
    template: `
        <div class="tour-list">
            <h1>--------</h1>
            <h1>{{ headline }}</h1>
            <div class="tour-list-cards">

                <div class="card" *ngFor="let tour of tours">
                    <img
                            [src]="tour.image"
                            class="card-img-top"
                            alt="..."
                    />
                    <div class="card-body">
                        <h5 class="card-title">{{tour.name}}</h5>
                        <p class="card-text">{{tour.description}}</p>
                    </div>
                </div>

            </div>
            <hr>
        </div>
    `,
    styleUrls: ['./tour-list.component.scss']
})
export class TourListComponent implements OnInit {
    @Input() headline: any;
    @Input() tours: any;

    constructor(private http: HttpClient) {
        this.http = http;
    }

    ngOnInit() {
        this.http.get(API_ENDPOINT).subscribe((data: any) => {
            this.tours = data.results.map(item => ({
                ...item,
                image: IMAGE_BASE + item.image.renditions["480x360"].link
            }));
        });

    }
}
