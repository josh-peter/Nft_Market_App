import React from "react";
import { View, Text, Image } from "react-native";

import { EthPrice } from "./SubInfo";
import { COLORS, SIZES} from "../constants";

const DetailsBid = ({ bid }) => {
  return (
    <>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginVertical: SIZES.base,
          backgroundColor: COLORS.white,
          elevation: 7,
          borderRadius: SIZES.base,
          padding: 20,
        }}
        key={bid.id}
      >
        <Image
          source={bid.image}
          resizeMode="contain"
          style={{ width: 50, height: 50 }}
        />

        <View
          style={{
            flex: 1,
            alignItems: "center",
            paddingHorizontal: SIZES.base,
          }}
        >
          <Text
            style={{
              fontSize: SIZES.large,
              color: COLORS.primary,
            }}
          >
            Bid placed by {bid.name}
          </Text>
          <Text
            style={{
              fontSize: SIZES.small,
              color: COLORS.secondary,
              marginTop: 3,
            }}
          >
            {bid.date}
          </Text>
        </View>

        <EthPrice price={bid.price} />
      </View>
    </>
  );
};

export default DetailsBid;
