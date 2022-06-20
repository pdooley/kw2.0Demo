/**********************************************************************
 *
 * kwBs/srvc/form/kwBsSrvcFormSmpl
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/

//@formatter:off
import {Injectable}         from "@angular/core";

import {kwBsFctyMsg}        from "@kwBsFcty/msg/kwBsFctyMsg";
import {kwBsStMdl}          from "@kwBsStat/kwBsStMdl";
import {kwBsStMsg}          from "@kwBsStat/kwBsStMsg";
import {kwSrvcFormSmpl}     from "@kwSrvc/form/kwSrvcFormSmpl";

//@formatter:off


@Injectable()
export abstract class kwBsSrvcFormSmpl  extends kwSrvcFormSmpl
{
    protected constructor(
        src: kwBsStMdl,
        dst: kwBsStMsg,
        srvcFcty: kwBsFctyMsg    )
    {
        super(
            src,
            dst,
            srvcFcty     );

        //console.log(this.sClass, "::constructor() called.");
    }
}




