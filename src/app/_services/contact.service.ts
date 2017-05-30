import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactService {

  constructor(private http: Http) { }

  getAllContacts() {
    return new Promise((resolve, reject) => {
      this.http.get('/contact')
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  showContact(id) {
    return new Promise((resolve, reject) => {
        this.http.get('/contact/' + id)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res)
        }, (err) => {
          reject(err);
        });
    });
  }

  saveContact(data) {
    return new Promise((resolve, reject) => {
        this.http.post('contact', data)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  deleteContact(id) {
    return new Promise((resolve, reject) => {
        this.http.delete('/contact/' + id)
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

}
