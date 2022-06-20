//@formatter:on
import {Injectable}         from "@angular/core";

import {kwBsStApi}          from "@kwBsStat/kwBsStApi";
import {kwBsStArr}          from "@kwBsStat/kwBsStArr";
import {kwBsStMsg}          from "@kwBsStat/kwBsStMsg";
import {kwBsStMap} from "@kwBsStat/kwBsStMap";


const sTAG_ID: string       = "_id";
const sTAG_TYPE: string     = "inits";

//@formatter:off


@Injectable({providedIn: 'root'})
export class kwNgUiInitsStApi extends kwBsStApi
{
    constructor(){super()}
}


@Injectable({providedIn: 'root'})
export class kwNgUiInitsStArr extends kwBsStArr
{
    constructor(){super(sTAG_ID, sTAG_TYPE)}
}


@Injectable({providedIn: 'root'})
export class kwNgUiInitsStMap extends kwBsStMap
{
    constructor(){super()}
}


@Injectable({providedIn: 'root'})
export class kwNgUiInitsStMsg extends kwBsStMsg
{
    constructor(){super()}
}
