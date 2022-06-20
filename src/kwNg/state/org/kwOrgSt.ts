//@formatter:on
import {Injectable}         from "@angular/core";

import {kwBsStApi}          from "@kwBsStat/kwBsStApi";
import {kwBsStArr}          from "@kwBsStat/kwBsStArr";
import {kwBsStMdl}          from "@kwBsStat/kwBsStMdl";
import {kwBsStMsg}          from "@kwBsStat/kwBsStMsg";


const sTAG_ID: string       = "_id";
const sTAG_TYPE: string     = "org";

//@formatter:off


@Injectable({providedIn: 'root'})
export class kwOrgStApi extends kwBsStApi
{
    constructor(){super()}
}


@Injectable({providedIn: 'root'})
export class kwOrgStArr extends kwBsStArr
{
    constructor(){super(sTAG_ID, sTAG_TYPE)}
}


@Injectable({providedIn: 'root'})
export class kwOrgStMdl extends kwBsStMdl
{
    constructor(){super()}
}


@Injectable({providedIn: 'root'})
export class kwOrgStMsg extends kwBsStMsg
{
    constructor(){super()}
}
