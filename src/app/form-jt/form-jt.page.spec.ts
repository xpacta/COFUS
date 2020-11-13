import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormJtPage } from './form-jt.page';

describe('FormJtPage', () => {
  let component: FormJtPage;
  let fixture: ComponentFixture<FormJtPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormJtPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormJtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
