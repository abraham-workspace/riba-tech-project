import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';


export interface ConsultationFormData{
  organization_name?: string;
  full_name:string;
  phone:string;
  email:string;
  project_details:string;
  terms_accepted: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class MailService {
 private apiUrl = 'https://techribabackend.onrender.com/api/v1/consultations';
  constructor(private http: HttpClient) { }

  submitConsultation(data: ConsultationFormData): Observable<any> {
    return this.http.post(`${this.apiUrl}/consult`, data);
  }

}
