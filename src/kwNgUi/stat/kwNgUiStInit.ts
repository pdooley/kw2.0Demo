/**********************************************************************
 *
 * kwNgUi/stat/kwNgUiStInit.ts
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

import {kwTraceStTrace}   from "@kwBs/trace/kwTraceSt";
import {kwLog}            from "@kw/kwLog";
import {kwUiStInit}         from "@kwUiStat/kwUiStInit";
//@formatter:off


export abstract class kwNgUiStInit extends kwUiStInit
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
