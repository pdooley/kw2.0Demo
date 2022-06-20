//@formatter:on
import {Injectable}         from "@angular/core";

import {kwBsStApi}          from "@kwBs/stat/kwBsStApi";
import {kwBsStArr}          from "@kwBs/stat/kwBsStArr";
import {kwBsStMdl}          from "@kwBs/stat/kwBsStMdl";
import {kwBsStMsg}          from "@kwBs/stat/kwBsStMsg";


const sTAG_ID: string       = "_id";
const sTAG_TYPE: string     = "srvc";

//@formatter:off


@Injectable({providedIn: 'root'})
export class kwBsSrvcStApi extends kwBsStApi
{
    constructor(){super();}
}


@Injectable({providedIn: 'root'})
export class kwBsSrvcStArr extends kwBsStArr
{
    constructor(){super(sTAG_ID, sTAG_TYPE);}
}


@Injectable({providedIn: 'root'})
export class kwBsSrvcStMdl extends kwBsStMdl
{
    constructor(){super();}
}


@Injectable({providedIn: 'root'})
export class kwBsSrvcStMsg extends kwBsStMsg
{
    constructor(){super();}
}
