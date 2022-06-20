/**********************************************************************
 *
 * kw/ctrl/kwCtrlSubMapTs.ts
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
import * as _               from 'lodash';

import {kw}                 from "@kw/kw";
import {kwCtrlSub }         from "@kwCtrl/kwCtrlSub";
import {kwLog }             from "@kw/kwLog";
import {kwPubSub }          from "@kw/pubSub/kwPubSub";
import {kwStArr }           from "@kw/stat/kwStArr";
import {kwState }           from "@kw/class/state/kwState";
import {kwtDataFb }         from "@kwUi/class/dataFb/kwtDataFb";
import {kwUiStMap }         from "@kwUiStat/kwUiStMap";



export abstract class kwUiCtrlSubMap extends kwCtrlSub
{

    private sTopicRdy: string;


    protected constructor(
        src: kwStArr,
        dst: kwUiStMap,
        private sTag: string,
        private pubSub: kwPubSub    )
    {
        super(src, dst);

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }



//@formatter:on

    protected init(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "createMap");
        //console.log(log.called());


        if (!kw.isString(this.sTag))
        {
            console.error(log.invalid("sTag"));
            return false;
        }
        //console.info(log.isObj("sTag"), this.sTag);


        if (!this.createTopicState())
        {
            console.error(log.errCreate("topicState"));
            return false;
        }

        return super.init();
    }

    protected createMap(data: object[]): Map<string, object>
    {
        const log: kwLog = new kwLog(this.sClass, "createMap");
        //console.log(log.called());

        if (!kw.isArray(data))
        {
            console.error(log.invalid("data"));
            return;
        }

        const dataFb: kwtDataFb[] = <kwtDataFb[]>data;

        const theMap = new Map(
            dataFb.map(x => [x.id, x.data] as [string, object])
        );

        //console.info(log.isObj("theMap"), theMap);

        return theMap;
    }

    protected createTopicState(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "createTopicState");
        //console.log(log.called());

        if (!kw.isString(this.sTag))
        {
            console.error(log.invalid("sTag"));
            return false;
        }
        //console.info(log.isObj("sTag"), this.sTag);


        const sTopicMapRdy = kwState.createTopicMapRdy(this.sTag);
        if (!kw.isString(sTopicMapRdy))
        {
            console.error(log.errCreate("sTopicMapRdy"));
            return false;
        }

        //console.info(log.isObj("sTopicMapRdy"), sTopicMapRdy);
        this.sTopicRdy = sTopicMapRdy


        return true;
    }

    protected preLoad(data: any): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "preLoad");
        //console.log(log.called());

        if (!kw.isValid(this.pubSub))
        {
            console.error(log.invalid("pubSub"));
            return false;
        }


        if (!kw.isString(this.sTopicRdy))
        {
            console.error(log.errCreate("sTopicRdy"));
            return false;
        }
        //console.info(log.isObj("sTopicRdy"), this.sTopicRdy);


        if (!kw.isArray(data))
        {
            console.error(log.invalid("data"));
            return false;
        }
        //console.info(log.isObj("data"), data);


        const val: Map<string, object> = this.createMap(data);
        if (!_.isMap(val))
        {
            console.error(log.errCreate("val"));
            return false;
        }
        //console.info(log.isObj("val"), val);


        this.pubSub.pub(this.sTopicRdy, val);

        return this.load(val);
    }

}
