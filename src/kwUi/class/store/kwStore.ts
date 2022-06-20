/**********************************************************************
 *
 * kwUi/class/store/kwStore.ts
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
import {kw}         from "@kw/kw";
import {kwLog}      from "@kw/kwLog";


export class kwStore
{
    protected sClass: string = this.constructor.name;

    private _result: any;


    constructor(
        private info: any,
        private sKey: string,)
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }


    get result(): any { return this._result};

//@formatter:on

    init(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "init");
        //console.log(log.called());

        if (!kw.isValid(this.info))
        {
            console.error(log.invalid("info"));
            return false;
        }
        //console.info(log.is("info", this.info));


        if (!kw.isString(this.sKey))
        {
            console.error(log.invalid("sKey"));
            return false;
        }
        //console.info(log.is("sKey", this.sKey));

        return this.extract();
    }


    extract(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "extract");
        //console.log(log.called());

        if (!kw.isValid(this.info))
        {
            console.error(log.invalid("info"));
            return false;
        }
        //console.info(log.is("info", this.info));


        if (!kw.isString(this.sKey))
        {
            console.error(log.invalid("sKey"));
            return false;
        }
        //console.info(log.is("sKey", this.sKey));


        let cache = this.info;


        const aId = this.sKey.split(".");
        //console.info(log.is("aId", aId));

        for (let sId of aId)
        {
            const rec = cache[sId];
            if (kw.isNull(rec))
            {
                console.error(log.invalid("sKey"));

                const sMsg = "sDataId is invalid at [" + sId + "]";
                console.error(log.info(sMsg));

                cache = null;
                break;
            }
            cache = rec;
        }
        //console.info(log.is("rec", this.cache));


        this._result = cache;
        //console.info(log.is("result", this.result));


        return true;
    }

}

