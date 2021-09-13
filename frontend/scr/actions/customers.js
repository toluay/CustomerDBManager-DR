import axios from 'axios';
import { GET_CUSTOMERS, DELETE_CUSTOMER, ADD_CUSTOMER, GET_ERRORS } from './types';

// GET LEADS
export const getCustomers = () => (dispatch)=>{
    axios
    .get('/api/leads/')
    .then((res) => {
        dispatch({
          type: GET_CUSTOMERS,
          payload: res.data,
        });
      })
      .catch((err) =>console.log(err));

}
//DELETE LEAD
export const deleteCustomer = (id) => (dispatch) => {
  axios
    .delete(`/api/leads/${id}/`)
    .then((res) => {
    //   dispatch(createMessage({ deleteCustomer: 'Customer Deleted' }));
      dispatch({
        type: DELETE_CUSTOMER,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

// ADD LEAD
export const addCustomer = (customer) => (dispatch) => {
    axios
      .post('/api/leads/', customer)
      .then((res) => {
        //dispatch(createMessage({ addCustomer: 'Customer Added' }));
        dispatch({
          type: ADD_CUSTOMER,
          payload: res.data,
        });
      })
      .catch((err) =>{
        console.log(err)
        const errors  = { msg:err.response.data, status: err.response.status};
        dispatch({type:GET_ERRORS, payload:errors});
      });
      
  };
  