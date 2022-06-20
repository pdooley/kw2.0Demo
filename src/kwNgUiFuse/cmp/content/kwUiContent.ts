/**********************************************************************
 *
 * kwUiComp/content/kwUiContent.ts
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
import {kwtContent} from "./kwtContent";

const sTAG: string = "content";

@Component({
    selector: 'kw-ui-content',
    templateUrl: 'kwUiContent.html',
    styleUrls: ['kwUiContent.scss']
})
export class kwUiContent extends kwNgUiCtrlComp {

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

        const type: kwtContent = <kwtContent>view;

        if (kw.isString(this.sText)) {
            //console.info(this.sClass, "::retrieve() sText is [", this.sText, "]");
        }

        const table: object = type.table;
        if (kw.isValid(table)) {
            //console.info(this.sClass, "::retrieve() table is [", table, "]");
        }

        const rows: object = type.rows;
        if (kw.isValid(rows)) {
            //console.info(this.sClass, "::retrieve() rows is [", rows, "]");
        }

        if (!kw.isValid(table) && !kw.isValid(rows)) {
            console.error(this.sClass, "::retrieve() Only recognizes [rows, table]");
            console.error(this.sClass, "::retrieve() At least 1 is required [ rows, table]");
        }

    }

}
