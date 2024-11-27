import ImageResizer from 'react-native-image-resizer';

export const compressImage = async (uri, width, height) => {
  try {
    const resizedImage = await ImageResizer.createResizedImage(uri, width, height, 'JPEG', 80);
    return resizedImage.uri;
  } catch (error) {
    console.error('Error compressing image:', error);
    throw error;
  }
};
import { Dimensions } from 'react-native';

const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

const handleOrientationChange = ({ window, screen }) => {
  console.log('window dimensions:', window);
  console.log('screen dimensions:', screen);
};
