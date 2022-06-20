/**********************************************************************
 *
 * kw/class/api/kwApisSrvc.ts
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
import {kw }                    from "@kw/kw";
import {kwApi }                 from "@kwClass/api/kwApi";
import {kwApiType }             from "@kwClass/api/kwApiType";
import {kwLog}                  from "@kw/kwLog";
//@formatter:on


const sProp: string = "kwApisSrvc";


export class kwApisSrvc
{


    static getItem(sItem: string, items: Object): kwApi
    {
        const log: kwLog = new kwLog(sProp, "getItem");
        //console.log(log.called());

        if (!kw.isString(sItem))
        {
            console.error(log.invalid("sItem"));
            return;
        }
        //console.info(log.is("sItem", sItem));

        if ( kw.isNull(items))
        {
            console.error(log.invalid("items"));
            return;
        }
        //console.info(log.isObj("items"), items);

        const apiJson: kwApiType = items[ sItem ];
        if (kw.isNull(apiJson))
        {
            console.error(log.info(" [" + sItem + "] has no api - update the apis.json file."));
            return;
        }
        //console.info(log.isObj("apiJson"), apiJson);

        const item = new kwApi(apiJson);
        if (!item.init())
        {
            console.error(log.errCreate("item"));
            return;
        }
        //console.info(log.isObj("item"), item);

        return item;
    }

    static isType(obj: object): boolean
    {
        return true;
    }

    static in(nVal: number): boolean
    {
        return false
    }

    static toEnum(sVal: string): number
    {
        return -1;
    }
}

