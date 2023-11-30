import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptActiviteComponent } from './compt-activite.component';

describe('ComptActiviteComponent', () => {
  let component: ComptActiviteComponent;
  let fixture: ComponentFixture<ComptActiviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComptActiviteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComptActiviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
