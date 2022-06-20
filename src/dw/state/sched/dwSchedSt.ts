//@formatter:on
import {Injectable}         from "@angular/core";

import {kwNgUiStInit}       from "@kwNgUiStat/kwNgUiStInit";
import {kwNgUiStView}       from "@kwNgUiStat/kwNgUiStView";


//@formatter:off


@Injectable({providedIn: 'root'})
export class dwSchedStInit extends kwNgUiStInit
{
    constructor(){super()}
}


@Injectable({providedIn: 'root'})
export class dwSchedStView extends kwNgUiStView
{
    constructor(){super()}
}
