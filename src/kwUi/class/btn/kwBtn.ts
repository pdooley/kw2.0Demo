/**********************************************************************
 *
 * kwView/class/btn/kwBtn.ts
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
import {kwBtnSrvc }         from "./kwBtnSrvc";
import {kwBtnType }         from "./kwBtnType";
import {kwLog }             from "@kw/kwLog";

const sTITLE: string        = 'title';
const sLINK: string         = 'link';

const sTAG_BTN: string      = "Btn";

const sTAG_BACK: string     = "Back";
const sTAG_CANCEL: string   = "Cancel";
const sTAG_DLG: string      = "Dlg";
const sTAG_NEXT: string     = "Next";
const sTAG_OK: string       = "Ok";
//@formatter:on


export class kwBtn
{
    sTitle: string;
    sLink: string;


    constructor(private type: kwBtnType)
    {
        //console.log("kwBtn::constructor() is called.");
    }

    init(): boolean
    {
        //console.log("kwBtn::init() is called.");

        if (kw.isNull(this.type))
        {
            console.error("kwBtn::init() type is invalid.");
            return false;
        }

        const sTitle: string = this.type[sTITLE];
        if (!kw.isString(sTitle) || sTitle.length === 0)
        {
            console.error("kwBtn::init() sTitle is invalid.");
            return false;
        }
        //console.info("kwBtn::init() sTitle is [", sTitle, "].");
        this.sTitle = sTitle;

        const sLink: string = this.type[sLINK];
        if (!kw.isString(sLink) || sLink.length === 0)
        {
            console.error("kwBtn::init() sLink is invalid.");
            return false;
        }
        //console.info("kwBtn::init() sLink is [", sLink, "].");
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
        return kw.is(obj, kwBtn)
    }


    static createTopic(sState: string, sType: string): string
    {
        const log: kwLog = new kwLog("kwBtn", "createTopic");
        //console.log(log.called());


        if (!kw.isString(sState))
        {
            console.error(log.invalid("sState"));
            return null;
        }
        //console.info(log.is("sState", sState));


        if (!kw.isString(sType))
        {
            console.error(log.invalid("sType"));
            return null;
        }
        //console.info(log.is("sType", sType));

        let sTopic: string;

        switch(sType)
        {
            case "back":
            {
                sTopic = kwBtn.createTopicBack(sState);
                break;
            }

            case "cancel":
            {
                sTopic = kwBtn.createTopicCancel(sState);
                break;
            }

            case "dlg":
            {
                sTopic = kwBtn.createTopicDlg(sState);
                break;
            }

            case "next":
            {
                sTopic = kwBtn.createTopicNext(sState);
                break;
            }

            case "ok":
            {
                sTopic = kwBtn.createTopicOk(sState);
                break;
            }
         }

        if (!kw.isString(sTopic))
        {
            console.error(log.errCreate("sTopic"));
            return;
        }
        //console.info(log.is("sTopic", sTopic));

        return sTopic;
    }



    static createTopicBack(sState: string): string
    {
        const log: kwLog = new kwLog("kwBtn", "createTopicBack");
        //console.log(log.called());

        if (!kw.isString(sState))
        {
            console.error(log.invalid("sState"));
            return null;
        }

        return sState + sTAG_BTN + sTAG_BACK;
    }


    static createTopicCancel(sState: string): string
    {
        const log: kwLog = new kwLog("kwBtn", "createTopicCancel");
        //console.log(log.called());

        if (!kw.isString(sState))
        {
            console.error(log.invalid("sState"));
            return null;
        }

        return sState + sTAG_BTN + sTAG_CANCEL;
    }


    static createTopicDlg(sState: string): string
    {
        const log: kwLog = new kwLog("kwBtn", "createTopicDlg");
        //console.log(log.called());

        if (!kw.isString(sState))
        {
            console.error(log.invalid("sState"));
            return null;
        }

        return sState + sTAG_BTN + sTAG_DLG;
    }


    static createTopicNext(sState: string): string
    {
        const log: kwLog = new kwLog("kwBtn", "createTopicNext");
        //console.log(log.called());

        if (!kw.isString(sState))
        {
            console.error(log.invalid("sState"));
            return null;
        }

        return sState + sTAG_BTN + sTAG_NEXT;
    }


    static createTopicOk(sState: string): string
    {
        const log: kwLog = new kwLog("kwBtn", "createTopicOk");
        //console.log(log.called());

        if (!kw.isString(sState))
        {
            console.error(log.invalid("sState"));
            return null;
        }

        return sState + sTAG_BTN + sTAG_OK;
    }


}

