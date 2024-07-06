import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Button,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import HomeHeader from '../components/HomeHeader';
import {RadioButton} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CheckOut = () => {
  const [toggleButton, setToggleButton] = useState(false);
  const [toggleButton2, setToggleButton2] = useState(false);
  const [apartmentToggle, setApartmentToggle] = useState(false);
  const [selectedValue1, setSelectedValue1] = useState('');
  const [selectedValue2, setSelectedValue2] = useState('');
  const [noteToggle, setNoteToggle] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);

  const toggleSwitch = () => setToggleButton(previousState => !previousState);
  const toggleSwitch2 = () => setToggleButton2(previousState => !previousState);
  const toggleNoteSwitch = () => setNoteToggle(previousState => !previousState);
  const toggleApartmentSwitch = () =>
    setApartmentToggle(previousState => !previousState);

  const handleFocus = index => setFocusedInput(index);
  const handleBlur = () => setFocusedInput(null);

  console.log('Selected Value 1 : ', selectedValue1);
  console.log('Selected Value 2 : ', selectedValue2);

  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <HomeHeader />
      <Text style={styles.entrytitle}>Checkout</Text>
      <View style={styles.woocommerceMessage}>
        <View style={styles.woocommerceMessageContent}>
          <Text style={styles.woocommerceMessageContentIcon}>
            <Ionicons name="chatbubble-outline" size={20} />
          </Text>
          <Text style={styles.woocommerceMessageInfo}>
            Upon placing this order a cashback of {'\n'} $4.99 will be credited
            to your wallet.
          </Text>
        </View>
      </View>
      <View style={styles.horizontalLine}>
        <View style={styles.line} />
      </View>

      <View>
        <View style={styles.orderDetails}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text>Order Summary</Text>
            {!toggleButton ? (
              <MaterialIcons
                name={'expand-more'}
                size={30}
                color="#666"
                style={styles.socialIcon}
                onPress={toggleSwitch}
              />
            ) : (
              <MaterialIcons
                name={'expand-less'}
                size={30}
                color="#666"
                style={styles.socialIcon}
                onPress={toggleSwitch}
              />
            )}
          </View>
          {toggleButton && (
            <View style={{flexDirection: 'row', marginVertical: 30}}>
              <View style={{marginHorizontal: 20}}>
                <Image
                  src="https://sdcdn.io/mac/in/mac_sku_NY9N70_1x1_0.png?width=1080&height=1080"
                  style={{padding: 24, height: 80}}
                />
              </View>
              <View>
                <Text>Bright Beauty Cream</Text>
                <Text>$600.00</Text>
                <Text>Sold By: Be Delighted Dev</Text>
                <Text>Color: R</Text>
              </View>
              <Text>$1,200.00</Text>
            </View>
          )}
        </View>
      </View>

      <View style={styles.horizontalLine}>
        <View style={styles.line} />
      </View>

      <View>
        <View style={styles.orderDetails}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text>Add a Coupon</Text>
            {!toggleButton2 ? (
              <MaterialIcons
                name={'expand-more'}
                size={30}
                color="#666"
                style={styles.socialIcon}
                onPress={toggleSwitch2}
              />
            ) : (
              <MaterialIcons
                name={'expand-less'}
                size={30}
                color="#666"
                style={styles.socialIcon}
                onPress={toggleSwitch2}
              />
            )}
          </View>
          {toggleButton2 && (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 2,
              }}>
              <TextInput
                style={[
                  styles.input,
                  focusedInput === 0 && styles.inputFocused,
                ]}
                onFocus={() => handleFocus(0)}
                onBlur={handleBlur}
                placeholder="Enter Code"
              />
              <Text
                style={{
                  backgroundColor: '#f1f1f1',
                  paddingHorizontal: 21,
                  textAlign: 'center',
                  paddingTop: 10,
                }}>
                Apply
              </Text>
            </View>
          )}
        </View>

        <View style={styles.horizontalLine}>
          <View style={styles.line} />
        </View>

        <View style={styles.orderBill}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.orderBillDetails}>SubTotals</Text>
            <Text style={styles.orderBillDetails}>$1,200.00</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.orderBillDetails}>Via Wallet</Text>
            <Text style={styles.orderBillDetails}>-$5.00</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.orderBillDetails}>Shipping</Text>
            <Text style={styles.orderBillDetails}>$40.00</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.orderBillDetails}>
              Marketplace Flat Rate Shipping {'\n'}
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.orderBillDetails}>
              Shipping to Australian Capital Territory, Australia
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.contactInformation}>
        <View>
          <Text style={{color: 'black', fontSize: 20, fontWeight: '600'}}>
            Contact Information
          </Text>
          <Text style={{marginVertical: 15}}>
            We'll use this email to send you details and updates about your
            order.
          </Text>
          <TextInput
            style={[
              styles.inputTextForm,
              focusedInput === 1 && styles.inputTextFormFocused,
            ]}
            onFocus={() => handleFocus(1)}
            onBlur={handleBlur}
            placeholder="Email Address"
          />
        </View>

        <View>
          <Text style={{color: 'black', fontSize: 20, fontWeight: '600'}}>
            Shipping Address
          </Text>
          <Text style={{marginVertical: 15}}>
            Enter the address where you want your order delivered.
          </Text>
          <TextInput
            style={[
              styles.inputTextForm,
              focusedInput === 2 && styles.inputTextFormFocused,
            ]}
            onFocus={() => handleFocus(2)}
            onBlur={handleBlur}
            placeholder="Country/Region"
          />
          <TextInput
            style={[
              styles.inputTextForm,
              focusedInput === 3 && styles.inputTextFormFocused,
            ]}
            onFocus={() => handleFocus(3)}
            onBlur={handleBlur}
            placeholder="First Name"
          />
          <TextInput
            style={[
              styles.inputTextForm,
              focusedInput === 4 && styles.inputTextFormFocused,
            ]}
            onFocus={() => handleFocus(4)}
            onBlur={handleBlur}
            placeholder="Last Name"
          />
          <TextInput
            style={[
              styles.inputTextForm,
              focusedInput === 5 && styles.inputTextFormFocused,
            ]}
            onFocus={() => handleFocus(5)}
            onBlur={handleBlur}
            placeholder="Address"
          />
          {!apartmentToggle && (
            <Text onPress={toggleApartmentSwitch}>
              <AntDesign name={'plus'} size={14} /> Add Apartment, suite, etc.
            </Text>
          )}
          {apartmentToggle && (
            <TextInput
              style={[
                styles.inputTextForm,
                focusedInput === 6 && styles.inputTextFormFocused,
              ]}
              onFocus={() => handleFocus(6)}
              onBlur={handleBlur}
              placeholder="Add Apartment, suite, etc."
            />
          )}
          <TextInput
            style={[
              styles.inputTextForm,
              focusedInput === 7 && styles.inputTextFormFocused,
            ]}
            onFocus={() => handleFocus(7)}
            onBlur={handleBlur}
            placeholder="City"
          />
          <TextInput
            style={[
              styles.inputTextForm,
              focusedInput === 8 && styles.inputTextFormFocused,
            ]}
            onFocus={() => handleFocus(8)}
            onBlur={handleBlur}
            placeholder="State"
          />
          <TextInput
            style={[
              styles.inputTextForm,
              focusedInput === 9 && styles.inputTextFormFocused,
            ]}
            onFocus={() => handleFocus(9)}
            onBlur={handleBlur}
            placeholder="PIN Code"
          />
          <TextInput
            style={[
              styles.inputTextForm,
              focusedInput === 10 && styles.inputTextFormFocused,
            ]}
            onFocus={() => handleFocus(10)}
            onBlur={handleBlur}
            placeholder="Phone (Optional)"
          />
        </View>

        <View>
          <Text style={{color: 'black', fontSize: 20}}>Shipping Option</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderWidth: 2,
              paddingVertical: 6,
              borderColor: '#A9A9A9',
              borderRadius: 6,
              marginVertical: 20,
            }}>
            <RadioButton.Android
              value="option1"
              status={selectedValue1 === 'option1' ? 'checked' : 'unchecked'}
              onPress={() => setSelectedValue1('option1')}
              color="black"
            />
            <Text style={{fontSize: 16}}>Market Place Free Shipping</Text>
            <Text style={{fontSize: 16, marginRight: 8}}>FREE</Text>
          </View>
        </View>

        <View>
          <Text style={{color: 'black', fontSize: 20}}>Payment Option</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderWidth: 2,
              paddingVertical: 6,
              borderColor: '#A9A9A9',
              borderRadius: 6,
              marginTop: 20,
            }}>
            <RadioButton.Android
              value="option1"
              status={selectedValue2 === 'option1' ? 'checked' : 'unchecked'}
              onPress={() => setSelectedValue2('option1')}
              color="black"
            />
            <Text style={{fontSize: 16}}>Cash on Delivery</Text>
            <View></View>
          </View>
          <Text style={{fontSize: 14, textAlign: 'center'}}>
            {'\n'}Pay with Cash upon Delivery
          </Text>
        </View>

        <View style={{marginTop: 40}}>
          <Text onPress={toggleNoteSwitch}>
            {!noteToggle ? (
              <Text>
                <AntDesign name={'plus'} size={14} /> Add a note to your order
              </Text>
            ) : (
              <Text>
                <AntDesign name={'minus'} size={14} /> Add a note to your order
              </Text>
            )}
          </Text>
          {noteToggle && (
            <TextInput
              style={{
                fontSize: 15,
                borderWidth: 1,
                borderColor: '#f1f1f1',
                borderRadius: 10,
                marginTop: 25,
              }}
              placeholder="Notes about your order, e.g. special notes for delivery"
            />
          )}
        </View>
      </View>

      <View style={styles.horizontalLine}>
        <View style={styles.line} />
      </View>

      <View style={{marginHorizontal: 20, marginTop: 10, marginBottom: 40}}>
        <Text style={{fontSize: 15, color: 'black'}}>
          By proceeding with your purchase you agree to our{' '}
          <Text style={{color: '#0066cc'}}>Terms and Conditions </Text>
          and Privacy policy
        </Text>
      </View>
      <View style={{marginHorizontal: 20, marginBottom: 40}}>
        <Button color="#406066" title="Not Purchasable" />
      </View>
    </ScrollView>
  );
};

export default CheckOut;

const styles = StyleSheet.create({
  entrytitle: {
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 50,
    color: 'black',
    fontSize: 24,
    fontFamily: 'Arial',
    fontWeight: 'bold',
  },
  woocommerceMessage: {
    paddingHorizontal: 20,
    marginHorizontal: 20,
    padding: 20,
    backgroundColor: '#f1f1f1',
  },
  woocommerceMessageContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  woocommerceMessageContentIcon: {
    paddingHorizontal: 10,
  },
  woocommerceMessageInfo: {
    padding: 10,
    fontSize: 16,
    color: 'black',
    fontFamily: 'Montserrat',
    color: '#666',
  },
  line: {
    borderBottomColor: '#f1f1f1',
    borderBottomWidth: 2,
    width: '100%',
  },
  horizontalLine: {
    marginVertical: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  orderDetails: {
    marginHorizontal: 20,
  },
  input: {
    borderColor: '#f1f1f1',
    borderWidth: 1,
    width: '80%',
    padding: 5,
  },
  inputFocused: {
    borderColor: '#333',
  },
  orderBill: {
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 40,
  },
  orderBillDetails: {
    lineHeight: 20,
  },
  contactInformation: {
    marginHorizontal: 20,
  },
  inputTextForm: {
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#f1f1f1',
    borderRadius: 10,
    marginVertical: 10,
  },
  inputTextFormFocused: {
    borderColor: '#333',
  },
});
