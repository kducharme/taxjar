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
    template: '<PrimaryButton class="btn__primary" @click="action" />',
    methods: { action: action('clicked') },
  }))
  .add('Secondary', () => ({
    components: { PrimaryButton },
    template: '<PrimaryButton class="btn__secondary" @click="action" />',
    methods: { action: action('clicked') },
  }))
  .add('Table Action', () => ({
    components: { PrimaryButton },
    template: '<PrimaryButton class="btn__secondary" @click="action" />',
    methods: { action: action('clicked') },
  }));

/* eslint-enable react/react-in-jsx-scope */
