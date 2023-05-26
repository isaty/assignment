import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-compound',
  templateUrl: './compound.component.html',
  styleUrls: ['./compound.component.scss']
})
export class CompoundComponent {
  compound:any;
  constructor(private http: DataService, private route:ActivatedRoute){}

  ngOnInit() {
    const compoundId = this.route.snapshot.paramMap.get('id');
    this.http.getCompoundById(compoundId).subscribe((res:any)=>{
      this.compound = res;
    })
  }
}
