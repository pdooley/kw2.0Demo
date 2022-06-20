//@formatter:on
import {Injectable}         from "@angular/core";

import {kwBsStApi}          from "@kwBsStat/kwBsStApi";
import {kwBsStArr}          from "@kwBsStat/kwBsStArr";
import {kwBsStMsg}          from "@kwBsStat/kwBsStMsg";
import {kwBsStObj}          from "@kwBsStat/kwBsStObj";


const sTAG_ID: string       = "id";
//@formatter:off


@Injectable({providedIn: 'root'})
export class kwApisStApi extends kwBsStApi
{
    constructor(){super()}
}


@Injectable({providedIn: 'root'})
export class kwApisStArr extends kwBsStArr
{
    constructor(){super(sTAG_ID)}
}


@Injectable({providedIn: 'root'})
export class kwApisStMsg extends kwBsStMsg
{
    constructor(){super()}
}


@Injectable({providedIn: 'root'})
export class kwApisStObj extends kwBsStObj
{
    constructor(){super()}
}
