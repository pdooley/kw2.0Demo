/**********************************************************************
 *
 * kw/class/api/kwApiMap.ts
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
import {kw}                         from "@kw/kw";
import {kwMap}                      from "@kwClass/kwMap";
import {kwStateX}                   from "@kwClass/kwStateX";

import {kwApiType}                  from "./kwApiType";
//@formatter:off


export class kwApiMap extends kwMap
{

    constructor(data: object[])
    {
        super(data);
        //console.log("kwApiMap::constructor() called.");
    }

    protected createMap(): boolean
    {
        //console.log("kwApiMap::createMap() called.");

        if (kw.isNull(this.theArr))
        {
            console.error("kwApiMap::init() data is invalid");
            return false;
        }

        const theArr = <kwApiType[]>this.theArr;

        const theMap = new Map(
            theArr.map(x => [x.sId, x] as [string, object] )
        );
        //console.info("kwApiMap::createMap() theMap is ", theMap);

        this.setMap(theMap);

        return true;
    }

    public xImport(record: object): object
    {
        //console.log("kwApiMap::ximport() called.");

        if (kw.isNull(record))
        {
            console.error("kwApiMap::ximport() record is invalid.");
            return
        }

        const x: kwStateX = new kwStateX(record);
        if (!x.init())
        {
            console.error("kwApiMap::ximport() error creating x.");
            return
        }

        const sId: string = x.getString("sId");
        if (!kw.isString(sId))
        {
            console.error("kwApiMap::xImport() sId is invalid.");
            return;
        }

        const sMode: string = x.getString("sMode");
        if (!kw.isString(sMode))
        {
            console.error("kwApiMap::xImport() sMode is invalid.");
            return;
        }

        const type: kwApiType = {
            sId: sId,
            sMode: sMode,
            actions: record["actions"]
        };

        return type;
    }



}
