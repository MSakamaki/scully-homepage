import { addDecorator } from '@storybook/angular';
import { withKnobs } from '@storybook/addon-knobs';
import { centered } from '@storybook/addon-centered/angular';

addDecorator(withKnobs);
addDecorator(centered);
