import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SincronizePage } from './sincronize.page';

describe('SincronizePage', () => {
  let component: SincronizePage;
  let fixture: ComponentFixture<SincronizePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SincronizePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SincronizePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
