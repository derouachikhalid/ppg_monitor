import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from "react-navigation";
import AuthScreen from "../screens/AuthScreens/AuthScreen";
import LoginScreen from "../screens/AuthScreens/LoginScreen";
import Profile from "../screens/AuthScreens/Profile";

const allScreens = {
    Profile : {
        screen : Profile,
    },
    Home : {
        screen : AuthScreen,
        
    },
    ReviewDetails : {
        screen : LoginScreen,
    },
    
}

const AuthStack = createStackNavigator(allScreens,
    {
        initialRouteName : "Home",
        defaultNavigationOptions : {
            title : '',
            headerShown : false,
        }
    }
    );

export default createAppContainer(AuthStack);