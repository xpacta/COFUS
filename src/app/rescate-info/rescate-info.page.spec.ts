import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RescateInfoPage } from './rescate-info.page';

describe('RescateInfoPage', () => {
  let component: RescateInfoPage;
  let fixture: ComponentFixture<RescateInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RescateInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RescateInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
