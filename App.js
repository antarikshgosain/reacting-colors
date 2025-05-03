import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/ComponentScreen";
import { Component } from "react";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import ChooseColorScreen from "./src/screens/ChooseColorScreen";
import SqaureColorScreen from "./src/screens/SqaureColorScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    ChooseColor: ChooseColorScreen,
    SqaureColor: SqaureColorScreen,
    //add new screens here
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "My React App",
    },
  }
);

export default createAppContainer(navigator);


