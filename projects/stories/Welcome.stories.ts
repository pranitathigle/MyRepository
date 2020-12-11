import { RADUILibraryComponent } from 'radui-library';

export default {
  title: 'Welcome',
  component: RADUILibraryComponent,
};

export const ToStorybook = () => ({
  component: RADUILibraryComponent,
  props: {},
});

ToStorybook.story = {
  name: 'to Storybook',
};
