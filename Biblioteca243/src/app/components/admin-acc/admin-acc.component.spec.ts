import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAccComponent } from './admin-acc.component';

describe('AdminAccComponent', () => {
  let component: AdminAccComponent;
  let fixture: ComponentFixture<AdminAccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAccComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
