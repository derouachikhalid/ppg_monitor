import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from "react-navigation";
import WelcomeMonitor from "../screens/MonitorScreens/WelcomeMonitor";
import MonitorScreen from "../screens/MonitorScreens/MonitorScreen";

const allScreens = {
    Home : {
        screen : WelcomeMonitor,
    },
    ReviewDetails : {
        screen : MonitorScreen,
    }
}

const MonStack = createStackNavigator(allScreens,
    {
        defaultNavigationOptions : {
            title : '',
            headerShown : false,
        }
    }
    );

export default createAppContainer(MonStack);