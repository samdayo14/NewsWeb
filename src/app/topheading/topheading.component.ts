import { Component } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css'],
})
export class TopheadingComponent {
  constructor(private services: NewsapiservicesService) {}

  // Display Data
  topHeadingDisplay: any = [];

  ngOnInit(): void {
    this.services.topHeading().subscribe((data) => {
      console.log(data);
      this.topHeadingDisplay = data.articles;
    });
  }
}
