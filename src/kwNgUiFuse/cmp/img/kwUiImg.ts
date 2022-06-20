/**********************************************************************
 *
 * kwNgUiFuse/cmp/img/kwUiImg.ts
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
import {kwLog} from "@kw/kwLog";
import {kwNgUiCtrlComp} from "@kwNgUiCtrl/kwNgUiCtrlComp";
import {kwtImg} from "./kwtImg";

//@formatter:on

const sTAG: string = "img";

@Component({
    selector: "kw-ui-img",
    templateUrl: "kwUiImg.html",
    styleUrls: ["kwUiImg.scss"]
})
export class kwUiImg extends kwNgUiCtrlComp {

    icon: object;
    logo: object;
    svg: object;
    svgRaw: object;

    constructor()
    {
        super(sTAG);
        const log = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
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

        const type: kwtImg = <kwtImg>view;


        const icon: object = type.icon;
        if (kw.isValid(icon)) {
            //console.info(this.sClass, "::parseView() icon is [", icon, "]");
            this.icon = icon;
        }


        const logo: object = type.logo;
        if (kw.isValid(logo)) {
            //console.info(this.sClass, "::parseView() logo is [", logo, "]");
            this.logo = logo;
        }


        const svg: object = type.svg;
        if (kw.isValid(svg)) {
            //console.info(this.sClass, "::parseView() svg is [", svg, "]");
            this.svg = svg;
        }

        const svgRaw: object = type.svgRaw;
        if (kw.isValid(svgRaw)) {
            //console.info(this.sClass, "::parseView() svgRaw is [", svgRaw, "]");
            this.svgRaw = svgRaw;
        }

        if (kw.isNull(icon)
            && kw.isNull(logo)
            && kw.isNull(svg)
            && kw.isNull(svgRaw)) {
            const sMsg = "Only recognizes [icon, logo, svg, svgRaw]"
            console.error(this.sClass, "::parseView() ", sMsg);
        }

        if (kw.isNull(icon)
            && kw.isNull(logo)
            && kw.isNull(svg)
            && kw.isNull(svgRaw)) {
            const sMsg = "Requires one of [icon, logo, svg, svgRaw]"
            console.error(this.sClass, "::parseView() ", sMsg);
        }

    }
}
