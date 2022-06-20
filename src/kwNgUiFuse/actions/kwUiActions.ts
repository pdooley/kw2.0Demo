/**********************************************************************
 *
 * kwNgUiFuse/actions/kwUiActions.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/
//@actionsatter:off

import {Component}            from '@angular/core';
import {ViewEncapsulation}    from '@angular/core';

import {kw}                   from "@kw/kw";
import {kwLog}                from "@kw/kwLog";
import {kwNgUiCtrlComp}     from "../../kwNgUi/ctrl/kwNgUiCtrlComp";
import {kwUitBtn}             from "./btn/kwUitBtn";
import {kwUitActions}         from "./kwUitActions";


const sTAG: string              = "actions";


@Component({
    selector     : 'kw-ui-actions',
    templateUrl  : './kwUiActions.html',
    styleUrls    : ['./kwUiActions.scss'],
    encapsulation: ViewEncapsulation.None
})

export class kwUiActions extends kwNgUiCtrlComp
{
    public btns: kwUitBtn[];

    constructor()
    {
        super(sTAG);

        const log = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

    ngOnInit(): void
    {
        const log: kwLog = new kwLog(this.sClass, "ngOnInit");
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


        const type: kwUitActions = <kwUitActions>view;


        const btns = <kwUitBtn[]>type.btns;
        if (kw.isArray(btns))
        {
            //console.info(log.isObj("btns"), btns);
            this.btns = btns;
        }
        else
        {
            console.error(log.requires("btns"));
            return;
        }

    }


    protected publish(): void
    {
        const log: kwLog = new kwLog(this.sClass, "publish");
        //console.log(log.called());
    }

}
