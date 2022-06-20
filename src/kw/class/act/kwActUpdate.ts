/**********************************************************************
 *
 * kw/class/act/kwActUpdate.ts
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
import {kwAct }                from "./kwAct";
import {kwActEnum }            from "./kwActEnum";
import {kwActType }            from "./kwActType";
import {kwLog} from "@kw/kwLog";
//@formatter:on


export class kwActUpdate extends kwAct
{
    constructor(private data: kwActType)
    {
        super(kwActEnum.update, data);

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());

    }

}

