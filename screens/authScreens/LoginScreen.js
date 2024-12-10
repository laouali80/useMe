import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../constants/COLORS";

const Login = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>UseMe.</Text>
        <Text>Create your UseMe account.</Text>
        <Text>Fill your details below to login into your UseMe account.</Text>

        {/* PHONE NUMBER */}
        <Text>Phone Number</Text>
        <TextInput
          //   inlineImageLeft={}
          placeholder="Enter your phone number"
        />

        {/* PIN */}
        <Text>Pin</Text>
        <TextInput
          //   inlineImageLeft={}
          placeholder="Enter pin again"
          secureTextEntry={true}
          autoCapitalize="none"
        />
        <Text>Forget Pin?</Text>

        <Button
          title="Create Account"
          style={styles.button}
          onPress={loginValidation}
        />

        <Text>
          Don't have an account?
          <Pressable onPress={{}} style={{}}>
            Create Account
          </Pressable>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
