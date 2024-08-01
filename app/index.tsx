import React, { useRef, useEffect } from 'react';
import { View, Text, Animated } from 'react-native';
import { Shield, ArrowDownLeft } from "lucide-react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { t } from 'react-native-tailwindcss';
import { BlurView } from 'expo-blur';
import { useWindowDimensions } from 'react-native';
import { useAssets } from "expo-asset";
import { Link } from "expo-router";

const Index = () => {
    const [assets] = useAssets([
        require('@/assets/fonts/SpaceMono-Regular.ttf'),
        require('@/assets/images/onboard1.png'),
    ]);

    const { width } = useWindowDimensions();
    const scaleAnim = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        const scale = width > 768 ? 2 : 1; 
        Animated.timing(scaleAnim, {
            toValue: scale,
            duration: 300,
            useNativeDriver: true,
        }).start();
    }, [width]);

    if (!assets) {
        return null;
    }

    return (
        <View style={[t.flex, t.p8,t.bgWhite, t.hFull, t.justifyBetween, t.relative, { overflow: 'hidden' }]}>
            <Text style={[t.fontMedium, t.text2xl, t.pT4, t.z10]}>ProfitPilot.</Text>
            <View style={[t.flex, t.flexCol, t.wFull]}>
                <Text style={[t.fontSemibold, t.text5xl, t._mB2]}>Your</Text>
                <Text style={[t.fontBold, t.text5xl, t._mB2]}>Financial</Text>
                <Text style={[t.fontSemibold, t.text5xl]}>Navigator</Text>
                <Text style={[t.textGray700, t.mT4]}>
                    Invest in projects that make a difference. Join us in supporting impactful initiatives and create a positive change in the world.
                </Text>
                <View style={[t.wFull, t.flex, t.justifyCenter, t.itemsCenter, t.bgGray900, t.mY5, { borderRadius: 14 }, t.pY4, t.pX8, t.wFull]}>
                    <TouchableOpacity style={[t.bgGray900, t.wFull, t.itemsCenter]}>
                    <Link href="/homescreen" style={[t.wFull]}>
                    <Text style={[t.textWhite, t.textLg, t.fontSemibold]}>
                        Get Started
                    </Text>
                    </Link>
                    </TouchableOpacity>
                </View>
            </View>


            <Animated.View style={[{ transform: [{ scale: scaleAnim }] }, t.absolute, t.bgWhite, { backgroundColor: '#C8E9CA' }, { shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 10 }, { borderRadius: 14 }, t.p4, t.w56, t.right0, t.justifyCenter, { top: '36%', right: '20%', marginTop: -100 }]}>
                <View style={[t.flexRow, t.itemsCenter, t.mB4]}>
                    <Shield style={[t.w6, t.h6, t.mR2]} />
                    <Text style={[t.textGray700, t.textBase]}>US Dollar</Text>
                </View>
                <Text style={[t.text4xl, t.fontBold, t.mB2]}>$40,500.80</Text>
                <Text style={[t.textGray600, t.textSm]}>Account number **** 9934</Text>
            </Animated.View>

            <Animated.View style={[{ transform: [{ scale: scaleAnim }] }, t.absolute, { backgroundColor: 'rgba(255, 255, 255, 0.5)' }, { shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 10 }, { borderRadius: 14 }, t.p4, t.w56, t.right0, t.justifyCenter, { top: '25%', right: '-4%', marginTop: -100 }]}>
                <BlurView intensity={80}>
                    <View style={[t.flexRow, t.itemsCenter, t.mB4]}>
                        <Shield style={[t.w6, t.h6, t.mR2]} />
                        <Text style={[t.textGray700, t.textBase]}>US Dollar</Text>
                    </View>
                    <Text style={[t.text4xl, t.fontBold, t.mB2]}>$40,500.80</Text>
                    <Text style={[t.textGray600, t.textSm]}>Account number **** 9934</Text>
                </BlurView>
            </Animated.View>

            <Animated.View style={[{ transform: [{ scale: scaleAnim }] }, t.absolute, t.flex, t.itemsCenter, t.flexRow, { backgroundColor: 'rgba(255, 255, 255, 0.5)' }, { shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 10 }, { borderRadius: 14 }, t.p2, t.right0, t.justifyCenter, { top: '56%', right: '25%', marginTop: -100, transform: [{ rotate: '15deg' }] }]}>
                <ArrowDownLeft style={[t.mR1]} />
                <Text style={[t.textXl, t.fontBold]}>Request</Text>
            </Animated.View>
        </View>
    );
}

export default Index;
