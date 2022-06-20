/**********************************************************************
 *
 * kwNgUiFuse/cmp/icon/kwUiIcon.ts
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
import {kwtIcon} from "./kwtIcon";

//@formatter:on

const sTAG: string = "icon";

@Component({
    selector: "kw-ui-icon",
    templateUrl: "kwUiIcon.html",
    styleUrls: ["kwUiIcon.scss"]
})
export class kwUiIcon extends kwNgUiCtrlComp {

    public sIcon: string;

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

        const type: kwtIcon = <kwtIcon>view;

        const sIcon: string = type.sIcon;
        if (kw.isString(sIcon)) {
            //console.info(this.sClass, "::parseView() sIcon is [", sIcon, "]");
            this.sIcon = sIcon;
        }

        if (!kw.isString(sIcon)) {
            console.error(this.sClass, "::parseView() Only recognize [sIcon]");
        }
    }
}
