/**********************************************************************
 *
 * kw/class/user/kwUserClient.ts
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
import {kwUser }                    from "./kwUser";
import {kwUserEnum }                from "./kwUserEnum";
//@formatter:on


export class kwUserClient extends kwUser
{

    constructor()
    {
        super(kwUserEnum.client)
        //console.log("kwUserClient::constructor() called.");
    }

}
