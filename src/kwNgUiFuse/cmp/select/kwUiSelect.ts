/**********************************************************************
 *
 * kwNgUiFuse/cmp/select/kwUiSelect.ts
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
import {kwtSelect} from "./kwtSelect";


const sTAG: string = "select";


@Component({
    selector: 'kw-ui-select',
    templateUrl: 'kwUiSelect.html',
    styleUrls: ['kwUiSelect.scss']
})
export class kwUiSelect extends kwNgUiCtrlComp
{
    public sSort: string;
    public sPlaceHolder: string;
    public opts: object;

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

        const type: kwtSelect = <kwtSelect>view;

        const sSort: string = type.sSort;
        if (kw.isString(sSort)) {
            this.sSort = sSort;
            //console.info(this.sClass, "::parseView() sSort is [", sSort, "]");
        }

        const sPlaceHolder: string = type.sPlaceHolder;
        if (kw.isString(sPlaceHolder)) {
            this.sPlaceHolder = sPlaceHolder;
            //console.info(this.sClass, "::parseView() sPlaceHolder is [", sPlaceHolder, "]");
        }

        const opts: object[] = type.opts;
        if (kw.isValid(opts)) {
            this.opts = opts;
            //console.info(this.sClass, "::parseView() opts is [", opts, "]");
        }


    }

}
