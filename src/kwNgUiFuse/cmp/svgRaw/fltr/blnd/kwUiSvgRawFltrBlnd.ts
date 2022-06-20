//@formatter:off
import {Component} from '@angular/core';

import {kw} from "@kw/kw";
import {kwLog} from "@kw/kwLog";
import {kwNgUiCtrlComp} from "@kwNgUiCtrl/kwNgUiCtrlComp";
import {kwtSvgRawFltrBlnd} from "./kwtSvgRawFltrBlnd";


const sTAG: string = "blnd";

@Component({
    selector: 'kw-ui-svg-raw-fltr-blnd',
    templateUrl: 'kwUiSvgRawFltrBlnd.html',
    styleUrls: ['kwUiSvgRawFltrBlnd.scss']
})
export class kwUiSvgRawFltrBlnd extends kwNgUiCtrlComp {

    public sIn: string;
    public sIn2: string;

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

        const type: kwtSvgRawFltrBlnd = <kwtSvgRawFltrBlnd>view;

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

        if (!kw.isString(sIn)
            && !kw.isString(sIn2)) {
            const sMsg = "Recognizes only [sIn, sIn2]";
            console.error(this.sClass, "::parseView()", sMsg);
        }

    }


}
