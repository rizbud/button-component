# Button Component
Custom reusable Button component for React Native

## How to Run This Project
Clone this repo to your locale. Then run "`npm install`"

_Start Storybook_
```
yarn storybook
```
_Run Android (Automatically run npm start too)_
```
yarn android
```

## Usage
```jsx
import Button, {ButtonType} from './Button'; // Import component

return (
  <Button title="This is a Button" type={ButtonType.PRIMARY} />
)
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