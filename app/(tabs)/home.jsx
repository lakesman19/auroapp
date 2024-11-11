import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, Image, RefreshControl, Text, View } from "react-native";

import { images } from "../../constants";
import useAppwrite from "../../lib/useAppwrite";
import { getAllPosts, getLatestPosts } from "../../lib/appwrite";
import { EmptyState, SearchInput, Trending, VideoCard } from "../../components";

const home = () => {
  // const { data: posts, refetch } = useAppwrite(getAllPosts);
  // const { data: latestPosts } = useAppwrite(getLatestPosts);

  const [refreshing, setRefreshing] = useState(false);
  const latestPosts = [];
  const onRefresh = async () => {
    setRefreshing(true);
    await new Promise((resolve) => setTimeout(resolve, 30000)); // Waits 30 seconds
    setRefreshing(false);
  };
  const getRandomUsername = () => {
    const names = [
      "Oluwaseun",
      "Chinonso",
      "Adebayo",
      "Ngozi",
      "Ayotunde",
      "Uchechukwu",
      "Temidayo",
      "Olamide",
      "Ifeoma",
      "Chijioke",
      "Chuka",
      "Ebuka",
      "Anayo",
    ];
    const randomName = names[Math.floor(Math.random() * names.length)];
    return `${randomName}${Math.floor(Math.random() * 100)}`;
  };

  const videos = [
    {
      title: "Get inspired to code",
      thumbnail: "https://i.ibb.co/tJBcX20/Appwrite-video.png",
      video: "https://player.vimeo.com/video/949579770?h=897cd5e781",
      prompt:
        "Create a motivating AI driven video aimed at inspiring coding enthusiasts with simple language",
      username: getRandomUsername(),
      avatar: "https://i.pravatar.cc/150?img=1", // Random avatar placeholder
    },
    {
      title: "How AI Shapes Coding Future",
      thumbnail: "https://i.ibb.co/Xkgk7DY/Video.png",
      video: "https://player.vimeo.com/video/949581999?h=4672125b31",
      prompt: "Picture the future of coding with AI. Show AR VR",
      username: getRandomUsername(),
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
      title: "Dalmatian's journey through Italy",
      thumbnail: "https://i.ibb.co/CBYzyKh/Video-1.png",
      video: "https://player.vimeo.com/video/949582778?h=d60220d68d",
      prompt:
        "Create a heartwarming video following the travels of dalmatian dog exploring beautiful Italy",
      username: getRandomUsername(),
      avatar: "https://i.pravatar.cc/150?img=3",
    },
    {
      title: "Meet small AI friends",
      thumbnail: "https://i.ibb.co/7XqVPVT/Photo-1677756119517.png",
      video: "https://player.vimeo.com/video/949616422?h=d60220d68d",
      prompt:
        "Make a video about a small blue AI robot blinking its eyes and looking at the screen",
      username: getRandomUsername(),
      avatar: "https://i.pravatar.cc/150?img=4",
    },
    {
      title: "Find inspiration in Every Line",
      thumbnail: "https://i.ibb.co/mGfCYJY/Video-2.png",
      video: "https://player.vimeo.com/video/949617485?h=d60220d68d",
      prompt:
        "A buy working on his laptop that sparks excitement for coding, emphasizing the endless possibilities and personal growth it offers",
      username: getRandomUsername(),
      avatar: "https://i.pravatar.cc/150?img=5",
    },
    {
      title: "Japan's Blossoming temple",
      thumbnail: "https://i.ibb.co/3Y2Nk7q/Bucket-215.png",
      video: "https://player.vimeo.com/video/949618057?h=d60220d68d",
      prompt:
        "Create a captivating video journey through Japan's Sakura Temple",
      username: getRandomUsername(),
      avatar: "https://i.pravatar.cc/150?img=6",
    },
    {
      title: "A Glimpse into Tomorrow's VR World",
      thumbnail: "https://i.ibb.co/C5wXXf9/Video-3.png",
      video: "https://player.vimeo.com/video/949620017?h=d60220d68d",
      prompt: "An imaginative video envisioning the future of Virtual Reality",
      username: getRandomUsername(),
      avatar: "https://i.pravatar.cc/150?img=7",
    },
    {
      title: "A World where Ideas Grow Big",
      thumbnail: "https://i.ibb.co/DzXRfyr/Bucket-59038.png",
      video: "https://player.vimeo.com/video/949620200?h=d60220d68d",
      prompt:
        "Make a fun video about hackers and all the cool stuff they do with computers",
      username: getRandomUsername(),
      avatar: "https://i.pravatar.cc/150?img=8",
    },
  ];

  return (
    <SafeAreaView className="bg-primary">
      <FlatList
        data={videos}
        keyExtractor={(item) => item.username}
        renderItem={({ item, index }) => (
          <VideoCard
            // key={item.username}
            title={item.title}
            thumbnail={item.thumbnail}
            video={item.video}
            creator={item.username}
            avatar={item.avatar}
          />
        )}
        ListHeaderComponent={() => (
          <View className="flex my-6 px-4 space-y-6">
            <View className="flex justify-between items-start flex-row mb-6">
              <View>
                <Text className="font-pmedium text-sm text-gray-100">
                  Welcome Back
                </Text>
                <Text className="text-2xl font-psemibold text-white">
                 Lakesman
                </Text>
              </View>

              <View className="mt-1.5">
                <Image
                  source={images.logoSmall}
                  className="w-9 h-10"
                  resizeMode="contain"
                />
              </View>
            </View>

            <SearchInput />

            <View className="w-full flex-1 pt-5 pb-8">
              <Text className="text-lg font-pregular text-gray-100 mb-3">
                Latest Videos
              </Text>

              <Trending posts={videos ?? []} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos Found"
            subtitle="No videos created yet"
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

export default home;
