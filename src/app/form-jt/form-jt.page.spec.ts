import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormJTPage } from './form-jt.page';

describe('FormJTPage', () => {
  let component: FormJTPage;
  let fixture: ComponentFixture<FormJTPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormJTPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormJTPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
