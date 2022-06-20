//@formatter:off
import {Component} from '@angular/core';

import {kw} from "@kw/kw";
import {kwLog} from "@kw/kwLog";
import {kwNgUiCtrlComp} from "@kwNgUiCtrl/kwNgUiCtrlComp";
import {kwtSvgRawFltrCmp} from "./kwtSvgRawFltrCmp";


const sTAG: string = "cmp";


@Component({
    selector: 'kw-ui-svg-raw-fltr-cmp',
    templateUrl: 'kwUiSvgRawFltrCmp.html',
    styleUrls: ['kwUiSvgRawFltrCmp.scss']
})
export class kwUiSvgRawFltrCmp extends kwNgUiCtrlComp
{

    sIn: string;
    sIn2: string;
    sOperator: string;
    sResult: string;

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

        const type: kwtSvgRawFltrCmp = <kwtSvgRawFltrCmp>view;

        const sIn: string = type.sIn;
        if (kw.isString(sIn)) {
            //console.info(this.sClass, "::parseView() sIn is [", sIn, "]");
            this.sIn = sIn
        }

        const sIn2: string = type.sIn2;
        if (kw.isString(sIn2)) {
            //console.info(this.sClass, "::parseView() sIn2 is [", sIn2, "]");
            this.sIn2 = sIn2
        }

        const sOperator: string = type.sOperator;
        if (kw.isString(sOperator)) {
            //console.info(this.sClass, "::parseView() sOperator is [", sOperator, "]");
            this.sOperator = sOperator
        }

        const sResult: string = type.sResult;
        if (kw.isString(sResult)) {
            //console.info(this.sClass, "::parseView() sResult is [", sResult, "]");
            this.sResult = sResult
        }

        if (!kw.isString(sIn)
            && !kw.isString(sIn2)
            && !kw.isString(sOperator)
            && !kw.isString(sResult)) {
            const sMsg = "Recognizes only [sIn, sIn2, sOperator, sResult]";
            console.error(this.sClass, "::parseView()", sMsg);
        }

    }

}
