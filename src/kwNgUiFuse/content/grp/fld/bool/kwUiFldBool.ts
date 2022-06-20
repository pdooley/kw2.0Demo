/**********************************************************************
 *
 * kwNgUiFuse/form/fld/bool/kwUiFldBool.ts
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
import {kwUitFldBool}           from "./kwUitFldBool";
import {kwUitFldEvent}          from "../kwUitFldEvent";


const sTAG: string              = "bool";


@Component({
    selector     : 'kw-ui-form-fld-bool',
    templateUrl  : './kwUiFldBool.html',
    styleUrls    : ['./kwUiFldBool.scss'],
    encapsulation: ViewEncapsulation.None
})

export class kwUiFldBool extends kwNgUiCtrlComp
{

    private sRecIdD: string;

    public bIsChecked: boolean = false;
    public bIsReadOnly: boolean = false;

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


    public onChanged(val: any): void
    {
        const log: kwLog = new kwLog(this.sClass, "onChanged");
        //console.log(log.called());

        //console.info(log.is("bIsChecked", this.bIsChecked));

        if (!kw.isBoolean(this.bIsChecked))
        {
            console.error(log.invalid("bIsChecked"));
            return;
        }
        //console.info(log.is("bIsChecked", this.bIsChecked));


        if (!kw.isString(this.sRecIdD))
        {
            console.error(log.invalid(this.sRecIdD));
            return;
        }
        //console.info(log.is("sRecIdD", this.sRecIdD));


        const event: kwUitFldEvent = new kwUitFldEvent();

        event.sParam    = this.sRecIdD;
        event.val       = this.bIsChecked;

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

        //console.info(log.is("data", data));
        this.bIsChecked = data;
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

        const type: kwUitFldBool = <kwUitFldBool>view;


        const sRecIdD: string = type.sRecIdD;
        if (kw.isString(sRecIdD))
        {
            //console.info(log.is("sRecIdD", sRecIdD));
            this.sRecIdD = sRecIdD;
        }
        else
        {
            console.error(log.requires("sRecIdD"));
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
