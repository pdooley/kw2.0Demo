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
import {kwNgUiCtrlPageMsgAll}       from "@kwNgUiCtrl/kwNgUiCtrlPageMsgAll";

import {dwReasonsFctyMsg }        from "@dwState/reasons/dwReasonsUtil";
import {dwReasonsStArr,
        dwReasonsStInit,
        dwReasonsStMsg,
        dwReasonsStView   }       from "@dwState/reasons/dwReasonsSt";



@Component({
    selector:       'dwp-reasons',
    templateUrl:    'dwpReasons.html',
    styleUrls:      ['dwpReasons.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class dwpReasons extends kwNgUiCtrlPageMsgAll
{


    constructor(
        srvcInit:   dwReasonsStInit,
        srvcView:   dwReasonsStView,
        srvcData:   dwReasonsStArr,
        srvcFcty:   dwReasonsFctyMsg,
        srvcMsg:    dwReasonsStMsg)
    {
        super(
            srvcInit,
            srvcView,
            srvcData,
            srvcFcty,
            srvcMsg);


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
