import { Component, OnInit } from '@angular/core';
import { StockService } from 'src/app/services/stock.service';
import { branchDetails } from 'src/app/models/branchDetails';

@Component({
  selector: 'app-branchs',
  templateUrl: './branchs.component.html',
  styleUrls: ['./branchs.component.scss']
})
export class BranchsComponent implements OnInit {

  constructor(private stockservice:StockService) { }
  branches:branchDetails[]=[];
  found_branches:boolean=false;
  ngOnInit(): void {
    this.stockservice.GetBranchesByShoe().subscribe((data:branchDetails[])=>{this.branches=data;
    console.log("data of branches= ,", data);});
    if(this.branches.length!=0)
      this.found_branches=true;
  }
}
