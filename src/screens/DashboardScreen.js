import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import { StyleSheet, Text, View} from 'react-native';
import {Banner} from 'react-native-paper';
import {updateDeviceInfo} from '../store/action';

const dashboardScreen = (props) => {
  useEffect(() => {
    props.updateDeviceInfo();
  }, [props]);

  return (
    <View>
      <Banner visible={props.bannerState} actions={[]}>
        Currently the project is running in {props.deviceInfo}
      </Banner>
      <View style={styles.container}>
        <Text>abc@gmail.com</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
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
    updateDeviceInfo: () => dispatch(updateDeviceInfo()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(dashboardScreen);
