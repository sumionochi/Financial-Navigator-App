import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { t } from 'react-native-tailwindcss';
import { ArrowLeft } from "lucide-react-native";
import { Link } from 'expo-router';

const QRScreen = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);
  const [qrData, setQrData] = useState<string | null>(null);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ data }: { data: string }) => {
    setScanned(true);
    setQrData(data);
  };

  if (hasPermission === null) {
    return <Text style={[t.textCenter, t.textLg, t.mT8]}>Requesting for camera permission...</Text>;
  }

  if (hasPermission === false) {
    return <Text style={[t.textCenter, t.textLg, t.mT8]}>No access to camera</Text>;
  }

  return (
    <View style={[t.flex1, t.bgWhite]}>
      

      <View style={[t.flex1, t.justifyCenter, t.itemsCenter]}>
        {!scanned ? (
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={[t.wFull, t.hFull]}
          />
        ) : (
          <View style={[t.justifyCenter, t.itemsCenter]}>
            <Text style={[t.textLg, t.fontBold, t.mB4]}>QR Data:</Text>
            <Text style={[t.textBase, t.mB4]}>{qrData}</Text>
            <TouchableOpacity
              style={[t.bgBlue600, t.pY4, t.pX8, t.roundedLg]}
              onPress={() => setScanned(false)}
            >
              <Text style={[t.textWhite, t.textCenter, t.fontSemibold]}>Scan Again</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default QRScreen;
