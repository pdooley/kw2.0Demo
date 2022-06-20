/**********************************************************************
 *
 * kwBs/stat/kwBsStArr.ts
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
import {AppInjector}      from '@app/appInjector';

import {kwTraceStTrace}   from "@kwBsState/../trace/kwTraceSt";
import {kwLog}            from "@kw/kwLog";
import {kwStArr}           from "@kwStat/kwStArr";
//@formatter:off



export abstract class kwBsStArr extends kwStArr
{

    protected constructor(
        sTagId: string,
        sType?: string,
        data?: object    )
    {
        super(
            AppInjector.get(kwTraceStTrace),
            sTagId,
            sType,
            data    );

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
   }
}
