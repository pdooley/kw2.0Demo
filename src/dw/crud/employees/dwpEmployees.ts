/**********************************************************************
 *
 * dw/crud/company/dwpCompany.scss
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

import {dwEmployeesFctyMsg}         from "@dwState/employees/dwEmployeesUtil";
import {dwEmployeesStArr,
        dwEmployeesStInit,
        dwEmployeesStMsg,
        dwEmployeesStView}          from "@dwState/employees/dwEmployeesSt";



@Component({
    selector:       'dwp-employees',
    templateUrl:    'dwpEmployees.html',
    styleUrls:      ['dwpEmployees.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class dwpEmployees extends kwNgUiCtrlPageMsgAll
{


    constructor(
        srvcInit:   dwEmployeesStInit,
        srvcView:   dwEmployeesStView,
        srvcData:   dwEmployeesStArr,
        srvcFcty:   dwEmployeesFctyMsg,
        srvcMsg:    dwEmployeesStMsg     )
    {
        super(
            srvcInit,
            srvcView,
            srvcData,
            srvcFcty,
            srvcMsg   );


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
