import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Municipality } from '../interfaces/municipality';
import fetch from 'node-fetch';
import { parseString } from 'xml2js';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'text/xml' })
};
@Injectable({
  providedIn: 'root'
})
export class MunicipalitiesService {

  constructor(private http: HttpClient) { }

getMunicipalitiesByProvince(provinceId: String): Observable<Municipality []>{
    return this.http.get<Municipality[]>(`https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/Listados/MunicipiosPorProvincia/${provinceId}`)
  }


/*
  getMunicipalitiesByProvince(provinceId: String): Observable<Municipality []>{
    return this.http.get<Municipality[]>(
      `https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/Listados/MunicipiosPorProvincia/${provinceId}`,
      {
        responseType: 'text'
      }
      ).pipe(switchMap(async (xml) => await this.parseXmlToJson(xml)))
  }
  async parseXmlToJson(xml: string) {
    // With parser
     const parser = new xml2js.Parser({ explicitArray: false });
    parser
      .parseStringPromise(xml)
      .then(function(result) {
        console.log(result);
        console.log("Done");
      })
      .catch(function(err) {
        // Failed
      });

    // Without parser
    return await xml2js
      .parseStringPromise(xml, { explicitArray: false })
  }
/*

  getAllMunicipalities(provinceId: string){

    const data = fetch(`https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/Listados/MunicipiosPorProvincia/${provinceId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'text/xml'
      }
    }).then(responseText => {
      var xmlData = responseText;
      parseString(xmlData, function(err, result){
        return JSON.stringify(result);

      });

    }).catch(error => console.log(error));

    return this.http.get<Municipality []>(
      `https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/Listados/MunicipiosPorProvincia/${provinceId}`,
      httpOptions)

  }

  get(provinceId: string): Observable<Municipality []>{
    let data = fetch(`https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/Listados/MunicipiosPorProvincia/${provinceId}`).then(data => {
      return data.json();});
    return this.http.get<Municipality []>(data);
  }


*/


}
