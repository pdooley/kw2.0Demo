//@formatter:on
import {Injectable}         from "@angular/core";

import {kwBsStApi}          from "@kwBs/stat/kwBsStApi";
import {kwBsStArr}          from "@kwBs/stat/kwBsStArr";
import {kwBsStMap}          from "@kwBsStat/kwBsStMap";
import {kwBsStMsg}          from "@kwBs/stat/kwBsStMsg";
import {kwTimeZoneMap}            from "@kwClass/timeZone/kwTimeZoneMap";


const sTAG_ID: string       = "_id";
const sTAG_TYPE: string     = "timeZones";

//@formatter:off


@Injectable({providedIn: 'root'})
export class kwBsTimeZonesStApi extends kwBsStApi
{
    constructor(){super();}
}


@Injectable({providedIn: 'root'})
export class kwBsTimeZonesStArr extends kwBsStArr
{
    constructor(){super(sTAG_ID, sTAG_TYPE);}
}


@Injectable({providedIn: 'root'})
export class kwBsTimeZonesStMap extends kwBsStMap
{
    constructor(){super()}
    public get(): kwTimeZoneMap {return <kwTimeZoneMap>super.get()}
}


@Injectable({providedIn: 'root'})
export class kwBsTimeZonesStMsg extends kwBsStMsg
{
    constructor(){super();}
}
