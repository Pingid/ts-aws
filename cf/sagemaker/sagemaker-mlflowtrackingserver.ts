import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * A tag object that consists of a key and an optional value, used to manage metadata for SageMaker AWS resources.
 * You can add tags to notebook instances, training jobs, hyperparameter tuning jobs, batch transform jobs, models, labeling jobs, work teams, endpoint configurations, and endpoints. For more information on adding tags to SageMaker resources, see [AddTags](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_AddTags.html).
 * For more information on adding metadata to your AWS resources with tagging, see [Tagging AWS resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html). For advice on best practices for managing AWS resources with tagging, see [Tagging Best Practices: Implement an Effective AWS Resource Tagging Strategy](https://d1.awsstatic.com/whitepapers/aws-tagging-best-practices.pdf).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-mlflowtrackingserver.html */

export interface Tag {
  /**
   * - The tag key. Tag keys must be unique per resource.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-mlflowtrackingserver.html#cfn-sagemaker-mlflowtrackingserver-tag-key */
  Key: string | Intrinsic
  /**
   * - The tag value.
   * - _Required_: Yes
   * - _Type_: String
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-mlflowtrackingserver.html#cfn-sagemaker-mlflowtrackingserver-tag-value */
  Value: string | Intrinsic
}

/**
 * Creates an MLflow Tracking Server using a general purpose Amazon S3 bucket as the artifact store. For more information, see [Create an MLflow Tracking Server](https://docs.aws.amazon.com/sagemaker/latest/dg/mlflow-create-tracking-server.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-mlflowtrackingserver.html */

export interface SageMakerMlflowTrackingServer extends ResourceAttributes {
  Type: 'AWS::SageMaker::MlflowTrackingServer'
  Properties: {
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^s3:\/\/([^\/]+)\/?(.*)$`
     * - _Minimum_: `1`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-mlflowtrackingserver.html#cfn-sagemaker-mlflowtrackingserver-artifactstoreuri */
    ArtifactStoreUri: string | Intrinsic
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-mlflowtrackingserver.html#cfn-sagemaker-mlflowtrackingserver-automaticmodelregistration */
    AutomaticModelRegistration?: boolean | Intrinsic
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^\d+(\.\d+)+$`
     * - _Minimum_: `1`
     * - _Maximum_: `32`
     * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-mlflowtrackingserver.html#cfn-sagemaker-mlflowtrackingserver-mlflowversion */
    MlflowVersion?: string | Intrinsic
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^arn:aws[a-z\-]*:iam::\d{12}:role\/?[a-zA-Z_0-9+=,.@\-_\/]+$`
     * - _Minimum_: `20`
     * - _Maximum_: `2048`
     * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-mlflowtrackingserver.html#cfn-sagemaker-mlflowtrackingserver-rolearn */
    RoleArn: string | Intrinsic
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-sagemaker-mlflowtrackingserver-tag.html)
     * - _Minimum_: `1`
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-mlflowtrackingserver.html#cfn-sagemaker-mlflowtrackingserver-tags */
    Tags?: Tag[]
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,255}$`
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-mlflowtrackingserver.html#cfn-sagemaker-mlflowtrackingserver-trackingservername */
    TrackingServerName: string | Intrinsic
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `Small | Medium | Large`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-mlflowtrackingserver.html#cfn-sagemaker-mlflowtrackingserver-trackingserversize */
    TrackingServerSize?: string | Intrinsic
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^(Mon|Tue|Wed|Thu|Fri|Sat|Sun):([01]\d|2[0-3]):([0-5]\d)$`
     * - _Maximum_: `9`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-mlflowtrackingserver.html#cfn-sagemaker-mlflowtrackingserver-weeklymaintenancewindowstart */
    WeeklyMaintenanceWindowStart?: string | Intrinsic
  }
}
