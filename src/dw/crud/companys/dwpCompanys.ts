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

import {dwCompanysFctyMsg }        from "@dwState/companys/dwCompanysUtil";
import {dwCompanysStArr }          from "@dwState/companys/dwCompanysSt";
import {dwCompanysStInit }         from "@dwState/companys/dwCompanysSt";
import {dwCompanysStMsg }          from "@dwState/companys/dwCompanysSt";
import {dwCompanysStView }         from "@dwState/companys/dwCompanysSt";


@Component({
    selector:       'dwp-companys',
    templateUrl:    'dwpCompanys.html',
    styleUrls:      ['dwpCompanys.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class dwpCompanys extends kwNgUiCtrlPageMsgAll
{

    constructor(
        srvcInit:   dwCompanysStInit,
        srvcView:   dwCompanysStView,
        srvcData:   dwCompanysStArr,
        srvcFcty:   dwCompanysFctyMsg,
        srvcMsg:    dwCompanysStMsg )
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

        //console.info(log.isObj("inits"), inits);
    }

    protected parseView(view: any): void
    {
        const log: kwLog = new kwLog(this.sClass, "parseView");
        //console.log(log.called());

        //console.info(log.isObj("view"), view);
    }

}
