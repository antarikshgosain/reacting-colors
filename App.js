import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/ComponentScreen";
import { Component } from "react";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import CounterReducerScreen from "./src/screens/CounterReducerScreen";
import ColorScreen from "./src/screens/ColorScreen";
import ChooseColorScreen from "./src/screens/ChooseColorScreen";
import SqaureColorScreen from "./src/screens/SqaureColorScreen";
import TextScreen from "./src/screens/TextScreen";
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    CounterReducer: CounterReducerScreen,
    Color: ColorScreen,
    ChooseColor: ChooseColorScreen,
    SqaureColor: SqaureColorScreen,
    Text: TextScreen,
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


