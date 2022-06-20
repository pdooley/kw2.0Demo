/**********************************************************************
 *
 * kwUi/ctrl/kwUiCtrlPagePubSub.ts
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
import {Subject}                from "rxjs";
import {takeUntil}              from "rxjs/operators";

import {kw}                     from "@kw/kw"
import {kwLog}                  from "@kw/kwLog";
import {kwPubSub}               from "@kw/pubSub/kwPubSub";
import {kwState}                from "@kwClass/state/kwState";
import {kwStArr}                from "@kwStat/kwStArr";
import {kwStObj}                from "@kwStat/kwStObj";
import {kwUiCtrlPage}           from "./kwUiCtrlPage";
import {kwUiStInit}             from "@kwUiStat/kwUiStInit";
import {kwUiStView}             from "@kwUiStat/kwUiStView";



const sID: string = "id";


export abstract class kwUiCtrlPagePubSub extends kwUiCtrlPage
{

    private sTopicStateAll: string;
    private sTopicStateRdy: string;



    protected constructor(
        srvcAttrs: kwStArr,
        srvcDisp: kwStObj,
        srvcInit: kwUiStInit,
        srvcView: kwUiStView,
        private srvcData: kwStArr,
        private sState: string,
        private pubSub: kwPubSub)
    {
        super(
            srvcAttrs,
            srvcDisp,
            srvcInit,
            srvcView);

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }



//@formatter:on


    protected init(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "init");
        //console.log(log.called());

        if (!kw.isString(this.sState))
        {
            console.error(log.invalid("sState"));
            return false;
        }

        if (kw.isNull(this.pubSub))
        {
            console.error(log.invalid("pubSub"));
            return false;
        }

        if(!this.createTopics())
        {
            console.error(log.errCreate("topics"));
            return false;
        }

        if(!this.subscribeData())
        {
            console.error(log.errCreate("sub"));
            return false;
        }

        this.initiateLoad();

        this.subscribeData();

        return super.init();
    }

    protected destroy(): void
    {
        const log: kwLog = new kwLog(this.sClass, "destroy");
        //console.log(log.called());

        super.destroy();
    }

    protected navigate(sLink: string): void
    {
        const log: kwLog = new kwLog(this.sClass, "navigate");
        //console.log(log.called());
    }

    protected publish($event: object): void
    {
        const log: kwLog = new kwLog(this.sClass, "publish");
        //console.log(log.called());
    }

    protected parseView($event: object): void
    {
        const log: kwLog = new kwLog(this.sClass, "parseView");
        //console.log(log.called());


    }


    private createTopics(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "createTopics");
        //console.log(log.called());

        if(!kw.isString(this.sState))
        {
            console.error(log.invalid("sState"));
            return false;
        }
        //console.info(log.is("sState", this.sState));


        const sTopicAll = kwState.createTopicAll(this.sState);
        if(!kw.isString(sTopicAll))
        {
            console.error(log.errCreate("sTopicAll"));
            return false;
        }
        //console.info(log.is("sTopicAll", sTopicAll));
        this.sTopicStateAll = sTopicAll;


        const sTopicRdy = kwState.createTopicRdy(this.sState);
        if(!kw.isString(sTopicRdy))
        {
            console.error(log.errCreate("sTopicRdy"));
            return false;
        }
        //console.info(log.is("sTopicRdy", sTopicRdy));
        this.sTopicStateRdy = sTopicRdy;

        return true;
    }


    protected initiateLoad()
    {
        const log: kwLog = new kwLog(this.sClass, "initiateLoad");
        //console.log(log.called());


        if (kw.isNull(this.pubSub))
        {
            console.error(log.invalid("pubSub"));
            return false;
        }


        if(!kw.isString(this.sTopicStateAll))
        {
            console.error(log.invalid("sTopicStateAll"));
            return false;
        }
        //console.info(log.is("sTopicStateAll", this.sTopicStateAll);

        this.pubSub.pub(this.sTopicStateAll);
    }

    protected load(sTopic: string, data: any)
    {
        const log: kwLog = new kwLog(this.sClass, "load");
        //console.log(log.called());

        if(!kw.isString(sTopic))
        {
            console.error(log.invalid("sTopic"));
            return false;
        }
        //console.info(log.isObj(sTopic), data);

        this.updateElmt(data)
    }

    protected subscribeData(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "subscribeData");
        //console.log(log.called());

        if (this.bSubData)
        {
            return true;
        }

        if (kw.isNull(this.pubSub))
        {
            console.error(log.invalid("pubSub"));
            return false;
        }

        if(!kw.isString(this.sTopicStateRdy))
        {
            console.error(log.errCreate("sTopicStateRdy"));
            return false;
        }
        //console.info(log.is("sTopicStateRdy", this.sTopicStateRdy));


        this.pubSub.sub(this.sTopicStateRdy, this.load, this);

        this.bSubData = true;

        return true;
    }

    protected unSubscribeData(): void
    {
        const log: kwLog = new kwLog(this.sClass, "unSubscribeData");
        //console.log(log.called());

        if (kw.isNull(this.pubSub))
        {
            console.error(log.invalid("pubSub"));
            return;
        }

        if(!kw.isString(this.sTopicStateRdy))
        {
            console.error(log.errCreate("sTopicStateRdy"));
            return;
        }
        //console.info(log.is("sTopicStateRdy", this.sTopicStateRdy));


        this.pubSub.unSub(this.sTopicStateRdy, this.load, this);

        this.bSubData = false;
    }

}
