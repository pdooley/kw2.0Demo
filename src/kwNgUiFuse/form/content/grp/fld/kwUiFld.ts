/**********************************************************************
 *
 * kwNgUiFuse/form/fld/kwUiFld.ts
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

import {Component}              from '@angular/core';
import {ViewEncapsulation}      from '@angular/core';

import {kw}                     from "@kw/kw";
import {kwLog}                  from "@kw/kwLog";
import {kwNgUiCtrlComp}         from "@kwNgUiCtrl/kwNgUiCtrlComp";
import {kwUitFld}               from "./kwUitFld";


const sTAG: string              = "fld";


@Component({
    selector     : 'kw-ui-form-fld',
    templateUrl  : './kwUiFld.html',
    styleUrls    : ['./kwUiFld.scss'],
    encapsulation: ViewEncapsulation.None
})

export class kwUiFld extends kwNgUiCtrlComp
{
    public chkBox: object;
    public date: object;
    public dlg: object;
    public email: object;
    public num: object;
    public str: object;


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


        const type: kwUitFld = <kwUitFld>view;


        if (kw.isValid(type.chkBox))
        {
            //console.info(log.isObj("chkBox"), type.chkBox);
            this.chkBox = type.chkBox;
            return;
        }


        if (kw.isValid(type.date))
        {
            //console.info(log.isObj("date"), type.date);
            this.date = type.date;
            return;
        }


        if (kw.isValid(type.dlg))
        {
            //console.info(log.isObj("dlg"), type.dlg);
            this.dlg = type.dlg;
            return;
        }


        if (kw.isValid(type.email))
        {
            //console.info(log.isObj("email"), type.email);
            this.email = type.email;
            return;
        }


        if (kw.isValid(type.num))
        {
            //console.info(log.isObj("num"), type.num);
            this.num = type.num;
            return;
        }


        if (kw.isValid(type.str))
        {
            //console.info(log.isObj("str"), type.str);
            this.str = type.str;
            return;
        }

        const sMsg = "chkBox, date, dlg, email, num, phone, str";
        console.error(log.recognizes(sMsg))
    }


    protected publish(): void
    {
        const log: kwLog = new kwLog(this.sClass, "publish");
        //console.log(log.called());
    }

}
