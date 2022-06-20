/**********************************************************************
 *
 * kwNgUiFuse/form/fld/hour/kwUiFldHour.ts
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
import {kwtColHour}             from "@kwUiAgGrid/class/col/kwtColHour";
import {kwUitFldEvent}          from "../kwUitFldEvent";
import {kwUitFldHour}           from "./kwUitFldHour";



const sTAG: string              = "hour";


@Component({
    selector     : 'kw-ui-form-fld-hour',
    templateUrl  : './kwUiFldHour.html',
    styleUrls    : ['./kwUiFldHour.scss'],
    encapsulation: ViewEncapsulation.None
})

export class kwUiFldHour extends kwNgUiCtrlComp
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


    public onChanged(nVal: any): void
    {
        const log: kwLog = new kwLog(this.sClass, "onChanged");
        //console.log(log.called());


        if (!kw.isValid(nVal))
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

        if (!kw.isString(this.sRecIdD))
        {
           console.error(log.invalid("sRecIdD"));
           return;
        }
        console.info(log.isObj("sRecIdD"), this.sRecIdD);


        if (!kw.isValid(data))
        {
            console.error(log.invalid("data"));
            this.data = "ERROR!";
            return;
        }
        console.info(log.is("data", data));


        const hour = data[this.sRecIdD];
        if (!kw.isValid(hour))
        {
            console.error(log.invalid("hour"));
            this.data = "ERROR!";
            return;
        }
        console.info(log.is("hour", hour));


        if (kw.isNumber(hour))
        {
            this.data = hour;
            return;
        }

        const type: kwtColHour = <kwtColHour>hour;


        const nHours = type.hours;
        if (nHours > 0)
        {
            this.data = "ERROR!";
        }


        const sName = type.name;
        if (!kw.isString(sName))
        {
            console.error(log.invalid("sName"));
            this.data = "ERROR!";
        }

        this.data = sName;

 /*       const mapRec: object = map.get(sName);
        if (!kw.isValid(mapRec))
        {
            console.error(log.invalid("mapRec"));
            this.storeData("ERROR!");
        }


        const sVal = mapRec[sNAME];
        if (!kw.isString(sVal))
        {
            console.error(log.invalid("sVal"));
            this.storeData("ERROR!");
        }


        this.storeData(sVal);
*/
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
        //console.info(log.isObj("view"), view);


        const hour = view["hour"];
        if (kw.isNull(hour))
        {
            console.error(log.invalid("hour"));
            return;
        }
        //console.info(log.isObj("hour"), hour);


        const type: kwUitFldHour = <kwUitFldHour>hour;


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
