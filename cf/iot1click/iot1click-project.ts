import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * In AWS CloudFormation, use the `PlacementTemplate` property type to define the template for an AWS IoT 1-Click project.
 * `PlacementTemplate` is a property of the `AWS::IoT1Click::Project` resource.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot1click-project.html */

export interface PlacementTemplate {
  /**
   * - The default attributes (key-value pairs) to be applied to all placements using this template.
   * - _Required_: No
   * - _Type_: Json
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot1click-project.html#cfn-iot1click-project-placementtemplate-defaultattributes */
  DefaultAttributes?: any | Intrinsic
  /**
   * - An object specifying the [DeviceTemplate](https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_DeviceTemplate.html) for all placements using this ([PlacementTemplate](https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_PlacementTemplate.html)) template.
   * - _Required_: No
   * - _Type_:
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot1click-project.html#cfn-iot1click-project-placementtemplate-devicetemplates */
  DeviceTemplates?: any | Intrinsic
}

/**
 * The `AWS::IoT1Click::Project` resource creates an empty project with a placement template. A project contains zero or more placements that adhere to the placement template defined in the project. For more information, see [CreateProject](https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_CreateProject.html) in the _AWS IoT 1-Click Projects API Reference_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot1click-project.html */

export interface IoT1ClickProject extends ResourceAttributes {
  Type: 'AWS::IoT1Click::Project'
  Properties: {
    /**
     * - The description of the project.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot1click-project.html#cfn-iot1click-project-description */
    Description?: string | Intrinsic
    /**
     * - An object describing the project's placement specifications.
     * - _Required_: Yes
     * - _Type_: [PlacementTemplate](./aws-properties-iot1click-project-placementtemplate.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot1click-project.html#cfn-iot1click-project-placementtemplate */
    PlacementTemplate: PlacementTemplate
    /**
     * - The name of the project from which to obtain information.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot1click-project.html#cfn-iot1click-project-projectname */
    ProjectName?: string | Intrinsic
  }
}
