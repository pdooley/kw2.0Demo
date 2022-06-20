/**********************************************************************
 *
 * kwNgUiFuse/cmp/hdr/kwUiHdrCtr.ts
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
import {kwtHdrCtr} from "./kwtHdrCtr";


const sTAG: string = "ctr";

@Component({
    selector: "kw-ui-hdr-ctr",
    templateUrl: "kwUiHdrCtr.html",
    styleUrls: ["kwUiHdrCtr.scss"]
})
export class kwUiHdrCtr extends kwNgUiCtrlComp {

    subTitle: object;
    title: object;
    tabs: object;


    constructor()
    {
        super(sTAG);
        const log = new kwLog(this.sClass, "constructor");
        //console.info(log.called());
    }

//@formatter:

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

        const type: kwtHdrCtr = <kwtHdrCtr>view;

        const subTitle: object = type.subTitle;
        if (kw.isValid(subTitle)) {
            //console.info(this.sClass, "::parseView() subTitle is [", subTitle, "]");
            this.subTitle = subTitle;
        }

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

        if (kw.isNull(title) &&
            kw.isNull(tabs) &&
            kw.isNull(subTitle)) {
            console.error(this.sClass, "::parseView() Only recognizes [title, tabs, subTitles]");
        }

    }
}
