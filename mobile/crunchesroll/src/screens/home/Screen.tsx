import { Text, ScrollView, StyleSheet } from "react-native";
import React from "react";

export default function Home() {
    return (
        <ScrollView style={styles.main} contentInsetAdjustmentBehavior="automatic">
            <Text>
                Home
            </Text>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    main: {
        // flex: 1,
    },
});