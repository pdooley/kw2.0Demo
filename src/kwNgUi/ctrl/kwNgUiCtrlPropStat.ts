/**********************************************************************
 *
 * kwNgUi/ctrl/kwNgUiCtrlPropStat.ts
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
import {OnDestroy}          from '@angular/core';
import {OnInit}             from '@angular/core';

import {AppInjector}        from "@app/appInjector";

import {kwBootstrapStBs}    from "@kwBs/bootstrap/kwBootstrapSt";
import {kwCtrlPropStat}     from "@kwCtrl/kwCtrlPropStat";
import {kwLog}              from "@kw/kwLog";
import {kwNgUiStatusStStat} from "@kwNgUiStatus/kwNgUiStatusSt";
import {kwSt}               from "@kwStat/kwSt";



export abstract class kwNgUiCtrlPropStat    extends kwCtrlPropStat
                                            implements OnInit, OnDestroy
{

    protected constructor(
        dst: kwSt,
        sProp: string,
        nStat: number )
    {
        super(
            AppInjector.get(kwBootstrapStBs),
            dst,
            sProp,
            nStat,
            AppInjector.get(kwNgUiStatusStStat)   );

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

//@formatter:on

    ngOnInit()
    {
        //console.log(this.sClass, "::ngOnInit() called");

        if (!this.init())
        {
            console.error(this.sClass, "::ngOnInit() error initializing");
            return;
        }
    }

    ngOnDestroy()
    {
        //console.log(this.sClass, "::ngOnDestroy() called.");
        this.destroy();
    }

}
