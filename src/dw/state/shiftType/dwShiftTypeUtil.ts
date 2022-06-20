//@formatter:on
import {Injectable}             from "@angular/core";

import {kwBsFctyMsg}            from "@kwBsFcty/msg/kwBsFctyMsg";
import {kwBsSrvcFormFull}       from "@kwBsSrvc/form/kwBsSrvcFormFull";
import {dwShiftTypeStApi,
        dwShiftTypeStMdl,
        dwShiftTypeStMsg}       from "./dwShiftTypeSt";

//@formatter:off


@Injectable({providedIn: 'root'})
export class dwShiftTypeFctyMsg extends kwBsFctyMsg
{
    constructor(srvc: dwShiftTypeStApi){super(srvc);}
}


@Injectable({providedIn: 'root'})
export class dwShiftTypeSrvcForm extends kwBsSrvcFormFull
{
    constructor(mdl: dwShiftTypeStMdl, msg: dwShiftTypeStMsg, fcty: dwShiftTypeFctyMsg)
    {super(mdl, msg, fcty); }
}
