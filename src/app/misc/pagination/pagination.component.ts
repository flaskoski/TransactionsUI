import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'common-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

@Input() totalItems : number = 0; 
@Input() pageSize : number = 0;
@Input() currentPage : number = 0;
@Input() totalPages : number = -1;
pages : number[] = [];

  constructor() {
    
  }

  ngOnInit(): void {
    
  }

  ngOnChanges() : void {
    let numPages = 0;
    console.log("totalItems:" + this.totalItems);
    if(this.totalPages < 0){
      numPages = Math.floor(this.totalItems/this.pageSize);
      if(this.totalItems % this.pageSize > 0)
        numPages += 1;
    }
    else numPages = this.totalPages;

    for(let i=0; i<numPages; i++){
      this.pages.push(i+1);
    }
  }

}
