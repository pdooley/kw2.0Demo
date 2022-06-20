//@formatter:on
import {Injectable}         from "@angular/core";

import {kwBsStApi}          from "@kwBs/stat/kwBsStApi";
import {kwBsStMap}          from "@kwBsStat/kwBsStMap";
import {kwBsStMdl}          from "@kwBs/stat/kwBsStMdl";


@Injectable({providedIn: 'root'})
export class kwBsCurrStApi extends kwBsStApi
{
    constructor(){super();}
}


@Injectable({providedIn: 'root'})
export class kwBsCurrStMdl extends kwBsStMdl
{
    constructor(){super();}
}

//@formatter:off
