import { Text, ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import Section from "@src/components/ui/section/Section";

export default function Home() {
    return (
        <ScrollView style={styles.main} contentInsetAdjustmentBehavior="automatic">
            <Section title="Trending">
                <View>
                    <Text>some data</Text>
                    <Text>some data</Text>
                    <Text>some data</Text>
                    <Text>some data</Text>
                </View>
            </Section>
            <Section title="Trending">
                <View>
                    <Text>some data</Text>
                    <Text>some data</Text>
                    <Text>some data</Text>
                    <Text>some data</Text>
                </View>
            </Section>
            <Section title="Trending">
                <View>
                    <Text>some data</Text>
                    <Text>some data</Text>
                    <Text>some data</Text>
                    <Text>some data</Text>
                </View>
            </Section>
            <Section title="Trending">
                <View>
                    <Text>some data</Text>
                    <Text>some data</Text>
                    <Text>some data</Text>
                    <Text>some data</Text>
                </View>
            </Section>
            <Section title="Trending">
                <View>
                    <Text>some data</Text>
                    <Text>some data</Text>
                    <Text>some data</Text>
                    <Text>some data</Text>
                </View>
            </Section>
            <Section title="Trending">
                <View>
                    <Text>some data</Text>
                    <Text>some data</Text>
                    <Text>some data</Text>
                    <Text>some data</Text>
                </View>
            </Section>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    main: {
        // flex: 1,
    },
});