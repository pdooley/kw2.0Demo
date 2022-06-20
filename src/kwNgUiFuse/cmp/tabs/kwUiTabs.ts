/**********************************************************************
 *
 * kwNgUiFuse/cmp/tabs/kwUiTabs.ts
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
import {Component} from '@angular/core';

import {kw} from "@kw/kw";
import {kwLog} from "@kw/kwLog";
import {kwNgUiCtrlComp} from "@kwNgUiCtrl/kwNgUiCtrlComp";
import {kwtTabs} from "./kwtTabs";


const sTAG: string = "tabs";

@Component({
    selector: 'kw-ui-tabs',
    templateUrl: 'kwUiTabs.html',
    styleUrls: ['kwUiTabs.scss']
})
export class kwUiTabs extends kwNgUiCtrlComp
{

    public links: object[];
    public title: object;

    constructor()
    {
        super(sTAG);
        const log = new kwLog(this.sClass, "constructor");
        //console.info(log.called());
    }


//@formatter:on

    protected initCmp(): void {
        //console.log(this.sClass, "::parseView() called.");
    }

    protected parseData(data: any): void {
        //console.log(this.sClass, "::parseData() called.");
    }

    protected parseInits(inits: object): void {
        //console.log(this.sClass, "::parseInits() called.");
    }

    protected parseView(view: any): void {
        //console.log(this.sClass, "::parseView() called.");

        if (kw.isNull(view)) {
            console.error(this.sClass, "::parseView() view is invalid");
            return;
        }

        const type: kwtTabs = <kwtTabs>view;

        const links: object[] = type.links;
        if (kw.isArray(links)) {
            //console.info(this.sClass, "::parseView() links is [", links, "]")
            this.links = links;
        }

        const title: object = type.title;
        if (kw.isArray(title)) {
            //console.info(this.sClass, "::parseView() title is [", title, "]")
            this.title = title;
        }

        if (kw.isNull(links)
            && kw.isNull(title)) {
            const sMsg = "Only recognizes [links, title]";
            console.error(this.sClass, "::parseView() ", sMsg);
        }

        if (kw.isNull(links)) {
            const sMsg = "Absolutely requires [links]";
            console.error(this.sClass, "::parseView() ", sMsg);
        }

    }

}
