import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
teamOfEngineers:string='teamofsoftwareengineers.png';
  build:string='Build.png';
  transform:string='Transform.png';
  implement:string='Implement.png'

   isScrolled:Boolean = false; 

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50; 
  }
}
