import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrutasDetailPage } from './frutas-detail.page';

describe('FrutasDetailPage', () => {
  let component: FrutasDetailPage;
  let fixture: ComponentFixture<FrutasDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FrutasDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
