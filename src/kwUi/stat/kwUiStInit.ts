/**********************************************************************
 *
 * kwUi/stat/kwStInit.ts
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
import {kw}                 from "@kw/kw";
import {kwLog}              from "@kw/kwLog";
import {kwSt}               from "@kw/stat/kwSt";
import {kwStTrace}          from "@kwStat/kwStTrace";
//@formatter:off


const sDATA_TYPE: string    = "Init";


export abstract class kwUiStInit extends kwSt
{

    protected constructor(
        trace: kwStTrace,
        data?: object   )
    {
        super(
            sDATA_TYPE,
            trace,
            data    );

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

    protected setValImpl(data: any): void
    {
        const log: kwLog = new kwLog(this.sClass, "setValImpl");
        //console.log(log.called());

        if (!kw.isValid(data))
        {
            //console.info(log.empty("data"));
            this.subject.next(null);
            return;
        }


        this.traceInt(data);


        // Notify the observers
        this.subject.next(data);
    }

}
