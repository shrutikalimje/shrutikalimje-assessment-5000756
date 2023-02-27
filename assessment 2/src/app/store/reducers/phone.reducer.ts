import { INITIAL_STATE } from "@ngrx/store";
import { PhoneItem } from "../models/phoneItem.model";
import { PhoneActionType } from "../actions/phone.action";

const intialState: Array<PhoneItem>=[
    { id:'1', name:'vivo', price:6544 },
    { id:'2', name:'vivo', price:6544 }
];

export function PhoneReducer(
    state:Array<PhoneItem>=intialState,action:PhoneAction
){
    return [...state, action.payload];

}