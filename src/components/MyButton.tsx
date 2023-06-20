import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface ButtonProps {
  onPress: () => void;
  title: string;
  btnColor?: string;
  width?: number | string;
}

const MyButton: React.FC<ButtonProps> = ({onPress, title, btnColor, width}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.button, {backgroundColor: btnColor, width: width}]}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    padding: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default MyButton;
