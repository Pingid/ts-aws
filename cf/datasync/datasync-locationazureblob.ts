import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * The shared access signature (SAS) configuration that allows AWS DataSync to access your Microsoft Azure Blob Storage.
 * For more information, see [SAS tokens](https://docs.aws.amazon.com/datasync/latest/userguide/creating-azure-blob-location.html#azure-blob-sas-tokens) for accessing your Azure Blob Storage.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationazureblob.html */

export interface AzureBlobSasConfiguration {
  /**
   * - Specifies a SAS token that provides permissions to access your Azure Blob Storage.
   * - The token is part of the SAS URI string that comes after the storage resource URI and a question mark. A token looks something like this:
   * - `sp=r&st=2023-12-20T14:54:52Z&se=2023-12-20T22:54:52Z&spr=https&sv=2021-06-08&sr=c&sig=aBBKDWQvyuVcTPH9EBp%2FXTI9E%2F%2Fmq171%2BZU178wcwqU%3D`
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `(^.+$)`
   * - _Minimum_: `1`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationazureblob.html#cfn-datasync-locationazureblob-azureblobsasconfiguration-azureblobsastoken */
  AzureBlobSasToken: string | Intrinsic
}

/**
 * Specifies labels that help you categorize, filter, and search for your AWS resources. We recommend creating at least a name tag for your transfer location.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationazureblob.html */

export interface Tag {
  /**
   * - The key for an AWS resource tag.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9\s+=._:/-]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationazureblob.html#cfn-datasync-locationazureblob-tag-key */
  Key: string | Intrinsic
  /**
   * - The value for an AWS resource tag.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9\s+=._:@/-]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationazureblob.html#cfn-datasync-locationazureblob-tag-value */
  Value: string | Intrinsic
}

/**
 * Creates a transfer _location_ for a Microsoft Azure Blob Storage container. AWS DataSync can use this location as a transfer source or destination.
 * Before you begin, make sure you know [how DataSync accesses Azure Blob Storage](https://docs.aws.amazon.com/datasync/latest/userguide/creating-azure-blob-location.html#azure-blob-access) and works with [access tiers](https://docs.aws.amazon.com/datasync/latest/userguide/creating-azure-blob-location.html#azure-blob-access-tiers) and [blob types](https://docs.aws.amazon.com/datasync/latest/userguide/creating-azure-blob-location.html#blob-types). You also need a [DataSync agent](https://docs.aws.amazon.com/datasync/latest/userguide/creating-azure-blob-location.html#azure-blob-creating-agent) that can connect to your container.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationazureblob.html */

export interface DataSyncLocationAzureBlob extends ResourceAttributes {
  Type: 'AWS::DataSync::LocationAzureBlob'
  Properties: {
    /**
     * - Specifies the Amazon Resource Name (ARN) of the DataSync agent that can connect with your Azure Blob Storage container.
     * - You can specify more than one agent. For more information, see [Using multiple agents for your transfer](https://docs.aws.amazon.com/datasync/latest/userguide/multiple-agents.html).
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `128 | 4`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationazureblob.html#cfn-datasync-locationazureblob-agentarns */
    AgentArns: (string | Intrinsic)[]
    /**
     * - Specifies the access tier that you want your objects or files transferred into. This only applies when using the location as a transfer destination. For more information, see [Access tiers](https://docs.aws.amazon.com/datasync/latest/userguide/creating-azure-blob-location.html#azure-blob-access-tiers).
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `HOT | COOL | ARCHIVE`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationazureblob.html#cfn-datasync-locationazureblob-azureaccesstier */
    AzureAccessTier?: string | Intrinsic
    /**
     * - Specifies the authentication method DataSync uses to access your Azure Blob Storage. DataSync can access blob storage using a shared access signature (SAS).
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `SAS`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationazureblob.html#cfn-datasync-locationazureblob-azureblobauthenticationtype */
    AzureBlobAuthenticationType: string | Intrinsic
    /**
     * - Specifies the URL of the Azure Blob Storage container involved in your transfer.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^https://[A-Za-z0-9]((.|-+)?[A-Za-z0-9]){0,252}/[a-z0-9](-?[a-z0-9]){2,62}$`
     * - _Maximum_: `325`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationazureblob.html#cfn-datasync-locationazureblob-azureblobcontainerurl */
    AzureBlobContainerUrl?: string | Intrinsic
    /**
     * - Specifies the SAS configuration that allows DataSync to access your Azure Blob Storage.
     * - _Required_: No
     * - _Type_: [AzureBlobSasConfiguration](./aws-properties-datasync-locationazureblob-azureblobsasconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationazureblob.html#cfn-datasync-locationazureblob-azureblobsasconfiguration */
    AzureBlobSasConfiguration?: AzureBlobSasConfiguration
    /**
     * - Specifies the type of blob that you want your objects or files to be when transferring them into Azure Blob Storage. Currently, DataSync only supports moving data into Azure Blob Storage as block blobs. For more information on blob types, see the [Azure Blob Storage documentation](https://learn.microsoft.com/en-us/rest/api/storageservices/understanding-block-blobs--append-blobs--and-page-blobs).
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `BLOCK`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationazureblob.html#cfn-datasync-locationazureblob-azureblobtype */
    AzureBlobType?: string | Intrinsic
    /**
     * - Specifies path segments if you want to limit your transfer to a virtual directory in your container (for example, `/my/images`).
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[\p{L}\p{M}\p{Z}\p{S}\p{N}\p{P}\p{C}]*$`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationazureblob.html#cfn-datasync-locationazureblob-subdirectory */
    Subdirectory?: string | Intrinsic
    /**
     * - Specifies labels that help you categorize, filter, and search for your AWS resources. We recommend creating at least a name tag for your transfer location.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-datasync-locationazureblob-tag.html)
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationazureblob.html#cfn-datasync-locationazureblob-tags */
    Tags?: Tag[]
  }
}
