/**********************************************************************
 *
 * kwNgUiFuse/cmp/bdy/kwUiBdy.ts
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
import {kwNgUiCtrlComp} from "@kwNgUiCtrl/kwNgUiCtrlComp";
import {kwtBdy} from "./kwtBdy";


const sTAG: string = "bdy";

@Component({
    selector: "kw-ui-bdy",
    templateUrl: "kwUiBdy.html",
    styleUrls: ["kwUiBdy.scss"]
})
export class kwUiBdy extends kwNgUiCtrlComp {

    ctr: object;
    lft: object;
    rht: object;

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
            return;
        }

        const type: kwtBdy = <kwtBdy>view;

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


        if (kw.isNull(ctr)
            && kw.isNull(lft)
            && kw.isNull(rht)) {
            const sMsg = "Recognizes only [ctr, lft, rht]";
            console.error(this.sClass, "::parseView() ", sMsg);
        }
    }


}
