import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

<<<<<<< HEAD
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
=======
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
>>>>>>> 1b3a818fa200a1ac753a46adb59fd00eb9e4586d
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
