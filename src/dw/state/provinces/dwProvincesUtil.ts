//@formatter:on
import {Injectable}             from "@angular/core";

import {kwBsFctyMsg}            from "@kwBsFcty/msg/kwBsFctyMsg";

import {dwProvincesStApi}            from "./dwProvincesSt";

//@formatter:off

@Injectable({
    providedIn: 'root'
})
export class dwProvincesFctyMsg extends kwBsFctyMsg
{
    constructor(
        srvc: dwProvincesStApi  )
    {
        super(srvc);
        //console.log("itkGuestprovinces::constructor() called.");
    }
}
