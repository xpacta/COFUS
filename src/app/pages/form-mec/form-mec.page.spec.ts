import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormMecPage } from './form-mec.page';

describe('FormMecPage', () => {
  let component: FormMecPage;
  let fixture: ComponentFixture<FormMecPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMecPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormMecPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
