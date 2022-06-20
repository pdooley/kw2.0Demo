/**********************************************************************
 *
 * kwBs/ctrl/kwBsCtrlSubSmpl.ts
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
import {OnDestroy}            from "@angular/core";
import {OnInit}               from "@angular/core";

import {kwBsStSmpl}           from "@kwBsStat/kwBsStSmpl";
import {kwBsStVal}            from "@kwBsStat/kwBsStVal";
import {kwCtrlSubSmpl}        from "@kwCtrl/kwCtrlSubSmpl";
import {kwLog}                from "@kw/kwLog";



export abstract class kwBsCtrlSubSmpl   extends kwCtrlSubSmpl
                                        implements OnInit, OnDestroy
{

    protected constructor(
        src: kwBsStVal,
        dst: kwBsStSmpl,
        sSTATE: string  )
    {
        super(
            src,
            dst,
            sSTATE    );

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());

    }

//@formatter:on

    ngOnInit()
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());

        if (!this.init())
        {
            console.error(log.errInit("this"));
            return;
        }
    }

    ngOnDestroy()
    {
        //console.log(this.sClass, "::ngOnDestroy() called.");
        this.destroy();
    }

}
