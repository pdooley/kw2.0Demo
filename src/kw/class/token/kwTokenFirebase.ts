/**********************************************************************
 *
 * kw/class/token/kwTokenFirebase.ts
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
import {kwToken }                    from "./kwToken";
import {kwTokenEnum }                from "./kwTokenEnum";
import {kwTokens }                  from "../tokens/kwTokens";
//@formatter:on


export class kwTokenFirebase extends kwToken
{
    constructor(tokens: kwTokens)
    {
        super(kwTokenEnum.firebase, tokens);
        //console.log("kwTokenFirebase::constructor() is called.");
    }

}
