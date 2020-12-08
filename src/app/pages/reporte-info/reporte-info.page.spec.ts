import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReporteInfoPage } from './reporte-info.page';

describe('ReporteInfoPage', () => {
  let component: ReporteInfoPage;
  let fixture: ComponentFixture<ReporteInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReporteInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
