//@formatter:on
import {Injectable}         from "@angular/core";

import {kwBsStApi}          from "@kwBs/stat/kwBsStApi";
import {kwBsStArr}          from "@kwBs/stat/kwBsStArr";
import {kwBsStMsg}          from "@kwBs/stat/kwBsStMsg";
import {kwBsStVal}          from "@kwBs/stat/kwBsStVal";
import {kwNgUiStInit}         from "@kwNgUiStat/kwNgUiStInit";
import {kwNgUiStView}         from "@kwNgUiStat/kwNgUiStView";


const sTAG_ID: string       = "_id";
const sTAG_TYPE: string     = "schedules";
const id: object            = ["8sinF01jRglgBzUx8p8h"];

//@formatter:off


@Injectable({providedIn: 'root'})
export class dwSchedulesPickStVal extends kwBsStVal
{
    constructor(){super(id);}
}


@Injectable({providedIn: 'root'})
export class dwSchedulesStApi extends kwBsStApi
{
    constructor(){super();}
}


@Injectable({providedIn: 'root'})
export class dwSchedulesStArr extends kwBsStArr
{
    constructor(){super(sTAG_ID, sTAG_TYPE);}
}


@Injectable({providedIn: 'root'})
export class dwSchedulesStInit extends kwNgUiStInit
{
    constructor(){super();}
}


@Injectable({providedIn: 'root'})
export class dwSchedulesStMsg extends kwBsStMsg
{
    constructor(){super();}
}



@Injectable({providedIn: 'root'})
export class dwSchedulesStView extends kwNgUiStView
{
    constructor(){super();}
}



