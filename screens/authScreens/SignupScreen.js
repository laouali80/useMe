import {
  Button,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { COLORS } from "../../constants/COLORS";
import tw from "twrnc";

const Signup = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full w-full`}>
      <View style={tw`p-5`}>
        <Text style={tw`text-[#5c89f4]`}>UseMe.</Text>
        <Text>Create your UseMe account.</Text>

        {/* FIRST NAME */}
        <Text>First Name</Text>
        <TextInput
          //   inlineImageLeft={}
          placeholder="Enter your first name"
        />

        {/* LAST NAME */}
        <Text>Last Name</Text>
        <TextInput
          //   inlineImageLeft={}
          placeholder="Enter your last name"
        />

        {/* EMAIL */}
        <Text>Email</Text>
        <TextInput
          //   inlineImageLeft={}
          placeholder="Enter your email"
        />

        {/* PHONE NUMBER */}
        <Text>Phone Number</Text>
        <TextInput
          //   inlineImageLeft={}
          placeholder="Enter your phone number"
        />

        {/* CREATE PIN */}
        <Text>Create Pin</Text>
        <TextInput
          //   inlineImageLeft={}
          placeholder="Enter your preferred pin"
          secureTextEntry={true}
          autoCapitalize="none"
        />

        {/* CONFIRM PIN */}
        <Text>Confirm Pin</Text>
        <TextInput
          //   inlineImageLeft={}
          placeholder="Enter pin again"
          secureTextEntry={true}
          autoCapitalize="none"
        />

        <Button
          title="Create Account"
          style={styles.button}
          onPress={loginValidation}
        />

        <Text>
          Already have an account?
          <Pressable onPress={{}} style={{}}>
            Sign In
          </Pressable>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  input: {
    padding: 5,
    borderColor: "black",
    borderWidth: 1,
    minWidth: 100,
    marginBottom: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
    // width: "50%",
  },
});
