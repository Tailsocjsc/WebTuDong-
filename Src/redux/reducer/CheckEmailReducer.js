import {CHECKEMAIL,CHECKEMAIL_SUCCESS,CHECKEMAIL_ERROR} from '../actions/Action';
const initState = {
  status: null,
  data: null,
  loading: false,
  message: null,
  error: null,
};
const chekEmailReducer = (state = initState, action) => {
  switch (action.type) {
    case CHECKEMAIL:
      console.log('CHECKEMAIL');
      return {
        // ...state,
        status: null,
        loading: true,
        data: null,
        error: null,
      };

    case CHECKEMAIL_SUCCESS:
      console.log('CHECKEMAIL_SUCCESS');
      return {
        // ...state,
        status: action.data.result_code,
        loading: false,
        data: action.data.result_data,
        error: null,
        message: '',
      };

    case CHECKEMAIL_ERROR:
      console.log('CHECKEMAIL_ERROR');
      return {
        // ...state,
        status: null,
        loading: false,
        data: null,
        error: 'Lỗi sever',
      };
    default:
      return state;
  }
};
export default chekEmailReducer;
