import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Image, FlatList, TouchableOpacity } from "react-native";

import { icons } from "../../constants";
import useAppwrite from "../../lib/useAppwrite";
import { getUserPosts, signOut } from "../../lib/appwrite";
import { useGlobalContext } from "../../context/GlobalProvider";
import { EmptyState, InfoBox, VideoCard } from "../../components";

const Profile = () => {
  const { user, setUser, setIsLogged } = useGlobalContext();
  // const { data: posts } = useAppwrite(() => getUserPosts(user.$id));
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

  const posts = [
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

  const logout = async () => {
    setUser(null);
    setIsLogged(false);

    router.replace("/sign-in");
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={posts}
        keyExtractor={(item) => item.username}
        renderItem={({ item }) => (
          <VideoCard
            title={item.title}
            thumbnail={item.thumbnail}
            video={item.video}
            creator={item.username}
            avatar={item.avatar}
          />
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos Found"
            subtitle="No videos found for this profile"
          />
        )}
        ListHeaderComponent={() => (
          <View className="w-full flex justify-center items-center mt-6 mb-12 px-4">
            <TouchableOpacity
              onPress={logout}
              className="flex w-full items-end mb-10"
            >
              <Image
                source={icons.logout}
                resizeMode="contain"
                className="w-6 h-6"
              />
            </TouchableOpacity>

            <View className="w-16 h-16 border border-secondary rounded-lg flex justify-center items-center">
              <Image
                source={{ uri: user?.avatar }}
                className="w-[90%] h-[90%] rounded-lg"
                resizeMode="cover"
              />
            </View>

            <InfoBox
              title={user?.name}
              containerStyles="mt-5"
              titleStyles="text-lg"
            />

            <View className="mt-5 flex flex-row">
              <InfoBox
                title={posts.length || 0}
                subtitle="Posts"
                titleStyles="text-xl"
                containerStyles="mr-10"
              />
              <InfoBox
                title="1.2k"
                subtitle="Followers"
                titleStyles="text-xl"
              />
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Profile;
