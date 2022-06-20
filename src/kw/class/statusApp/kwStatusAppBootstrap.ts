/**********************************************************************
 *
 * kw/class/statApp/kwStatusAppBootstrap.ts
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
import {kwLog }                        from "@kw/kwLog";
import {kwStatusApp }                   from "./kwStatusApp";
import {kwStatusAppEnum }               from "./kwStatusAppEnum";
//@formatter:on


export class kwStatusAppBootstrap extends kwStatusApp
{
    constructor()
    {
        super(kwStatusAppEnum.bootstrap);
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

    canTransition(prev: kwStatusApp): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "canTransition");
        //console.log(log.called());
        return true;
    }

}

