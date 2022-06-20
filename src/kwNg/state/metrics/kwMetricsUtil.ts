//@formatter:on
import {Injectable}             from "@angular/core";

import {kwBsFctyMsg}            from "@kwBsFcty/msg/kwBsFctyMsg";
import {kwMetricsStApi}         from "./kwMetricsSt";

//@formatter:off


@Injectable({providedIn: 'root'})
export class kwMetricsFctyMsg extends kwBsFctyMsg
{
    constructor(api: kwMetricsStApi){super(api)}
}
