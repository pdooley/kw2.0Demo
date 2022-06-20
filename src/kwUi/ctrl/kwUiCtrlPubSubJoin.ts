/**********************************************************************
 *
 * kwUi/ctrl/kwUICtrlPubSubJoin.ts
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
import {kwState}            from "@kwClass/state/kwState";
import {kwtQuery}           from "@kwClass/query/kwtQuery";



export abstract class kwUiCtrlPubSubJoin
{

    protected sClass: string = this.constructor.name;



    private mainData:               object[];
    private joinData:               object[];

    private sJoin:                  string;
    private sMain:                  string;

    private sTopicStateJoinAll:     string;
    private sTopicStateJoinRdy:     string;

    private sTopicStateMainAll:     string;
    private sTopicStateMainRdy:     string;

    private sTopicStateTagAll:      string;
    private sTopicStateTagRdy:      string;



    protected constructor(
        private dst: kwStArr,
        private sTag: string,
        private sParam: string,
        private main: kwtQuery,
        private join: kwtQuery,
        protected pubSub: kwPubSub    )
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }



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
        //console.info(log.is("dst", this.dst));


        if (!kw.isValid(this.join))
        {
            console.error(log.invalid("join"));
            return false;
        }
        //console.info(log.isObj("join"), this.join);


        if (!kw.isValid(this.main))
        {
            console.error(log.invalid("main"));
            return false;
        }
        //console.info(log.isObj("main"), this.main);


        if (!kw.isString(this.sTag))
        {
            console.error(log.invalid("sTag"));
            return false;
        }
        //console.info(log.is("sTag", this.sTag));


        if (!kw.isValid(this.pubSub))
        {
            console.error(log.invalid("pubSub"));
            return false;
        }
        //console.info(log.isObj("pubSub"), this.pubSub);


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


        if (!kw.isValid(this.join))
        {
            console.error(log.invalid("join"));
            return false;
        }
        //console.info(log.isObj("join"), this.join);


        if (!kw.isValid(this.main))
        {
            console.error(log.invalid("main"));
            return false;
        }
        //console.info(log.isObj("main"), this.main);


        const sJoin = this.join.sState;
        if (!kw.isString(sJoin))
        {
            console.error(log.invalid("sJoin"));
            return false;
        }
        //console.info(log.is("sJoin", sJoin));
        this.sJoin = sJoin;


        const sMain = this.main.sState;
        if (!kw.isString(sMain))
        {
            console.error(log.invalid("sMain"));
            return false;
        }
        //console.info(log.is("sMain", sMain));
        this.sMain = sMain;


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


        if (!kw.isString(this.sJoin))
        {
            console.error(log.invalid("sJoin"));
            return false;
        }
        //console.info(log.is("sJoin", this.sJoin));


        if (!kw.isString(this.sMain))
        {
            console.error(log.invalid("sMain"));
            return false;
        }
        //console.info(log.is("sMain", this.sMain));


        const sTopicTagAll = kwState.createTopicAll(this.sTag);
        if (!kw.isString(sTopicTagAll))
        {
            console.error(log.invalid("sTopicTagAll"));
            return false;
        }
        //console.info(log.is("sTopicTagAll", sTopicTagAll));
        this.sTopicStateTagAll = sTopicTagAll;


        const sTopicJoinAll = kwState.createTopicAll(this.sJoin);
        if (!kw.isString(sTopicJoinAll))
        {
            console.error(log.invalid("sTopicJoinAll"));
            return false;
        }
        //console.info(log.is("sTopicJoinAll", sTopicJoinAll));
        this.sTopicStateJoinAll = sTopicJoinAll;


        const sTopicMainAll = kwState.createTopicAll(this.sMain);
        if (!kw.isString(sTopicMainAll))
        {
            console.error(log.invalid("sTopicMainAll"));
            return false;
        }
        //console.info(log.is("sTopicMainAll", sTopicMainAll));
        this.sTopicStateMainAll = sTopicMainAll;


        return true;
    }


    private createTopicsRdy(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "createTopicsRdy");
        //console.log(log.called());


        if (!kw.isString(this.sJoin))
        {
            console.error(log.invalid("sJoin"));
            return false;
        }
        //console.info(log.is("sJoin", this.sJoin));


        if (!kw.isString(this.sMain))
        {
            console.error(log.invalid("sMain"));
            return false;
        }
        //console.info(log.is("sMain", this.sMain));


        if (!kw.isString(this.sTag))
        {
            console.error(log.invalid("sTag"));
            return false;
        }
        //console.info(log.is("sTag", this.sTag));



        const sTopicJoinRdy = kwState.createTopicRdy(this.sJoin);
        if (!kw.isString(sTopicJoinRdy))
        {
            console.error(log.invalid("sTopicJoinRdy"));
            return false;
        }
        //console.info(log.is("sTopicJoinRdy", sTopicJoinRdy));
        this.sTopicStateJoinRdy = sTopicJoinRdy;


        const sTopicMainRdy = kwState.createTopicRdy(this.sMain);
        if (!kw.isString(sTopicMainRdy))
        {
            console.error(log.invalid("sTopicMainRdy"));
            return false;
        }
        //console.info(log.is("sTopicMainRdy", sTopicMainRdy));
        this.sTopicStateMainRdy = sTopicMainRdy;


        const sTopicTagRdy = kwState.createTopicRdy(this.sTag);
        if (!kw.isString(sTopicMainRdy))
        {
            console.error(log.invalid("sTopicTagRdy"));
            return false;
        }
        //console.info(log.is("sTopicTagRdy", sTopicTagRdy));
        this.sTopicStateTagRdy = sTopicTagRdy;

        
        return true;
    }


    protected loadTables(sTopic: string, dataIn: any): any
    {
        const log: kwLog = new kwLog(this.sClass, "loadTables");
        //console.log(log.called());


        if (!kw.isString(sTopic))
        {
            console.error(log.invalid("sTopic"));
            return;
        }


        if (!kw.isValid(dataIn))
        {
            console.error(log.invalid("dataIn"));
            return;
        }

        //console.info(log.isObj(sTopic), dataIn);


        if (!kw.isString(this.sJoin))
        {
            console.error(log.invalid("sJoin"));
            return;
        }
        //console.info(log.isObj("sJoin"), this.sJoin);



        if (!kw.isString(this.sMain))
        {
            console.error(log.invalid("sMain"));
            return;
        }
        //console.info(log.isObj("sMain"), this.sMain);


        if (!kw.isValid(this.pubSub))
        {
            console.error(log.invalid("pubSub"));
            return;
        }
        //console.info(log.isObj("pubSub"), this.pubSub);


        if(_.startsWith(sTopic, this.sMain))
        {
            this.mainData = dataIn;
            //console.info(log.isObj(this.sMain), this.mainData);
        }


        else if(_.startsWith(sTopic, this.sJoin))
        {
            this.joinData = dataIn;
            //console.info(log.isObj(this.sJoin), this.joinData);
        }


        else
        {
            console.error(log.invalid(sTopic));
            return;
        }


        if (!kw.isValid(this.mainData) ||
            !kw.isValid(this.joinData)  )
        {

            //console.info(log.info("not ready"));
            return
        }

        //console.info(log.info("all ready"));
        //console.info(log.isObj(this.sMain), this.mainData);
        //console.info(log.isObj(this.sJoin), this.joinData);


        const that = this;


        let dataOut = [];


        _.forEach(this.mainData, function (row, i)
        {
            if (!kw.isValid(row))
            {
                console.error(log.invalid("row"));
                return;
            }
            //console.info(log.isObj("row"), row);


            const joins = that.retrieveJoins(row);
            if (!kw.isArray(joins))
            {
                console.error(log.invalid("joins"));
                return;
            }
            //console.info(log.isObj("joins"), joins);


            let rowMod = {};
            rowMod[that.sJoin] = joins;

            let rowNew = _.merge(row, rowMod);
            //console.info(log.isObj("rowNew"), rowNew);


            dataOut.push(rowNew);

        });

        //console.info(log.isObj("dataOut"), dataOut);

        this.store(dataOut);
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
        //console.info(log.isObj(sTopic), data);


        if (!kw.isValid(this.pubSub))
        {
            console.error(log.invalid("pubSub"));
            return false;
        }
        //console.info(log.isObj("pubSub"), this.pubSub);


        if (!kw.isString(this.sTopicStateJoinAll))
        {
            console.error(log.invalid("sTopicStateJoinAll"));
            return false;
        }
        //console.info(log.isObj("sTopicStateJoinAll"), this.sTopicStateJoinAll);


        if (!kw.isString(this.sTopicStateMainAll))
        {
            console.error(log.invalid("sTopicStateMainAll"));
            return false;
        }
        //console.info(log.isObj("sTopicStateMainAll"), this.sTopicStateMainAll);


        if (!this.subRdy())
        {
            console.error(log.info("unable to subscribe to Rdy"));
            return false;
        }


        this.pubSub.pub(this.sTopicStateJoinAll);
        this.pubSub.pub(this.sTopicStateMainAll);


        return true;
    }


    protected retrieveJoins(row: object): object[]
    {
        const log: kwLog = new kwLog(this.sClass, "retrieveJoins");
        //console.log(log.called());


        if (!kw.isValid(row))
        {
            console.error(log.invalid("row"));
            return;
        }
        //console.info(log.isObj("row"), row);


        if (!kw.isValid(this.joinData))
        {
            console.error(log.invalid("row"));
            return;
        }
        //console.info(log.isObj("row"), row);


        if (!kw.isString(this.sParam))
        {
            console.error(log.invalid("sParam"));
            return;
        }
        //console.info(log.isObj("sParam"), this.sParam);


        const joins = [];


        const sMainVal = row["id"];
        if (!kw.isString(sMainVal))
        {
            console.error(log.invalid("sMainVal"));
            return;
        }
        //console.info(log.isObj("sMainVal"), sMainVal);


        const that = this;


        _.forEach(this.joinData, function(rec, i)
        {
            if (!kw.isValid(rec))
            {
                console.error(log.invalid("rec"));
                return;
            }
            //console.info(log.isObj("rec"), rec);


            const data = rec["data"]
            if (!kw.isValid(data))
            {
                console.error(log.invalid("data"));
                return;
            }
            //console.info(log.isObj("data"), data);



            const sJoinVal = data[that.sParam];
            if (!kw.isString(sJoinVal))
            {
                console.error(log.invalid("sJoinVal"));
                return;
            }
            //console.info(log.isObj("sJoinVal"), sJoinVal);

            if (sMainVal === sJoinVal)
            {
                joins.push(rec);
            }
        });

        //console.info(log.isObj("joins"), joins);

        return joins;
    };


    protected subRdy(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "subRdy");
        //console.log(log.called());


        if (!kw.isValid(this.pubSub))
        {
            console.error(log.invalid("pubSub"));
            return false;
        }
        //console.info(log.isObj("pubSub"), this.pubSub);


        if (!kw.isString(this.sTopicStateJoinRdy))
        {
            console.error(log.invalid("sTopicStateJoinRdy"));
            return false;
        }
        //console.info(log.isObj("sTopicStateJoinRdy"), this.sTopicStateJoinRdy);


        if (!kw.isString(this.sTopicStateMainRdy))
        {
            console.error(log.invalid("sTopicStateMainRdy"));
            return false;
        }
        //console.info(log.isObj("sTopicStateMainRdy"), this.sTopicStateMainRdy);


        this.pubSub.sub(this.sTopicStateJoinRdy, this.loadTables, this);
        this.pubSub.sub(this.sTopicStateMainRdy, this.loadTables, this);


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
        //console.info(log.isObj("pubSub"), this.pubSub);


        if(!kw.isString(this.sTopicStateTagAll))
        {
            console.error(log.errCreate("sTopicStateTagAll"));
            return;
        }
        //console.info(log.isObj("sTopicStateTagAll"), this.sTopicStateTagAll);


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
        //console.info(log.isObj("pubSub"), this.pubSub);



        if(!kw.isString(this.sTopicStateJoinRdy))
        {
            console.error(log.errCreate("sTopicStateJoinRdy"));
            return;
        }
        //console.info(log.isObj("sTopicStateJoinRdy"), this.sTopicStateJoinRdy);



        if(!kw.isString(this.sTopicStateMainRdy))
        {
            console.error(log.errCreate("sTopicStateMainRdy"));
            return;
        }
        //console.info(log.isObj("sTopicStateMainRdy"), this.sTopicStateMainRdy);


        this.pubSub.unSub(this.sTopicStateJoinRdy, this.load,  this);
        this.pubSub.unSub(this.sTopicStateMainRdy, this.load,  this);


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
        //console.info(log.isObj("pubSub"), this.pubSub);


        if(!kw.isString(this.sTopicStateTagRdy))
        {
            console.error(log.errCreate("sTopicStateTagRdy"));
            return;
        }
        //console.info(log.isObj("sTopicStateTagRdy"), this.sTopicStateTagRdy);


        if (!kw.isValid(this.dst))
        {
            console.error(log.invalid("dst"));
            return;
        }
        //console.info(log.isObj("dst"), this.dst);


        if (!kw.isValid(data))
        {
            console.error(log.invalid("data"));
            return;
        }
        //console.info(log.isObj("data"), data);


        this.dst.set(data);

        this.pubSub.pub(this.sTopicStateTagRdy, data);
    }

}
