/**********************************************************************
 *
 * kwView/class/srvcs/kwTabsFcty.ts
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
import {kw}                    from "@kw/kw";
import {kwTabType}             from "../tab/kwTabType";
import {kwTabs}                 from "./kwTabs";
//@formatter:on


const sTAG: string = "tabs";


export class kwTabsFcty
{
    static create(info: object): kwTabs
    {
        //console.log("kwTabsFcty::create() called");

        if (kw.isNull(info))
        {
            console.error("kwTabsFcty::create() info is invalid");
            return;
        }
        //console.info("kwTabsFcty::create() info is ", info);

        const list: kwTabType[] = info[sTAG];
        if (!kw.isArray(list))
        {
            console.error("kwTabsFcty()::create() list is invalid.");
            return;
        }
        //console.info("kwTabsFcty()::create() list is ", list);

        const tabs: kwTabs = new kwTabs(list);
        if (!tabs.init())
        {
            console.error("kwTabsFcty::create() error initializing tabs.");
            return;
        }
        //console.info("kwTabsFcty::create() tabs is ", tabs);

        return tabs;
    }

}

