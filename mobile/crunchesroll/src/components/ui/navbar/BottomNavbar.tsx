import { StyleSheet, Text, View } from "react-native";

export default function BottomNavbar() {
    return (
        <View style={styles.nav}>
            <Text style={styles.link}>Home</Text>
            <Text style={styles.link}>App</Text>
            <Text style={styles.link}>Search</Text>
            <Text style={styles.link}>App</Text>
            <Text style={styles.link}>Settings</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    nav: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        backgroundColor: "#eeeeee",
    },
    link: {
        flex: 1,
        textAlign: "center",
        color: "#ff0000",
        fontWeight: "bold",
        padding: 10,
    },
});
