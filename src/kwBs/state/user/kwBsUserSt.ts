//@formatter:on
import {Injectable}         from "@angular/core";

import {kwBsStMsg}          from "@kwBsStat/kwBsStMsg";
import {kwBsStArr}          from "@kwBsStat/kwBsStArr";


const sTAG_ID: string       = "id";

//@formatter:off


@Injectable({providedIn: 'root'})
export class kwBsUserStArr extends kwBsStArr
{
    constructor(){super(sTAG_ID)}
}


@Injectable({providedIn: 'root'})
export class kwBsUserStMsg extends kwBsStMsg
{
    constructor(){super()}
}
