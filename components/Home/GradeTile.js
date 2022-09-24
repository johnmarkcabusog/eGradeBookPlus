import { Pressable, Box } from "@react-native-material/core";
import { Fragment, useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import { cloneDeep } from "lodash";

const GradeTile = ({ data }) => {
  const [collapse, setShowCollapse] = useState([]);
  const subjects = ['Englist', 'Mathematics', 'Geography', 'Chemistry'];



  const handleCollapse = (index) => {
    const clonedCollapse = cloneDeep(collapse);
    
    const foundIndex = clonedCollapse.findIndex((x) => x.index === index);

    if (foundIndex !== -1) { // meaning index is found
      clonedCollapse[foundIndex] = { show: !clonedCollapse[foundIndex].show, index };
    } else {
      clonedCollapse.push({ show: true, index });
    }
    setShowCollapse(clonedCollapse);
  };

  const { subject_name, final_grade } = data;

  return (
    <View>
      {subjects.map((subject, index) => {    
        const show = (()=>{
          const foundIndex = collapse.findIndex(x=> x.index === index)
          if(foundIndex > -1){
            return collapse[foundIndex].show
          }else{
            return false
          }
        })()
        return (
          <Fragment key={`${subject}-${index}`}>
            <Pressable
              style={styles.boxGrade}
              onPress={() => handleCollapse(index)}
            >
              <Text style={styles.textGradePassed}>{subject}</Text>
              <Text style={styles.finalGrade}>{final_grade}</Text>
            </Pressable>
            {collapse.length > 0 &&  show && (
              <Box style={styles.gradeInfo}>
                <Text style={styles.gradeInfoText}>First Quarter: 89</Text>
                <Text style={styles.gradeInfoText}>Second Quarter :98</Text>
              </Box>
            )}
          </Fragment>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  boxGrade: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
  },
  textGradePassed: {
    color: "green",
    fontSize: 18,
    flexGrow: 1,
  },
  finalGrade: {
    color: "green",
    fontSize: 18,
    flexGrow: 1,
    // textAlign:'right'
  },
  textGradeFailed: {
    color: "red",
    fontSize: 18,
    flexGrow: 1,
  },
  gradeInfo: {
    backgroundColor: "#DDDDDD",
    padding: 20,
    fontSize: 20,
  },
  gradeInfoText: {
    fontSize: 16,
    padding: 5,
  },
});

export default GradeTile;
