import 'react-native';
import React from 'react';
import Login from '../src/screens/LoginScreen';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

let findElement = function (tree, element) {
  let result = undefined;
  for (node in tree.children) {
    if (tree.children[node].props.testID === element) {
      result = true;
    }
  }
  return result;
};

it('find Element', () => {
  let tree = renderer.create(<Login />).toJSON();
  expect(findElement(tree, 'username')).toBeDefined();
});
