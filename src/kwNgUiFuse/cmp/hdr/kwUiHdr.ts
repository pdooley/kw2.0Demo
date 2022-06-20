/**********************************************************************
 *
 * kwNgUiFuse/cmp/hdr/kwUiHdr.ts
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
import {kwtHdr} from "./kwtHdr";

//@formatter:on

const sTAG: string = "hdr";

@Component({
    selector: "kw-ui-hdr",
    templateUrl: "kwUiHdr.html",
    styleUrls: ["kwUiHdr.scss"]
})
export class kwUiHdr extends kwNgUiCtrlComp {

    ctr: object;
    lft: object;
    rht: object;

    constructor()
    {
        super(sTAG);
        const log = new kwLog(this.sClass, "constructor");
        //console.info(log.called());
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

        const type: kwtHdr = <kwtHdr>view;

        const ctr: object = type.ctr;
        if (kw.isValid(ctr)) {
            //console.info(this.sClass, "::parseView() ctr is [", ctr, "]");
            this.ctr = ctr;
        }


        const lft: object = type.lft;
        if (kw.isValid(lft)) {
            //console.info(this.sClass, "::parseView() lft is [", lft, "]");
            this.lft = lft;
        }


        const rht: object = type.rht;
        if (kw.isValid(rht)) {
            //console.info(this.sClass, "::parseView() rht is [", rht, "]");
            this.rht = rht;
        }

        if (kw.isNull(ctr) && kw.isNull(lft) && kw.isNull(rht)) {
            console.error(this.sClass, "::parseView() Only recognize [ctr, lft, rht]");
        }
    }
}
