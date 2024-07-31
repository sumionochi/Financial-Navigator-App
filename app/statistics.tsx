import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { t } from 'react-native-tailwindcss';
import { Link } from 'expo-router';
import { Shield, ArrowLeft, Home, BarChart, CreditCard } from "lucide-react-native";

const StatisticsScreen = () => {
  const [selectedMonth, setSelectedMonth] = useState('Oct');

  const months = ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'];

  const renderMonthSelector = () => (
    <View style={[t.flexRow, t.justifyAround, t.mT4]}>
      {months.map((month) => (
        <TouchableOpacity 
          key={month} 
          onPress={() => setSelectedMonth(month)}
          style={[t.p2, month === selectedMonth ? t.bgBlue200 : t.bgTransparent, { borderRadius: 20 }]}
        >
          <Text style={month === selectedMonth ? [t.textBlue600, t.fontSemibold] : [t.textGray500]}>{month}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <View style={[t.flex1, t.bgWhite]}>
      <ScrollView style={[t.flex1]}>
        {/* Header */}
        <View style={[t.flexRow, t.itemsCenter, t.pX4, t.pY4]}>
          <Link href="/homescreen">
            <ArrowLeft style={[t.textGray800, t.w8, t.h8]} />
          </Link>
          <Text style={[t.fontBold, t.textLg, t.textCenter, t.flex1]}>Statistic</Text>
        </View>

        {/* Account Balance Card */}
        <View style={[t.mX4, t.mT4, t.p4, t.bgWhite, t.roundedLg, t.shadowLg]}>
          <View style={[t.flexRow, t.justifyBetween, t.itemsCenter, t.mB4]}>
            <Text style={[t.textGray600, t.textBase]}>US Dollar</Text>
            <Text style={[t.fontBold, t.textXl, t.textGray800]}>$40,500.80</Text>
            <Shield style={[t.w6, t.h6, t.mR2]} />
          </View>
          <Text style={[t.textGray500, t.textSm]}>Account number **** 9934</Text>
          <Text style={[t.textGray500, t.textSm]}>Valid Thru 05/28</Text>
        </View>

        {/* Month Selector */}
        {renderMonthSelector()}

        {/* Transaction Graph */}
        <View style={[t.mX4, t.mT6, t.bgWhite, t.roundedLg, t.shadowLg, t.p4]}>
          <View style={[t.flexRow, t.justifyBetween, t.mB4]}>
            <Text style={[t.fontBold, t.textLg]}>Transaction</Text>
            <Text style={[t.textGray500, t.textBase]}>Earnings</Text>
          </View>
          {/* Placeholder for Graph */}
          <View style={[t.h40, t.justifyCenter, t.itemsCenter]}>
            <Text style={[t.textGray500, t.textSm]}>Graph Placeholder</Text>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation Bar */}
      <View style={[
        t.flexRow, 
        t.justifyAround, 
        t.itemsCenter, 
        t.bgWhite, 
        t.pY2, 
        { 
          borderRadius: 10, 
          position: 'absolute', 
          bottom: 20, 
          left: '50%', 
          transform: [{ translateX: -100 }], // Adjust translateX based on the width of the bar
          width: 200, 
          shadowColor: '#000', 
          shadowOffset: { width: 0, height: 4 }, 
          shadowOpacity: 0.3, 
          shadowRadius: 10 
        }
      ]}>
        <Link href="/homescreen">
          <Home style={[t.textGray800, t.w8, t.h8]} />
        </Link>
        <Link href="/qr">
          <BarChart style={[t.textGray800, t.w8, t.h8]} />
        </Link>
        <Link href="/addNewCard">
          <CreditCard style={[t.textGray800, t.w8, t.h8]} />
        </Link>
      </View>
    </View>
  );
};

export default StatisticsScreen;
