/**********************************************************************
 *
 * kw/srvc/load/kwSrvcLoad.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/

//@formatter:off
import {Observable}         from "rxjs";

import {kwLog}              from "@kw/kwLog";
import {kwMsg}              from "@kwClass/msg/kwMsg";

//@formatter:on

export abstract class kwSrvcLoad
{

    protected sClass: string = this.constructor.name;

    protected constructor()
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

    public abstract load(msg: kwMsg): Observable<any>;

}




