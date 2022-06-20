/**********************************************************************
 *
 * kwNgUiFuse/content/grp/kwUiGrp.ts
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

import * as _                   from "lodash";

import {kw}                     from "@kw/kw";
import {kwLog}                  from "@kw/kwLog";
import {kwNgUiCtrlComp}         from "@kwNgUiCtrl/kwNgUiCtrlComp";
import {kwNgPubSub}             from "@kwNg/pubSub/kwNgPubSub";
import {kwUitFld}               from "./fld/kwUitFld";
import {kwUitFldEvent}          from "./fld/kwUitFldEvent";
import {kwUitGrp}               from "./kwUitGrp";


const sTAG: string              = "grp";


@Component({
    selector     : 'kw-ui-content-grp',
    templateUrl  : './kwUiGrp.html',
    styleUrls    : ['./kwUiGrp.scss'],
    encapsulation: ViewEncapsulation.None
})

export class kwUiGrp extends kwNgUiCtrlComp
{

    public flds:                kwUitFld[];



    constructor(
        private pubSub: kwNgPubSub )
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


    public onChanged($event: kwUitFldEvent): void
    {
        const log: kwLog = new kwLog(this.sClass, "onChanged");
        //console.log(log.called());

        if (!kw.isValid($event))
        {
            console.error(log.invalid("$event"));
            return;
        }
        //console.info(log.isObj("$event"), $event);


        if (!kw.isValid(this.data))
        {
            console.error(log.invalid("data"));
            return;
        }
        //console.info(log.isObj("data"), this.data);


        const sParam = $event.sParam;
        if (!kw.isString(sParam))
        {
            console.error(log.invalid("sParam"));
            return;
        }
        //console.info(log.isObj("sParam"), sParam);

        const val = $event.val;
        if (!kw.isValid(val))
        {
            console.error(log.invalid("val"))
            return;
        }
        //console.info(log.isObj("val"), val);

        const info = {};
        info[sParam] = val;
        //console.info(log.isObj("info"), info);


        const data = _.merge(this.data, info);
        //console.info(log.isObj("data"), data);


        this.changed.emit(data);
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


        if (kw.isNull(view))
        {
            console.error(log.invalid("view"));
            return;
        }


        const type: kwUitGrp = <kwUitGrp>view;


        const flds = <kwUitFld[]>type.flds;
        if (kw.isArray(flds))
        {
            //console.info(log.isObj("flds"), flds);
            this.flds = flds;
        }
        else
        {
            console.error(log.requires("flds"));
            return;
        }

    }


    protected publish(): void
    {
        const log: kwLog = new kwLog(this.sClass, "publish");
        //console.log(log.called());
    }


}
