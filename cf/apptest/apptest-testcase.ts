import type { Intrinsic } from '../intrinsic/index.js' /**
 * Specifies the mainframe action properties.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html */

export interface MainframeActionProperties {
  /**
   * - The DMS task ARN of the mainframe action properties.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^\S{1,1000}$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html#cfn-apptest-testcase-mainframeactionproperties-dmstaskarn */
  DmsTaskArn?: string | Intrinsic
}

/**
 * Specifies the CloudFormation action.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html */

export interface CloudFormationAction {
  /**
   * - The action type of the CloudFormation action.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `Create | Delete`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html#cfn-apptest-testcase-cloudformationaction-actiontype */
  ActionType?: string | Intrinsic
  /**
   * - The resource of the CloudFormation action.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^\S{1,1000}$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html#cfn-apptest-testcase-cloudformationaction-resource */
  Resource: string | Intrinsic
}

/**
 * Specifies the AWS Mainframe Modernization non-managed application action.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html */

export interface M2NonManagedApplicationAction {
  /**
   * - The action type of the AWS Mainframe Modernization non-managed application action.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `Configure | Deconfigure`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html#cfn-apptest-testcase-m2nonmanagedapplicationaction-actiontype */
  ActionType: string | Intrinsic
  /**
   * - The resource of the AWS Mainframe Modernization non-managed application action.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^\S{1,1000}$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html#cfn-apptest-testcase-m2nonmanagedapplicationaction-resource */
  Resource: string | Intrinsic
}

/**
 * Specifies an output file.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html */

export interface OutputFile {
  /**
   * - The file location of the output file.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `1024`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html#cfn-apptest-testcase-outputfile-filelocation */
  FileLocation?: string | Intrinsic
}

/**
 * Defines a batch.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html */

export interface Batch {
  /**
   * - The job name of the batch.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^\S{1,1000}$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html#cfn-apptest-testcase-batch-batchjobname */
  BatchJobName: string | Intrinsic
  /**
   * - The batch job parameters of the batch.
   * - _Required_: No
   * - _Type_: Object of String
   * - _Pattern_: `.+`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html#cfn-apptest-testcase-batch-batchjobparameters */
  BatchJobParameters?: Record<string, string | Intrinsic>
  /**
   * - The export data set names of the batch.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html#cfn-apptest-testcase-batch-exportdatasetnames */
  ExportDataSetNames?: (string | Intrinsic)[]
}

/**
 * Specifies the AWS Mainframe Modernization managed action properties.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html */

export interface M2ManagedActionProperties {
  /**
   * - Force stops the AWS Mainframe Modernization managed action properties.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html#cfn-apptest-testcase-m2managedactionproperties-forcestop */
  ForceStop?: boolean | Intrinsic
  /**
   * - The import data set location of the AWS Mainframe Modernization managed action properties.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^\S{1,1000}$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html#cfn-apptest-testcase-m2managedactionproperties-importdatasetlocation */
  ImportDataSetLocation?: string | Intrinsic
}

/**
 * Specifies the script.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html */

export interface Script {
  /**
   * - The script location of the scripts.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `1024`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html#cfn-apptest-testcase-script-scriptlocation */
  ScriptLocation: string | Intrinsic
  /**
   * - The type of the scripts.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `Selenium`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html#cfn-apptest-testcase-script-type */
  Type: string | Intrinsic
}

/**
 * Defines a data set.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html */

export interface DataSet {
  /**
   * - The CCSID of the data set.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^\S{1,50}$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html#cfn-apptest-testcase-dataset-ccsid */
  Ccsid: string | Intrinsic
  /**
   * - The format of the data set.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `FIXED | VARIABLE | LINE_SEQUENTIAL`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html#cfn-apptest-testcase-dataset-format */
  Format: string | Intrinsic
  /**
   * - The length of the data set.
   * - _Required_: Yes
   * - _Type_: Number
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html#cfn-apptest-testcase-dataset-length */
  Length: number | Intrinsic
  /**
   * - The name of the data set.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^\S{1,100}$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html#cfn-apptest-testcase-dataset-name */
  Name: string | Intrinsic
  /**
   * - The type of the data set.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `PS`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html#cfn-apptest-testcase-dataset-type */
  Type: string | Intrinsic
}

/**
 * Specifies the source database metadata.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html */

export interface SourceDatabaseMetadata {
  /**
   * - The capture tool of the source database metadata.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `Precisely | AWS DMS`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html#cfn-apptest-testcase-sourcedatabasemetadata-capturetool */
  CaptureTool: string | Intrinsic
  /**
   * - The type of the source database metadata.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `z/OS-DB2`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html#cfn-apptest-testcase-sourcedatabasemetadata-type */
  Type: string | Intrinsic
}

/**
 * Specifies a target database metadata.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html */

export interface TargetDatabaseMetadata {
  /**
   * - The capture tool of the target database metadata.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `Precisely | AWS DMS`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html#cfn-apptest-testcase-targetdatabasemetadata-capturetool */
  CaptureTool: string | Intrinsic
  /**
   * - The type of the target database metadata.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `PostgreSQL`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html#cfn-apptest-testcase-targetdatabasemetadata-type */
  Type: string | Intrinsic
}

/**
 * Specifies an output.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html */

export interface Output {
  /**
   * - The file of the output.
   * - _Required_: Yes
   * - _Type_: [OutputFile](./aws-properties-apptest-testcase-outputfile.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html#cfn-apptest-testcase-output-file */
  File: OutputFile
}

/**
 * Specifies the AWS Mainframe Modernization managed application action.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html */

export interface M2ManagedApplicationAction {
  /**
   * - The action type of the AWS Mainframe Modernization managed application action.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `Configure | Deconfigure`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html#cfn-apptest-testcase-m2managedapplicationaction-actiontype */
  ActionType: string | Intrinsic
  /**
   * - The properties of the AWS Mainframe Modernization managed application action.
   * - _Required_: No
   * - _Type_: [M2ManagedActionProperties](./aws-properties-apptest-testcase-m2managedactionproperties.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html#cfn-apptest-testcase-m2managedapplicationaction-properties */
  Properties?: M2ManagedActionProperties
  /**
   * - The resource of the AWS Mainframe Modernization managed application action.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^\S{1,1000}$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html#cfn-apptest-testcase-m2managedapplicationaction-resource */
  Resource: string | Intrinsic
}

/**
 * Specifies the TN3270 protocol.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html */

export interface TN3270 {
  /**
   * - The data set names of the TN3270 protocol.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html#cfn-apptest-testcase-tn3270-exportdatasetnames */
  ExportDataSetNames?: (string | Intrinsic)[]
  /**
   * - The script of the TN3270 protocol.
   * - _Required_: Yes
   * - _Type_: [Script](./aws-properties-apptest-testcase-script.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html#cfn-apptest-testcase-tn3270-script */
  Script: Script
}

/**
 * Defines the Change Data Capture (CDC) of the database.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html */

export interface DatabaseCDC {
  /**
   * - The source metadata of the database CDC.
   * - _Required_: Yes
   * - _Type_: [SourceDatabaseMetadata](./aws-properties-apptest-testcase-sourcedatabasemetadata.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html#cfn-apptest-testcase-databasecdc-sourcemetadata */
  SourceMetadata: SourceDatabaseMetadata
  /**
   * - The target metadata of the database CDC.
   * - _Required_: Yes
   * - _Type_: [TargetDatabaseMetadata](./aws-properties-apptest-testcase-targetdatabasemetadata.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html#cfn-apptest-testcase-databasecdc-targetmetadata */
  TargetMetadata: TargetDatabaseMetadata
}

/**
 * Specifies a resource action.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html */

export interface ResourceAction {
  /**
   * - The CloudFormation action of the resource action.
   * - _Required_: No
   * - _Type_: [CloudFormationAction](./aws-properties-apptest-testcase-cloudformationaction.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html#cfn-apptest-testcase-resourceaction-cloudformationaction */
  CloudFormationAction?: CloudFormationAction
  /**
   * - The AWS Mainframe Modernization managed application action of the resource action.
   * - _Required_: No
   * - _Type_: [M2ManagedApplicationAction](./aws-properties-apptest-testcase-m2managedapplicationaction.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html#cfn-apptest-testcase-resourceaction-m2managedapplicationaction */
  M2ManagedApplicationAction?: M2ManagedApplicationAction
  /**
   * - The AWS Mainframe Modernization non-managed application action of the resource action.
   * - _Required_: No
   * - _Type_: [M2NonManagedApplicationAction](./aws-properties-apptest-testcase-m2nonmanagedapplicationaction.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html#cfn-apptest-testcase-resourceaction-m2nonmanagedapplicationaction */
  M2NonManagedApplicationAction?: M2NonManagedApplicationAction
}

/**
 * Specifies the mainframe action type.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html */

export interface MainframeActionType {
  /**
   * - The batch of the mainframe action type.
   * - _Required_: No
   * - _Type_: [Batch](./aws-properties-apptest-testcase-batch.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html#cfn-apptest-testcase-mainframeactiontype-batch */
  Batch?: Batch
  /**
   * - The tn3270 port of the mainframe action type.
   * - _Required_: No
   * - _Type_: [TN3270](./aws-properties-apptest-testcase-tn3270.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html#cfn-apptest-testcase-mainframeactiontype-tn3270 */
  Tn3270?: TN3270
}

/**
 * Specifies a file metadata.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html */

export interface FileMetadata {
  /**
   * - The database CDC of the file metadata.
   * - _Required_: No
   * - _Type_: [DatabaseCDC](./aws-properties-apptest-testcase-databasecdc.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html#cfn-apptest-testcase-filemetadata-databasecdc */
  DatabaseCDC?: DatabaseCDC
  /**
   * - The data sets of the file metadata.
   * - _Required_: No
   * - _Type_: Array of [DataSet](./aws-properties-apptest-testcase-dataset.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html#cfn-apptest-testcase-filemetadata-datasets */
  DataSets?: DataSet[]
}

/**
 * Specifies the mainframe action.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html */

export interface MainframeAction {
  /**
   * - The action type of the mainframe action.
   * - _Required_: Yes
   * - _Type_: [MainframeActionType](./aws-properties-apptest-testcase-mainframeactiontype.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html#cfn-apptest-testcase-mainframeaction-actiontype */
  ActionType: MainframeActionType
  /**
   * - The properties of the mainframe action.
   * - _Required_: No
   * - _Type_: [MainframeActionProperties](./aws-properties-apptest-testcase-mainframeactionproperties.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html#cfn-apptest-testcase-mainframeaction-properties */
  Properties?: MainframeActionProperties
  /**
   * - The resource of the mainframe action.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^\S{1,1000}$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html#cfn-apptest-testcase-mainframeaction-resource */
  Resource: string | Intrinsic
}

/**
 * Specifies the input file.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html */

export interface InputFile {
  /**
   * - The file metadata of the input file.
   * - _Required_: Yes
   * - _Type_: [FileMetadata](./aws-properties-apptest-testcase-filemetadata.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html#cfn-apptest-testcase-inputfile-filemetadata */
  FileMetadata: FileMetadata
  /**
   * - The source location of the input file.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^\S{1,1000}$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html#cfn-apptest-testcase-inputfile-sourcelocation */
  SourceLocation: string | Intrinsic
  /**
   * - The target location of the input file.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^\S{1,1000}$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html#cfn-apptest-testcase-inputfile-targetlocation */
  TargetLocation: string | Intrinsic
}

/**
 * Specifies the input.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html */

export interface Input {
  /**
   * - The file in the input.
   * - _Required_: Yes
   * - _Type_: [InputFile](./aws-properties-apptest-testcase-inputfile.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html#cfn-apptest-testcase-input-file */
  File: InputFile
}

/**
 * Compares the action.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html */

export interface CompareAction {
  /**
   * - The input of the compare action.
   * - _Required_: Yes
   * - _Type_: [Input](./aws-properties-apptest-testcase-input.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html#cfn-apptest-testcase-compareaction-input */
  Input: Input
  /**
   * - The output of the compare action.
   * - _Required_: No
   * - _Type_: [Output](./aws-properties-apptest-testcase-output.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html#cfn-apptest-testcase-compareaction-output */
  Output?: Output
}

/**
 * Specifies a step action.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html */

export interface StepAction {
  /**
   * - The compare action of the step action.
   * - _Required_: No
   * - _Type_: [CompareAction](./aws-properties-apptest-testcase-compareaction.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html#cfn-apptest-testcase-stepaction-compareaction */
  CompareAction?: CompareAction
  /**
   * - The mainframe action of the step action.
   * - _Required_: No
   * - _Type_: [MainframeAction](./aws-properties-apptest-testcase-mainframeaction.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html#cfn-apptest-testcase-stepaction-mainframeaction */
  MainframeAction?: MainframeAction
  /**
   * - The resource action of the step action.
   * - _Required_: No
   * - _Type_: [ResourceAction](./aws-properties-apptest-testcase-resourceaction.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html#cfn-apptest-testcase-stepaction-resourceaction */
  ResourceAction?: ResourceAction
}

/**
 * Defines a step.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html */

export interface Step {
  /**
   * - The action of the step.
   * - _Required_: Yes
   * - _Type_: [StepAction](./aws-properties-apptest-testcase-stepaction.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html#cfn-apptest-testcase-step-action */
  Action: StepAction
  /**
   * - The description of the step.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `1000`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html#cfn-apptest-testcase-step-description */
  Description?: string | Intrinsic
  /**
   * - The name of the step.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[A-Za-z][A-Za-z0-9_\-]{1,59}$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html#cfn-apptest-testcase-step-name */
  Name: string | Intrinsic
}

/**
 * Creates a test case for an application.
 * For more information about test cases, see [Test cases](https://docs.aws.amazon.com/m2/latest/userguide/testing-test-cases.html) and [Application Testing concepts](https://docs.aws.amazon.com/m2/latest/userguide/concepts-apptest.html) in the _AWS Mainframe Modernization User Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html */

export interface AppTestTestCase {
  Type: 'AWS::AppTest::TestCase'
  Properties: {
    /**
     * - The description of the test case.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `1000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html#cfn-apptest-testcase-description */
    Description?: string | Intrinsic
    /**
     * - The name of the test case.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[A-Za-z][A-Za-z0-9_\-]{1,59}$`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html#cfn-apptest-testcase-name */
    Name: string | Intrinsic
    /**
     * - The steps in the test case.
     * - _Required_: Yes
     * - _Type_: Array of [Step](./aws-properties-apptest-testcase-step.html)
     * - _Minimum_: `1`
     * - _Maximum_: `20`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html#cfn-apptest-testcase-steps */
    Steps: Step[]
    /**
     * - The specified tags of the test case.
     * - _Required_: No
     * - _Type_: Object of String
     * - _Pattern_: `^(?!aws:).+$`
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html#cfn-apptest-testcase-tags */
    Tags?: Record<string, string | Intrinsic>
  }
}
