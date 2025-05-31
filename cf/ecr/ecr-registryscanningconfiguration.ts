import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The filter settings used with image replication. Specifying a repository filter to a replication rule provides a method for controlling which repositories in a private registry are replicated. If no filters are added, the contents of all repositories are replicated.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-registryscanningconfiguration.html */

export interface RepositoryFilter {
    /**
     * - The filter to use when scanning.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-z0-9*](?:[._\-/a-z0-9*]?[a-z0-9*]+)*$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-registryscanningconfiguration.html#cfn-ecr-registryscanningconfiguration-repositoryfilter-filter */
    "Filter": string | Intrinsic;
    /**
     * - The type associated with the filter.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `WILDCARD`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-registryscanningconfiguration.html#cfn-ecr-registryscanningconfiguration-repositoryfilter-filtertype */
    "FilterType": string | Intrinsic;
}

/**
 * The scanning rules associated with the registry.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-registryscanningconfiguration.html */

export interface ScanningRule {
    /**
     * - The details of a scanning repository filter. For more information on how to use filters, see [Using filters](https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-scanning.html#image-scanning-filters) in the _Amazon Elastic Container Registry User Guide_.
     * - _Required_: Yes
     * - _Type_: Array of [RepositoryFilter](./aws-properties-ecr-registryscanningconfiguration-repositoryfilter.html)
     * - _Minimum_: `0`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-registryscanningconfiguration.html#cfn-ecr-registryscanningconfiguration-scanningrule-repositoryfilters */
    "RepositoryFilters": RepositoryFilter[];
    /**
     * - The frequency that scans are performed at for a private registry. When the `ENHANCED` scan type is specified, the supported scan frequencies are `CONTINUOUS_SCAN` and `SCAN_ON_PUSH`. When the `BASIC` scan type is specified, the `SCAN_ON_PUSH` scan frequency is supported. If scan on push is not specified, then the `MANUAL` scan frequency is set by default.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `SCAN_ON_PUSH | CONTINUOUS_SCAN`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-registryscanningconfiguration.html#cfn-ecr-registryscanningconfiguration-scanningrule-scanfrequency */
    "ScanFrequency": string | Intrinsic;
}

/**
 * The scanning configuration for a private registry.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-registryscanningconfiguration.html */

export interface ECRRegistryScanningConfiguration extends ResourceAttributes {
    "Type": "AWS::ECR::RegistryScanningConfiguration";
    "Properties": {
        /**
         * - The scanning rules associated with the registry.
         * - _Required_: Yes
         * - _Type_: Array of [ScanningRule](./aws-properties-ecr-registryscanningconfiguration-scanningrule.html)
         * - _Minimum_: `0`
         * - _Maximum_: `2`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-registryscanningconfiguration.html#cfn-ecr-registryscanningconfiguration-rules */
        "Rules": ScanningRule[];
        /**
         * - The type of scanning configured for the registry.
         * - _Required_: Yes
         * - _Type_: String
         * - _Allowed values_: `BASIC | ENHANCED`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-registryscanningconfiguration.html#cfn-ecr-registryscanningconfiguration-scantype */
        "ScanType": string | Intrinsic;
    };
}