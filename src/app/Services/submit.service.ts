import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form } from '../Modal/form';

@Injectable({
  providedIn: 'root'
})
export class SubmitService {
  constructor(private http: HttpClient) {}

  SubmitForm(form: Form) {
    this.http.post<any>('https://fi-sabilillah-72636-default-rtdb.firebaseio.com/users.json', form)
      .subscribe((response) => {
        console.log(response);
      });
  }
}
