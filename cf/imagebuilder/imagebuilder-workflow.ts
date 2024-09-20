import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Create a new workflow or a new version of an existing workflow.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-workflow.html */

export interface ImageBuilderWorkflow extends ResourceAttributes {
  Type: 'AWS::ImageBuilder::Workflow'
  Properties: {
    /**
     * - Describes what change has been made in this version of the workflow, or what makes this version different from other versions of the workflow.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `1024`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-workflow.html#cfn-imagebuilder-workflow-changedescription */
    ChangeDescription?: string | Intrinsic
    /**
     * - Contains the UTF-8 encoded YAML document content for the workflow. Alternatively, you can specify the `uri` of a YAML document file stored in Amazon S3. However, you cannot specify both properties.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `16000`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-workflow.html#cfn-imagebuilder-workflow-data */
    Data?: string | Intrinsic
    /**
     * - Describes the workflow.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `1024`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-workflow.html#cfn-imagebuilder-workflow-description */
    Description?: string | Intrinsic
    /**
     * - The ID of the KMS key that is used to encrypt this workflow resource.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `1024`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-workflow.html#cfn-imagebuilder-workflow-kmskeyid */
    KmsKeyId?: string | Intrinsic
    /**
     * - The name of the workflow to create.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[-_A-Za-z-0-9][-_A-Za-z0-9 ]{1,126}[-_A-Za-z-0-9]$`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-workflow.html#cfn-imagebuilder-workflow-name */
    Name: string | Intrinsic
    /**
     * - Tags that apply to the workflow resource.
     * - _Required_: No
     * - _Type_: Object of String
     * - _Pattern_: `.{1,}`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-workflow.html#cfn-imagebuilder-workflow-tags */
    Tags?: Record<string, string | Intrinsic>
    /**
     * - The phase in the image build process for which the workflow resource is responsible.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `BUILD | TEST | DISTRIBUTION`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-workflow.html#cfn-imagebuilder-workflow-type */
    Type: string | Intrinsic
    /**
     * - The `uri` of a YAML component document file. This must be an S3 URL (`s3://bucket/key`), and the requester must have permission to access the S3 bucket it points to. If you use Amazon S3, you can specify component content up to your service quota.
     * - Alternatively, you can specify the YAML document inline, using the component `data` property. You cannot specify both properties.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-workflow.html#cfn-imagebuilder-workflow-uri */
    Uri?: string | Intrinsic
    /**
     * - The semantic version of this workflow resource. The semantic version syntax adheres to the following rules.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[0-9]+\.[0-9]+\.[0-9]+$`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-workflow.html#cfn-imagebuilder-workflow-version */
    Version: string | Intrinsic
  }
}
