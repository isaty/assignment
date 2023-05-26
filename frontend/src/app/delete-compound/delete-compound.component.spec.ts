import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCompoundComponent } from './delete-compound.component';

describe('DeleteCompoundComponent', () => {
  let component: DeleteCompoundComponent;
  let fixture: ComponentFixture<DeleteCompoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteCompoundComponent]
    });
    fixture = TestBed.createComponent(DeleteCompoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
