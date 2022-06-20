/**********************************************************************
 *
 * kwNgUiFuse/crud/content/kwUiCrudContent.ts
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
import {Component}                from '@angular/core';
import {ViewEncapsulation}        from '@angular/core';

import * as _                       from "lodash";

import {fuseAnimations}           from "@fuse/animations/index";

import {kw}                       from "@kw/kw";
import {kwLog}                    from "@kw/kwLog";
import {kwNgUiCtrlComp}         from "@kwNgUiCtrl/kwNgUiCtrlComp";
import {kwUitCrudContent}         from "./kwUitCrudContent";


const sTAG: string = "content";


@Component({
    selector:       'kw-ui-crud-content',
    templateUrl:    'kwUiCrudContent.html',
    styleUrls:      ['kwUiCrudContent.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class kwUiCrudContent extends kwNgUiCtrlComp
{
    
    public ctr:     object;
    public sideBar: object;
    
    constructor()
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

    public onChanged($event): void
    {
        const log: kwLog = new kwLog(this.sClass, "onChanged");
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


        const type: kwUitCrudContent = <kwUitCrudContent>view;


        const ctr: object = type.ctr;
        if (!kw.isNull(ctr))
        {
            //console.info(log.isObj("ctr"), ctr);
            this.ctr = ctr;
        }
        else
        {
            console.error(log.requires("ctr"));
            return;
        }


        const sideBar: object = type.sideBar;
        if (!kw.isNull(sideBar))
        {
            //console.info(log.isObj("sideBar"), sideBar);
            this.sideBar = sideBar;
        }
        else
        {
            console.error(log.requires("sideBar"));
            return;
        }


    }

}
