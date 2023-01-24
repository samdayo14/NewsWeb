import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsapiservicesService {
  constructor(private http: HttpClient) {}

  newsApiUrl =
    'https://newsapi.org/v2/top-headlines?country=ng&apiKey=1c5e2237fcd342bf86e1cc62c9d23654';

  techApiUrl =
    'https://newsapi.org/v2/top-headlines?country=ng&category=technology&apiKey=1c5e2237fcd342bf86e1cc62c9d23654';

  // Business Api call
  busApiUrl =
    'https://newsapi.org/v2/top-headlines?country=ng&category=business&apiKey=1c5e2237fcd342bf86e1cc62c9d23654';

  // topHeading()
  topHeading(): Observable<any> {
    return this.http.get(this.newsApiUrl);
  }

  // techNews
  techNews(): Observable<any> {
    return this.http.get(this.techApiUrl);
  }

  // Business news
  busNews(): Observable<any> {
    return this.http.get(this.busApiUrl);
  }
}
