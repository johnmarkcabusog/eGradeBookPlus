import { View, Text } from "react-native";
import { AppBar} from "@react-native-material/core";


const WithHeader = (props) => {
     
  return (
    <View>
      <AppBar
        color="#13C379"
        style={{marginTop:0}}
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
