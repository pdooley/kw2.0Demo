/**********************************************************************
 *
 * kwUi/class/subStates/kwSubStates.ts
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
import {kweSubState}        from "@kwUi/class/subState/kweSubState";
import {kwFctySubState}     from "@kwUi/fcty/subState/kwFctySubState";
import {kwLog}              from "@kw/kwLog";
import {kwPubSub}           from "@kw/pubSub/kwPubSub";
import {kwSubState}         from "@kwUi/class/subState/kwSubState";
import {kwtSubState}        from "@kwUi/class/subState/kwtSubState";


//@formatter:on

export class kwSubStates
{
    protected sClass: string = this.constructor.name;

    private base:       kwSubState;
    private states:     kwSubState[];

    private _bIsLoaded: boolean = false;

    private _data:      any;


    constructor(
        private     info:       kwtSubState[],
        protected   pubSub:     kwPubSub        )
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }


    get bIsLoaded():    boolean {return this._bIsLoaded;}
    get data():         boolean {return this._data;}


    public init(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "init");
        //console.log(log.called());


        if (!kw.isValid(this.info))
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

        this.setIsLoaded(false);

        return true;
    }


    public build(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "load");
        //console.log(log.called());


        if(!kw.isValid(this.base))
        {
            console.error(log.invalid("base"));
            return false;
        }
        //console.info(log.isObj("base"), this.base);


        let data = this.base.data;
        if(!kw.isValid(data))
        {
            console.error(log.invalid("data"));
            return false;
        }
        //console.log(log.isObj("data"), data);

        const that = this;


        _.forEach(data, function (row, i)
        {
            if (!kw.isValid(row))
            {
                console.error(log.invalid("row"));
                return false;
            }
            //console.info(log.isObj("row"), row);


            if (!that.buildRow(row))
            {
                console.error(log.errLoad("row"));
                return false;
            }

        });

        //console.log(log.isObj("data"), data);
        this._data = data;


        return true;
    }


    private buildRow(row: object): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "buildRow");
        //console.log(log.called());


        if(!kw.isValid(row))
        {
            console.error(log.invalid("row"));
            return false;
        }
        //console.info(log.isObj("row"), row);


        if(!kw.isArray(this.states))
        {
            console.error(log.invalid("states"));
            return false;
        }
        //console.info(log.isObj("states"), this.states);


        _.forEach(this.states, function (state, i)
        {
            if (!kw.isValid(state))
            {
                console.error(log.invalid("state"));
                return false;
            }
            //console.info(log.isObj("state"), state);


            if (!state.build(row))
            {
                console.error(log.errLoad("row"));
                return false;
            }

        });

        //console.info(log.isObj("row"), row);

        return true;
    }


    private chkIsLoaded(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "chkIsLoaded");
        //console.log(log.called());


        if(!kw.isValid(this.base))
        {
            console.error(log.invalid("base"));
            return false;
        }
        //console.info(log.isObj("base"), this.base);


        if(!kw.isArray(this.states))
        {
            console.error(log.invalid("states"));
            return false;
        }
        //console.info(log.isObj("states"), this.states);


        let bIsLoaded = this.base.bIsLoaded;
        if (!bIsLoaded)
        {
            //console.info(log.empty("bIsLoaded"));
            return true;
        }


        const that = this;


        _.forEach(this.states, function (state, i)
        {
            if (!kw.isValid(state))
            {
                console.error(log.invalid("state"));
                return false;
            }
            //console.info(log.isObj("state"), state);


            bIsLoaded = state.bIsLoaded;
            if (!kw.isBoolean(bIsLoaded))
            {
                console.error(log.invalid("bIsLoaded"));
                return false;
            }
            //console.info(log.isObj("bIsLoaded"), bIsLoaded);


            if (!bIsLoaded)
            {
                return false;
            }

        });


        if (bIsLoaded)
        {
            this.setIsLoaded(true);
        }

        return true;
    }


    private createStates(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "createStates");
        //console.log(log.called());


        if(!kw.isArray(this.info))
        {
            console.error(log.invalid("info"));
            return false;
        }
        //console.info(log.isObj("info"), this.info);

        this.states = [];

        let that = this;

        _.forEach(this.info, function (info, i)
        {
            if (!kw.isValid(info))
            {
                console.error(log.invalid("info"));
                return;
            }
            //console.info(log.isObj("info"), info);


            const state: kwSubState = kwFctySubState.create(info);
            if (!kw.isValid(state))
            {
                console.error(log.invalid("state"));
                return;
            }

            if (state.nType === kweSubState.base)
            {
                that.base = state;
            }
            else
            {
                that.states.push(state);
            }
        });

        //console.info(log.isObj("states"), this.states);
        //console.info(log.isObj("base"), this.base);


        return true;
    }


    public load(sTopic: string, data: any): void
    {
        const log: kwLog = new kwLog(this.sClass, "load");
        //console.log(log.called());


        if(!kw.isString(sTopic))
        {
            console.error(log.invalid("sTopic"));
            return;
        }


        if(!kw.isValid(data))
        {
            console.error(log.invalid("data"));
            return;
        }
        //console.info(log.isObj(sTopic), data);


        if(!kw.isValid(this.base))
        {
            console.error(log.invalid("base"));
            return;
        }
        //console.info(log.isObj("base"), this.base);


        if(!kw.isArray(this.states))
        {
            console.error(log.invalid("info"));
            return;
        }
        //console.info(log.isObj("info"), this.info);


        if(!this.base.load(sTopic, data))
        {
            console.error(log.errLoad("state"));
            return;
        }


        let that = this;

        _.forEach(this.states, function (state, i)
        {
            if (!kw.isValid(state))
            {
                console.error(log.invalid("state"));
                return;
            }
            //console.info(log.isObj("state"), state);


            if (!state.load(sTopic, data))
            {
                console.error(log.errLoad("state"));
                return;
            }

        });


        if (!this.chkIsLoaded())
        {
            console.error(log.errLoad("_bIsLoaded"));
            return;
        }

        return;
    }


    public pub(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "pub");
        //console.log(log.called());


        if(!kw.isArray(this.states))
        {
            console.error(log.invalid("states"));
            return false;
        }
        //console.info(log.isObj("states"), this.states);


        if(!kw.isValid(this.base))
        {
            console.error(log.invalid("base"));
            return false;
        }
        //console.info(log.isObj("base"), this.base);


        if(!kw.isValid(this.pubSub))
        {
            console.error(log.invalid("pubSub"));
            return false;
        }


        const sPub = this.base.sPub;
        if (!kw.isString(sPub))
        {
            console.error(log.invalid("sPub"));
            return false;
        }
        //console.info(log.isObj("sPub"), sPub);

        this.pubSub.pub(sPub);


        let that = this;


        _.forEach(this.states, function (state, i)
        {
            if (!kw.isValid(state))
            {
                console.error(log.invalid("state"));
                return false;
            }
            //console.info(log.isObj("state"), state);


            const sPub = state.sPub;
            if (!kw.isString(sPub))
            {
                console.error(log.invalid("sPub"));
                return false;
            }
            //console.info(log.isObj("sPub"), sPub);


            that.pubSub.pub(sPub);
        });


        return true;
    }


    public sub(method: any, obj: any): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "sub");
        //console.log(log.called());


        if(!kw.isArray(this.states))
        {
            console.error(log.invalid("states"));
            return false;
        }
        //console.info(log.isObj("states"), this.states);


        if(!kw.isValid(this.base))
        {
            console.error(log.invalid("base"));
            return false;
        }
        //console.info(log.isObj("base"), this.base);


        if(!kw.isValid(this.pubSub))
        {
            console.error(log.invalid("pubSub"));
            return false;
        }


        if(!kw.isValid(method))
        {
            console.error(log.invalid("method"));
            return false;
        }


        if(!kw.isValid(obj))
        {
            console.error(log.invalid("obj"));
            return false;
        }


        const sSub = this.base.sSub;
        if (!kw.isString(sSub))
        {
            console.error(log.invalid("sSub"));
            return;
        }
        //console.info(log.isObj("sSub"), sSub);


        this.pubSub.sub(sSub, method, obj);


        let that = this;


        _.forEach(this.states, function (state, i)
        {
            if (!kw.isValid(state))
            {
                console.error(log.invalid("state"));
                return;
            }
            //console.info(log.isObj("state"), state);


            const sSub = state.sSub;
            if (!kw.isString(sSub))
            {
                console.error(log.invalid("sSub"));
                return;
            }
            //console.info(log.isObj("sSub"), sSub);


            that.pubSub.sub(sSub, method, obj);
        });


        return true;
    }


    public unSub(method: any, obj: any): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "unSub");
        //console.log(log.called());


        if(!kw.isValid(this.base))
        {
            console.error(log.invalid("base"));
            return false;
        }
        //console.info(log.isObj("base"), this.base);


        if(!kw.isArray(this.states))
        {
            console.error(log.invalid("states"));
            return false;
        }
        //console.info(log.isObj("states"), this.states);


        if(!kw.isValid(this.pubSub))
        {
            console.error(log.invalid("pubSub"));
            return false;
        }


        if(!kw.isValid(method))
        {
            console.error(log.invalid("method"));
            return false;
        }


        if(!kw.isValid(obj))
        {
            console.error(log.invalid("obj"));
            return false;
        }


        const sSub = this.base.sSub;
        if (!kw.isString(sSub))
        {
            console.error(log.invalid("sSub"));
            return;
        }


        this.pubSub.unSub(sSub, method, obj);


        let that = this;


        _.forEach(this.states, function (state, i)
        {
            if (!kw.isValid(state))
            {
                console.error(log.invalid("state"));
                return;
            }
            //console.info(log.isObj("state"), state);


            const sSub = state.sSub;
            if (!kw.isString(sSub))
            {
                console.error(log.invalid("sSub"));
                return;
            }


            that.pubSub.unSub(sSub, method, obj);
        });


        return true;
    }


    private setIsLoaded(bIsLoaded: boolean): void
    {
        const log: kwLog = new kwLog(this.sClass, "setIsLoaded");
        //console.log(log.called());


        if (!kw.isBoolean(bIsLoaded))
        {
            console.error(log.invalid("bIsLoaded"));
            return;
        }
        //console.log(log.isObj("bIsLoaded"), bIsLoaded);

        this._bIsLoaded = bIsLoaded;
    }


    static is(obj: object): boolean
    {
        return kw.is(obj, kwSubStates)
    }

}
