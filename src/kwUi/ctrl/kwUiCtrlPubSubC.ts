/**********************************************************************
 *
 * kw/ctrl/kwUiCtrlPubSubC.ts
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
import {kwLog}              from "@kw/kwLog";
import {kwPubSub}           from "@kw/pubSub/kwPubSub";
import {kwStArr}            from "@kwStat/kwStArr";
import {kwState}            from "@kw/class/state/kwState";
import {kwSubStates}        from "@kwUi/class/subStates/kwSubStates";
import {kwtSubState}        from "@kwUi/class/subState/kwtSubState";





export abstract class kwUiCtrlPubSubC
{

    protected sClass: string        = this.constructor.name;


    private states:         kwSubStates;

    private sTopicPub:      string;
    private sTopicSub:      string;

    private _data:          any;

    private bIsSub:         boolean = false;
    private bIsSubMain:     boolean = false;


    protected constructor(
        private     dst:        kwStArr,
        private     sState:     string,
        private     info:       kwtSubState[],
        protected   pubSub:     kwPubSub        )
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }


//@formatter:on


    public init(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "init");
        //console.log(log.called());


        if (!kw.isArray(this.info))
        {
            console.error(log.invalid("info"));
            return false;
        }
        //console.info(log.isObj("info"), this.info);


        if (!kw.isValid(this.pubSub))
        {
            console.error(log.invalid("pubSub"));
            return false;
        }


        if (!this.createStates())
        {
            console.error(log.errCreate("states"));
            return false;
        }


        if (!this.createTopics())
        {
            console.error(log.errCreate("topics"));
            return false;
        }


        if (!this.subMain())
        {
            console.error(log.errCreate("subMain"));
            return false;
        }


        return true;
    }


    protected destroy(): void
    {
        const log: kwLog = new kwLog(this.sClass, "destroy");
        //console.log(log.called());

        this.unSub();
        this.unSubMain();
    }


    private build(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "build");
        //console.log(log.called());


        if(!kw.isValid(this.states))
        {
            console.error(log.invalid("state"));
            return false;
        }
        //console.info(log.isObj("state"), this.states);


        if (!this.states.build())
        {
            console.error(log.errCreate("data"));
            return false
        }


        const data = this.states.data;
        if (!kw.isValid(data))
        {
            console.error(log.invalid("data"));
            return false
        }
        //console.info(log.isObj("data"), data);

        this._data = data;


        return true;
    }


    private createStates(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "createStates");
        //console.log(log.called());


        this.states = new kwSubStates(this.info, this.pubSub);
        if (!this.states.init())
        {
            console.error(log.errCreate("states"));
            return false;
        }
        //console.info(log.isObj("states"), this.states);


        return true;
    }



    private createTopics(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "createTopics");
        //console.log(log.called());


        if (!kw.isString(this.sState))
        {
            console.error(log.invalid("sState"));
            return false;
        }
        //console.info(log.isObj("sState"), this.sState);


        const sTopicSub = kwState.createTopicAll(this.sState);
        if (!kw.isString(sTopicSub))
        {
            console.error(log.invalid("sTopicSub"));
            return false;
        }
        //console.info(log.isObj("sTopicSub"), sTopicSub);
        this.sTopicSub = sTopicSub;


        const sTopicPub = kwState.createTopicRdy(this.sState);
        if (!kw.isString(sTopicPub))
        {
            console.error(log.invalid("sTopicPub"));
            return false;
        }
        //console.info(log.isObj("sTopicPub"), sTopicPub);
        this.sTopicPub = sTopicPub;

        return true;
    }


    private load(sTopic: string, data: any): void
    {
        const log: kwLog = new kwLog(this.sClass, "load");
        //console.log(log.called());

        if(!kw.isString(sTopic))
        {
            console.error(log.invalid("sTopic"));
            return;
        }
        //console.info(log.isObj(sTopic), data);


        if (sTopic === this.sTopicSub)
        {
            this.sub();
            this.pub();
            return;
        }


        if(!kw.isValid(this.states))
        {
            console.error(log.invalid("states"));
            return;
        }
        //console.info(log.isObj("states"), this.states);


        this.states.load(sTopic, data);


        if (!this.states.bIsLoaded)
        {
            //console.info(log.info("not all loaded"));
            return;
        }
        //console.info(log.info("all loaded"));


        this.build();
        this.pubMain();
        this.store();

    }


    private pub(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "pub");
        //console.log(log.called());


        if(!kw.isValid(this.states))
        {
            console.error(log.invalid("state"));
            return false;
        }
        //console.info(log.isObj("state"), this.states);


        return this.states.pub();
    }


    private pubMain(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "pubMain");
        //console.log(log.called());


        if(!kw.isString(this.sTopicPub))
        {
            console.error(log.invalid("sTopicPub"));
            return false;
        }
        //console.info(log.isObj("sTopicPub"), this.sTopicPub);


        if(!kw.isValid(this.pubSub))
        {
            console.error(log.invalid("pubSub"));
            return false;
        }


        if(!kw.isValid(this.states))
        {
            console.error(log.invalid("states"));
            return false;
        }
        //console.info(log.isObj("states"), this.states);


        const data = this.states.data;
        if (!kw.isValid(data))
        {
            console.error(log.invalid("data"));
            return false;
        }
        //console.info(log.isObj(this.sTopicPub), data);


        this.pubSub.pub(this.sTopicPub, data);

        return true;
    }


    private store(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "store");
        //console.log(log.called());


        if(!kw.isValid(this.states))
        {
            console.error(log.invalid("states"));
            return false;
        }
        //console.info(log.isObj("states"), this.states);


        if(!kw.isValid(this.dst))
        {
            console.error(log.invalid("dst"));
            return false;
        }
        //console.info(log.isObj("dst"), this.dst);


        const data = this.states.data;
        if (!kw.isValid(data))
        {
            console.error(log.invalid("data"));
            return false;
        }
        //console.info(log.isObj(this.sTopicPub), data);


        this.dst.set(data);

        return true;
    }


    private sub(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "sub");
        //console.log(log.called());

        if (this.bIsSub)
        {
            //console.info(log.info("already subscribed"))
            return;
        }

        if(!kw.isValid(this.states))
        {
            console.error(log.invalid("state"));
            return false;
        }
        //console.info(log.isObj("state"), this.states);


        if (!this.states.sub(this.load, this))
        {
            console.error(log.errLoad("subs"))
            return false;
        }

        this.bIsSub = true;

        return true
    }


    private subMain(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "subMain");
        //console.log(log.called());

        if (this.bIsSubMain)
        {
            //console.info(log.info("already subscribed to main"));
            return true;
        }


        if(!kw.isString(this.sTopicSub))
        {
            console.error(log.invalid("sTopicSub"));
            return false;
        }
        //console.info(log.isObj("sTopicSub"), this.sTopicSub);


        if(!kw.isValid(this.pubSub))
        {
            console.error(log.invalid("pubSub"));
            return false;
        }


        this.pubSub.sub(this.sTopicSub, this.load, this);

        this.bIsSubMain = true;

        return true;
    }


    private unSub(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "unSub");
        //console.log(log.called());


        if(!kw.isValid(this.states))
        {
            console.error(log.invalid("state"));
            return false;
        }
        //console.info(log.isObj("state"), this.states);


        if(!this.states.unSub(this.load, this))
        {
            console.error(log.info("unalble to unsubscribe"));
            return false;
        }

        this.bIsSub = false;

        return true;
    }


    private unSubMain(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "unSubMain");
        //console.log(log.called());


        if(!kw.isString(this.sTopicSub))
        {
            console.error(log.invalid("sTopicSub"));
            return false;
        }
        //console.info(log.isObj("sTopicSub"), this.sTopicSub);


        if(!kw.isValid(this.pubSub))
        {
            console.error(log.invalid("pubSub"));
            return false;
        }


        this.pubSub.unSub(this.sTopicSub, this.load, this);


        this.bIsSubMain = false;


        return true;
    }


}
