/**********************************************************************
 *
 * kwNgUiFuse/page/kwUiPage.ts
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
import {Component}          from "@angular/core";

import {kw}                 from "@kw/kw";
import {kwLog}              from "@kw/kwLog";
import {kwNgUiCtrlComp}   from "@kwNgUiCtrl/kwNgUiCtrlComp";
import {kwUitPage}          from "./kwUitPage";


const sTAG: string          = "page";

@Component({
    selector: "kw-ui-page",
    templateUrl: "kwUiPage.html",
    styleUrls: ["kwUiPage.scss"]
})
export class kwUiPage extends kwNgUiCtrlComp {

    bdy: object;
    crud: object;
    form: object;
    ftr: object;
    hdr: object;
    util: object;

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

    protected parseView(view: object): void
    {
        //console.log(this.sClass, "::parseView() called.");

        if (kw.isNull(view)) {
            console.error(this.sClass, "::parseView() view is invalid");
            return;
        }

        const type: kwUitPage = <kwUitPage>view;


        const bdy = type.bdy;
        if (kw.isValid(bdy)) {
            //console.info(this.sClass, "::parseView() bdy is [", bdy, "]");
            this.bdy = bdy;
        }


        const crud = type.crud;
        if (kw.isValid(crud)) {
            //console.info(this.sClass, "::parseView() crud is [", crud, "]");
            this.crud = crud;
        }


        const form = type.form;
        if (kw.isValid(form)) {
            //console.info(this.sClass, "::parseView() form is [", form, "]");
            this.form = form;
        }


        const ftr = type.ftr;
        if (kw.isValid(ftr)) {
            //console.info(this.sClass, "::parseView() ftr is [", ftr, "]");
            this.ftr = ftr;
        }


        const hdr = type.hdr;
        if (kw.isValid(hdr)) {
            //console.info(this.sClass, "::parseView() hdr is [", hdr, "]");
            this.hdr = hdr;
        }


        const util = type.util;
        if (kw.isValid(util)) {
            //console.info(this.sClass, "::parseView() util is [", util, "]");
            this.util = util;
        }


        if (kw.isNull(bdy)  &&
            kw.isNull(crud) &&
            kw.isNull(form) &&
            kw.isNull(ftr)  &&
            kw.isNull(hdr)  &&
            kw.isNull(util)     )
        {
            const sMsg = "Only recognize [bdy, crud, form, ftr, hdr, util"
            console.error(sMsg);
        }

        return;
    }
}
