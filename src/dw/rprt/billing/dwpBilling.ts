/**********************************************************************
 *
 * dw/page/billing/dwpBilling.ts
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

import {dwBillingsStArr,
        dwBillingsStInit,
        dwBillingsStView}           from "@dwState/billings/dwBillingsSt";


const sTAG: string                  = "billing";


@Component({
    selector:       'dwp-billing',
    templateUrl:    'dwpBilling.html',
    styleUrls:      ['dwpBilling.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class dwpBilling extends kwNgUiCtrlPagePubSub
{


    constructor(
        srvcInit:   dwBillingsStInit,
        srvcView:   dwBillingsStView,
        srvcData:   dwBillingsStArr    )
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
