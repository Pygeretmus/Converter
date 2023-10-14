import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertatorComponent } from './convertator.component';

describe('ConvertatorComponent', () => {
  let component: ConvertatorComponent;
  let fixture: ComponentFixture<ConvertatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConvertatorComponent]
    });
    fixture = TestBed.createComponent(ConvertatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
