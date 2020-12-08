import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormEditPage } from './form-edit.page';

describe('FormEditPage', () => {
  let component: FormEditPage;
  let fixture: ComponentFixture<FormEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
