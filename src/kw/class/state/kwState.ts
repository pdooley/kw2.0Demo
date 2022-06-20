/**********************************************************************
 *
 * kw/class/state/kwState.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst Corporation
 *
 **********************************************************************/
//@formatter:on
import * as _               from 'lodash';

import {kwLog}              from "@kw/kwLog";


const sSTATE_ADD: string        = "StateAdd";
const sSTATE_ALL: string        = "StateAll";
const sSTATE_DEL: string        = "StateDel";
const sSTATE_EDT: string        = "StateEdt";
const sSTATE_GET: string        = "StateGet";
const sSTATE_MAP_RDY: string    = "StateMapRdy";
const sSTATE_RDY: string        = "StateRdy";

//@formatter:off


export class kwState
{

    static createTopicAdd(sState): string
    {
        const log: kwLog = new kwLog("kwState", "createTopicAdd");
        //console.log(log.called());

        if (!_.isString(sState))
        {
            //console.log(log.invalid("sState"));
            return null;
        }
        //console.info(log.is("sState", sState));

        return sState + sSTATE_ADD;
    }


    static createTopicAll(sState): string
    {
        const log: kwLog = new kwLog("kwState", "createTopicAll");
        //console.log(log.called());

        if (!_.isString(sState))
        {
            //console.log(log.invalid("sState"));
            return null;
        }
        //console.info(log.is("sState", sState));

        return sState + sSTATE_ALL;
    }


    static createTopicDel(sState): string
    {
        const log: kwLog = new kwLog("kwState", "createTopicDel");
        //console.log(log.called());

        if (!_.isString(sState))
        {
            //console.log(log.invalid("sState"));
            return null;
        }
        //console.info(log.is("sState", sState));

        return sState + sSTATE_DEL;
    }


    static createTopicEdt(sState): string
    {
        const log: kwLog = new kwLog("kwState", "createTopicEdt");
        //console.log(log.called());

        if (!_.isString(sState))
        {
            //console.log(log.invalid("sState"));
            return null;
        }
        //console.info(log.is("sState", sState));

        return sState + sSTATE_EDT;
    }


    static createTopicGet(sState): string
    {
        const log: kwLog = new kwLog("kwState", "createTopicGet");
        //console.log(log.called());

        if (!_.isString(sState))
        {
            //console.log(log.invalid("sState"));
            return null;
        }
        //console.info(log.is("sState", sState));

        return sState + sSTATE_GET;
    }


    static createTopicMapRdy(sState): string
    {
        const log: kwLog = new kwLog("kwState", "createTopicMapRdy");
        //console.log(log.called());

        if (!_.isString(sState))
        {
            //console.log(log.invalid("sState"));
            return null;
        }
        //console.info(log.is("sState", sState));

        return sState + sSTATE_MAP_RDY;
    }


    static createTopicRdy(sState): string
    {
        const log: kwLog = new kwLog("kwState", "createTopicRdy");
        //console.log(log.called());

        if (!_.isString(sState))
        {
            //console.log(log.invalid("sState"));
            return null;
        }
        //console.info(log.is("sState", sState));

        return sState + sSTATE_RDY;
    }

}

