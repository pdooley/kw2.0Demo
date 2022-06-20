/**********************************************************************
 *
 * kwNgUiFuse/cmp/side/kwUiSide.ts
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


const sTAG: string = "side";
const sTAG_INPUT: string = "input";
const sTAG_LOGO: string = "logo";


@Component({
    selector: 'kw-ui-side',
    templateUrl: 'kwUiSide.html',
    styleUrls: ['kwUiSide.scss']
})
export class kwUiSide extends kwNgUiCtrlComp
{

    input: object;
    logo: object;

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

        const input = view[sTAG_INPUT]
        if (kw.isValid(input)) {
            //console.info(this.sClass, '::parseView() input is [', input, ']');
            this.input = view;
        }

        const logo = view[sTAG_LOGO]
        if (kw.isValid(logo)) {
            //console.info(this.sClass, '::parseView() logo is [', logo, ']');
            this.logo = view;
        }
    }
}
