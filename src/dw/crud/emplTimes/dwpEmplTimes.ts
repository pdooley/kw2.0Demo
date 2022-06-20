/**********************************************************************
 *
 * dw/crud/emplTimes/dwpEmplTimes.scss
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

import {dwEmplTimesStArr,
        dwEmplTimesStInit,
        dwEmplTimesStView}          from "@dwState/emplTimes/dwEmplTimesSt";


const sTAG: string                  = "emplTimes";


@Component({
    selector:       'dwp-employee-times',
    templateUrl:    'dwpEmplTimes.html',
    styleUrls:      ['dwpEmplTimes.scss'],
    encapsulation:  ViewEncapsulation.None,
    animations:     fuseAnimations
})
export class dwpEmplTimes extends kwNgUiCtrlPagePubSub
{


    constructor(
        srvcInit:   dwEmplTimesStInit,
        srvcView:   dwEmplTimesStView,
        srvcData:   dwEmplTimesStArr     )
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

    public      onChanged($event): void
    {
        const log: kwLog = new kwLog(this.sClass, "onChanged");
        //console.log(log.called());
    }

    protected   parseData(data: any): void
    {
        const log: kwLog = new kwLog(this.sClass, "parseData");
        //console.log(log.called());
    }

    protected   parseInits(inits: any): void
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
