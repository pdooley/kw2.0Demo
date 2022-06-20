/**********************************************************************
 *
 * kw/class/route/kwRouteLogin.ts
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


export class kwRouteLogin extends kwRoute
{
    constructor()
    {
        super(kwRouteEnum.login);
        //console.log("kwRouteLogin::constructor() is called.");
    }

}
