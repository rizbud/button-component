import React, {FC, memo, useCallback} from 'react';
import {apply} from '../../../src/themes/osmiProvider';
import {
  Text,
  Platform,
  StyleProp,
  ViewStyle,
  TextStyle,
  TextProps,
  Pressable,
  PressableProps,
  TouchableOpacity,
  ActivityIndicator,
  TouchableOpacityProps,
} from 'react-native';
import styles from './style';

export enum ButtonType {
  PRIMARY = 'PRIMARY',
  OUTLINED = 'OUTLINED',
}

interface PressProps extends PressableProps {
  title?: string;
  type?: ButtonType;
  btnColor?: string;
  isLoading?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  textProps?: TextProps;
  backgroundColor?: string;
  textColor?: string;
}

export type ButtonProps = PressProps & TouchableOpacityProps;

const Button: FC<ButtonProps> = props => {
  const {
    title,
    type = ButtonType.PRIMARY,
    isLoading,
    btnColor = 'blue-500',
    style,
    textStyle,
    textProps,
    textColor,
    ...restProps
  } = props;

  const disabled = props.disabled || isLoading;
  const isOutlined = type === ButtonType.OUTLINED;
  const txtColor: string = isOutlined ? btnColor : textColor || 'white';
  const opacity = disabled ? '75' : '100';

  const Press = Platform.OS === 'android' ? Pressable : TouchableOpacity;

  const _getBgColor = useCallback(() => {
    if (isOutlined) {
      return 'transparent';
    }
    return btnColor;
  }, [btnColor, isOutlined]);

  return (
    <Press
      {...restProps}
      activeOpacity={0.8}
      android_ripple={{color: 'rgba(0,0,0,0.2)'}}
      style={[
        styles.button,
        apply(
          `bg-${_getBgColor()} border-${btnColor} bg-opacity-${opacity} border-opacity-${opacity}`,
        ),
        style,
      ]}
      disabled={disabled}>
      {isLoading ? (
        <ActivityIndicator color={apply(txtColor)} />
      ) : props?.children ? (
        props.children
      ) : (
        <Text
          {...textProps}
          style={[
            styles.title,
            apply(`text-${txtColor} text-opacity-${opacity}`),
            textStyle,
          ]}>
          {title}
        </Text>
      )}
    </Press>
  );
};

export default memo(Button);
