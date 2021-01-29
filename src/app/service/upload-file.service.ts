import { HttpClient, HttpEvent, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/Media' })
  };
@Injectable({
    providedIn: 'root'
  })
  export class UploadFileService {
   
    
    constructor(private http: HttpClient) { }
    
    pushFileToStorage(file: File,id:any): Observable<HttpEvent<{}>> {
      const formdata: FormData = new FormData();
  
      formdata.append('file', file);
  
      const req = new HttpRequest('POST', 'https://traficaccidentreport.herokuapp.com/api/file/upload/' + id, formdata, {
        reportProgress: true,
        responseType: 'text'
      });
  
      return this.http.request(req);
    }
  
    getFiles(imagename : string): Observable<any> {
      return this.http.get('https://traficaccidentreport.herokuapp.com/api/file/' + imagename,{ ...httpOptions, responseType: 'text' });
    }
  }
  