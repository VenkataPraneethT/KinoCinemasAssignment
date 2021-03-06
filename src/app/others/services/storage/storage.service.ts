import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class StorageService {

  constructor() { }

  save(key, data) {
    sessionStorage.setItem(key, data);
  }

  read(key) {
    const value = sessionStorage.getItem(key);
    return value;
  }

  remove(key) {
    sessionStorage.removeItem(key);
  }

  clear() {
    sessionStorage.clear();
  }

}
