import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatingtestComponent } from './updatingtest.component';

describe('UpdatingtestComponent', () => {
  let component: UpdatingtestComponent;
  let fixture: ComponentFixture<UpdatingtestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatingtestComponent]
    });
    fixture = TestBed.createComponent(UpdatingtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
