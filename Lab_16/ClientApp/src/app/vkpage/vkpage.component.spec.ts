import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VkpageComponent } from './vkpage.component';

describe('VkpageComponent', () => {
  let component: VkpageComponent;
  let fixture: ComponentFixture<VkpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VkpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VkpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
