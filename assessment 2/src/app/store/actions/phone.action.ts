import { createAction } from "@ngrx/store";
import { PhoneItem } from "../models/phoneItem.model";


export enum PhoneActionType{
    add='[PHONE} add phone'
}

export const add = createAction('[Display Component] add');
export type PhoneAction= add;