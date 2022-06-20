/**********************************************************************
 *
 * kwNgUiFuse/cmp/input/kwUiInput.ts
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
import {kwtInput} from "./kwtInput";


const sTAG: string = "input";


@Component({
    selector: 'kw-ui-input',
    templateUrl: 'kwUiInput.html',
    styleUrls: ['kwUiInput.scss']
})
export class kwUiInput extends kwNgUiCtrlComp {

    sIcon: string;
    sPlaceholder: string;

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

        const type: kwtInput = <kwtInput>view;


        const sIcon: string = type.sIcon;
        if (kw.isString(sIcon)) {
            //console.info(this.sClass, "::parseView() sIcon is [", sIcon, "]");
            this.sIcon = sIcon;
        }


        const sPlaceholder: string = type.sPlaceholder;
        if (kw.isString(sPlaceholder)) {
            //console.info(this.sClass, "::parseView() sPlaceholder is [", sPlaceholder, "]");
            this.sPlaceholder = sPlaceholder;
        }

        if (!kw.isString(this.sIcon) && !kw.isString(this.sPlaceholder)) {
            console.error(this.sClass, "::parseView() Only recognizes [sIcon, sPlaceholder]");
            console.error(this.sClass, "::parseView() Requires [ sPlaceholder]");
        }
    }
}
