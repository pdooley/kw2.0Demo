/**********************************************************************
 *
 * kw/class/tokens/kwTokens.ts
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
import {kw }                from "@kw/kw";
import {kwToken }           from "@kwClass/token/kwToken";
import {kwTokenMap }        from "@kwClass/token/kwTokenMap";
import {kwTokenType }       from "@kwClass/token/kwTokenType";
//@formatter:on

export class kwTokens
{
    map: kwTokenMap;

    constructor(private list: kwTokenType[])
    {
        //console.log("kwTokens::constructor() called");
    }

    init(): boolean
    {
        //console.log("kwTokens::init() called.");

        if (!kw.isArray(this.list))
        {
            console.error("kwTokens::init() list is invalid.");
            return false;
        }
        //console.info("kwTokens::init() list ", this.list);

        const map: kwTokenMap = new kwTokenMap(this.list);
        if (!map.init())
        {
            console.error("kwBsState()::init() error creating map.");
            return false;
        }
        //console.info("kwBsState()::init() map is ", map);
        this.map = map;

        return true;
    }

    getByCode(sCode: string): kwToken
    {
        //console.log("kwTokens::getByCode() called.");

        if (!kw.isValid(this.map))
        {
            console.error("kwTokens::init() map is invalid.");
            return null;
        }
        //console.info("kwTokens::init() map ", this.map);

        return <kwToken>this.map.getByCode(sCode);
    }

    getList(): kwTokenType[]
    {
        return this.list;
    }

    getMap(): kwTokenMap
    {
        return this.map;
    }

    toString(): string
    {
        return this.constructor.name;
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwTokens)
    }
}

