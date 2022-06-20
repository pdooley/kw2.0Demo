//@formatter:on
import {Injectable}             from "@angular/core";

import {kwBsFctyMsg}            from "@kwBsFcty/msg/kwBsFctyMsg";
import {kwBsSrvcFormFull}       from "@kwBsSrvc/form/kwBsSrvcFormFull";
import {dwCompanyStApi,
        dwCompanyStMdl,
        dwCompanyStMsg}         from "./dwCompanySt";

//@formatter:off


@Injectable({providedIn: 'root'})
export class dwCompanyFctyMsg extends kwBsFctyMsg
{
    constructor(api: dwCompanyStApi){super(api);}
}


@Injectable({providedIn: 'root'})
export class dwCompanySrvcForm extends kwBsSrvcFormFull
{
    constructor(mdl: dwCompanyStMdl, msg: dwCompanyStMsg, fcty: dwCompanyFctyMsg)
    {super(mdl, msg, fcty); }
}
