//@formatter:on
import {Injectable}         from "@angular/core";

import {kwBsStApi}          from "@kwBs/stat/kwBsStApi";
import {kwBsStArr}          from "@kwBs/stat/kwBsStArr";
import {kwBsStMap}          from "@kwBsStat/kwBsStMap";
import {kwBsStMsg}          from "@kwBsStat/kwBsStMsg";
import {kwCurrType}         from "@kwClass/curr/kwCurrType";


const sTAG_ID: string       = "_id";
const sTAG_TYPE: string     = "currs";

//@formatter:off


@Injectable({providedIn: 'root'})
export class kwBsCurrsStApi extends kwBsStApi
{
    constructor(){super();}
}


@Injectable({providedIn: 'root'})
export class kwBsCurrsStArr extends kwBsStArr
{
    constructor(){super(sTAG_ID, sTAG_TYPE);}
}


@Injectable({providedIn: 'root'})
export class kwBsCurrsStMap extends kwBsStMap
{
    constructor(){super()}
    public get(): kwCurrType[]{return <kwCurrType[]>super.get()}
}


@Injectable({providedIn: 'root'})
export class kwBsCurrsStMsg extends kwBsStMsg
{
    constructor(){super();}
}
