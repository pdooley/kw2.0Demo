/**********************************************************************
 *
 * kwBs/stat/kwBsStMap.ts
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
import {AppInjector}        from "@app/appInjector";

import {kwLog}              from "@kw/kwLog";
import {kwTraceStTrace}     from "@kwBs/trace/kwTraceSt";
import {kwUiStMap}          from "@kwUiStat/kwUiStMap";

//@formatter:off



export abstract class kwNgUiStMap extends kwUiStMap
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
