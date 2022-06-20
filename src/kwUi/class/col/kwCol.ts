/**********************************************************************
 *
 * kwView/class/col/kwCol.ts
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
import {kw}                 from "@kw/kw";

import {kwColEnum }            from "./kwColEnum";
import {kwColSrvc }            from "./kwColSrvc";
//@formatter:on

export class kwCol
{

    constructor( private nType: kwColEnum )
    {
        //console.log("kwCol::constructor() is called.");
    }

    init(): boolean
    {
        //console.log("kwCol::init() is called.");

        if (!kwColSrvc.in(this.nType))
        {
            console.error("kwCol::init() nType is invalid.");
            return false;
        }
        //console.info("kwCol::init() nType is ", this.nType);

        return true;
    }

    isBool(): boolean
    {

        return (this.nType === kwColEnum.bool);
    }

    isDel(): boolean
    {

        return (this.nType === kwColEnum.del);
    }

    isEdit(): boolean
    {
        return (this.nType === kwColEnum.edit);
    }

    isLang(): boolean
    {
        return (this.nType === kwColEnum.lang);
    }

    isNum(): boolean
    {
        return (this.nType === kwColEnum.num);
    }

    isStr(): boolean
    {
        return (this.nType === kwColEnum.str);
    }

    isTz(): boolean
    {
        return (this.nType === kwColEnum.tz);
    }

    toString(): string
    {
        return kw.toString(this.nType, kwColEnum);
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwCol)
    }

}
