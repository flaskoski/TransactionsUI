import { Component, OnInit } from '@angular/core';
import { Asset } from '../asset/asset';
import { AssetService } from '../asset/asset.service';

@Component({
  selector: 'asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.css']
})
export class AssetListComponent implements OnInit {

  totalPages: number = 0;
  title = 'TransactionsUI';
  assets : Asset[] = [];
  totalItems = 0;
  pageSize = 0;
  currentPage = 0;
  
  //for injecting assetService object
  constructor(private assetService: AssetService){}
  
  //requests
  ngOnInit(): void {
    this.assetService.getAssetsList().subscribe(
      (response : any) => {
        this.assets = response.content
        this.totalItems = response.totalElements;
        this.pageSize = response.numberOfElements;
        this.currentPage = response.pageNumber;
        this.totalPages = response.totalPages;
      },
      err => console.log(err)
    );


  }
}
