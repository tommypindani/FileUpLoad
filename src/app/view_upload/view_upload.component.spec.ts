import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { view_uploadComponent } from './view_upload.component';

describe('UploadComponent', () => {
  let component: view_uploadComponent;
  let fixture: ComponentFixture<view_uploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ view_uploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(view_uploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
