//@formatter:on
import {Injectable}             from "@angular/core";

import {kwBsFctyMsg}            from "@kwBsFcty/msg/kwBsFctyMsg";
import {kwBsTimeZonesStApi}           from "./kwBsTimeZonesSt";

//@formatter:off


@Injectable({providedIn: 'root'})
export class kwBsTimeZonesFctyMsg extends kwBsFctyMsg
{
    constructor(api: kwBsTimeZonesStApi){super(api);}
}

