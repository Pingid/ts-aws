import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * A destination for events that failed processing. See [Capturing records of Lambda asynchronous invocations](https://docs.aws.amazon.com/lambda/latest/dg/invocation-async-retain-records.html) for more information.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventinvokeconfig.html */

export interface OnFailure {
    /**
     * - The Amazon Resource Name (ARN) of the destination resource.
     * - To retain records of unsuccessful [asynchronous invocations](https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#invocation-async-destinations), you can configure an Amazon SNS topic, Amazon SQS queue, Amazon S3 bucket, Lambda function, or Amazon EventBridge event bus as the destination.
     * - To retain records of failed invocations from [Kinesis](https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html), [DynamoDB](https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html), [self-managed Kafka](https://docs.aws.amazon.com/lambda/latest/dg/with-kafka.html#services-smaa-onfailure-destination) or [Amazon MSK](https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#services-msk-onfailure-destination), you can configure an Amazon SNS topic, Amazon SQS queue, or Amazon S3 bucket as the destination.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^$|arn:(aws[a-zA-Z0-9-]*):([a-zA-Z0-9\-])+:([a-z]{2}(-gov)?(-iso([a-z])?)?-[a-z]+-\d{1})?:(\d{12})?:(.*)`
     * - _Minimum_: `0`
     * - _Maximum_: `350`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventinvokeconfig.html#cfn-lambda-eventinvokeconfig-onfailure-destination */
    "Destination": string | Intrinsic;
}

/**
 * A destination for events that were processed successfully.
 * To retain records of successful [asynchronous invocations](https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#invocation-async-destinations), you can configure an Amazon SNS topic, Amazon SQS queue, Lambda function, or Amazon EventBridge event bus as the destination.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventinvokeconfig.html */

export interface OnSuccess {
    /**
     * - The Amazon Resource Name (ARN) of the destination resource.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^$|arn:(aws[a-zA-Z0-9-]*):([a-zA-Z0-9\-])+:([a-z]{2}(-gov)?(-iso([a-z])?)?-[a-z]+-\d{1})?:(\d{12})?:(.*)`
     * - _Minimum_: `0`
     * - _Maximum_: `350`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventinvokeconfig.html#cfn-lambda-eventinvokeconfig-onsuccess-destination */
    "Destination": string | Intrinsic;
}

/**
 * A configuration object that specifies the destination of an event after Lambda processes it.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventinvokeconfig.html */

export interface DestinationConfig {
    /**
     * - The destination configuration for failed invocations.
     * - _Required_: No
     * - _Type_: [OnFailure](./aws-properties-lambda-eventinvokeconfig-onfailure.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventinvokeconfig.html#cfn-lambda-eventinvokeconfig-destinationconfig-onfailure */
    "OnFailure"?: OnFailure;
    /**
     * - The destination configuration for successful invocations.
     * - _Required_: No
     * - _Type_: [OnSuccess](./aws-properties-lambda-eventinvokeconfig-onsuccess.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventinvokeconfig.html#cfn-lambda-eventinvokeconfig-destinationconfig-onsuccess */
    "OnSuccess"?: OnSuccess;
}

/**
 * The `AWS::Lambda::EventInvokeConfig` resource configures options for [asynchronous invocation](https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html) on a version or an alias.
 * By default, Lambda retries an asynchronous invocation twice if the function returns an error. It retains events in a queue for up to six hours. When an event fails all processing attempts or stays in the asynchronous invocation queue for too long, Lambda discards it.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventinvokeconfig.html */

export interface LambdaEventInvokeConfig extends ResourceAttributes {
    "Type": "AWS::Lambda::EventInvokeConfig";
    "Properties": {
        /**
         * - A destination for events after they have been sent to a function for processing.
         * - _Required_: No
         * - _Type_: [DestinationConfig](./aws-properties-lambda-eventinvokeconfig-destinationconfig.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventinvokeconfig.html#cfn-lambda-eventinvokeconfig-destinationconfig */
        "DestinationConfig"?: DestinationConfig;
        /**
         * - The name of the Lambda function.
         * - _Minimum_: `1`
         * - _Maximum_: `64`
         * - _Pattern_: `([a-zA-Z0-9-_]+)`
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?(-iso([a-z])?)?-[a-z]+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\$LATEST|[a-zA-Z0-9-_]+))?$`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventinvokeconfig.html#cfn-lambda-eventinvokeconfig-functionname */
        "FunctionName": string | Intrinsic;
        /**
         * - The maximum age of a request that Lambda sends to a function for processing.
         * - _Required_: No
         * - _Type_: Integer
         * - _Minimum_: `60`
         * - _Maximum_: `21600`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventinvokeconfig.html#cfn-lambda-eventinvokeconfig-maximumeventageinseconds */
        "MaximumEventAgeInSeconds"?: number | Intrinsic;
        /**
         * - The maximum number of times to retry when the function returns an error.
         * - _Required_: No
         * - _Type_: Integer
         * - _Minimum_: `0`
         * - _Maximum_: `2`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventinvokeconfig.html#cfn-lambda-eventinvokeconfig-maximumretryattempts */
        "MaximumRetryAttempts"?: number | Intrinsic;
        /**
         * - The identifier of a version or alias.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^(|[a-zA-Z0-9$_-]{1,129})$`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventinvokeconfig.html#cfn-lambda-eventinvokeconfig-qualifier */
        "Qualifier": string | Intrinsic;
    };
}