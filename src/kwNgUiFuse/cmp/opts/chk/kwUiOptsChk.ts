//@formatter:off
import {Component} from '@angular/core';

import {kw} from "@kw/kw";
import {kwLog} from "@kw/kwLog";
import {kwNgUiCtrlComp} from "@kwNgUiCtrl/kwNgUiCtrlComp";
import {kwtOptsChk} from "./kwtOptsChk";


const sTAG: string = "";


@Component({
    selector: 'kw-ui-opts-chk',
    templateUrl: 'kwUiOptsChk.html',
    styleUrls: ['kwUiOptsChk.scss']
})
export class kwUiOptsChk extends kwNgUiCtrlComp {

    public sIcon: string;
    public sName: string;

    public bChecked: boolean = true;

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

        const type: kwtOptsChk = <kwtOptsChk>view;

        const sText = this.sText;
        if (kw.isString(sText)) {
            //console.info(this.sClass, "::retrieve() sText is [",sText, "]");
        }

        const sIcon: string = type.sIcon;
        if (kw.isString(sIcon)) {
            //console.info(this.sClass, "::retrieve() sIcon is [", sIcon, "]");
            this.sIcon = sIcon;
        }

        if (!kw.isString(sIcon) && !kw.isString(this.sText)) {
            console.error(this.sClass, "::retrieve() Only recognizes [sIcon, sInitId, sText]");
        }

        if (!kw.isString(sIcon) && !kw.isString(this.sText)) {
            console.error(this.sClass, "::retrieve() At least 1 is required [ sIcon, sText]");
        }
    }
}
