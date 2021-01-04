import { Component, Input } from '@angular/core';


@Component({
  selector: 'asset',
  templateUrl: './asset.component.html',
  styleUrls: []
})
export class AssetComponent{

    @Input() code='';
    @Input() id = 0;
}