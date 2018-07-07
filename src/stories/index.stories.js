/* eslint-disable react/react-in-jsx-scope */

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import PrimaryButton from './Button.vue';
import Welcome from './Welcome.vue';

storiesOf('Welcome', module).add('to Storybook', () => ({
  components: { Welcome, PrimaryButton },
  template: '<welcome :showApp="action" />',
  methods: { action: linkTo('Button') },
}));

storiesOf('Buttons', module)
  .add('Primary', () => ({
    components: { PrimaryButton },
    template: '<taxjar-button class="button__primary" @click="action">Primary button</taxjar-button>',
    methods: { action: action('clicked') },
  }))
  .add('Secondary', () => ({
    components: { PrimaryButton },
    template: '<taxjar-button class="button__secondary" @click="action">Secondary nutton</taxjar-button>',
    methods: { action: action('clicked') },
  }))
  .add('with some emoji', () => ({
    components: { PrimaryButton },
    template:
      '<taxjar-button @click="action"><span role="img" aria-label="so cool">😀 😎 👍 💯</span></taxjar-button>',
    methods: { action: action('clicked') },
  }));

/* eslint-enable react/react-in-jsx-scope */
