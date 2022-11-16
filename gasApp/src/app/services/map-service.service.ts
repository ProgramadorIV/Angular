import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor() { }

  getLocation(): Promise<any>{
    return new Promise ((resolve, error) => {
      navigator.geolocation.getCurrentPosition(resp => {
        resolve({lng: resp.coords.longitude , lat: resp.coords.latitude});
        error('No estas en el planeta tierra, perro.');
      })
    })
  }
}
