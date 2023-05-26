import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdateCompoundComponent } from '../update-compound/update-compound.component';
import { DeleteCompoundComponent } from '../delete-compound/delete-compound.component';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent {
  compounds:any;
  pageSizeOptions = [5, 10, 25, 100];
  pageIndex = 0;
  size = 10;
  totalRecords:any=0;
  constructor(private http : DataService, public dialog: MatDialog){}
 
  ngOnInit(){
    this.getList();
  }

  getList(){
    this.http.getCompound(this.pageIndex+1,this.size).subscribe((res:any)=>{
      this.compounds = res.data; 
      console.log(res);
      this.totalRecords = res.count;
    })
  }
  
  update(event:any, compound:any){
    this.dialog.open(UpdateCompoundComponent, {
      width: '500px',
      data: compound
    }).afterClosed().subscribe((res:any)=>{
        if(res){
          this.getList();
        }
    });
    event.stopPropagation();
  }

  delete(event:any, compound:any){
    this.dialog.open(DeleteCompoundComponent, {
      width: '500px',
      data: compound
    }).afterClosed().subscribe((res:any)=>{
        console.log("closed")
        this.getList();
    });
    event.stopPropagation();
  }

  handle(e:any){
    console.log(e);
    this.pageIndex=e.pageIndex;
    this.size=e.pageSize;
    this.getList();
  }
  
}
