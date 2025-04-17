import Animated, {
  interpolate,
  useDerivedValue,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useReanimatedKeyboardAnimation } from "../hooks/keyboard";
import { Dialog, DialogProps } from "./dialog";
import { View } from "react-native";

type CenterDialogProps = DialogProps;

const CenterDialog = ({ children, ...props }: CenterDialogProps) => {
  const insets = useSafeAreaInsets();
  const { progress } = useReanimatedKeyboardAnimation();

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
        <View
          onStartShouldSetResponder={() => true}
          style={{
            backgroundColor: "white",
            borderRadius: 24,
            padding: 24,
            width: "80%",
          }}
        >
          {children}
        </View>
      </Animated.View>
    </Dialog>
  );
};

export { CenterDialog, CenterDialogProps };
