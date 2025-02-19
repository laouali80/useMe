import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  AntDesign,
  Entypo,
  FontAwesome6,
  Foundation,
  SimpleLineIcons,
} from "@expo/vector-icons";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.imageWrapper}>
          <Image
            source={require("../../assets/profile/prof1.jpg")}
            style={styles.profileImage}
          />
          <View style={styles.addIconContainer}>
            <FontAwesome6 name="circle-plus" size={24} style={styles.addIcon} />
          </View>
        </View>

        <Text style={styles.username}>Test User</Text>

        {/* Personal Information option */}
        <ProfileOption
          icon={
            <FontAwesome6 name="user" size={24} style={styles.optionIcon} />
          }
          text="Personal Information"
        />

        {/* Wallet option*/}
        <ProfileOption
          icon={
            <SimpleLineIcons
              name="wallet"
              size={24}
              style={styles.optionIcon}
            />
          }
          text="Wallet"
        />

        {/* Cart Option */}
        <ProfileOption
          icon={
            <SimpleLineIcons name="bag" size={24} style={styles.optionIcon} />
          }
          text="Cart"
          onPress={() => navigation.navigate("Cart")}
        />

        {/* History option */}
        <ProfileOption
          icon={
            <Foundation
              name="clipboard-notes"
              size={24}
              style={styles.optionIcon}
            />
          }
          text="History"
        />

        {/* Sign Out Option */}
        <ProfileOption
          icon={<Entypo name="log-out" size={24} style={styles.optionIcon} />}
          text="Sign Out"
          onPress={() => navigation.navigate("Onboarding")}
        />
      </View>
    </View>
  );
};

const ProfileOption = ({ icon, text, onPress }) => (
  <TouchableOpacity style={styles.option} onPress={onPress}>
    {icon}
    <Text style={styles.optionText}>{text}</Text>
    <AntDesign name="right" size={24} color="black" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: tw`flex-1 justify-between px-5`,
  profileContainer: tw`justify-center items-center flex-1`,
  imageWrapper: tw`relative`,
  profileImage: tw`rounded-full w-36 h-36`,
  addIconContainer: tw`absolute -bottom-1 right-4 bg-white rounded-full p-1`,
  addIcon: tw`text-[#2358ea]`,
  username: tw`text-2xl font-semibold my-5`,
  option: tw`flex flex-row items-center bg-[#edf0ff] p-4 rounded-lg mb-5`,
  optionIcon: tw`mr-3 text-[#2358ea]`,
  optionText: tw`flex-1 font-semibold`,
});

export default ProfileScreen;
