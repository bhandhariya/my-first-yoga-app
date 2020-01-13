import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BanefitComponent } from './banefit.component';

describe('BanefitComponent', () => {
  let component: BanefitComponent;
  let fixture: ComponentFixture<BanefitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanefitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanefitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
