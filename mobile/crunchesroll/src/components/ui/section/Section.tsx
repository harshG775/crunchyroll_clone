import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import React from "react";

type ItemProps = {
    item: {
        imgSrc: string;
        rating: number;
        title: string;
    };
};
function Item({ item }: ItemProps) {
    return (
        <View>
            <Image
                source={{ uri: item.imgSrc }}
                style={{ width: 200, height: 200 }}
            />
            <View>
                <Text>{item.title}</Text>
                <Text>{item.rating}</Text>
            </View>
        </View>
    );
}
type SectionProps = {
    title: string;
    children: React.ReactNode;
};
export default function Section(props: SectionProps) {
    const { title, children } = props;
    return (
        <View style={styles.section}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal={true}
                data={[
                    {
                        imgSrc: "https://picsum.photos/200/300",
                        title: "movie",
                        rating: 9.9,
                        id: 1,
                    },
                    {
                        imgSrc: "https://picsum.photos/200/300",
                        title: "movie",
                        rating: 9.9,
                        id: 2,
                    },
                    {
                        imgSrc: "https://picsum.photos/200/300",
                        title: "movie",
                        rating: 9.9,
                        id: 3,
                    }
                ]}
                renderItem={({ item }) => <Item item={item} />}
                ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
                ListEmptyComponent={() => <Text>No data</Text>}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                // ListHeaderComponent={() => <Text>ListHeaderComponent</Text>}
                // ListFooterComponent={() => <Text>ListFooterComponent</Text>}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    section: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
    },
});
