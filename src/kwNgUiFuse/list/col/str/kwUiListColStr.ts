/**********************************************************************
 *
 * kwNgUiFuse/list/col/str/kwUiListColStr.ts
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
import {Component}            from '@angular/core';
import {ViewEncapsulation}    from '@angular/core';

import * as _                   from "lodash";

import {fuseAnimations}       from '@fuse/animations/index';

import {kw}                     from "@kw/kw";
import {kwLog}                  from "@kw/kwLog";
import {kwNgUiCtrlComp}       from "@kwNgUiCtrl/kwNgUiCtrlComp";
import {kwUitListColStr}        from "./kwUitListColStr";


const sTAG: string = "str";


@Component({
    selector     : 'kw-ui-list-col-str',
    templateUrl  : './kwUiListColStr.html',
    styleUrls    : ['./kwUiListColStr.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class kwUiListColStr extends kwNgUiCtrlComp
{
    public sField: string;


    constructor()
    {
        super(sTAG);

        const log = new kwLog(this.sClass, "constructor");
        //console.info(log.called());
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

        if (kw.isNull(this.view))
        {
            console.error(log.invalid("view"));
            return;
        }

        const type:kwUitListColStr = <kwUitListColStr>this.view;

        const sField: string = type.sField;
        if (kw.isString(sField))
        {
            //console.info(log.is("sField", sField));
            this.sField = sField;
        }

        if (!_.isString(this.sField))
        {
            console.error(log.requires("sField"));
        }

    }

    protected publish(): void
    {
        const log: kwLog = new kwLog(this.sClass, "publish");
        //console.log(log.called());
    }


}
