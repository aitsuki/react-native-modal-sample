import { useState } from "react";
import { Button, ScrollView, Text, TextInput, View } from "react-native";
import { SystemBars } from "react-native-edge-to-edge";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { BottomDialog } from "./components/bottom-dialog";
import { CenterDialog, CenterDialogProps } from "./components/center-dialog";
import { loremIpsum } from "./constants";

export default function App() {
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
    <>
      <SystemBars style="auto" />
      <KeyboardProvider>
        <SafeAreaProvider>
          <SafeAreaView style={{ flex: 1, padding: 16, gap: 8 }}>
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
          </SafeAreaView>
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
        </SafeAreaProvider>
      </KeyboardProvider>
    </>
  );
}

const SimpleDialog = ({ ...props }: CenterDialogProps) => {
  return (
    <CenterDialog {...props}>
      <SimpleContent />
    </CenterDialog>
  );
};

const BottomSimpleDialog = ({ ...props }: CenterDialogProps) => {
  return (
    <BottomDialog {...props}>
      <SimpleContent />
    </BottomDialog>
  );
};

const InputDialog = ({ ...props }: CenterDialogProps) => {
  return (
    <CenterDialog {...props}>
      <InputContent />
    </CenterDialog>
  );
};

const BottomInputDialog = ({ ...props }: CenterDialogProps) => {
  return (
    <BottomDialog {...props}>
      <InputContent />
    </BottomDialog>
  );
};

const ScrollableDialog = ({ ...props }: CenterDialogProps) => {
  return (
    <CenterDialog {...props}>
      <ScrollableContent />
    </CenterDialog>
  );
};

const BottomScrollableDialog = ({ ...props }: CenterDialogProps) => {
  return (
    <BottomDialog {...props}>
      <ScrollableContent />
    </BottomDialog>
  );
};

const ScrollableInputDialog = ({ ...props }: CenterDialogProps) => {
  return (
    <CenterDialog {...props}>
      <ScrollableInputContent />
    </CenterDialog>
  );
};

const BottomScrollableInputDialog = ({ ...props }: CenterDialogProps) => {
  return (
    <BottomDialog {...props}>
      <ScrollableInputContent />
    </BottomDialog>
  );
};

const SimpleContent = () => {
  return (
    <Text style={{ fontSize: 32, fontWeight: "bold" }}>Simple Dialog</Text>
  );
};

const InputContent = () => {
  return (
    <>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>Input Dialog</Text>
      <TextInput
        placeholder="Please enter"
        style={{ height: 40, borderWidth: 1, padding: 10, margin: 12 }}
      />
    </>
  );
};

const ScrollableContent = () => {
  return (
    <>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>
        Scrollable Content
      </Text>
      <ScrollView>
        <View onStartShouldSetResponder={() => true}>
          <Text>
            {loremIpsum}
            {loremIpsum}
          </Text>
        </View>
      </ScrollView>
    </>
  );
};

const ScrollableInputContent = () => {
  return (
    <>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>
        Scrollable Content
      </Text>
      <ScrollView>
        <View onStartShouldSetResponder={() => true}>
          <Text>
            {loremIpsum}
            {loremIpsum}
          </Text>
          <TextInput
            placeholder="Please enter"
            style={{ height: 40, borderWidth: 1, padding: 10, margin: 12 }}
          />
        </View>
      </ScrollView>
    </>
  );
};
