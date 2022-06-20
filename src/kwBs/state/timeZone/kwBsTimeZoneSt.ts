//@formatter:on
import {Injectable}         from "@angular/core";

import {kwBsStApi}          from "@kwBs/stat/kwBsStApi";
import {kwBsStMap}          from "@kwBsStat/kwBsStMap";
import {kwBsStMdl}          from "@kwBs/stat/kwBsStMdl";

//@formatter:off



@Injectable({providedIn: 'root'})
export class kwBsTimeZoneStApi extends kwBsStApi
{
    constructor(){super();}
}


@Injectable({providedIn: 'root'})
export class kwBsTimeZonesStMap extends kwBsStMap
{
    constructor(){super()}
}


@Injectable({providedIn: 'root'})
export class kwBsTimeZoneStMdl extends kwBsStMdl
{
    constructor(){super();}
}

