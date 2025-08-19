import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import {
  KeyboardAwareScrollView,
  KeyboardProvider,
} from 'react-native-keyboard-controller';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { BottomDialog, CenterDialog, DialogProps, DialogTitle } from './Dialog';
import tw from './tw';

function App() {
  return (
    <KeyboardProvider>
      <SafeAreaProvider>
        <AppContent />
      </SafeAreaProvider>
    </KeyboardProvider>
  );
}

function AppContent() {
  const insets = useSafeAreaInsets();
  const [openSimple, setOpenSimple] = useState(false);
  const [openInput, setOpenInput] = useState(false);
  const [openScrollable, setOpenScrollable] = useState(false);
  const [openScrollableInput, setOpenScrollableInput] = useState(false);
  const [openBottomSimple, setOpenBottomSimple] = useState(false);
  const [openBottomInput, setOpenBottomInput] = useState(false);
  const [openBottomScrollable, setOpenBottomScrollable] = useState(false);
  const [openBottomScrollableInput, setOpenBottomScrollableInput] =
    useState(false);

  return (
    <KeyboardAwareScrollView
      style={tw`flex-1`}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[
        tw`px-4`,
        { paddingTop: insets.top + 16, paddingBottom: insets.bottom + 16 },
      ]}
    >
      <View style={tw`gap-2`}>
        <SimpleDialog
          open={openSimple}
          onRequestClose={() => setOpenSimple(false)}
        />
        <InputDialog
          open={openInput}
          onRequestClose={() => setOpenInput(false)}
        />
        <ScrollableDialog
          open={openScrollable}
          onRequestClose={() => setOpenScrollable(false)}
        />
        <ScrollableInputDialog
          open={openScrollableInput}
          onRequestClose={() => setOpenScrollableInput(false)}
        />
        <BottomSimpleDialog
          open={openBottomSimple}
          onRequestClose={() => setOpenBottomSimple(false)}
        />
        <BottomInputDialog
          open={openBottomInput}
          onRequestClose={() => setOpenBottomInput(false)}
        />
        <BottomScrollableDialog
          open={openBottomScrollable}
          onRequestClose={() => setOpenBottomScrollable(false)}
        />
        <BottomScrollableInputDialog
          open={openBottomScrollableInput}
          onRequestClose={() => setOpenBottomScrollableInput(false)}
        />
        <TextInput
          style={tw`h-12 border border-black rounded-lg`}
          placeholder="Please enter"
        />
        <Button title="Simple Dialog" onPress={() => setOpenSimple(true)} />
        <Button title="Input Dialog" onPress={() => setOpenInput(true)} />
        <Button
          title="Scrollable Dialog"
          onPress={() => setOpenScrollable(true)}
        />
        <Button
          title="Scrollable Input Dialog"
          onPress={() => setOpenScrollableInput(true)}
        />
        <Button
          title="Bottom Simple Dialog"
          onPress={() => setOpenBottomSimple(true)}
        />
        <Button
          title="Bottom Input Dialog"
          onPress={() => setOpenBottomInput(true)}
        />
        <Button
          title="Bottom Scrollable Dialog"
          onPress={() => setOpenBottomScrollable(true)}
        />
        <Button
          title="Bottom Scrollable Input Dialog"
          onPress={() => setOpenBottomScrollableInput(true)}
        />
      </View>
    </KeyboardAwareScrollView>
  );
}

function SimpleDialog(props: DialogProps) {
  return (
    <CenterDialog {...props}>
      <DialogTitle title="Simple" />
      <Text style={tw`p-4`}>Hello, Aitsuki!</Text>
    </CenterDialog>
  );
}

function InputDialog(props: DialogProps) {
  return (
    <CenterDialog {...props}>
      <DialogTitle title="Input" />
      <TextInput
        style={tw`h-12 border border-black rounded-lg m-4`}
        placeholder="Please enter"
      />
    </CenterDialog>
  );
}

function ScrollableDialog(props: DialogProps) {
  return (
    <CenterDialog {...props}>
      <DialogTitle title="Scrollable" />
      {Array.from({ length: 100 }, (_, i) => (
        <Text key={i} style={tw`p-4`}>
          Item {i + 1}
        </Text>
      ))}
    </CenterDialog>
  );
}

function ScrollableInputDialog(props: DialogProps) {
  return (
    <CenterDialog {...props}>
      <DialogTitle title="Scrollable" />
      {Array.from({ length: 10 }, (_, i) => (
        <Text key={i} style={tw`p-4`}>
          Item {i + 1}
        </Text>
      ))}
      <TextInput
        style={tw`h-12 border border-black rounded-lg m-4`}
        placeholder="Please enter"
      />
    </CenterDialog>
  );
}

function BottomSimpleDialog(props: DialogProps) {
  return (
    <BottomDialog {...props}>
      <DialogTitle title="Simple" />
      <Text style={tw`p-4`}>Hello, Aitsuki!</Text>
    </BottomDialog>
  );
}

function BottomInputDialog(props: DialogProps) {
  return (
    <BottomDialog {...props}>
      <DialogTitle title="Input" />
      <TextInput
        style={tw`h-12 border border-black rounded-lg m-4`}
        placeholder="Please enter"
      />
    </BottomDialog>
  );
}

function BottomScrollableDialog(props: DialogProps) {
  return (
    <BottomDialog {...props}>
      <DialogTitle title="Scrollable" />
      {Array.from({ length: 100 }, (_, i) => (
        <Text key={i} style={tw`p-4`}>
          Item {i + 1}
        </Text>
      ))}
    </BottomDialog>
  );
}

function BottomScrollableInputDialog(props: DialogProps) {
  return (
    <BottomDialog {...props}>
      <DialogTitle title="Scrollable" />
      {Array.from({ length: 10 }, (_, i) => (
        <Text key={i} style={tw`p-4`}>
          Item {i + 1}
        </Text>
      ))}
      <TextInput
        style={tw`h-12 border border-black rounded-lg m-4`}
        placeholder="Please enter"
      />
    </BottomDialog>
  );
}

export default App;
