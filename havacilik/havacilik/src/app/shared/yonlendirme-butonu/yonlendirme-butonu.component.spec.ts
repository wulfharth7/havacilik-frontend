import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YonlendirmeButonuComponent } from './yonlendirme-butonu.component';

describe('YonlendirmeButonuComponent', () => {
  let component: YonlendirmeButonuComponent;
  let fixture: ComponentFixture<YonlendirmeButonuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YonlendirmeButonuComponent]
    });
    fixture = TestBed.createComponent(YonlendirmeButonuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
