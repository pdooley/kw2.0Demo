/**********************************************************************
 *
 * kwNgUiFuse/cmp/ftr/kwUiFtrCtr.ts
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
import {Component} from "@angular/core";

import {kw} from "@kw/kw";
import {kwLog} from "@kw/kwLog";
import {kwNgUiCtrlComp} from "@kwNgUiCtrl/kwNgUiCtrlComp";
import {kwtFtrCtr} from "./kwtFtrCtr";


const sTAG: string = "ctr";

@Component({
    selector: "kw-ui-ftr-ctr",
    templateUrl: "kwUiFtrCtr.html",
    styleUrls: ["kwUiFtrCtr.scss"]
})
export class kwUiFtrCtr extends kwNgUiCtrlComp {
    title: object;
    tabs: object;

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

    protected parseView(view: object): void {
        //console.log(this.sClass, "::parseView() called.");

        if (kw.isNull(view)) {
            console.error(this.sClass, "::parseView() view is invalid");
            return;
        }

        const type: kwtFtrCtr = <kwtFtrCtr>this.view;

        const title: object = type.title;
        if (kw.isValid(title)) {
            //console.info(this.sClass, "::parseView() title is [", title, "]");
            this.title = title;
        }

        const tabs: object = type.tabs;
        if (kw.isValid(tabs)) {
            //console.info(this.sClass, "::parseView() tabs is [", tabs, "]");
            this.tabs = tabs;
        }

        if (kw.isNull(title) && kw.isNull(tabs)) {
            console.error(this.sClass, "::parseView() Only recognizes [title, tabs]");
        }

    }
}
