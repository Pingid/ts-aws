import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Creates a version of the SageMaker image specified by `ImageName`. The version represents the Amazon Container Registry (ECR) container image specified by `BaseImage`.
 * ###### Note
 *
 * You can use the `DependsOn` attribute to specify that the creation of a specific resource follows another. You can use it for the following use cases. For more information, see [`DependsOn` attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-dependson.html).
 *
 * 1\. `DependsOn` can be used to establish a parent/child relationship between `ImageVersion` and `Image` where the `ImageVersion` `DependsOn`the `Image`.
 *
 * 2\. `DependsOn` can be used to establish order among `ImageVersion`s within the same `Image` namespace. For example, if ImageVersionB `DependsOn` ImageVersionA and both share the same parent `Image`, then ImageVersionA is version N and ImageVersionB is N+1.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-imageversion.html */

export interface SageMakerImageVersion extends ResourceAttributes {
  Type: 'AWS::SageMaker::ImageVersion'
  Properties: {
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `(?!^[.-])^([a-zA-Z0-9-_.]+)$`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-imageversion.html#cfn-sagemaker-imageversion-alias */
    Alias?: string | Intrinsic
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-imageversion.html#cfn-sagemaker-imageversion-aliases */
    Aliases?: (string | Intrinsic)[]
    /**
     * - The container image that the SageMaker image version is based on.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `.+`
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-imageversion.html#cfn-sagemaker-imageversion-baseimage */
    BaseImage: string | Intrinsic
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-imageversion.html#cfn-sagemaker-imageversion-horovod */
    Horovod?: boolean | Intrinsic
    /**
     * - The name of the parent image.
     * - _Length Constraints_: Minimum length of 1. Maximum length of 63.
     * - _Pattern_: `^[a-zA-Z0-9]([-.]?[a-zA-Z0-9]){0,62}$`
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[A-Za-z0-9]([-.]?[A-Za-z0-9])*$`
     * - _Minimum_: `1`
     * - _Maximum_: `63`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-imageversion.html#cfn-sagemaker-imageversion-imagename */
    ImageName: string | Intrinsic
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `TRAINING | INFERENCE | NOTEBOOK_KERNEL`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-imageversion.html#cfn-sagemaker-imageversion-jobtype */
    JobType?: string | Intrinsic
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z]+ ?\d+\.\d+(\.\d+)?$`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-imageversion.html#cfn-sagemaker-imageversion-mlframework */
    MLFramework?: string | Intrinsic
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `CPU | GPU`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-imageversion.html#cfn-sagemaker-imageversion-processor */
    Processor?: string | Intrinsic
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z]+ ?\d+\.\d+(\.\d+)?$`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-imageversion.html#cfn-sagemaker-imageversion-programminglang */
    ProgrammingLang?: string | Intrinsic
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `.*`
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-imageversion.html#cfn-sagemaker-imageversion-releasenotes */
    ReleaseNotes?: string | Intrinsic
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `NOT_PROVIDED | STABLE | TO_BE_ARCHIVED | ARCHIVED`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-imageversion.html#cfn-sagemaker-imageversion-vendorguidance */
    VendorGuidance?: string | Intrinsic
  }
}
