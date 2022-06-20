/**********************************************************************
 *
 * kw/stat/kwBsStSmpl.ts
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

import {kwTraceStTrace}   from "@kwBsState/../trace/kwTraceSt";
import {kwLog}            from "@kw/kwLog";
import {kwStSmpl}         from "@kwStat/kwStSmpl";
//@formatter:off


export abstract class kwBsStSmpl extends kwStSmpl
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
