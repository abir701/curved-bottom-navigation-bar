// Fix for compatibility with newer versions of React Native and Reanimated
declare module 'react-native-reanimated' {
  export interface SharedValue<T> {
    value: T;
    set: (value: T | ((value: T) => T)) => void;
    modify: (modifier: (value: T) => T) => void;
  }

  // Add any missing types here
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
