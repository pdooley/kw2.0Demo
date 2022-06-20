/**********************************************************************
 *
 * kwView/class/form/kwForm.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst Corporation
 *
 **********************************************************************/

//@formatter:off
import {kw }               from "@kw/kw";
import {kwFormEnum }       from "./kwFormEnum";
import {kwFormSrvc }       from "./kwFormSrvc";
//@formatter:on


export abstract class kwForm
{
    constructor(private nType: kwFormEnum )
    {
        //console.log("kwForm::constructor() is called.");
    }

    init(): boolean
    {
        //console.log("kwForm::init() is called.");

        if (!kwFormSrvc.in(this.nType))
        {
            console.error("kwAct::init() nType is invalid.");
            return false;
        }
        //console.info("kwForm::init() nType is ", this.nType);

        return true;
    }

    isAdd(): boolean
    {
        return (this.nType === kwFormEnum.add);
    }

    isEdit(): boolean
    {
        return (this.nType === kwFormEnum.edit);
    }

    isView(): boolean
    {
        return (this.nType === kwFormEnum.view);
    }

    toString(): string
    {
        return kw.toString(this.nType, kwFormEnum);
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwForm)
    }
}
