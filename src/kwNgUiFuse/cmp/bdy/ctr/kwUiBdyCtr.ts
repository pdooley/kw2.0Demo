/**********************************************************************
 *
 * kwNgUiFuse/cmp/bdy/kwUiBdyCtr.ts
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
import {kwNgUiCtrlComp} from "@kwNgUiCtrl/kwNgUiCtrlComp";
import {kwtBdyCtr} from "./kwtBdyCtr";


const sTAG: string = "ctr";

@Component({
    selector: "kw-ui-bdy-ctr",
    templateUrl: "kwUiBdyCtr.html",
    styleUrls: ["kwUiBdyCtr.scss"]
})
export class kwUiBdyCtr extends kwNgUiCtrlComp
{
    form: object;
    rows: object;
    router: object;
    table: object

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
            return;
        }

        const type: kwtBdyCtr = <kwtBdyCtr>view;

        const form: object = type.form;
        if (kw.isValid(form)) {
            //console.info(this.sClass, "::parseView() form is [", form, "]");
            this.form = form
        }

        const router: object = type.router;
        if (kw.isValid(router)) {
            //console.info(this.sClass, "::parseView() router is [", router, "]");
            this.router = router
        }

        const rows: object = type.rows;
        if (kw.isValid(rows)) {
            //console.info(this.sClass, "::parseView() rows is [", rows, "]");
            this.rows = rows
        }

        const table: object = type.table;
        if (kw.isValid(table)) {
            this.table = table
            //console.info(this.sClass, "::parseView() table is [", table, "]");
        }

        if (kw.isNull(form) && kw.isNull(router) && kw.isNull(rows) && kw.isNull(table)) {
            console.error(this.sClass, "::parseView() Only recognize [form, router, rows, table]");
        }

    }

}
