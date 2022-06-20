/**********************************************************************
 *
 * kwNgUiFuse/crud/srch/kwUiCrudSrch.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2018 iTKunst corporation
 *
 **********************************************************************/
//@formatter:off
import {Component}                  from '@angular/core';
import {ViewEncapsulation}          from '@angular/core';

import {fuseAnimations}             from "@fuse/animations/index";

import {kw}                         from "@kw/kw";
import {kwLog}                      from "@kw/kwLog";
import {kwNgUiCtrlComp}             from "@kwNgUiCtrl/kwNgUiCtrlComp";
import {kwNgPubSub}                 from "@kwNg/pubSub/kwNgPubSub";
import {kwUitCrudSrch}              from "./kwUitCrudSrch";


const sTAG: string                  = "srch";


@Component({
    selector:       'kw-ui-crud-srch',
    templateUrl:    'kwUiCrudSrch.html',
    styleUrls:      ['kwUiCrudSrch.scss'],
    encapsulation:  ViewEncapsulation.None,
    animations:     fuseAnimations
})
export class kwUiCrudSrch extends kwNgUiCtrlComp
{

    public date: object;
    public slct: object;
    public str: object;



    constructor(
        private pubSub: kwNgPubSub  )
    {
        super(sTAG);

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());

    }

//@formatter:on

    protected initCmp(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "initCmp");
        //console.log(log.called());

        return true;
    }

    protected navigate(): void
    {
        const log: kwLog = new kwLog(this.sClass, "navigate");
        //console.log(log.called());
    }


    protected publish(): void
    {
        const log: kwLog = new kwLog(this.sClass, "publish");
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


        const type: kwUitCrudSrch = <kwUitCrudSrch>(view);

        const str = type.str;
        if (kw.isValid(str))
        {
            this.str = str;
            //console.info(log.isObj("str"), this.str);
            return;
        }


        const slct = type.slct;
        if (kw.isValid(slct))
        {
            this.slct = slct;
            //console.info(log.isObj("slct"), this.slct);
            return;
        }


        const date = type.date;
        if (kw.isValid(date))
        {
            this.date = date;
            //console.info(log.isObj("date"), this.date);
            return;
        }


        console.error(log.requires("date, slct, str"))
    }



}
