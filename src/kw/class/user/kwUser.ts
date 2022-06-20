/**********************************************************************
 *
 * kw/class/user/kwUser.ts
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
import {kwUserEnum }                from "./kwUserEnum";
import {kwUserSrvc }                from "./kwUserSrvc";
//@formatter:on


export class kwUser
{

    constructor(private nType: kwUserEnum)
    {
        //console.log("kwUser::constructor() is called.");
    }

    init(): boolean
    {
        //console.log("kwUser::init() is called.");

        if (kwUserSrvc.in(this.nType))
        {
            console.error("kwUser::init() nType is invalid.");
            return false;
        }
        //console.info("kwUser::init() nType is [", this.nType, "]");

        return true;
    }

    isClient(): boolean
    {
        return (this.nType === kwUserEnum.client);
    }

    isStaff(): boolean
    {
        return (this.nType === kwUserEnum.staff);
    }

    toString(): string
    {
        return kw.toString(this.nType, kwUserEnum);
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwUser)
    }

}
