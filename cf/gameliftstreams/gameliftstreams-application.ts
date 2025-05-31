import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Configuration settings that identify the operating system for an application resource. This can also include a compatibility layer and other drivers.
 * A runtime environment can be one of the following:
 * *   For Linux applications
 *     
 *     *   Ubuntu 22.04 LTS (`Type=UBUNTU, Version=22_04_LTS`)
 *         
 *     
 * *   For Windows applications
 *     
 *     *   Microsoft Windows Server 2022 Base (`Type=WINDOWS, Version=2022`)
 *         
 *     *   Proton 8.0-5 (`Type=PROTON, Version=20241007`)
 *         
 *     *   Proton 8.0-2c (`Type=PROTON, Version=20230704`)
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gameliftstreams-application.html */

export interface RuntimeEnvironment {
    /**
     * - The operating system and other drivers. For Proton, this also includes the Proton compatibility layer.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gameliftstreams-application.html#cfn-gameliftstreams-application-runtimeenvironment-type */
    "Type": string | Intrinsic;
    /**
     * - Versioned container environment for the application operating system.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gameliftstreams-application.html#cfn-gameliftstreams-application-runtimeenvironment-version */
    "Version": string | Intrinsic;
}

/**
 * The `AWS::GameLiftStreams::Application` resource defines an Amazon GameLift Streams application. An application specifies the content that you want to stream, such as a game or other software, and its runtime environment (Microsoft Windows, Ubuntu, or Proton).
 * Before you create an Amazon GameLift Streams application, upload your _uncompressed_ game files to an Amazon Simple Storage Service (Amazon S3) bucket.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gameliftstreams-application.html */

export interface GameLiftStreamsApplication extends ResourceAttributes {
    "Type": "AWS::GameLiftStreams::Application";
    "Properties": {
        /**
         * - An Amazon S3 URI to a bucket where you would like Amazon GameLift Streams to save application logs. Required if you specify one or more `ApplicationLogPaths`.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^$|^s3://([a-zA-Z0-9][a-zA-Z0-9._-]{1,61}[a-zA-Z0-9])(/[a-zA-Z0-9._-]+)*?$`
         * - _Minimum_: `0`
         * - _Maximum_: `1024`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gameliftstreams-application.html#cfn-gameliftstreams-application-applicationlogoutputuri */
        "ApplicationLogOutputUri"?: string | Intrinsic;
        /**
         * - Locations of log files that your content generates during a stream session. Enter path values that are relative to the `ApplicationSourceUri` location. You can specify up to 10 log paths. Amazon GameLift Streams uploads designated log files to the Amazon S3 bucket that you specify in `ApplicationLogOutputUri` at the end of a stream session. To retrieve stored log files, call [GetStreamSession](https://docs.aws.amazon.com/gameliftstreams/latest/apireference/API_GetStreamSession.html) and get the `LogFileLocationUri`.
         * - _Required_: No
         * - _Type_: Array of String
         * - _Minimum_: `0 | 0`
         * - _Maximum_: `1024 | 10`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gameliftstreams-application.html#cfn-gameliftstreams-application-applicationlogpaths */
        "ApplicationLogPaths"?: (string | Intrinsic)[];
        /**
         * - The location of the content that you want to stream. Enter an Amazon S3 URI to a bucket that contains your game or other application. The location can have a multi-level prefix structure, but it must include all the files needed to run the content. Amazon GameLift Streams copies everything under the specified location.
         * - This value is immutable. To designate a different content location, create a new application.
         * - _Required_: Yes
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `1024`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gameliftstreams-application.html#cfn-gameliftstreams-application-applicationsourceuri */
        "ApplicationSourceUri": string | Intrinsic;
        /**
         * - A human-readable label for the application. You can update this value later.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^[a-zA-Z0-9-_.!+@/][a-zA-Z0-9-_.!+@/ ]*$`
         * - _Minimum_: `1`
         * - _Maximum_: `80`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gameliftstreams-application.html#cfn-gameliftstreams-application-description */
        "Description": string | Intrinsic;
        /**
         * - The path and file name of the executable file that launches the content for streaming. Enter a path value that is relative to the location set in `ApplicationSourceUri`.
         * - _Required_: Yes
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `1024`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gameliftstreams-application.html#cfn-gameliftstreams-application-executablepath */
        "ExecutablePath": string | Intrinsic;
        /**
         * - A set of configuration settings to run the application on a stream group. This configures the operating system, and can include compatibility layers and other drivers.
         * - _Required_: Yes
         * - _Type_: [RuntimeEnvironment](./aws-properties-gameliftstreams-application-runtimeenvironment.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gameliftstreams-application.html#cfn-gameliftstreams-application-runtimeenvironment */
        "RuntimeEnvironment": RuntimeEnvironment;
        /**
         * - A list of labels to assign to the new application resource. Tags are developer-defined key-value pairs. Tagging AWS resources is useful for resource management, access management and cost allocation. See [Tagging AWS Resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) in the _AWS General Reference_.
         * - _Required_: No
         * - _Type_: Object of String
         * - _Pattern_: `.+`
         * - _Minimum_: `0`
         * - _Maximum_: `256`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gameliftstreams-application.html#cfn-gameliftstreams-application-tags */
        "Tags"?: Record<string, string | Intrinsic>;
    };
}