//@formatter:off
import {Component} from '@angular/core';

import {kw} from "@kw/kw";
import {kwLog} from "@kw/kwLog";
import {kwNgUiCtrlComp} from "@kwNgUiCtrl/kwNgUiCtrlComp";
import {kwtOpts} from "./kwtOpts";


const sTAG = "opts";


@Component({
    selector: 'kw-ui-opts',
    templateUrl: 'kwUiOpts.html',
    styleUrls: ['kwUiOpts.scss']
})
export class kwUiOpts extends kwNgUiCtrlComp {
    public chks: object[];
    public title: object;

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

        const type: kwtOpts = <kwtOpts>view;

        const chks: object[] = type.chks;
        if (kw.isArray(chks)) {
            //console.info(this.sClass, "::parseView() chks is [", chks, "]");
            this.chks = chks
        }

        const title: object = type.title;
        if (kw.isValid(title)) {
            //console.info(this.sClass, "::parseView() title is [", title, "]");
            this.title = title
        }

        if (!kw.isArray(chks) && !kw.isValid(title)) {
            console.error(this.sClass, "::parseView() Only recognizes [chks, title]");
        }

        if (!kw.isArray(chks)) {
            console.error(this.sClass, "::parseView() Absolutely requires [chks]");
        }
    }

}
