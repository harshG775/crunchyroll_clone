import { StyleSheet, Text, View } from "react-native";

export default function TopNavbar() {
    return (
        <View style={styles.nav}>
            <Text style={styles.link}>LOGO</Text>
            <View>
                <Text style={styles.link}>Home</Text>
            </View>
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
