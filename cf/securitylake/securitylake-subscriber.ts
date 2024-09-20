import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Specify the AWS account ID and external ID that the subscriber will use to access source data.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-subscriber.html */

export interface SubscriberIdentity {
  /**
   * - The external ID is a unique identifier that the subscriber provides to you.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[\w+=,.@:/-]*$`
   * - _Minimum_: `2`
   * - _Maximum_: `1224`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-subscriber.html#cfn-securitylake-subscriber-subscriberidentity-externalid */
  ExternalId: string | Intrinsic
  /**
   * - Principals can include accounts, users, roles, federated users, or AWS services.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^([0-9]{12}|[a-z0-9\.\-]*\.(amazonaws|amazon)\.com)$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-subscriber.html#cfn-securitylake-subscriber-subscriberidentity-principal */
  Principal: string | Intrinsic
}

/**
 * A _tag_ is a label that you can define and associate with AWS resources, including certain types of Amazon Security Lake resources. Tags can help you identify, categorize, and manage resources in different ways, such as by owner, environment, or other criteria. You can associate tags with the following types of Security Lake resources: subscribers, and the data lake configuration for your AWS account in individual AWS Regions.
 * A resource can have up to 50 tags. Each tag consists of a required _tag key_ and an associated _tag value_. A _tag key_ is a general label that acts as a category for a more specific tag value. Each tag key must be unique and it can have only one tag value. A _tag value_ acts as a descriptor for a tag key. Tag keys and values are case sensitive. They can contain letters, numbers, spaces, or the following symbols: \_ . : / = + @ -
 * For more information, see [Tagging Amazon Security Lake resources](https://docs.aws.amazon.com/security-lake/latest/userguide/tagging-resources.html) in the _Amazon Security Lake User Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-subscriber.html */

export interface Tag {
  /**
   * - The name of the tag. This is a general label that acts as a category for a more specific tag value (`value`).
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-subscriber.html#cfn-securitylake-subscriber-tag-key */
  Key: string | Intrinsic
  /**
   * - The value that’s associated with the specified tag key (`key`). This value acts as a descriptor for the tag key. A tag value cannot be null, but it can be an empty string.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-subscriber.html#cfn-securitylake-subscriber-tag-value */
  Value: string | Intrinsic
}

/**
 * Adds a natively supported AWS service as an Amazon Security Lake source. Enables source types for member accounts in required AWS Regions, based on the parameters you specify. You can choose any source type in any Region for either accounts that are part of a trusted organization or standalone accounts. Once you add an AWS service as a source, Security Lake starts collecting logs and events from it.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-subscriber.html */

export interface AwsLogSource {
  /**
   * - Source name of the natively supported AWS service that is supported as an Amazon Security Lake source. For the list of sources supported by Amazon Security Lake see [Collecting data from AWS services](https://docs.aws.amazon.com/security-lake/latest/userguide/internal-sources.html) in the Amazon Security Lake User Guide.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-subscriber.html#cfn-securitylake-subscriber-awslogsource-sourcename */
  SourceName?: string | Intrinsic
  /**
   * - Source version of the natively supported AWS service that is supported as an Amazon Security Lake source. For more details about source versions supported by Amazon Security Lake see [OCSF source identification](https://docs.aws.amazon.com/security-lake/latest/userguide/open-cybersecurity-schema-framework.html#ocsf-source-identification) in the Amazon Security Lake User Guide.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^(latest|[0-9]\.[0-9])$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-subscriber.html#cfn-securitylake-subscriber-awslogsource-sourceversion */
  SourceVersion?: string | Intrinsic
}

/**
 * Third-party custom log source that meets the requirements to be added to Amazon Security Lake. For more details, see [Custom log source](https://docs.aws.amazon.com/security-lake/latest/userguide/custom-sources.html#iam-roles-custom-sources) in the _Amazon Security Lake User Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-subscriber.html */

export interface CustomLogSource {
  /**
   * - The name of the custom log source.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[\\\w\-_:/.]*$`
   * - _Minimum_: `1`
   * - _Maximum_: `64`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-subscriber.html#cfn-securitylake-subscriber-customlogsource-sourcename */
  SourceName?: string | Intrinsic
  /**
   * - The source version of the custom log source.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[A-Za-z0-9\-\.\_]*$`
   * - _Minimum_: `1`
   * - _Maximum_: `32`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-subscriber.html#cfn-securitylake-subscriber-customlogsource-sourceversion */
  SourceVersion?: string | Intrinsic
}

/**
 * Sources are logs and events generated from a single system that match a specific event class in the Open Cybersecurity Schema Framework (OCSF) schema. Amazon Security Lake can collect logs and events from a variety of sources, including natively supported AWS services and third-party custom sources.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-subscriber.html */

export interface Source {
  /**
   * - The natively supported AWS service which is used a Amazon Security Lake source to collect logs and events from.
   * - _Required_: No
   * - _Type_: [AwsLogSource](./aws-properties-securitylake-subscriber-awslogsource.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-subscriber.html#cfn-securitylake-subscriber-source-awslogsource */
  AwsLogSource?: AwsLogSource
  /**
   * - The custom log source AWS which is used a Amazon Security Lake source to collect logs and events from.
   * - _Required_: No
   * - _Type_: [CustomLogSource](./aws-properties-securitylake-subscriber-customlogsource.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-subscriber.html#cfn-securitylake-subscriber-source-customlogsource */
  CustomLogSource?: CustomLogSource
}

/**
 * Creates a subscriber for accounts that are already enabled in Amazon Security Lake. You can create a subscriber with access to data in the current AWS Region.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-subscriber.html */

export interface SecurityLakeSubscriber extends ResourceAttributes {
  Type: 'AWS::SecurityLake::Subscriber'
  Properties: {
    /**
     * - You can choose to notify subscribers of new objects with an Amazon Simple Queue Service (Amazon SQS) queue or through messaging to an HTTPS endpoint provided by the subscriber.
     * - Subscribers can consume data by directly querying AWS Lake Formation tables in your Amazon S3 bucket through services like Amazon Athena. This subscription type is defined as `LAKEFORMATION`.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Allowed values_: `LAKEFORMATION | S3`
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-subscriber.html#cfn-securitylake-subscriber-accesstypes */
    AccessTypes: (string | Intrinsic)[]
    /**
     * - The Amazon Resource Name (ARN) used to create the data lake.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-subscriber.html#cfn-securitylake-subscriber-datalakearn */
    DataLakeArn: string | Intrinsic
    /**
     * - Amazon Security Lake supports log and event collection for natively supported AWS services. For more information, see the [Amazon Security Lake User Guide](https://docs.aws.amazon.com/security-lake/latest/userguide/source-management.html).
     * - _Required_: Yes
     * - _Type_: Array of [Source](./aws-properties-securitylake-subscriber-source.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-subscriber.html#cfn-securitylake-subscriber-sources */
    Sources: Source[]
    /**
     * - The subscriber descriptions for a subscriber account. The description for a subscriber includes `subscriberName`, `accountID`, `externalID`, and `subscriberId`.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-subscriber.html#cfn-securitylake-subscriber-subscriberdescription */
    SubscriberDescription?: string | Intrinsic
    /**
     * - The AWS identity used to access your data.
     * - _Required_: Yes
     * - _Type_: [SubscriberIdentity](./aws-properties-securitylake-subscriber-subscriberidentity.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-subscriber.html#cfn-securitylake-subscriber-subscriberidentity */
    SubscriberIdentity: SubscriberIdentity
    /**
     * - The name of your Amazon Security Lake subscriber account.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[\\\w\s\-_:/,.@=+]*$`
     * - _Minimum_: `1`
     * - _Maximum_: `64`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-subscriber.html#cfn-securitylake-subscriber-subscribername */
    SubscriberName: string | Intrinsic
    /**
     * - An array of objects, one for each tag to associate with the subscriber. For each tag, you must specify both a tag key and a tag value. A tag value cannot be null, but it can be an empty string.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-securitylake-subscriber-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-subscriber.html#cfn-securitylake-subscriber-tags */
    Tags?: Tag[]
  }
}
