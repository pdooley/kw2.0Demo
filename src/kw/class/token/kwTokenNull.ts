/**********************************************************************
 *
 * kw/class/token/kwTokenNull.ts
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


export class kwTokenNull extends kwToken
{
    constructor(tokens: kwTokens)
    {
        super(kwTokenEnum.null, tokens);
        //console.log("kwTokenNull::constructor() is called.");
    }

}
