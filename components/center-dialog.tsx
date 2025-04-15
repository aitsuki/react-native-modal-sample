import { useEffect, useState } from "react";
import { Pressable, View } from "react-native";
import { KeyboardEvents } from "react-native-keyboard-controller";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Dialog, DialogProps } from "./dialog";

type CenterDialogProps = DialogProps;

const CenterDialog = ({ children, ...props }: CenterDialogProps) => {
  const insets = useSafeAreaInsets();

  const [keyboardShow, setKeyboardShow] = useState(false);

  useEffect(() => {
    const show = KeyboardEvents.addListener("keyboardWillShow", () => {
      setKeyboardShow(true);
    });

    const hide = KeyboardEvents.addListener("keyboardDidHide", () => {
      setKeyboardShow(false);
    });
    return () => {
      show.remove();
      hide.remove();
    };
  }, []);

  return (
    <Dialog {...props}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingTop: insets.top + 24,
          paddingBottom: keyboardShow ? 24 : insets.bottom + 24,
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
      </View>
    </Dialog>
  );
};

export { CenterDialog, CenterDialogProps };
