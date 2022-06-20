/**********************************************************************
 *
 * kwNgCView/list/kwUiListBtnsBtn.ts
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

import {kw}                   from "@kw/kw";
import {kwLog}                from "@kw/kwLog";
import {kwNgUiCtrlComp}       from "@kwNgUiCtrl/kwNgUiCtrlComp";
import {kwtListBtnsBtn}       from "./kwtListBtnsBtn";


const sTAG: string = "col";


@Component({
    selector     : 'kw-ui-list-btns-btn',
    templateUrl  : './kwUiListBtnsBtn.html',
    styleUrls    : ['./kwUiListBtnsBtn.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class kwUiListBtnsBtn extends kwNgUiCtrlComp
{

    del:    object;
    btns:   object;
    more:   object;
    toggle: object;
    name:   object;
    phone:  object;
    str:    object;

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

        if (kw.isNull(view)) {
            console.error(log.invalid("view"));
            return;
        }

        const type: kwtListBtnsBtn = <kwtListBtnsBtn>view;

        const del = type.del;
        if (kw.isValid(del))
        {
            //console.info(log.isObj("del"), del);
            return;
        }
        this.del = del;

        const more = type.more;
        if (kw.isValid(more))
        {
            //console.info(log.isObj("more"), more);
            return;
        }
        this.more = more;

        const toggle = type.toggle;
        if (kw.isValid(toggle))
        {
            //console.info(log.isObj("toggle"), toggle);
            return;
        }
        this.toggle = toggle;

        console.error(log.invalid("type"));
        console.error(log.recognizes("del"));
        console.error(log.recognizes("more"));
        console.error(log.recognizes("toggle"));
    }

    protected publish(): void
    {
        const log: kwLog = new kwLog(this.sClass, "publish");
        //console.log(log.called());
    }


}
