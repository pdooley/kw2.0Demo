/**********************************************************************
 *
 * dw/page/payroll/dwpPayroll.scss
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

import {dwPayrollsStArr,
        dwPayrollsStInit,
        dwPayrollsStView}           from "@dwState/payrolls/dwPayrollsSt";


const sTAG: string                  = "payroll";


@Component({
    selector:       'dwp-payroll',
    templateUrl:    'dwpPayroll.html',
    styleUrls:      ['dwpPayroll.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class dwpPayroll extends kwNgUiCtrlPagePubSub
{


    constructor(
        srvcInit:   dwPayrollsStInit,
        srvcView:   dwPayrollsStView,
        srvcData:   dwPayrollsStArr    )
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
