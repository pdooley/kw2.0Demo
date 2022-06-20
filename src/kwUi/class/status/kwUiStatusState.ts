/**********************************************************************
 *
 * kwUi/class/status/kwUiStatusState.ts
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


export class kwUiStatusState extends kwUiStatus
{
    constructor()
    {
        super(kwUiStatusEnum.state);
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

    canTransition(prev: kwUiStatus): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "canTransition");
        //console.log(log.called());

        return true;
    }

}

