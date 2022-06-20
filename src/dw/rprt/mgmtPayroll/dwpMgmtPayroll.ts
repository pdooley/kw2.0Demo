/**********************************************************************
 *
 * dw/page/mgmtPayroll/dwpMgmtPayroll.scss
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

import {dwMgmtPayrollsStArr,
        dwMgmtPayrollsStInit,
        dwMgmtPayrollsStView}       from "@dwState/mgmtPayrolls/dwMgmtPayrollsSt";


const sTAG: string                  = "mgmtPayroll";


@Component({
    selector:       'dwp-mgmt-payroll',
    templateUrl:    'dwpMgmtPayroll.html',
    styleUrls:      ['dwpMgmtPayroll.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class dwpMgmtPayroll extends kwNgUiCtrlPagePubSub
{


    constructor(
        srvcInit:   dwMgmtPayrollsStInit,
        srvcView:   dwMgmtPayrollsStView,
        srvcData:   dwMgmtPayrollsStArr    )
    {
        super(
            srvcInit,
            srvcView,
            srvcData,
            sTAG  );


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
