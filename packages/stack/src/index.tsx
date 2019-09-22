import * as CardStyleInterpolators from './TransitionConfigs/CardStyleInterpolators';
import * as HeaderStyleInterpolators from './TransitionConfigs/HeaderStyleInterpolators';
import * as TransitionPresets from './TransitionConfigs/TransitionPresets';

/**
 * Navigators
 */
export {
  default as createStackNavigator,
} from './navigators/createStackNavigator';

export const Assets = [
  require('./views/assets/back-icon.png'),
  require('./views/assets/back-icon-mask.png'),
];

/**
 * Views
 */
export { default as Header } from './views/Header/Header';
export { default as HeaderTitle } from './views/Header/HeaderTitle';
export { default as HeaderBackButton } from './views/Header/HeaderBackButton';

/**
 * Transition presets
 */
export { CardStyleInterpolators, HeaderStyleInterpolators, TransitionPresets };

/**
 * Utilities
 */

export { default as StackGestureContext } from './utils/StackGestureContext';

/**
 * Types
 */
export {
  NavigationStackState,
  NavigationStackProp,
  NavigationStackOptions,
  NavigationStackConfig,
  NavigationStackScreenComponent,
  NavigationStackScreenProps,
  HeaderProps,
  HeaderBackButtonProps,
  HeaderTitleProps,
  TransitionPreset,
  CardStyleInterpolator,
  HeaderStyleInterpolator,
} from './types';
