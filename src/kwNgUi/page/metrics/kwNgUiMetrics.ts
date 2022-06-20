/**********************************************************************
 *
 * kwNgUi/page/metrics/kwNgUiMetrics.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2018 iTKunst corp.
 *
 **********************************************************************/
//@formatter:off

import {Component}                  from '@angular/core';
import {ViewEncapsulation}          from '@angular/core';

import {fuseAnimations}             from "@fuse/animations";

import {kwLog}                      from "@kw/kwLog";
import {kwNgUiCtrlPageMsgAll}       from "@kwNgUiCtrl/kwNgUiCtrlPageMsgAll";

import {kwMetricsFctyMsg}           from "@kwNgState/metrics/kwMetricsUtil";
import {kwMetricsStArr,
        kwMetricsStInit,
        kwMetricsStMsg}             from "@kwNgState/metrics/kwMetricsSt";
import {kwNgUiMetricsStView}        from "@kwNgUi/state/metrics/kwNgUiMetricsSt";



@Component({
    selector:       'kw-ng-ui-page-metrics',
    templateUrl:    'kwNgUiMetrics.html',
    styleUrls:      ['kwNgUiMetrics.scss'],
    encapsulation:  ViewEncapsulation.None,
    animations:     fuseAnimations
})
export class kwNgUiMetrics extends kwNgUiCtrlPageMsgAll
{


    constructor(
        srvcInit:   kwMetricsStInit,
        srvcView:   kwNgUiMetricsStView,
        srvcData:   kwMetricsStArr,
        srvcFcty:   kwMetricsFctyMsg,
        srvcMsg:    kwMetricsStMsg)
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
