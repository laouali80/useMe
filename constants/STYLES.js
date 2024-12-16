import { SIZES } from "./SIZES";

export const upperRow = {
  marginHorizontal: 20,
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  position: "absolute",
  width: SIZES.width - 44, // xxlarge
  top: SIZES.xxLarge, // width
  zIndex: 999,
};

export const productDetails = {
  marginTop: -SIZES.large,
  backgroundColor: "",
  width: SIZES.width,
  borderTopLeftRadius: SIZES.mediun,
  borderTopRightRadius: SIZES.mediun,
};

export const titleRow = {
  marginHorizontal: 20,
  paddingBottom: SIZES.small,
  flexDirection: "row",
  justifyContent: "center",
  width: SIZES.width - 44,
  top: 20,
};

export const title = {
  fontFamily: "bold",
  fontSize: SIZES.large,
};

export const price = {
  fontFamily: "semibold",
  fontSize: SIZES.large,
  paddingHorizontal: 10,
};
export const priceWrapper = {
  backgroundColor: Colors.secondary,
  borderRadiua: SIZES.large,
};

export const ratingRow = {
  marginHorizontal: 20,
  paddingBottom: SIZES.small,
  flexDirection: "row",
  justifyContent: "center",
  width: SIZES.width - 10,
  top: 5,
};

export const rating = {
  top: SIZES.large,
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  marginHorizontal: SIZES.large,
};

export const ratingText = {
  color: "grey",
  fontFamily: "medium",
};

export const descriptionWrapper = {
  marginTop: SIZES.large * 2,
  marginHorizontal: SIZES.large,
};

export const description = {
  fontFamily: "medium",
  fontSize: SIZES.large,
};

export const descText = {
  fontFamily: "regular",
  fontSize: SIZES.small,
  textAlign: "justify",
  marginBottom: SIZES.small,
};
