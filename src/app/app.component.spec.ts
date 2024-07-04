import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DragDropModule } from 'primeng/dragdrop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [DragDropModule, BrowserAnimationsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should have available products', () => {
    expect(component.availableProducts.length).toBeGreaterThan(0);
  });

  it('should add product to selectedProducts on drop', () => {
    const product = component.availableProducts[0];
    component.dragStart(product);
    component.drop();
    expect(component.selectedProducts).toContain(product);
    expect(component.availableProducts).not.toContain(product);
  });
});
