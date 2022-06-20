//@formatter:off
import {Component} from '@angular/core';

import {kw} from "@kw/kw";
import {kwLog} from "@kw/kwLog";
import {kwNgUiCtrlComp} from "@kwNgUiCtrl/kwNgUiCtrlComp";
import {kwtSvgRaw} from "./kwtSvgRaw";


const sTAG: string = "svgRaw";


@Component({
    selector: 'kw-ui-svg-raw',
    templateUrl: 'kwUiSvgRaw.html',
    styleUrls: ['kwUiSvgRaw.scss']
})
export class kwUiSvgRaw extends kwNgUiCtrlComp {
    public sHeight: string;
    public sViewBox: string;
    public sWidth: string;

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

        const type: kwtSvgRaw = <kwtSvgRaw>view;

        const defs: object = type.defs;
        if (kw.isValid(defs)) {
            //console.info(this.sClass, "::parseView() defs is [", defs, "]");
        }

        const path: object = type.path;
        if (kw.isValid(path)) {
            //console.info(this.sClass, "::parseView() path is [", path, "]");
        }

        const sHeight: string = type.sHeight;
        if (kw.isString(sHeight)) {
            //console.info(this.sClass, "::parseView() sHeight is [", sHeight, "]");
            this.sHeight = sHeight
        }

        const sViewBox: string = type.sViewBox;
        if (kw.isString(sViewBox)) {
            //console.info(this.sClass, "::parseView() sViewBox is [", sViewBox, "]");
            this.sViewBox = sViewBox
        }

        const sWidth: string = type.sWidth;
        if (kw.isString(sWidth)) {
            //console.info(this.sClass, "::parseView() sWidth is [", sWidth, "]");
            this.sWidth = sWidth
        }

        if (!kw.isString(sViewBox)
            && !kw.isString(sHeight)
            && !kw.isString(sWidth)
            && !kw.isValid(defs)
            && !kw.isValid(path)) {
            const sMsg = "Recognizes only [defs, path, sHeight, sViewBox, sWidth]";
            console.error(this.sClass, "::parseView()", sMsg);
        }

    }

}
