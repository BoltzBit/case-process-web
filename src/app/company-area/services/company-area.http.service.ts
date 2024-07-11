import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CompanyAreaModel } from "../models";

@Injectable({
    providedIn: 'root'
})
export class CompanyAreaHttpService {
    private _baseUrl = 'http://localhost:5022';
    constructor(private _httpService: HttpClient) {
    }

    public getAll() : Observable<Array<CompanyAreaModel>>{
        return this._httpService.get<Array<CompanyAreaModel>>(`${this._baseUrl}/company-area`);
    }

    public create(companyArea: CompanyAreaModel) : Observable<any>{
        return this._httpService.post<CompanyAreaModel>(`${this._baseUrl}/company-area`, companyArea);
    }
}