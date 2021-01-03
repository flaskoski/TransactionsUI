import { Component, OnInit } from '@angular/core';
import { Asset } from '../asset/asset';
import { AssetService } from '../asset/asset.service';

@Component({
  selector: 'asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.css']
})
export class AssetListComponent implements OnInit {

  title = 'TransactionsUI';
  assets : Asset[] = [];
  
  //for injecting assetService object
  constructor(private assetService: AssetService){}
  
  //requests
  ngOnInit(): void {
    this.assetService.getAssetsList().subscribe(
      (response : any) => {this.assets = response.content},
      err => console.log(err)
    );

    
  }
}
