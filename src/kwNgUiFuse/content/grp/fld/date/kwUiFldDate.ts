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

import {Component}              from '@angular/core';
import {DateAdapter }           from '@angular/material/core';
import {FormControl}            from '@angular/forms';
import {MAT_DATE_FORMATS}       from '@angular/material/core';
import {MAT_DATE_LOCALE}        from '@angular/material/core';
import {MomentDateAdapter}      from '@angular/material-moment-adapter';
import {ViewEncapsulation}      from '@angular/core';

import * as _moment             from 'moment';

import {kw}                     from "@kw/kw";
import {kwLog}                  from "@kw/kwLog";
import {kwNgUiCtrlComp}         from "@kwNgUiCtrl/kwNgUiCtrlComp";
import {kwUitFldEvent}          from "../kwUitFldEvent";
import {kwUitFldDate}           from "./kwUitFldDate";



const moment = _moment;


export const MY_FORMATS = {
    parse: {
        dateInput: 'LL',
    },
    display: {
        dateInput: 'LL',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};

const sTAG: string              = "date";


@Component({
    selector     : 'kw-ui-form-fld-date',
    templateUrl  : './kwUiFldDate.html',
    styleUrls    : ['./kwUiFldDate.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [
        {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
        {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
    ],
})
export class kwUiFldDate    extends kwNgUiCtrlComp
{

    form: FormControl;

    public sRecIdD: string;

    public bIsReadOnly: boolean;



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


        this.form = new FormControl('');


        this.form.valueChanges.subscribe((val) => {
            this.onChanged(val);
        });

    }


    public onChanged(val): void
    {
        const log: kwLog = new kwLog(this.sClass, "onChanged");
        //console.log(log.called());


        if (!kw.isValid(val))
        {
            console.error(log.invalid(val));
            return;
        }
        //console.info(log.isObj("val"), val);


        if (!kw.isString(this.sRecIdD))
        {
            console.error(log.invalid(this.sRecIdD));
            return;
        }
        //console.info(log.is("sRecIdD", this.sRecIdD));


        const nVal = val.valueOf();
        if (!kw.isNumber(nVal))
        {
            console.error(log.invalid("nVal"));
            return;
        }
        //console.info(log.is("nVal", nVal));


        const event: kwUitFldEvent = new kwUitFldEvent();

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


        //console.info(log.isObj("data"), data);


        if (!kw.isNumber(data))
        {
            //console.info(log.invalid("data"));
            return;
        }


        const date = moment(data);
        //console.info(log.isObj("date"), date);


        if (kw.isValid(this.form))
        {
            this.form.setValue(date);
        }
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
