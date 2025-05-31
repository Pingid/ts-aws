import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Creates a key-value pair for a specific resource. Tags are metadata that you can use to search for and group a resource for various purposes. You can apply tags to servers, users, and roles. A tag key can take more than one value. For example, to group servers for accounting purposes, you might create a tag called `Group` and assign the values `Research` and `Accounting` to that group.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-workflow.html */

export interface Tag {
    /**
     * - The name assigned to the tag that you create.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-workflow.html#cfn-transfer-workflow-tag-key */
    "Key": string | Intrinsic;
    /**
     * - Contains one or more values that you assigned to the key name you create.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-workflow.html#cfn-transfer-workflow-tag-value */
    "Value": string | Intrinsic;
}

/**
 * Details for a step that invokes an AWS Lambda function.
 * Consists of the Lambda function's name, target, and timeout (in seconds).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-workflow.html */

export interface CustomStepDetails {
    /**
     * - The name of the step, used as an identifier.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[\w-]*$`
     * - _Minimum_: `0`
     * - _Maximum_: `30`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-workflow.html#cfn-transfer-workflow-customstepdetails-name */
    "Name"?: string | Intrinsic;
    /**
     * - Specifies which file to use as input to the workflow step: either the output from the previous step, or the originally uploaded file for the workflow.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^\$\{(\w+.)+\w+\}$`
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-workflow.html#cfn-transfer-workflow-customstepdetails-sourcefilelocation */
    "SourceFileLocation"?: string | Intrinsic;
    /**
     * - The ARN for the Lambda function that is being called.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `arn:[a-z-]+:lambda:.*$`
     * - _Minimum_: `0`
     * - _Maximum_: `170`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-workflow.html#cfn-transfer-workflow-customstepdetails-target */
    "Target"?: string | Intrinsic;
    /**
     * - Timeout, in seconds, for the step.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Maximum_: `1800`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-workflow.html#cfn-transfer-workflow-customstepdetails-timeoutseconds */
    "TimeoutSeconds"?: number | Intrinsic;
}

/**
 * An object that contains the name and file location for a file being deleted by a workflow.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-workflow.html */

export interface DeleteStepDetails {
    /**
     * - The name of the step, used as an identifier.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[\w-]*$`
     * - _Minimum_: `0`
     * - _Maximum_: `30`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-workflow.html#cfn-transfer-workflow-deletestepdetails-name */
    "Name"?: string | Intrinsic;
    /**
     * - Specifies which file to use as input to the workflow step: either the output from the previous step, or the originally uploaded file for the workflow.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^\$\{(\w+.)+\w+\}$`
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-workflow.html#cfn-transfer-workflow-deletestepdetails-sourcefilelocation */
    "SourceFileLocation"?: string | Intrinsic;
}

/**
 * Specifies the key-value pair that are assigned to a file during the execution of a Tagging step.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-workflow.html */

export interface S3Tag {
    /**
     * - The name assigned to the tag that you create.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-workflow.html#cfn-transfer-workflow-s3tag-key */
    "Key": string | Intrinsic;
    /**
     * - The value that corresponds to the key.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-workflow.html#cfn-transfer-workflow-s3tag-value */
    "Value": string | Intrinsic;
}

/**
 * Details for a step that creates one or more tags.
 * You specify one or more tags. Each tag contains a key-value pair.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-workflow.html */

export interface TagStepDetails {
    /**
     * - The name of the step, used as an identifier.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[\w-]*$`
     * - _Minimum_: `0`
     * - _Maximum_: `30`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-workflow.html#cfn-transfer-workflow-tagstepdetails-name */
    "Name"?: string | Intrinsic;
    /**
     * - Specifies which file to use as input to the workflow step: either the output from the previous step, or the originally uploaded file for the workflow.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^\$\{(\w+.)+\w+\}$`
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-workflow.html#cfn-transfer-workflow-tagstepdetails-sourcefilelocation */
    "SourceFileLocation"?: string | Intrinsic;
    /**
     * - Array that contains from 1 to 10 key/value pairs.
     * - _Required_: No
     * - _Type_: Array of [S3Tag](./aws-properties-transfer-workflow-s3tag.html)
     * - _Maximum_: `10`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-workflow.html#cfn-transfer-workflow-tagstepdetails-tags */
    "Tags"?: S3Tag[];
}

/**
 * Specifies the details for the Amazon S3 location for an input file to a workflow.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-workflow.html */

export interface S3InputFileLocation {
    /**
     * - Specifies the S3 bucket for the customer input file.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9]$`
     * - _Minimum_: `3`
     * - _Maximum_: `63`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-workflow.html#cfn-transfer-workflow-s3inputfilelocation-bucket */
    "Bucket"?: string | Intrinsic;
    /**
     * - The name assigned to the file when it was created in Amazon S3. You use the object key to retrieve the object.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `.*`
     * - _Minimum_: `0`
     * - _Maximum_: `1024`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-workflow.html#cfn-transfer-workflow-s3inputfilelocation-key */
    "Key"?: string | Intrinsic;
}

/**
 * Specifies the S3 details for the file being used, such as bucket, ETag, and so forth.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-workflow.html */

export interface S3FileLocation {
    /**
     * - Specifies the details for the file location for the file that's being used in the workflow. Only applicable if you are using Amazon S3 storage.
     * - _Required_: No
     * - _Type_: [S3InputFileLocation](./aws-properties-transfer-workflow-s3inputfilelocation.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-workflow.html#cfn-transfer-workflow-s3filelocation-s3filelocation */
    "S3FileLocation"?: S3InputFileLocation;
}

/**
 * Details for a step that performs a file copy.
 * Consists of the following values:
 * *   A description
 *     
 * *   An Amazon S3 location for the destination of the file copy.
 *     
 * *   A flag that indicates whether to overwrite an existing file of the same name. The default is `FALSE`.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-workflow.html */

export interface CopyStepDetails {
    /**
     * - Specifies the location for the file being copied. Use `${Transfer:UserName}` or `${Transfer:UploadDate}` in this field to parametrize the destination prefix by username or uploaded date.
     * - _Required_: No
     * - _Type_: [S3FileLocation](./aws-properties-transfer-workflow-s3filelocation.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-workflow.html#cfn-transfer-workflow-copystepdetails-destinationfilelocation */
    "DestinationFileLocation"?: S3FileLocation;
    /**
     * - The name of the step, used as an identifier.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[\w-]*$`
     * - _Minimum_: `0`
     * - _Maximum_: `30`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-workflow.html#cfn-transfer-workflow-copystepdetails-name */
    "Name"?: string | Intrinsic;
    /**
     * - A flag that indicates whether to overwrite an existing file of the same name. The default is `FALSE`.
     * - If the workflow is processing a file that has the same name as an existing file, the behavior is as follows:
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `TRUE | FALSE`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-workflow.html#cfn-transfer-workflow-copystepdetails-overwriteexisting */
    "OverwriteExisting"?: string | Intrinsic;
    /**
     * - Specifies which file to use as input to the workflow step: either the output from the previous step, or the originally uploaded file for the workflow.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^\$\{(\w+.)+\w+\}$`
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-workflow.html#cfn-transfer-workflow-copystepdetails-sourcefilelocation */
    "SourceFileLocation"?: string | Intrinsic;
}

/**
 * Specifies the Amazon EFS identifier and the path for the file being used.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-workflow.html */

export interface EfsInputFileLocation {
    /**
     * - The identifier of the file system, assigned by Amazon EFS.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^(arn:aws[-a-z]*:elasticfilesystem:[0-9a-z-:]+:(access-point/fsap|file-system/fs)-[0-9a-f]{8,40}|fs(ap)?-[0-9a-f]{8,40})$`
     * - _Minimum_: `0`
     * - _Maximum_: `128`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-workflow.html#cfn-transfer-workflow-efsinputfilelocation-filesystemid */
    "FileSystemId"?: string | Intrinsic;
    /**
     * - The pathname for the folder being used by a workflow.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[^\x00]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `65536`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-workflow.html#cfn-transfer-workflow-efsinputfilelocation-path */
    "Path"?: string | Intrinsic;
}

/**
 * Specifies the location for the file that's being processed.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-workflow.html */

export interface InputFileLocation {
    /**
     * - Specifies the details for the Amazon Elastic File System (Amazon EFS) file that's being decrypted.
     * - _Required_: No
     * - _Type_: [EfsInputFileLocation](./aws-properties-transfer-workflow-efsinputfilelocation.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-workflow.html#cfn-transfer-workflow-inputfilelocation-efsfilelocation */
    "EfsFileLocation"?: EfsInputFileLocation;
    /**
     * - Specifies the details for the Amazon S3 file that's being copied or decrypted.
     * - _Required_: No
     * - _Type_: [S3InputFileLocation](./aws-properties-transfer-workflow-s3inputfilelocation.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-workflow.html#cfn-transfer-workflow-inputfilelocation-s3filelocation */
    "S3FileLocation"?: S3InputFileLocation;
}

/**
 * Details for a step that decrypts an encrypted file.
 * Consists of the following values:
 * *   A descriptive name
 *     
 * *   An Amazon S3 or Amazon Elastic File System (Amazon EFS) location for the source file to decrypt.
 *     
 * *   An S3 or Amazon EFS location for the destination of the file decryption.
 *     
 * *   A flag that indicates whether to overwrite an existing file of the same name. The default is `FALSE`.
 *     
 * *   The type of encryption that's used. Currently, only PGP encryption is supported.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-workflow.html */

export interface DecryptStepDetails {
    /**
     * - Specifies the location for the file being decrypted. Use `${Transfer:UserName}` or `${Transfer:UploadDate}` in this field to parametrize the destination prefix by username or uploaded date.
     * - _Required_: Yes
     * - _Type_: [InputFileLocation](./aws-properties-transfer-workflow-inputfilelocation.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-workflow.html#cfn-transfer-workflow-decryptstepdetails-destinationfilelocation */
    "DestinationFileLocation": InputFileLocation;
    /**
     * - The name of the step, used as an identifier.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[\w-]*$`
     * - _Minimum_: `0`
     * - _Maximum_: `30`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-workflow.html#cfn-transfer-workflow-decryptstepdetails-name */
    "Name"?: string | Intrinsic;
    /**
     * - A flag that indicates whether to overwrite an existing file of the same name. The default is `FALSE`.
     * - If the workflow is processing a file that has the same name as an existing file, the behavior is as follows:
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `TRUE | FALSE`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-workflow.html#cfn-transfer-workflow-decryptstepdetails-overwriteexisting */
    "OverwriteExisting"?: string | Intrinsic;
    /**
     * - Specifies which file to use as input to the workflow step: either the output from the previous step, or the originally uploaded file for the workflow.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^\$\{(\w+.)+\w+\}$`
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-workflow.html#cfn-transfer-workflow-decryptstepdetails-sourcefilelocation */
    "SourceFileLocation"?: string | Intrinsic;
    /**
     * - The type of encryption used. Currently, this value must be `PGP`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `PGP`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-workflow.html#cfn-transfer-workflow-decryptstepdetails-type */
    "Type": string | Intrinsic;
}

/**
 * The basic building block of a workflow.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-workflow.html */

export interface WorkflowStep {
    /**
     * - Details for a step that performs a file copy.
     * - Consists of the following values:
     * - _Required_: No
     * - _Type_: [CopyStepDetails](./aws-properties-transfer-workflow-copystepdetails.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-workflow.html#cfn-transfer-workflow-workflowstep-copystepdetails */
    "CopyStepDetails"?: CopyStepDetails;
    /**
     * - Details for a step that invokes an AWS Lambda function.
     * - Consists of the Lambda function's name, target, and timeout (in seconds).
     * - _Required_: No
     * - _Type_: [CustomStepDetails](./aws-properties-transfer-workflow-customstepdetails.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-workflow.html#cfn-transfer-workflow-workflowstep-customstepdetails */
    "CustomStepDetails"?: CustomStepDetails;
    /**
     * - Details for a step that decrypts an encrypted file.
     * - Consists of the following values:
     * - _Required_: No
     * - _Type_: [DecryptStepDetails](./aws-properties-transfer-workflow-decryptstepdetails.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-workflow.html#cfn-transfer-workflow-workflowstep-decryptstepdetails */
    "DecryptStepDetails"?: DecryptStepDetails;
    /**
     * - Details for a step that deletes the file.
     * - _Required_: No
     * - _Type_: [DeleteStepDetails](./aws-properties-transfer-workflow-deletestepdetails.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-workflow.html#cfn-transfer-workflow-workflowstep-deletestepdetails */
    "DeleteStepDetails"?: DeleteStepDetails;
    /**
     * - Details for a step that creates one or more tags.
     * - You specify one or more tags. Each tag contains a key-value pair.
     * - _Required_: No
     * - _Type_: [TagStepDetails](./aws-properties-transfer-workflow-tagstepdetails.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-workflow.html#cfn-transfer-workflow-workflowstep-tagstepdetails */
    "TagStepDetails"?: TagStepDetails;
    /**
     * - Currently, the following step types are supported.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `COPY | CUSTOM | DECRYPT | DELETE | TAG`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-workflow.html#cfn-transfer-workflow-workflowstep-type */
    "Type"?: string | Intrinsic;
}

/**
 * Allows you to create a workflow with specified steps and step details the workflow invokes after file transfer completes. After creating a workflow, you can associate the workflow created with any transfer servers by specifying the `workflow-details` field in `CreateServer` and `UpdateServer` operations.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-workflow.html */

export interface TransferWorkflow extends ResourceAttributes {
    "Type": "AWS::Transfer::Workflow";
    "Properties": {
        /**
         * - Specifies the text description for the workflow.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^[\w\- ]*$`
         * - _Minimum_: `0`
         * - _Maximum_: `256`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-workflow.html#cfn-transfer-workflow-description */
        "Description"?: string | Intrinsic;
        /**
         * - Specifies the steps (actions) to take if errors are encountered during execution of the workflow.
         * - _Required_: No
         * - _Type_: Array of [WorkflowStep](./aws-properties-transfer-workflow-workflowstep.html)
         * - _Maximum_: `8`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-workflow.html#cfn-transfer-workflow-onexceptionsteps */
        "OnExceptionSteps"?: WorkflowStep[];
        /**
         * - Specifies the details for the steps that are in the specified workflow.
         * - _Required_: Yes
         * - _Type_: Array of [WorkflowStep](./aws-properties-transfer-workflow-workflowstep.html)
         * - _Maximum_: `8`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-workflow.html#cfn-transfer-workflow-steps */
        "Steps": WorkflowStep[];
        /**
         * - Key-value pairs that can be used to group and search for workflows. Tags are metadata attached to workflows for any purpose.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-transfer-workflow-tag.html)
         * - _Maximum_: `50`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-workflow.html#cfn-transfer-workflow-tags */
        "Tags"?: Tag[];
    };
}