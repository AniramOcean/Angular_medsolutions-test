import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../interfaces/Card';
import { HttpClient } from '@angular/common/http';
import { BACKEND_HOST, PREFIX } from '../consts/BackendHost';
import { map} from 'rxjs/operators';
import {Popular} from '../interfaces/Popular';

@Injectable({
  providedIn: 'root'
})
export class CardsApiService {

  populars: Popular[] = [
    {
      id: 713,
      title: '120 дней больничного',
      category: 'Актуальные новости',
      image_url: 'https://medicapp-storage.k8s.mhth.ru/medicapp-public/news/57db32bd3c5d74c1684070cf20a5ee36e0e3fbb3/primary.jpg?1513683487'
    },
    {
      id: 1066,
      title: 'Ученые: У оптимистов сердце вдвое здоровее',
      category: 'Актуальные новости',
      image_url: 'https://medicapp-storage.k8s.mhth.ru/medicapp-public/news/d97bf195341749f37e8521abcf4a61c4d6e1099e/primary.jpg?1591358877'
    },
    {
      id: 1719,
      title: 'Минздраву предлагают наказывать пациентов за пропуск приема лекарств',
      category: 'Актуальные новости',
      image_url: 'https://medicapp-storage.k8s.mhth.ru/medicapp-public/news/01332a2711131ada91c429c85a98c7185697f1ab/primary.jpg?1591275510'
    },
  ];

  constructor(private httpClient: HttpClient) { }

  getAll(pageNumber: number): Observable<Card[]> {
    return this.httpClient.get(`${BACKEND_HOST}${PREFIX}/?page=${pageNumber}&per=4.json`)
      .pipe(map((response: {[key: string]: any}) => {
        return Object
          .keys(response)
          .map(key => {
            return ({
            ...response[key],
            id: response[key].id,
            title: response[key].title
            });
          });
      }));
  }

  getById(id: number): Observable<Card> {
    return this.httpClient.get<Card>(`${BACKEND_HOST}${PREFIX}/${id}.json`)
      .pipe(map((card: Card) => {
        const data = card['data']['news'];
        const category = data['news_category']['title'];
        return {
          ...card, id,
          image_url: data['image_url'],
          title: data['title'],
          created_at: data['created_at'],
          text: data['text'],
          news_category: category,
          teaser: data['teaser'],
          source: data['source']
        };
      }));
  }

  // getSimilar(id: number) {
  //   return this.httpClient.get(`${BACKEND_HOST}${PREFIX}/${id}.similar?page=1&per=3`);
  // }
}
