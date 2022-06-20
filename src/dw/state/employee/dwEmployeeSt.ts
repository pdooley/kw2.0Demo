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
const sTAG_TYPE: string     = "employee";
const id: object            = ["aDGB7jg2ADaHg8dvEyVj"];

//@formatter:off



@Injectable({providedIn: 'root'})
export class dwEmployeePickStVal extends kwBsStVal
{
    constructor(){super({"id": id})}
}


@Injectable({providedIn: 'root'})
export class dwEmployeeStApi extends kwBsStApi
{
    constructor(){super();}
}


@Injectable({providedIn: 'root'})
export class dwEmployeeStArr extends kwBsStArr
{
    constructor(){super(sTAG_ID, sTAG_TYPE);}
}


@Injectable({providedIn: 'root'})
export class dwEmployeeStInit extends kwNgUiStInit
{
    constructor(){super();}
}


@Injectable({providedIn: 'root'})
export class dwEmployeeStMap extends kwNgUiStMap
{
    constructor(){super()}
}


@Injectable({providedIn: 'root'})
export class dwEmployeeStMdl extends kwBsStMdl
{
    constructor(){super();}
}


@Injectable({providedIn: 'root'})
export class dwEmployeeStMsg extends kwBsStMsg
{
    constructor(){super();}
}

