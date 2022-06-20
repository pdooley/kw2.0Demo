/**********************************************************************
 *
 * kwNgUiFuse/cmp/crumbs/kwUiCrumbs.ts
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
import {Component}              from '@angular/core';
import {Input}                  from '@angular/core';

import {kw}                     from "@kw/kw";
import {kwNgUiCtrlComp}       from "@kwNgUiCtrl/kwNgUiCtrlComp";


const sTAG: string = "";


@Component({
    selector: 'kw-ui-crumbs',
    templateUrl: './kwUiCrumbs.html',
    styleUrls: ['./kwUiCrumbs.scss']
})
export class kwUiCrumbs extends kwNgUiCtrlComp {

    @Input() current: string;
    @Input() crumbs: any[];

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

    }

}
