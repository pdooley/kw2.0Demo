/**********************************************************************
 *
 * kwView/class/tab/kwTabFcty.ts
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
import {kwApiType}          from "@kwClass/api/kwApiType";
import {kwTab}             from "./kwTab";
import {kwTabType}         from "./kwTabType";
//@formatter:on


const sTAG: string = "actions";


export class kwTabFcty
{

    static create(info: kwApiType): kwTab
    {
        //console.log("kwTabFcty::create() is called.");

        if (kw.isNull(info))
        {
            console.error("kwTabFcty::create() info is invalid.");
            return;
        }
        //console.info("kwTabFcty::create() info is ", info);

        const type: kwTabType = info[sTAG];
        if (kw.isNull(type))
        {
            console.error("kwTabFcty::create() type is invalid.");
            return;
        }
        //console.info("kwTabFcty::create() type is ", type);

        const tab: kwTab = new kwTab(type);
        if (!tab.init())
        {
            console.error("kwTabFcty::create() error creating tab.");
            return;
        }
        //console.info("kwTabFcty::create() tab is ", tab);

        return tab;
    }

}

