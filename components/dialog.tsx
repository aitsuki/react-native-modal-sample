import { ReactNode } from "react";
import { Keyboard, Modal, Pressable } from "react-native";
import { KeyboardAvoidingView } from "react-native-keyboard-controller";

type DialogProps = {
  open: boolean;
  onRequestClose: () => void;
  closeTouchOutside?: boolean;
  children?: ReactNode;
};

const Dialog = ({
  open,
  onRequestClose,
  closeTouchOutside = true,
  children,
}: DialogProps) => {
  const handleClickOutside = () => {
    if (Keyboard.isVisible()) {
      Keyboard.dismiss();
      return;
    }

    if (closeTouchOutside) {
      onRequestClose();
    }
  };

  return (
    <Modal
      visible={open}
      animationType="fade"
      transparent={true}
      statusBarTranslucent={true}
      onRequestClose={onRequestClose}
    >
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <Pressable
          onPressOut={handleClickOutside}
          style={{ flex: 1, backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          {children}
        </Pressable>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export { Dialog, DialogProps };
