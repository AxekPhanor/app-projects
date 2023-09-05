import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddPageComponent } from './edit-add-page.component';

describe('EditAddPageComponent', () => {
  let component: EditAddPageComponent;
  let fixture: ComponentFixture<EditAddPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditAddPageComponent]
    });
    fixture = TestBed.createComponent(EditAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
