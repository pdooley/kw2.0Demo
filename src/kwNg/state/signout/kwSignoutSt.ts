//@formatter:on
import {Injectable}         from "@angular/core";

import {kwBsStApi}          from "@kwBsStat/kwBsStApi";
import {kwBsStArr}          from "@kwBsStat/kwBsStArr";
import {kwBsStMdl}          from "@kwBsStat/kwBsStMdl";
import {kwBsStMsg}          from "@kwBsStat/kwBsStMsg";


const sTAG_ID: string       = "_id";
const sTAG_TYPE: string     = "signout";

//@formatter:off


@Injectable({providedIn: 'root'})
export class kwSignoutStApi extends kwBsStApi
{
    constructor(){super()}
}


@Injectable({providedIn: 'root'})
export class kwSignoutStArr extends kwBsStArr
{
    constructor(){super(sTAG_ID, sTAG_TYPE)}
}


@Injectable({providedIn: 'root'})
export class kwSignoutStMdl extends kwBsStMdl
{
    constructor(){super()}
}


@Injectable({providedIn: 'root'})
export class kwSignoutStMsg extends kwBsStMsg
{
    constructor(){super()}
}
