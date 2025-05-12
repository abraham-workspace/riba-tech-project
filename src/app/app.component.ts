import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MailService, ConsultationFormData } from '@app/Services/mail/mail.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatIconModule, CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // Images
  fullstackEngineer = 'fullstack.png';
  frontendDeveloper = 'uiux.png';
  qaEngineer = 'qa.png';
  productDesigner = 'product-designer.png';
  databaseAdmin = 'database-admin.png';
  angularDeveloper = 'angularjs.png';
  devopsEngineer = 'devops.png';
  javaDeveloper = 'java.png';
  mobileAppsDeveloper = 'mobile.png';
  aiMlEngineer = 'ai.png';
  dataEngineer = 'dataEngineer.png';
  applicationSecurityEngineer = 'applicationSecurityEngineer.png';
  solutionArchitect = 'solutionArchitect.png';
  integration = 'Integration.png';
  consulting = 'consulting.png';
  support = 'Supportt.png';
  react = 'react.png';
  angular = 'angular.png';
  springboot = 'springboot.png';
  express = 'express.png';
  typescript = 'typescript.png';
  javaicon = 'javaicon.png';
  csharp = 'csharp.png';
  html5 = 'html5.png';
  css = 'css.png';
  nextjs = 'nextjs.png';
  signuppic = 'signuppic.png';
  teamOfEngineers = 'teamofsoftwareengineers.png';
  build = 'Build.png';
  transform = 'Transform.png';
  implement = 'Implement.png';
  message = 'chat.png';
  instagram = 'instagram.png';
  linkedin = 'linkedin.png';
  twitter = 'twitter.png';

  // Chat state
  isChatOpen = false;
  openChat() { this.isChatOpen = true; }
  closeChat() { this.isChatOpen = false; }

  // Scroll state
  isScrolled = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  displayedWord = '';
  private words = ['Excellence', 'Innovation', 'Growth'];
  private currentWordIndex = 0;
  private charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%';

  consultationForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private consultationService: MailService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.loopWords();
  }

  initForm(): void {
    this.consultationForm = this.fb.group({
      organization: [''],
      fullname: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      details: ['', Validators.required],
      termsAccepted: [false, Validators.requiredTrue]
    });
  }

  onSubmit(): void {
    if (this.consultationForm.valid) {
      const formData: ConsultationFormData = {
        organization_name: this.consultationForm.value.organization,
        full_name: this.consultationForm.value.fullname,
        phone: this.consultationForm.value.phone,
        email: this.consultationForm.value.email,
        project_details: this.consultationForm.value.details,
        terms_accepted: this.consultationForm.value.termsAccepted,
      };

      this.consultationService.submitConsultation(formData).subscribe({
        next: (res) => {
          console.log('Form submitted successfully:', res);
          alert('Your consultation request has been submitted! Check your mail for more information.Thank you!');
          this.consultationForm.reset();
        },
        error: (err) => {
          console.error('Submission error:', err);
          alert('Something went wrong. Please try again.');
        }
      });
    } else {
      this.consultationForm.markAllAsTouched();
    }
  }

  private scrambleToWord(target: string, callback: () => void): void {
    let iterations = 0;
    const maxIterations = target.length * 4;

    const interval = setInterval(() => {
      let output = '';
      for (let i = 0; i < target.length; i++) {
        output += (i < iterations / 4)
          ? target[i]
          : this.charset[Math.floor(Math.random() * this.charset.length)];
      }
      this.displayedWord = output;
      iterations++;
      if (iterations > maxIterations) {
        clearInterval(interval);
        callback();
      }
    }, 50);
  }

  private loopWords(): void {
    this.scrambleToWord(this.words[this.currentWordIndex], () => {
      setTimeout(() => {
        this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
        this.loopWords();
      }, 2500);
    });
  }
}
