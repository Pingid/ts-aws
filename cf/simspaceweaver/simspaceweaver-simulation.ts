import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * A location in Amazon Simple Storage Service (Amazon S3) where SimSpace Weaver stores simulation data, such as your app .zip files and schema file. For more information about Amazon S3, see the [_Amazon Simple Storage Service User Guide_](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-simspaceweaver-simulation.html */

export interface S3Location {
    /**
     * - The name of an Amazon S3 bucket. For more information about buckets, see [Creating, configuring, and working with Amazon S3 buckets](https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-buckets-s3.html) in the _Amazon Simple Storage Service User Guide_.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[a-zA-Z0-9_\-]{3,63}$`
     * - _Minimum_: `3`
     * - _Maximum_: `63`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-simspaceweaver-simulation.html#cfn-simspaceweaver-simulation-s3location-bucketname */
    "BucketName": string | Intrinsic;
    /**
     * - The key name of an object in Amazon S3. For more information about Amazon S3 objects and object keys, see [Uploading, downloading, and working with objects in Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/uploading-downloading-objects.html) in the _Amazon Simple Storage Service User Guide_.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `3`
     * - _Maximum_: `255`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-simspaceweaver-simulation.html#cfn-simspaceweaver-simulation-s3location-objectkey */
    "ObjectKey": string | Intrinsic;
}

/**
 * Use the `AWS::SimSpaceWeaver::Simulation` resource to specify a simulation that AWS CloudFormation starts in the AWS Cloud, in your AWS account. In the resource properties section of your template, provide the name of an existing IAM role configured with the proper permissions, and the name of an existing Amazon S3 bucket. Your account must have permissions to read the Amazon S3 bucket. The Amazon S3 bucket must contain a valid schema. The schema must refer to simulation assets that are already uploaded to the AWS Cloud. For more information, see the [detailed tutorial](https://docs.aws.amazon.com/simspaceweaver/latest/userguide/getting-started_detailed.html) in the _AWSSimSpace Weaver User Guide_.
 * Specify a `SnapshotS3Location` to start a simulation from a snapshot instead of from a schema. When you start a simulation from a snapshot, SimSpace Weaver initializes the entity data in the State Fabric with data saved in the snapshot, starts the spatial and service apps that were running when the snapshot was created, and restores the clock to the appropriate tick. Your app zip files must be in the same location in Amazon S3 as they were in for the original simulation. You must start any custom apps separately. For more information about snapshots, see [Snapshots](https://docs.aws.amazon.com/simspaceweaver/latest/userguide/working-with_snapshots.html) in the _AWSSimSpace Weaver User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-simspaceweaver-simulation.html */

export interface SimSpaceWeaverSimulation extends ResourceAttributes {
    "Type": "AWS::SimSpaceWeaver::Simulation";
    "Properties": {
        /**
         * - The maximum running time of the simulation, specified as a number of minutes (m or M), hours (h or H), or days (d or D). The simulation stops when it reaches this limit. The maximum value is `14D`, or its equivalent in the other units. The default value is `14D`. A value equivalent to `0` makes the simulation immediately transition to `STOPPING` as soon as it reaches `STARTED`.
         * - _Required_: No
         * - _Type_: String
         * - _Minimum_: `2`
         * - _Maximum_: `6`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-simspaceweaver-simulation.html#cfn-simspaceweaver-simulation-maximumduration */
        "MaximumDuration"?: string | Intrinsic;
        /**
         * - The name of the simulation.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `[a-zA-Z0-9_\-]{1,2048}$`
         * - _Minimum_: `1`
         * - _Maximum_: `2048`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-simspaceweaver-simulation.html#cfn-simspaceweaver-simulation-name */
        "Name": string | Intrinsic;
        /**
         * - The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that the simulation assumes to perform actions. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the _AWS General Reference_. For more information about IAM roles, see [IAM roles](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html) in the _AWS Identity and Access Management User Guide_.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-simspaceweaver-simulation.html#cfn-simspaceweaver-simulation-rolearn */
        "RoleArn": string | Intrinsic;
        /**
         * - The location of the simulation schema in Amazon Simple Storage Service (Amazon S3). For more information about Amazon S3, see the [_Amazon Simple Storage Service User Guide_](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html).
         * - Provide a `SchemaS3Location` to start your simulation from a schema.
         * - If you provide a `SchemaS3Location` then you can't provide a `SnapshotS3Location`.
         * - _Required_: No
         * - _Type_: [S3Location](./aws-properties-simspaceweaver-simulation-s3location.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-simspaceweaver-simulation.html#cfn-simspaceweaver-simulation-schemas3location */
        "SchemaS3Location"?: S3Location;
        /**
         * - The location of the snapshot in Amazon Simple Storage Service (Amazon S3). For more information about Amazon S3, see the [_Amazon Simple Storage Service User Guide_](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html).
         * - Provide a `SnapshotS3Location` to start your simulation from a snapshot.
         * - If you provide a `SnapshotS3Location` then you can't provide a `SchemaS3Location`.
         * - _Required_: No
         * - _Type_: [S3Location](./aws-properties-simspaceweaver-simulation-s3location.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-simspaceweaver-simulation.html#cfn-simspaceweaver-simulation-snapshots3location */
        "SnapshotS3Location"?: S3Location;
    };
}