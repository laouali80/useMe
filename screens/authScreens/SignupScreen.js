import {
  Button,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import {
  FontAwesome6,
  MaterialCommunityIcons,
  SimpleLineIcons,
  Ionicons,
} from "@expo/vector-icons";
import tw from "twrnc";

const Signup = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full w-full`}>
      <ScrollView style={tw`px-5 py-2`}>
        <Text style={tw`text-[#5c89f4] font-bold text-2xl mb-1`}>UseMe.</Text>
        <Text style={tw`text-gray-400 font-semibold text-xl mb-8`}>
          Create your UseMe account.
        </Text>

        {/* FIRST NAME */}
        <Text style={tw`text-gray-500 font-bold text-lg mb-1`}>First Name</Text>
        <TextInput
          inlineImageLeft={<FontAwesome6 name="user" size={24} color="red" />}
          placeholder="Enter your first name"
          style={tw`bg-[#edf0ff] p-3 rounded-lg font-semibold mb-5`}
        />

        {/* LAST NAME */}
        <Text style={tw`text-gray-500 font-bold text-lg mb-1`}>Last Name</Text>
        <TextInput
          style={tw`bg-[#edf0ff] p-3 rounded-lg font-semibold mb-5`}
          inlineImageLeft={<FontAwesome6 name="user" size={24} color="red" />}
          placeholder="Enter your last name"
        />

        {/* EMAIL */}
        <Text style={tw`text-gray-500 font-bold text-lg mb-1`}>Email</Text>
        <TextInput
          style={tw`bg-[#edf0ff] p-3 rounded-lg font-semibold mb-5`}
          inlineImageLeft={
            <MaterialCommunityIcons
              name="email-outline"
              size={24}
              color="black"
            />
          }
          placeholder="Enter your email"
        />

        {/* PHONE NUMBER */}
        <Text style={tw`text-gray-500 font-bold text-lg mb-1`}>
          Phone Number
        </Text>
        <TextInput
          style={tw`bg-[#edf0ff] p-3 rounded-lg font-semibold mb-5`}
          inlineImageLeft={
            <SimpleLineIcons name="phone" size={24} color="black" />
          }
          placeholder="Enter your phone number"
        />

        {/* CREATE PIN */}
        <Text style={tw`text-gray-500 font-bold text-lg mb-1`}>Create Pin</Text>
        <TextInput
          style={tw`bg-[#edf0ff] p-3 rounded-lg font-semibold mb-5`}
          inlineImageLeft={
            <Ionicons name="bag-outline" size={24} color="black" />
          }
          placeholder="Enter your preferred pin"
          secureTextEntry={true}
          autoCapitalize="none"
        />

        {/* CONFIRM PIN */}
        <Text style={tw`text-gray-500 font-bold text-lg mb-1`}>
          Confirm Pin
        </Text>
        <TextInput
          style={tw`bg-[#edf0ff] p-3 rounded-lg font-semibold mb-5`}
          inlineImageLeft={
            <Ionicons name="bag-outline" size={24} color="black" />
          }
          placeholder="Enter pin again"
          secureTextEntry={true}
          autoCapitalize="none"
        />

        <TouchableOpacity style={tw`bg-[#5c89f4] items-center p-5 rounded-lg`}>
          <Text style={tw`text-white font-bold`}>Create Account</Text>
        </TouchableOpacity>
        {/* <Button title="Create Account" onPress={{}} /> */}

        <View style={tw`items-center my-2`}>
          <Text>
            Already have an account?
            <Pressable onPress={{}} style={tw`bg-red-200 pl-1`}>
              <Text style={tw`text-[#5c89f4]`}>Sign In</Text>
            </Pressable>
          </Text>
        </View>
      </ScrollView>
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
