/**********************************************************************
 *
 * kw/class/aws/kwAWS.ts
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
//import * as AWS                 from 'aws-sdk/global';
//import * as S3                  from 'aws-sdk/clients/s3';

import {kw }                    from "@kw/kw";
import {kwApi }                 from "@kwClass/api/kwApi";

import {kwAWSSrvc }             from "./kwAWSSrvc";
import {kwAWSType }             from "./kwAWSType";

const sProp = "aws";
const sProp_ACCESS = "accessKey";
const sProp_BUCKET = "bucket";
const sProp_FOLDER = "folder";
const sProp_REGION = "region";
const sProp_SECRET = "secretKey";
const sProp_SERVER_ENCRYPT = "serverEncryption";


//@formatter:on

export class kwAWS
{
    aws: object;

    srvc: object;

    sAccess: string;
    sBucket: string;
    sFolder: string;
    sRegion: string;
    sSecret: string;
    sServerEncrypt: string;

    constructor(private info: object)
    {
        //console.log("kwAWS::constructor() called");
    }

    init(): boolean
    {
        //console.log("kwAWS::init() called.");

        if (kw.isNull(this.info))
        {
            console.error("kwAWS::init() info is invalid.");
            return false;
        }
        //console.info("kwAWS::init() info ", this.info);


        const aws: object = this.info[sProp];
        if (kw.isNull(aws))
        {
            console.error("kwAWS::init() aws is invalid.");
            return false;
        }
        //console.info("kwAWS::init() aws ", aws);
        this.aws = aws;


        const sAccess: string = aws[sProp_ACCESS];
        if (!kw.isString(sAccess))
        {
            console.error("kwAWS::init() sAccess is invalid.");
            return false;
        }
        //console.info("kwAWS::init() sAccess ", sAccess);
        this.sAccess = sAccess;


        const sBucket: string = aws[sProp_BUCKET];
        if (!kw.isString(sBucket))
        {
            console.error("kwAWS::init() sBucket is invalid.");
            return false;
        }
        //console.info("kwAWS::init() sBucket ", sBucket);
        this.sBucket = sBucket;


        const sFolder: string = aws[sProp_BUCKET];
        if (!kw.isString(sFolder))
        {
            console.error("kwAWS::init() sFolder is invalid.");
            return false;
        }
        //console.info("kwAWS::init() sFolder ", sFolder);
        this.sFolder = sFolder;


        const sRegion: string = aws[sProp_REGION];
        if (!kw.isString(sRegion))
        {
            console.error("kwAWS::init() sRegion is invalid.");
            return false;
        }
        //console.info("kwAWS::init() sRegion ", sRegion);
        this.sRegion = sRegion;


        const sSecret: string = aws[sProp_SECRET];
        if (!kw.isString(sSecret))
        {
            console.error("kwAWS::init() sSecret is invalid.");
            return false;
        }
        //console.info("kwAWS::init() sSecret ", sSecret);
        this.sSecret = sSecret;


        const sServerEncrypt: string = aws[sProp_SERVER_ENCRYPT];
        if (!kw.isString(sServerEncrypt))
        {
            console.error("kwAWS::init() sServerEncrypt is invalid.");
            return false;
        }
        //console.info("kwAWS::init() sServerEncrypt ", sServerEncrypt);
        this.sSecret = sSecret;

        return this.create();
    }

    getAccess(): string
    {
        return this.sAccess;
    }

    getAws(): object
    {
        return this.aws;
    }

    getBucket(): string
    {
        return this.sBucket;
    }

    getFolder(): string
    {
        return this.sFolder;
    }

  //  getSrvc(): S3
  //  {
 //       return this.srvc;
  //  }

    getRegion(): string
    {
        return this.sRegion;
    }

    getSecret(): string
    {
        return this.sSecret;
    }

    getServerEncrypt(): string
    {
        return this.sServerEncrypt;
    }

    create(): boolean
    {
        //console.log("kwAWS::create() called.");

        if (!kw.isNull(this.srvc))
        {
            console.error("kwAWS::create() srvc already created.");
            return false;
        }

        if (!kw.isString(this.sAccess))
        {
            console.error("kwAWS::create() sAccess is invalid.");
            return false;
        }
        //console.info("kwAWS::create() sAccess ", this.sAccess);


        if (!kw.isString(this.sSecret))
        {
            console.error("kwAWS::create() sSecret is invalid.");
            return false;
        }
        //console.info("kwAWS::create() sSecret ", this.sSecret);


        if (!kw.isString(this.sRegion))
        {
            console.error("kwAWS::create() sRegion is invalid.");
            return false;
        }
        //console.info("kwAWS::create() sRegion ", this.sRegion);


/*        const srvc = new S3(
            {
                accessKeyId: this.sAccess,
                secretAccessKey: this.sSecret,
                region: this.sRegion
            }
        );
        this.srvc = srvc;
*/
        return  true;
    }

    upload(
        sBody: string,
        sBucket: string,
        sKey: string,
        done: (err:any, data: any) => void )
    {
        //console.log("kwAWS::upload() called.");

        if (!kw.isString(sBody))
        {
            console.error("kwAWS::upload() sBody is invalid.");
            return false;
        }
        //console.info("kwAWS::upload() sBody ", sBody);


        if (!kw.isString(sBucket))
        {
            console.error("kwAWS::upload() sBucket is invalid.");
            return false;
        }
        //console.info("kwAWS::upload() sBucket ", sBucket);


        if (!kw.isString(sKey))
        {
            console.error("kwAWS::upload() sKey is invalid.");
            return false;
        }
        //console.info("kwAWS::upload() sKey ", sKey);


        if (kw.isNull(this.srvc))
        {
            console.error("kwAWS::upload() srvc is invalid.");
            return;
        }
        //console.info("kwAWS::upload() srvc is [", this.srvc, "]");

        const params = {
            Body: sBody,
            Bucket: sBucket,
            Key: sKey,
        }

        //this.srvc.upload(params, done)
    }

    toString(): string
    {
        return this.constructor.name;
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwAWS)
    }
}

