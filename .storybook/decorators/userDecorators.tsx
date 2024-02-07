import React from 'react';
import { Provider } from 'react-redux';
import { getMockStore } from './mockStore';
import { StoryFn, StoryContext } from '@storybook/react';

export const withLoggedInUser = (Story: StoryFn, context: StoryContext) => {
  const store = getMockStore({
    user: {
      user: { uid: '1', email: 'asdasd@mail.ru' },
      loading: false,
    },
  });

  return (
    <Provider store={store}>
      <Story {...context.args} />
    </Provider>
  );
};

export const withLoggedOutUser = (Story: StoryFn, context: StoryContext) => {
  const store = getMockStore({
    user: {
      user: null,
      loading: false,
    },
  });

  return (
    <Provider store={store}>
      <Story {...context.args} />
    </Provider>
  );
};
