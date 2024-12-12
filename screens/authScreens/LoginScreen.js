import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../constants/COLORS";

const Login = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full w-full`}>
      <View style={tw`px-5 py-2`}>
        <Text style={tw`text-[#5c89f4] font-bold text-2xl mb-1`}>UseMe.</Text>

        <Text style={tw`font-bold text-2xl mt-6`}>Welcome to UseMe.</Text>
        <Text style={tw`text-gray-400 font-semibold text-xl mb-8`}>
          Fill your details below to login into your UseMe account.
        </Text>

        {/* PHONE NUMBER */}
        <Text style={tw`text-gray-500 font-bold text-lg mb-1`}>
          Phone Number
        </Text>
        <TextInput
          inlineImageLeft={
            <SimpleLineIcons name="phone" size={24} color="black" />
          }
          placeholder="Enter your phone number"
          style={tw`bg-[#edf0ff] p-3 rounded-lg font-semibold mb-5`}
        />

        {/* PIN */}
        <Text style={tw`text-gray-500 font-bold text-lg mb-1`}>Pin</Text>
        <TextInput
          inlineImageLeft={
            <Ionicons name="bag-outline" size={24} color="black" />
          }
          placeholder="Enter Pin"
          secureTextEntry={true}
          autoCapitalize="none"
          style={tw`bg-[#edf0ff] p-3 rounded-lg font-semibold mb-5`}
        />
        <Text style={tw`text-[#5c89f4]`}>Forget Pin?</Text>

        <TouchableOpacity style={tw`bg-[#5c89f4] items-center p-5 rounded-lg`}>
          <Text style={tw`text-white font-bold`}>Login</Text>
        </TouchableOpacity>

        <View style={tw`items-center my-2`}>
          <Text>
            Don't have an account?
            <Pressable onPress={{}} style={tw`bg-red-200 pl-1`}>
              <Text style={tw`text-[#5c89f4]`}>Create Account</Text>
            </Pressable>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
