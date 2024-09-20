import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Describes the number of in-application streams to create for a given streaming source. For information about parallelism, see [Configuring Application Input](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalytics-application.html */

export interface InputParallelism {
  /**
   * - Number of in-application streams to create. For more information, see [Limits](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/limits.html).
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `64`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalytics-application.html#cfn-kinesisanalytics-application-inputparallelism-count */
  Count?: number | Intrinsic
}

/**
 * Identifies an Amazon Kinesis Firehose delivery stream as the streaming source. You provide the delivery stream's Amazon Resource Name (ARN) and an IAM role ARN that enables Amazon Kinesis Analytics to access the stream on your behalf.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalytics-application.html */

export interface KinesisFirehoseInput {
  /**
   * - ARN of the input delivery stream.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `arn:.*`
   * - _Minimum_: `1`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalytics-application.html#cfn-kinesisanalytics-application-kinesisfirehoseinput-resourcearn */
  ResourceARN: string | Intrinsic
  /**
   * - ARN of the IAM role that Amazon Kinesis Analytics can assume to access the stream on your behalf. You need to make sure that the role has the necessary permissions to access the stream.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `arn:.*`
   * - _Minimum_: `1`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalytics-application.html#cfn-kinesisanalytics-application-kinesisfirehoseinput-rolearn */
  RoleARN: string | Intrinsic
}

/**
 * Identifies an Amazon Kinesis stream as the streaming source. You provide the stream's Amazon Resource Name (ARN) and an IAM role ARN that enables Amazon Kinesis Analytics to access the stream on your behalf.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalytics-application.html */

export interface KinesisStreamsInput {
  /**
   * - ARN of the input Amazon Kinesis stream to read.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `arn:.*`
   * - _Minimum_: `1`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalytics-application.html#cfn-kinesisanalytics-application-kinesisstreamsinput-resourcearn */
  ResourceARN: string | Intrinsic
  /**
   * - ARN of the IAM role that Amazon Kinesis Analytics can assume to access the stream on your behalf. You need to grant the necessary permissions to this role.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `arn:.*`
   * - _Minimum_: `1`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalytics-application.html#cfn-kinesisanalytics-application-kinesisstreamsinput-rolearn */
  RoleARN: string | Intrinsic
}

/**
 * An object that contains the Amazon Resource Name (ARN) of the [AWS Lambda](https://docs.aws.amazon.com/lambda/) function that is used to preprocess records in the stream, and the ARN of the IAM role that is used to access the AWS Lambda function.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalytics-application.html */

export interface InputLambdaProcessor {
  /**
   * - The ARN of the [AWS Lambda](https://docs.aws.amazon.com/lambda/) function that operates on records in the stream.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `arn:.*`
   * - _Minimum_: `1`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalytics-application.html#cfn-kinesisanalytics-application-inputlambdaprocessor-resourcearn */
  ResourceARN: string | Intrinsic
  /**
   * - The ARN of the IAM role that is used to access the AWS Lambda function.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `arn:.*`
   * - _Minimum_: `1`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalytics-application.html#cfn-kinesisanalytics-application-inputlambdaprocessor-rolearn */
  RoleARN: string | Intrinsic
}

/**
 * Describes the mapping of each data element in the streaming source to the corresponding column in the in-application stream.
 * Also used to describe the format of the reference data source.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalytics-application.html */

export interface RecordColumn {
  /**
   * - Reference to the data element in the streaming input or the reference data source. This element is required if the [RecordFormatType](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_RecordFormat.html#analytics-Type-RecordFormat-RecordFormatTypel) is `JSON`.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalytics-application.html#cfn-kinesisanalytics-application-recordcolumn-mapping */
  Mapping?: string | Intrinsic
  /**
   * - Name of the column created in the in-application input stream or reference table.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalytics-application.html#cfn-kinesisanalytics-application-recordcolumn-name */
  Name: string | Intrinsic
  /**
   * - Type of column created in the in-application input stream or reference table.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalytics-application.html#cfn-kinesisanalytics-application-recordcolumn-sqltype */
  SqlType: string | Intrinsic
}

/**
 * Provides additional mapping information when the record format uses delimiters, such as CSV. For example, the following sample records use CSV format, where the records use the _'\\n'_ as the row delimiter and a comma (",") as the column delimiter:
 * `"name1", "address1"`
 * `"name2", "address2"`
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalytics-application.html */

export interface CSVMappingParameters {
  /**
   * - Column delimiter. For example, in a CSV format, a comma (",") is the typical column delimiter.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalytics-application.html#cfn-kinesisanalytics-application-csvmappingparameters-recordcolumndelimiter */
  RecordColumnDelimiter: string | Intrinsic
  /**
   * - Row delimiter. For example, in a CSV format, _'\\n'_ is the typical row delimiter.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalytics-application.html#cfn-kinesisanalytics-application-csvmappingparameters-recordrowdelimiter */
  RecordRowDelimiter: string | Intrinsic
}

/**
 * Provides additional mapping information when JSON is the record format on the streaming source.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalytics-application.html */

export interface JSONMappingParameters {
  /**
   * - Path to the top-level parent that contains the records.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalytics-application.html#cfn-kinesisanalytics-application-jsonmappingparameters-recordrowpath */
  RecordRowPath: string | Intrinsic
}

/**
 * Provides a description of a processor that is used to preprocess the records in the stream before being processed by your application code. Currently, the only input processor available is [AWS Lambda](https://docs.aws.amazon.com/lambda/).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalytics-application.html */

export interface InputProcessingConfiguration {
  /**
   * - The [InputLambdaProcessor](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-application-inputlambdaprocessor.html) that is used to preprocess the records in the stream before being processed by your application code.
   * - _Required_: No
   * - _Type_: [InputLambdaProcessor](./aws-properties-kinesisanalytics-application-inputlambdaprocessor.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalytics-application.html#cfn-kinesisanalytics-application-inputprocessingconfiguration-inputlambdaprocessor */
  InputLambdaProcessor?: InputLambdaProcessor
}

/**
 * When configuring application input at the time of creating or updating an application, provides additional mapping information specific to the record format (such as JSON, CSV, or record fields delimited by some delimiter) on the streaming source.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalytics-application.html */

export interface MappingParameters {
  /**
   * - Provides additional mapping information when the record format uses delimiters (for example, CSV).
   * - _Required_: No
   * - _Type_: [CSVMappingParameters](./aws-properties-kinesisanalytics-application-csvmappingparameters.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalytics-application.html#cfn-kinesisanalytics-application-mappingparameters-csvmappingparameters */
  CSVMappingParameters?: CSVMappingParameters
  /**
   * - Provides additional mapping information when JSON is the record format on the streaming source.
   * - _Required_: No
   * - _Type_: [JSONMappingParameters](./aws-properties-kinesisanalytics-application-jsonmappingparameters.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalytics-application.html#cfn-kinesisanalytics-application-mappingparameters-jsonmappingparameters */
  JSONMappingParameters?: JSONMappingParameters
}

/**
 * Describes the record format and relevant mapping information that should be applied to schematize the records on the stream.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalytics-application.html */

export interface RecordFormat {
  /**
   * - When configuring application input at the time of creating or updating an application, provides additional mapping information specific to the record format (such as JSON, CSV, or record fields delimited by some delimiter) on the streaming source.
   * - _Required_: No
   * - _Type_: [MappingParameters](./aws-properties-kinesisanalytics-application-mappingparameters.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalytics-application.html#cfn-kinesisanalytics-application-recordformat-mappingparameters */
  MappingParameters?: MappingParameters
  /**
   * - The type of record format.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `JSON | CSV`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalytics-application.html#cfn-kinesisanalytics-application-recordformat-recordformattype */
  RecordFormatType: string | Intrinsic
}

/**
 * Describes the format of the data in the streaming source, and how each data element maps to corresponding columns in the in-application stream that is being created.
 * Also used to describe the format of the reference data source.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalytics-application.html */

export interface InputSchema {
  /**
   * - A list of `RecordColumn` objects.
   * - _Required_: Yes
   * - _Type_: Array of [RecordColumn](./aws-properties-kinesisanalytics-application-recordcolumn.html)
   * - _Minimum_: `1`
   * - _Maximum_: `1000`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalytics-application.html#cfn-kinesisanalytics-application-inputschema-recordcolumns */
  RecordColumns: RecordColumn[]
  /**
   * - Specifies the encoding of the records in the streaming source. For example, UTF-8.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `UTF-8`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalytics-application.html#cfn-kinesisanalytics-application-inputschema-recordencoding */
  RecordEncoding?: string | Intrinsic
  /**
   * - Specifies the format of the records on the streaming source.
   * - _Required_: Yes
   * - _Type_: [RecordFormat](./aws-properties-kinesisanalytics-application-recordformat.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalytics-application.html#cfn-kinesisanalytics-application-inputschema-recordformat */
  RecordFormat: RecordFormat
}

/**
 * When you configure the application input, you specify the streaming source, the in-application stream name that is created, and the mapping between the two. For more information, see [Configuring Application Input](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalytics-application.html */

export interface Input {
  /**
   * - Describes the number of in-application streams to create.
   * - Data from your source is routed to these in-application input streams.
   * - See [Configuring Application Input](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html).
   * - _Required_: No
   * - _Type_: [InputParallelism](./aws-properties-kinesisanalytics-application-inputparallelism.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalytics-application.html#cfn-kinesisanalytics-application-input-inputparallelism */
  InputParallelism?: InputParallelism
  /**
   * - The [InputProcessingConfiguration](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-application-inputprocessingconfiguration.html) for the input. An input processor transforms records as they are received from the stream, before the application's SQL code executes. Currently, the only input processing configuration available is [InputLambdaProcessor](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-application-inputlambdaprocessor.html).
   * - _Required_: No
   * - _Type_: [InputProcessingConfiguration](./aws-properties-kinesisanalytics-application-inputprocessingconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalytics-application.html#cfn-kinesisanalytics-application-input-inputprocessingconfiguration */
  InputProcessingConfiguration?: InputProcessingConfiguration
  /**
   * - Describes the format of the data in the streaming source, and how each data element maps to corresponding columns in the in-application stream that is being created.
   * - Also used to describe the format of the reference data source.
   * - _Required_: Yes
   * - _Type_: [InputSchema](./aws-properties-kinesisanalytics-application-inputschema.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalytics-application.html#cfn-kinesisanalytics-application-input-inputschema */
  InputSchema: InputSchema
  /**
   * - If the streaming source is an Amazon Kinesis Firehose delivery stream, identifies the delivery stream's ARN and an IAM role that enables Amazon Kinesis Analytics to access the stream on your behalf.
   * - Note: Either `KinesisStreamsInput` or `KinesisFirehoseInput` is required.
   * - _Required_: Conditional
   * - _Type_: [KinesisFirehoseInput](./aws-properties-kinesisanalytics-application-kinesisfirehoseinput.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalytics-application.html#cfn-kinesisanalytics-application-input-kinesisfirehoseinput */
  KinesisFirehoseInput?: KinesisFirehoseInput
  /**
   * - If the streaming source is an Amazon Kinesis stream, identifies the stream's Amazon Resource Name (ARN) and an IAM role that enables Amazon Kinesis Analytics to access the stream on your behalf.
   * - Note: Either `KinesisStreamsInput` or `KinesisFirehoseInput` is required.
   * - _Required_: Conditional
   * - _Type_: [KinesisStreamsInput](./aws-properties-kinesisanalytics-application-kinesisstreamsinput.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalytics-application.html#cfn-kinesisanalytics-application-input-kinesisstreamsinput */
  KinesisStreamsInput?: KinesisStreamsInput
  /**
   * - Name prefix to use when creating an in-application stream. Suppose that you specify a prefix "MyInApplicationStream." Amazon Kinesis Analytics then creates one or more (as per the `InputParallelism` count you specified) in-application streams with names "MyInApplicationStream\_001," "MyInApplicationStream\_002," and so on.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `32`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalytics-application.html#cfn-kinesisanalytics-application-input-nameprefix */
  NamePrefix: string | Intrinsic
}

/**
 * The `AWS::KinesisAnalytics::Application` resource creates an Amazon Kinesis Data Analytics application. For more information, see the [Amazon Kinesis Data Analytics Developer Guide](/kinesisanalytics/latest/dev/what-is.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalytics-application.html */

export interface KinesisAnalyticsApplication extends ResourceAttributes {
  Type: 'AWS::KinesisAnalytics::Application'
  Properties: {
    /**
     * - One or more SQL statements that read input data, transform it, and generate output. For example, you can write a SQL statement that reads data from one in-application stream, generates a running average of the number of advertisement clicks by vendor, and insert resulting rows in another in-application stream using pumps. For more information about the typical pattern, see [Application Code](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-app-code.html).
     * - You can provide such series of SQL statements, where output of one statement can be used as the input for the next statement. You store intermediate results by creating in-application streams and pumps.
     * - Note that the application code must create the streams with names specified in the `Outputs`. For example, if your `Outputs` defines output streams named `ExampleOutputStream1` and `ExampleOutputStream2`, then your application code must create these streams.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `102400`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalytics-application.html#cfn-kinesisanalytics-application-applicationcode */
    ApplicationCode?: string | Intrinsic
    /**
     * - Summary description of the application.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalytics-application.html#cfn-kinesisanalytics-application-applicationdescription */
    ApplicationDescription?: string | Intrinsic
    /**
     * - Name of your Amazon Kinesis Analytics application (for example, `sample-app`).
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[a-zA-Z0-9_.-]+`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalytics-application.html#cfn-kinesisanalytics-application-applicationname */
    ApplicationName?: string | Intrinsic
    /**
     * - Use this parameter to configure the application input.
     * - You can configure your application to receive input from a single streaming source. In this configuration, you map this streaming source to an in-application stream that is created. Your application code can then query the in-application stream like a table (you can think of it as a constantly updating table).
     * - For the streaming source, you provide its Amazon Resource Name (ARN) and format of data on the stream (for example, JSON, CSV, etc.). You also must provide an IAM role that Amazon Kinesis Analytics can assume to read this stream on your behalf.
     * - To create the in-application stream, you need to specify a schema to transform your data into a schematized version used in SQL. In the schema, you provide the necessary mapping of the data elements in the streaming source to record columns in the in-app stream.
     * - _Required_: Yes
     * - _Type_: Array of [Input](./aws-properties-kinesisanalytics-application-input.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalytics-application.html#cfn-kinesisanalytics-application-inputs */
    Inputs: Input[]
  }
}
