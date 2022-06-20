/**********************************************************************
 *
 * dw/crud/reasons/dwpReasons.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2018 Teppen Inc.
 *
 **********************************************************************/
//@formatter:off

import {Component}                  from '@angular/core';
import {ViewEncapsulation}          from '@angular/core';

import {fuseAnimations}             from "@fuse/animations";

import {kwLog}                      from "@kw/kwLog";
import {kwNgUiCtrlPagePubSub}       from "@kwNgUiCtrl/kwNgUiCtrlPagePubSub";

import {dwTimeReasonsStArr,
        dwTimeReasonsStView}        from "@dwState/timeReasons/dwTimeReasonsSt";
import {dwTimeSheetsStInit}         from "@dwState/timeSheets/dwTimeSheetsSt";


const sTAG: string                  = "timeReasons";



@Component({
    selector:       'dwp-time-reasons',
    templateUrl:    'dwpTimeReasons.html',
    styleUrls:      ['dwpTimeReasons.scss'],
    encapsulation:  ViewEncapsulation.None,
    animations:     fuseAnimations
})
export class dwpTimeReasons extends kwNgUiCtrlPagePubSub
{


    constructor(
        srvcInit:   dwTimeSheetsStInit,
        srvcView:   dwTimeReasonsStView,
        srvcData:   dwTimeReasonsStArr  )
    {
        super(
            srvcInit,
            srvcView,
            srvcData,
            sTAG    );


        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

//@formatter:on

    public onChanged($event): void
    {
        const log: kwLog = new kwLog(this.sClass, "onChanged");
        //console.log(log.called());
    }

    protected parseData(data: any): void
    {
        const log: kwLog = new kwLog(this.sClass, "parseData");
        //console.log(log.called());
    }

    protected parseInits(inits: any): void
    {
        const log: kwLog = new kwLog(this.sClass, "parseInits");
        //console.log(log.called());
    }

    protected parseView(view: any): void
    {
        const log: kwLog = new kwLog(this.sClass, "parseView");
        //console.log(log.called());
    }

}
