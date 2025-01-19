import { Card, FeaturedCard } from "@/components/Cards";
import Filters from "@/components/Filters";
import SearchBar from "@/components/SearchBar";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { useGlobalContext } from "@/lib/global-provider";
import { Link } from "expo-router";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {

  const { user } = useGlobalContext();


  return (
    <SafeAreaView className="bg-white h-full">
      <FlatList
       data={[1,2,3,4]}
       renderItem={({item}) => <Card />} 
       keyExtractor={(item) => item.toString()}
       numColumns={2}
       contentContainerClassName="pb-32"
       columnWrapperClassName="flex gap-5 px-5"
       
       showsHorizontalScrollIndicator={false}
       ListHeaderComponent={
        <View className="px-5">       
        <View className="flex flex-row items-center">
          <View className="flex flex-row items-center">
            <Image source={{uri: user?.avatar}} className="size-12" />
            <View className="flex flex-col items-start ml-2 justify-center">
              <Text className="text-xs font-rubik text-black-100">Good Morning</Text>
              <Text className="text-base font-rubikBold text-black-300">{user?.name}</Text>
              
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

          <FlatList
            data={[1, 2, 3, 4]}
            renderItem={({ item }) => <FeaturedCard />}
            keyExtractor={(item) => item.toString()}
            horizontal
            bounces={false}
            showsHorizontalScrollIndicator={false}
          />

        </View>
        <View className="flex flex-row items-center justify-between">
            <Text className="text-xl font-rubikBold text-black-300">Our Recommendation</Text>
            <TouchableOpacity>
              <Text className="text-base font-rubikBold text-primary-300">See All</Text>
            </TouchableOpacity>
          </View>
          <Filters />
      </View>
       }
      />

      
      
    </SafeAreaView>
  );
}
