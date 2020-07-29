import * as actionTypes from '../../actions/actionTypes/list';

const initialState = {
  shoppingList: [],
  clonedShoppingList: [],
  formData: {
    name: '',
    shopName: '',
    createdDate: '',
    status: ''
  }
}

export default (prevState = initialState, action) => {
  switch(action.type) {
    case actionTypes.CREATE_OR_EDIT_SHOPPING_RECORD: {
      let formData = { ...prevState.formData, name: action.payload.name, shopName: action.payload.shopName, status: action.payload.status };
      return { ...prevState, formData };
    }
    case actionTypes.ON_CHANGE_FORM_DATA: {
      let formData = { ...prevState.formData };
      formData[action.payload.key] = action.payload.value;
      return { ...prevState, formData };
    }
    case actionTypes.SAVE_SHOPPING_RECORD: {
      let newList = [...prevState.shoppingList];
      let alreadyPresentIndex = newList.findIndex(it => it.name === action.payload.shopIns.name);
      if (alreadyPresentIndex > -1) {
        newList[alreadyPresentIndex].name = action.payload.shopIns.name;
        newList[alreadyPresentIndex].shopName = action.payload.shopIns.shopName;
        newList[alreadyPresentIndex].status = action.payload.shopIns.status;
      } else {
        action.payload.shopIns.date = new Date();
        newList.push(action.payload.shopIns);
      }
      return { ...prevState, shoppingList: newList, clonedShoppingList: [...newList],formData: { name: '', shopName: '', status: '' } };
    }
    case actionTypes.DELETE_SHOPPING_RECORD:{
      let newList = prevState.shoppingList.filter(it => it.name !== action.name);
      return { ...prevState, shoppingList: newList, clonedShoppingList: [...newList] };
    }
    case actionTypes.SEARCH_BY_NAME:
      return { ...prevState, shoppingList: prevState.clonedShoppingList.filter(it => it.name.toLowerCase().indexOf(action.searchString.toLowerCase()) > -1) };
    default: return prevState;
  }
}