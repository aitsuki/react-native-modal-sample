import { View } from "react-native";
import Animated, {
  interpolate,
  useDerivedValue,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useReanimatedKeyboardAnimation } from "../hooks/keyboard";
import { Dialog, DialogProps } from "./dialog";

type BottomDialogProps = DialogProps;

const BottomDialog = ({ children, ...props }: BottomDialogProps) => {
  const insets = useSafeAreaInsets();
  const { progress } = useReanimatedKeyboardAnimation();

  const paddingBottom = useDerivedValue(() => {
    return interpolate(progress.value, [0, 1], [insets.bottom, 0]);
  });

  return (
    <Dialog {...props}>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "stretch",
          paddingTop: insets.top + 24,
        }}
      >
        <Animated.View
          onStartShouldSetResponder={() => true}
          style={{
            backgroundColor: "white",
            borderTopStartRadius: 24,
            borderTopEndRadius: 24,
            paddingTop: 24,
            paddingHorizontal: 24,
            paddingBottom: paddingBottom,
          }}
        >
          {children}
        </Animated.View>
      </View>
    </Dialog>
  );
};

export { BottomDialog, BottomDialogProps };
