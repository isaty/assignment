import { Component,Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {  MatDialog,  MatDialogRef,  MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from '../data.service'; 
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-update-compound',
  templateUrl: './update-compound.component.html',
  styleUrls: ['./update-compound.component.scss']
})
export class UpdateCompoundComponent {
  updateForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<UpdateCompoundComponent>,
    private http: DataService,
    private toaster:ToastrService
    ){ }

    ngOnInit() {
      this.updateForm = this.fb.group({
        CompoundName: new FormControl(this.data && this.data.CompoundName ? this.data.CompoundName : '', [
          Validators.required,
        ]),
        CompoundDescription: new FormControl(
          this.data && this.data.CompoundDescription ? this.data.CompoundDescription : '',
          [Validators.required]
        ),
      });
    }
    
    updateCompound(){
      this.http.updateCompound(this.data.id, this.updateForm.value).subscribe((res:any)=>{
        this.dialogRef.close(true);
        this.toaster.success('Updation Successfull');
      },
      (err: any) => {
        this.toaster.error('Updation failed')
      })
    }

}
