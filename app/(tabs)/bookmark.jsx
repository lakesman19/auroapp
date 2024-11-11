import { Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const bookmark = () => {
  return (
    <SafeAreaView className="px-4 my-6 bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <Text className="text-2xl text-white font-psemibold">Bookmark</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default bookmark;



