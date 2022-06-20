/**********************************************************************
 *
 * kwNgUiFuse/cmp/tabs/title/kwUiTabsTitle.ts
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
import {kwtTabsTitle} from "./kwtTabsTitle"

const sTAG: string = "title";


@Component({
    selector: 'kw-ui-TabsTitle',
    templateUrl: 'kwUiTabsTitle.html',
    styleUrls: ['kwUiTabsTitle.scss']
})
export class kwUiTabsTitle extends kwNgUiCtrlComp
{
    public sTitle: string;
    public sSubTitle: string;

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
        const log = new kwLog(this.sClass, "parseView");
        //console.info(log.called());

        if (kw.isNull(view)) {
            const sMsg = kw;
            console.error(log.invalid("view"));
            return;
        }

        const type: kwtTabsTitle = <kwtTabsTitle>view;

        const sTitle: string = type.sTitle;
        if (kw.isString(sTitle)) {
            //console.info(log.is("sTitle", sTitle));
            this.sTitle = sTitle
        }


        const sSubTitle: string = type.sSubTitle;
        if (kw.isString(sSubTitle)) {
            //console.info(log.is("sSubTitle", sSubTitle));
            this.sSubTitle = sSubTitle
        }


        if (!kw.isString(sTitle) && kw.isString(sSubTitle)) {
            console.error(log.recognizes("sTitle, sSubTitle"));
        }

        if (!kw.isString(sTitle)) {
            console.error(log.requires("sTitle"));
        }

    }

}
