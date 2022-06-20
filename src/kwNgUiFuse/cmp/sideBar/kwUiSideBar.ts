/**********************************************************************
 *
 * kwNgUiFuse/sideBar/kwUiSideBar.ts
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

import {kw}                       from "@kw/kw";
import {kwLog}                    from "@kw/kwLog";
import {kwNgUiCtrlComp}         from "@kwNgUiCtrl/kwNgUiCtrlComp";
import {kwUitSideBar}             from "./kwUitSideBar";


const sTAG: string = "sideBar";


@Component({
    selector:       'kw-ui-side-bar',
    templateUrl:    'kwUiSideBar.html',
    styleUrls:      ['kwUiSideBar.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class kwUiSideBar extends kwNgUiCtrlComp
{
    hdr: object;
    content: object;

    user = {
        "avatar": "",
    };

    constructor()
    {
        super(sTAG);

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());

    }

//@formatter:on

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

        if (kw.isNull(view)) {
            console.error(log.invalid("view"));
            return;
        }

        const type: kwUitSideBar = <kwUitSideBar>view;


        const content: object = type.content;
        if (!kw.isNull(content)) {
            //console.info(log.isObj("content"), content);
            this.content = content;
        }


        const hdr: object = type.hdr;
        if (!kw.isNull(hdr)) {
            //console.info(log.isObj("hdr"), hdr);
            this.hdr = hdr;
        }

        if (_.isNull(this.content) &&
            _.isNull(this.hdr)    )
        {
            console.error(log.recognizes("content, hdr"));
        }

    }

}
