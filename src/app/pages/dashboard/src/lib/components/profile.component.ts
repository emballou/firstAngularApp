import { Component, OnDestroy, OnInit } from '@angular/core';
import { SocialMediaProfile } from '../models/SocialMediaProfile';
import { SOCIAL_MEDIA_PROFILES } from '../data/SocialMediaProfiles';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

/**
 * Dashboard Component
 */
export class ProfileComponent implements OnInit, OnDestroy {
  // TODO: assign this a custom type
  public socialMediaProfiles: SocialMediaProfile[] = SOCIAL_MEDIA_PROFILES;

  /**
   * Constructor
   */
  constructor() {}

  /**
   * ngOnInit
   */
  ngOnInit() {}

  /**
   * ngOnDestroy
   */
  ngOnDestroy() {}
}