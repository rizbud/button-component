# Button Component
Custom reusable Button component for React Native

## How to Run This Project
Clone this repo to your locale. Then run "`npm install`"

_Start Storybook_
```console
yarn storybook
```
_Run Android (Automatically run yarn start too)_
```console
yarn android
```

## Usage
```jsx
import Button, {ButtonType} from './Button'; // Import component

// Return
return (
  <Button title="This is a Button" type={ButtonType.PRIMARY} />
)
```
or with custom children
```jsx
import Button, {ButtonType} from './Button'; // Import component
import {Text} from 'react-native'; // Import Text from react-native

// Return
return (
  <Button type={ButtonType.PRIMARY}>
    <Text>This is a Button too</Text>
  </Button>
);
```

## Props
Extends [`TouchableOpacityProps`](https://reactnative.dev/docs/touchableopacity#props) and [`PressableProps`](https://reactnative.dev/docs/pressable#props) from React Native.

| Props | Type | Requred | Default
| ---- | :----:| :----: | :----:
| title | `string` | No | -
| type | `ButtonType` | No | `ButtonType.PRIMARY`
| btnColor | `string` | No | `"blue-500"`
| isLoading | `boolean` | No | -
| style | `StyleProp<ViewStyle>` | No | -
| textStyle | `StyleProp<TextStyle>` | No | -
| textProps | `TextProps` | No | -
| textColor | `string` | No | -
