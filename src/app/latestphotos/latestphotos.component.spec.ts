import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestphotosComponent } from './latestphotos.component';

describe('LatestphotosComponent', () => {
  let component: LatestphotosComponent;
  let fixture: ComponentFixture<LatestphotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestphotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestphotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
