import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-compound',
  templateUrl: './create-compound.component.html',
  styleUrls: ['./create-compound.component.scss']
})
export class CreateCompoundComponent {
  createForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CreateCompoundComponent>,
    private http:DataService, 
    private toaster:ToastrService
  ) {}

  ngOnInit() {
    this.createForm = this.fb.group({
      CompoundName: new FormControl('',[Validators.required]),
      CompoundDescription: new FormControl('',[Validators.required]),
      strImageSource: new FormControl('',[Validators.required])
    });
  }

  create(){
    this.http.createCompound(this.createForm.value).subscribe((res:any)=>{
      this.dialogRef.close(true);
      this.toaster.success("Record Inserted Successfully");
    },
    (err: any) => {
     this.toaster.error('Failed to insert record')
    })
  }
}
