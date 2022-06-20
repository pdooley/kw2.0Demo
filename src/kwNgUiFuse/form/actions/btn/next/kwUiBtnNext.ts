/**********************************************************************
 *
 * kwNgUiFuse/form/btn/next/kwUiBtnNext.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/
//@btnatter:off

import {Component}              from '@angular/core';
import {ViewEncapsulation}      from '@angular/core';

import {kw}                     from "@kw/kw";
import {kwLog}                  from "@kw/kwLog";
import {kwNgUiCtrlComp}         from "@kwNgUiCtrl/kwNgUiCtrlComp";
import {kwUitBtnNext}           from "./kwUitBtnNext";


const sTAG: string              = "next";


@Component({
    selector     : 'kw-ui-btn-next',
    templateUrl  : './kwUiBtnNext.html',
    styleUrls    : ['./kwUiBtnNext.scss'],
    encapsulation: ViewEncapsulation.None
})

export class kwUiBtnNext extends kwNgUiCtrlComp
{

    public del: object = {};

    public sName: string;
    public sPub: string;

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

        const type: kwUitBtnNext = <kwUitBtnNext>view;


        const sName: string = type.sName;
        if (kw.isString(sName))
        {
            //console.info(log.isObj("sName"), sName);
            this.sName = sName;
        }


        const sPub: string = type.sPub;
        if (kw.isString(sPub))
        {
            //console.info(log.isObj("sPub"), sPub);
            this.sPub = sPub;
        }

        if (kw.isNull(sName) && kw.isNull(sPub))
        {
            console.error(this.sClass, "::parseView() Only recognizes [sName, sPub]");
        }

    }

    protected publish(): void
    {
        const log: kwLog = new kwLog(this.sClass, "publish");
        //console.log(log.called());
    }


}
