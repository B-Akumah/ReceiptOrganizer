import CategoriesPage from "./pages/CategoriesPage";
import SpacesPage from "./pages/SpacesPage";
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from "@react-navigation/native";
import AppNavigationProvider from "./AppNavigationProvider";

const Stack = createStackNavigator();
const AppNavigator = () => (
    <AppNavigationProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Spaces">
          <Stack.Screen name="Categories" component={CategoriesPage}/>
          <Stack.Screen name="Spaces" component={SpacesPage}/>
        </Stack.Navigator>
      </NavigationContainer>
    </AppNavigationProvider>
);

export default AppNavigator;
