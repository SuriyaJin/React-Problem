import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createOrEditShopping, deleteShopping } from '../../../actions/list';

const ShopList = () => {
  const shopList = useSelector(state => state.list.shoppingList);
  const dispatch = useDispatch();
  const rowsPerPage = [10, 15, 20];

  const Pagination = useCallback(() => (
    <div className="col-lg-12">
      <div className="col-lg-2">
        <select className="form-control" defaultValue={rowsPerPage[0]}>
          {rowsPerPage.map((it) => (
            <option key={it}>{it}</option>
          ))}
        </select>
      </div>
    </div>
    //eslint-disable-next-line
  ), []);

  return (
    shopList && shopList.length > 0 ? (
      <>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Date</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {shopList.map((it) => (
              <tr key={`shop${it.name}`}>
                <td>{it.name}</td>
                <td>{it.status}</td>
                <td>
                  {`${it.date.getFullYear()}-${it.date.getMonth() < 10 ? '0' + it.date.getMonth() : it.date.getMonth()}-${it.date.getDate()}T${it.date.getHours()}:${it.date.getMinutes()}:${it.date.getSeconds()}.${it.date.getMilliseconds()}`}
                </td>
                <td>
                  <i
                    className="glyphicon glyphicon-edit hand-symbol"
                    onClick={() => {
                      dispatch(createOrEditShopping(it));
                    }}
                  />
                </td>
                <td>
                  <i
                    className="glyphicon glyphicon-trash danger hand-symbol"
                    onClick={() => {
                      dispatch(deleteShopping(it.name));
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination />
      </>
    ) : <div>No Shops Found</div>
  )
}

export default React.memo(ShopList);