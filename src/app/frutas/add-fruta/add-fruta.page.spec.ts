import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddFrutaPage } from './add-fruta.page';

describe('AddFrutaPage', () => {
  let component: AddFrutaPage;
  let fixture: ComponentFixture<AddFrutaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddFrutaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
