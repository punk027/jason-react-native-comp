import * as CardStyleInterpolators from './TransitionConfigs/CardStyleInterpolators';
import * as HeaderStyleInterpolators from './TransitionConfigs/HeaderStyleInterpolators';
import * as TransitionSpecs from './TransitionConfigs/TransitionSpecs';
import * as TransitionPresets from './TransitionConfigs/TransitionPresets';

/**
 * Navigators
 */
export { default as createStackNavigator } from './navigators/createStackNavigator';

export const Assets = [
  // eslint-disable-next-line import/no-commonjs
  require('./views/assets/back-icon.png'),
  // eslint-disable-next-line import/no-commonjs
  require('./views/assets/back-icon-mask.png'),
];

/**
 * Views
 */
export { default as StackView } from './views/Stack/StackView';
export { default as Header } from './views/Header/Header';
export { default as HeaderTitle } from './views/Header/HeaderTitle';
export { default as HeaderBackButton } from './views/Header/HeaderBackButton';
export { default as HeaderBackground } from './views/Header/HeaderBackground';

/**
 * Transition presets
 */
export {
  CardStyleInterpolators,
  HeaderStyleInterpolators,
  TransitionSpecs,
  TransitionPresets,
};

/**
 * Utilities
 */
export { default as CardAnimationContext } from './utils/CardAnimationContext';
export { default as GestureHandlerRefContext } from './utils/GestureHandlerRefContext';

export { default as useCardAnimation } from './utils/useCardAnimation';
export { default as useGestureHandlerRef } from './utils/useGestureHandlerRef';

/**
 * Types
 */
export type {
  StackNavigationOptions,
  StackNavigationProp,
  StackScreenProps,
  StackHeaderProps,
  StackHeaderLeftButtonProps,
  StackHeaderTitleProps,
  StackCardInterpolatedStyle,
  StackCardInterpolationProps,
  StackCardStyleInterpolator,
  StackHeaderInterpolatedStyle,
  StackHeaderInterpolationProps,
  StackHeaderStyleInterpolator,
  TransitionPreset,
} from './types';
