/**********************************************************************
 *
 * kwNgUi/crud/kwUiCrud.ts
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

import {fuseAnimations}           from "@fuse/animations/index";

import * as _                       from "lodash";

import {kw}                         from "@kw/kw";
import {kwLog}                      from "@kw/kwLog";
import {kwNgUiCtrlComp}             from "@kwNgUiCtrl/kwNgUiCtrlComp";
import {kwUitCrud}                  from "./kwUitCrud";


const sTAG: string = "crud";


@Component({
    selector:       'kw-ui-crud',
    templateUrl:    'kwUiCrud.html',
    styleUrls:      ['kwUiCrud.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class kwUiCrud extends kwNgUiCtrlComp
{
    public add: object;
    public content: object;
    public dlg: object;
    public hdr: object;
    public select: object;

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


        if (kw.isNull(view))
        {
            console.error(log.invalid("view"));
            return;
        }


        const type: kwUitCrud = <kwUitCrud>view;


        const add: object = type.add;
        if (!kw.isNull(add))
        {
            //console.info(log.isObj("add"), add);
            this.add = add;
        }
        else
        {
            console.error(log.requires("add"));
            return;
        }


        const content: object = type.content;
        if (!kw.isNull(content))
        {
            //console.info(log.isObj("content"), content);
            this.content = content;
        }
        else
        {
            console.error(log.requires("content"));
            return;
        }


        const dlg: object = type.dlg;
        if (!kw.isNull(dlg))
        {
            //console.info(log.isObj("dlg"), dlg);
            this.dlg = dlg;
        }
        else
        {
            console.error(log.requires("dlg"));
            return;
        }


        const hdr: object = type.hdr;
        if (!kw.isNull(hdr))
        {
            //console.info(log.isObj("hdr"), hdr);
            this.hdr = hdr;
        }
        else
        {
            console.error(log.requires("hdr"));
            return;
        }


        const select: object = type.select;
        if (!kw.isNull(select))
        {
            //console.info(log.isObj("select"), select);
            this.select = select;
        }
        else
        {
            console.error(log.requires("select"));
            return;
        }


    }

}
