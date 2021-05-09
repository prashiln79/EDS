import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployePortalComponent } from './employe-portal.component';

describe('EmployePortalComponent', () => {
  let component: EmployePortalComponent;
  let fixture: ComponentFixture<EmployePortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployePortalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployePortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
