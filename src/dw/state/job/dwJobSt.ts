//@formatter:on
import {Injectable}         from "@angular/core";

import {kwBsStApi}          from "@kwBs/stat/kwBsStApi";
import {kwBsStArr}          from "@kwBs/stat/kwBsStArr";
import {kwBsStMdl}          from "@kwBs/stat/kwBsStMdl";
import {kwBsStMsg}          from "@kwBs/stat/kwBsStMsg";
import {kwBsStVal}          from "@kwBs/stat/kwBsStVal";
import {kwNgUiStInit}       from "@kwNgUiStat/kwNgUiStInit";
import {kwNgUiStMap}        from "@kwNgUiStat/kwNgUiStMap";


const sTAG_ID: string       = "_id";
const sTAG_TYPE: string     = "job";
const id: object            = ["8sinF01jRglgBzUx8p8h"];

//@formatter:off


@Injectable({providedIn: 'root'})
export class dwJobPickStVal extends kwBsStVal
{
    constructor(){super({"id": id})}
}


@Injectable({providedIn: 'root'})
export class dwJobStApi extends kwBsStApi
{
    constructor(){super();}
}


@Injectable({providedIn: 'root'})
export class dwJobStArr extends kwBsStArr
{
    constructor(){super(sTAG_ID, sTAG_TYPE);}
}


@Injectable({providedIn: 'root'})
export class dwJobStInit extends kwNgUiStInit
{
    constructor(){super();}
}


@Injectable({providedIn: 'root'})
export class dwJobStMap extends kwNgUiStMap
{
    constructor(){super()}
}


@Injectable({providedIn: 'root'})
export class dwJobStMdl extends kwBsStMdl
{
    constructor(){super();}
}


@Injectable({providedIn: 'root'})
export class dwJobStMsg extends kwBsStMsg
{
    constructor(){super();}
}



