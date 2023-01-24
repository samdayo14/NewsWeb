import { Component } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css'],
})
export class TechnewsComponent {
  constructor(private service: NewsapiservicesService) {}
  topTechDisplay: any = [];

  ngOnInit(): void {
    this.service.techNews().subscribe((result) => {
      console.log(result);
      this.topTechDisplay = result.articles;
    });
  }
}
