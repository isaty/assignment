import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCompoundComponent } from './create-compound.component';

describe('CreateCompoundComponent', () => {
  let component: CreateCompoundComponent;
  let fixture: ComponentFixture<CreateCompoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateCompoundComponent]
    });
    fixture = TestBed.createComponent(CreateCompoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
