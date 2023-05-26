import { Component, Inject } from '@angular/core';
import {  MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DataService } from '../data.service'; 
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-delete-compound',
  templateUrl: './delete-compound.component.html',
  styleUrls: ['./delete-compound.component.scss']
})
export class DeleteCompoundComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DeleteCompoundComponent>,
    private http:DataService, 
    private toaster:ToastrService
  ) {}

  deleteCompound(){
    this.http.deleteCompound(this.data.id).subscribe((res:any)=>{
      this.dialogRef.close(true);
      this.toaster.success('Successfully deleted record')
    },
    (err: any) => {
      this.toaster.error('Failed to Delete')
    })
  }
}
