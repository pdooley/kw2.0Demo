/**********************************************************************
 *
 * kwNgUiFuse/cmp/tabs/Link/title/kwUiTabsLinkTitle.ts
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
import {kwNgUiCtrlComp} from "@kwNgUiCtrl/kwNgUiCtrlComp";
import {kwtTabsLinkTitle} from "./kwtTabsLinkTitle"

const sTAG: string = "title";


@Component({
    selector: 'kw-ui-tabs-Link-title',
    templateUrl: 'kwUiTabsLinkTitle.html',
    styleUrls: ['kwUiTabsLinkTitle.scss']
})
export class kwUiTabsLinkTitle extends kwNgUiCtrlComp {
    public sTitle: string;
    public sSubTitle: string;

    constructor() {
        super(sTAG);

        //console.log('kwUiTabsLinkTitle::constructor() called.');
    }


//@formatter:on

    protected initCmp(): void {
        //console.log(this.sClass, "::initCmp() called.");
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

        const type: kwtTabsLinkTitle = <kwtTabsLinkTitle>view;

        const sTitle: string = type.sTitle;
        if (!kw.isString(sTitle)) {
            //console.info(this.sClass, "::parseView() sTitle is invalid");
            return;
        }
        //console.info(this.sClass, "::parseView() sTitle is [", sTitle, "]");
        this.sTitle = sTitle;


        const sSubTitle: string = type.sSubTitle;
        if (!kw.isString(sSubTitle)) {
            //console.info(this.sClass, "::parseView() sSubTitle is invalid");
            return;
        }
        //console.info(this.sClass, "::parseView() sSubTitle is [", sSubTitle, "]");
        this.sSubTitle = sSubTitle


        if (!kw.isString(sTitle)
            && !kw.isString(sSubTitle)) {
            const sMsg = "Recognizes only [sTitle, sSubTitle]";
            console.error(this.sClass, "::parseView()", sMsg);
        }

    }

}
