import "./global.css";
import {StatusBar} from "expo-status-bar";

import {store} from "./src/redux/store";
import {Provider} from "react-redux";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {Stack} from "./src/navigation/Stack";
import HomeScreen from "./src/screen/home/HomeScreen";
import LoginScreen from "./src/screen/auth/LoginScreen";

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <AuthComponent />
    </Provider>
  );
}

const AuthComponent = () => {
  const {user, isLogin} = useSelector((state) => state.user);
  useEffect(() => {}, [isLogin]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLogin ? (
          <Stack.Screen name="Home" component={HomeScreen} />
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
