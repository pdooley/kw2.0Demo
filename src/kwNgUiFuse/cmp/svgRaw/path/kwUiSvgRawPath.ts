//@formatter:off
import {Component} from '@angular/core';

import {kw} from "@kw/kw";
import {kwLog} from "@kw/kwLog";
import {kwNgUiCtrlComp} from "@kwNgUiCtrl/kwNgUiCtrlComp";
import {kwtSvgRawPath} from "./kwtSvgRawPath";


const sTAG: string = "path";

const sDEFAULT_FILL_RULE: string = "evenodd";

@Component({
    selector: 'kw-ui-svg-raw-path',
    templateUrl: 'kwUiSvgRawPath.html',
    styleUrls: ['kwUiSvgRawPath.scss']
})
export class kwUiSvgRawPath extends kwNgUiCtrlComp {
    sD: string;
    sFill: string;
    sFillRule: string;
    sFilter: string;

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

        const type: kwtSvgRawPath = <kwtSvgRawPath>this.view;

        const sD: string = type.sD;
        if (kw.isString(sD)) {
            //console.info(this.sClass, "::parseView() sD is [", sD, "]");
            this.sD = sD
        }

        const sFill: string = type.sFill;
        if (kw.isString(sFill)) {
            //console.info(this.sClass, "::parseView() sFill is [", sFill, "]");
            this.sFill = sFill
        }

        const sFillRule: string = type.sFillRule;
        if (kw.isString(sFillRule)) {
            //console.info(this.sClass, "::parseView() sFillRule is [", sFillRule, "]");
            this.sFillRule = sFillRule
        }

        const sFilter: string = type.sFilter;
        if (kw.isString(sFilter)) {
            //console.info(this.sClass, "::parseView() sFilter is [", sFilter, "]");
            this.sFilter = sFilter
        }

        if (!kw.isString(sD)
            && !kw.isString(sFill)
            && !kw.isString(sFillRule)
            && !kw.isString(sFilter)) {
            const sMsg = "Recognizes only [sD, sFill, sFillRule, sFilter]";
            console.error(this.sClass, "::parseView()", sMsg);
        }

    }

}
