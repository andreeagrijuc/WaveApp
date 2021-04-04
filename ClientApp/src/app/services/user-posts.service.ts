import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { SortType } from '../constants/SortType';

@Injectable({
  providedIn: 'root'
})
export class UserPostsService {
  private readonly resourceUrl: string = '/PostController';
  private readonly baseUrl: string = environment.server;

  constructor(private http: HttpClient) {
  }
  /*getGetUserPosts(size: number, page: number, sortType: SortType ) {
    this.http.get(`${this.baseUrl}/${this.resourceUrl}`, { params: { pageSize: size, pageNum: page, sortType: sortType } });
  }*/

}
