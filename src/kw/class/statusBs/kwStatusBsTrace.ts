/**********************************************************************
 *
 * kw/class/StatBs/kwStatusBsBase.ts
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
import {kwLog }                 from "@kw/kwLog";
import {kwStatusBs }                from "./kwStatusBs";
import {kwStatusBsEnum }            from "./kwStatusBsEnum";
//@formatter:on


export class kwStatusBsTrace extends kwStatusBs
{
    constructor()
    {
        super(kwStatusBsEnum.trace);
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

    canTransition(prev: kwStatusBs): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "canTransition");
        //console.log(log.called());

        if (prev.isInit())
        {
            return true;
        }

        console.error("kwStatusBsComplete::canTransition() invalid state transition.");
        return false;
    }

}

