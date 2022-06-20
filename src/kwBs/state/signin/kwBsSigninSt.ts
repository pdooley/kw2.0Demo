//@formatter:on
import {Injectable}         from "@angular/core";

import {kwBsStApi}          from "@kwBs/stat/kwBsStApi";
import {kwBsStArr}          from "@kwBsStat/kwBsStArr";
import {kwBsStMdl}          from "@kwBs/stat/kwBsStMdl";
import {kwBsStMsg}          from "@kwBs/stat/kwBsStMsg";


const sTAG_ID: string       = "sId";

//@formatter:off


@Injectable({providedIn: 'root'})
export class kwBsSigninStApi extends kwBsStApi
{
    constructor(){super();}
}


@Injectable({providedIn: 'root'})
export class kwBsSigninStArr extends kwBsStArr
{
    constructor(){super(sTAG_ID);}
}


@Injectable({providedIn: 'root'})
export class kwBsSigninStMdl extends kwBsStMdl
{
    constructor(){super();}
}


@Injectable({providedIn: 'root'})
export class kwBsSigninStMsg extends kwBsStMsg
{
    constructor(){super();}
}


