/**********************************************************************
 *
 * kw/http/kwHttpHelper.ts
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
import {kw }                        from "@kw/kw"
//@formatter:on

export class kwHttpHelper
{

    constructor()
    {
        //console.log("kwHttpHelper::constructor() called");
    }

    // used when calling GET and expect only one record
/*    static extractRecordArray(data)
    {
        //console.log("kwHttpHelper::extractRecordArray() called.");

        if ( kw.isNull(data))
        {
            console.error("kwHttpHelper::extractRecordArray() data is invalid");
            deferred.resolve(null);
        }
        //console.info("kwHttpHelper::extractRecordArray() data is ", data);

        const nStatus: number = data.status
        if (!kw.isNumber(nStatus))
        {
            console.error("kwHttpHelper::extractRecordArray() nStatus is invalid");
            deferred.resolve(null);
        }
        //console.info("kwHttpHelper:extractRecordArray() nStatus is ", nStatus);

        if ( sStatus === 204 )
        {
            //console.warn("kwHttpHelper::extractRecordArray() no data to return");
            return undefined;
        }

        const result = !kw.isArray(data.data) ? [ data.data ] : data.data;
        //console.info("kwHttpHelper:extractRecordArray() result is ", result);

        if ( result.length > 1 )
        {
            console.error("kwHttpHelper::extractRecordArray() result is too long");
            deferred.resolve(null);
        }
        //console.info("kwHttpHelper:extractRecordArray() result.length is ", result.length);

        const record = result[ 0 ];
        //console.info("kwHttpHelper:extractRecordArray() record is ", record);

        return record;
    }

    // used when calling POST or PUT and expect only one record
    static extractRecordObject(data)
    {
        //console.log("kwHttpHelper::extractRecordObject() called.");

        if ( kw.isNull(data))
        {
            console.error("kwHttpHelper::extractRecordObject() data is invalid");
            deferred.resolve(null);
        }
        //console.info("kwHttpHelper:extractRecordObject() data is ", data);

        const record = data.data;
        if ( kw.isNull(record))
        {
            console.error("kwHttpHelper::extractRecordObject() record is invalid");
            deferred.resolve(null);
        }
        //console.info("kwHttpHelper:extractRecordObject() record is ", record);

        return record;
    }

    // used when calling GET and expect only one or many records
    static extractRecords(data)
    {
        //console.log("kwHttpHelper::extractRecords() called.");

        if ( kw.isNull(data))
        {
            console.error("kwHttpHelper::extractRecords() data is invalid");
            deferred.resolve(null);
        }
        //console.info("kwHttpHelper:extractRecords::then() data is ", data);

        const result = data.data;
        if (!kw.isArray(result))
        {
            console.error("kwHttpHelper::extractRecords() result is not an array");
            deferred.resolve(null);
        }
        //console.info("kwHttpHelper:extractRecords() result is ", result);

        //console.info("kwHttpHelper:extractRecord() result.length is ", result.length);

        return result;
    }

    // trace error of an http request
    static traceError(data)
    {
        console.error("kwHttpHelper::traceError() called.");

        if ( kw.isNull(data))
        {
            console.error("kwHttpHelper::traceError() data is invalid");
            return;
        }
        //console.info("kwHttpHelper::traceError() data is ", data);

        const sStatusText: string = data.statusText;
        if (!kw.isString(sStatusText))
        {
            console.error("kwHttpHelper::traceError() sStatusText is invalid.");
            return;
        }
        //console.info("kwHttpHelper::traceError() sStatusText is ", sStatusText);

        const nStatus = data.status;
        if (!kw.isNumber(nStatus))
        {
            console.error("kwHttpHelper::traceError() nStatus is invalid.");
            return;
        }
        console.error("kwHttpHelper::traceError() nStatus is ", nStatus);

        const error = data.data
        if ( kw.isNull(error))
        {
            console.error("kwHttpHelper::traceError() error is invalid.");
            return;
        }
        console.error("kwHttpHelper::traceError() error is ", error);

        traceErrorObject(error);

    }

    static traceErrorObject(data)
    {
        console.error("kwHttpHelper::traceErrorObject() called.");

        if ( kw.isNull(data))
        {
            console.error("kwHttpHelper::traceErrorObject() data is invalid");
            return;
        }
        console.error("kwHttpHelper::traceErrorObject() data is ", data);

        const bStatus = data.status;
        if (!kw.isBoolean(bStatus))
        {
            console.error("kwHttpHelper::traceErrorObject() bStatus is invalid.");
            return;
        }
        console.error("kwHttpHelper::traceErrorObject() bStatus is", bStatus);

        const messages = data.message;
        messages = kw.isArray(messages) ? messages : [ messages ];

        if (!kw.isArray(messages))
        {
            console.error("kwHttpHelper::traceErrorObject() messages is invalid");
            return;
        }

        const sError;
        for (let i = 0; i < messages.length; i++ )
        {
            sError: string = messages[ i ];
            if (!kw.isString(sError))
            {
                console.error("kwHttpHelper::traceErrorObject() sError is invalid");
            }
            console.error("kwHttpHelper::traceErrorObject() sError is [" + sError + "]")
        }


    }
*/

}
