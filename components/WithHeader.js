import { View, Text } from "react-native";
import { AppBar, HStack, IconButton, Avatar } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const WithHeader = (props) => {
     
  return (
    <View>
      <AppBar
        // color="#0B1251"
        style={{marginTop:30}}
        title="Welcome Dennis!"
        // leading={(props) => (
        //   <IconButton
        //     icon={(props) => <Icon name="menu" {...props} />}
        //     {...props}
        //   />
        // )}
        // trailing={(props) => (
        //   <HStack>
        //    <Avatar size={35} label="Dennis Biong" />
        //   </HStack>
        // )}
      />
      {props.children}
    </View>
  );
};

export default WithHeader;
