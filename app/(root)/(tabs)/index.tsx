import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-bold my-10 text-3xl font-rubik">Welcome to ReState</Text>
      <Link href="/SignIn">Sign In</Link>
      <Link href="/explore">Explore</Link>
      <Link href="/Profile">Profile</Link>
      <Link href="/properties/[id]">Porperty</Link>
    </View>
  );
}
