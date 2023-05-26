import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCompoundComponent } from './update-compound.component';

describe('UpdateCompoundComponent', () => {
  let component: UpdateCompoundComponent;
  let fixture: ComponentFixture<UpdateCompoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateCompoundComponent]
    });
    fixture = TestBed.createComponent(UpdateCompoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
