/**********************************************************************
 *
 * kw/class/srvcs/kwSrvcs.ts
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
import {kwSrvc }            from "@kwClass/srvc/kwSrvc";
import {kwSrvcMap }         from "@kwClass/srvc/kwSrvcMap";
import {kwtSrvc }           from "@kwClass/srvc/kwtSrvc";
import {kwToken}            from "@kwClass/token/kwToken";

export class kwSrvcs
{
    _map: kwSrvcMap;

    constructor(private _list: kwtSrvc[])
    {
        //console.log("kwSrvcs::constructor() called");
    }

    public get list(): kwtSrvc[] { return this._list; }
    public get map(): kwSrvcMap { return this._map; }

//@formatter:on

    init(): boolean
    {
        //console.log("kwSrvcs::init() called.");

        if (!kw.isArray(this._list))
        {
            console.error("kwSrvcs::init() list is invalid.");
            return false;
        }
        //console.info("kwSrvcs::init() list ", this.list);

        const map: kwSrvcMap = new kwSrvcMap(this._list);
        if (!map.init())
        {
            console.error("kwSrvcs()::init() error creating map.");
            return false;
        }
        //console.info("kwSrvcs()::init() map is ", map);
        this._map = map;

        return true;
    }

    getByCode(sCode: string): kwSrvc
    {
        //console.log("kwSrvcs::getByCode() called.");

        if (!kw.isValid(this.map))
        {
            console.error("kwSrvcs::init() map is invalid.");
            return null;
        }
        //console.info("kwSrvcs::init() map ", this.map);

        return <kwSrvc>this.map.getByCode(sCode);
    }

    toString(): string
    {
        return this.constructor.name;
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwSrvcs)
    }
}

