/**********************************************************************
 *
 * kwNgUiFuse/toolbar/kwUiToolbar.ts
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

import {Component}              from '@angular/core';
import {ViewEncapsulation}      from '@angular/core';

import {kw}                     from "@kw/kw";
import {kwLog}                  from "@kw/kwLog";
import {kwNgUiCtrlComp}         from "@kwNgUiCtrl/kwNgUiCtrlComp";
import {kwUitToolbar}           from "./kwUitToolbar";


const sTAG: string              = "toolbar";


@Component({
    selector     : 'kw-ui-toolbar',
    templateUrl  : './kwUiToolbar.html',
    styleUrls    : ['./kwUiToolbar.scss'],
    encapsulation: ViewEncapsulation.None
})

export class kwUiToolbar extends kwNgUiCtrlComp
{
    public rows: object[];

    sAction: string;
    sDialogTitle: string;

    constructor()
    {
        super(sTAG);

        const log = new kwLog(this.sClass, "constructor");
        //console.info(log.called());

     }

//@formatter:on

    protected initCmp(): void
    {
        const log = new kwLog(this.sClass, "initCmp");
        //console.info(log.called());
    }

    protected parseData(data: any): void {
        const log = new kwLog(this.sClass, "parseData");
        //console.info(log.called());
    }

    protected parseInits(inits: object): void {
        const log = new kwLog(this.sClass, "parseInits");
        //console.info(log.called());
    }

    protected parseView(view: object): void
    {
        const log = new kwLog(this.sClass, "parseView");
        //console.info(log.called());

        if (kw.isNull(view))
        {
            console.error(this.sClass, "::parseView() view is invalid");
            return;
        }

        const type: kwUitToolbar = <kwUitToolbar>(view);

        const rows = type.rows;
        if (kw.isArray(rows))
        {
            //console.info(log.isObj("rows"), rows);
            this.rows = rows;
        }
        else
        {
            console.error(log.requires("rows"));
            return;
        }

    }


}
