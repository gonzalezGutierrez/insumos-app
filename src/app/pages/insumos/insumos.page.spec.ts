import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InsumosPage } from './insumos.page';

describe('InsumosPage', () => {
  let component: InsumosPage;
  let fixture: ComponentFixture<InsumosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsumosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InsumosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
