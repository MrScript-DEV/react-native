import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/Auth/LoginScreen";
import RegisterScreen from "../screens/Auth/RegisterScreen";
import DashboardScreen from "../screens/DashboardScreen";
import CreateTicketScreen from "../screens/Tickets/CreateTicketScreen";
import IndexEvaluateTicketScreen from "../screens/Tickets/IndexEvaluateTicketScreen";
import IndexHistoryTicketScreen from "../screens/Tickets/IndexHistoryTicketScreen";
import IndexTicketScreen from "../screens/Tickets/IndexTicketScreen";
import SettingsScreen from "../screens/Settings/SettingsScreen";
import ShowTicketScreen from "../screens/Tickets/ShowTicketScreen";
import AboutScreen from "../screens/Settings/AboutScreen";
import HelpScreen from "../screens/Settings/HelpScreen";
import EditProfileScreen from "../screens/Settings/EditProfileScreen";

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: "Connexion" }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ title: "Inscription" }}
        />
        <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{ title: "Tableau de bord" }}
        />

        {/* Tickets */}
        <Stack.Screen
          name="CreateTicket"
          component={CreateTicketScreen}
          options={{ title: "Création de ticket" }}
        />
        <Stack.Screen
          name="IndexEvaluateTicket"
          component={IndexEvaluateTicketScreen}
          options={{ title: "Tickets à évaluer" }}
        />
        <Stack.Screen
          name="IndexHistoryTicket"
          component={IndexHistoryTicketScreen}
          options={{ title: "Historique des tickets" }}
        />
        <Stack.Screen
          name="IndexTicket"
          component={IndexTicketScreen}
          options={{ title: "Tickets en cours" }}
        />
        <Stack.Screen
          name="ShowTicket"
          component={ShowTicketScreen}
          options={{ title: "Discussion du ticket" }}
        />

        {/* Settings */}
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ title: "Paramètre" }}
        />

        <Stack.Screen
          name="EditProfile"
          component={EditProfileScreen}
          options={{ title: "Modification du profil" }}
        />

        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{ title: "A propos" }}
        />

        <Stack.Screen
          name="Help"
          component={HelpScreen}
          options={{ title: "Centre d'aide" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
