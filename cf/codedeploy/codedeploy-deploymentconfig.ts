import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * `MinimumHealthyHosts` is a property of the [DeploymentConfig](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentconfig.html) resource that defines how many instances must remain healthy during an AWS CodeDeploy deployment.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentconfig.html */

export interface MinimumHealthyHosts {
    /**
     * - The minimum healthy instance type:
     * - In an example of nine instance, if a HOST\_COUNT of six is specified, deploy to up to three instances at a time. The deployment is successful if six or more instances are deployed to successfully. Otherwise, the deployment fails. If a FLEET\_PERCENT of 40 is specified, deploy to up to five instance at a time. The deployment is successful if four or more instance are deployed to successfully. Otherwise, the deployment fails.
     * - For more information, see [AWS CodeDeploy Instance Health](https://docs.aws.amazon.com/codedeploy/latest/userguide/instances-health.html) in the _AWS CodeDeploy User Guide_.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `HOST_COUNT | FLEET_PERCENT`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentconfig.html#cfn-codedeploy-deploymentconfig-minimumhealthyhosts-type */
    "Type": string | Intrinsic;
    /**
     * - The minimum healthy instance value.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentconfig.html#cfn-codedeploy-deploymentconfig-minimumhealthyhosts-value */
    "Value": number | Intrinsic;
}

/**
 * A configuration that shifts traffic from one version of a Lambda function or ECS task set to another in equal increments, with an equal number of minutes between each increment. The original and target Lambda function versions or ECS task sets are specified in the deployment's AppSpec file.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentconfig.html */

export interface TimeBasedLinear {
    /**
     * - The number of minutes between each incremental traffic shift of a `TimeBasedLinear` deployment.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentconfig.html#cfn-codedeploy-deploymentconfig-timebasedlinear-linearinterval */
    "LinearInterval": number | Intrinsic;
    /**
     * - The percentage of traffic that is shifted at the start of each increment of a `TimeBasedLinear` deployment.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentconfig.html#cfn-codedeploy-deploymentconfig-timebasedlinear-linearpercentage */
    "LinearPercentage": number | Intrinsic;
}

/**
 * A configuration that shifts traffic from one version of a Lambda function or Amazon ECS task set to another in two increments. The original and target Lambda function versions or ECS task sets are specified in the deployment's AppSpec file.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentconfig.html */

export interface TimeBasedCanary {
    /**
     * - The number of minutes between the first and second traffic shifts of a `TimeBasedCanary` deployment.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentconfig.html#cfn-codedeploy-deploymentconfig-timebasedcanary-canaryinterval */
    "CanaryInterval": number | Intrinsic;
    /**
     * - The percentage of traffic to shift in the first increment of a `TimeBasedCanary` deployment.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentconfig.html#cfn-codedeploy-deploymentconfig-timebasedcanary-canarypercentage */
    "CanaryPercentage": number | Intrinsic;
}

/**
 * The configuration that specifies how traffic is shifted from one version of a Lambda function to another version during an AWS Lambda deployment, or from one Amazon ECS task set to another during an Amazon ECS deployment.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentconfig.html */

export interface TrafficRoutingConfig {
    /**
     * - A configuration that shifts traffic from one version of a Lambda function or ECS task set to another in two increments. The original and target Lambda function versions or ECS task sets are specified in the deployment's AppSpec file.
     * - _Required_: No
     * - _Type_: [TimeBasedCanary](./aws-properties-codedeploy-deploymentconfig-timebasedcanary.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentconfig.html#cfn-codedeploy-deploymentconfig-trafficroutingconfig-timebasedcanary */
    "TimeBasedCanary"?: TimeBasedCanary;
    /**
     * - A configuration that shifts traffic from one version of a Lambda function or Amazon ECS task set to another in equal increments, with an equal number of minutes between each increment. The original and target Lambda function versions or Amazon ECS task sets are specified in the deployment's AppSpec file.
     * - _Required_: No
     * - _Type_: [TimeBasedLinear](./aws-properties-codedeploy-deploymentconfig-timebasedlinear.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentconfig.html#cfn-codedeploy-deploymentconfig-trafficroutingconfig-timebasedlinear */
    "TimeBasedLinear"?: TimeBasedLinear;
    /**
     * - The type of traffic shifting (`TimeBasedCanary` or `TimeBasedLinear`) used by a deployment configuration.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `TimeBasedCanary | TimeBasedLinear | TimeBasedFlexible | AllAtOnce`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentconfig.html#cfn-codedeploy-deploymentconfig-trafficroutingconfig-type */
    "Type": string | Intrinsic;
}

/**
 * Information about the minimum number of healthy instances per Availability Zone.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentconfig.html */

export interface MinimumHealthyHostsPerZone {
    /**
     * - The `type` associated with the `MinimumHealthyHostsPerZone` option.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `HOST_COUNT | FLEET_PERCENT`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentconfig.html#cfn-codedeploy-deploymentconfig-minimumhealthyhostsperzone-type */
    "Type": string | Intrinsic;
    /**
     * - The `value` associated with the `MinimumHealthyHostsPerZone` option.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentconfig.html#cfn-codedeploy-deploymentconfig-minimumhealthyhostsperzone-value */
    "Value": number | Intrinsic;
}

/**
 * Configure the `ZonalConfig` object if you want AWS CodeDeploy to deploy your application to one [Availability Zone](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-availability-zones) at a time, within an AWS Region. By deploying to one Availability Zone at a time, you can expose your deployment to a progressively larger audience as confidence in the deployment's performance and viability grows. If you don't configure the `ZonalConfig` object, CodeDeploy deploys your application to a random selection of hosts across a Region.
 * For more information about the zonal configuration feature, see [zonal configuration](https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-configurations-create.html#zonal-config) in the _CodeDeploy User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentconfig.html */

export interface ZonalConfig {
    /**
     * - The period of time, in seconds, that CodeDeploy must wait after completing a deployment to the _first_ Availability Zone. CodeDeploy will wait this amount of time before starting a deployment to the second Availability Zone. You might set this option if you want to allow extra bake time for the first Availability Zone. If you don't specify a value for `firstZoneMonitorDurationInSeconds`, then CodeDeploy uses the `monitorDurationInSeconds` value for the first Availability Zone.
     * - For more information about the zonal configuration feature, see [zonal configuration](https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-configurations-create.html#zonal-config) in the _CodeDeploy User Guide_.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentconfig.html#cfn-codedeploy-deploymentconfig-zonalconfig-firstzonemonitordurationinseconds */
    "FirstZoneMonitorDurationInSeconds"?: number | Intrinsic;
    /**
     * - The number or percentage of instances that must remain available per Availability Zone during a deployment. This option works in conjunction with the `MinimumHealthyHosts` option. For more information, see [About the minimum number of healthy hosts per Availability Zone](https://docs.aws.amazon.com/codedeploy/latest/userguide/instances-health.html#minimum-healthy-hosts-az) in the _CodeDeploy User Guide_.
     * - If you don't specify the `minimumHealthyHostsPerZone` option, then CodeDeploy uses a default value of `0` percent.
     * - For more information about the zonal configuration feature, see [zonal configuration](https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-configurations-create.html#zonal-config) in the _CodeDeploy User Guide_.
     * - _Required_: No
     * - _Type_: [MinimumHealthyHostsPerZone](./aws-properties-codedeploy-deploymentconfig-minimumhealthyhostsperzone.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentconfig.html#cfn-codedeploy-deploymentconfig-zonalconfig-minimumhealthyhostsperzone */
    "MinimumHealthyHostsPerZone"?: MinimumHealthyHostsPerZone;
    /**
     * - The period of time, in seconds, that CodeDeploy must wait after completing a deployment to an Availability Zone. CodeDeploy will wait this amount of time before starting a deployment to the next Availability Zone. Consider adding a monitor duration to give the deployment some time to prove itself (or 'bake') in one Availability Zone before it is released in the next zone. If you don't specify a `monitorDurationInSeconds`, CodeDeploy starts deploying to the next Availability Zone immediately.
     * - For more information about the zonal configuration feature, see [zonal configuration](https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-configurations-create.html#zonal-config) in the _CodeDeploy User Guide_.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentconfig.html#cfn-codedeploy-deploymentconfig-zonalconfig-monitordurationinseconds */
    "MonitorDurationInSeconds"?: number | Intrinsic;
}

/**
 * The `AWS::CodeDeploy::DeploymentConfig` resource creates a set of deployment rules, deployment success conditions, and deployment failure conditions that AWS CodeDeploy uses during a deployment. The deployment configuration specifies the number or percentage of instances that must remain available at any time during a deployment.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentconfig.html */

export interface CodeDeployDeploymentConfig extends ResourceAttributes {
    "Type": "AWS::CodeDeploy::DeploymentConfig";
    "Properties": {
        /**
         * - The destination platform type for the deployment (`Lambda`, `Server`, or `ECS`).
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `Server | Lambda | ECS | Kubernetes`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentconfig.html#cfn-codedeploy-deploymentconfig-computeplatform */
        "ComputePlatform"?: string | Intrinsic;
        /**
         * - A name for the deployment configuration. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the deployment configuration name. For more information, see [Name Type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).
         * - _Required_: No
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `100`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentconfig.html#cfn-codedeploy-deploymentconfig-deploymentconfigname */
        "DeploymentConfigName"?: string | Intrinsic;
        /**
         * - The minimum number of healthy instances that should be available at any time during the deployment. There are two parameters expected in the input: type and value.
         * - The type parameter takes either of the following values:
         * - The value parameter takes an integer.
         * - For example, to set a minimum of 95% healthy instance, specify a type of FLEET\_PERCENT and a value of 95.
         * - For more information about instance health, see [CodeDeploy Instance Health](https://docs.aws.amazon.com/codedeploy/latest/userguide/instances-health.html) in the AWS CodeDeploy User Guide.
         * - _Required_: No
         * - _Type_: [MinimumHealthyHosts](./aws-properties-codedeploy-deploymentconfig-minimumhealthyhosts.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentconfig.html#cfn-codedeploy-deploymentconfig-minimumhealthyhosts */
        "MinimumHealthyHosts"?: MinimumHealthyHosts;
        /**
         * - The configuration that specifies how the deployment traffic is routed.
         * - _Required_: No
         * - _Type_: [TrafficRoutingConfig](./aws-properties-codedeploy-deploymentconfig-trafficroutingconfig.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentconfig.html#cfn-codedeploy-deploymentconfig-trafficroutingconfig */
        "TrafficRoutingConfig"?: TrafficRoutingConfig;
        /**
         * - Configure the `ZonalConfig` object if you want AWS CodeDeploy to deploy your application to one [Availability Zone](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-availability-zones) at a time, within an AWS Region.
         * - For more information about the zonal configuration feature, see [zonal configuration](https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-configurations-create.html#zonal-config) in the _CodeDeploy User Guide_.
         * - _Required_: No
         * - _Type_: [ZonalConfig](./aws-properties-codedeploy-deploymentconfig-zonalconfig.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentconfig.html#cfn-codedeploy-deploymentconfig-zonalconfig */
        "ZonalConfig"?: ZonalConfig;
    };
}