import { StatusBar } from "expo-status-bar";
import {
	NavigationContainer,
	DefaultTheme,
	DarkTheme,
} from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "react-query";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import { configureFonts, Provider as PaperProvider } from "react-native-paper";

import { Home } from "./src/pages/Home";
import { SafeAreaView } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();

const queryClient = new QueryClient();

const theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		background: "#000000",
		dark: "#17181A",
		primary: "#FFFFFF",
		primarySoft: "rgba(255, 255, 255, 0.87)",
		primaryLight: "rgba(255, 255, 255, 0.6)",
		primaryThin: "rgba(255, 255, 255, 0.12)",
	},
	animation: { scale: 1 },
	roundness: 16,
	fonts:
		Platform.OS === "web"
			? {
					regular: "Montserrat",
					medium: "Montserrat",
					light: "Montserrat",
					thin: "Montserrat",
			  }
			: {
					regular: {
						fontFamily: "AppleSDGothicNeo-SemiBold",
						fontWeight: "normal",
					},
					medium: {
						fontFamily: "AppleSDGothicNeo-Medium",
						fontWeight: "normal",
					},
					light: {
						fontFamily: "AppleSDGothicNeo-Regular",
						fontWeight: "normal",
					},
					thin: {
						fontFamily: "AppleSDGothicNeo-Light",
						fontWeight: "normal",
					},
			  },
};

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<NavigationContainer theme={DarkTheme}>
				<PaperProvider theme={theme}>
					<Stack.Navigator initialRouteName="Home">
						<Stack.Screen
							name="Home"
							component={Home}
							options={{ headerShown: false }}
						/>
					</Stack.Navigator>
				</PaperProvider>
			</NavigationContainer>
		</QueryClientProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
