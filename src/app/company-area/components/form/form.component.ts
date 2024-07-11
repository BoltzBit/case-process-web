import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Route, Router, RouterLink, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CompanyAreaHttpService } from '../../services';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CompanyAreaModel } from '../../models';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    CommonModule, 
    ButtonModule, 
    ReactiveFormsModule,
    InputTextModule, 
    RouterOutlet, 
    RouterLink],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit {
    public form!: FormGroup;
    constructor(
        private router: Router,
        private _companyAreaHttpService: CompanyAreaHttpService,
        private formBuilder: FormBuilder
    ){}

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            name: new FormControl<string>("", [Validators.required, Validators.maxLength(150)]),
            description: new FormControl<string>("", [Validators.required, Validators.maxLength(150)])
        });
    }

    public save(){
        console.log(this.form.valid)
        if(this.form.valid){
            let companyArea = this.form.getRawValue() as CompanyAreaModel;
            this._companyAreaHttpService.create(companyArea)
                .subscribe({
                    next: (result) => {
                        if(result){
                            this.router.navigateByUrl('home').then();
                        }
                    }
                });
        }
    }
}
