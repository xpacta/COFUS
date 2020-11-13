import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormCrPage } from './form-cr.page';

describe('FormCrPage', () => {
  let component: FormCrPage;
  let fixture: ComponentFixture<FormCrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCrPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormCrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
