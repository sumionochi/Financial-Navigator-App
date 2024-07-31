import React, { useRef, useEffect } from 'react';
import { useAssets } from "expo-asset";
import { Shield, ArrowDownLeft } from "lucide-react-native";
import { View, Text, Animated } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { BlurView } from 'expo-blur';
import { Link } from "expo-router";


const Index = () => {
    const [assets] = useAssets([
        require('@/assets/fonts/SpaceMono-Regular.ttf'),
        require('@/assets/images/onboard1.png'),
    ]);

    const fadeAnim = useRef(new Animated.Value(0)).current;
    const translateAnim = useRef(new Animated.Value(30)).current;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();

        Animated.spring(translateAnim, {
            toValue: 0,
            useNativeDriver: true,
        }).start();
    }, [fadeAnim, translateAnim]);

    if (!assets) {
        return null;
    }

    return (
        <View style={{ flex: 1, padding: 32, backgroundColor: 'white', overflow: 'hidden', justifyContent: 'space-between', position: 'relative' }}>
            <Animated.Text style={{ fontWeight: '500', fontSize: 24, paddingTop: 16, zIndex: 10, opacity: fadeAnim, transform: [{ translateY: translateAnim }] }}>
                ProfitPilot.
            </Animated.Text>
            <Animated.View style={{ flexDirection: 'column', opacity: fadeAnim, transform: [{ translateY: translateAnim }] }}>
                <Text style={{ fontWeight: '600', fontSize: 40, marginBottom: -8 }}>Your</Text>
                <Text style={{ fontWeight: '700', fontSize: 40, marginBottom: -8 }}>Financial</Text>
                <Text style={{ fontWeight: '600', fontSize: 40 }}>Navigator</Text>
                <Text style={{ color: '#4A4A4A', marginTop: 16 }}>
                    Invest in projects that make a difference. Join us in supporting impactful initiatives and create a positive change in the world.
                </Text>
                <TouchableOpacity style={{ backgroundColor: '#1F1F1F', marginVertical: 20, borderRadius: 14, paddingVertical: 16, paddingHorizontal: 32, width: '100%', alignItems: 'center' }}>
                        <Text style={{ color: 'white', fontSize: 18, fontWeight: '600' }}>
                            Get Started
                        </Text>
                    </TouchableOpacity>
            </Animated.View>

            <Animated.View style={{ position: 'absolute', backgroundColor: '#C8E9CA', shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 10, borderRadius: 14, padding: 16, width: 224, justifyContent: 'center', top: '36%', right: '20%', marginTop: -100, opacity: fadeAnim, transform: [{ translateY: translateAnim }] }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
                    <Shield style={{ width: 24, height: 24, marginRight: 8 }} />
                    <Text style={{ color: '#4A4A4A', fontSize: 16 }}>US Dollar</Text>
                </View>
                <Text style={{ fontSize: 32, fontWeight: '700', marginBottom: 8 }}>$40,500.80</Text>
                <Text style={{ color: '#737373', fontSize: 14 }}>Account number **** 9934</Text>
            </Animated.View>

            <BlurView intensity={80} style={{ position: 'absolute', backgroundColor: 'rgba(255, 255, 255, 0.5)', shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 10, borderRadius: 14, padding: 16, width: 224, justifyContent: 'center', top: '25%', right: '-4%', marginTop: -100 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
                    <Shield style={{ width: 24, height: 24, marginRight: 8 }} />
                    <Text style={{ color: '#4A4A4A', fontSize: 16 }}>US Dollar</Text>
                </View>
                <Text style={{ fontSize: 32, fontWeight: '700', marginBottom: 8 }}>$40,500.80</Text>
                <Text style={{ color: '#737373', fontSize: 14 }}>Account number **** 9934</Text>
            </BlurView>

            <BlurView intensity={80} style={{ position: 'absolute', flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.5)', shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 10, borderRadius: 14, padding: 8, width: 224, justifyContent: 'center', top: '56%', right: '25%', marginTop: -100, transform: [{ rotate: '15deg' }] }}>
                <ArrowDownLeft style={{ marginRight: 4 }} />
                <Text style={{ fontSize: 20, fontWeight: '700' }}>Request</Text>
            </BlurView>
        </View>
    );
}

export default Index;

