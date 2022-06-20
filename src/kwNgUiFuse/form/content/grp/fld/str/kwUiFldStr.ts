/**********************************************************************
 *
 * kwNgUiFuse/form/fld/str/kwUiFldStr.ts
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
import {kwUitFldStr}            from "./kwUitFldStr";


const sTAG: string              = "str";

@Component({
    selector     : 'kw-ui-form-fld-str',
    templateUrl  : './kwUiFldStr.html',
    styleUrls    : ['./kwUiFldStr.scss'],
    encapsulation: ViewEncapsulation.None
})

export class kwUiFldStr extends kwNgUiCtrlComp
{

    public sRecIdD: string;
    public sIcon: string;

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

        //console.info(log.is("sVal", sVal));

        if (!kw.isString(this.sRecIdD))
        {
            console.error(log.invalid(this.sRecIdD));
            return;
        }

        const data = {};
        data[this.sRecIdD] = sVal;
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

        if (kw.isNull(data))
        {
            //console.info(log.empty("data"));
            return;
        }
        //console.info(log.isObj("data"), data);
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

        
        const type: kwUitFldStr = <kwUitFldStr>view;


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


        if (kw.isNull(sIcon) &&
            kw.isNull(this.sText)    )
        {
            console.error(this.sClass, "::parseView() Only recognizes [sIcon, sText]");
        }
    }

    protected publish(): void
    {
        const log: kwLog = new kwLog(this.sClass, "publish");
        //console.log(log.called());
    }
}
