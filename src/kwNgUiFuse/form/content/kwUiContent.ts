/**********************************************************************
 *
 * kwNgUiFuse/content/kwUiContent.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/
//@contentatter:off

import {Component}            from '@angular/core';
import {ViewEncapsulation}    from '@angular/core';

import {kw}                   from "@kw/kw";
import {kwLog}                from "@kw/kwLog";
import {kwNgUiCtrlComp}     from "@kwNgUiCtrl/kwNgUiCtrlComp";
import {kwUitContent}         from "./kwUitContent";


const sTAG: string              = "content";


@Component({
    selector     : 'kw-ui-content',
    templateUrl  : './kwUiContent.html',
    styleUrls    : ['./kwUiContent.scss'],
    encapsulation: ViewEncapsulation.None
})

export class kwUiContent extends kwNgUiCtrlComp
{
    public grp: object;

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

        //console.info(log.isObj("$event"), $event);
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

        const type: kwUitContent = <kwUitContent>view;


        const grp = type.grp;
        if (kw.isValid(grp))
        {
            //console.info(log.isObj("grp"), grp);
            this.grp = grp;
        }
        else
        {
            console.error(log.requires("grp"));
            return;
        }
    }


    protected publish(): void
    {
        const log: kwLog = new kwLog(this.sClass, "publish");
        //console.log(log.called());
    }

}
