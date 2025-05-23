import {View, Text} from "react-native";
import React from "react";
import {useSelector} from "react-redux";

const TextComponent = () => {
  const {user, isLogin} = useSelector((state) => state.user);

  return (
    <View>
      <Text className="text-green-500 text-5xl">TextComponent</Text>
    </View>
  );
};

export default TextComponent;
