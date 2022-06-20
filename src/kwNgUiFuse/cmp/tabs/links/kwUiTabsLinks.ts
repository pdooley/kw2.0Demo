/**********************************************************************
 *
 * kwNgUiFuse/cmp/TabsLinks/kwUiTabsLinks.ts
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
import {kwtTabsLinks} from "./kwtTabsLinks";


const sTAG: string = "links";

@Component({
    selector: 'kw-ui-tabs-links',
    templateUrl: 'kwUiTabsLinks.html',
    styleUrls: ['kwUiTabsLinks.scss']
})
export class kwUiTabsLinks extends kwNgUiCtrlComp {

    public links: object[];

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

    protected parseView(view: any): void {
        //console.log(this.sClass, "::parseView() called.");

        if (kw.isNull(view)) {
            console.error(this.sClass, "::parseView() view is invalid");
            return;
        }

        const links = view;
        if (kw.isArray(links)) {
            //console.info(this.sClass, "::parseView() links is [", links, "]");
            this.links = links;
        }

        if (!kw.isArray(links)) {
            console.error(this.sClass, "::parseView() links is invalid");
        }

        if (links.count === 0) {
            console.error(this.sClass, "::parseView() links is empty");
        }
    }

}
