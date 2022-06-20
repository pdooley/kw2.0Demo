/**********************************************************************
 *
 * kwNgUi/ctrl/kwNgUiCtrlSubInit.ts
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

import {kwLog}              from "@kw/kwLog";
import {kwUiCtrlSubInit}    from "@kwUiCtrl/kwUiCtrlSubInit";
import {kwNgUiStInit}       from "@kwNgUiStat/kwNgUiStInit";
import {kwNgUiInitsStMap}   from "@kwNgUiState/inits/kwNgUiInitsSt";



export abstract class kwNgUiCtrlSubInit extends kwUiCtrlSubInit
                                        implements OnInit, OnDestroy
{

    protected constructor(
        dst: kwNgUiStInit,
        sTag: string  )
    {
        super(AppInjector.get(kwNgUiInitsStMap), dst, sTag);

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
