//@formatter:on
import {Injectable}             from "@angular/core";

import {kwBsFctyMsg}            from "@kwBsFcty/msg/kwBsFctyMsg";
import {dwSchedulesStApi}       from "./dwSchedulesSt";

//@formatter:off


@Injectable({providedIn: 'root'})
export class dwSchedulesFctyMsg extends kwBsFctyMsg
{
    constructor(api: dwSchedulesStApi){super(api)}
}

