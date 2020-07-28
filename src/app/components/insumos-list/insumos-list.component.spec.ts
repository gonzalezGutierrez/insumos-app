import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InsumosListComponent } from './insumos-list.component';

describe('InsumosListComponent', () => {
  let component: InsumosListComponent;
  let fixture: ComponentFixture<InsumosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsumosListComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InsumosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
