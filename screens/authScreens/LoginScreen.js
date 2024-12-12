import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { COLORS } from "../../constants/COLORS";
import tw from "twrnc";
import {
  FontAwesome6,
  MaterialCommunityIcons,
  SimpleLineIcons,
  Ionicons,
} from "@expo/vector-icons";

const Login = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full w-full`}>
      <View style={tw`px-5 py-2`}>
        <Text style={tw`text-[#5c89f4] font-bold text-2xl mb-1`}>UseMe.</Text>

        <Text style={tw`font-bold text-2xl mt-6`}>Welcome to UseMe.</Text>
        <Text style={tw`text-gray-400 font-semibold text-xl mb-20`}>
          Fill your details below to login into your UseMe account.
        </Text>

        {/* PHONE NUMBER */}
        <Text style={tw`text-gray-500 font-bold text-lg mb-1`}>
          Phone Number
        </Text>
        <View
          style={tw`flex flex-row items-center bg-[#edf0ff] p-3 rounded-lg mb-5`}
        >
          <SimpleLineIcons
            name="phone"
            size={24}
            style={tw`mr-3 text-gray-500`}
          />
          <TextInput
            style={tw`flex-1 font-semibold`}
            placeholder="Enter your phone number"
          />
        </View>

        {/* PIN */}
        <Text style={tw`text-gray-500 font-bold text-lg mb-1`}>Pin</Text>
        <View
          style={tw`flex flex-row items-center bg-[#edf0ff] p-3 rounded-lg `}
        >
          <Ionicons
            name="bag-outline"
            size={24}
            style={tw`mr-3 text-gray-500`}
          />
          <TextInput
            style={tw`flex-1 font-semibold`}
            placeholder="Enter Pin"
            secureTextEntry={true}
            autoCapitalize="none"
          />
        </View>
        <View style={tw`flex flex-row justify-end`}>
          <Text
            style={tw`text-[#5c89f4]`}
            onPress={() => console.log("Forget pin pressed")}
          >
            Forget Pin?
          </Text>
        </View>

        <TouchableOpacity
          style={tw`bg-[#5c89f4] items-center p-5 rounded-lg mt-10`}
        >
          <Text style={tw`text-white font-bold`}>Login</Text>
        </TouchableOpacity>

        <View style={tw`items-center my-2`}>
          <Text>
            Don't have an account?
            <Text
              style={tw`text-[#5c89f4]`}
              onPress={() => console.log("Sign In pressed")}
            >
              Create Account
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
