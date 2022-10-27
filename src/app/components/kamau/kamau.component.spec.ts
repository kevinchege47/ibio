import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KamauComponent } from './kamau.component';

describe('KamauComponent', () => {
  let component: KamauComponent;
  let fixture: ComponentFixture<KamauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KamauComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KamauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
