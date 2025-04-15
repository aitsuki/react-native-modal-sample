import { SystemBars } from "react-native-edge-to-edge";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <>
      <SystemBars style="light" />
      <KeyboardProvider>
        <SafeAreaProvider></SafeAreaProvider>
      </KeyboardProvider>
    </>
  );
}
