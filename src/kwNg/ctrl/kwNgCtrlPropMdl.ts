/**********************************************************************
 *
 * kwNg/ctrl/kwNgCtrlPropMdlFull.ts
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

import {AppInjector}            from "@app/appInjector";

import {kwBsCurrsStMap}         from "@kwBsState/currs/kwBsCurrsSt";
import {kwBsLangsStMap}         from "@kwBsState/langs/kwBsLangsSt";
import {kwStMdl}                from "@kwStat/kwStMdl";
import {kwBsTimeZonesStMap}     from "@kwBsState/timeZones/kwBsTimeZonesSt";
import {kwCtrlPropSubMdl}       from "@kwCtrl/kwCtrlPropSubMdl";
import {kwLog}                  from "@kw/kwLog";
import {kwMdlsStObj}            from "@kwNgState/mdls/kwMdlsSt";



export abstract class kwNgCtrlPropMdl   extends kwCtrlPropSubMdl
                                        implements OnInit, OnDestroy
{

    protected constructor(
        dst: kwStMdl,
        sProp: string  )
    {
        super(
            AppInjector.get(kwMdlsStObj),
            dst,
            sProp,
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
