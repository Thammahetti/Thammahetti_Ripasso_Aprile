import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinazioneComponent } from './destinazione.component';

describe('DestinazioneComponent', () => {
  let component: DestinazioneComponent;
  let fixture: ComponentFixture<DestinazioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DestinazioneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DestinazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
