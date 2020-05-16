/* eslint-disable prettier/prettier */
import { DEVICE_NAME, TOGGLE_STATUS } from './types';
import DeviceInfo from 'react-native-device-info';

export const updateDeviceInfo = () =>{
    return dispatch => {
        let brand = DeviceInfo.getBrand();
        let isVirtual =  checkForVirtualDevice();
        var info = isVirtual ? ( brand === 'Apple' ? 'Simulator' : 'Emulator') : brand;

        dispatch(addnewtodoItem(info));
    };
};

/** To check is it a virtual device 
 * As of now, I have only simulator available to test.
 * Tested this only in simulator
*/
const checkForVirtualDevice = async() =>{
    var isVirtualDevice = false;
    isVirtualDevice = await DeviceInfo.isEmulator().then(isEmulator => {
        return isEmulator;
    });

    return isVirtualDevice;
};

const addnewtodoItem = (value) =>{
    return {
        type : DEVICE_NAME,
        payload : value,
    };
};

export const toggleStatus = (value) =>{
    return {
        type : TOGGLE_STATUS,
        payload : value,
    };
};
