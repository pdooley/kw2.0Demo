/**********************************************************************
 *
 * kw/http/kwHttpHelperMock.ts
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

export class kwHttpHelperMock
{

    constructor()
    {
        //console.log("kwHttpHelperMock::constructor() called");
    }

    // used when calling GET and expect only one record
    static extractRecordArray(data)
    {
        //console.log("srvcHttpHelperMock::extractRecordArray() called.");

        if ( kw.isNull(data))
        {
            console.error("srvcHttpHelperMock::extractRecordArray() data is invalid");
            return null;
        }
        //console.info("srvcHttpHelperMock::extractRecordArray() data is ", data);

        const nStatus = data.status
        if (!kw.isNumber(nStatus))
        {
            console.error("srvcHttpHelperMock::extractRecordArray() nStatus is invalid");
            return null;
        }
        //console.info("srvcHttpHelperMock:extractRecordArray() nStatus is ", nStatus);

        if ( nStatus === 204 )
        {
            //console.warn("srvcHttpHelperMock::extractRecordArray() no data to return");
            return undefined;
        }

        const result = kw.isArray(data.data) ? data.data : [ data.data ];
        //console.info("srvcHttpHelperMock:extractRecordArray() result is ", result);

        if ( result.length > 1 )
        {
            console.error("srvcHttpHelperMock::extractRecordArray() result is too long");
            return null;
        }
        //console.info("srvcHttpHelperMock:extractRecordArray() result.length is ", result.length);

        const record = result[ 0 ];
        //console.info("srvcHttpHelperMock:extractRecordArray() record is ", record);

        return record;
    }

    // used when calling POST or PUT and expect only one record
    static extractRecordObject(data)
    {
        //console.log("srvcHttpHelperMock::extractRecordObject() called.");

        if ( kw.isNull(data))
        {
            console.error("srvcHttpHelperMock::extractRecordObject() data is invalid");
            return null;
        }
        //console.info("srvcHttpHelperMock:extractRecordObject() data is ", data);

        const record = data.data;
        if ( kw.isNull(record))
        {
            console.error("srvcHttpHelperMock::extractRecordObject() record is invalid");
            return null;
        }
        //console.info("srvcHttpHelperMock:extractRecordObject() record is ", record);

        return record;
    }

    // used when calling GET and expect only one or many records
    static extractRecords(data)
    {
        //console.log("srvcHttpHelperMock::extractRecords() called.");

        if ( kw.isNull(data))
        {
            console.error("srvcHttpHelperMock::extractRecords() data is invalid");
            return null;
        }
        //console.info("srvcHttpHelperMock:extractRecords::then() data is ", data);

        const result = data.data;
        if (!kw.isArray(result))
        {
            console.error("srvcHttpHelperMock::extractRecords() result is not an array");
            return null;
        }
        //console.info("srvcHttpHelperMock:extractRecords() result is ", result);

        //console.info("srvcHttpHelperMock:extractRecord() result.length is ", result.length);

        return result;
    }

    // trace error of an http request
    static traceError(data)
    {
        console.error("srvcHttpHelperMock::traceError() called.");

        if ( kw.isNull(data))
        {
            console.error("srvcHttpHelperMock::traceError() data is invalid");
            return;
        }
        console.error("srvcHttpHelperMock::traceError() data is ", data);

        const nStatusText = data.statusText;
        if (!kw.isString(nStatusText))
        {
            console.error("srvcHttpHelperMock::traceError() nStatusText is invalid.");
            return;
        }
        console.error("srvcHttpHelperMock::traceError() nStatusText is ", nStatusText);

        const nStatus = data.status;
        if (!kw.isNumber(nStatus))
        {
            console.error("srvcHttpHelperMock::traceError() nStatus is invalid.");
            return;
        }
        console.error("srvcHttpHelperMock::post::error() nStatus is ", nStatus);

        const datab = data.data
        if ( kw.isNull(datab))
        {
            console.error("srvcHttpHelperMock::traceError() datab is invalid");
            return;
        }
        console.error("srvcHttpHelperMock::traceError() datab is ", datab);

        const error = datab.error
        if ( kw.isNull(error))
        {
            console.error("srvcHttpHelperMock::traceError() error is invalid");
            return;
        }
        console.error("srvcHttpHelperMock::traceError() error is ", error);

        const sMsg: string = error.message;
        if (!kw.isString(sMsg))
        {
            console.error("srvcHttpHelperMock::traceError() sMsg is invalid.");
            return;
        }
        console.error("srvcHttpHelperMock::traceError() sMsg is", sMsg);

    }
}
