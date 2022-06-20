/**********************************************************************
 *
 * kwNgUiFuse/cmp/link/kwUiLinkTag.ts
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
import {kwtLinkTag} from "./kwtLinkTag";

const sTAG: string = "link";


@Component({
    selector: 'kw-ui-link-tag',
    templateUrl: 'kwUiLinkTag.html',
    styleUrls: ['kwUiLinkTag.scss']
})
export class kwUiLinkTag extends kwNgUiCtrlComp {

    img: object;
    title: object;


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

        const type: kwtLinkTag = <kwtLinkTag>view;

        const sLink = this.sLink;
        if (kw.isString(sLink)) {
            //console.info(this.sClass, "::parseView() sLink is [", sLinkk, "]");
        }

        const title: object = type.title;
        if (kw.isValid(title)) {
            //console.info(this.sClass, "::parseView() title is [", title, "]");
            this.title = title;
        }

        const img: object = type.img;
        if (kw.isValid(img)) {
            //console.info(this.sClass, "::parseView() img is [", img, "]");
            this.img = img;
        }

        if ( kw.isNull(img)
            && kw.isNull(title)
            && !kw.isString(sLink))
        {
            const sMsg = " Recognizes only [sLinkId, img, sLink, sLinkTmpl, title]";
            console.error(this.sClass, "::parseView() ", sMsg);
        }

        if (!kw.isString(sLink))
        {
            const sMsg = "Requires one of [sLink, sLinkId, sLinkTmpl]";
            console.error(this.sClass, "::parseView() ", sMsg);
        }


    }

}
