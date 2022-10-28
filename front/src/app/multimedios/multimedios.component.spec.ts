import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultimediosComponent } from './multimedios.component';

describe('MultimediosComponent', () => {
  let component: MultimediosComponent;
  let fixture: ComponentFixture<MultimediosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultimediosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultimediosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
