import { StyleSheet } from "react-native";
import { COLORS } from "./COLORS";
import { SIZES } from "./SIZES";

export default stylesProductDetails = StyleSheet.create({
  upperRow: {
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    width: SIZES.width - 44, // xxlarge
    top: SIZES.xxLarge, // width
    zIndex: 999,
  },

  productDetails: {
    marginTop: -SIZES.large,
    backgroundColor: "",
    width: SIZES.width,
    borderTopLeftRadius: SIZES.mediun,
    borderTopRightRadius: SIZES.mediun,
  },

  titleRow: {
    marginHorizontal: 20,
    paddingBottom: SIZES.small,
    flexDirection: "row",
    justifyContent: "center",
    width: SIZES.width - 44,
    top: 20,
  },

  title: {
    fontFamily: "bold",
    fontSize: SIZES.large,
  },

  price: {
    fontFamily: "semibold",
    fontSize: SIZES.large,
    paddingHorizontal: 10,
  },
  priceWrapper: {
    backgroundColor: COLORS.secondary,
    borderRadiua: SIZES.large,
  },

  ratingRow: {
    marginHorizontal: 20,
    paddingBottom: SIZES.small,
    flexDirection: "row",
    justifyContent: "center",
    width: SIZES.width - 10,
    top: 5,
  },

  rating: {
    top: SIZES.large,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginHorizontal: SIZES.large,
  },

  ratingText: {
    color: "grey",
    fontFamily: "medium",
  },

  descriptionWrapper: {
    marginTop: SIZES.large * 2,
    marginHorizontal: SIZES.large,
  },

  description: {
    fontFamily: "medium",
    fontSize: SIZES.large,
  },

  descText: {
    fontFamily: "regular",
    fontSize: SIZES.small,
    textAlign: "justify",
    marginBottom: SIZES.small,
  },
});
