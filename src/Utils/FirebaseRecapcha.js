import React from "react";
import { View, Text } from "react-native";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";

import Constans from "expo-constants";

export default function FirebaseRecapcha(props) {
  const { referencia } = props;
  return (
    <FirebaseRecaptchaVerifierModal
      ref={referencia}
      title="CONcFIRMA QUE NO ERES UN ROBOT"
      cancelLabel="x"
      firebaseConfig={Constans.manifest.extra.firebase}
    />
  );
}
