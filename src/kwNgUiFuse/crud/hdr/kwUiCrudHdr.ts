/**********************************************************************
 *
 * kwNgUiFuse/crud/hdr/kwUiCrudHdr.ts
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
import {kwUitCrudHdr}             from "./kwUitCrudHdr";


const sTAG: string = "hdr";


@Component({
    selector:       'kw-ui-crud-hdr',
    templateUrl:    'kwUiCrudHdr.html',
    styleUrls:      ['kwUiCrudHdr.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class kwUiCrudHdr extends kwNgUiCtrlComp
{
    public srch: object;
    public title: object;

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


        const type: kwUitCrudHdr = <kwUitCrudHdr>view;


        const srch: object = type.srch;
        if (!kw.isNull(srch)) {
            //console.info(log.isObj("srch"), srch);
            this.srch = srch;
        }
        else
        {
            console.error(log.requires("srch"));
            return;
        }


        const title: object = type.title;
        if (!kw.isNull(title)) {
            //console.info(log.isObj("title"), title);
            this.title = title;
        }
        else
        {
            console.error(log.requires("title"));
            return;
        }

    }

}
