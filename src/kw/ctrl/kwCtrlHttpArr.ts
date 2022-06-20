/**********************************************************************
 *
 * kw/ctrl/kwCtrlHttpArr.ts
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
import {kwLog}             from "@kw/kwLog";
import {kwStArr }          from "@kwStat/kwStArr";
import {kwStMsg }          from "@kwStat/kwStMsg";


export abstract class kwCtrlHttpArr extends kwCtrlHttp
{

    protected constructor(
        src: kwStMsg,
        dst: kwStArr,
        srvcHttp: kwHttpMsg )
    {
        super(
            src,
            dst,
            srvcHttp    );

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

}
