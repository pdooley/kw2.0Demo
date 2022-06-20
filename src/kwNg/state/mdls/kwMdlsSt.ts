//@formatter:on
import {Injectable}         from "@angular/core";

import {kwBsStApi}          from "@kwBsStat/kwBsStApi";
import {kwBsStArr}          from "@kwBsStat/kwBsStArr";
import {kwBsStMsg}          from "@kwBsStat/kwBsStMsg";
import {kwBsStObj}          from "@kwBsStat/kwBsStObj";


const sTAG_ID: string       = "id";
//@formatter:off


@Injectable({providedIn: 'root'})
export class kwMdlsStApi extends kwBsStApi
{
    constructor(){super()}
}


@Injectable({providedIn: 'root'})
export class kwMdlsStArr extends kwBsStArr
{
    constructor(){super(sTAG_ID)}
}


@Injectable({providedIn: 'root'})
export class kwMdlsStMsg extends kwBsStMsg
{
    constructor(){super()}
}


@Injectable({providedIn: 'root'})
export class kwMdlsStObj extends kwBsStObj
{
    constructor(){super()}
}
