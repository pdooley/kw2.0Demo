/**********************************************************************
 *
 * kwNgUiFuse/toolbar/row/kwUiToolbarRow.ts
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

import {kw}                   from "@kw/kw";
import {kwLog}                from "@kw/kwLog";
import {kwNgUiCtrlComp}     from "@kwNgUiCtrl/kwNgUiCtrlComp";
import {kwUitToolbarRow}      from "./kwUitToolbarRow";


const sTAG: string              = "row";

@Component({
    selector     : 'kw-ui-toolbar-row',
    templateUrl  : './kwUiToolbarRow.html',
    styleUrls    : ['./kwUiToolbarRow.scss'],
    encapsulation: ViewEncapsulation.None
})
export class kwUiToolbarRow extends kwNgUiCtrlComp
{
    info: object;
    title: object;

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


        if (kw.isNull(view))
        {
            console.error(log.invalid("view"));
            return;
        }


        const type: kwUitToolbarRow = <kwUitToolbarRow>(view);


        const info: object = type.info;
        if (kw.isValid(info))
        {
            //console.info(log.isObj("info"), info);
            this.info = info;
            return;
        }


        const title: object = type.title;
        if (kw.isValid(title))
        {
            //console.info(log.isObj("title"), title);
            this.title = title;
            return;
        }

        const sMsg = "info, title";
        console.error(log.recognizes(sMsg))

    }

}
