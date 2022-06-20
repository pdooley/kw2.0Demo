/**********************************************************************
 *
 * kwBs/ctrl/kwBsCtrlSubMdl.ts
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
import {kwBsCurrsStMap}     from "@kwBsState/currs/kwBsCurrsSt";
import {kwBsLangsStMap}     from "@kwBsState/langs/kwBsLangsSt";
import {kwBsMdlsStObj}      from "@kwBsState/mdls/kwBsMdlsSt";
import {kwBsStMdl}          from "@kwBsStat/kwBsStMdl";
import {kwBsTimeZonesStMap}       from "@kwBsState/timeZones/kwBsTimeZonesSt";
import {kwCtrlSubMdl}       from "@kwCtrl/kwCtrlSubMdl";
import {kwLog}              from "@kw/kwLog";



export abstract class kwBsCtrlSubMdl    extends kwCtrlSubMdl
                                        implements OnInit, OnDestroy
{

    protected constructor(
        dst: kwBsStMdl,
        sSTATE: string  )
    {
        super(
            AppInjector.get(kwBsMdlsStObj),
            dst,
            sSTATE,
            AppInjector.get(kwBsCurrsStMap),
            AppInjector.get(kwBsLangsStMap),
            AppInjector.get(kwBsTimeZonesStMap),
        );

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
