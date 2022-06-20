/**********************************************************************
 *
 * kw/class/routes/kwFctyRoutes.ts
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
import {kwtBs }                 from "@kwClass/Bs/kwtBs";
import {kwRoutes }              from "@kwClass/routes/kwRoutes";
//@formatter:on


const sProp: string = "routes";


export class kwFctyRoutes
{
    static create(info: kwtBs): kwRoutes
    {
        //console.log("kwFctyRoutes::create() called");

        if (kw.isNull(info))
        {
            console.error("kwFctyRoutes::create() info is invalid");
            return;
        }
        //console.info("kwFctyRoutes::create() info is ", info);

        const data: object = info[sProp];
        if ( kw.isNull(data))
        {
            console.error("kwFctyRoutes()::create() data is invalid.");
            return;
        }
        //console.info("kwFctyRoutes()::create() data is ", data);

        const routes: kwRoutes = new kwRoutes(data);
        if (!routes.init())
        {
            console.error("kwFctyRoutes::create() error initializing routes.");
            return;
        }
        //console.info("kwFctyRoutes::create() routes is ", routes);

        return routes;
    }

}

