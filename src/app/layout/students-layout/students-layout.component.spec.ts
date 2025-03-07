import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsLayoutComponent } from './students-layout.component';

describe('StudentsLayoutComponent', () => {
  let component: StudentsLayoutComponent;
  let fixture: ComponentFixture<StudentsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentsLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
