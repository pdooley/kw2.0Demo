//@formatter:on
import {Injectable}             from "@angular/core";

import {kwBsFctyMsg}            from "@kwBsFcty/msg/kwBsFctyMsg";
import {kwBsSrvcFormFull}       from "@kwBsSrvc/form/kwBsSrvcFormFull";
import {dwProvinceStApi,
        dwProvinceStMdl,
        dwProvinceStMsg}        from "./dwProvinceSt";

//@formatter:off


@Injectable({providedIn: 'root'})
export class dwProvinceFctyMsg extends kwBsFctyMsg
{
    constructor(api: dwProvinceStApi){super(api)}
}


@Injectable({providedIn: 'root'})
export class dwProvinceSrvcForm extends kwBsSrvcFormFull
{
    constructor(mdl: dwProvinceStMdl, msg: dwProvinceStMsg, fcty: dwProvinceFctyMsg)
    {super(mdl, msg, fcty); }
}
