import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerdurasDetailPage } from './verduras-detail.page';

describe('VerdurasDetailPage', () => {
  let component: VerdurasDetailPage;
  let fixture: ComponentFixture<VerdurasDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VerdurasDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
