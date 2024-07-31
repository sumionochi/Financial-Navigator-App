import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { t } from 'react-native-tailwindcss';
import { LineChart } from 'react-native-chart-kit';
import { Link } from 'expo-router';
import { Shield, ArrowLeft, Home, BarChart, CreditCard, ScanLine } from "lucide-react-native";
import { useWindowDimensions } from 'react-native';

const StatisticsScreen = () => {
  const [selectedMonth, setSelectedMonth] = useState('Oct');
  const { width } = useWindowDimensions();

  const months = ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'];

  const renderMonthSelector = () => (
    <View style={[
      t.flexRow, 
      { 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.3, 
        shadowRadius: 4, 
        elevation: 4 
      }, 
      t.justifyAround, 
      t.mT4, 
      t.roundedFull, 
      t.pY1
    ]}>
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

  const chartData = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu'],
    datasets: [
      {
        data: [20, 37, 45, 28, 57],
        color: (opacity = 1) => `rgba(34, 202, 236, ${opacity})`,
        strokeWidth: 2, 
      },
    ],
  };

  const chartConfig = {
    backgroundColor: '#FFFFFF',
    backgroundGradientFrom: '#FFFFFF',
    backgroundGradientTo: '#FFFFFF',
    decimalPlaces: 2, 
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, 
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, 
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#FFFFFF',
    },
  };

  return (
    <View style={[t.flex1, t.bgWhite]}>
        <View style={[t.pX8]}>
        <View style={[t.flexRow, t.itemsCenter, t.justifyCenter, t.pX4, t.pY4, t.relative]}>
            <Link style={[t.absolute, t.left0]} href="/homescreen">
                <ArrowLeft style={[t.textGray800, t.w6, t.h6]} />
            </Link>
            <Text style={[t.fontBold, t.textXl, t.mB2]}>Statistics</Text>
        </View>
        </View>
      <ScrollView style={[t.flex1, t.p8]}>
        <View style={[
          t.bgWhite, 
          t.wFull, 
          t.mB4, 
          { 
            backgroundColor: '#C8E9CA', 
            shadowColor: '#000', 
            shadowOffset: { width: 0, height: 4 }, 
            shadowOpacity: 0.3, 
            shadowRadius: 10, 
            borderRadius: 14 
          }, 
          t.p4, 
          t.justifyCenter
        ]}>
          <View style={[t.flexRow, t.itemsCenter, t.mB4]}>
            <Shield style={[t.w6, t.h6, t.mR2]} />
            <Text style={[t.textGray700, t.textBase]}>US Dollar</Text>
          </View>
          <Text style={[t.text4xl, t.fontBold, t.mB2]}>$40,500.80</Text>
          <Text style={[t.textGray600, t.textSm]}>Account number **** 9934</Text>
        </View>

        {renderMonthSelector()}

        <View style={[t.mT6, t.bgWhite, t.roundedLg, t.shadowLg, t.p4]}>
          <View style={[t.flexRow, t.justifyBetween, t.mB4]}>
            <Text style={[t.fontBold, t.textLg]}>Transaction</Text>
            <Text style={[t.textGray500, t.textBase]}>Earnings</Text>
          </View>

          <LineChart
            data={chartData}
            width={Dimensions.get('window').width - 120} 
            height={220}
            chartConfig={chartConfig}
            bezier
            style={{
              borderRadius: 16,
            }}
          />
        </View>
      </ScrollView>

      <View style={[
        t.flexRow, 
        t.w56, 
        t.justifyAround, 
        t.itemsCenter, 
        t.bgWhite, 
        { borderRadius: 10 }, 
        t.p4, 
        { 
          position: 'absolute', 
          bottom: 20, 
          left: '50%', 
          transform: [{ translateX: -width * 0.3 }], 
          right: 20, 
          shadowColor: '#000', 
          shadowOffset: { width: 0, height: 4 }, 
          shadowOpacity: 0.3, 
          shadowRadius: 10 
        }
      ]}>
        <Link href="/homescreen">
          <Home style={[t.textGray800]} />
        </Link>
        <Link href="/qr">
          <ScanLine style={[t.textGray800]} />
        </Link>
        <Link href="/addNewCard">
          <CreditCard style={[t.textGray800]} />
        </Link>
      </View>
    </View>
  );
};

export default StatisticsScreen;
