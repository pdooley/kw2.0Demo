/**********************************************************************
 *
 * kwNgUiFuse/cmp/nav/link/kwUiNavLink.ts
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

import {kwtNavLink} from "./kwtNavLink";

const sTAG: string = "";


@Component({
    selector: 'kw-ui-nav-link',
    templateUrl: 'kwUiNavLink.html',
    styleUrls: ['kwUiNavLink.scss']
})
export class kwUiNavLink extends kwNgUiCtrlComp {

    img: object;
    title: object;

    sLInk: string;

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

        const type: kwtNavLink = <kwtNavLink>view;

        const sLink: string = this.sLink;
        if (kw.isString(sLink)) {
            //console.info(this.sClass, "::parseView() sLink is [", sLink, "]");
        }

        const img: object = type.img;
        if (kw.isValid(img)) {
            //console.info(this.sClass, "::initSmpl() img is [", img, "]");
            this.img = img;
        }

        const title: object = type.title;
        if (kw.isValid(title)) {
            //console.info(this.sClass, "::initSmpl() title is [", title, "]");
            this.title = title;
        }

        if (kw.isNull(img) && kw.isNull(title) && !kw.isString(sLink)) {
            console.error(this.sClass, "::initSmpl() Only recognizes [sLink, img, title]");
        }

        if (kw.isNull(img) && kw.isNull(title)) {
            console.error(this.sClass, "::initSmpl() at least 1 is required [ img, title]");
        }

        if (!kw.isString(sLink)) {
            console.error(this.sClass, "::initSmpl() This is essential [sLink]");
        }

    }
}
