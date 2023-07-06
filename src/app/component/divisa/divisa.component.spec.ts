import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisaComponent } from './divisa.component';

describe('DivisaComponent', () => {
  let component: DivisaComponent;
  let fixture: ComponentFixture<DivisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({//TestBed.configureTestingModule({
      declarations: [DivisaComponent]
    })
    /*fixture = TestBed.createComponent(DivisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();*/
    .compileComponents();//añadido
  });
  beforeEach(()=>{//añadido
    fixture = TestBed.createComponent(DivisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
 
