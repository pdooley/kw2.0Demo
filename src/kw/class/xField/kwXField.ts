/**********************************************************************
 *
 * kw/kw/kwXField.ts
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
import {kw }                       from "@kw/kw";
import {kwXFieldEnum }                from "./kwXFieldEnum";
import {kwXFieldSrvc }                from "./kwXFieldSrvc";
//@formatter:on

export abstract class kwXField
{

    constructor(private nType: kwXFieldEnum)
    {
        //console.log("kwXField::constructor() is called.");
    }

    abstract transform(val: any, sName: string): any

    init(): boolean
    {
        //console.log("kwAct::init() is called.");

        if (!kwXFieldSrvc.in(this.nType))
        {
            console.error("kwAct::init() nType is invalid.");
            return false;
        }
        //console.info("kwAct::init() nType is ", this.nType);
    }

    isArr(): boolean
    {
        return (this.nType === kwXFieldEnum.arr);
    }

    isBool(): boolean
    {
        return (this.nType === kwXFieldEnum.bool);
    }

    isCur(): boolean
    {
        return (this.nType === kwXFieldEnum.curr);
    }

    isCurCode(): boolean
    {
        return (this.nType === kwXFieldEnum.currcode);
    }

    isLang(): boolean
    {
        return (this.nType === kwXFieldEnum.lang);
    }

    isLangCode(): boolean
    {
        return (this.nType === kwXFieldEnum.langcode);
    }

    isNum(): boolean
    {
        return (this.nType === kwXFieldEnum.num);
    }

    isObj(): boolean
    {
        return (this.nType === kwXFieldEnum.obj);
    }

    isStr(): boolean
    {
        return (this.nType === kwXFieldEnum.str);
    }

    isTime(): boolean
    {
        return (this.nType === kwXFieldEnum.time);
    }

    isTz(): boolean
    {
        return (this.nType === kwXFieldEnum.tz);
    }

    isTzCode(): boolean
    {
        return (this.nType === kwXFieldEnum.tzcode);
    }

    toString(): string
    {
        return kw.toString(this.nType, kwXFieldEnum);
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwXField)
    }
}

