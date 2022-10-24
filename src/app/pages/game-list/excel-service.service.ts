import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Game } from './game';

@Injectable({
  providedIn: 'root',
})
export class ExcelService {
  constructor(private http: HttpClient) {}

  public getGames(): Observable<Array<Game>> {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/1SAB2xMqmlLpS7gTSb39DCO0I44RktNmHXFJ3K55APzs/values/R1C1:R30C14?alt=json&key=AIzaSyDzVF5lB-ihgYJ7K2s7-mfFWiD0UeWpPTs`;

    return this.http.get(url).pipe(
      map((res: any) => {
        const data = res.values.slice(1);

        const returnArray: Array<Game> = [];
        if (data && data.length > 0) {
          data.forEach((entry: any) => {
            returnArray.push({
              Id: entry[0],
              Title: entry[1],
              Info: entry[2],
              Video: entry[3],
              Audio: entry[4],
              SeriesXInfo: entry[5],
              SeriesSInfo: entry[6],
              OneInfo: entry[7],
              OneXInfo: entry[8],
              SeriesXModes: entry[9],
              SeriesSModes: entry[10],
              OneModes: entry[11],
              OneXModes: entry[12],
              Img: entry[13],
            });
          });
        }
        return returnArray;
      })
    );
  }
}
