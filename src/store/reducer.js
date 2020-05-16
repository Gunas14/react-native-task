/* eslint-disable prettier/prettier */
import { DEVICE_NAME, TOGGLE_STATUS } from './types';

const initialState = {
    showBanner: true,
    deviceName: 'Device',
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case DEVICE_NAME:
            return {
                ...state,
                deviceName: action.payload,
            };
        case TOGGLE_STATUS:
            return {
                ...state,
                showBanner : !state.showBanner,
            };
        default: return state;
    }
}

export default reducer;
