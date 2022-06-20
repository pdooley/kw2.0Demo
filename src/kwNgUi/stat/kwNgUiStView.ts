/**********************************************************************
 *
 * kwNgUi/stat/kwUiStView.ts
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
import {kwUiStView}         from "@kwUiStat/kwUiStView";
//@formatter:off


export abstract class kwNgUiStView extends kwUiStView
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
