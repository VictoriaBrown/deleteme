import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SkillsModule } from './modules/skills/skills.module';
import { AppComponent } from './app.component';

import { SkillsService } from './services/skills.service';
import { ContactServiceService } from './services/contact-service.service'
import { ContactsComponentComponent } from './components/contacts-component/contacts-component.component';
import { GreetingComponent } from './components/greeting/greeting.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillsModule,
    ContactsComponentComponent,
    GreetingComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [SkillsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
