import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


const ActivityButton = ({activity, buttonStyle, updateStyle, updateGoals}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={buttonStyle} onPress={() => {
          updateStyle(activity.id);
          updateGoals(activity);
        }}>
        <Text>{activity.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ActivityButton;