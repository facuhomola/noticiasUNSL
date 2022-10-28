import { Injectable } from "@angular/core";
import {HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})

export class AppService {
    URL = environment.baseUrl;
    constructor(private http:HttpClient){}

    getPosts(): Observable<any[]> {
        return this.http.get<any[]>('http://www.noticias.unsl.edu.ar/wp-json/wp/v2/posts?_fields=date_gmt,id,excerpt,title,link,categories', {
            params: {
                per_page: '10'
            }
        });
    }
    getPost(): Observable<any[]> {
        return this.http.get<any[]>('http://www.noticias.unsl.edu.ar/wp-json/wp/v2/posts?_embed', {
            params: {
                per_page: '10'
            }
        });
    }
    getDestacados(): Observable<any[]> {
        return this.http.get<any[]>('http://www.noticias.unsl.edu.ar/wp-json/wp/v2/posts?_fields=', {
            params: {
                per_page: '10'
            }
        });
    }
    getEntrada(): Observable<any[]> {
        return this.http.get<any[]>('http://www.noticias.unsl.edu.ar/wp-json/wp/v2/posts?_embed', {
            params: {
                per_page: '10'
            }
        });
    }
    getAgenda(): Observable<any[]> {
        return this.http.get<any[]>('http://www.noticias.unsl.edu.ar/wp-json/wp/v2/posts?_embed', {
            params: {
                per_page: '10'
            }
        });
    }
    getEtiquetas(): Observable<any[]> {
        return this.http.get<any[]>('http://www.noticias.unsl.edu.ar/wp-json/wp/v2/posts?_embed', {
            params: {
                per_page: '10'
            }
        });
    }
    getLaboratorios(): Observable<any[]> {
        return this.http.get<any[]>('http://www.noticias.unsl.edu.ar/wp-json/wp/v2/posts?_embed', {
            params: {
                per_page: '10'
            }
        });
    }
    
}