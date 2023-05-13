import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SipmleSecondComponent } from './sipmle-second.component';

describe('SipmleSecondComponent', () => {
  let component: SipmleSecondComponent;
  let fixture: ComponentFixture<SipmleSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SipmleSecondComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SipmleSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
