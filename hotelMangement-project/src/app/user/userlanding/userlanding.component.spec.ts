import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserlandingComponent } from './userlanding.component';

describe('UserlandingComponent', () => {
  let component: UserlandingComponent;
  let fixture: ComponentFixture<UserlandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserlandingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserlandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
