/**********************************************************************
 *
 * dw/crud/jobScheds/dwpJobScheds.ts
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

import {dwJobSchedsStArr,
        dwJobSchedsStView}           from "@dwState/jobScheds/dwJobSchedsSt";
import {dwJobStInit}                from "@dwState/job/dwJobSt";


const sTAG: string                  = "jobScheds";


@Component({
    selector:       'dwp-job-scheds',
    templateUrl:    'dwpJobScheds.html',
    styleUrls:      ['dwpJobScheds.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class dwpJobScheds extends kwNgUiCtrlPagePubSub
{

    constructor(
        srvcInit:   dwJobStInit,
        srvcView:   dwJobSchedsStView,
        srvcData:   dwJobSchedsStArr )
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
