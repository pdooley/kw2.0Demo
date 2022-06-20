//@formatter:on
import {Injectable}         from "@angular/core";

import {kwBsStApi}          from "@kwBs/stat/kwBsStApi";
import {kwBsStArr}          from "@kwBs/stat/kwBsStArr";
import {kwBsStMdl}          from "@kwBs/stat/kwBsStMdl";
import {kwBsStMsg}          from "@kwBs/stat/kwBsStMsg";
import {kwUiStView}         from "@kwUiStat/kwUiStView";


const sTAG_ID: string       = "_id";
const sTAG_TYPE: string     = "token";

//@formatter:off



@Injectable({providedIn: 'root'})
export class kwBsTokenStApi extends kwBsStApi
{
    constructor(){super();}
}


@Injectable({providedIn: 'root'})
export class kwBsTokenStArr extends kwBsStArr
{
    constructor(){super(sTAG_ID, sTAG_TYPE);}
}


@Injectable({providedIn: 'root'})
export class kwBsTokenStMdl extends kwBsStMdl
{
    constructor(){super();}
}


@Injectable({providedIn: 'root'})
export class kwBsTokenStMsg extends kwBsStMsg
{
    constructor(){super();}
}

