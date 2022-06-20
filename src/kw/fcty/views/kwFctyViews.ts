/**********************************************************************
 *
 * kw/class/mdls/kwFctyViews.ts
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
import {kw }                   from "@kw/kw";
import {kwViews }              from "@kwUiClass/views/kwViews";
//@formatter:on


const sProp: string = "views";

export class kwFctyViews
{
    static create(info: object): kwViews
    {
        //console.log("kwFctyViews::create() called");

        if (kw.isNull(info))
        {
            console.error("kwFctyViews::create() info is invalid");
            return;
        }
        //console.info("kwFctyViews::create() info is ", info);

        const val: object = info[sProp];
        if (kw.isNull(val))
        {
            console.error("kwFctyViews()::create() val is invalid.");
            return;
        }
        //console.info("kwFctyViews()::create() val is ", val);

        const views: kwViews = new kwViews(val);
        if (!views.init())
        {
            console.error("kwFctyViews()::create() error initializing views.");
            return;
        }
        //console.info("kwFctyViews()::create() views is ", views);

        return views;
    }
}

