/**********************************************************************
 *
 * kw/class/acts/kwFctyActs.ts
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
import {kwActs }               from "@kwClass/acts/kwActs";
import {kwActsType }           from "@kwClass/acts/kwActsType";
import {kwApiType }            from "@kwClass/api/kwApiType";
//@formatter:on


const sProp: string = "actions";


export class kwFctyActs
{

    static create(info: kwApiType): kwActs
    {
        //console.log("kwFctyActs::create() is called.");

        if (kw.isNull(info))
        {
            console.error("kwFctyActs::create() info is invalid.");
            return;
        }
        //console.info("kwFctyActs::create() info is ", info);

        const type: kwActsType = info[sProp];
        if (kw.isNull(type))
        {
            console.error("kwFctyActs::create() type is invalid.");
            return;
        }
        //console.info("kwFctyActs::create() type is ", type);

        const acts: kwActs = new kwActs(type);
        if (!acts.init())
        {
            console.error("kwFctyActs::create() error creating acts.");
            return;
        }
        //console.info("kwFctyActs::create() acts is ", acts);

        return acts;
    }

}

