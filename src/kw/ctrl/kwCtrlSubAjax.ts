/**********************************************************************
 *
 * kw/ctrl/kwCtrlAjax.ts
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
import {kwCtrlSub}          from "./kwCtrlSub";
import {kwStArr}            from "@kwStat/kwStArr";
import {kwLog}              from "@kw/kwLog";
import {kwMsg}              from "@kwClass/msg/kwMsg";
import {kwPubSub}           from "@kw/pubSub/kwPubSub";
import {kwSrvcLoad}         from "@kwSrvc/load/kwSrvcLoad";
import {kwState}            from "@kwClass/state/kwState";
import {kwStMsg}            from "@kwStat/kwStMsg";



export abstract class kwCtrlSubAjax extends kwCtrlSub
{

    private sTopicStateRdy: string;

    protected constructor(
        src: kwStMsg,
        dst: kwStArr,
        private sTag:       string,
        private srvcLoad:   kwSrvcLoad,
        private pubSub:     kwPubSub    )
    {
        super(src, dst);

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

//@formatter:on

    protected init(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "init");
        //console.log(log.called());


        if (!super.init())
        {
            console.error(log.errInit("this"));
            return false;
        }


        if (!kw.isString(this.sTag))
        {
            console.error(log.invalid("sTag"));
            return false;
        }
        //console.info(log.isObj("sTag"), this.sTag);


        if (!kw.isValid(this.srvcLoad))
        {
            console.error(log.invalid("srvcLoad"));
            return false;
        }
        //console.info(log.isObj("srvcLoad"), this.srvcLoad);


        if (!kw.isValid(this.pubSub))
        {
            console.error(log.invalid("pubSub"));
            return false;
        }
        //console.info(log.isObj("pubSub"), this.pubSub);

        this.createTopicState();

        return true;
    }

    private createTopicState(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "handleAjax");
        //console.log(log.called());


        if (!kw.isString(this.sTag))
        {
            console.error(log.invalid("sTag"));
            return false;
        }
        //console.info(log.isObj("sTag"), this.sTag);


        const sTopicRdy = kwState.createTopicRdy(this.sTag);
        if (!kw.isString(sTopicRdy))
        {
            console.error(log.invalid("sTopicRdy"));
            return false;
        }
        //console.info(log.isObj("sTopicRdy"), sTopicRdy);
        this.sTopicStateRdy = sTopicRdy;

        return true;
    }

    private handleAjax(data: object[]): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "handleAjax");
        //console.log(log.called());

        if (kw.isNull(data))
        {
            //console.info(log.empty("data"));
            return true;
        }

        //console.info(log.isObj("data"), data);

        if (!kw.isString(this.sTopicStateRdy))
        {
            console.error(log.invalid("sTopicStateRdy"));
            return false;
        }
        //console.info(log.isObj("sTopicStateRdy"), this.sTopicStateRdy);


        if (!kw.isValid(this.pubSub))
        {
            console.error(log.invalid("pubSub"));
            return false;
        }
        //console.info(log.isObj("pubSub"), this.pubSub);


        this.load(data);


        this.pubSub.pub(this.sTopicStateRdy, data);

        return true;
    }

    protected preLoad(data: any): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "preLoad");
        //console.log(log.called());

        if (kw.isNull(data))
        {
            console.error(log.invalid("data"));
            return false;
        }
        //console.info(log.isObj("data"), data);


        if (!kw.isValid(this.srvcLoad))
        {
            console.error(log.invalid("srvcLoad"));
            return false;
        }
        //console.info(log.isObj("srvcLoad"), this.srvcLoad);


        const info: kwMsg = <kwMsg>data;
        if (!kwMsg.is(info))
        {
            console.error(log.invalid("info"));
            return false;
        }
        //console.info(log.isObj("info"), info);


        this.srvcLoad.load(info)
            .subscribe( (val) =>
            {
                this.handleAjax(val)
            });

        return true;
    }


}
