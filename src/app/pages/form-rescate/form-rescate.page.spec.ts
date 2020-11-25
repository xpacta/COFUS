import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormRescatePage } from './form-rescate.page';

describe('FormRescatePage', () => {
  let component: FormRescatePage;
  let fixture: ComponentFixture<FormRescatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRescatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormRescatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
