import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormGmPage } from './form-gm.page';

describe('FormGmPage', () => {
  let component: FormGmPage;
  let fixture: ComponentFixture<FormGmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormGmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormGmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
