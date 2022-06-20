/**********************************************************************
 *
 * kwNgUiFuse/toolbar/row/info/kwUiToolbarRowInfo.ts
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


const sTAG: string              = "info";


@Component({
    selector     : 'kw-ui-toolbar-row-info',
    templateUrl  : './kwUiToolbarRowInfo.html',
    styleUrls    : ['./kwUiToolbarRowInfo.scss'],
    encapsulation: ViewEncapsulation.None
})
export class kwUiToolbarRowInfo extends kwNgUiCtrlComp
{

    public sSrc:    string = "";
    public sText:   string = "";


    constructor()
    {
        super(sTAG);

        const log = new kwLog(this.sClass, "constructor");
        //console.info(log.called());
    }


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

        if (!kw.isString(this.sText))
        {
            console.error(log.invalid("sText"));
            return;
        }
    }

}
