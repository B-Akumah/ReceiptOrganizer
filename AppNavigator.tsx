import CategoriesPage from "./pages/CategoriesPage";
import SpacesPage from "./pages/SpacesPage";
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from "@react-navigation/native";

const Stack = createStackNavigator();
const AppNavigator = () => (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Categories">
      <Stack.Screen name="Categories" component={CategoriesPage}/>
      <Stack.Screen name="Spaces" component={SpacesPage}/>
    </Stack.Navigator>
    </NavigationContainer>
);

export default AppNavigator;
