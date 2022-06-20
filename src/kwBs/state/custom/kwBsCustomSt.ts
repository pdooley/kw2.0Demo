//@formatter:on
import {Injectable}         from "@angular/core";

import {kwBsStApi}          from "@kwBs/stat/kwBsStApi";
import {kwBsStArr}          from "@kwBs/stat/kwBsStArr";
import {kwBsStMsg}          from "@kwBs/stat/kwBsStMsg";
import {kwBsStMdl}          from "@kwBsStat/kwBsStMdl";


const sTAG_ID: string       = "_id";
const sTAG_TYPE: string     = "custom";

//@formatter:off



@Injectable({providedIn: 'root'})
export class kwBsCustomStApi extends kwBsStApi
{
    constructor(){super();}
}


@Injectable({providedIn: 'root'})
export class kwBsCustomStArr extends kwBsStArr
{
    constructor(){super(sTAG_ID, sTAG_TYPE);}
}


@Injectable({providedIn: 'root'})
export class kwBsCustomStMdl extends kwBsStMdl
{
    constructor(){super();}
}


@Injectable({providedIn: 'root'})
export class kwBsCustomStMsg extends kwBsStMsg
{
    constructor(){super();}
}

