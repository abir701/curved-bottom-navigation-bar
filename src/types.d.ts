// Fix for compatibility with newer versions of React Native and Reanimated
declare module 'react-native-reanimated' {
  export interface SharedValue<T> {
    value: T;
    set: (value: T | ((value: T) => T)) => void;
    modify: (modifier: (value: T) => T) => void;
  }

  // Extend DerivedValue to be assignment-compatible with SharedValue
  export interface DerivedValue<T> extends SharedValue<T> {}

  // Make sure useDerivedValue returns a value that can be used as SharedValue
  export function useDerivedValue<T>(
    processor: () => T,
    dependencies?: ReadonlyArray<any>
  ): SharedValue<T>;
}

// Fix for compatibility with newer React Navigation
declare module '@react-navigation/native' {
  // Add any missing types here
}

declare module '@react-navigation/bottom-tabs' {
  // Add any missing types here
}

declare module 'react-native-svg' {
  // Add any missing types here
}
