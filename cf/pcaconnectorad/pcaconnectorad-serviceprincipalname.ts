import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Creates a service principal name (SPN) for the service account in Active Directory. Kerberos authentication uses SPNs to associate a service instance with a service sign-in account.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-serviceprincipalname.html */

export interface PCAConnectorADServicePrincipalName extends ResourceAttributes {
    "Type": "AWS::PCAConnectorAD::ServicePrincipalName";
    "Properties": {
        /**
         * - The Amazon Resource Name (ARN) that was returned when you called [CreateConnector.html](https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateConnector.html).
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^arn:[\w-]+:pca-connector-ad:[\w-]+:[0-9]+:connector(\/[\w-]+)$`
         * - _Minimum_: `5`
         * - _Maximum_: `200`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-serviceprincipalname.html#cfn-pcaconnectorad-serviceprincipalname-connectorarn */
        "ConnectorArn"?: string | Intrinsic;
        /**
         * - The Amazon Resource Name (ARN) that was returned when you called [CreateDirectoryRegistration](https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateDirectoryRegistration.html).
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^arn:[\w-]+:pca-connector-ad:[\w-]+:[0-9]+:directory-registration(\/[\w-]+)$`
         * - _Minimum_: `5`
         * - _Maximum_: `200`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-serviceprincipalname.html#cfn-pcaconnectorad-serviceprincipalname-directoryregistrationarn */
        "DirectoryRegistrationArn"?: string | Intrinsic;
    };
}