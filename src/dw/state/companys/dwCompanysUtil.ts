//@formatter:on
import {Injectable}             from "@angular/core";

import {kwBsFctyMsg}            from "@kwBsFcty/msg/kwBsFctyMsg";

import {dwCompanysStApi}        from "./dwCompanysSt";

//@formatter:off


@Injectable({providedIn: 'root'})
export class dwCompanysFctyMsg extends kwBsFctyMsg
{
    constructor(srvc: dwCompanysStApi)
    {super(srvc)}
}
