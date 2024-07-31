import React, { useState, useRef, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, FlatList, TextInput } from 'react-native';
import { t } from 'react-native-tailwindcss';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Link, useRouter } from 'expo-router';
import BottomSheet from '@gorhom/bottom-sheet';
import { initialAccounts, Account } from './data';
import { BellDot, CircleUser, CreditCard } from 'lucide-react-native';
import { useWindowDimensions } from 'react-native';

const AddNewCardScreen = () => {
  const [accounts, setAccounts] = useState<Account[]>(initialAccounts);
  const [currency, setCurrency] = useState('');
  const [balance, setBalance] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [validThru, setValidThru] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');
  const bottomSheetRef = useRef<BottomSheet>(null);
  const router = useRouter();

  useEffect(() => {
    const loadData = async () => {
      try {
        const storedAccounts = await AsyncStorage.getItem('accounts');
        if (storedAccounts) {
          setAccounts(JSON.parse(storedAccounts));
        }
      } catch (e) {
        console.error('Failed to load accounts from storage', e);
      }
    };

    loadData();
  }, []);
  const { width } = useWindowDimensions();

  const handleAddCard = async () => {
    if (!currency || !balance || !accountNumber || !validThru) return;

    const newCard: Account = {
      id: accounts.length + 1,
      currency,
      balance,
      accountNumber,
      validThru,
      backgroundColor,
    };

    const updatedAccounts = [...accounts, newCard];
    setAccounts(updatedAccounts);
    await AsyncStorage.setItem('accounts', JSON.stringify(updatedAccounts));

    bottomSheetRef.current?.close();
    setCurrency('');
    setBalance('');
    setAccountNumber('');
    setValidThru('');
    setBackgroundColor('#FFFFFF');
  };

  const renderCard = ({ item }: { item: Account }) => (
    <View key={item.id} style={[t.bgWhite, t.p4, t.roundedLg, t.mB4, { backgroundColor: item.backgroundColor }]}>
      <Text style={[t.fontBold, t.textLg]}>{item.currency}</Text>
      <Text style={[t.textBase, t.mT2]}>{item.balance}</Text>
      <Text style={[t.textGray600, t.mT2]}>{item.accountNumber}</Text>
      <Text style={[t.textGray600, t.mT2]}>Valid Thru {item.validThru}</Text>
    </View>
  );

  const renderBottomSheetContent = () => (
    <View style={[t.p8]}>
      <Text style={[t.fontSemibold, t.textLg, t.mB4]}>Add New Card</Text>
      <TextInput
        style={[t.bgGray200, t.pY2, t.pX4, t.rounded, t.mB4]}
        placeholder="Currency"
        value={currency}
        onChangeText={setCurrency}
      />
      <TextInput
        style={[t.bgGray200, t.pY2, t.pX4, t.rounded, t.mB4]}
        placeholder="Balance"
        value={balance}
        onChangeText={setBalance}
        keyboardType="numeric"
      />
      <TextInput
        style={[t.bgGray200, t.pY2, t.pX4, t.rounded, t.mB4]}
        placeholder="Account Number"
        value={accountNumber}
        onChangeText={setAccountNumber}
      />
      <TextInput
        style={[t.bgGray200, t.pY2, t.pX4, t.rounded, t.mB4]}
        placeholder="Valid Thru"
        value={validThru}
        onChangeText={setValidThru}
      />
      <TextInput
        style={[t.bgGray200, t.pY2, t.pX4, t.rounded, t.mB4]}
        placeholder="Background Color"
        value={backgroundColor}
        onChangeText={setBackgroundColor}
      />
      <TouchableOpacity
        style={[t.bgBlack, t.pY4, t.pX6, t.roundedLg, t.mT5]}
        onPress={handleAddCard}
      >
        <Text style={[t.textWhite, t.textCenter, t.fontBold]}>Save</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={[t.flex1, t.bgWhite]}>
      <View style={[t.flexRow, t.justifyBetween, t.itemsCenter, t.p8]}>
        <View style={[t.flex, t.flexRow]}>
          <Link href="/" style={[t.mR2]}>
            <CircleUser style={[t.w10, t.h10]} />
          </Link>
          <View>
            <Text style={[t.textGray700]}>Welcome back</Text>
            <Text style={[t.fontBold, t.textBase]}>Sarah Muller</Text>
          </View>
        </View>
        <BellDot />
      </View>

      <Text style={[t.fontSemibold, t.text2xl, t.mB4, t.pX8]}>My Cards</Text>

      <FlatList
        data={accounts}
        renderItem={renderCard}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={[t.pX8, t.mB8]}
      />

      <TouchableOpacity
        style={[t.flexRow, {backgroundColor: '#87DCFB'}, t.w56, t.justifyAround, t.itemsCenter, {borderRadius: 10}, t.p4,{ position: 'absolute', bottom: 20, left: '50%', transform: [{ translateX: -width * 0.3 }], right: 20, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 10 }]}
        onPress={() => bottomSheetRef.current?.expand()}
      >
        <Text style={[t.textBlack, t.textCenter, t.fontBold]}>Add New Card</Text>
      </TouchableOpacity>

      <BottomSheet ref={bottomSheetRef} snapPoints={['1%', '100%']} index={-1}>
        {renderBottomSheetContent()}
      </BottomSheet>
    </View>
  );
};

export default AddNewCardScreen;
