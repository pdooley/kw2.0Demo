/**********************************************************************
 *
 * kwUiAgGrid/class/cols/kwCols.ts
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
import * as _                       from "lodash";

import {kw}                         from "@kw/kw";
import {kwCol}                      from "../col/kwCol";
import {kwFctyCol}                  from "@kwUiAgGrid/fcty/col/kwFctyCol";
import {kwLog}                      from "@kw/kwLog";
import {ColDef}                     from 'ag-grid-community';
import {kwState}                    from "@kwClass/state/kwState";
import {kwtColIn}                   from "../col/kwtColIn";
import {kwtStateInfo}               from "./kwtStateInfo";

//@formatter:on

export class kwCols
{
    protected sClass: string = this.constructor.name;


    private states: string[];


    private _stateInfo: kwtStateInfo[];
    private _types:     ColDef[];
    private _stateMap:  object;


    constructor(
        private info: object[] )
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }


    get stateInfo():    kwtStateInfo[]  {return this._stateInfo};
    get stateMap():     object          {return this._stateMap};
    get types():        ColDef[]        {return this._types};



    init(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "init");
        //console.log(log.called());


        if (kw.isNull(this.info))
        {
            console.error(log.invalid("info"));
            return false;
        }


        if (!kw.isArray(this.info))
        {
            console.error(log.invalid("info"));
            return false;
        }
        //console.info(log.isObj("info"), this.info);


        if(!this.createCols())
        {
            console.error(log.errCreate("cols"));
            return false;
        }


        if(!this.createInfo())
        {
            console.error(log.errCreate("topicsAll"));
            return false;
        }


        return true;
    }


    private createCols(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "createCols");
        //console.log(log.called());


        if (kw.isNull(this.info))
        {
            console.error(log.invalid("info"));
            return false;
        }


        if (!kw.isArray(this.info))
        {
            console.error(log.invalid("info"));
            return false;
        }
        //console.info(log.isObj("info"), this.info);


        const items: kwtColIn[] = <kwtColIn[]>this.info;

        this._types = [];
        this._stateMap = {};
        const states = [];

        const that = this;

        _.forEach(items, function (item, i)
        {
            if (!kw.isValid(item))
            {
                console.error(log.invalid("item"));
                return false;
            }
            //console.info(log.isObj("item"), item);


            const col: kwCol = kwFctyCol.create(item);
            if (!col.init())
            {
                console.error(log.errCreate("col"));
                return false;
            }
            //console.info(log.isObj("col"), col);

            const type: ColDef = col.type;
            if (!kw.isValid(type))
            {
                console.error(log.invalid("type"));
                return false;
            }
            //console.info(log.isObj("type"), type);

            that._types.push(type);

            const sStateSt: string = col.sStateSt;
            if (kw.isString(sStateSt))
            {
                const sField = item.sField;
                if (!kw.isString(sField))
                {
                    console.error(log.invalid("sField"));
                    return false;
                }

                that._stateMap[sField] = sStateSt;

                //console.info(log.isObj("sStateSt"), col.sStateSt);
                states.push(sStateSt);
            }
        });

        //console.info(log.isObj("types"), this.types);


        const unique = _.uniq(states);
        if (!kw.isValid(unique))
        {
            console.error(log.invalid("unique"));
            return false;
        }
        //console.info(log.isObj("unique"), unique);

        this.states = unique;
        //console.info(log.isObj("states"), this.states);
        //console.info(log.isObj("stateMap"), this._stateMap);


        return true;
    }


    private createInfo(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "createInfo");
        //console.log(log.called());


        if (!kw.isArray(this.states))
        {
            console.error(log.invalid("states"));
            return false;
        }
        //console.info(log.is("states", this.states));


        this._stateInfo = [];

        const that = this;


        _.forEach(this.states, function (sState, i)
        {
            if (!kw.isString(sState))
            {
                console.error(log.invalid("sState"));
                return;
            }
            //console.info(log.isObj("sState"), sState);


            const sAll = kwState.createTopicAll(sState);
            if (!kw.isString(sAll))
            {
                console.error(log.invalid("sAll"));
                return false;
            }
            //console.info(log.isObj("sAll", sAll));


            const sRdy = kwState.createTopicRdy(sState);
            if (!kw.isString(sRdy))
            {
                console.error(log.invalid("sRdy"));
                return false;
            }
            //console.info(log.isObj("sRdy", sRdy));

            const info: kwtStateInfo = new kwtStateInfo();
            info.sState = sState;
            info.sAll = sAll;
            info.sRdy = sRdy;

            that._stateInfo.push(info);


        });

        //console.info(log.isObj("topicsAll"), this.topicsAll);
        //console.info(log.isObj("topicsRdy"), this.topicsRdy);


        return true;
    }


    toString(): string
    {
        return this.constructor.name;
    }


    static is(obj: object): boolean
    {
        return kw.is(obj, kwCols)
    }
}

