import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * _Alias records only:_ Information about the AWS resource, such as a CloudFront distribution or an Amazon S3 bucket, that you want to route traffic to.
 * When creating records for a private hosted zone, note the following:
 * *   Creating geolocation alias and latency alias records in a private hosted zone is allowed but not supported.
 *     
 * *   For information about creating failover records in a private hosted zone, see [Configuring Failover in a Private Hosted Zone](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-private-hosted-zones.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-recordset.html */

export interface AliasTarget {
    /**
     * - _Alias records only:_ The value that you specify depends on where you want to route queries:
     * - _Required_: Yes
     * - _Type_: String
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-recordset.html#cfn-route53-recordset-aliastarget-dnsname */
    "DNSName": string | Intrinsic;
    /**
     * - _Applies only to alias, failover alias, geolocation alias, latency alias, and weighted alias resource record sets:_ When `EvaluateTargetHealth` is `true`, an alias resource record set inherits the health of the referenced AWS resource, such as an ELB load balancer or another resource record set in the hosted zone.
     * - Note the following:
     * - For more information and examples, see [Amazon Route 53 Health Checks and DNS Failover](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover.html) in the _Amazon Route 53 Developer Guide_.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-recordset.html#cfn-route53-recordset-aliastarget-evaluatetargethealth */
    "EvaluateTargetHealth"?: boolean | Intrinsic;
    /**
     * - _Alias resource records sets only_: The value used depends on where you want to route traffic:
     * - _Required_: Yes
     * - _Type_: String
     * - _Maximum_: `32`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-recordset.html#cfn-route53-recordset-aliastarget-hostedzoneid */
    "HostedZoneId": string | Intrinsic;
}

/**
 * The object that is specified in resource record set object when you are linking a resource record set to a CIDR location.
 * A `LocationName` with an asterisk “\*” can be used to create a default CIDR record. `CollectionId` is still required for default record.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-recordset.html */

export interface CidrRoutingConfig {
    /**
     * - The CIDR collection ID.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-recordset.html#cfn-route53-recordset-cidrroutingconfig-collectionid */
    "CollectionId": string | Intrinsic;
    /**
     * - The CIDR collection location name.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[0-9A-Za-z_\-\*]+`
     * - _Minimum_: `1`
     * - _Maximum_: `16`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-recordset.html#cfn-route53-recordset-cidrroutingconfig-locationname */
    "LocationName": string | Intrinsic;
}

/**
 * A complex type that contains information about a geographic location.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-recordset.html */

export interface GeoLocation {
    /**
     * - For geolocation resource record sets, a two-letter abbreviation that identifies a continent. Route 53 supports the following continent codes:
     * - Constraint: Specifying `ContinentCode` with either `CountryCode` or `SubdivisionCode` returns an `InvalidInput` error.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `2`
     * - _Maximum_: `2`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-recordset.html#cfn-route53-recordset-geolocation-continentcode */
    "ContinentCode"?: string | Intrinsic;
    /**
     * - For geolocation resource record sets, the two-letter code for a country.
     * - Route 53 uses the two-letter country codes that are specified in [ISO standard 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `2`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-recordset.html#cfn-route53-recordset-geolocation-countrycode */
    "CountryCode"?: string | Intrinsic;
    /**
     * - For geolocation resource record sets, the two-letter code for a state of the United States. Route 53 doesn't support any other values for `SubdivisionCode`. For a list of state abbreviations, see [Appendix B: Two–Letter State and Possession Abbreviations](https://pe.usps.com/text/pub28/28apb.htm) on the United States Postal Service website.
     * - If you specify `subdivisioncode`, you must also specify `US` for `CountryCode`.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `3`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-recordset.html#cfn-route53-recordset-geolocation-subdivisioncode */
    "SubdivisionCode"?: string | Intrinsic;
}

/**
 * A complex type that lists the coordinates for a geoproximity resource record.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-recordset.html */

export interface Coordinates {
    /**
     * - Specifies a coordinate of the north–south position of a geographic point on the surface of the Earth (-90 - 90).
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[-+]?[0-9]{1,2}(\.[0-9]{0,2})?`
     * - _Minimum_: `1`
     * - _Maximum_: `6`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-recordset.html#cfn-route53-recordset-coordinates-latitude */
    "Latitude": string | Intrinsic;
    /**
     * - Specifies a coordinate of the east–west position of a geographic point on the surface of the Earth (-180 - 180).
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[-+]?[0-9]{1,3}(\.[0-9]{0,2})?`
     * - _Minimum_: `1`
     * - _Maximum_: `7`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-recordset.html#cfn-route53-recordset-coordinates-longitude */
    "Longitude": string | Intrinsic;
}

/**
 * (Resource record sets only): A complex type that lets you specify where your resources are located. Only one of `LocalZoneGroup`, `Coordinates`, or `AWSRegion` is allowed per request at a time.
 * For more information about geoproximity routing, see [Geoproximity routing](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy-geoproximity.html) in the _Amazon Route 53 Developer Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-recordset.html */

export interface GeoProximityLocation {
    /**
     * - The AWS Region the resource you are directing DNS traffic to, is in.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `64`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-recordset.html#cfn-route53-recordset-geoproximitylocation-awsregion */
    "AWSRegion"?: string | Intrinsic;
    /**
     * - The bias increases or decreases the size of the geographic region from which Route 53 routes traffic to a resource.
     * - To use `Bias` to change the size of the geographic region, specify the applicable value for the bias:
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `-99`
     * - _Maximum_: `99`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-recordset.html#cfn-route53-recordset-geoproximitylocation-bias */
    "Bias"?: number | Intrinsic;
    /**
     * - Contains the longitude and latitude for a geographic region.
     * - _Required_: No
     * - _Type_: [Coordinates](./aws-properties-route53-recordset-coordinates.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-recordset.html#cfn-route53-recordset-geoproximitylocation-coordinates */
    "Coordinates"?: Coordinates;
    /**
     * - Specifies an AWS Local Zone Group.
     * - A local Zone Group is usually the Local Zone code without the ending character. For example, if the Local Zone is `us-east-1-bue-1a` the Local Zone Group is `us-east-1-bue-1`.
     * - You can identify the Local Zones Group for a specific Local Zone by using the [describe-availability-zones](https://docs.aws.amazon.com/cli/latest/reference/ec2/describe-availability-zones.html) CLI command:
     * - This command returns: `"GroupName": "us-west-2-den-1"`, specifying that the Local Zone `us-west-2-den-1a` belongs to the Local Zone Group `us-west-2-den-1`.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `64`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-recordset.html#cfn-route53-recordset-geoproximitylocation-localzonegroup */
    "LocalZoneGroup"?: string | Intrinsic;
}

/**
 * Information about the record that you want to create.
 * The `AWS::Route53::RecordSet` type can be used as a standalone resource or as an embedded property in the `AWS::Route53::RecordSetGroup` type. Note that some `AWS::Route53::RecordSet` properties are valid only when used within `AWS::Route53::RecordSetGroup`.
 * For more information, see [ChangeResourceRecordSets](https://docs.aws.amazon.com/Route53/latest/APIReference/API_ChangeResourceRecordSets.html) in the _Amazon Route 53 API Reference_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-recordset.html */

export interface Route53RecordSet extends ResourceAttributes {
    "Type": "AWS::Route53::RecordSet";
    "Properties": {
        /**
         * - _Alias resource record sets only:_ Information about the AWS resource, such as a CloudFront distribution or an Amazon S3 bucket, that you want to route traffic to.
         * - If you're creating resource records sets for a private hosted zone, note the following:
         * - _Required_: No
         * - _Type_: [AliasTarget](./aws-properties-route53-recordset-aliastarget.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-recordset.html#cfn-route53-recordset-aliastarget */
        "AliasTarget"?: AliasTarget;
        /**
         * - The object that is specified in resource record set object when you are linking a resource record set to a CIDR location.
         * - A `LocationName` with an asterisk “\*” can be used to create a default CIDR record. `CollectionId` is still required for default record.
         * - _Required_: No
         * - _Type_: [CidrRoutingConfig](./aws-properties-route53-recordset-cidrroutingconfig.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-recordset.html#cfn-route53-recordset-cidrroutingconfig */
        "CidrRoutingConfig"?: CidrRoutingConfig;
        /**
         * - _Optional:_ Any comments you want to include about a change batch request.
         * - _Required_: No
         * - _Type_: String
         * - _Maximum_: `256`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-recordset.html#cfn-route53-recordset-comment */
        "Comment"?: string | Intrinsic;
        /**
         * - _Failover resource record sets only:_ To configure failover, you add the `Failover` element to two resource record sets. For one resource record set, you specify `PRIMARY` as the value for `Failover`; for the other resource record set, you specify `SECONDARY`. In addition, you include the `HealthCheckId` element and specify the health check that you want Amazon Route 53 to perform for each resource record set.
         * - Except where noted, the following failover behaviors assume that you have included the `HealthCheckId` element in both resource record sets:
         * - You can't create non-failover resource record sets that have the same values for the `Name` and `Type` elements as failover resource record sets.
         * - For failover alias resource record sets, you must also include the `EvaluateTargetHealth` element and set the value to true.
         * - For more information about configuring failover for Route 53, see the following topics in the _Amazon Route 53 Developer Guide_:
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `PRIMARY | SECONDARY`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-recordset.html#cfn-route53-recordset-failover */
        "Failover"?: string | Intrinsic;
        /**
         * - _Geolocation resource record sets only:_ A complex type that lets you control how Amazon Route 53 responds to DNS queries based on the geographic origin of the query. For example, if you want all queries from Africa to be routed to a web server with an IP address of `192.0.2.111`, create a resource record set with a `Type` of `A` and a `ContinentCode` of `AF`.
         * - If you create separate resource record sets for overlapping geographic regions (for example, one resource record set for a continent and one for a country on the same continent), priority goes to the smallest geographic region. This allows you to route most queries for a continent to one resource and to route queries for a country on that continent to a different resource.
         * - You can't create two geolocation resource record sets that specify the same geographic location.
         * - The value `*` in the `CountryCode` element matches all geographic locations that aren't specified in other geolocation resource record sets that have the same values for the `Name` and `Type` elements.
         * - You can't create non-geolocation resource record sets that have the same values for the `Name` and `Type` elements as geolocation resource record sets.
         * - _Required_: No
         * - _Type_: [GeoLocation](./aws-properties-route53-recordset-geolocation.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-recordset.html#cfn-route53-recordset-geolocation */
        "GeoLocation"?: GeoLocation;
        /**
         * - _GeoproximityLocation resource record sets only:_ A complex type that lets you control how Route 53 responds to DNS queries based on the geographic origin of the query and your resources.
         * - _Required_: No
         * - _Type_: [GeoProximityLocation](./aws-properties-route53-recordset-geoproximitylocation.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-recordset.html#cfn-route53-recordset-geoproximitylocation */
        "GeoProximityLocation"?: GeoProximityLocation;
        /**
         * - If you want Amazon Route 53 to return this resource record set in response to a DNS query only when the status of a health check is healthy, include the `HealthCheckId` element and specify the ID of the applicable health check.
         * - Route 53 determines whether a resource record set is healthy based on one of the following:
         * - For more information, see the following topics in the _Amazon Route 53 Developer Guide_:
         * - **When to Specify HealthCheckId**
         * - Specifying a value for `HealthCheckId` is useful only when Route 53 is choosing between two or more resource record sets to respond to a DNS query, and you want Route 53 to base the choice in part on the status of a health check. Configuring health checks makes sense only in the following configurations:
         * - **Geolocation Routing**
         * - For geolocation resource record sets, if an endpoint is unhealthy, Route 53 looks for a resource record set for the larger, associated geographic region. For example, suppose you have resource record sets for a state in the United States, for the entire United States, for North America, and a resource record set that has `*` for `CountryCode` is `*`, which applies to all locations. If the endpoint for the state resource record set is unhealthy, Route 53 checks for healthy resource record sets in the following order until it finds a resource record set for which the endpoint is healthy:
         * - **Specifying the Health Check Endpoint by Domain Name**
         * - If your health checks specify the endpoint only by domain name, we recommend that you create a separate health check for each endpoint. For example, create a health check for each `HTTP` server that is serving content for `www.example.com`. For the value of `FullyQualifiedDomainName`, specify the domain name of the server (such as `us-east-2-www.example.com`), not the name of the resource record sets (`www.example.com`).
         * - _Required_: No
         * - _Type_: String
         * - _Maximum_: `64`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-recordset.html#cfn-route53-recordset-healthcheckid */
        "HealthCheckId"?: string | Intrinsic;
        /**
         * - The ID of the hosted zone that you want to create records in.
         * - Specify either `HostedZoneName` or `HostedZoneId`, but not both. If you have multiple hosted zones with the same domain name, you must specify the hosted zone using `HostedZoneId`.
         * - _Required_: No
         * - _Type_: String
         * - _Maximum_: `32`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-recordset.html#cfn-route53-recordset-hostedzoneid */
        "HostedZoneId"?: string | Intrinsic;
        /**
         * - The name of the hosted zone that you want to create records in. You must include a trailing dot (for example, `www.example.com.`) as part of the `HostedZoneName`.
         * - When you create a stack using an AWS::Route53::RecordSet that specifies `HostedZoneName`, AWS CloudFormation attempts to find a hosted zone whose name matches the HostedZoneName. If AWS CloudFormation cannot find a hosted zone with a matching domain name, or if there is more than one hosted zone with the specified domain name, AWS CloudFormation will not create the stack.
         * - Specify either `HostedZoneName` or `HostedZoneId`, but not both. If you have multiple hosted zones with the same domain name, you must specify the hosted zone using `HostedZoneId`.
         * - _Required_: No
         * - _Type_: String
         * - _Maximum_: `32`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-recordset.html#cfn-route53-recordset-hostedzonename */
        "HostedZoneName"?: string | Intrinsic;
        /**
         * - _Multivalue answer resource record sets only_: To route traffic approximately randomly to multiple resources, such as web servers, create one multivalue answer record for each resource and specify `true` for `MultiValueAnswer`. Note the following:
         * - You can't create multivalue answer alias records.
         * - _Required_: No
         * - _Type_: Boolean
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-recordset.html#cfn-route53-recordset-multivalueanswer */
        "MultiValueAnswer"?: boolean | Intrinsic;
        /**
         * - For `ChangeResourceRecordSets` requests, the name of the record that you want to create, update, or delete. For `ListResourceRecordSets` responses, the name of a record in the specified hosted zone.
         * - **ChangeResourceRecordSets Only**
         * - Enter a fully qualified domain name, for example, `www.example.com`. You can optionally include a trailing dot. If you omit the trailing dot, Amazon Route 53 assumes that the domain name that you specify is fully qualified. This means that Route 53 treats `www.example.com` (without a trailing dot) and `www.example.com.` (with a trailing dot) as identical.
         * - For information about how to specify characters other than `a-z`, `0-9`, and `-` (hyphen) and how to specify internationalized domain names, see [DNS Domain Name Format](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DomainNameFormat.html) in the _Amazon Route 53 Developer Guide_.
         * - You can use the asterisk (\*) wildcard to replace the leftmost label in a domain name, for example, `*.example.com`. Note the following:
         * - _Required_: Yes
         * - _Type_: String
         * - _Maximum_: `1024`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-recordset.html#cfn-route53-recordset-name */
        "Name": string | Intrinsic;
        /**
         * - _Latency-based resource record sets only:_ The Amazon EC2 Region where you created the resource that this resource record set refers to. The resource typically is an AWS resource, such as an EC2 instance or an ELB load balancer, and is referred to by an IP address or a DNS domain name, depending on the record type.
         * - When Amazon Route 53 receives a DNS query for a domain name and type for which you have created latency resource record sets, Route 53 selects the latency resource record set that has the lowest latency between the end user and the associated Amazon EC2 Region. Route 53 then returns the value that is associated with the selected resource record set.
         * - Note the following:
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `us-east-1 | us-east-2 | us-west-1 | us-west-2 | ca-central-1 | eu-west-1 | eu-west-2 | eu-west-3 | eu-central-1 | eu-central-2 | ap-southeast-1 | ap-southeast-2 | ap-southeast-3 | ap-northeast-1 | ap-northeast-2 | ap-northeast-3 | eu-north-1 | sa-east-1 | cn-north-1 | cn-northwest-1 | ap-east-1 | me-south-1 | me-central-1 | ap-south-1 | ap-south-2 | af-south-1 | eu-south-1 | eu-south-2 | ap-southeast-4 | il-central-1 | ca-west-1 | ap-southeast-5 | mx-central-1 | ap-southeast-7 | us-gov-east-1 | us-gov-west-1`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-recordset.html#cfn-route53-recordset-region */
        "Region"?: string | Intrinsic;
        /**
         * - One or more values that correspond with the value that you specified for the `Type` property. For example, if you specified `A` for `Type`, you specify one or more IP addresses in IPv4 format for `ResourceRecords`. For information about the format of values for each record type, see [Supported DNS Resource Record Types](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/ResourceRecordTypes.html) in the _Amazon Route 53 Developer Guide_.
         * - Note the following:
         * - _Required_: No
         * - _Type_: Array of String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-recordset.html#cfn-route53-recordset-resourcerecords */
        "ResourceRecords"?: (string | Intrinsic)[];
        /**
         * - _Resource record sets that have a routing policy other than simple:_ An identifier that differentiates among multiple resource record sets that have the same combination of name and type, such as multiple weighted resource record sets named acme.example.com that have a type of A. In a group of resource record sets that have the same name and type, the value of `SetIdentifier` must be unique for each resource record set.
         * - For information about routing policies, see [Choosing a Routing Policy](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html) in the _Amazon Route 53 Developer Guide_.
         * - _Required_: No
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `128`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-recordset.html#cfn-route53-recordset-setidentifier */
        "SetIdentifier"?: string | Intrinsic;
        /**
         * - The resource record cache time to live (TTL), in seconds. Note the following:
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-recordset.html#cfn-route53-recordset-ttl */
        "TTL"?: string | Intrinsic;
        /**
         * - The DNS record type. For information about different record types and how data is encoded for them, see [Supported DNS Resource Record Types](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/ResourceRecordTypes.html) in the _Amazon Route 53 Developer Guide_.
         * - Valid values for basic resource record sets: `A` | `AAAA` | `CAA` | `CNAME` | `DS` |`MX` | `NAPTR` | `NS` | `PTR` | `SOA` | `SPF` | `SRV` | `TXT`| `TLSA`| `SSHFP`| `SVCB`| `HTTPS`
         * - Values for weighted, latency, geolocation, and failover resource record sets: `A` | `AAAA` | `CAA` | `CNAME` | `MX` | `NAPTR` | `PTR` | `SPF` | `SRV` | `TXT`| `TLSA`| `SSHFP`| `SVCB`| `HTTPS`. When creating a group of weighted, latency, geolocation, or failover resource record sets, specify the same value for all of the resource record sets in the group.
         * - Valid values for multivalue answer resource record sets: `A` | `AAAA` | `MX` | `NAPTR` | `PTR` | `SPF` | `SRV` | `TXT`| `CAA`| `TLSA`| `SSHFP`| `SVCB`| `HTTPS`
         * - Values for alias resource record sets:
         * - _Required_: Yes
         * - _Type_: String
         * - _Allowed values_: `SOA | A | TXT | NS | CNAME | MX | NAPTR | PTR | SRV | SPF | AAAA | CAA | DS | TLSA | SSHFP | SVCB | HTTPS`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-recordset.html#cfn-route53-recordset-type */
        "Type": string | Intrinsic;
        /**
         * - _Weighted resource record sets only:_ Among resource record sets that have the same combination of DNS name and type, a value that determines the proportion of DNS queries that Amazon Route 53 responds to using the current resource record set. Route 53 calculates the sum of the weights for the resource record sets that have the same combination of DNS name and type. Route 53 then responds to queries based on the ratio of a resource's weight to the total. Note the following:
         * - _Required_: No
         * - _Type_: Integer
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-recordset.html#cfn-route53-recordset-weight */
        "Weight"?: number | Intrinsic;
    };
}