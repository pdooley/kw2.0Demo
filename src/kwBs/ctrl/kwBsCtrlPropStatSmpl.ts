/**********************************************************************
 *
 * kwBs/ctrl/kwBsCtrlPropStatSmpl.ts
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
import {OnDestroy}              from '@angular/core';
import {OnInit}                 from '@angular/core';

import {AppInjector}            from "@app/appInjector";

import {kwBsStatusStStatBs}     from "@kwBsStatus/kwBsStatusSt";
import {kwBsStSmpl}             from "@kwBsStat/kwBsStSmpl";
import {kwCtrlPropStatSmpl}     from "@kwCtrl/kwCtrlPropStatSmpl";
import {kwLog}                  from "@kw/kwLog";
import {kwSt}                   from "@kwStat/kwSt";



export abstract class kwBsCtrlPropStatSmpl  extends kwCtrlPropStatSmpl
                                            implements OnInit, OnDestroy
{

    protected constructor(
        src: kwSt,
        dst: kwBsStSmpl,
        sProp: string,
        nStat: number )
    {
        super(
            src,
            dst,
            sProp,
            nStat,
            AppInjector.get(kwBsStatusStStatBs)  );

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

//@formatter:on

    ngOnInit()
    {
        const log: kwLog = new kwLog(this.sClass, "ngOnInit");
        //console.log(log.called());

        if (!this.init())
        {
            console.error(log.errInit("this"));
            return;
        }
    }

    ngOnDestroy()
    {
        const log: kwLog = new kwLog(this.sClass, "ngOnDestroy");
        //console.log(log.called());

        this.destroy();
    }

}
