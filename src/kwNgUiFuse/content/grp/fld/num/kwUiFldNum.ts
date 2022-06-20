/**********************************************************************
 *
 * kwNgUiFuse/form/fld/num/kwUiFldNum.ts
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

import * as _                   from "lodash";

import {kw}                     from "@kw/kw";
import {kwLog}                  from "@kw/kwLog";
import {kwNgUiCtrlComp}         from "@kwNgUiCtrl/kwNgUiCtrlComp";
import {kwUitFldEvent}          from "../kwUitFldEvent";
import {kwUitFldNum}            from "./kwUitFldNum";



const sTAG: string              = "num";



@Component({
    selector     : 'kw-ui-form-fld-num',
    templateUrl  : './kwUiFldNum.html',
    styleUrls    : ['./kwUiFldNum.scss'],
    encapsulation: ViewEncapsulation.None
})

export class kwUiFldNum extends kwNgUiCtrlComp
{

    public bIsReadOnly: boolean;

    public sRecIdD: string;
    public sIcon: string;


    constructor()
    {
        super();

        const log = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
     }


    protected initCmp(): void
    {
        const log: kwLog = new kwLog(this.sClass, "initCmp");
        //console.log(log.called());
    }


    public onChanged(nVal: number): void
    {
        const log: kwLog = new kwLog(this.sClass, "onChanged");
        //console.log(log.called());


        if (!kw.isNumber(nVal))
        {
            //console.info(log.invalid("nVal"));
            nVal = +nVal;
        }
        //console.info(log.is("nVal", nVal));


        if (!kw.isString(this.sRecIdD))
        {
            console.error(log.invalid(this.sRecIdD));
            return;
        }
        //console.info(log.is("sRecIdD", this.sRecIdD));


        const event: kwUitFldEvent = new kwUitFldEvent;

        event.sParam = this.sRecIdD;
        event.val = nVal;
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


        const num = view["num"];
        if (kw.isNull(num))
        {
            console.error(log.invalid("num"));
            return;
        }
        //console.info(log.isObj("num"), num);


        const type: kwUitFldNum = <kwUitFldNum>num;


        const sIcon: string = type.sIcon;
        if (kw.isString(sIcon))
        {
            //console.info(log.is("sIcon", sIcon));
            this.sIcon = sIcon;
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
    }


    protected publish(): void
    {
        const log: kwLog = new kwLog(this.sClass, "publish");
        //console.log(log.called());
    }


}
