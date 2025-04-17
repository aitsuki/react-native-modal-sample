import { Pressable, View } from "react-native";
import { useKeyboardContext } from "react-native-keyboard-controller";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Dialog, DialogProps } from "./dialog";
import { interpolate, useDerivedValue } from "react-native-reanimated";
import Animated from "react-native-reanimated";

type CenterDialogProps = DialogProps;

const useKeyboardAnimation = () => {
  const context = useKeyboardContext();
  return context.reanimated;
};

const CenterDialog = ({ children, ...props }: CenterDialogProps) => {
  const insets = useSafeAreaInsets();
  const { progress } = useKeyboardAnimation();

  const paddingBottom = useDerivedValue(() => {
    return interpolate(progress.value, [0, 1], [insets.bottom + 24, 24]);
  });

  return (
    <Dialog {...props}>
      <Animated.View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingTop: insets.top + 24,
          paddingBottom: paddingBottom,
        }}
      >
        <Pressable
          style={{
            backgroundColor: "white",
            borderRadius: 24,
            padding: 24,
            width: "80%",
          }}
        >
          {children}
        </Pressable>
      </Animated.View>
    </Dialog>
  );
};

export { CenterDialog, CenterDialogProps };
