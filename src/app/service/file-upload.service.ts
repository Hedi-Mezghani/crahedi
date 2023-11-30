import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpEvent, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { StorageService } from './storage.service';
import { Cloudinary } from 'cloudinary-core';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private apiUrl = 'http://localhost:8089/api/fileupload';
  private userId: number;

  constructor(private http:HttpClient,private authService: StorageService ) {
    this.userId=0;


  }
    public getHeaders(): HttpHeaders {
      let headers = new HttpHeaders({
        //'Content-Type': 'application/json' ||  'multipart/form-data',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'multipart/form-data',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
        "Authorization": "Bearer " + this.authService.getToken()

      });
      headers = headers.append('Accept', 'application/octet-stream');
      return headers;
    }

    uploadFiles(files: File[],userId: number): Observable<string[]> {
      const formData: FormData = new FormData();

      for (const file of files) {
        formData.append('files', file, file.name);
      }
      formData.append('user_id', userId.toString());
      return this.http.post<string[]>(`${this.apiUrl}/upload`, formData).pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Erreur lors du téléchargement des fichiers:', error);
          return throwError('Erreur lors du téléchargement des fichiers.');
        })
      );
    }


    downloadFile(filename: string): Observable<HttpResponse<Blob>> {

      return this.http.get(`${this.apiUrl}/download/${filename}`, {
        headers:this.getHeaders(),
        responseType: 'blob',

        observe: 'response'
      });
    }



}
