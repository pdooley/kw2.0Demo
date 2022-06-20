/**********************************************************************
 *
 * kwNgUiFuse/cmp/tabs/Link/kwUiTabsLink.ts
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
import {kwtTabsLink} from "./kwtTabsLink";

const sTAG: string = "";


@Component({
    selector: 'kw-ui-tabs-Link',
    templateUrl: 'kwUiTabsLink.html',
    styleUrls: ['kwUiTabsLink.scss']
})
export class kwUiTabsLink extends kwNgUiCtrlComp
{
    public sLink: string;

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

        const type: kwtTabsLink = <kwtTabsLink>view;


        const sLink: string = type.sLink;
        if (kw.isString(sLink)) {
            this.sLink = sLink;
            //console.info(this.sClass, "::parseView() sLink is [", sLink, "]");
        }

        const title: object = type.title;
        if (kw.isValid(title)) {
            //console.info(this.sClass, "::parseView() title is [", title, "]");
        }

        const img: object = type.img;
        if (kw.isValid(img)) {
            //console.info(this.sClass, "::parseView() img is [", img, "]");
        }

        if (kw.isNull(img)
            && kw.isNull(title)
            && !kw.isString(sLink)) {
            const sMsg = "Recognizes only [img, sLink, title]";
            console.error(this.sClass, "::parseView()", sMsg);
        }

        if (kw.isNull(img)
            && kw.isNull(title)) {
            const sMsg = "requires one of [img, title]";
            console.error(this.sClass, "::parseView() ", sMsg);
        }

        if (!kw.isString(sLink)) {
            const sMsg = "Absolutely requires [sLink]";
            console.error(this.sClass, "::parseView() ", sMsg);
        }

    }
}
