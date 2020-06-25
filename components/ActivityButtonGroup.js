import React, {useState} from 'react';
import { View, Text, StyleSheet, Button, FlatList, Alert, Modal, TouchableHighlight, TouchableOpacity } from 'react-native';
import {uuid} from 'uuidv4';
import ActivityButton from './ActivityButton';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { startClock } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/dist/FontAwesome';


// import {
//   Menu,
//   MenuOptions,
//   MenuOption,
//   MenuTrigger,
// } from 'react-native-popup-menu';
// import DropDownList from './fromLiora/DropDownList';

const ActivityButtonGroup = ({recommendedActivities, restOfActivities, selectGoals}) => {

  // const [buttonsState, setButtonsState] = useState(recommendedActivities.map((activity) => false));
  const allSessionActivities = [...recommendedActivities, ...restOfActivities];
  const [buttonsState, setButtonsState] = useState(allSessionActivities.map((activity) => false));
  // const [buttonsState, setButtonsState] = useState([...recommendedActivities.map((activity) => false), false]);
  const dropdownButtonIndex = recommendedActivities.length;

  const [otherActivities, setOtherActivities] = useState(restOfActivities);

  const updateStyle = (id) => {
      setButtonsState(prevButtonsState => {
        // return prevButtonsState.map((buttonState, index) => (recommendedActivities[index].id == id) );
        return prevButtonsState.map((buttonState, index) => (allSessionActivities[index].id == id) );
        // return prevButtonsState.map((buttonState, index) => ((index == (buttonsState.length - 1)) || (recommendedActivities[index].id == id)) );
      });
      console.log(buttonsState);
  };

  const updateGoals = (id) => {
      console.log('inside ActivityButtonGroup: updateGoals function. The id sent is ' + id);
      selectGoals(id);
  };

  const handleItem = (title, i) => {
    console.log('handleItem: the activity name is: ' + title);
    console.log('handleItem: the activity name is (by index): ' + restOfActivities[i].title);
    updateGoals(restOfActivities[i].id)
  };

  // const [selectedActivity, setSelectedActivity] = useState('עוד פעילויות...');
  // const [selectedActivity, setSelectedActivity] = useState({
  //   id: null,
  //   title: 'עוד פעילויות...',
  //   description: '',
  // });
  const [restOfActivitiesItem, setItem] = useState('עוד פעילויות...');
  // const [dropdownValue, setDropdownValue] = useState("עוד\nפעילויות");
  const [dropdownValue, setDropdownValue] = useState("עוד פעילויות");
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      
      {/* <View>
        <FontAwesomeIcon icon={ faCaretDown } />
      </View> */}
      <View style={styles.recommendedActivities}>
        <FlatList 
          data={recommendedActivities}
          horizontal={true}
          renderItem={({item, index}) =><ActivityButton activity={item} buttonStyle={buttonsState[index] ? styles.buttonOn : styles.buttonOff} updateStyle={updateStyle} updateGoals={updateGoals}/>}
          // renderItem={({item, index}) =><View style={styles.buttonsWrap}> <ActivityButton activity={item} buttonStyle={buttonsState[index] ? styles.buttonOn : styles.buttonOff} updateStyle={updateStyle} updateGoals={updateGoals}/></View>}
        />
      </View>
    {/* <ActivityButton activity={item} buttonStyle={buttonsState[index] ? styles.buttonOn : styles.buttonOff} updateStyle={updateStyle} updateGoals={updateGoals}/> */}
      
        <TouchableOpacity style={buttonsState.slice(recommendedActivities.length, allSessionActivities.length).includes(true) ? styles.dropdownButtonOn : {...styles.dropdownButtonOn, backgroundColor: 'lightblue'}} onPress={() => {
              setModalVisible(true);
              // updateGoals(activity.id);
            }}>
            <View style={styles.dropdownButtonTextContainer}>
              <FontAwesomeIcon style={styles.dropdownButtonIcon} icon={ faCaretDown } />
              <View style={styles.buttonTextWrapper}>
                <Text style={styles.dropdownButtonText}>{dropdownValue}</Text>
              </View>
            </View>
        </TouchableOpacity>

      <Modal
        // animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
          <View style={styles.modalView}>
          <View style={styles.restOfActivities}>
            <FlatList 
              data={restOfActivities}
              // horizontal={true}
              // renderItem={({item, index}) =><ActivityButton activity={item} buttonStyle={buttonsState[index] ? styles.buttonOn : styles.buttonOff} updateStyle={updateStyle} updateGoals={updateGoals}/>}
              renderItem={({item, index}) =><View><TouchableOpacity onPress={() => {
                setDropdownValue(item.title);
                updateGoals(item.id);
                updateStyle(item.id);
                setModalVisible(!modalVisible);
              }}><Text>{item.title}</Text></TouchableOpacity></View>}
              // renderItem={({item, index}) =><View style={styles.buttonsWrap}> <ActivityButton activity={item} buttonStyle={buttonsState[index] ? styles.buttonOn : styles.buttonOff} updateStyle={updateStyle} updateGoals={updateGoals}/></View>}
            />
          </View>

            <TouchableHighlight
              style={styles.cancelButton}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>בטל</Text>
            </TouchableHighlight>
          </View>
      </Modal>

  </View>
  );
};



const styles = StyleSheet.create({
    container: {
      flexWrap: 'wrap',
      flexDirection: 'row',
        flex: 1,  // relations 1:8 with the sibling goalList
        // backgroundColor: 'palegreen',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        // alignContent: 'flex-end',
        flexDirection: 'row-reverse',
        paddingRight: 11,
        paddingLeft: 11,
        // margin: 10,
        // height: 80,
        // borderColor: 'green',
        // borderWidth: 1,
    },
    otherActivitiesPicker: {
      // flex: 1,
    },
    // buttonOff: {
    //     // flex: 1,
    //     backgroundColor: 'lightblue',
    //     // borderWidth: 1,
    //     // borderColor: 'green',
    //     // textAlign: 'center',
    //     // justifyContent: 'center',
    //     // alignContent: 'center',
    //     // textAlignVertical: 'center',
    //     margin: 1,
    //     width: 70,
    //     height: 50,
    //     padding: 5,
    // },
    // buttonsWrap: {
    //   flexWrap: 'wrap',
    //   flexDirection: 'row',
    // },
    buttonOff: {
        flex: 1,
        backgroundColor: 'lightblue',
        // borderWidth: 1,
        // borderColor: 'green',
        // textAlign: 'center',
        // justifyContent: 'center',
        // alignContent: 'center',
        // textAlignVertical: 'center',
        margin: 1,
        width: 70,
        height: 50,
        padding: 5,
    },
    dropdownButtonOn: {
        // flex: 1,
        // alignSelf: 'stretch',
        backgroundColor: 'pink',
        // borderWidth: 1,
        // borderColor: 'green',
        // textAlign: 'center',
        // justifyContent: 'center',
        // alignContent: 'center',
        // textAlignVertical: 'center',
        margin: 1,
        width: 99,
        height: 54,
        padding: 10,
        paddingTop: 5,
        // alignSelf: 'flex-end',
        // borderColor: 'blue',
        // borderWidth: 1,
    },
    dropdownButtonTextContainer: {
      flex: 1,
      flexDirection: 'row-reverse',
      alignContent: 'center',
      justifyContent: 'center',
    },
    buttonTextWrapper: {
      flex: 4,
      alignSelf: 'center',
    },
    // dropdownButtonText: {
    //   flex: 4,
    // },
    dropdownButtonIcon: {
      flex: 1,
      marginLeft: 4,
      alignSelf: 'center',
    },
    buttonOn: {
        flex: 1,
        backgroundColor: 'pink',
        // borderWidth: 1,
        // borderColor: 'green',
        // textAlign: 'center',
        // justifyContent: 'center',
        // alignContent: 'center',
        // textAlignVertical: 'center',
        margin: 1,
        width: 70,
        height: 50,
        padding: 5,
    },
    menuOptionText: {
      fontSize: 18,
    },
    optionMenuTouchable: {
      // backgroundColor: 'pink',
    },
    testContainer: {
      backgroundColor: "rosybrown",
      // backgroundColor: 'rgba(0, 255, 0, 0.3)',
      // zIndex: 5,
      borderWidth: 2,
      width: 100,
      height: 100,

    },
    // textTest: {
    //   backgroundColor: "red",
    //   borderWidth: 1,
    // },
    recommendedActivities: {
      flex: 1,
      // alignItems: "flex-end", 
      width: 0,
      // alignItems: "stretch", 
      // borderColor: 'red',
      // borderWidth: 1,
    },
    // otherActivities: {
    //   flex: 1,
    // },
    // activitiesPicker: {
    //   height: 100,
    //   width: 100,
    //   backgroundColor: 'magenta',
    //   margin: 0,
    //   padding: 0,
    // },
    modalView: {
      position: "absolute",
      top: 120,
      left: -8,
      margin: 20,
      backgroundColor: 'white',
      // borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    openButton: {
      backgroundColor: "#F194FF",
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    },
    cancelButton: {
      backgroundColor: "#bbb",
      // borderRadius: 20,
      padding: 10,
      // margin: 3,
      // elevation: 2
      borderWidth: 1,
      borderColor: 'pink',
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
});

export default ActivityButtonGroup;