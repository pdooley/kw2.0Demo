/**********************************************************************
 *
 * kw/pubSub/kwPubSub.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst Corporation
 *
 **********************************************************************/
//@formatter:on
import * as _               from 'lodash';

import {kwLog}              from "@kw/kwLog";
import {kwStTrace}          from "@kwStat/kwStTrace";

//@formatter:off


export class kwPubSub
{
    protected sClass: string = this.constructor.name;


    subscriptions: object = {};
    ctx: object = {};


    protected constructor(
        private trace: kwStTrace   )
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }


    public pub(sTopic: string, data?: any): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "pub");
        //console.log(log.called());


        if (!_.isString(sTopic))
        {
            console.error(log.invalid("sTopic"));
            return false;
        }


        if (this.trace.bPubSub){console.info(log.isObj(sTopic), data)}


        if (_.isNull(this.subscriptions))
        {
            console.error(log.invalid("subscriptions"));
            return false;
        }


        const currTopic = this.subscriptions[sTopic];
        if (_.isNull(currTopic))
        {
            console.error(log.errLoad("currTopic"));
            return false;
        }
        //console.info(log.isObj("currTopic"), currTopic);


        const topic = _.clone(currTopic);

        // Iterate over each kWSubscriber and call the callback function
        _.forEach(topic, function (subscription, i)
        {
            if (!_.isArray(subscription))
            {
                console.error(log.invalid("subscription"));
                return false;
            }


            const method = subscription[0];
            if (_.isNull(method))
            {
                console.error(log.invalid("method"));
                return false;
            }


            const context = subscription[1];
            if (_.isNull(context))
            {
                console.error(log.invalid("context"));
                return false;
            }

            method.call(context, sTopic, data);
        });


        return true;
    };


    public sub(
        sTopic: string,
        callback: object,
        context: object): object
    {
        const log: kwLog = new kwLog(this.sClass, "sub");
        //console.log(log.called());


        if (!_.isString(sTopic))
        {
            console.error(log.invalid("sTopic"));
            return null;
        }

        if (this.trace.bPubSub){console.info(log.isObj(sTopic), context["sClass"])}


        if (!_.isFunction(callback))
        {
            console.error(log.invalid("callback"));
            return null;
        }


        context = context || this.ctx;


        if (!this.subscriptions[sTopic])
        {
            this.subscriptions[sTopic] = [];
        }

        this.subscriptions[sTopic].push([callback, context]);


        return { topics: sTopic, callback: callback, context:context };
    }


    public unSub(sTopic, func, obj): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "unSub");
        //console.log(log.called());


        if (_.isNull(this.subscriptions))
        {
            console.error(log.invalid("subscriptions"));
            return false;
        }


        if (!_.isString(sTopic))
        {
            console.error(log.invalid("sTopic"));
            return false;
        }


        if (sTopic.length === 0)
        {
            console.error(log.empty("sTopic"));
            return false;
        }

        if (this.trace.bPubSub){console.info(log.isObj(sTopic), obj["sClass"])}


        if (!_.isFunction(func))
        {
            console.error(log.invalid("func"));
            return false;
        }
        //console.info(log.isObj("func"), func);


        // If no context was provided, then use the default context
        obj = obj || this.ctx;
        if (!_.isObject(obj))
        {
            console.error(log.invalid("obj"));
            return false;
        }
        //console.info(log.isObj("obj"), obj);


        const currTopic = this.subscriptions[sTopic];
        if (_.isNull(currTopic))
        {
            console.error(log.errLoad("currTopic"));
            return false;
        }
        //console.info(log.isObj("currTopic"), currTopic);


        _.forEach(currTopic, function (topic, i)
        {
            //console.info(log.isObj("topic"), topic);
            //console.info(log.is("i", i));


            if (!_.isArray(topic))
            {
                console.error(log.invalid("topic"));
                return false;
            }


            const itFunc  = topic[0];
            if (!_.isFunction(itFunc))
            {
                console.error(log.invalid("itFunc"));
                return false;
            }
            //console.info(log.isObj("itFunc"), itFunc);


            const itObj  = topic[1];
            if (_.isNull(itObj))
            {
                console.error(log.invalid("itObj"));
                return false;
            }
            //console.info(log.isObj("itObj"), itObj);


            if (itObj === obj && itFunc === func)
            {
                currTopic.splice(i, 1);

                //console.info(log.isObj("deleting"), topic);
            }


        });


        return true;
    }


}

