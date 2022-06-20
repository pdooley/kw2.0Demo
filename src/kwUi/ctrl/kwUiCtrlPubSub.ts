/**********************************************************************
 *
 * kw/ctrl/kwCtrlPubSubMulti.ts
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
import {kwStArr}            from "@kwStat/kwStArr";
import {kwState}            from "@kwClass/state/kwState";
import {kwPubSub}           from "@kw/pubSub/kwPubSub";



export abstract class kwUiCtrlPubSub
{

    protected sClass: string = this.constructor.name;



    private topicsStateAll:         string[];
    private topicsStateRdy:         string[];

    private sTopicStateMainAll:     string;
    private sTopicStateMainRdy:     string;
    private sTopicStateTagAll:      string;
    private sTopicStateTagRdy:      string;



    protected constructor(
        private dst: kwStArr,
        private sTag: string,
        private sMain: string,
        private maps: string[],
        protected pubSub: kwPubSub    )
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }


    protected abstract loadTables(sTopic: string, data: any): any;


//@formatter:on

    protected init(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "init");
        //console.log(log.called());


        if (!kw.isValid(this.dst))
        {
            console.error(log.invalid("dst"));
            return false;
        }
        //console.inf(log.isObj("dst"), this.dst);


        if (!kw.isString(this.sMain))
        {
            console.error(log.invalid("sMain"));
            return false;
        }
        //console.inf(log.isObj("sMain"), this.sMain);


        if (!kw.isString(this.sTag))
        {
            console.error(log.invalid("sTag"));
            return false;
        }
        //console.inf(log.isObj("sTag"), this.sTag);


        if (!kw.isValid(this.pubSub))
        {
            console.error(log.invalid("pubSub"));
            return false;
        }
        //console.inf(log.isObj("pubSub"), this.pubSub);


        if (!kw.isArray(this.maps))
        {
            console.error(log.invalid("maps"));
            return false;
        }
        //console.inf(log.isObj("maps"), this.maps);


        if (!this.createTopics())
        {
            console.error(log.errCreate("topics"));
            return false;
        }


        return this.subTagAll();
    }


    protected destroy(): void
    {
        const log: kwLog = new kwLog(this.sClass, "destroy");
        //console.log(log.called());

        this.unSub();
    }


    private createTopics(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "createTopics");
        //console.log(log.called());


        if (!this.createTopicsAll())
        {
            console.error(log.errCreate("topicsStateAll"));
            return false;
        }

        if (!this.createTopicsRdy())
        {
            console.error(log.errCreate("topicsStateRdy"));
            return false;
        }

        return true;
    }


    private createTopicsAll(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "createTopicsAll");
        //console.log(log.called());


        if(!kw.isArray(this.maps))
        {
            console.error(log.invalid("maps"));
            return false;
        }
        //console.inf(log.isObj("maps"), this.maps);


        if (!kw.isString(this.sMain))
        {
            console.error(log.invalid("sMain"));
            return false;
        }
        //console.inf(log.isObj("sMain"), this.sMain);


        const sTopicTagAll = kwState.createTopicAll(this.sTag);
        if (!kw.isString(sTopicTagAll))
        {
            console.error(log.invalid("sTopicTagAll"));
            return false;
        }
        //console.inf(log.isObj("sTopicTagAll"), sTopicTagAll);
        this.sTopicStateTagAll = sTopicTagAll;


        const sTopicMainAll = kwState.createTopicAll(this.sMain);
        if (!kw.isString(sTopicMainAll))
        {
            console.error(log.invalid("sTopicMainAll"));
            return false;
        }
        //console.inf(log.isObj("sTopicMainAll"), sTopicMainAll);
        this.sTopicStateMainAll = sTopicMainAll;


        this.topicsStateAll = [];

        let that = this;

        _.forEach(this.maps, function (src, i)
        {
            if (!kw.isString(src))
            {
                console.error(log.invalid("src"));
                return;
            }
            //console.inf(log.isObj("src"), src);

            const sTopicAll = kwState.createTopicAll(src + "s");
            if (!kw.isString(sTopicAll))
            {
                console.error(log.invalid("sTopicAll"));
                return;
            }
            //console.inf(log.isObj("sTopicAll"), sTopicAll);

            that.topicsStateAll.push(sTopicAll);
        });

        //console.inf(log.isObj("topicsStateAll"), this.topicsStateAll);


        return true;
    }


    private createTopicsRdy(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "createTopicsRdy");
        //console.log(log.called());

        if(!kw.isArray(this.maps))
        {
            console.error(log.invalid("maps"));
            return false;
        }
        //console.inf(log.isObj("maps"), this.maps);


        if (!kw.isString(this.sMain))
        {
            console.error(log.invalid("sMain"));
            return false;
        }
        //console.inf(log.isObj("sMain"), this.sMain);


        if (!kw.isString(this.sTag))
        {
            console.error(log.invalid("sTag"));
            return false;
        }
        //console.inf(log.isObj("sTag"), this.sTag);


        const sTopicMainRdy = kwState.createTopicRdy(this.sMain);
        if (!kw.isString(sTopicMainRdy))
        {
            console.error(log.invalid("sTopicMainRdy"));
            return false;
        }
        //console.inf(log.isObj("sTopicMainRdy"), sTopicMainRdy);
        this.sTopicStateMainRdy = sTopicMainRdy;


        const sTopicTagRdy = kwState.createTopicRdy(this.sTag);
        if (!kw.isString(sTopicMainRdy))
        {
            console.error(log.invalid("sTopicTagRdy"));
            return false;
        }
        //console.inf(log.isObj("sTopicTagRdy"), sTopicTagRdy);
        this.sTopicStateTagRdy = sTopicTagRdy;

        
        this.topicsStateRdy = [];

        let that = this;

        _.forEach(this.maps, function (src, i)
        {
            if (!kw.isString(src))
            {
                console.error(log.invalid("src"));
                return;
            }
            //console.inf(log.isObj("src"), src);

            const sTopicRdy = kwState.createTopicMapRdy(src);
            if (!kw.isString(sTopicRdy))
            {
                console.error(log.invalid("sTopicRdy"));
                return;
            }
            //console.inf(log.isObj("sTopicRdy"), sTopicRdy);
            that.topicsStateRdy.push(sTopicRdy);
        });

        //console.inf(log.isObj("sTopicRdy"), this.topicsStateRdy);

        return true;
    }


    private loadMaps(sTopic: string): void
    {
        const log: kwLog = new kwLog(this.sClass, "loadMaps");
        //console.log(log.called());

        if(!kw.isString(sTopic))
        {
            console.error(log.invalid("sTopic"));
            return;
        }
        //console.inf(log.isObj("sTopic"), {});


        if(!kw.isValid(this.pubSub))
        {
            console.error(log.invalid("pubSub"));
            return;
        }
        //console.inf(log.isObj("pubSub"), this.pubSub);


        if(!kw.isArray(this.topicsStateAll))
        {
            console.error(log.invalid("topicsStateAll"));
            return;
        }

        const that = this;

        _.forEach(this.topicsStateAll, function (topic, i)
        {
            //console.inf(log.isObj("topic"), topic);
            //console.inf(log.isObj("i"), i);

            that.pubSub.pub(sTopic);
        });

    }



    private load(sTopic: string, data: any): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "load");
        //console.log(log.called());


        if (!kw.isString(sTopic))
        {
            console.error(log.invalid("sTopic"));
            return false;
        }
        //console.inf(log.isObj(sTopic), data);


        if (!kw.isValid(this.pubSub))
        {
            console.error(log.invalid("pubSub"));
            return false;
        }
        //console.inf(log.isObj("pubSub"), this.pubSub);


        if (!kw.isString(this.sTopicStateMainAll))
        {
            console.error(log.invalid("sTopicStateMainAll"));
            return false;
        }
        //console.inf(log.isObj("sTopicStateMainAll"), this.sTopicStateMainAll);


        if (!kw.isArray(this.topicsStateAll))
        {
            console.error(log.invalid("topicsStateAll"));
            return false;
        }
        //console.inf(log.isObj("topicsStateAll"), this.topicsStateAll);

        if (!this.subRdy())
        {
            console.error(log.info("unable to subscribe to Rdy"));
            return false;
        }

        this.pubSub.pub(this.sTopicStateMainAll);

        const that = this;

        _.forEach(this.topicsStateAll, function (sTopic, i)
        {
            //console.inf(log.isObj("sTopic"), sTopic);
            that.pubSub.pub(sTopic);
        });

        return true;
    }


    protected subRdy(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "subRdy");
        //console.log(log.called());


        if (!kw.isValid(this.pubSub))
        {
            console.error(log.invalid("pubSub"));
            return false;
        }


        if (!kw.isString(this.sTopicStateMainRdy))
        {
            console.error(log.invalid("sTopicStateMainRdy"));
            return false;
        }
        //console.inf(log.isObj("sTopicStateMainRdy"), this.sTopicStateMainRdy);


        if (!kw.isArray(this.topicsStateRdy))
        {
            console.error(log.invalid("topicsStateRdy"));
            return false;
        }
        //console.inf(log.isObj("topicsStateRdy"), this.topicsStateRdy);


        this.pubSub.sub(this.sTopicStateMainRdy, this.loadTables, this);

        const that = this;

        _.forEach(this.topicsStateRdy, function (sTopic, i)
        {
            //console.inf(log.isObj("sTopic"), sTopic);
            that.pubSub.sub(sTopic, that.loadTables, that);
        });


        return true;
    }


    protected subTagAll(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "subTagAll");
        //console.log(log.called());


        if (!kw.isValid(this.pubSub))
        {
            console.error(log.invalid("pubSub"));
            return false;
        }
        //console.inf(log.isObj("pubSub"), this.pubSub);


        if(!kw.isString(this.sTopicStateTagAll))
        {
            console.error(log.errCreate("sTopicStateTagAll"));
            return;
        }
        //console.inf(log.isObj("sTopicStateTagAll"), this.sTopicStateTagAll);


        this.pubSub.sub(this.sTopicStateTagAll, this.load, this);

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
        //console.inf(log.isObj("pubSub"), this.pubSub);


        if (!kw.isArray(this.topicsStateRdy))
        {
            console.error(log.invalid("topicsStateRdy"));
            return false;
        }
        //console.inf(log.isObj("topicsStateRdy"), this.topicsStateRdy);


        if(!kw.isString(this.sTopicStateMainRdy))
        {
            console.error(log.errCreate("sTopicStateMainRdy"));
            return;
        }
        //console.inf(log.isObj("sTopicStateMainRdy"), this.sTopicStateMainRdy);


        this.pubSub.unSub(this.sTopicStateMainRdy, this.load,  this);


        const that = this;


        _.forEach(this.topicsStateRdy, function (sTopic, i)
        {
            //console.inf(log.isObj("sTopic"), sTopic);
            that.pubSub.unSub(sTopic, that.loadTables, that);
        });

        return true;
    }


    protected store(data: any): void
    {
        const log: kwLog = new kwLog(this.sClass, "store");
        //console.log(log.called());


        if (!kw.isValid(this.pubSub))
        {
            console.error(log.invalid("pubSub"));
            return;
        }
        //console.inf(log.isObj("pubSub"), this.pubSub);


        if(!kw.isString(this.sTopicStateTagRdy))
        {
            console.error(log.errCreate("sTopicStateTagRdy"));
            return;
        }
        //console.inf(log.isObj("sTopicStateTagRdy"), this.sTopicStateTagRdy);


        if (!kw.isValid(this.dst))
        {
            console.error(log.invalid("dst"));
            return;
        }
        //console.inf(log.isObj("dst"), this.dst);


        if (!kw.isValid(data))
        {
            console.error(log.invalid("data"));
            return;
        }
        //console.inf(log.isObj("data"), data);


        this.dst.set(data);

        this.pubSub.pub(this.sTopicStateTagRdy, data);
    }


    protected toRec(
        row: object,
        map: Map<string, object>,
        sParam: string ): object
    {
        const log: kwLog = new kwLog(this.sClass, "toRec");
        //console.log(log.called());


        if (!kw.isValid(row))
        {
            console.error(log.invalid("row"));
            return null;
        }
        //console.inf(log.isObj("row"), row);


        if (!kw.isValid(map))
        {
            console.error(log.invalid("map"));
            return null
        }
        //console.inf(log.isObj("map"), map);


        if (!_.isString(sParam))
        {
            console.error(log.invalid("sParam"));
            return null;
        }
        //console.inf(log.isObj("sParam"), sParam);


        const data = row["data"];
        if (!kw.isValid(data))
        {
            console.error(log.invalid("data"));
            return null
        }
        //console.inf(log.isObj("data"), data);


        const sRef = data[sParam];
        if (!_.isString(sRef))
        {
            console.error(log.invalid("sRef"));
            return null;
        }
        //console.inf(log.isObj("sRef"), sRef);


        const val = map.get(sRef);
        if (!kw.isValid(val))
        {
            console.error(log.invalid("val"));
            return null;
        }
        //console.inf(log.isObj("val"), val);

        return val;
    }

    protected toString(
        row: object,
        map: object,
        sId: string,
        sParams: string[] ): string
    {
        const log: kwLog = new kwLog(this.sClass, "toString");
        //console.log(log.called());


        if (!kw.isValid(row))
        {
            console.error(log.invalid("row"));
            return "Unknown Id - row invalid";
        }
        //console.inf(log.isObj("row"), row);


        if (!kw.isValid(map))
        {
            console.error(log.invalid("map"));
            return "Unknown Id - map invalid";
        }
        //console.inf(log.isObj("map"), map);


        if (!_.isString(sId))
        {
            console.error(log.invalid("sId"));
            return "unknown id - sId invalid";
        }
        //console.inf(log.isObj("sId"), sId);


        if (!_.isArray(sParams))
        {
            console.error(log.invalid("sParams"));
            return "unknown id - sParams invalid";
        }
        //console.inf(log.isObj("sParams"), sParams);


        const nId = row["data"][sId];
        if (!_.isNumber(nId))
        {
            console.error(log.invalid("nId"));
            return "Unknown Id[" + sParams + "]";
        }
        //console.inf(log.isObj("nId"), nId);


        const val = map[nId];
        if (!kw.isValid(val))
        {
            console.error(log.invalid("val"));
            return "Unknown Id[" + nId + "]";
        }
        //console.inf(log.isObj("val"), val);


        const wrap = val[1];
        if (!kw.isValid(wrap))
        {
            console.error(log.invalid("wrap"));
            return "Unknown Id[" + nId + "]";
        }
        //console.inf(log.isObj("wrap"), wrap);


        const data = wrap.data;
        if (!kw.isValid(data))
        {
            console.error(log.invalid("data"));
            return "Unknown Id[" + nId + "]";
        }
        //console.inf(log.isObj("data"), data);


        let sVals: string = "";

        _.forEach(sParams, function (sParam, i)
        {
            let sVal = data[sParam];
            if (!_.isString(sVal))
            {
                console.error(log.invalid("sVal"));
                sVal = "unknown id[" + sParam + "]";
            }
            //console.inf(log.isObj("sVal"), sVal);

            if (sVals.length > 0)
            {
                sVals += " ";
            }
            sVals += sVal;
        });

        //console.inf(log.isObj("sVals"), sVals);

        return sVals;
    }

}
