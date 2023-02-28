import { SafeAreaView, FlatList } from "react-native";

import PostItem from "./PostItem";
import styles from "./styles";

export default function PostsList({ style = {}, nav, allPosts }) {
  return (
    <SafeAreaView style={{ ...styles.container, ...style }}>
      <FlatList
        data={allPosts}
        renderItem={({ item }) => (
          <PostItem
            postId={item.id}
            img={item.img}
            title={item.title}
            comments={item.commentsCount}
            likes={item.likesCount}
            location={item.location}
            locationData={item.locationData}
            navigation={nav}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}
