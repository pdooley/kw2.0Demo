/**********************************************************************
 *
 * kwUi/class/status/kwUiStatusComplete.ts
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
import {kwLog}                 from "@kw/kwLog";
import {kwUiStatus}                from "./kwUiStatus";
import {kwUiStatusEnum}            from "./kwUiStatusEnum";
//@formatter:on


export class kwUiStatusComplete extends kwUiStatus
{
    constructor()
    {
        super(kwUiStatusEnum.complete);
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

    canTransition(prev: kwUiStatus): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "canTransition");
        //console.log(log.called());

        if (prev.isState())
        {
            return true;
        }

        console.error("@kwUiStatusComplete::canTransition() invalid state transition.");
        return false;
    }

}

