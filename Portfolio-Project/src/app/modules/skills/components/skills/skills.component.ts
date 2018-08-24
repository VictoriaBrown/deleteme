// Import gives ability to use the @Component decorator and the 
// ngOnInit life-cycle method
import { Component, OnInit } from '@angular/core';
import { Skill } from '../../../../shared/models/skill';
import { Level } from '../../../../shared/types/level.enum';
import { SkillsService } from '../../../../services/skills.service';

// @Component specifies the Angular metadata for the component which
// includes things like animations, encapsulation, selectors, the
// templateUrl, and styleUrls
@Component({

  // selector - component's CSS element selector. This is how Angular
  // identifies the component in the template
  selector: 'app-skills',

  // templateUrl - location of the component's template file. This is
  // the location of the HTML to be used for the structure of the 
  // component.
  templateUrl: './skills.component.html',

  // styleUrls - location of the stylesheets used specifically for the
  // private styling of the component.
  styleUrls: ['./skills.component.css']
})

// Export - Components are exported so the component can then be 
// imported into different files. implements is applying an interface
//  to the class. A class can implement more than one interface by 
// separating them with commas.
export class SkillsComponent implements OnInit {
  skills: Skill[];
  dataService: SkillsService;

  constructor(private skillsService: SkillsService) {
    this.dataService = this.skillsService;
   }

  // Angular life-cycle method. ngOnInit is called shortly after 
  // creating a component and is used to place logic that needs to 
  // happen when the component is initialized.
  ngOnInit() {
    // this.dataService.getSkills().subscribe(skills => this.skills = skills);
    this.skills = this.dataService.skills;
  }

}
