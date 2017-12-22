import {Animated} from 'react-native';
export const SHALL_INCLUDE_STYLE_KEY = '$__RNSN_SHALL_INCLUDE_STYLE';

export default function RNStyleNames(...args) {
  let styleNames = [];
  	
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (typeof arg === 'number') {
      styleNames.push(arg);
    } else if (isAnimatedValue(arg)) {
      if (arg.hasOwnProperty(SHALL_INCLUDE_STYLE_KEY) && arg[SHALL_INCLUDE_STYLE_KEY]) {
        styleNames.push(arg);
      } else if (!arg.hasOwnProperty(SHALL_INCLUDE_STYLE_KEY)) {
        styleNames.push(arg);
      }
    } else if (typeof arg === 'object') {
      for(let key in arg) {
        if (arg.hasOwnProperty(key) && !parseInt(key)) {
          styleNames.push(arg);
          break;
        } else if (arg.hasOwnProperty(key) && arg[key]) {
          styleNames.push(Number(key));
        }
      }
    }
    
    if (Array.isArray(arg) && arg.length) {
      styleNames.push(...RNStyleNames.apply(null, arg));
    }
  }
  
  return styleNames;
}

function isAnimatedValue(obj) {
  let objectIsAnimatedValue = false;
  if (typeof obj === 'object') {
    for(let key in obj) {
      if (obj[key] instanceof Animated.Value) {
        objectIsAnimatedValue = true;
        break;
      } else if (typeof obj[key] === 'object') {
        objectIsAnimatedValue = isAnimatedValue(obj[key]);
      }
    }
  }

  return objectIsAnimatedValue;
}