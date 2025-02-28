import {
  Platform,
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
import { useNavigation } from "@react-navigation/native";

const SignupScreen = () => {
  const navigation = useNavigation();

  const _loginPage = () => {
    navigation.navigate("Login");
  };
  return (
    <SafeAreaView style={tw`bg-white h-full w-full`}>
      <ScrollView style={tw`px-5 py-${Platform.OS === "ios" ? "2" : "10"}`}>
        <Text style={tw`text-[#5c89f4] font-bold text-2xl mb-1`}>UseMe.</Text>
        <Text style={tw`text-gray-400 font-semibold text-xl mb-8`}>
          Create your UseMe account.
        </Text>

        {/* FIRST NAME */}
        <Text style={tw`text-gray-500 font-bold text-lg mb-1`}>First Name</Text>
        <View
          style={tw`flex flex-row items-center bg-[#edf0ff] p-3 rounded-lg mb-5`}
        >
          <FontAwesome6 name="user" size={24} style={tw`mr-3 text-gray-500`} />
          <TextInput
            placeholder="Enter your first name"
            style={tw`flex-1 font-semibold`}
          />
        </View>

        {/* LAST NAME */}
        <Text style={tw`text-gray-500 font-bold text-lg mb-1`}>Last Name</Text>
        <View
          style={tw`flex flex-row items-center bg-[#edf0ff] p-3 rounded-lg mb-5`}
        >
          <FontAwesome6 name="user" size={24} style={tw`mr-3 text-gray-500`} />
          <TextInput
            style={tw`flex-1 font-semibold`}
            placeholder="Enter your last name"
          />
        </View>

        {/* EMAIL */}
        <Text style={tw`text-gray-500 font-bold text-lg mb-1`}>Email</Text>
        <View
          style={tw`flex flex-row items-center bg-[#edf0ff] p-3 rounded-lg mb-5`}
        >
          <MaterialCommunityIcons
            name="email-outline"
            size={24}
            style={tw`mr-3 text-gray-500`}
          />
          <TextInput
            style={tw`flex-1 font-semibold`}
            placeholder="Enter your email"
            textContentType="emailAddress"
          />
        </View>

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

        {/* CREATE PIN */}
        <Text style={tw`text-gray-500 font-bold text-lg mb-1`}>Create Pin</Text>
        <View
          style={tw`flex flex-row items-center bg-[#edf0ff] p-3 rounded-lg mb-5`}
        >
          <Ionicons
            name="bag-outline"
            size={24}
            style={tw`mr-3 text-gray-500`}
          />
          <TextInput
            style={tw`flex-1 font-semibold`}
            placeholder="Enter your preferred pin"
            secureTextEntry={true}
            autoCapitalize="none"
          />
        </View>

        {/* CONFIRM PIN */}
        <Text style={tw`text-gray-500 font-bold text-lg mb-1`}>
          Confirm Pin
        </Text>
        <View
          style={tw`flex flex-row items-center bg-[#edf0ff] p-3 rounded-lg mb-5`}
        >
          <Ionicons
            name="bag-outline"
            size={24}
            style={tw`mr-3 text-gray-500`}
          />
          <TextInput
            style={tw`flex-1 font-semibold`}
            placeholder="Enter pin again"
            secureTextEntry={true}
            autoCapitalize="none"
          />
        </View>

        <TouchableOpacity style={tw`bg-[#5c89f4] items-center p-5 rounded-lg`}>
          <Text style={tw`text-white font-bold`}>Create Account</Text>
        </TouchableOpacity>
        {/* <Button title="Create Account" onPress={{}} /> */}

        <View style={tw`items-center my-2`}>
          <Text>
            Already have an account?
            <Text style={tw`text-[#5c89f4]`} onPress={_loginPage}>
              Sign In
            </Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({});
