import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import * as firebase from "firebase";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";

import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import {
  FIREBASE_APP_API_KEY,
  FIREBASE_APP_AUTH_DOMAIN,
  FIREBASE_APP_PROJECT_ID,
  FIREBASE_APP_STORAGE_BUCKET,
  FIREBASE_APP_MESSAGING_SENDER_ID,
  FIREBASE_APP_APP_ID,
  FIREBASE_APP_MEASUREMENT_ID,
} from "@env";
const firebaseConfig = {
  apiKey: FIREBASE_APP_API_KEY,
  authDomain: FIREBASE_APP_AUTH_DOMAIN,
  projectId: FIREBASE_APP_PROJECT_ID,
  storageBucket: FIREBASE_APP_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_APP_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_APP_ID,
  measurementId: FIREBASE_APP_MEASUREMENT_ID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
