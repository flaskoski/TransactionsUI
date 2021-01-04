import { NgModule } from '@angular/core';
//for using directives like *ngFor
import { CommonModule } from '@angular/common';

import { PaginationComponent } from './pagination/pagination.component';


@NgModule({
    declarations: [PaginationComponent],
    imports: [CommonModule],
    exports: [PaginationComponent]
})
export class MiscModule { }