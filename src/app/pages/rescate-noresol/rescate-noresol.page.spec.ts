import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RescateNoresolPage } from './rescate-noresol.page';

describe('RescateNoresolPage', () => {
  let component: RescateNoresolPage;
  let fixture: ComponentFixture<RescateNoresolPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RescateNoresolPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RescateNoresolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
