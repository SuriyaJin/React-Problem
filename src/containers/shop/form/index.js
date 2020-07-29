import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onChangeFormData, saveShopping } from '../../../actions/list';

const ShopForm = () => {
  const dispatch = useDispatch();
  const formData = useSelector(state => state.list.formData);

  const handleChange = useCallback((key, value) => {
    dispatch(onChangeFormData({ key, value }));
    //eslint-disable-next-line
  }, []);

  return (
    <div className="col-lg-4">
      <div className="form-group">
        <label htmlFor="name">NAME:</label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Enter name "
          name="email"
          value={formData.name}
          onChange={(e) => {
            handleChange('name', e.target.value)
          }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="shopName">SHOP NAME:</label>
        <input
          type="text"
          className="form-control"
          id="shopName"
          placeholder="Enter Shop name"
          name="shopName"
          value={formData.shopName}
          onChange={(e) => {
            handleChange('shopName', e.target.value)
          }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="status">STATUS</label>
        <textarea
          className="form-control"
          value={formData.status}
          onChange={(e) => {
            handleChange('status', e.target.value)
          }}
        />
      </div>
      <button
        type="submit"
        className="btn btn-success"
        onClick={() => {
          if (formData.name && formData.shopName && formData.status) {
            dispatch(saveShopping({ shopIns: formData }));
          }
        }}
      >
        Submit
      </button>
    </div>
  )
}

export default React.memo(ShopForm);