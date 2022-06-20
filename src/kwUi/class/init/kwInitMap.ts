/**********************************************************************
 *
 * kwUi/class/init/kwInitMap.ts
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
import {kw}                     from "@kw/kw";
import {kwMap}                  from "@kwClass/kwMap";
import {kwStateX}               from "@kwClass/kwStateX";

import {kwInitType}             from "./kwInitType";
//@formatter:off


export class kwInitMap extends kwMap
{

    constructor(data: object[])
    {
        super(data);
        //console.log("kwInitMap::constructor() called.");
    }

    protected createMap(): boolean
    {
        //console.log("kwInitMap::createMap() called.");

        if (kw.isNull(this.theArr))
        {
            console.error("kwInitMap::init() data is invalid");
            return false;
        }

        const theArr = <kwInitType[]>this.theArr;

        const theMap = new Map(
            theArr.map(x => [x.sId, x.init] as [string, object] )
        );
        //console.info("kwInitMap::createMap() theMap is ", theMap);

        this.setMap(theMap);

        return true;
    }

    public xImport(record: object): object
    {
        //console.log("kwInitMap::ximport() called.");

        if (kw.isNull(record))
        {
            console.error("kwInitMap::ximport() record is invalid.");
            return
        }

        const x: kwStateX = new kwStateX(record);
        if (!x.init())
        {
            console.error("kwInitMap::ximport() error creating x.");
            return
        }

        const sId: string = x.getString("sId");
        if (!kw.isString(sId))
        {
            console.error("kwInitMap::xImport() sId is invalid.");
            return;
        }


        const type: kwInitType = {
            sId: sId,
            init: record["init"]
        };

        return type;
    }



}
