import Toast from 'react-native-toast-message';

const errorMessage = (error) => {
  Toast.show({
    type: 'error',
    text1: 'Error:',
    text2: error.message,
  });
};

export default errorMessage;