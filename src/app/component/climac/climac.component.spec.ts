import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimacComponent } from './climac.component';

describe('ClimacComponent', () => {
  let component: ClimacComponent;
  let fixture: ComponentFixture<ClimacComponent>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [ClimacComponent]
    })
    .compileComponents();
  });
    beforeEach(() => {
    fixture = TestBed.createComponent(ClimacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
