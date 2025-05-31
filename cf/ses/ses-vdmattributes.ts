import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * An object containing additional settings for your VDM configuration as applicable to the Dashboard.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-vdmattributes.html */

export interface DashboardAttributes {
    /**
     * - Specifies the status of your VDM engagement metrics collection. Can be one of the following:
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `ENABLED|DISABLED`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-vdmattributes.html#cfn-ses-vdmattributes-dashboardattributes-engagementmetrics */
    "EngagementMetrics"?: string | Intrinsic;
}

/**
 * An object containing additional settings for your VDM configuration as applicable to the Guardian.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-vdmattributes.html */

export interface GuardianAttributes {
    /**
     * - Specifies the status of your VDM optimized shared delivery. Can be one of the following:
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `ENABLED|DISABLED`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-vdmattributes.html#cfn-ses-vdmattributes-guardianattributes-optimizedshareddelivery */
    "OptimizedSharedDelivery"?: string | Intrinsic;
}

/**
 * The Virtual Deliverability Manager (VDM) attributes that apply to your Amazon SES account.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-vdmattributes.html */

export interface SESVdmAttributes extends ResourceAttributes {
    "Type": "AWS::SES::VdmAttributes";
    "Properties": {
        /**
         * - Specifies additional settings for your VDM configuration as applicable to the Dashboard.
         * - _Required_: No
         * - _Type_: [DashboardAttributes](./aws-properties-ses-vdmattributes-dashboardattributes.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-vdmattributes.html#cfn-ses-vdmattributes-dashboardattributes */
        "DashboardAttributes"?: DashboardAttributes;
        /**
         * - Specifies additional settings for your VDM configuration as applicable to the Guardian.
         * - _Required_: No
         * - _Type_: [GuardianAttributes](./aws-properties-ses-vdmattributes-guardianattributes.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-vdmattributes.html#cfn-ses-vdmattributes-guardianattributes */
        "GuardianAttributes"?: GuardianAttributes;
    };
}