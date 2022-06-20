/**********************************************************************
 *
 * kw/class/srvcs/kwFctySrvcs.ts
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
import {kwSrvcs }               from "@kwClass/srvcs/kwSrvcs";
import {kwtSrvc }               from "@kwClass/srvc/kwtSrvc";
//@formatter:on


const sProp: string = "services";


export class kwFctySrvcs
{
    static create(info: kwtBs): kwSrvcs
    {
        //console.log("kwFctySrvcs::create() called");

        if (kw.isNull(info))
        {
            console.error("kwFctySrvcs::create() info is invalid");
            return;
        }
        //console.info("kwFctySrvcs::create() info is ", info);

        const list: kwtSrvc[] = info[sProp];
        if (!kw.isArray(list))
        {
            console.error("kwFctySrvcs()::create() list is invalid.");
            return;
        }
        //console.info("kwFctySrvcs()::create() list is ", list);

        const srvcs: kwSrvcs = new kwSrvcs(list);
        if (!srvcs.init())
        {
            console.error("kwFctySrvcs::create() error initializing srvcs.");
            return;
        }
        //console.info("kwFctySrvcs::create() srvcs is ", srvcs);

        return srvcs;
    }

}

