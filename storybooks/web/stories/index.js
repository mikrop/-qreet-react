import { storiesOf } from '@storybook/react';
import React from 'react';
import QREet from 'qreet-react';

storiesOf('components', module)
  .add('hello-world', () => (
    <QREet value="hello-world" />
  ))
  .add('my repository url', () => (
    <QREet value="https://github.com/mikrop/qreet-react" />
  ))
  .add('my storybook url', () => (
    <QREet value="https://mikrop.github.io/qreet-react/" />
  ));
