/**********************************************************************
 *
 * kw/ctrl/kwCtrlHttpMap.ts
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

import {kwCtrlHttp }       from "./kwCtrlHttp";
import {kwHttpMsg }        from "@kwNg/http/kwHttpMsg";
import {kwLog }            from "@kw/kwLog";
import {kwStMap }          from "@kwStat/kwStMap";
import {kwStMsg }          from "@kwStat/kwStMsg";
//@formatter:on

export abstract class kwCtrlHttpMap extends kwCtrlHttp
{

    protected constructor(
        src: kwStMsg,
        dst: kwStMap,
        srvcHttp: kwHttpMsg )
    {
        super(src, dst, srvcHttp);

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

}
