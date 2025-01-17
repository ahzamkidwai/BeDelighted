import {
  StyleSheet,
  View,
  Image,
  TextInput,
  Pressable,
  Switch,
  Text,
} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Logo from '../assets/bedelighted-logo.png';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const HomeHeader = ({toggleValue, setToggleValue}) => {
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  if (isEnabled === false) {
    toggleValue = 'left';
    setToggleValue(toggleValue);
  } else if (isEnabled === true) {
    toggleValue = 'right';
    setToggleValue(toggleValue);
  }

  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerContent}>
        <Image style={styles.logo} source={Logo} />
        <View style={styles.iconContainer}>
          <Pressable onPress={() => navigation.navigate('Drawer')}>
            {/* <FontAwesome name="align-justify" size={18} color="#3F6065" /> */}
            <View style={styles.switchContainer}>
              <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
                style={{size: 26}}
              />
              {isEnabled === false ? <Text>Trial</Text> : <Text>Shop</Text>}
            </View>
          </Pressable>
        </View>
      </View>
      <View
        style={{
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
        <TextInput
          style={{
            height: 40,
            width: '90%',
            borderWidth: 1,
            borderColor: '#ddd',
            paddingLeft: 10,
            color: 'gray',
            justifyContent: 'flex-start',
            fontFamily: 'Fidena',
            letterSpacing: 0.6,
          }}
          placeholder="I'm shopping for..."
        />
        <Ionicons
          name="search"
          size={24}
          color="#3F6065"
          style={styles.searchIcon}
        />
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 5,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  logo: {
    height: 120,
    width: 120,
    marginTop: -20,
    marginLeft: 20,
  },
  iconContainer: {
    flexDirection: 'row',
    gap: 15,
    paddingHorizontal: 20,
  },
  searchContainer: {
    // flexDirection: 'row',
    // alignItems: 'center',
    // paddingHorizontal: 10,
    // backgroundColor: '#fff',
    // borderWidth: 1,
    // borderColor: '#ddd',
    // marginTop: 10,
    // width: '100%',
  },
  searchInput: {
    // flex: 1,
    // height: 40,
    // paddingLeft: 10,
    // color: '#000000',
    // width: '90%',
  },
  searchIcon: {
    padding: 6.5,
    color: 'white',
    backgroundColor: '#3F6065',
    // justifyContent: 'flex-end',
  },
  switchContainer: {
    transform: [{scaleX: 1.1}, {scaleY: 1.1}], // Adjust the scale values as needed
    flexDirection: 'column',
    alignItems: 'center',
  },
});
