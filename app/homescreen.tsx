import React, { useState, useRef, useEffect } from 'react';
import { View, Text, ScrollView, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { t } from 'react-native-tailwindcss';
import BottomSheet from '@gorhom/bottom-sheet';
import { PlusCircle, CircleUser, BellDot, Home, BarChart, CreditCard, ScanLine } from "lucide-react-native";
import { useWindowDimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Shield, ArrowDownLeft } from "lucide-react-native";
import { initialAccounts, Account, Transaction } from './data';
import { Link } from 'expo-router';

const HomeScreen = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [destination, setDestination] = useState('');
  const [amount, setAmount] = useState('');
  const [card, setCard] = useState('');
  const bottomSheetRef = useRef<BottomSheet>(null);
  const { width } = useWindowDimensions();

  useEffect(() => {
    const loadData = async () => {
      try {
        const accountsData = await AsyncStorage.getItem('accounts');
        const transactionsData = await AsyncStorage.getItem('transactions');
        
        if (accountsData !== null) {
          setAccounts(JSON.parse(accountsData));
        } else {
          setAccounts(initialAccounts);
          await AsyncStorage.setItem('accounts', JSON.stringify(initialAccounts));
        }
        
        if (transactionsData !== null) {
          setTransactions(JSON.parse(transactionsData));
        }
      } catch (e) {
        console.error('Failed to load data from storage', e);
      }
    };

    loadData();
  }, []);

  useEffect(() => {
    const saveData = async () => {
      try {
        await AsyncStorage.setItem('accounts', JSON.stringify(accounts));
        await AsyncStorage.setItem('transactions', JSON.stringify(transactions));
      } catch (e) {
        console.error('Failed to save data to storage', e);
      }
    };

    saveData();
  }, [accounts, transactions]);

  const handleTransfer = () => {
    if (!destination || !amount || !card) return;

    const newTransaction = {
      id: transactions.length + 1,
      destination,
      amount,
      time: new Date().toLocaleTimeString(),
      card
    };
    setTransactions([...transactions, newTransaction]);
    bottomSheetRef.current?.close();
    setDestination('');
    setAmount('');
    setCard('');
  };

  const renderTransaction = ({ item }: { item: Transaction }) => (
    <View style={[t.flexRow, t.justifyBetween, t.pY4, t.borderB, t.borderGray200]}>
      <View>
        <Text style={[t.fontSemibold, t.mB2]}>{item.destination}</Text>
        <Text style={[t.textGray600]}>{item.time} | {item.card}</Text>
      </View>
      <Text>{item.amount}</Text>
    </View>
  );

  const renderAccountCard = (item: Account) => (
    <View key={item.id} style={[t.mR4, t.p4, t.roundedLg, t.w56, t.h48, t.mB4, { shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 10 }, { borderRadius: 14 }, { backgroundColor: item.backgroundColor }]}>
      <View style={[t.flexRow, t.itemsCenter, t.mB4]}>
        <Shield style={[t.w6, t.h6, t.mR2]} />
        <Text style={[t.textGray700, t.textBase]}>{item.currency}</Text>
      </View>
      <Text style={[t.text4xl, t.fontBold, t.mB2]}>{item.balance}</Text>
      <Text style={[t.textGray600, t.textSm]}>Account number {item.accountNumber}</Text>
      <Text style={[t.textGray600, t.textSm]}>Valid Thru {item.validThru}</Text>
    </View>
  );

  const renderBottomSheetContent = () => (
    <View style={[t.bgWhite, t.p8]}>
      <Text style={[t.textLg, t.fontSemibold, t.mB4]}>Transfer</Text>
      <TextInput
        style={[t.bgGray200, t.pY2, t.pX4, t.rounded, t.mB4]}
        placeholder="Destination Name"
        value={destination}
        onChangeText={setDestination}
      />
      <TextInput
        style={[t.bgGray200, t.pY2, t.pX4, t.rounded, t.mB4]}
        placeholder="Amount"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />
      <TextInput
        style={[t.bgGray200, t.pY2, t.pX4, t.rounded, t.mB4]}
        placeholder="Card"
        value={card}
        onChangeText={setCard}
      />
      <TouchableOpacity
        style={[t.bgBlack, t.pY4, t.pX6, t.roundedLg, t.mT5]}
        onPress={handleTransfer}
      >
        <Text style={[t.textWhite, t.textCenter, t.fontBold]}>Save</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={[t.flex1, t.bgWhite]}>
      <ScrollView style={[t.flex1]}>
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
        
        <Text style={[t.fontSemibold, t.text2xl, t.mB4, t.pX8]}>Account</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={[t.pX8]}
        >
          {accounts.map((account) => renderAccountCard(account))}
        </ScrollView>

        <View style={[t.flexRow, t.justifyBetween, t.pX8]}>
          <TouchableOpacity style={[t.flex, t.flexRow, t.itemsCenter]}>
            <ArrowDownLeft style={[t.textGray800, t.mR1]} />
            <Text style={[t.textGray800, t.textBase]}>Request</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[t.itemsCenter, t.flex, t.flexRow]} onPress={() => bottomSheetRef.current?.expand()}>
            <PlusCircle style={[t.textGray800, t.mR1]} />
            <Text style={[t.textGray800, t.textBase]}>Transfer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[t.itemsCenter, t.flex, t.flexRow, t.bgBlack, t.roundedFull, t.p4]} onPress={() => bottomSheetRef.current?.expand()}>
            <PlusCircle style={[t.textGray800, t.textWhite]} />
          </TouchableOpacity>
        </View>

        <View style={[t.flex, t.mT6, t.justifyCenter, t.itemsCenter, t.p4]}>
          <View style={[t.h1, t.bgGray400, t.w10, t.roundedFull]}></View>
        </View>

        <View style={[t.flex, t.flexRow, t.itemsCenter, t.justifyBetween, t.pX8]}>
          <Text style={[t.fontSemibold, t.text2xl, t.mB2, t.textLeft]}>Transaction</Text>
          <Text> - View All</Text>
        </View>

        <FlatList
          data={transactions}
          renderItem={renderTransaction}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={[t.pX8, t.mB8]}
          scrollEnabled={false} 
        />
      </ScrollView>

      <View style={[t.flexRow, t.w56,t.justifyAround, t.itemsCenter, t.bgWhite, {borderRadius: 10}, t.p4,{ position: 'absolute', bottom: 20, left: '50%', transform: [{ translateX: -width * 0.3 }], right: 20, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 10 }]}>
        <Link href="/homescreen">
          <Home style={[t.textGray800]} />
        </Link>
        <Link href="/statistics">
          <ScanLine style={[t.textGray800]} />
        </Link>
        <Link href="/addNewCard">
          <CreditCard style={[t.textGray800]} />
        </Link>
      </View>

      <BottomSheet 
        ref={bottomSheetRef} 
        snapPoints={['25%', '50%']} 
        index={-1} 
        enablePanDownToClose={true}
        onClose={() => bottomSheetRef} 
      >
        {renderBottomSheetContent()}
      </BottomSheet>
    </View>
  );
};

export default HomeScreen;
