import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormAcPage } from './form-ac.page';

describe('FormAcPage', () => {
  let component: FormAcPage;
  let fixture: ComponentFixture<FormAcPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAcPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormAcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
