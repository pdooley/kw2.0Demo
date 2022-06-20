/**********************************************************************
 *
 * kw/stat/kwStObj.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/

//@formatter:on
import {AppInjector}      from '@app/appInjector';

import {kwLog}            from "@kw/kwLog";
import {kwStObj}          from "@kwStat/kwStObj";
import {kwTraceStTrace}   from "@kwBs/trace/kwTraceSt";
//@formatter:off


export abstract class kwBsStObj extends kwStObj
{
    protected constructor(
        data?: object   )
    {
        super(
            AppInjector.get(kwTraceStTrace),
            data    );

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }
}
