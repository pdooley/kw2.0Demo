/**********************************************************************
 *
 * kw/class/view/kwViewMap.ts
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

import {kwtViewRec}                 from "./kwtViewRec";
//@formatter:off


export class kwViewMap extends kwMap
{

    constructor(data: object[])
    {
        super(data);
        //console.log("kwViewMap::constructor() called.");
    }

    protected createMap(): boolean
    {
        //console.log("kwViewMap::createMap() called.");

        if (kw.isNull(this.theArr))
        {
            console.error("kwViewMap::init() data is invalid");
            return false;
        }

        const theArr = <kwtViewRec[]>this.theArr;

        const theMap = new Map(
            theArr.map(x => [x.sId, x.view] as [string, object] )
        );
        //console.info("kwViewMap::createMap() theMap is ", theMap);

        this.setMap(theMap);

        return true;
    }

    public xImport(record: object): object
    {
        //console.log("kwViewMap::ximport() called.");

        if (kw.isNull(record))
        {
            console.error("kwViewMap::ximport() record is invalid.");
            return
        }

        const x: kwStateX = new kwStateX(record);
        if (!x.init())
        {
            console.error("kwViewMap::ximport() error creating x.");
            return
        }

        const sId: string = x.getString("sId");
        if (!kw.isString(sId))
        {
            console.error("kwViewMap::xImport() sId is invalid.");
            return;
        }

        const sMode: string = x.getString("sMode");
        if (!kw.isString(sMode))
        {
            console.error("kwViewMap::xImport() sMode is invalid.");
            return;
        }

        const type: kwtViewRec = {
            sId: sId,
            view: record["page"]
        };

        return type;
    }



}
