import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * A sampling rule that services use to decide whether to instrument a request. Rule fields can match properties of the service, or properties of a request. The service can ignore rules that don't match its properties.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-xray-samplingrule.html */

export interface SamplingRule {
    /**
     * - Matches attributes derived from the request.
     * - _Map Entries:_ Maximum number of 5 items.
     * - _Key Length Constraints:_ Minimum length of 1. Maximum length of 32.
     * - _Value Length Constraints:_ Minimum length of 1. Maximum length of 32.
     * - _Required_: No
     * - _Type_: Object of String
     * - _Pattern_: `.{1,}`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-xray-samplingrule.html#cfn-xray-samplingrule-samplingrule-attributes */
    "Attributes"?: Record<string, string | Intrinsic>;
    /**
     * - The percentage of matching requests to instrument, after the reservoir is exhausted.
     * - _Required_: Yes
     * - _Type_: Number
     * - _Minimum_: `0`
     * - _Maximum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-xray-samplingrule.html#cfn-xray-samplingrule-samplingrule-fixedrate */
    "FixedRate": number | Intrinsic;
    /**
     * - Matches the hostname from a request URL.
     * - _Required_: Yes
     * - _Type_: String
     * - _Maximum_: `64`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-xray-samplingrule.html#cfn-xray-samplingrule-samplingrule-host */
    "Host": string | Intrinsic;
    /**
     * - Matches the HTTP method of a request.
     * - _Required_: Yes
     * - _Type_: String
     * - _Maximum_: `10`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-xray-samplingrule.html#cfn-xray-samplingrule-samplingrule-httpmethod */
    "HTTPMethod": string | Intrinsic;
    /**
     * - The priority of the sampling rule.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Maximum_: `9999`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-xray-samplingrule.html#cfn-xray-samplingrule-samplingrule-priority */
    "Priority": number | Intrinsic;
    /**
     * - A fixed number of matching requests to instrument per second, prior to applying the fixed rate. The reservoir is not used directly by services, but applies to all services using the rule collectively.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-xray-samplingrule.html#cfn-xray-samplingrule-samplingrule-reservoirsize */
    "ReservoirSize": number | Intrinsic;
    /**
     * - Matches the ARN of the AWS resource on which the service runs.
     * - _Required_: Yes
     * - _Type_: String
     * - _Maximum_: `500`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-xray-samplingrule.html#cfn-xray-samplingrule-samplingrule-resourcearn */
    "ResourceARN": string | Intrinsic;
    /**
     * - The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.
     * - _Required_: Conditional
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-xray-samplingrule.html#cfn-xray-samplingrule-samplingrule-rulearn */
    "RuleARN"?: string | Intrinsic;
    /**
     * - The name of the sampling rule. Specify a rule by either name or ARN, but not both.
     * - _Required_: Conditional
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `32`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-xray-samplingrule.html#cfn-xray-samplingrule-samplingrule-rulename */
    "RuleName"?: string | Intrinsic;
    /**
     * - Matches the `name` that the service uses to identify itself in segments.
     * - _Required_: Yes
     * - _Type_: String
     * - _Maximum_: `64`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-xray-samplingrule.html#cfn-xray-samplingrule-samplingrule-servicename */
    "ServiceName": string | Intrinsic;
    /**
     * - Matches the `origin` that the service uses to identify its type in segments.
     * - _Required_: Yes
     * - _Type_: String
     * - _Maximum_: `64`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-xray-samplingrule.html#cfn-xray-samplingrule-samplingrule-servicetype */
    "ServiceType": string | Intrinsic;
    /**
     * - Matches the path from a request URL.
     * - _Required_: Yes
     * - _Type_: String
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-xray-samplingrule.html#cfn-xray-samplingrule-samplingrule-urlpath */
    "URLPath": string | Intrinsic;
    /**
     * - The version of the sampling rule. `Version` can only be set when creating a new sampling rule.
     * - _Required_: Conditional
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-xray-samplingrule.html#cfn-xray-samplingrule-samplingrule-version */
    "Version"?: number | Intrinsic;
}

/**
 * A map that contains tag keys and tag values to attach to an AWS X-Ray group or sampling rule. For more information about ways to use tags, see [Tagging AWS resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) in the _AWS General Reference_.
 * The following restrictions apply to tags:
 * *   Maximum number of user-applied tags per resource: 50
 *     
 * *   Tag keys and values are case sensitive.
 *     
 * *   Don't use `aws:` as a prefix for keys; it's reserved for AWS use. You cannot edit or delete system tags.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-xray-samplingrule.html */

export interface Tag {
    /**
     * - A tag key, such as `Stage` or `Name`. A tag key cannot be empty. The key can be a maximum of 128 characters, and can contain only Unicode letters, numbers, or separators, or the following special characters: `+ - = . _ : /`
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-xray-samplingrule.html#cfn-xray-samplingrule-tag-key */
    "Key": string | Intrinsic;
    /**
     * - An optional tag value, such as `Production` or `test-only`. The value can be a maximum of 255 characters, and contain only Unicode letters, numbers, or separators, or the following special characters: `+ - = . _ : /`
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-xray-samplingrule.html#cfn-xray-samplingrule-tag-value */
    "Value": string | Intrinsic;
}

/**
 * Use the `AWS::XRay::SamplingRule` resource to specify a sampling rule, which controls sampling behavior for instrumented applications. Include a `SamplingRule` entity to create or update a sampling rule.
 * ###### Note
 * 
 * `SamplingRule.Version` can only be set when creating a sampling rule. Updating the version will cause the update to fail.
 * Services retrieve rules with [GetSamplingRules](https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingRules.html), and evaluate each rule in ascending order of _priority_ for each request. If a rule matches, the service records a trace, borrowing it from the reservoir size. After 10 seconds, the service reports back to X-Ray with [GetSamplingTargets](https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingTargets.html) to get updated versions of each in-use rule. The updated rule contains a trace quota that the service can use instead of borrowing from the reservoir.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-xray-samplingrule.html */

export interface XRaySamplingRule extends ResourceAttributes {
    "Type": "AWS::XRay::SamplingRule";
    "Properties": {
        /**
         * - The sampling rule to be created or updated.
         * - _Required_: No
         * - _Type_: [SamplingRule](./aws-properties-xray-samplingrule-samplingrule.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-xray-samplingrule.html#cfn-xray-samplingrule-samplingrule */
        "SamplingRule"?: SamplingRule;
        /**
         * - An array of key-value pairs to apply to this resource.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-xray-samplingrule-tag.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-xray-samplingrule.html#cfn-xray-samplingrule-tags */
        "Tags"?: Tag[];
    };
}