/**********************************************************************
 *
 * kw/class/srvc/kwSrvcsSrvc.ts
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
import {kwSrvc }                from "@kwClass/srvc/kwSrvc";
import {kwSrvcSrvc }            from "@kwClass/srvc/kwSrvcSrvc";
import {kwtSrvc }               from "@kwClass/srvc/kwtSrvc";
//@formatter:on


const sTAG: string = "kwSrvcsSrvc";


export class kwSrvcsSrvc
{

    static getItem(sItem: string, items: Object): kwSrvc
    {
        if (!kw.isString(sItem))
        {
            console.error(sTAG + "::getItem() sItem is invalid.");
            return;
        }
        //console.info(sTAG + "::getItem() sItem ", sItem);

        if ( kw.isNull(items))
        {
            console.error(sTAG + "::getItem() items is invalid.");
            return;
        }

        const srvcJson: kwtSrvc = items[ sItem ];
        if (kw.isNull(srvcJson))
        {
            console.error(sTAG + "::getItem() sItem has no srvc - update the srvcs.json file.");
            return;
        }

        const item = new kwSrvc(srvcJson);
        if (!item.init())
        {
            console.error(sTAG + "::getItem() error creating srvc");
            return;
        }

        return item;
    }

    static isType(obj: object): boolean
    {
        return false;
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

