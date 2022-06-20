/**********************************************************************
 *
 * dw/crud/provinces/dwpProvinces.ts
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

import {dwProvincesFctyMsg }        from "@dwState/provinces/dwProvincesUtil";
import {dwProvincesStArr,
        dwProvincesStInit,
        dwProvincesStMsg,
        dwProvincesStView   }       from "@dwState/provinces/dwProvincesSt";



@Component({
    selector:       'dwp-provinces',
    templateUrl:    'dwpProvinces.html',
    styleUrls:      ['dwpProvinces.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class dwpProvinces extends kwNgUiCtrlPageMsgAll
{


    constructor(
        srvcInit:   dwProvincesStInit,
        srvcView:   dwProvincesStView,
        srvcData:   dwProvincesStArr,
        srvcFcty:   dwProvincesFctyMsg,
        srvcMsg:    dwProvincesStMsg)
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
