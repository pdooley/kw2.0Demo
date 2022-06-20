/**********************************************************************
 *
 * kwNgUiFuse/cmp/bdy/rht/kwUiBdyRht.ts
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
import {kwNgUiDispStObj} from "@kwNgUiState/disp/kwNgUiDispSt";
import {kwNgUiCtrlComp} from "@kwNgUiCtrl/kwNgUiCtrlComp";
import {kwtBdyRht} from "./kwtBdyRht";

//@formatter:on

const sTAG: string = "rht";

@Component({
    selector: "kw-ui-bdy-rht",
    templateUrl: "kwUiBdyRht.html",
    styleUrls: ["kwUiBdyRht.scss"]
})
export class kwUiBdyRht extends kwNgUiCtrlComp {

    nav: object;
    side: object;
    opts: object;
    tabs: object;

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

        const type: kwtBdyRht = <kwtBdyRht>view;


        const nav: object = type.nav;
        if (kw.isValid(nav)) {
            //console.info(this.sClass, "::parseView() lft is [", lft, "]");
            this.nav = nav
        }


        const side: object = type.side;
        if (kw.isValid(side)) {
            //console.info(this.sClass, "::parseView() rht is [", rht, "]");
            this.side = side
        }

        const opts: object = type.opts;
        if (kw.isValid(opts)) {
            //console.info(this.sClass, "::parseView() rht is [", rht, "]");
            this.opts = opts
        }

        const tabs: object = type.tabs;
        if (kw.isValid(side)) {
            //console.info(this.sClass, "::parseView() rht is [", rht, "]");
            this.tabs = tabs
        }


        if (kw.isNull(nav) && kw.isNull(side) && kw.isNull(opts) && kw.isNull(tabs)) {
            console.error(this.sClass, "::parseView() Only recognizes [nav, side, opts, tabs]");
        }
    }


}
