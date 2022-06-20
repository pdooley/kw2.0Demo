/**********************************************************************
 *
 * kwNgUiFuse/form/fld/email/kwUiFldEmail.ts
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
import {kwNgUiCtrlComp}       from "@kwNgUiCtrl/kwNgUiCtrlComp";
import {kwUitFldEmail}        from "./kwUitFldEmail";
import {kwUitFldEvent}        from "../kwUitFldEvent";


const sTAG: string            = "email";


@Component({
    selector     : 'kw-ui-form-fld-email',
    templateUrl  : './kwUiFldEmail.html',
    styleUrls    : ['./kwUiFldEmail.scss'],
    encapsulation: ViewEncapsulation.None
})
export class kwUiFldEmail extends kwNgUiCtrlComp
{

    public bIsReadOnly: boolean = false;
    public sRecIdD: string;


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


    public onChanged(sVal): void
    {
        const log: kwLog = new kwLog(this.sClass, "onChanged");
        //console.log(log.called());


        if (!kw.isString(sVal))
        {
            console.error(log.invalid("sVal"));
            return;
        }
        //console.info(log.is("sVal", sVal));


        if (!kw.isString(this.sRecIdD))
        {
            console.error(log.invalid(this.sRecIdD));
            return;
        }
        //console.info(log.is("sRecIdD", this.sRecIdD));


        const event: kwUitFldEvent = new kwUitFldEvent();

        event.sParam = this.sRecIdD;
        event.val = sVal;
        //console.info(log.isObj("event"), event);

        this.changed.emit(event);
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

        const type: kwUitFldEmail = <kwUitFldEmail>view;



        const bIsReadOnly: boolean = type.bIsReadOnly;
        if (kw.isBoolean(bIsReadOnly))
        {
            //console.info(log.is("bIsReadOnly", bIsReadOnly));
            this.bIsReadOnly = bIsReadOnly;
        }
        else
        {
            //console.error(log.requires("bIsReadOnly"))
            //return
        }


        const sRecIdD: string = type.sRecIdD;
        if (kw.isString(sRecIdD))
        {
            //console.info(log.is("sRecIdD", sRecIdD));
            this.sRecIdD = sRecIdD;
        }
        else
        {
            console.error(log.requires("sRecIdD"))
            return
        }
    }

    protected publish(): void
    {
        const log: kwLog = new kwLog(this.sClass, "publish");
        //console.log(log.called());
    }


}
