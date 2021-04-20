import * as actionTypes from './shopping-types'
import { v4 as uuidv4 } from 'uuid';

const INITIAL_STATE={
    products:[{id:uuidv4(),title:"item 1",description:"item 1 description",price:1,qty:1},
    {id:uuidv4(),title:"item 2",description:"item 2 description",price:2,qty:1},
    {id:uuidv4(),title:"item 3",description:"item 3 description",price:3,qty:1}],
    cart:[],
    currentItem:null
}
const shopReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type)
    {
        case actionTypes.ADD_TO_CART:
            let cartItem=state.products.filter(product=>{
                return product.id===action.payload.id
            })
            return {
                ...state,cart:[...state.cart,cartItem[0]]
            }
        case actionTypes.REMOVE_FROM_CART:
            
            return {
                ...state,cart:state.cart.filter(cartItem=>{
                    return cartItem.id!==action.payload.id
                })
            }
        case actionTypes.ADJUST_QTY:
            return {}
        case actionTypes.LOAD_CURRENT_ITEM:
            console.log('load current item')
            console.log(action.payload)
            console.log(state.products)
            return {
                ...state,currentItem:action.payload
                
            }
        default:
            return state
    }
}

export default shopReducer