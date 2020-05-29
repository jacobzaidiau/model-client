import { Injectable } from '@angular/core';
import { Model } from './model.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ModelService {
  formData: Model;

  constructor(private http: HttpClient) {}

  createModel() {
    return this.http.post<Model>(environment.apiURL, this.formData).toPromise();
  }

  getModel(id: number) {
    return this.http.get(environment.apiURL + '/' + id).toPromise();
  }

  getModels() {
    return this.http.get(environment.apiURL).toPromise();
  }

  updateModel(id: number) {
    return this.http
      .put(environment.apiURL + '/' + id, this.formData)
      .toPromise();
  }

  deleteModel(id: number) {
    return this.http.delete(environment.apiURL + '/' + id).toPromise();
  }
}
