/**********************************************************************
 *
 * kwNgUiFuse/cmp/btn/kwUiBtn.ts
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
import {Component}              from '@angular/core';

import {kw}                     from "@kw/kw";

import {kwLog}                  from "@kw/kwLog";
import {kwNgUiCtrlComp}       from "@kwNgUiCtrl/kwNgUiCtrlComp";
import {kwUitBtn}               from "./kwUitBtn";


const sTAG: string = "btn";


@Component({
    selector: 'kw-ui-btn',
    templateUrl: 'kwUiBtn.html',
    styleUrls: ['kwUiBtn.scss']
})
export class kwUiBtn extends kwNgUiCtrlComp
{
    title: object;
    img: object;

    constructor()
    {
        super(sTAG);
        //console.log('dwcNotiSigDesc::constructor() called.');
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
        }

        const type: kwUitBtn = <kwUitBtn>view;

        const sLink = this.sLink;
        if (kw.isString(sLink)) {
            //console.info(this.sClass, "::parseView() sLink is [", sLink, "]");
        }

        const img: object = type.img;
        if (kw.isValid(img)) {
            //console.info(this.sClass, "::parseView() img is [", img, "]");
            this.img = img;
        }

        const title: object = type.title;
        if (kw.isValid(title)) {
            //console.info(this.sClass, "::parseView() img is [", img, "]");
            this.title = title;
        }

        if (kw.isNull(img) && kw.isNull(title) && !kw.isString(sLink)) {
            console.error(this.sClass, "::parseView() Only recognizes [img, sLink, title]");
        }

        if (kw.isNull(img) && kw.isNull(title)) {
            console.error(this.sClass, "::parseView() Requires one of [img, title]");
        }

        if (!kw.isString(sLink)) {
            console.error(this.sClass, "::parseView() Absolutely requires [sLink]");
        }

    }


}
