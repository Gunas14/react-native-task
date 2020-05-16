import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, Text, View, Switch} from 'react-native';
import {Banner} from 'react-native-paper';
import {toggleStatus} from '../store/action';

const settingScreen = (props) => {
  return (
    <View>
      <Banner visible={props.bannerState} actions={[]}>
        Currently the project is running in {props.deviceInfo}
      </Banner>
      <View style={styles.settingView}>
        <Text style={styles.settingText}>Banner - Toggler</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={props.bannerState ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => props.toggleStatus()}
          value={props.bannerState}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  settingView: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  settingText: {
    fontSize: 16,
    color: '#000000',
  },
});

const mapStateToProps = (state) => {
  return {
    bannerState: state.showBanner,
    deviceInfo: state.deviceName,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleStatus: () => dispatch(toggleStatus()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(settingScreen);
