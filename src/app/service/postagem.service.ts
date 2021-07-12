import { Observable } from 'rxjs';
import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllPostagens(): Observable<Postagem[]>{
    return this.http.get<Postagem[]>('https://backendblogpessoal.herokuapp.com/postagens', this.token)
  }

  postPostagem(postagem: Postagem) : Observable<Postagem>{
    console.log(this.token)
    return this.http.post<Postagem>('https://backendblogpessoal.herokuapp.com/postagens', postagem, this.token)
  }

  getByIdPostagem(id: number): Observable<Postagem>{
    return this.http.get<Postagem>(`https://backendblogpessoal.herokuapp.com/postagens/${id}`, this.token)
  }

  putPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.put<Postagem>('https://backendblogpessoal.herokuapp.com/postagens', postagem, this.token)
  }

  deletePostagem(id: number){
    return this.http.delete(`https://backendblogpessoal.herokuapp.com/postagens/${id}`, this.token)
  }

} 