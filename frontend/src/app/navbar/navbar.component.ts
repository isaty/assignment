import {Component} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateCompoundComponent } from '../create-compound/create-compound.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  
  constructor(private dialog:MatDialog){}
  create(event:any){
    this.dialog.open(CreateCompoundComponent,{
        width: '750px',
    }).afterClosed().subscribe((res:any)=>{
      console.log("closed")
  });
  event.stopPropagation();
  }
}
