/**********************************************************************
 *
 * kwNgUiFuse/cmp/rec/kwUiRec.ts
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
import {kwtRec} from "./kwtRec";


const sTAG: string = "rec";


@Component({
    selector: 'kw-ui-rec',
    templateUrl: 'kwUiRec.html',
    styleUrls: ['kwUiRec.scss']
})
export class kwUiRec extends kwNgUiCtrlComp {

    constructor()
    {
        super(sTAG);
        const log = new kwLog(this.sClass, "constructor");
        //console.info(log.called());
    }

//@formatter:on

    protected initCmp(): void {
        const log = new kwLog(this.sClass, "initCmp");
        //console.info(log.called());
    }

    protected parseData(data: any): void {
        const log = new kwLog(this.sClass, "parseData");
        //console.info(log.called());
    }

    protected parseInits(inits: object): void {
        const log = new kwLog(this.sClass, "parseInits");
        //console.info(log.called());
    }

    protected parseView(view: object): void {
        const log = new kwLog(this.sClass, "parseView");
        //console.info(log.called());

        const type: kwtRec = <kwtRec>view;

        this.dispHelp();
    }

    private dispHelp()
    {
        const log = new kwLog(this.sClass, "dispHelp");
        //console.info(log.called());

    }


}
