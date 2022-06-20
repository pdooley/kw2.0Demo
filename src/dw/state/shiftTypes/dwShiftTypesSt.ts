//@formatter:on
import {Injectable}         from "@angular/core";

import {kwBsStApi}          from "@kwBs/stat/kwBsStApi";
import {kwBsStArr}          from "@kwBs/stat/kwBsStArr";
import {kwBsStMsg}          from "@kwBs/stat/kwBsStMsg";
import {kwNgUiStInit}         from "@kwNgUiStat/kwNgUiStInit";
import {kwNgUiStView}         from "@kwNgUiStat/kwNgUiStView";


const sTAG_ID: string       = "_id";
const sTAG_TYPE: string     = "shiftTypes";
const id: object            = ["8sinF01jRglgBzUx8p8h"];

//@formatter:off


@Injectable({providedIn: 'root'})
export class dwShiftTypesStApi extends kwBsStApi
{
    constructor(){super();}
}


@Injectable({providedIn: 'root'})
export class dwShiftTypesStArr extends kwBsStArr
{
    constructor(){super(sTAG_ID, sTAG_TYPE);}
}


@Injectable({providedIn: 'root'})
export class dwShiftTypesStInit extends kwNgUiStInit
{
    constructor(){super();}
}


@Injectable({providedIn: 'root'})
export class dwShiftTypesStMsg extends kwBsStMsg
{
    constructor(){super();}
}



@Injectable({providedIn: 'root'})
export class dwShiftTypesStView extends kwNgUiStView
{
    constructor(){super();}
}



