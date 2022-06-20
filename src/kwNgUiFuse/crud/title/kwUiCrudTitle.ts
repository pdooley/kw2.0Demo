/**********************************************************************
 *
 * kwNgUiFuse/crud/title/kwUiCrudTitle.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2018 iTKunst corporation
 *
 **********************************************************************/
//@formatter:off
import {Component}                from '@angular/core';
import {ViewEncapsulation}        from '@angular/core';

import * as _                       from "lodash";

import {fuseAnimations}           from "@fuse/animations/index";

import {kwLog}                    from "@kw/kwLog";
import {kwNgUiCtrlComp}         from "@kwNgUiCtrl/kwNgUiCtrlComp";



const sTAG: string = "title";


@Component({
    selector:       'kw-ui-crud-title',
    templateUrl:    'kwUiCrudTitle.html',
    styleUrls:      ['kwUiCrudTitle.scss'],
    encapsulation:  ViewEncapsulation.None,
    animations   :  fuseAnimations
})
export class kwUiCrudTitle extends kwNgUiCtrlComp
{

    constructor()
    {
        super(sTAG);

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

//@formatter:on

    public onChanged($event): void
    {
        const log: kwLog = new kwLog(this.sClass, "onChanged");
        //console.log(log.called());
    }

    public onToggleSidebar($event): void
    {
        const log: kwLog = new kwLog(this.sClass, "onToggleSidebar");
        //console.log(log.called());

        //this._fuseSidebarService.getSidebar(name).toggleOpen();

    }

    protected initCmp(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "initCmp");
        //console.log(log.called());

        return true;
    }

    protected navigate(): void
    {
        const log: kwLog = new kwLog(this.sClass, "navigate");
        //console.log(log.called());
    }

    protected publish(): void
    {
        const log: kwLog = new kwLog(this.sClass, "publish");
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
