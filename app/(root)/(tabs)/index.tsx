import SearchBar from "@/components/SearchBar";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { Link } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="bg-white h-full">
      <View className="px-5">       
        <View className="flex flex-row items-center">
          <View className="flex flex-row items-center">
            <Image source={images.avatar} className="size-12" />
            <View className="flex flex-col items-start ml-2 justify-center">
              <Text className="text-xs font-rubik text-black-100">Good Morning</Text>
              <Text className="text-base font-rubikBold text-black-300">NorPeK</Text>
              
            </View>
          </View>
          <Image source={icons.bell} className="size-6"/>
        </View>
        <SearchBar /> 
        <View className="my-5">
          <View className="flex flex-row items-center justify-between">
            <Text className="text-xl font-rubikBold text-black-300">Featured</Text>
            <TouchableOpacity>
              <Text className="text-base font-rubikBold text-primary-300">See All</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

    </SafeAreaView>
  );
}
