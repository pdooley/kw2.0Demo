/**********************************************************************
 *
 * kw/ctrl/kwCtrlPubSubAll.ts
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
import * as _               from "lodash";

import {kw}                 from "@kw/kw";
import {kwFctyMsg}          from "@kwFcty/msg/kwFctyMsg";
import {kwLog}              from "@kw/kwLog";
import {kwMsg}              from "@kwClass/msg/kwMsg";
import {kwState}            from "@kwClass/state/kwState";
import {kwPubSub}           from "@kw/pubSub/kwPubSub";
import {kwStMsg}            from "@kwStat/kwStMsg";



export abstract class kwCtrlPubSubAll
{

    protected sClass: string = this.constructor.name;


    private sTopicStateAll: string;
    private sTopicStateGet: string;


    protected constructor(
        private fcty: kwFctyMsg,
        private msg: kwStMsg,
        private sTag: string,
        private pubSub: kwPubSub    )
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

//@formatter:on


    protected init(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "init");
        //console.log(log.called());

        if (!kw.isValid(this.fcty))
        {
            console.error(log.invalid("fcty"));
            return false;
        }
        //console.info(log.isObj("fcty"), this.fcty);


        if (!kw.isValid(this.msg))
        {
            console.error(log.invalid("msg"));
            return false;
        }
        //console.info(log.isObj("msg"), this.msg);


        if (!kw.isValid(this.pubSub))
        {
            console.error(log.invalid("pubSub"));
            return false;
        }
        //console.info(log.isObj("pubSub"), this.pubSub);


        if (!kw.isString(this.sTag))
        {
            console.error(log.invalid("sTag"));
            return false;
        }
        //console.info(log.is("sTag", this.sTag));

        if (!this.createTopics())
        {
            console.error(log.errCreate("topics"));
            return false;
        }

        return this.sub();
    }


    protected destroy(): void
    {
        const log: kwLog = new kwLog(this.sClass, "destroy");
        //console.log(log.called());

        this.unSub();
    }


    private all(sTopic: string, fltr: any): void
    {
        const log: kwLog = new kwLog(this.sClass, "all");
        //console.log(log.called());


        if(!kw.isString(sTopic))
        {
            console.error(log.invalid("sTopic"));
            return;
        }


        //console.info(log.isObj(sTopic), {});


        if(!kw.isValid(this.fcty))
        {
            console.error(log.invalid("fcty"));
            return;
        }


        if(!kw.isValid(this.msg))
        {
            console.error(log.invalid("msg"));
            return;
        }


        const msg: kwMsg = this.fcty.all(fltr);


        this.msg.set(msg);
    }


    private createTopics(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "createTopics");
        //console.log(log.called());

        if(!kw.isString(this.sTag))
        {
            console.error(log.invalid("sTag"));
            return false;
        }
        //console.info(log.is("sTag", this.sTag));


        this.sTopicStateAll = kwState.createTopicAll(this.sTag);
        if(!kw.isString(this.sTopicStateAll))
        {
            console.error(log.errCreate("sTopicStateAll"));
            return false;
        }
        //console.info(log.is("sTopicStateAll", this.sTopicStateAll));


        this.sTopicStateGet = kwState.createTopicGet(this.sTag);
        if(!kw.isString(this.sTopicStateGet))
        {
            console.error(log.errCreate("sTopicStateGet"));
            return false;
        }
        //console.info(log.is("sTopicStateGet", this.sTopicStateGet));


        return true;
    }


    private get(sTopic: string, fltr: any): void
    {
        const log: kwLog = new kwLog(this.sClass, "get");
        //console.log(log.called());


        if(!kw.isString(sTopic))
        {
            console.error(log.invalid("sTopic"));
            return;
        }


        if(!kw.isValid(fltr))
        {
            console.error(log.invalid("fltr"));
            return;
        }


        //console.info(log.isObj("sTopic"), fltr);


        if(!kw.isValid(this.fcty))
        {
            console.error(log.invalid("fcty"));
            return;
        }


        if(!kw.isValid(this.msg))
        {
            console.error(log.invalid("msg"));
            return;
        }


        const msg: kwMsg = this.fcty.get(fltr);


        this.msg.set(msg);
    }


    protected sub(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "sub");
        //console.log(log.called());


        if (!kw.isValid(this.pubSub))
        {
            console.error(log.invalid("pubSub"));
            return false;
        }
        //console.info(log.isObj("pubSub"), this.pubSub);

        if(!kw.isString(this.sTopicStateAll))
        {
            console.error(log.errCreate("sTopicStateAll"));
            return;
        }

        if(!kw.isString(this.sTopicStateGet))
        {
            console.error(log.errCreate("sTopicStateGet"));
            return;
        }


        this.pubSub.sub(this.sTopicStateAll, this.all,  this);
        this.pubSub.sub(this.sTopicStateGet, this.get,  this);

        return true;
    }



    protected unSub(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "unSub");
        //console.log(log.called());


        if (!kw.isValid(this.pubSub))
        {
            console.error(log.invalid("pubSub"));
            return false;
        }
        //console.info(log.isObj("pubSub"), this.pubSub);


        if(!kw.isString(this.sTopicStateAll))
        {
            console.error(log.errCreate("sTopicStateAll"));
            return;
        }


        if(!kw.isString(this.sTopicStateGet))
        {
            console.error(log.errCreate("sTopicStateGet"));
            return;
        }


        this.pubSub.unSub(this.sTopicStateAll, this.all,  this);
        this.pubSub.unSub(this.sTopicStateGet, this.get,  this);


        return true;
    }


}
