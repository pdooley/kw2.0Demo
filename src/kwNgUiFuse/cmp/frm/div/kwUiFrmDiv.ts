//@formatter:off
import {Component}          from '@angular/core';

import {kw}                 from "@kw/kw";
import {kwLog}              from "@kw/kwLog";
import {kwNgUiCtrlComp}     from "@kwNgUiCtrl/kwNgUiCtrlComp";
import {kwtFrmDiv}          from "./kwtFrmDiv";


const sTAG: string = "";


@Component({
    selector: 'kw-ui-frm-div',
    templateUrl: 'kwUiFrmDiv.html',
    styleUrls: ['kwUiFrmDiv.scss']
})
export class kwUiFrmDiv extends kwNgUiCtrlComp {

    public sIcon: string;
    public sName: string;

    public bChecked: boolean = true;

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

        const type: kwtFrmDiv = <kwtFrmDiv>view;


    }
}
