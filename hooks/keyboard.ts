import { useKeyboardContext } from "react-native-keyboard-controller";

const useKeyboardAnimation = () => {
  const context = useKeyboardContext();
  return context.animated;
};

const useReanimatedKeyboardAnimation = () => {
  const context = useKeyboardContext();
  return context.reanimated;
};

export { useKeyboardAnimation, useReanimatedKeyboardAnimation };
