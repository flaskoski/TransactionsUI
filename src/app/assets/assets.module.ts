import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AssetComponent } from './asset/asset.component';
import { AssetListComponent } from './asset-list/asset-list.component';


@NgModule({
    declarations: [AssetComponent, AssetListComponent],
    imports: [
        HttpClientModule,
        CommonModule
    ]
})
export class AssetsModule { }