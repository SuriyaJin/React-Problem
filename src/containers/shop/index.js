import React, { useCallback } from 'react';
import './shop.css';
import { useDispatch } from 'react-redux';
import { searchByName } from '../../actions/list';
import ShopForm from './form';
import ShopList from './listView';

const Shop = () => {
  const dispatch = useDispatch();
  
  const Search = useCallback(() => (
    <div className="col-lg-4 float-right">
      <input
        className="form-control"
        type="text"
        placeholder="Search by name"
        onChange={(e) => {
          dispatch(searchByName(e.target.value));
        }}
      />
    </div>
    //eslint-disable-next-line
  ), []);

  return (
    <div className="col-lg-12">
      <div className="row">
        <div className="col-lg-8">
          <Search />
          <ShopList />
        </div>
        <ShopForm />
      </div>
    </div>
  );
}

export default Shop;