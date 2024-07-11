import { Routes } from '@angular/router';
import { CompanyAreaComponent } from './company-area/component/company-area.component';
import { FormComponent } from './company-area/components/form/form.component';

export const routes: Routes = [
    {path: 'home', component: CompanyAreaComponent},
    {path: 'create', component: FormComponent}
];
