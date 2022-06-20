/**********************************************************************
 *
 * kwNgUiFuse/cmp/span/kwUiSpan.ts
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
import {kwtSpan} from "./kwtSpan";

const sTAG: string = "span";


@Component({
    selector: 'kw-ui-span',
    templateUrl: 'kwUiSpan.html',
    styleUrls: ['kwUiSpan.scss']
})
export class kwUiSpan extends kwNgUiCtrlComp
{

    public subTitle: object;


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
        if (kw.isNull(view)) {
            console.error(this.sClass, "::parseView() view is invalid");
            return;
        }

        const type: kwtSpan = <kwtSpan>view;

        const subTitle: object = type.subTitle;
        if (kw.isValid(subTitle))
        {
            //console.info(this.sClass, "::parseView() subTitle is [", subTitle, "]")
            this.subTitle = subTitle;
        }

        this.dispHelp();
    }


    private dispHelp() {
        const log = new kwLog(this.sClass, "dispHelp");
        //console.info(log.called());


        if (!kw.isValid(this.subTitle)) {
            console.error(log.recognizes("subTitle"));
            console.error(log.requires("subTitle"));
        }
    }


}
