import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AllergyView } from '../models/allergy-view';

@Injectable({
  providedIn: 'root'
})
export class AllergiesService {
  private headers: HttpHeaders;
  private accessPointUrl = 'https://localhost:44393/api/Allergies';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }

  public getAllergies() {
    return this.http.get<Array<AllergyView>>(this.accessPointUrl, { headers: this.headers });
  }

  public getAllergy(allergy: AllergyView) {
    return this.http.get(this.accessPointUrl + '/' + allergy.id, {headers: this.headers});
  }

  public createAllergy(allergy: AllergyView) {
    return this.http.post(this.accessPointUrl, allergy , {headers: this.headers});
  }
}
