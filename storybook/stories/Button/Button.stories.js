import {action} from '@storybook/addon-actions';
import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import Button, {ButtonType} from '.';
import {apply} from '../../../src/themes/osmiProvider';
import CenterView from '../CenterView';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

storiesOf('Button Primary', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Primary', () => (
    <Button
      onPress={action('clicked-text')}
      title={text('Button Primary', 'PRIMARY')}
      btnColor={text('Button Color', 'blue-500')}
    />
  ))
  .add('Primary Custom Children', () => (
    <Button
      onPress={action('clicked-text')}
      btnColor={text('Button Color', 'blue-500')}>
      <Icon size={16} name="home" color="white" />
    </Button>
  ))
  .add('Primary Disabled', () => (
    <Button
      onPress={action('clicked-text')}
      title={text('Button Primary Disabled', 'PRIMARY DISABLED')}
      btnColor={text('Button Color', 'blue-500')}
      disabled
    />
  ))
  .add('Primary Loading', () => (
    <Button
      onPress={action('clicked-text')}
      title={text('Button Primary Loading', 'PRIMARY LOADING')}
      btnColor={text('Button Color', 'blue-500')}
      style={apply('w-150')}
      isLoading
    />
  ));

storiesOf('Button Outlined', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Outlined', () => (
    <Button
      onPress={action('clicked-text')}
      title={text('Button Outlined', 'OUTLINED')}
      btnColor={text('Button Color', 'blue-500')}
      type={ButtonType.OUTLINED}
    />
  ))
  .add('Outlined Custom Children', () => (
    <Button
      onPress={action('clicked-text')}
      type={ButtonType.OUTLINED}
      btnColor={text('Button Color', 'blue-500')}>
      <Icon size={16} name="home" color={apply('blue-500')} />
    </Button>
  ))
  .add('Outlined Disabled', () => (
    <Button
      onPress={action('clicked-text')}
      title={text('Button Outlined Disabled', 'OUTLINED DISABLED')}
      btnColor={text('Button Color', 'blue-500')}
      type={ButtonType.OUTLINED}
      disabled
    />
  ))
  .add('Outlined Loading', () => (
    <Button
      onPress={action('clicked-text')}
      title={text('Button Outlined Loading', 'OUTLINED LOADING')}
      btnColor={text('Button Color', 'blue-500')}
      type={ButtonType.OUTLINED}
      style={apply('w-150')}
      isLoading
    />
  ));
