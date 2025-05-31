import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * A dataset group is a collection of related datasets (Item interactions, Users, Items, Actions, Action interactions). You create a dataset group by calling [CreateDatasetGroup](https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetGroup.html). You then create a dataset and add it to a dataset group by calling [CreateDataset](https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html). The dataset group is used to create and train a solution by calling [CreateSolution](https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html). A dataset group can contain only one of each type of dataset.
 * You can specify an AWS Key Management Service (KMS) key to encrypt the datasets in the group.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-datasetgroup.html */

export interface PersonalizeDatasetGroup extends ResourceAttributes {
    "Type": "AWS::Personalize::DatasetGroup";
    "Properties": {
        /**
         * - The domain of a Domain dataset group.
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `ECOMMERCE | VIDEO_ON_DEMAND`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-datasetgroup.html#cfn-personalize-datasetgroup-domain */
        "Domain"?: string | Intrinsic;
        /**
         * - The Amazon Resource Name (ARN) of the AWS Key Management Service (KMS) key used to encrypt the datasets.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `arn:aws.*:kms:.*:[0-9]{12}:key/.*`
         * - _Maximum_: `2048`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-datasetgroup.html#cfn-personalize-datasetgroup-kmskeyarn */
        "KmsKeyArn"?: string | Intrinsic;
        /**
         * - The name of the dataset group.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^[a-zA-Z0-9][a-zA-Z0-9\-_]*`
         * - _Minimum_: `1`
         * - _Maximum_: `63`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-datasetgroup.html#cfn-personalize-datasetgroup-name */
        "Name": string | Intrinsic;
        /**
         * - The ARN of the AWS Identity and Access Management (IAM) role that has permissions to access the AWS Key Management Service (KMS) key. Supplying an IAM role is only valid when also specifying a KMS key.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `arn:([a-z\d-]+):iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+`
         * - _Minimum_: `0`
         * - _Maximum_: `256`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-datasetgroup.html#cfn-personalize-datasetgroup-rolearn */
        "RoleArn"?: string | Intrinsic;
    };
}