/**********************************************************************
 *
 * kwBs/stat/kwBsStMdl.ts
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
import {AppInjector}      from '@app/appInjector';

import {kwLog}            from "@kw/kwLog";
import {kwStMdl}          from "@kwStat/kwStMdl";
import {kwTraceStTrace}   from "@kwBs/trace/kwTraceSt";

//@formatter:off


export abstract class kwBsStMdl extends kwStMdl
{
    protected constructor(
        data?: object   )
    {
         super(
             AppInjector.get(kwTraceStTrace),
             data        );

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
   }
}
