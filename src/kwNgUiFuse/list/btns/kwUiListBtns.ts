/**********************************************************************
 *
 * kwNgUiFuse/list/btns/kwUiListBtns.ts
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

import {fuseAnimations}       from '@fuse/animations/index';

import {kw}                     from "@kw/kw";
import {kwLog}                  from "@kw/kwLog";
import {kwNgUiCtrlComp}         from "@kwNgUiCtrl/kwNgUiCtrlComp";
import {kwtListBtns}            from "./kwtListBtns";


const sTAG: string = "btns";


@Component({
    selector     : 'kw-ui-list-btns',
    templateUrl  : './kwUiListBtns.html',
    styleUrls    : ['./kwUiListBtns.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class kwUiListBtns extends kwNgUiCtrlComp
{
    public btns: object[];

    constructor()
    {
        super(sTAG);

        const log = new kwLog(this.sClass, "conbtnsuctor");
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
        
        if (kw.isNull(view)) {
            console.error(log.invalid("view"));
            return;
        }

        const type: kwtListBtns = <kwtListBtns>view;

        const btns: object[] = type.btns;
        if (!kw.isArray(btns))
        {
            console.error(log.invalid("btns"));
            return;
        }
        this.btns = btns;

        console.error(log.invalid("type"));
    }

    protected publish(): void
    {
        const log: kwLog = new kwLog(this.sClass, "publish");
        //console.log(log.called());
    }


}
