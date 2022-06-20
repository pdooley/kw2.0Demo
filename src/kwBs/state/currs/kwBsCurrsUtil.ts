//@formatter:on
import {Injectable}             from "@angular/core";

import {AppInjector}            from "@app/appInjector";

import {kwBsCurrsStApi}         from "./kwBsCurrsSt";
import {kwBsFctyMsg}            from "@kwBsFcty/msg/kwBsFctyMsg";

//@formatter:off


@Injectable({providedIn: 'root'})
export class kwBsCurrsFctyMsg extends kwBsFctyMsg
{
    constructor(){super(AppInjector.get(kwBsCurrsStApi));}
}

