import { Component, Input } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { boolean } from '@storybook/addon-knobs';

import { fadeAnimation } from '@wot/shared/ui';

export default {
  title: 'animation-fade',
};

@Component({
  selector: 'wot-animation-fade',
  template: `<div *ngIf="show" @fade>FADE ANIMATION</div>`,
  animations: [fadeAnimation],
})
class AnimationFadeComponent {
  @Input() show = true;
}

export const normal = () => ({
  moduleMetadata: {
    imports: [BrowserAnimationsModule],
    declarations: [AnimationFadeComponent],
  },
  template: `<wot-animation-fade [show]="show"></wot-animation-fade>`,
  props: {
    show: boolean('show', true),
  },
});
