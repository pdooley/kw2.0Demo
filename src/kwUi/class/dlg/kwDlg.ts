/**********************************************************************
 *
 * kwView/class/dlg/kwDlg.ts
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
import {kw}                     from "@kw/kw";
import {kwLog}                  from "@kw/kwLog";
import {kwTabs}                 from "../tabs/kwTabs";
import {kwTabsFcty}             from "../tabs/kwTabsFcty";
//@formatter:on

const sTAG_DLG_ADD: string      = "DlgAdd";
const sTAG_DLG_CELL: string     = "DlgCell";
const sTAG_DLG_EDT: string      = "DlgEdt";
const sTAG_TITLE: string        = "sTitle";
const sTAG_TITLE_CLASS: string  = "sTitleClass";

export class kwDlg
{
    public tabs: kwTabs;

    public sTitle: string;
    public sTitleClass: string;

    constructor(private data: object)
    {
        //console.log("kwDlg::constructor() called");
    }

    init(): boolean
    {
        //console.log("kwDlg::init() called.");

        if (kw.isNull(this.data))
        {
            console.error("kwDlg::init() data is invalid.");
            return false;
        }
        //console.info("kwDlg::init() data ", this.data);

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
        //console.log('kwDlg::retrieveTabs() called.');

        if (kw.isNull(this.data))
        {
            console.error('kwDlg::retrieveTabs() data is invalid.');
            return false;
        }
        //console.info('kwDlg::retrieveTabs() data is [', this.data, "].");

        const tabs: kwTabs = kwTabsFcty.create(this.data);
        if (!kwTabs.is(tabs))
        {
            console.error('kwDlg::retrieveTabs() tabs is invalid.');
            return false;
        }
        //console.info('kwDlg::retrieveTabs() tabs is [', tabs, "].");
        this.tabs = tabs;

        return true;
    }

    retrieveTitle(): boolean
    {
        //console.log('kwDlg::retrieveTitle() called.');

        if (kw.isNull(this.data))
        {
            console.error('kwDlg::retrieveTitle() data is invalid.');
            return false;
        }
        //console.info('kwDlg::retrieveTitle() data is [', this.data, "].");

        const sTitle: string = this.data[sTAG_TITLE];
        if (! kw.isString(sTitle) || sTitle.length == 0)
        {
            console.error('kwDlg::retrieveTitle() links is invalid.');
            return false;
        }
        //console.info('kwDlg::retrieveTitle() sTitle is [', sTitle, "].");
        this.sTitle = sTitle;

        return true;
    }

    retrieveTitleClass(): boolean
    {
        //console.log('kwDlg::retrieveTitleClass() called.');

        if (kw.isNull(this.data))
        {
            console.error('kwDlg::retrieveTitleClass() data is invalid.');
            return false;
        }
        //console.info('kwDlg::retrieveTitleClass() data is [', this.data, "].");

        const sTitleClass: string = this.data[sTAG_TITLE_CLASS];
        if (! kw.isString(sTitleClass) || sTitleClass.length == 0)
        {
            console.error('kwDlg::retrieveTitleClass() links is invalid.');
            return false;
        }
        //console.info('kwDlg::retrieveTitleClass() sTitleClass is [', sTitleClass, "].");
        this.sTitleClass = sTitleClass;

        return true;
    }

    toString(): string
    {
        return this.constructor.name;
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwDlg)
    }


    static createTopicAdd(sState: string): string
    {
        const log: kwLog = new kwLog("kwBtn", "createTopicAdd");
        //console.log(log.called());

        if (!kw.isString(sState))
        {
            console.error(log.invalid("sState"));
            return null;
        }

        return sState + sTAG_DLG_ADD;
    }


    static createTopicCell(sState: string): string
    {
        const log: kwLog = new kwLog("kwBtn", "createTopicCell");
        //console.log(log.called());

        if (!kw.isString(sState))
        {
            console.error(log.invalid("sState"));
            return null;
        }

        return sState + sTAG_DLG_CELL;
    }


    static createTopicEdt(sState: string): string
    {
        const log: kwLog = new kwLog("kwBtn", "createTopicEdt");
        //console.log(log.called());

        if (!kw.isString(sState))
        {
            console.error(log.invalid("sState"));
            return null;
        }

        return sState + sTAG_DLG_EDT;
    }

}

