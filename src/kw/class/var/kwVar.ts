
/**********************************************************************
 *
 * kw/class/kwVar.ts
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
import {kw }                    from "@kw/kw";
import {kwVarEnum }            from "./kwVarEnum";
import {kwVarSrvc }            from "./kwVarSrvc";
//@formatter:on

export class kwVar
{

    constructor( private nType: kwVarEnum )
    {
        //console.log("kwVar::constructor() is called.");
    }

    init(): boolean
    {
        //console.log("kwSignin::init() called.");

        if (!kwVarSrvc.in(this.nType))
        {
            console.error("kwSignin::init() nType is invalid.");
            return false;
        }
        //console.info("kwVar::init() nType is [", this.nType, "]");

        return true;
    }

    isArr(): boolean
    {

        return (this.nType === kwVarEnum.arr);
    }

    isBool(): boolean
    {

        return (this.nType === kwVarEnum.bool);
    }

    isCurr(): boolean
    {

        return (this.nType === kwVarEnum.curr);
    }

    isCurrCode(): boolean
    {

        return (this.nType === kwVarEnum.currcode);
    }

    islang(): boolean
    {

        return (this.nType === kwVarEnum.lang);
    }

    islangCode(): boolean
    {

        return (this.nType === kwVarEnum.langcode);
    }

    isNulld(): boolean
    {

        return (this.nType === kwVarEnum.null);
    }

    isNum(): boolean
    {

        return (this.nType === kwVarEnum.num);
    }

    isObj(): boolean
    {

        return (this.nType === kwVarEnum.obj);
    }

    isStr(): boolean
    {

        return (this.nType === kwVarEnum.str);
    }

    isTime(): boolean
    {

        return (this.nType === kwVarEnum.time);
    }

    isTz(): boolean
    {

        return (this.nType === kwVarEnum.tz);
    }

    isTzCode(): boolean
    {

        return (this.nType === kwVarEnum.tzcode);
    }

    toString(): string
    {
        return kw.toString(this.nType, kwVarEnum);
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwVar)
    }

}
