import * as React from 'react';
import { Text, TextProps, GestureResponderEvent } from 'react-native';
import { NavigationAction } from '@react-navigation/core';
import useLinkProps from './useLinkProps';

type Props = {
  to: string;
  action?: NavigationAction;
  target?: string;
} & (TextProps & { children: React.ReactNode });

/**
 * Component to render link to another screen using a path.
 * Uses an anchor tag on the web.
 *
 * @param props.to Absolute path to screen (e.g. `/feeds/hot`).
 * @param props.action Optional action to use for in-page navigation. By default, the path is parsed to an action based on linking config.
 * @param props.children Child elements to render the content.
 */
export default function Link({ to, action, ...rest }: Props) {
  const props = useLinkProps({ to, action });

  const onPress = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent> | GestureResponderEvent
  ) => {
    if ('onPress' in rest) {
      // @ts-ignore
      rest.onPress?.(e);
    }

    if (props.onClick) {
      props.onClick(e);
    } else {
      props.onPress(e);
    }
  };

  return React.createElement(Text, {
    ...props,
    ...rest,
    ...(props.onClick ? { onClick: onPress } : { onPress }),
  });
}
