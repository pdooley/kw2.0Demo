/**********************************************************************
 *
 * kw/class/route/kwRouteDash.ts
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
import {kwRoute }                    from "./kwRoute";
import {kwRouteEnum }                from "./kwRouteEnum";
import {kwRouteMap }               from "./kwRouteMap";
//@formatter:on


export class kwRouteDash extends kwRoute
{
    constructor()
    {
        super(kwRouteEnum.dash);
        //console.log("kwRouteDash::constructor() is called.");
    }

}
