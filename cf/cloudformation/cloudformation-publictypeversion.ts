import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Tests and publishes a registered extension as a public, third-party extension.
 * CloudFormation first tests the extension to make sure it meets all necessary requirements for being published in the CloudFormation registry. If it does, CloudFormation then publishes it to the registry as a public third-party extension in this Region. Public extensions are available for use by all CloudFormation users.
 * *   For resource types, testing includes passing all contracts tests defined for the type.
 *
 * *   For modules, testing includes determining if the module's model meets all necessary requirements.
 * For more information, see [Testing your public extension prior to publishing](https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/publish-extension.html#publish-extension-testing) in the _CloudFormation CLI User Guide_.
 * If you don't specify a version, CloudFormation uses the default version of the extension in your account and Region for testing.
 * To perform testing, CloudFormation assumes the execution role specified when the type was registered.
 * An extension must have a test status of `PASSED` before it can be published. For more information, see [Publishing extensions to make them available for public use](https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-publish.html) in the _CloudFormation CLI User Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-publictypeversion.html */

export interface CloudFormationPublicTypeVersion extends ResourceAttributes {
  Type: 'AWS::CloudFormation::PublicTypeVersion'
  Properties: {
    /**
     * - The Amazon Resource Number (ARN) of the extension.
     * - Conditional: You must specify `Arn`, or `TypeName` and `Type`.
     * - _Required_: Conditional
     * - _Type_: String
     * - _Pattern_: `arn:aws[A-Za-z0-9-]{0,64}:cloudformation:[A-Za-z0-9-]{1,64}:[0-9]{12}:type/.+`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-publictypeversion.html#cfn-cloudformation-publictypeversion-arn */
    Arn?: string | Intrinsic
    /**
     * - The S3 bucket to which CloudFormation delivers the contract test execution logs.
     * - CloudFormation delivers the logs by the time contract testing has completed and the extension has been assigned a test type status of `PASSED` or `FAILED`.
     * - The user initiating the stack operation must be able to access items in the specified S3 bucket. Specifically, the user needs the following permissions:
     * - For more information, see [Actions, Resources, and Condition Keys for Amazon S3](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html) in the _AWS Identity and Access Management User Guide_.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[\s\S]+`
     * - _Minimum_: `3`
     * - _Maximum_: `63`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-publictypeversion.html#cfn-cloudformation-publictypeversion-logdeliverybucket */
    LogDeliveryBucket?: string | Intrinsic
    /**
     * - The version number to assign to this version of the extension.
     * - Use the following format, and adhere to semantic versioning when assigning a version number to your extension:
     * - `MAJOR.MINOR.PATCH`
     * - For more information, see [Semantic Versioning 2.0.0](https://semver.org/).
     * - If you don't specify a version number, CloudFormation increments the version number by one minor version release.
     * - You cannot specify a version number the first time you publish a type. CloudFormation automatically sets the first version number to be `1.0.0`.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `5`
     * - _Maximum_: `64`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-publictypeversion.html#cfn-cloudformation-publictypeversion-publicversionnumber */
    PublicVersionNumber?: string | Intrinsic
    /**
     * - The type of the extension to test.
     * - Conditional: You must specify `Arn`, or `TypeName` and `Type`.
     * - _Required_: Conditional
     * - _Type_: String
     * - _Allowed values_: `RESOURCE | MODULE | HOOK`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-publictypeversion.html#cfn-cloudformation-publictypeversion-type */
    Type?: string | Intrinsic
    /**
     * - The name of the extension to test.
     * - Conditional: You must specify `Arn`, or `TypeName` and `Type`.
     * - _Required_: Conditional
     * - _Type_: String
     * - _Pattern_: `[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}(::MODULE){0,1}`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-publictypeversion.html#cfn-cloudformation-publictypeversion-typename */
    TypeName?: string | Intrinsic
  }
}
