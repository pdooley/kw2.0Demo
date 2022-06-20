/**********************************************************************
 *
 * kw/class/kwMsgNull.ts
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
import {kwAct }                from "@kwClass/act/kwAct";
import {kwActs }               from "@kwClass/acts/kwActs";
import {kwMsg }                from "./kwMsg";
import {kwMsgEnum }            from "./kwMsgEnum";
import {kwMsgType }            from "./kwMsgType";
//@formatter:on

export class kwMsgNull extends kwMsg
{
    constructor(type: kwMsgType)
    {
        super(kwMsgEnum.null, type);
        //console.log("kwMsgNull::constructor() is called.");
    }

    retrieveActImpl(acts: kwActs): kwAct
    {
        //console.log("kwMsgAdd::retrieveActImpl() is called.");

        if (!kwActs.is(acts))
        {
            console.error("kwMsg::retrieveActImpl() acts is invalid.");
            return;
        }

        const act: kwAct = acts.get;
        if (!kwAct.is(act))
        {
            console.error("kwMsg::retrieveActImpl() error retrieving act.");
            return;
        }

        return act;
    }

}
