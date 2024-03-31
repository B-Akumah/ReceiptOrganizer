import AppContext from "./context/AppContext";
import {useState} from "react";
import {Space} from "./model/Space";
import SpacesData from "./data/SpacesData";

const AppNavigationProvider = ({children}) => {
  const [Spaces, setSpaces] = useState<Space[]>(SpacesData);

  return (
      <AppContext.Provider value={{Spaces, setSpaces}}>
        {children}
      </AppContext.Provider>
  );
}

// const navigation = useContext(NavigationContext);
// onPress={() => navigation.navigate('Home')}

export default AppNavigationProvider;