import { Component, OnInit } from '@angular/core';
import { CompanyAreaHttpService } from '../services';
import { Observable } from 'rxjs';
import { CompanyAreaModel } from '../models';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-company-area',
  standalone: true,
  imports: [CommonModule, 
    FormsModule, 
    ButtonModule,
    ToggleButtonModule, 
    RouterOutlet, 
    RouterLink],
  templateUrl: './company-area.component.html',
  styleUrl: './company-area.component.scss'
})
export class CompanyAreaComponent implements OnInit {
    public companyAreas$: Observable<Array<CompanyAreaModel>> = new Observable<Array<CompanyAreaModel>>();

    constructor(private _companyAreaHttpService: CompanyAreaHttpService){
    }

    ngOnInit(): void {
        this.companyAreas$ = this._companyAreaHttpService
            .getAll();
    }

    public createCompany(): void {
        
    }
}
