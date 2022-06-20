//@formatter:on
import {Injectable}             from "@angular/core";

import {kwBsFctyMsg}            from "@kwBsFcty/msg/kwBsFctyMsg";
import {kwBsSrvcFormFull}       from "@kwBsSrvc/form/kwBsSrvcFormFull";
import {dwMusicStApi,
        dwMusicStMdl,
        dwMusicStMsg}         from "./dwMusicSt";

//@formatter:off


@Injectable({providedIn: 'root'})
export class dwMusicFctyMsg extends kwBsFctyMsg
{
    constructor(api: dwMusicStApi){super(api);}
}


@Injectable({providedIn: 'root'})
export class dwMusicSrvcForm extends kwBsSrvcFormFull
{
    constructor(mdl: dwMusicStMdl, msg: dwMusicStMsg, fcty: dwMusicFctyMsg)
    {super(mdl, msg, fcty); }
}
