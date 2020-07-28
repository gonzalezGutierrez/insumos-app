import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InsumoPage } from './insumo.page';

describe('InsumoPage', () => {
  let component: InsumoPage;
  let fixture: ComponentFixture<InsumoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsumoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InsumoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
