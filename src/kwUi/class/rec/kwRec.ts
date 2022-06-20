/**********************************************************************
 *
 * kwView/class/grp/kwGrp.ts
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
import {kwLog }             from "@kw/kwLog";


//@formatter:on

const sREC_DEL: string          = "RecDel";
const sREC_LOAD: string         = "RecLoad";
const sREC_READY: string        = "RecReady";
const sREC_SAVE: string         = "RecSave";

export class kwRec
{

    static createTopicDel(sState: string): string
    {
        const log: kwLog = new kwLog("kwRec", "createTopicDel");
        //console.log(log.called());

        if (!kw.isString(sState))
        {
            console.error(log.invalid("sState"));
            return null;
        }

        return sState + sREC_DEL;
    }

    static createTopicLoad(sState: string): string
    {
        const log: kwLog = new kwLog("kwRec", "createTopicLoad");
        //console.log(log.called());

        if (!kw.isString(sState))
        {
            console.error(log.invalid("sState"));
            return null;
        }

        return sState + sREC_LOAD;
    }

    static createTopicReady(sState: string): string
    {
        const log: kwLog = new kwLog("kwRec", "createTopicReady");
        //console.log(log.called());

        if (!kw.isString(sState))
        {
            console.error(log.invalid("sState"));
            return null;
        }

        return sState + sREC_READY;
    }

    static createTopicSave(sState: string): string
    {
        const log: kwLog = new kwLog("kwRec", "createTopicSave");
        //console.log(log.called());

        if (!kw.isString(sState))
        {
            console.error(log.invalid("sState"));
            return null;
        }

        return sState + sREC_SAVE;
    }

}

