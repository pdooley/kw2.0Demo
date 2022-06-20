/**********************************************************************
 *
 * kwView/class/tab/kwTab.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst Corporation
 *
 **********************************************************************/

//@formatter:off
import {kw}                 from "@kw/kw";
import {kwTabSrvc}         from "./kwTabSrvc";
import {kwTabType}            from "./kwTabType";

const sTITLE:    string = 'title';
const sLINK:     string = 'link';
//@formatter:on


export class kwTab
{
    sTitle: string;
    sLink: string;

    constructor(private type: kwTabType)
    {
        //console.log("kwTab::constructor() is called.");
    }

    init(): boolean
    {
        //console.log("kwTab::init() is called.");

        if (kw.isNull(this.type))
        {
            console.error("kwTab::init() type is invalid.");
            return false;
        }

        const sTitle: string = this.type[sTITLE];
        if (!kw.isString(sTitle) || sTitle.length === 0)
        {
            console.error("kwTab::init() sTitle is invalid.");
            return false;
        }
        //console.info("kwTab::init() sTitle is [", sTitle, "].");
        this.sTitle = sTitle;

        const sLink: string = this.type[sLINK];
        if (!kw.isString(sLink) || sLink.length === 0)
        {
            console.error("kwTab::init() sLink is invalid.");
            return false;
        }
        //console.info("kwTab::init() sLink is [", sLink, "].");
        this.sLink = sLink;

        return true;
    }

    getTitle(): string
    {
        return this.sTitle;
    }

    getLink(): string
    {
        return this.sLink;
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwTab)
    }

}

