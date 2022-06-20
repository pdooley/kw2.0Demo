/**********************************************************************
 *
 * kwNgUiFuse/cmp/tab/kwUiTab.ts
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


const sTAG: string = "tab";


@Component({
    selector: 'kw-ui-tab',
    templateUrl: 'kwUiTab.html',
    styleUrls: ['kwUiTab.scss']
})
export class kwUiTab extends kwNgUiCtrlComp
{

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

    }

}
