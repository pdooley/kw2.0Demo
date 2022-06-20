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

import {dwShiftTypesFctyMsg }       from "@dwState/shiftTypes/dwShiftTypesUtil";
import {dwShiftTypesStArr,
        dwShiftTypesStInit,
        dwShiftTypesStMsg,
        dwShiftTypesStView  }       from "@dwState/shiftTypes/dwShiftTypesSt";



@Component({
    selector:       'dwp-shift-types',
    templateUrl:    'dwpShiftTypes.html',
    styleUrls:      ['dwpShiftTypes.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class dwpShiftTypes extends kwNgUiCtrlPageMsgAll
{

    constructor(
        srvcInit:   dwShiftTypesStInit,
        srvcView:   dwShiftTypesStView,
        srvcData:   dwShiftTypesStArr,
        srvcFcty:   dwShiftTypesFctyMsg,
        srvcMsg:    dwShiftTypesStMsg )
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
