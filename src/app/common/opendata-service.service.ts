import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class OpendataService {
    constructor(private _http: HttpClient){}

    getOpenDataRoot(): Observable<IOpenDataRoot>{
        return this._http.get<IOpenDataRoot>("http://datasets.antwerpen.be/v4/gis/fitnesszaaldetail.json")
    }
}

export interface IPaging {
    records: number;
    pages: number;
    pageCurrent: number;
    pageNext?: any;
    pagePrev?: any;
    pageSize: number;
}

export interface IDatum {
    id: string;
    point_lat: string;
    point_lng: string;
    thema: string;
    type: string;
    subtype: string;
    naam: string;
    straatnaam: string;
    huisnummer: string;
    postcode: string;
    district: string;
    laagste_niveau?: any;
    hoogste_niveau?: any;
    grondoppervlakte?: any;
    x_coordinaat: string;
    y_coordinaat: string;
    shape?: any;
    objectid: number;
}

export interface IOpenDataRoot {
    paging: IPaging;
    data: IDatum[];
}