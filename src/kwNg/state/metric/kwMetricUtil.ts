//@formatter:on
import {Injectable}             from "@angular/core";

import {kwMetricStApi,
        kwMetricStMdl,
        kwMetricStMsg}          from "./kwMetricSt";
import {kwBsFctyMsg}            from "@kwBsFcty/msg/kwBsFctyMsg";
import {kwBsSrvcFormFull}       from "@kwBsSrvc/form/kwBsSrvcFormFull";

//@formatter:off


@Injectable({providedIn: 'root'})
export class kwMetricFctyMsg extends kwBsFctyMsg
{
    constructor(api: kwMetricStApi){super(api)}
}


@Injectable({providedIn: 'root'})
export class kwMetricSrvcForm extends kwBsSrvcFormFull
{
    constructor(mdl: kwMetricStMdl, msg: kwMetricStMsg, fcty: kwMetricFctyMsg)
    {super(mdl, msg, fcty); }
}
