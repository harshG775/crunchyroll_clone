import TopNavbar from "./components/ui/navbar/TopNavbar";
import BottomNavbar from "./components/ui/navbar/BottomNavbar";
import Home from "./screens/home/Screen";
// import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, StatusBar} from "react-native";


export default function App() {
    return (
        <SafeAreaView style={styles.body}>
            {/* <StatusBar style="auto" /> */}
            <TopNavbar />
            <Home />
            <BottomNavbar />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
});
