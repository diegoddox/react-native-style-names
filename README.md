# react-native-style-names
[![NPM](https://nodei.co/npm/react-native-style-names.png)](https://nodei.co/npm/react-native-style-names/)

A very simple JavaScript utility for conditionally joining react-native styles

##### 1. Installation

`npm install --save react-native-style-names`

##### 2. Usage

```
import {StyleSheet} from 'react-native';
import stylenames from 'react-native-style-names';

stylenames(styles.container, styles.background) // => [styles.container, styles.background]

stylenames({ [styles.container]: true }) // => [styles.container]

stylenames({ [styles.container]: false }) // => []

stylenames({
  [styles.container]: true,
  [styles.background]: true
}) // => [styles.container, styles.background]

stylenames({
  [styles.container]: false,
  [styles.background]: true
}) // => [styles.background]

const widthAnimation = new Animated.value(10);
stylenames(styles.container, {
  height: widthAnimation
}); // => [styles.container, {height: widthAnimation}];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
```

## License

[MIT](LICENSE). Copyright (c) 2017 Diego Oliveira.