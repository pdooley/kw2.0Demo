//@formatter:on
import {Injectable}         from "@angular/core";

import {kwBsStApi}          from "@kwBs/stat/kwBsStApi";
import {kwBsStMdl}          from "@kwBs/stat/kwBsStMdl";

//@formatter:off


@Injectable({providedIn: 'root'})
export class kwBsLangStApi extends kwBsStApi
{
    constructor(){super();}
}


@Injectable({providedIn: 'root'})
export class kwBsLangStMdl extends kwBsStMdl
{
    constructor(){super();}
}


