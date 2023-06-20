import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';

interface MyCheckboxProps {
  isChecked: boolean;
  onClick: () => void;
}

const MyCheckbox: React.FC<MyCheckboxProps> = ({isChecked, onClick}) => {
  return (
    <TouchableOpacity style={styles.checkbox} onPress={onClick}>
      {isChecked && <View style={styles.checkboxInner} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxInner: {
    width: 12,
    height: 12,
    backgroundColor: 'black',
    borderRadius: 2,
  },
});

export default MyCheckbox;
