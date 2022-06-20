/**********************************************************************
 *
 * kwBs/state/tokens/kwBsTokensSt.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst Corporation
 *
 **********************************************************************/

//@formatter:off
import {Injectable}           from "@angular/core";

import {kw }                   from "@kw/kw";
import {kwBsStObj}             from "@kwBsStat/kwBsStObj";
import {kwMap }                from "@kwClass/kwMap";

const sORG: string              = "org";


@Injectable({providedIn: 'root'})
export class kwBsTokensStObj extends kwBsStObj
{
    constructor(){super();}

//@formatter:on

    isOrgSet(): boolean
    {
        //console.log(this.sClass, "::isOrgSet() called");

        const tokens: kwMap = this.get();
        if (! kwMap.is(tokens))
        {
            //console.info(this.sClass, "::isOrgSet() tokens not loaded.");
            return false;
        }
        //console.info(this.sClass, "::isOrgSet() tokens are ", tokens);

        const org: Object = tokens.getByCode(sORG);
        if (kw.isNull(org))
        {
            console.error(this.sClass, "::isOrgSet() [org] is invalid");
            return false;
        }
        //console.info(this.sClass, "::isOrgSet() org is ", org);

        const sVal = org["sVal"];
        if (!kw.isString(sVal) || sVal.length === 0)
        {
            //console.info(this.sClass, "::isOrgSet() [sVal] is not loaded.");
            return false;
        }
        //console.info(this.sClass, "::isOrgSet() sVal is ", sVal);

        return true;
    }

}
