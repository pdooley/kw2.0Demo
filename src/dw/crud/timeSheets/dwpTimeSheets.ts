/**********************************************************************
 *
 * dw/crud/company/dwpCompany.ts
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
import {kwNgUiCtrlPageMsgAll}       from "@kwNgUiCtrl/kwNgUiCtrlPageMsgAll";

import {dwTimeSheetsFctyMsg }       from "@dwState/timeSheets/dwTimeSheetsUtil";
import {dwTimeSheetsStArr,
        dwTimeSheetsStInit,
        dwTimeSheetsStMsg,
        dwTimeSheetsStView  }       from "@dwState/timeSheets/dwTimeSheetsSt";



@Component({
    selector:       'dwp-time-sheets',
    templateUrl:    'dwpTimeSheets.html',
    styleUrls:      ['dwpTimeSheets.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class dwpTimeSheets extends kwNgUiCtrlPageMsgAll
{


    constructor(
        srvcInit:   dwTimeSheetsStInit,
        srvcView:   dwTimeSheetsStView,
        srvcData:   dwTimeSheetsStArr,
        srvcFcty:   dwTimeSheetsFctyMsg,
        srvcMsg:    dwTimeSheetsStMsg   )
    {
        super(
            srvcInit,
            srvcView,
            srvcData,
            srvcFcty,
            srvcMsg    );


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
