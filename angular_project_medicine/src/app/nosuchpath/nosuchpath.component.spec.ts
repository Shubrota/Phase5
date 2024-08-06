import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosuchpathComponent } from './nosuchpath.component';

describe('NosuchpathComponent', () => {
  let component: NosuchpathComponent;
  let fixture: ComponentFixture<NosuchpathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NosuchpathComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NosuchpathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
