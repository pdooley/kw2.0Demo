/**********************************************************************
 *
 * kwNgUiFuse/cmp/util/kwUiUtil.ts
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
import {kwtUtil} from "./kwtUtil";


const sTAG: string = "util";

@Component({
    selector: 'kw-ui-util',
    templateUrl: 'kwUiUtil.html',
    styleUrls: ['kwUiUtil.scss']
})
export class kwUiUtil extends kwNgUiCtrlComp {

    public lft: object;
    public rht: object;

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

        const type: kwtUtil = <kwtUtil>view;

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


        if (kw.isNull(lft) && kw.isNull(rht)) {
            console.error(this.sClass, "::parseView() Only recognize [lft, rht]");
        }
    }

}
