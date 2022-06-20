//@formatter:on
import {Injectable}         from "@angular/core";

import {kwBsStApi}          from "@kwBs/stat/kwBsStApi";
import {kwBsStArr}          from "@kwBs/stat/kwBsStArr";
import {kwBsStMdl}          from "@kwBs/stat/kwBsStMdl";
import {kwBsStMsg}          from "@kwBs/stat/kwBsStMsg";


const sTAG_ID: string       = "_id";
const sTAG_TYPE: string     = "company";

//@formatter:off


@Injectable({providedIn: 'root'})
export class kwBsApiStApi extends kwBsStApi
{
    constructor(){super()}
}


@Injectable({providedIn: 'root'})
export class kwBsApiStArr extends kwBsStArr
{
    constructor(){super(sTAG_ID, sTAG_TYPE)}
}


@Injectable({providedIn: 'root'})
export class kwBsApiStMsg extends kwBsStMsg
{
    constructor(){super()}
}
