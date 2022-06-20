//@formatter:off
import {Component} from '@angular/core';

import {kw} from "@kw/kw";
import {kwLog} from "@kw/kwLog";
import {kwNgUiCtrlComp} from "@kwNgUiCtrl/kwNgUiCtrlComp";
import {kwtChk} from "./kwtChk";


const sTAG: string = "";


@Component({
    selector: 'kw-ui-chk',
    templateUrl: 'kwUiChk.html',
    styleUrls: ['kwUiChk.scss']
})
export class kwUiChk extends kwNgUiCtrlComp {

    public sIcon: string;

    public bChecked: boolean = true;

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
            this.sIcon = null;
            return;
        }

        const type: kwtChk = <kwtChk>view;

        if (kw.isString(this.sText)) {
            //console.info(this.sClass, "::retrieve() sText is [", this.sText, "]");
        }

        if (kw.isBoolean(this.data)) {
            //console.info(this.sClass, "::retrieve() data is [", this.data, "]");
        }

        const sIcon: string = type.sIcon;
        if (kw.isString(sIcon)) {
            //console.info(this.sClass, "::retrieve() sIcon is [", sIcon, "]");
            this.sIcon = sIcon;
        }

        if (!kw.isString(sIcon) && !kw.isBoolean(this.data) && !kw.isString(this.sText)) {
            console.error(this.sClass, "::retrieve() Only recognizes [data, sIcon,  sText]");
        }

        if (!kw.isString(sIcon) && !kw.isString(this.sText)) {
            console.error(this.sClass, "::retrieve() At least 1 is required [ sIcon, sText]");
        }

        if (!kw.isString(sIcon)) {
            console.error(this.sClass, "::retrieve() Absolutely requires [ sIcon ]");
        }

        const data = this.data;
        if (!kw.isBoolean(data)) {
            console.error(this.sClass, "::retrieve() data is invalid");
            return;
        }

        this.bChecked = this.data;
    }


}
