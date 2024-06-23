import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PROJECT_CONSTANTS } from '../../constants';

@Component({
  selector: 'zs-project-skills-block',
  templateUrl: './project-skills-block.component.html',
  styleUrls: ['./project-skills-block.component.scss']
})

/**
 * Project Skills Block Component
 */
export class ProjectSkillsBlockComponent implements OnInit, OnDestroy {
  @Input() skills: string[] = [];
  private subscriptions: Subscription[] = [];

  /**
   * Constructor
   */
  constructor() {}

  /**
   * ngOnInit
   */
  public ngOnInit() {}

  /**
   * ngOnDestroy
   */
  public ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  /**
   * Convert skill to a type of skill.
   */
  public determineSkillType(skill: string): string {
    if (PROJECT_CONSTANTS.REASONS.includes(skill)) return 'reason';
    if (PROJECT_CONSTANTS.WEB_PROGRAMMING.includes(skill)) return 'web';
    if (PROJECT_CONSTANTS.LANGUAGES.includes(skill)) return 'language';
    if (PROJECT_CONSTANTS.PROGRAMS.includes(skill)) return 'program';
    return '';
  }
}
