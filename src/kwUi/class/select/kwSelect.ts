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
import {kw}                     from "@kw/kw";
import {kwLog }                 from "@kw/kwLog";


const sTAG_SEL_ALL: string      = "SelAll";
const sTAG_SEL_DEL: string      = "SelDel";
const sTAG_SEL_OFF: string      = "SelOff";
const sTAG_SEL_SEL: string      = "SelSel";
//@formatter:on


export class kwSelect
{


    static createTopicAll(sState: string): string
    {
        const log: kwLog = new kwLog("kwSelect", "createTopicAll");
        //console.log(log.called());

        if (!kw.isString(sState))
        {
            console.error(log.invalid("sState"));
            return null;
        }

        return sState + sTAG_SEL_ALL;
    }


    static createTopicDel(sState: string): string
    {
        const log: kwLog = new kwLog("kwSelect", "createTopicDel");
        //console.log(log.called());

        if (!kw.isString(sState))
        {
            console.error(log.invalid("sState"));
            return null;
        }

        return sState + sTAG_SEL_DEL;
    }


    static createTopicOff(sState: string): string
    {
        const log: kwLog = new kwLog("kwSelect", "createTopicOff");
        //console.log(log.called());

        if (!kw.isString(sState))
        {
            console.error(log.invalid("sState"));
            return null;
        }

        return sState + sTAG_SEL_OFF;
    }


    static createTopicSel(sState: string): string
    {
        const log: kwLog = new kwLog("kwSelect", "createTopicSel");
        //console.log(log.called());

        if (!kw.isString(sState))
        {
            console.error(log.invalid("sState"));
            return null;
        }

        return sState + sTAG_SEL_SEL;
    }

}

