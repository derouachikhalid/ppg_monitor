import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from "react-navigation";
import ListScreen from "../screens/ListScreens/ListScreen";
import DetailView from "../screens/ListScreens/DetailView";

const allScreens = {
    Home : {
        screen : ListScreen,
        
    },
    ReviewDetails : {
        screen : DetailView,
    }
}

const ListStack = createStackNavigator(allScreens,
    {
        defaultNavigationOptions : {
            title : '',
            headerShown : false,
        }
    }
    );

export default createAppContainer(ListStack);