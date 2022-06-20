//@formatter:on
import {Injectable}         from "@angular/core";

import {kwBsStApi}          from "@kwBsStat/kwBsStApi";
import {kwBsStArr}          from "@kwBsStat/kwBsStArr";
import {kwBsStMdl}          from "@kwBsStat/kwBsStMdl";
import {kwBsStMsg}          from "@kwBsStat/kwBsStMsg";


const sTAG_ID: string       = "_id";
const sTAG_TYPE: string     = "acc";

//@formatter:off


@Injectable({providedIn: 'root'})
export class kwAccStApi extends kwBsStApi
{
    constructor(){super()}
}


@Injectable({providedIn: 'root'})
export class kwAccStArr extends kwBsStArr
{
    constructor(){super(sTAG_ID, sTAG_TYPE)}
}


@Injectable({providedIn: 'root'})
export class kwAccStMdl extends kwBsStMdl
{
    constructor(){super()}
}


@Injectable({providedIn: 'root'})
export class kwAccStMsg extends kwBsStMsg
{
    constructor(){super()}
}
