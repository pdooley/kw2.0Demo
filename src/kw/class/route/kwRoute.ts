
/**********************************************************************
 *
 * kw/class/route/kwRoute.ts
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

import {kw }                        from "@kw/kw";
import {kwRouteEnum }                from "./kwRouteEnum";
import {kwRouteSrvc }                from "./kwRouteSrvc";
//@formatter:on

export class kwRoute
{

    sRouteFull: string;

    constructor(private nType: kwRouteEnum)
    {
        //console.log("kwRoute::constructor() is called.");
    }

    init(): boolean
    {
        //console.log("kwRoute::init() called.");

        if (!kwRouteSrvc.in(this.nType))
        {
            console.error("kwRoute::init() nType is invalid.");
            return false;
        }
        //console.info("kwRoute::init() nType is ", this.nType);

        return true;
    }

    getType(): kwRouteEnum
    {
        return this.nType;
    }

    isDash(): boolean
    {
        return (this.nType === kwRouteEnum.dash);
    }

    isLogin(): boolean
    {
        return (this.nType === kwRouteEnum.login);
    }

    toString(): string
    {
        return kw.toString(this.nType, kwRouteEnum);
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwRoute)
    }

}
