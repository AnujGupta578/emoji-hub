import { HttpClient } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class EmojisService {
  constructor(private http: HttpClient) {
  }


  getAllEmojis(): Observable<any> {
    return this.http.get('https://emojihub.yurace.pro/api/all');
  }
}