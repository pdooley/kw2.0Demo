//@formatter:on
import {Injectable}         from "@angular/core";

import {kwBsStApi}          from "@kwBsStat/kwBsStApi";
import {kwBsStArr}          from "@kwBsStat/kwBsStArr";
import {kwBsStMsg}          from "@kwBsStat/kwBsStMsg";
import {kwNgUiStInit}       from "@kwNgUiStat/kwNgUiStInit";
import {kwNgUiStView}       from "@kwNgUiStat/kwNgUiStView";


const sTAG_ID: string       = "_id";
const sTAG_TYPE: string     = "employees";

//@formatter:off



@Injectable({providedIn: 'root'})
export class dwEmployeesStApi extends kwBsStApi
{
    constructor(){super()}
}


@Injectable({providedIn: 'root'})
export class dwEmployeesStArr extends kwBsStArr
{
    constructor(){super(sTAG_ID, sTAG_TYPE)}
}


@Injectable({providedIn: 'root'})
export class dwEmployeesStInit extends kwNgUiStInit
{
    constructor(){super()}
}


@Injectable({providedIn: 'root'})
export class dwEmployeesStMsg extends kwBsStMsg
{
    constructor(){super()}
}


@Injectable({providedIn: 'root'})
export class dwEmployeesStView extends kwNgUiStView
{
    constructor(){super()}
}
