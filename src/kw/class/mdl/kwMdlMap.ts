/**********************************************************************
 *
 * kw/class/mdl/kwMdlMap.ts
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
import {kwMap}                  from "../kwMap";
import {kwStateX}               from "../kwStateX";

import {kwMdlType}              from "./kwMdlType";
//@formatter:off


export class kwMdlMap extends kwMap
{

    constructor(data: object[])
    {
        super(data);
        //console.log("kwMdlMap::constructor() called.");
    }

    protected createMap(): boolean
    {
        //console.log("kwMdlMap::createMap() called.");

        if (kw.isNull(this.theArr))
        {
            console.error("kwMdlMap::mdl() data is invalid");
            return false;
        }

        const theArr = <kwMdlType[]>this.theArr;

        const theMap = new Map(
            theArr.map(x => [x.sId, x] as [string, object] )
        );
        //console.info("kwMdlMap::createMap() theMap is ", theMap);

        this.setMap(theMap);

        return true;
    }

    public xImport(record: object): object
    {
        //console.log("kwMdlMap::ximport() called.");

       if (kw.isNull(record))
       {
           console.error("kwMdlMap::ximport() record is invalid.");
           return
       }

       const x: kwStateX = new kwStateX(record);
       if (!x.init())
       {
           console.error("kwMdlMap::ximport() error creating x.");
           return
       }

       const sId: string = x.getString("sId");
       if (!kw.isString(sId))
       {
           console.error("kwMdlMap::xImport() sId is invalid.");
           return;
       }

       const sType: string = x.getString("sType");
       if (!kw.isString(sType))
       {
           console.error("kwMdlMap::xImport() sType is invalid.");
           return;
       }

       const type: kwMdlType = {
           sId: sId,
           sType: sType,
           params: record["params"]
       };

       return type;
   }

}
