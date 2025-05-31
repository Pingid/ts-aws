import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Identifying information about a document attachment, including the file name and a key-value pair that identifies the location of an attachment to a document.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html */

export interface AttachmentsSource {
    /**
     * - The key of a key-value pair that identifies the location of an attachment to a document.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `SourceUrl | S3FileUrl | AttachmentReference`
     * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-attachmentssource-key */
    "Key"?: string | Intrinsic;
    /**
     * - The name of the document attachment file.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-attachmentssource-name */
    "Name"?: string | Intrinsic;
    /**
     * - The value of a key-value pair that identifies the location of an attachment to a document. The format for **Value** depends on the type of key you specify.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `1 | 1`
     * - _Maximum_: `100000 | 1`
     * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-attachmentssource-values */
    "Values"?: (string | Intrinsic)[];
}

/**
 * Metadata that you assign to your AWS resources. Tags enable you to categorize your resources in different ways, for example, by purpose, owner, or environment. In AWS Systems Manager, you can apply tags to Systems Manager documents (SSM documents), managed nodes, maintenance windows, parameters, patch baselines, OpsItems, and OpsMetadata.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html */

export interface Tag {
    /**
     * - The name of the tag.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-tag-key */
    "Key"?: string | Intrinsic;
    /**
     * - The value of the tag.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-tag-value */
    "Value"?: string | Intrinsic;
}

/**
 * An SSM document required by the current document.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html */

export interface DocumentRequires {
    /**
     * - The name of the required SSM document. The name can be an Amazon Resource Name (ARN).
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9_\-.:/]{3,200}$`
     * - _Maximum_: `200`
     * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-documentrequires-name */
    "Name"?: string | Intrinsic;
    /**
     * - The document version required by the current document.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `([$]LATEST|[$]DEFAULT|^[1-9][0-9]*$)`
     * - _Maximum_: `8`
     * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-documentrequires-version */
    "Version"?: string | Intrinsic;
}

/**
 * The `AWS::SSM::Document` resource creates a Systems Manager (SSM) document in AWS Systems Manager. This document defines the actions that Systems Manager performs on your AWS resources.
 * ###### Note
 * 
 * This resource does not support AWS CloudFormation drift detection.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html */

export interface SSMDocument extends ResourceAttributes {
    "Type": "AWS::SSM::Document";
    "Properties": {
        /**
         * - A list of key-value pairs that describe attachments to a version of a document.
         * - _Required_: No
         * - _Type_: Array of [AttachmentsSource](./aws-properties-ssm-document-attachmentssource.html)
         * - _Minimum_: `0`
         * - _Maximum_: `20`
         * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-attachments */
        "Attachments"?: AttachmentsSource[];
        /**
         * - The content for the new SSM document in JSON or YAML. For more information about the schemas for SSM document content, see [SSM document schema features and examples](https://docs.aws.amazon.com/systems-manager/latest/userguide/document-schemas-features.html) in the _AWS Systems Manager User Guide_.
         * - _Required_: Yes
         * - _Type_: Json
         * - _Minimum_: `1`
         * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-content */
        "Content": any | Intrinsic;
        /**
         * - Specify the document format for the request. `JSON` is the default format.
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `YAML | JSON | TEXT`
         * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-documentformat */
        "DocumentFormat"?: string | Intrinsic;
        /**
         * - The type of document to create.
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `ApplicationConfiguration | ApplicationConfigurationSchema | Automation | Automation.ChangeTemplate | AutoApprovalPolicy | ChangeCalendar | CloudFormation | Command | DeploymentStrategy | ManualApprovalPolicy | Package | Policy | ProblemAnalysis | ProblemAnalysisTemplate | Session`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-documenttype */
        "DocumentType"?: string | Intrinsic;
        /**
         * - A name for the SSM document.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^[a-zA-Z0-9_\-.]{3,128}$`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-name */
        "Name"?: string | Intrinsic;
        /**
         * - A list of SSM documents required by a document. This parameter is used exclusively by AWS AppConfig. When a user creates an AWS AppConfig configuration in an SSM document, the user must also specify a required document for validation purposes. In this case, an `ApplicationConfiguration` document requires an `ApplicationConfigurationSchema` document for validation purposes. For more information, see [What is AWS AppConfig?](https://docs.aws.amazon.com/appconfig/latest/userguide/what-is-appconfig.html) in the _AWS AppConfig User Guide_.
         * - _Required_: No
         * - _Type_: Array of [DocumentRequires](./aws-properties-ssm-document-documentrequires.html)
         * - _Minimum_: `1`
         * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-requires */
        "Requires"?: DocumentRequires[];
        /**
         * - AWS CloudFormation resource tags to apply to the document. Use tags to help you identify and categorize resources.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-ssm-document-tag.html)
         * - _Maximum_: `1000`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-tags */
        "Tags"?: Tag[];
        /**
         * - Specify a target type to define the kinds of resources the document can run on. For example, to run a document on EC2 instances, specify the following value: `/AWS::EC2::Instance`. If you specify a value of '/' the document can run on all types of resources. If you don't specify a value, the document can't run on any resources. For a list of valid resource types, see [AWS resource and property types reference](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html) in the _AWS CloudFormation User Guide_.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^\/[\w\.\-\:\/]*$`
         * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-targettype */
        "TargetType"?: string | Intrinsic;
        /**
         * - If the document resource you specify in your template already exists, this parameter determines whether a new version of the existing document is created, or the existing document is replaced. `Replace` is the default method. If you specify `NewVersion` for the `UpdateMethod` parameter, and the `Name` of the document does not match an existing resource, a new document is created. When you specify `NewVersion`, the default version of the document is changed to the newly created version.
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `Replace | NewVersion`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-updatemethod */
        "UpdateMethod"?: string | Intrinsic;
        /**
         * - An optional field specifying the version of the artifact you are creating with the document. For example, `Release12.1`. This value is unique across all versions of a document, and can't be changed.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^[a-zA-Z0-9_\-.]{1,128}$`
         * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-versionname */
        "VersionName"?: string | Intrinsic;
    };
}