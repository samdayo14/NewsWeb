import { Component } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-businessnews',
  templateUrl: './businessnews.component.html',
  styleUrls: ['./businessnews.component.css'],
})
export class BusinessnewsComponent {
  constructor(private service: NewsapiservicesService) {}
  topBusDisplay: any = [];

  ngOnInit(): void {
    this.service.busNews().subscribe((data) => {
      console.log(data);
      this.topBusDisplay = data.articles;
    });
  }
}
