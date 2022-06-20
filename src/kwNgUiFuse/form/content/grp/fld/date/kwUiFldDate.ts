/**********************************************************************
 *
 * kwNgUiFuse/form/fld/date/kwUiFldDate.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/
//@fldatter:off

import {Component}            from '@angular/core';
import {ViewEncapsulation}    from '@angular/core';

import {kw}                   from "@kw/kw";
import {kwLog}                from "@kw/kwLog";
import {kwNgUiCtrlComp}     from "@kwNgUiCtrl/kwNgUiCtrlComp";
import {kwUitFldDate}         from "./kwUitFldDate";


const sTAG: string              = "date";


@Component({
    selector     : 'kw-ui-form-fld-date',
    templateUrl  : './kwUiFldDate.html',
    styleUrls    : ['./kwUiFldDate.scss'],
    encapsulation: ViewEncapsulation.None
})

export class kwUiFldDate extends kwNgUiCtrlComp
{

    constructor()
    {
        super(sTAG);

        const log = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
     }

    protected initCmp(): void
    {
        const log: kwLog = new kwLog(this.sClass, "initCmp");
        //console.log(log.called());
    }

    public onChanged($event): void
    {
        const log: kwLog = new kwLog(this.sClass, "onChanged");
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

        const type: kwUitFldDate = <kwUitFldDate>view;


    }

    protected publish(): void
    {
        const log: kwLog = new kwLog(this.sClass, "publish");
        //console.log(log.called());
    }


}
