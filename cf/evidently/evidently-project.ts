import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * This is a structure that defines the configuration of how your application integrates with AWS AppConfig to run client-side evaluation.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-project.html */

export interface AppConfigResourceObject {
  /**
   * - The ID of the AWS AppConfig application to use for client-side evaluation.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `[a-z0-9]{4,7}`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-project.html#cfn-evidently-project-appconfigresourceobject-applicationid */
  ApplicationId: string | Intrinsic
  /**
   * - The ID of the AWS AppConfig environment to use for client-side evaluation.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `[a-z0-9]{4,7}`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-project.html#cfn-evidently-project-appconfigresourceobject-environmentid */
  EnvironmentId: string | Intrinsic
}

/**
 * The `Tag` property type specifies Property description not available. for an [AWS::Evidently::Project](./aws-resource-evidently-project.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-project.html */

export interface Tag {
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^(?!aws:)[a-zA-Z+-=._:/]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-project.html#cfn-evidently-project-tag-key */
  Key: string | Intrinsic
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-project.html#cfn-evidently-project-tag-value */
  Value: string | Intrinsic
}

/**
 * If the project stores evaluation events in an Amazon S3 bucket, this structure stores the bucket name and bucket prefix.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-project.html */

export interface S3Destination {
  /**
   * - The name of the bucket in which Evidently stores evaluation events.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-z0-9][-a-z0-9]*[a-z0-9]$`
   * - _Minimum_: `3`
   * - _Maximum_: `63`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-project.html#cfn-evidently-project-s3destination-bucketname */
  BucketName: string | Intrinsic
  /**
   * - The bucket prefix in which Evidently stores evaluation events.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[-a-zA-Z0-9!_.*'()/]*$`
   * - _Minimum_: `1`
   * - _Maximum_: `1024`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-project.html#cfn-evidently-project-s3destination-prefix */
  Prefix?: string | Intrinsic
}

/**
 * A structure that contains information about where Evidently is to store evaluation events for longer term storage.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-project.html */

export interface DataDeliveryObject {
  /**
   * - If the project stores evaluation events in CloudWatch Logs, this structure stores the log group name.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[-a-zA-Z0-9._/]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-project.html#cfn-evidently-project-datadeliveryobject-loggroup */
  LogGroup?: string | Intrinsic
  /**
   * - If the project stores evaluation events in an Amazon S3 bucket, this structure stores the bucket name and bucket prefix.
   * - _Required_: No
   * - _Type_: [S3Destination](./aws-properties-evidently-project-s3destination.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-project.html#cfn-evidently-project-datadeliveryobject-s3 */
  S3?: S3Destination
}

/**
 * Creates a project, which is the logical object in Evidently that can contain features, launches, and experiments. Use projects to group similar features together.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-project.html */

export interface EvidentlyProject extends ResourceAttributes {
  Type: 'AWS::Evidently::Project'
  Properties: {
    /**
     * - Use this parameter if the project will use _client-side evaluation powered by AWS AppConfig_ . Client-side evaluation allows your application to assign variations to user sessions locally instead of by calling the [EvaluateFeature](https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_EvaluateFeature.html) operation. This mitigates the latency and availability risks that come with an API call. For more information, see [Use client-side evaluation - powered by AWS AppConfig.](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Evidently-client-side-evaluation.html)
     * - This parameter is a structure that contains information about the AWS AppConfig application that will be used as for client-side evaluation.
     * - To create a project that uses client-side evaluation, you must have the `evidently:ExportProjectAsConfiguration` permission.
     * - _Required_: No
     * - _Type_: [AppConfigResourceObject](./aws-properties-evidently-project-appconfigresourceobject.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-project.html#cfn-evidently-project-appconfigresource */
    AppConfigResource?: AppConfigResourceObject
    /**
     * - A structure that contains information about where Evidently is to store evaluation events for longer term storage, if you choose to do so. If you choose not to store these events, Evidently deletes them after using them to produce metrics and other experiment results that you can view.
     * - You can't specify both `CloudWatchLogs` and `S3Destination` in the same operation.
     * - _Required_: No
     * - _Type_: [DataDeliveryObject](./aws-properties-evidently-project-datadeliveryobject.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-project.html#cfn-evidently-project-datadelivery */
    DataDelivery?: DataDeliveryObject
    /**
     * - An optional description of the project.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `160`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-project.html#cfn-evidently-project-description */
    Description?: string | Intrinsic
    /**
     * - The name for the project. It can include up to 127 characters.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[-a-zA-Z0-9._]*`
     * - _Minimum_: `1`
     * - _Maximum_: `127`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-project.html#cfn-evidently-project-name */
    Name: string | Intrinsic
    /**
     * - Assigns one or more tags (key-value pairs) to the project.
     * - Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.
     * - Tags don't have any semantic meaning to AWS and are interpreted strictly as strings of characters.
     * - You can associate as many as 50 tags with a project.
     * - For more information, see [Tagging AWS resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html).
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-evidently-project-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-project.html#cfn-evidently-project-tags */
    Tags?: Tag[]
  }
}
