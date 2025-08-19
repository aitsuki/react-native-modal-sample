import { ReactNode } from 'react';
import {
  Keyboard,
  Modal,
  Pressable,
  Text,
  TextStyle,
  View,
} from 'react-native';
import {
  KeyboardAwareScrollView,
  useReanimatedKeyboardAnimation,
} from 'react-native-keyboard-controller';
import Animated, {
  interpolate,
  useDerivedValue,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import tw from './tw';

export type DialogControlProps = {
  open: boolean;
  onRequestClose: () => void;
  closeTouchOutside?: boolean;
};

export type DialogProps = DialogControlProps & {
  children?: ReactNode;
};

export type DialogTitleProps = {
  title?: string;
  style?: TextStyle;
};

export function DialogTitle({ title, style }: DialogTitleProps) {
  return (
    <View style={tw`items-center justify-center bg-blue-200 rounded-t-lg p-2`}>
      <Text style={[tw`text-lg font-semibold`, style]}>{title}</Text>
    </View>
  );
}

export function Dialog({
  open,
  onRequestClose,
  closeTouchOutside = true,
  children,
}: DialogProps) {
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
      navigationBarTranslucent={true}
      onRequestClose={onRequestClose}
    >
      <Pressable
        onPressOut={handleClickOutside}
        style={tw`flex-1 bg-black bg-opacity-50`}
      >
        <KeyboardAwareScrollView
          bottomOffset={20}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={tw`flex-grow`}
        >
          <View style={tw`flex-1`}>{children}</View>
        </KeyboardAwareScrollView>
      </Pressable>
    </Modal>
  );
}

export function CenterDialog({ children, ...props }: DialogProps) {
  const insets = useSafeAreaInsets();
  return (
    <Dialog {...props}>
      <View
        style={[
          tw`flex-1 justify-center items-center`,
          { paddingTop: insets.top, paddingBottom: insets.bottom },
        ]}
      >
        <View
          onStartShouldSetResponder={() => true}
          style={tw`bg-white rounded-lg w-[88%]`}
        >
          {children}
        </View>
      </View>
    </Dialog>
  );
}

export function BottomDialog({ children, ...props }: DialogProps) {
  const insets = useSafeAreaInsets();
  const { progress } = useReanimatedKeyboardAnimation();
  const paddingBottom = useDerivedValue(() => {
    return interpolate(progress.value, [0, 1], [insets.bottom - 1, 0]);
  });

  return (
    <Dialog {...props}>
      <View
        style={[
          tw`flex-1 justify-end items-stretch`,
          { paddingTop: insets.top },
        ]}
      >
        <Animated.View
          onStartShouldSetResponder={() => true}
          style={[tw`bg-white rounded-t-lg`, { paddingBottom: paddingBottom }]}
        >
          {children}
        </Animated.View>
      </View>
    </Dialog>
  );
}
