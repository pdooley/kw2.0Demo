//@formatter:on
import {Injectable}         from "@angular/core";

import {kwBsStApi}          from "@kwBsStat/kwBsStApi";
import {kwBsStArr}          from "@kwBsStat/kwBsStArr";
import {kwBsStMdl}          from "@kwBsStat/kwBsStMdl";
import {kwBsStMsg}          from "@kwBsStat/kwBsStMsg";
import {kwNgUiStInit}       from "@kwNgUiStat/kwNgUiStInit";


const sTAG_ID: string       = "_id";
const sTAG_TYPE: string     = "metric";

//@formatter:off


@Injectable({providedIn: 'root'})
export class kwMetricStApi extends kwBsStApi
{
    constructor(){super()}
}


@Injectable({providedIn: 'root'})
export class kwMetricStArr extends kwBsStArr
{
    constructor(){super(sTAG_ID, sTAG_TYPE)}
}


@Injectable({providedIn: 'root'})
export class kwMetricStInit extends kwNgUiStInit
{
    constructor(){super();}
}


@Injectable({providedIn: 'root'})
export class kwMetricStMdl extends kwBsStMdl
{
    constructor(){super()}
}


@Injectable({providedIn: 'root'})
export class kwMetricStMsg extends kwBsStMsg
{
    constructor(){super()}
}


