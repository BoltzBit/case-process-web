import { Routes } from '@angular/router';
import { CompanyAreaComponent } from './company-area/component/company-area.component';
import { FormComponent } from './company-area/components/form/form.component';
import { ProcessComponent } from './company-area/components/process/process.component';

export const routes: Routes = [
    {path: 'home', component: CompanyAreaComponent},
    {path: 'process', component: ProcessComponent},
    {path: 'create', component: FormComponent}
];
