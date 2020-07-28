import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DepartamentoShowPage } from './departamento-show.page';

describe('DepartamentoShowPage', () => {
  let component: DepartamentoShowPage;
  let fixture: ComponentFixture<DepartamentoShowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartamentoShowPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DepartamentoShowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
