/**********************************************************************
 *
 * kwBs/stat/kwBsStStatBs.ts
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
import {AppInjector}        from "@app/appInjector";

import {kwTraceStTrace}     from "@kwBsState/../trace/kwTraceSt";
import {kwStStatBs}         from "@kwStat/kwStStatBs";
//@formatter:off


export abstract class kwBsStStatBs extends kwStStatBs
{
    protected constructor(
        data?: object   )
    {
        super(
            AppInjector.get(kwTraceStTrace),
            data    );
        //console.log(this.sClass, "::constructor() called.");
    }
}
