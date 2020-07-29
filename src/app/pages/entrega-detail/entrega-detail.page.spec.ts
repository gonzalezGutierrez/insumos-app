import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EntregaDetailPage } from './entrega-detail.page';

describe('EntregaDetailPage', () => {
  let component: EntregaDetailPage;
  let fixture: ComponentFixture<EntregaDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntregaDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EntregaDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
