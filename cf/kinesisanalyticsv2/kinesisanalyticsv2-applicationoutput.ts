import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Describes the data format when records are written to the destination in a SQL-based Kinesis Data Analytics application.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-applicationoutput.html */

export interface DestinationSchema {
  /**
   * - Specifies the format of the records on the output stream.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `JSON | CSV`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-applicationoutput.html#cfn-kinesisanalyticsv2-applicationoutput-destinationschema-recordformattype */
  RecordFormatType?: string | Intrinsic
}

/**
 * For a SQL-based Kinesis Data Analytics application, when configuring application output, identifies a Kinesis Data Firehose delivery stream as the destination. You provide the stream Amazon Resource Name (ARN) of the delivery stream.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-applicationoutput.html */

export interface KinesisFirehoseOutput {
  /**
   * - The ARN of the destination delivery stream to write to.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `arn:.*`
   * - _Minimum_: `1`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-applicationoutput.html#cfn-kinesisanalyticsv2-applicationoutput-kinesisfirehoseoutput-resourcearn */
  ResourceARN: string | Intrinsic
}

/**
 * When you configure a SQL-based Kinesis Data Analytics application's output, identifies a Kinesis data stream as the destination. You provide the stream Amazon Resource Name (ARN).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-applicationoutput.html */

export interface KinesisStreamsOutput {
  /**
   * - The ARN of the destination Kinesis data stream to write to.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `arn:.*`
   * - _Minimum_: `1`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-applicationoutput.html#cfn-kinesisanalyticsv2-applicationoutput-kinesisstreamsoutput-resourcearn */
  ResourceARN: string | Intrinsic
}

/**
 * When you configure a SQL-based Kinesis Data Analytics application's output, identifies an Amazon Lambda function as the destination. You provide the function Amazon Resource Name (ARN) of the Lambda function.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-applicationoutput.html */

export interface LambdaOutput {
  /**
   * - The Amazon Resource Name (ARN) of the destination Lambda function to write to.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `arn:.*`
   * - _Minimum_: `1`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-applicationoutput.html#cfn-kinesisanalyticsv2-applicationoutput-lambdaoutput-resourcearn */
  ResourceARN: string | Intrinsic
}

/**
 * Describes a SQL-based Kinesis Data Analytics application's output configuration, in which you identify an in-application stream and a destination where you want the in-application stream data to be written. The destination can be a Kinesis data stream or a Kinesis Data Firehose delivery stream.
 *
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-applicationoutput.html */

export interface Output {
  /**
   * - Describes the data format when records are written to the destination.
   * - _Required_: Yes
   * - _Type_: [DestinationSchema](./aws-properties-kinesisanalyticsv2-applicationoutput-destinationschema.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-applicationoutput.html#cfn-kinesisanalyticsv2-applicationoutput-output-destinationschema */
  DestinationSchema: DestinationSchema
  /**
   * - Identifies a Kinesis Data Firehose delivery stream as the destination.
   * - _Required_: No
   * - _Type_: [KinesisFirehoseOutput](./aws-properties-kinesisanalyticsv2-applicationoutput-kinesisfirehoseoutput.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-applicationoutput.html#cfn-kinesisanalyticsv2-applicationoutput-output-kinesisfirehoseoutput */
  KinesisFirehoseOutput?: KinesisFirehoseOutput
  /**
   * - Identifies a Kinesis data stream as the destination.
   * - _Required_: No
   * - _Type_: [KinesisStreamsOutput](./aws-properties-kinesisanalyticsv2-applicationoutput-kinesisstreamsoutput.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-applicationoutput.html#cfn-kinesisanalyticsv2-applicationoutput-output-kinesisstreamsoutput */
  KinesisStreamsOutput?: KinesisStreamsOutput
  /**
   * - Identifies an Amazon Lambda function as the destination.
   * - _Required_: No
   * - _Type_: [LambdaOutput](./aws-properties-kinesisanalyticsv2-applicationoutput-lambdaoutput.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-applicationoutput.html#cfn-kinesisanalyticsv2-applicationoutput-output-lambdaoutput */
  LambdaOutput?: LambdaOutput
  /**
   * - The name of the in-application stream.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `[^-\s<>&]*`
   * - _Minimum_: `1`
   * - _Maximum_: `32`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-applicationoutput.html#cfn-kinesisanalyticsv2-applicationoutput-output-name */
  Name?: string | Intrinsic
}

/**
 * Adds an external destination to your SQL-based Amazon Kinesis Data Analytics application.
 * If you want Kinesis Data Analytics to deliver data from an in-application stream within your application to an external destination (such as an Kinesis data stream, a Kinesis Data Firehose delivery stream, or an Amazon Lambda function), you add the relevant configuration to your application using this operation. You can configure one or more outputs for your application. Each output configuration maps an in-application stream and an external destination.
 * You can use one of the output configurations to deliver data from your in-application error stream to an external destination so that you can analyze the errors.
 * Any configuration update, including adding a streaming source using this operation, results in a new version of the application. You can use the [DescribeApplication](https://docs.aws.amazon.com/managed-flink/latest/apiv2/API_DescribeApplication.html) operation to find the current application version.
 * ###### Note
 *
 * Creation of multiple outputs should be sequential (use of DependsOn) to avoid a problem with a stale application version (_ConcurrentModificationException_).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-applicationoutput.html */

export interface KinesisAnalyticsV2ApplicationOutput extends ResourceAttributes {
  Type: 'AWS::KinesisAnalyticsV2::ApplicationOutput'
  Properties: {
    /**
     * - The name of the application.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-applicationoutput.html#cfn-kinesisanalyticsv2-applicationoutput-applicationname */
    ApplicationName: string | Intrinsic
    /**
     * - Describes a SQL-based Kinesis Data Analytics application's output configuration, in which you identify an in-application stream and a destination where you want the in-application stream data to be written. The destination can be a Kinesis data stream or a Kinesis Data Firehose delivery stream.
     * -
     * - _Required_: Yes
     * - _Type_: [Output](./aws-properties-kinesisanalyticsv2-applicationoutput-output.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-applicationoutput.html#cfn-kinesisanalyticsv2-applicationoutput-output */
    Output: Output
  }
}
