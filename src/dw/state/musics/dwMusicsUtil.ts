//@formatter:on
import {Injectable}             from "@angular/core";

import {kwBsFctyMsg}            from "@kwBsFcty/msg/kwBsFctyMsg";

import {dwMusicsStApi}        from "./dwMusicsSt";

//@formatter:off


@Injectable({providedIn: 'root'})
export class dwMusicsFctyMsg extends kwBsFctyMsg
{
    constructor(srvc: dwMusicsStApi)
    {super(srvc)}
}
