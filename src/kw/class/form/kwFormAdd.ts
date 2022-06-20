/**********************************************************************
 *
 * kwView/class/form/kwFormAdd.ts
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
import {kwForm }                from "./kwForm";
import {kwFormEnum }            from "./kwFormEnum";
//@formatter:on


export class kwFormAdd extends kwForm
{
    constructor()
    {
        super(kwFormEnum.add);
        //console.log("kwFormAdd::constructor() called");
    }
}

