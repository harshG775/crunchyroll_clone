import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

function Title({ title }: { title: string }) {
    return (
        <View>
            <Text>{title}</Text>
        </View>
    );
}
export default function App() {
    return (
        <View style={styles.container}>
            <Text>Open up App.tsx to start working on your app!</Text>
            <Title title="Hello" />
            <StatusBar style="auto" />
        </View>
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
