/**********************************************************************
 *
 * kwView/class/hdr/kwHdr.ts
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
import {kw}             from "@kw/kw";
import {kwTabs}         from "../tabs/kwTabs";
import {kwTabsFcty}     from "../tabs/kwTabsFcty";
//@formatter:on

const sTAG_TITLE: string = "sTitle";
const sTAG_TITLE_CLASS: string = "sTitleClass";

export class kwHdr
{
    public tabs: kwTabs;

    public sTitle: string;
    public sTitleClass: string;

    constructor(private data: object)
    {
        //console.log("kwHdr::constructor() called");
    }

    init(): boolean
    {
        //console.log("kwHdr::init() called.");

        if (kw.isNull(this.data))
        {
            console.error("kwHdr::init() data is invalid.");
            return false;
        }
        //console.info("kwHdr::init() data ", this.data);

        if (!this.retrieveTabs())
        {
            return false;
        }

        if (!this.retrieveTitle())
        {
            return false;
        }

        if (!this.retrieveTitleClass())
        {
            return false;
        }

        return true;
    }

    getTabs(): kwTabs
    {
        return this.tabs;
    }

    getTitle(): string
    {
        return this.sTitle;
    }

    getTitleClass(): string
    {
        return this.sTitleClass;
    }

    retrieveTabs(): boolean
    {
        //console.log('kwHdr::retrieveTabs() called.');

        if (kw.isNull(this.data))
        {
            console.error('kwHdr::retrieveTabs() data is invalid.');
            return false;
        }
        //console.info('kwHdr::retrieveTabs() data is [', this.data, "].");

        const tabs: kwTabs = kwTabsFcty.create(this.data);
        if (!kwTabs.is(tabs))
        {
            console.error('kwHdr::retrieveTabs() tabs is invalid.');
            return false;
        }
        //console.info('kwHdr::retrieveTabs() tabs is [', tabs, "].");
        this.tabs = tabs;

        return true;
    }

    retrieveTitle(): boolean
    {
        //console.log('kwHdr::retrieveTitle() called.');

        if (kw.isNull(this.data))
        {
            console.error('kwHdr::retrieveTitle() data is invalid.');
            return false;
        }
        //console.info('kwHdr::retrieveTitle() data is [', this.data, "].");

        const sTitle: string = this.data[sTAG_TITLE];
        if (! kw.isString(sTitle) || sTitle.length == 0)
        {
            console.error('kwHdr::retrieveTitle() links is invalid.');
            return false;
        }
        //console.info('kwHdr::retrieveTitle() sTitle is [', sTitle, "].");
        this.sTitle = sTitle;

        return true;
    }

    retrieveTitleClass(): boolean
    {
        //console.log('kwHdr::retrieveTitleClass() called.');

        if (kw.isNull(this.data))
        {
            console.error('kwHdr::retrieveTitleClass() data is invalid.');
            return false;
        }
        //console.info('kwHdr::retrieveTitleClass() data is [', this.data, "].");

        const sTitleClass: string = this.data[sTAG_TITLE_CLASS];
        if (! kw.isString(sTitleClass) || sTitleClass.length == 0)
        {
            console.error('kwHdr::retrieveTitleClass() links is invalid.');
            return false;
        }
        //console.info('kwHdr::retrieveTitleClass() sTitleClass is [', sTitleClass, "].");
        this.sTitleClass = sTitleClass;

        return true;
    }

    toString(): string
    {
        return this.constructor.name;
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwHdr)
    }
}

