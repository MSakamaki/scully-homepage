import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { ApolloTestingModule } from 'apollo-angular/testing';
import { HomeComponent } from './home.component';
import { SharedUiModule } from '@wot/shared/ui';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule,
        ScullyLibModule,
        RouterTestingModule,
        SharedUiModule,
      ],
      declarations: [HomeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
