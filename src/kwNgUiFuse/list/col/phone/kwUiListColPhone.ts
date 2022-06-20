/**********************************************************************
 *
 * kwNgUiFuse/list/col/phone/kwUiListColPhone.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/

//@formatter:off
import {Component}            from '@angular/core';
import {ViewEncapsulation}    from '@angular/core';

import {kwLog}                from "@kw/kwLog";
import {kwNgUiCtrlComp}       from "@kwNgUiCtrl/kwNgUiCtrlComp";


import {fuseAnimations}       from '@fuse/animations/index';


const sTAG: string = "phone";


@Component({
    selector     : 'kw-ui-list-col-phone',
    templateUrl  : './kwUiListColPhone.html',
    styleUrls    : ['./kwUiListColPhone.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class kwUiListColPhone extends kwNgUiCtrlComp
{

    constructor()
    {
        super(sTAG);

        const log = new kwLog(this.sClass, "constructor");
        //console.info(log.called());
    }

    protected initCmp(): void
    {
        const log: kwLog = new kwLog(this.sClass, "initCmp");
        //console.log(log.called());
    }

    protected navigate(): void
    {
        const log: kwLog = new kwLog(this.sClass, "navigate");
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

    protected publish(): void
    {
        const log: kwLog = new kwLog(this.sClass, "publish");
        //console.log(log.called());
    }

}
