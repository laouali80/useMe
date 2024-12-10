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
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`bg-red-200 flex`}>
        <Text style={tw`text-[#4b78ed]`}>UseMe.</Text>
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

        <Button title="Create Account" style={styles.button} onPress={{}} />

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

const styles = StyleSheet.create({});
