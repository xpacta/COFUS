import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RescateResolPage } from './rescate-resol.page';

describe('RescateResolPage', () => {
  let component: RescateResolPage;
  let fixture: ComponentFixture<RescateResolPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RescateResolPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RescateResolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
