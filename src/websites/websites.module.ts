import {WebsitesHome} from './websites.component';
import {SharedModule} from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet';
import { CommonModule } from '@angular/common';
const appRoutes = [
    {
        path: '', component: WebsitesHome
    },
];

@NgModule({
    declarations: [
        WebsitesHome,
    ],
    entryComponents: [
      WebsitesHome,
    ],
    imports: [ 
      CommonModule,
      SpreadsheetAllModule,
        SharedModule,
        RouterModule.forChild(appRoutes),
    ],
})
export class WebsitesModule {
}