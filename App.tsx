import { useState } from "react";
import { Button, ScrollView, Text, TextInput, View } from "react-native";
import { SystemBars } from "react-native-edge-to-edge";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { CenterDialog, CenterDialogProps } from "./components/center-dialog";

export default function App() {
  const [openSimple, setOpenSimple] = useState(false);
  const [openInput, setOpenInput] = useState(false);
  const [openScrollable, setOpenScrollable] = useState(false);
  const [openScrollableInput, setOpenScrollableInput] = useState(false);

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
        </SafeAreaProvider>
      </KeyboardProvider>
    </>
  );
}

const SimpleDialog = ({ ...props }: CenterDialogProps) => {
  return (
    <CenterDialog {...props}>
      <Text style={{ fontSize: 32, fontWeight: "bold" }}>Simple Dialog</Text>
    </CenterDialog>
  );
};

const InputDialog = ({ ...props }: CenterDialogProps) => {
  return (
    <CenterDialog {...props}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>Input Dialog</Text>
      <TextInput
        placeholder="Please enter"
        style={{ height: 40, borderWidth: 1, padding: 10, margin: 12 }}
      />
    </CenterDialog>
  );
};

const ScrollableDialog = ({ ...props }: CenterDialogProps) => {
  return (
    <CenterDialog {...props}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>
        Scrollable Content
      </Text>
      <ScrollView>
        <View onStartShouldSetResponder={() => true}>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Contrary to popular
            belief, Lorem Ipsum is not simply random text. It has roots in a
            piece of classical Latin literature from 45 BC, making it over 2000
            years old. Richard McClintock, a Latin professor at Hampden-Sydney
            College in Virginia, looked up one of the more obscure Latin words,
            consectetur, from a Lorem Ipsum passage, and going through the cites
            of the word in classical literature, discovered the undoubtable
            source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de
            Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
            Cicero, written in 45 BC. This book is a treatise on the theory of
            ethics, very popular during the Renaissance. The first line of Lorem
            Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
            1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is
            reproduced below for those interested. Sections 1.10.32 and 1.10.33
            from "de Finibus Bonorum et Malorum" by Cicero are also reproduced
            in their exact original form, accompanied by English versions from
            the 1914 translation by H. Rackham.
          </Text>
        </View>
      </ScrollView>
    </CenterDialog>
  );
};

const ScrollableInputDialog = ({ ...props }: CenterDialogProps) => {
  return (
    <CenterDialog {...props}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>
        Scrollable Content
      </Text>
      <ScrollView>
        <View onStartShouldSetResponder={() => true}>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
          </Text>
          <TextInput
            placeholder="Please enter"
            style={{ height: 40, borderWidth: 1, padding: 10, margin: 12 }}
          />
          <Text>
            PageMaker including versions of Lorem Ipsum. Contrary to popular
            belief, Lorem Ipsum is not simply random text. It has roots in a
            piece of classical Latin literature from 45 BC, making it over 2000
            years old. Richard McClintock, a Latin professor at Hampden-Sydney
            College in Virginia, looked up one of the more obscure Latin words,
            consectetur, from a Lorem Ipsum passage, and going through the cites
            of the word in classical literature, discovered the undoubtable
            source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de
            Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
            Cicero, written in 45 BC. This book is a treatise on the theory of
            ethics, very popular during the Renaissance. The first line of Lorem
            Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
            1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is
            reproduced below for those interested. Sections 1.10.32 and 1.10.33
            from "de Finibus Bonorum et Malorum" by Cicero are also reproduced
            in their exact original form, accompanied by English versions from
            the 1914 translation by H. Rackham.
          </Text>
        </View>
      </ScrollView>
    </CenterDialog>
  );
};
