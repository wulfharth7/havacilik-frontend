import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilgiSistemiComponent } from './bilgi-sistemi.component';

describe('BilgiSistemiComponent', () => {
  let component: BilgiSistemiComponent;
  let fixture: ComponentFixture<BilgiSistemiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BilgiSistemiComponent]
    });
    fixture = TestBed.createComponent(BilgiSistemiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
