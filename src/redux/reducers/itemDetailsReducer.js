/**
 * @description this reducer for media item details state
 */

// types
import { ITEMDETAILS } from "../types/types"

 export const itemDetailsReducer =(state = {mediaDetails:[]},action)=>{
    if(action.type === ITEMDETAILS) {
        return {mediaDetails:action.data}
    }else{
        return state
    }
 }
