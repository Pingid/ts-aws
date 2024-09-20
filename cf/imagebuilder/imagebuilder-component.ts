import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Creates a new component that can be used to build, validate, test, and assess your image. The component is based on a YAML document that you specify using exactly one of the following methods:
 * *   Inline, using the `data` property in the request body.
 *
 * *   A URL that points to a YAML document file stored in Amazon S3, using the `uri` property in the request body.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-component.html */

export interface ImageBuilderComponent extends ResourceAttributes {
  Type: 'AWS::ImageBuilder::Component'
  Properties: {
    /**
     * - The change description of the component. Describes what change has been made in this version, or what makes this version different from other versions of the component.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `1024`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-component.html#cfn-imagebuilder-component-changedescription */
    ChangeDescription?: string | Intrinsic
    /**
     * - Component `data` contains inline YAML document content for the component. Alternatively, you can specify the `uri` of a YAML document file stored in Amazon S3. However, you cannot specify both properties.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `16000`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-component.html#cfn-imagebuilder-component-data */
    Data?: string | Intrinsic
    /**
     * - Describes the contents of the component.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `1024`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-component.html#cfn-imagebuilder-component-description */
    Description?: string | Intrinsic
    /**
     * - The ID of the KMS key that is used to encrypt this component.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `1024`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-component.html#cfn-imagebuilder-component-kmskeyid */
    KmsKeyId?: string | Intrinsic
    /**
     * - The name of the component.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[-_A-Za-z-0-9][-_A-Za-z0-9 ]{1,126}[-_A-Za-z-0-9]$`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-component.html#cfn-imagebuilder-component-name */
    Name: string | Intrinsic
    /**
     * - The operating system platform of the component.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `Windows | Linux`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-component.html#cfn-imagebuilder-component-platform */
    Platform: string | Intrinsic
    /**
     * - The operating system (OS) version supported by the component. If the OS information is available, a prefix match is performed against the base image OS version during image recipe creation.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `25`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-component.html#cfn-imagebuilder-component-supportedosversions */
    SupportedOsVersions?: (string | Intrinsic)[]
    /**
     * - The tags that apply to the component.
     * - _Required_: No
     * - _Type_: Object of String
     * - _Pattern_: `.{1,}`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-component.html#cfn-imagebuilder-component-tags */
    Tags?: Record<string, string | Intrinsic>
    /**
     * - The `uri` of a YAML component document file. This must be an S3 URL (`s3://bucket/key`), and the requester must have permission to access the S3 bucket it points to. If you use Amazon S3, you can specify component content up to your service quota.
     * - Alternatively, you can specify the YAML document inline, using the component `data` property. You cannot specify both properties.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-component.html#cfn-imagebuilder-component-uri */
    Uri?: string | Intrinsic
    /**
     * - The component version. For example, `1.0.0`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-component.html#cfn-imagebuilder-component-version */
    Version: string | Intrinsic
  }
}
