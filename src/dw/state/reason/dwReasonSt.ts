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
const sTAG_TYPE: string     = "reason";
const id: object            = ["tC3dXJia7rnEH3caM9Vl"];

//@formatter:off


@Injectable({providedIn: 'root'})
export class dwReasonPickStVal extends kwBsStVal
{
    constructor(){super({"id": id})}
}


@Injectable({providedIn: 'root'})
export class dwReasonStApi extends kwBsStApi
{
    constructor(){super();}
}


@Injectable({providedIn: 'root'})
export class dwReasonStArr extends kwBsStArr
{
    constructor(){super(sTAG_ID, sTAG_TYPE);}
}


@Injectable({providedIn: 'root'})
export class dwReasonStInit extends kwNgUiStInit
{
    constructor(){super();}
}


@Injectable({providedIn: 'root'})
export class dwReasonStMap extends kwNgUiStMap
{
    constructor(){super()}
}


@Injectable({providedIn: 'root'})
export class dwReasonStMdl extends kwBsStMdl
{
    constructor(){super();}
}


@Injectable({providedIn: 'root'})
export class dwReasonStMsg extends kwBsStMsg
{
    constructor(){super();}
}




