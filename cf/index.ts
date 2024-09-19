import type { AccessAnalyzerAnalyzer } from './accessanalyzer/index.js'
import type {
  ACMPCACertificate,
  ACMPCACertificateAuthority,
  ACMPCACertificateAuthorityActivation,
  ACMPCAPermission,
} from './acmpca/index.js'
import type { AmazonMQBroker, AmazonMQConfiguration, AmazonMQConfigurationAssociation } from './amazonmq/index.js'
import type { AmplifyApp, AmplifyBranch, AmplifyDomain } from './amplify/index.js'
import type {
  AmplifyUIBuilderComponent,
  AmplifyUIBuilderForm,
  AmplifyUIBuilderTheme,
} from './amplifyuibuilder/index.js'
import type {
  ApiGatewayAccount,
  ApiGatewayApiKey,
  ApiGatewayAuthorizer,
  ApiGatewayBasePathMapping,
  ApiGatewayClientCertificate,
  ApiGatewayDeployment,
  ApiGatewayDocumentationPart,
  ApiGatewayDocumentationVersion,
  ApiGatewayDomainName,
  ApiGatewayGatewayResponse,
  ApiGatewayMethod,
  ApiGatewayModel,
  ApiGatewayRequestValidator,
  ApiGatewayResource,
  ApiGatewayRestApi,
  ApiGatewayStage,
  ApiGatewayUsagePlan,
  ApiGatewayUsagePlanKey,
  ApiGatewayVpcLink,
} from './apigateway/index.js'
import type {
  ApiGatewayV2Api,
  ApiGatewayV2ApiGatewayManagedOverrides,
  ApiGatewayV2ApiMapping,
  ApiGatewayV2Authorizer,
  ApiGatewayV2Deployment,
  ApiGatewayV2DomainName,
  ApiGatewayV2Integration,
  ApiGatewayV2IntegrationResponse,
  ApiGatewayV2Model,
  ApiGatewayV2Route,
  ApiGatewayV2RouteResponse,
  ApiGatewayV2Stage,
  ApiGatewayV2VpcLink,
} from './apigatewayv2/index.js'
import type {
  AppConfigApplication,
  AppConfigConfigurationProfile,
  AppConfigDeployment,
  AppConfigDeploymentStrategy,
  AppConfigEnvironment,
  AppConfigExtension,
  AppConfigExtensionAssociation,
  AppConfigHostedConfigurationVersion,
} from './appconfig/index.js'
import type { AppFlowConnector, AppFlowConnectorProfile, AppFlowFlow } from './appflow/index.js'
import type {
  AppIntegrationsApplication,
  AppIntegrationsDataIntegration,
  AppIntegrationsEventIntegration,
} from './appintegrations/index.js'
import type {
  ApplicationAutoScalingScalableTarget,
  ApplicationAutoScalingScalingPolicy,
} from './applicationautoscaling/index.js'
import type { ApplicationInsightsApplication } from './applicationinsights/index.js'
import type { ApplicationSignalsServiceLevelObjective } from './applicationsignals/index.js'
import type {
  AppMeshGatewayRoute,
  AppMeshMesh,
  AppMeshRoute,
  AppMeshVirtualGateway,
  AppMeshVirtualNode,
  AppMeshVirtualRouter,
  AppMeshVirtualService,
} from './appmesh/index.js'
import type {
  AppRunnerAutoScalingConfiguration,
  AppRunnerObservabilityConfiguration,
  AppRunnerService,
  AppRunnerVpcConnector,
  AppRunnerVpcIngressConnection,
} from './apprunner/index.js'
import type {
  AppStreamAppBlock,
  AppStreamAppBlockBuilder,
  AppStreamApplication,
  AppStreamApplicationEntitlementAssociation,
  AppStreamApplicationFleetAssociation,
  AppStreamDirectoryConfig,
  AppStreamEntitlement,
  AppStreamFleet,
  AppStreamImageBuilder,
  AppStreamStack,
  AppStreamStackFleetAssociation,
  AppStreamStackUserAssociation,
  AppStreamUser,
} from './appstream/index.js'
import type {
  AppSyncApiCache,
  AppSyncApiKey,
  AppSyncDataSource,
  AppSyncDomainName,
  AppSyncDomainNameApiAssociation,
  AppSyncFunctionConfiguration,
  AppSyncGraphQLApi,
  AppSyncGraphQLSchema,
  AppSyncResolver,
  AppSyncSourceApiAssociation,
} from './appsync/index.js'
import type { AppTestTestCase } from './apptest/index.js'
import type { APSRuleGroupsNamespace, APSScraper, APSWorkspace } from './aps/index.js'
import type {
  ARCZonalShiftAutoshiftObserverNotificationStatus,
  ARCZonalShiftZonalAutoshiftConfiguration,
} from './arczonalshift/index.js'
import type {
  AthenaCapacityReservation,
  AthenaDataCatalog,
  AthenaNamedQuery,
  AthenaPreparedStatement,
  AthenaWorkGroup,
} from './athena/index.js'
import type { AuditManagerAssessment } from './auditmanager/index.js'
import type {
  AutoScalingAutoScalingGroup,
  AutoScalingLaunchConfiguration,
  AutoScalingLifecycleHook,
  AutoScalingScalingPolicy,
  AutoScalingScheduledAction,
  AutoScalingWarmPool,
} from './autoscaling/index.js'
import type { AutoScalingPlansScalingPlan } from './autoscalingplans/index.js'
import type { B2BICapability, B2BIPartnership, B2BIProfile, B2BITransformer } from './b2bi/index.js'
import type {
  BackupBackupPlan,
  BackupBackupSelection,
  BackupBackupVault,
  BackupFramework,
  BackupReportPlan,
  BackupRestoreTestingPlan,
  BackupRestoreTestingSelection,
} from './backup/index.js'
import type { BackupGatewayHypervisor } from './backupgateway/index.js'
import type {
  BatchComputeEnvironment,
  BatchJobDefinition,
  BatchJobQueue,
  BatchSchedulingPolicy,
} from './batch/index.js'
import type { BCMDataExportsExport } from './bcmdataexports/index.js'
import type {
  BedrockAgent,
  BedrockAgentAlias,
  BedrockDataSource,
  BedrockFlow,
  BedrockFlowAlias,
  BedrockFlowVersion,
  BedrockGuardrail,
  BedrockGuardrailVersion,
  BedrockKnowledgeBase,
  BedrockPrompt,
  BedrockPromptVersion,
} from './bedrock/index.js'
import type {
  BillingConductorBillingGroup,
  BillingConductorCustomLineItem,
  BillingConductorPricingPlan,
  BillingConductorPricingRule,
} from './billingconductor/index.js'
import type { BudgetsBudget, BudgetsBudgetsAction } from './budgets/index.js'
import type { CassandraKeyspace, CassandraTable } from './cassandra/index.js'
import type { CEAnomalyMonitor, CEAnomalySubscription, CECostCategory } from './ce/index.js'
import type { CertificateManagerAccount, CertificateManagerCertificate } from './certificatemanager/index.js'
import type { ChatbotMicrosoftTeamsChannelConfiguration, ChatbotSlackChannelConfiguration } from './chatbot/index.js'
import type {
  CleanRoomsAnalysisTemplate,
  CleanRoomsCollaboration,
  CleanRoomsConfiguredTable,
  CleanRoomsConfiguredTableAssociation,
  CleanRoomsIdMappingTable,
  CleanRoomsIdNamespaceAssociation,
  CleanRoomsMembership,
  CleanRoomsPrivacyBudgetTemplate,
} from './cleanrooms/index.js'
import type { CleanRoomsMLTrainingDataset } from './cleanroomsml/index.js'
import type { Cloud9EnvironmentEC2 } from './cloud9/index.js'
import type {
  CloudFormationCustomResource,
  CloudFormationHookDefaultVersion,
  CloudFormationHookTypeConfig,
  CloudFormationHookVersion,
  CloudFormationMacro,
  CloudFormationModuleDefaultVersion,
  CloudFormationModuleVersion,
  CloudFormationPublicTypeVersion,
  CloudFormationPublisher,
  CloudFormationResourceDefaultVersion,
  CloudFormationResourceVersion,
  CloudFormationStack,
  CloudFormationStackSet,
  CloudFormationTypeActivation,
  CloudFormationWaitCondition,
  CloudFormationWaitConditionHandle,
} from './cloudformation/index.js'
import type {
  CloudFrontCachePolicy,
  CloudFrontCloudFrontOriginAccessIdentity,
  CloudFrontContinuousDeploymentPolicy,
  CloudFrontDistribution,
  CloudFrontFunction,
  CloudFrontKeyGroup,
  CloudFrontKeyValueStore,
  CloudFrontMonitoringSubscription,
  CloudFrontOriginAccessControl,
  CloudFrontOriginRequestPolicy,
  CloudFrontPublicKey,
  CloudFrontRealtimeLogConfig,
  CloudFrontResponseHeadersPolicy,
  CloudFrontStreamingDistribution,
} from './cloudfront/index.js'
import type {
  CloudTrailChannel,
  CloudTrailEventDataStore,
  CloudTrailResourcePolicy,
  CloudTrailTrail,
} from './cloudtrail/index.js'
import type {
  CloudWatchAlarm,
  CloudWatchAnomalyDetector,
  CloudWatchCompositeAlarm,
  CloudWatchDashboard,
  CloudWatchInsightRule,
  CloudWatchMetricStream,
} from './cloudwatch/index.js'
import type { CodeArtifactDomain, CodeArtifactPackageGroup, CodeArtifactRepository } from './codeartifact/index.js'
import type {
  CodeBuildFleet,
  CodeBuildProject,
  CodeBuildReportGroup,
  CodeBuildSourceCredential,
} from './codebuild/index.js'
import type { CodeCommitRepository } from './codecommit/index.js'
import type { CodeConnectionsConnection } from './codeconnections/index.js'
import type {
  CodeDeployApplication,
  CodeDeployDeploymentConfig,
  CodeDeployDeploymentGroup,
} from './codedeploy/index.js'
import type { CodeGuruProfilerProfilingGroup } from './codeguruprofiler/index.js'
import type { CodeGuruReviewerRepositoryAssociation } from './codegurureviewer/index.js'
import type { CodePipelineCustomActionType, CodePipelinePipeline, CodePipelineWebhook } from './codepipeline/index.js'
import type { CodeStarGitHubRepository } from './codestar/index.js'
import type {
  CodeStarConnectionsConnection,
  CodeStarConnectionsRepositoryLink,
  CodeStarConnectionsSyncConfiguration,
} from './codestarconnections/index.js'
import type { CodeStarNotificationsNotificationRule } from './codestarnotifications/index.js'
import type {
  CognitoIdentityPool,
  CognitoIdentityPoolPrincipalTag,
  CognitoIdentityPoolRoleAttachment,
  CognitoLogDeliveryConfiguration,
  CognitoUserPool,
  CognitoUserPoolClient,
  CognitoUserPoolDomain,
  CognitoUserPoolGroup,
  CognitoUserPoolIdentityProvider,
  CognitoUserPoolResourceServer,
  CognitoUserPoolRiskConfigurationAttachment,
  CognitoUserPoolUICustomizationAttachment,
  CognitoUserPoolUser,
  CognitoUserPoolUserToGroupAttachment,
} from './cognito/index.js'
import type { ComprehendDocumentClassifier, ComprehendFlywheel } from './comprehend/index.js'
import type {
  ConfigAggregationAuthorization,
  ConfigConfigRule,
  ConfigConfigurationAggregator,
  ConfigConfigurationRecorder,
  ConfigConformancePack,
  ConfigDeliveryChannel,
  ConfigOrganizationConfigRule,
  ConfigOrganizationConformancePack,
  ConfigRemediationConfiguration,
  ConfigStoredQuery,
} from './config/index.js'
import type {
  ConnectAgentStatus,
  ConnectApprovedOrigin,
  ConnectContactFlow,
  ConnectContactFlowModule,
  ConnectEvaluationForm,
  ConnectHoursOfOperation,
  ConnectInstance,
  ConnectInstanceStorageConfig,
  ConnectIntegrationAssociation,
  ConnectPhoneNumber,
  ConnectPredefinedAttribute,
  ConnectPrompt,
  ConnectQueue,
  ConnectQuickConnect,
  ConnectRoutingProfile,
  ConnectRule,
  ConnectSecurityKey,
  ConnectSecurityProfile,
  ConnectTaskTemplate,
  ConnectTrafficDistributionGroup,
  ConnectUser,
  ConnectUserHierarchyGroup,
  ConnectUserHierarchyStructure,
  ConnectView,
  ConnectViewVersion,
} from './connect/index.js'
import type { ConnectCampaignsCampaign } from './connectcampaigns/index.js'
import type {
  ControlTowerEnabledBaseline,
  ControlTowerEnabledControl,
  ControlTowerLandingZone,
} from './controltower/index.js'
import type { CURReportDefinition } from './cur/index.js'
import type {
  CustomerProfilesCalculatedAttributeDefinition,
  CustomerProfilesDomain,
  CustomerProfilesEventStream,
  CustomerProfilesIntegration,
  CustomerProfilesObjectType,
} from './customerprofiles/index.js'
import type {
  DataBrewDataset,
  DataBrewJob,
  DataBrewProject,
  DataBrewRecipe,
  DataBrewRuleset,
  DataBrewSchedule,
} from './databrew/index.js'
import type { DataPipelinePipeline } from './datapipeline/index.js'
import type {
  DataSyncAgent,
  DataSyncLocationAzureBlob,
  DataSyncLocationEFS,
  DataSyncLocationFSxLustre,
  DataSyncLocationFSxONTAP,
  DataSyncLocationFSxOpenZFS,
  DataSyncLocationFSxWindows,
  DataSyncLocationHDFS,
  DataSyncLocationNFS,
  DataSyncLocationObjectStorage,
  DataSyncLocationS3,
  DataSyncLocationSMB,
  DataSyncStorageSystem,
  DataSyncTask,
} from './datasync/index.js'
import type {
  DataZoneDataSource,
  DataZoneDomain,
  DataZoneEnvironment,
  DataZoneEnvironmentActions,
  DataZoneEnvironmentBlueprintConfiguration,
  DataZoneEnvironmentProfile,
  DataZoneGroupProfile,
  DataZoneProject,
  DataZoneProjectMembership,
  DataZoneSubscriptionTarget,
  DataZoneUserProfile,
} from './datazone/index.js'
import type { DAXCluster, DAXParameterGroup, DAXSubnetGroup } from './dax/index.js'
import type {
  DeadlineFarm,
  DeadlineFleet,
  DeadlineLicenseEndpoint,
  DeadlineMeteredProduct,
  DeadlineMonitor,
  DeadlineQueue,
  DeadlineQueueEnvironment,
  DeadlineQueueFleetAssociation,
  DeadlineStorageProfile,
} from './deadline/index.js'
import type { DetectiveGraph, DetectiveMemberInvitation, DetectiveOrganizationAdmin } from './detective/index.js'
import type {
  DeviceFarmDevicePool,
  DeviceFarmInstanceProfile,
  DeviceFarmNetworkProfile,
  DeviceFarmProject,
  DeviceFarmTestGridProject,
  DeviceFarmVPCEConfiguration,
} from './devicefarm/index.js'
import type {
  DevOpsGuruLogAnomalyDetectionIntegration,
  DevOpsGuruNotificationChannel,
  DevOpsGuruResourceCollection,
} from './devopsguru/index.js'
import type { DirectoryServiceMicrosoftAD, DirectoryServiceSimpleAD } from './directoryservice/index.js'
import type { DLMLifecyclePolicy } from './dlm/index.js'
import type {
  DMSCertificate,
  DMSDataProvider,
  DMSEndpoint,
  DMSEventSubscription,
  DMSInstanceProfile,
  DMSMigrationProject,
  DMSReplicationConfig,
  DMSReplicationInstance,
  DMSReplicationSubnetGroup,
  DMSReplicationTask,
} from './dms/index.js'
import type {
  DocDBDBCluster,
  DocDBDBClusterParameterGroup,
  DocDBDBInstance,
  DocDBDBSubnetGroup,
  DocDBEventSubscription,
} from './docdb/index.js'
import type { DocDBElasticCluster } from './docdbelastic/index.js'
import type { DynamoDBGlobalTable, DynamoDBTable } from './dynamodb/index.js'
import type {
  EC2CapacityReservation,
  EC2CapacityReservationFleet,
  EC2CarrierGateway,
  EC2ClientVpnAuthorizationRule,
  EC2ClientVpnEndpoint,
  EC2ClientVpnRoute,
  EC2ClientVpnTargetNetworkAssociation,
  EC2CustomerGateway,
  EC2DHCPOptions,
  EC2EC2Fleet,
  EC2EgressOnlyInternetGateway,
  EC2EIP,
  EC2EIPAssociation,
  EC2EnclaveCertificateIamRoleAssociation,
  EC2FlowLog,
  EC2GatewayRouteTableAssociation,
  EC2Host,
  EC2Instance,
  EC2InstanceConnectEndpoint,
  EC2InternetGateway,
  EC2IPAM,
  EC2IPAMAllocation,
  EC2IPAMPool,
  EC2IPAMPoolCidr,
  EC2IPAMResourceDiscovery,
  EC2IPAMResourceDiscoveryAssociation,
  EC2IPAMScope,
  EC2KeyPair,
  EC2LaunchTemplate,
  EC2LocalGatewayRoute,
  EC2LocalGatewayRouteTable,
  EC2LocalGatewayRouteTableVirtualInterfaceGroupAssociation,
  EC2LocalGatewayRouteTableVPCAssociation,
  EC2NatGateway,
  EC2NetworkAcl,
  EC2NetworkAclEntry,
  EC2NetworkInsightsAccessScope,
  EC2NetworkInsightsAccessScopeAnalysis,
  EC2NetworkInsightsAnalysis,
  EC2NetworkInsightsPath,
  EC2NetworkInterface,
  EC2NetworkInterfaceAttachment,
  EC2NetworkInterfacePermission,
  EC2NetworkPerformanceMetricSubscription,
  EC2PlacementGroup,
  EC2PrefixList,
  EC2Route,
  EC2RouteTable,
  EC2SecurityGroup,
  EC2SecurityGroupEgress,
  EC2SecurityGroupIngress,
  EC2SnapshotBlockPublicAccess,
  EC2SpotFleet,
  EC2Subnet,
  EC2SubnetCidrBlock,
  EC2SubnetNetworkAclAssociation,
  EC2SubnetRouteTableAssociation,
  EC2TrafficMirrorFilter,
  EC2TrafficMirrorFilterRule,
  EC2TrafficMirrorSession,
  EC2TrafficMirrorTarget,
  EC2TransitGateway,
  EC2TransitGatewayAttachment,
  EC2TransitGatewayConnect,
  EC2TransitGatewayMulticastDomain,
  EC2TransitGatewayMulticastDomainAssociation,
  EC2TransitGatewayMulticastGroupMember,
  EC2TransitGatewayMulticastGroupSource,
  EC2TransitGatewayPeeringAttachment,
  EC2TransitGatewayRoute,
  EC2TransitGatewayRouteTable,
  EC2TransitGatewayRouteTableAssociation,
  EC2TransitGatewayRouteTablePropagation,
  EC2TransitGatewayVpcAttachment,
  EC2VerifiedAccessEndpoint,
  EC2VerifiedAccessGroup,
  EC2VerifiedAccessInstance,
  EC2VerifiedAccessTrustProvider,
  EC2Volume,
  EC2VolumeAttachment,
  EC2VPC,
  EC2VPCCidrBlock,
  EC2VPCDHCPOptionsAssociation,
  EC2VPCEndpoint,
  EC2VPCEndpointConnectionNotification,
  EC2VPCEndpointService,
  EC2VPCEndpointServicePermissions,
  EC2VPCGatewayAttachment,
  EC2VPCPeeringConnection,
  EC2VPNConnection,
  EC2VPNConnectionRoute,
  EC2VPNGateway,
  EC2VPNGatewayRoutePropagation,
} from './ec2/index.js'
import type {
  ECRPublicRepository,
  ECRPullThroughCacheRule,
  ECRRegistryPolicy,
  ECRReplicationConfiguration,
  ECRRepository,
  ECRRepositoryCreationTemplate,
} from './ecr/index.js'
import type {
  ECSCapacityProvider,
  ECSCluster,
  ECSClusterCapacityProviderAssociations,
  ECSPrimaryTaskSet,
  ECSService,
  ECSTaskDefinition,
  ECSTaskSet,
} from './ecs/index.js'
import type { EFSAccessPoint, EFSFileSystem, EFSMountTarget } from './efs/index.js'
import type {
  EKSAccessEntry,
  EKSAddon,
  EKSCluster,
  EKSFargateProfile,
  EKSIdentityProviderConfig,
  EKSNodegroup,
  EKSPodIdentityAssociation,
} from './eks/index.js'
import type {
  ElastiCacheCacheCluster,
  ElastiCacheGlobalReplicationGroup,
  ElastiCacheParameterGroup,
  ElastiCacheReplicationGroup,
  ElastiCacheSecurityGroup,
  ElastiCacheSecurityGroupIngress,
  ElastiCacheServerlessCache,
  ElastiCacheSubnetGroup,
  ElastiCacheUser,
  ElastiCacheUserGroup,
} from './elasticache/index.js'
import type {
  ElasticBeanstalkApplication,
  ElasticBeanstalkApplicationVersion,
  ElasticBeanstalkConfigurationTemplate,
  ElasticBeanstalkEnvironment,
} from './elasticbeanstalk/index.js'
import type { ElasticLoadBalancingLoadBalancer } from './elasticloadbalancing/index.js'
import type {
  ElasticLoadBalancingV2Listener,
  ElasticLoadBalancingV2ListenerCertificate,
  ElasticLoadBalancingV2ListenerRule,
  ElasticLoadBalancingV2LoadBalancer,
  ElasticLoadBalancingV2TargetGroup,
  ElasticLoadBalancingV2TrustStore,
  ElasticLoadBalancingV2TrustStoreRevocation,
} from './elasticloadbalancingv2/index.js'
import type { ElasticsearchDomain } from './elasticsearch/index.js'
import type {
  EMRCluster,
  EMRInstanceFleetConfig,
  EMRInstanceGroupConfig,
  EMRSecurityConfiguration,
  EMRStep,
  EMRStudio,
  EMRStudioSessionMapping,
  EMRWALWorkspace,
} from './emr/index.js'
import type { EMRContainersVirtualCluster } from './emrcontainers/index.js'
import type { EMRServerlessApplication } from './emrserverless/index.js'
import type {
  EntityResolutionIdMappingWorkflow,
  EntityResolutionIdNamespace,
  EntityResolutionMatchingWorkflow,
  EntityResolutionPolicyStatement,
  EntityResolutionSchemaMapping,
} from './entityresolution/index.js'
import type {
  EventsApiDestination,
  EventsArchive,
  EventsConnection,
  EventsEndpoint,
  EventsEventBus,
  EventsEventBusPolicy,
  EventsRule,
} from './events/index.js'
import type {
  EventSchemasDiscoverer,
  EventSchemasRegistry,
  EventSchemasRegistryPolicy,
  EventSchemasSchema,
} from './eventschemas/index.js'
import type {
  EvidentlyExperiment,
  EvidentlyFeature,
  EvidentlyLaunch,
  EvidentlyProject,
  EvidentlySegment,
} from './evidently/index.js'
import type { FinSpaceEnvironment } from './finspace/index.js'
import type { FISExperimentTemplate, FISTargetAccountConfiguration } from './fis/index.js'
import type { FMSNotificationChannel, FMSPolicy, FMSResourceSet } from './fms/index.js'
import type { ForecastDataset, ForecastDatasetGroup } from './forecast/index.js'
import type {
  FraudDetectorDetector,
  FraudDetectorEntityType,
  FraudDetectorEventType,
  FraudDetectorLabel,
  FraudDetectorList,
  FraudDetectorOutcome,
  FraudDetectorVariable,
} from './frauddetector/index.js'
import type {
  FSxDataRepositoryAssociation,
  FSxFileSystem,
  FSxSnapshot,
  FSxStorageVirtualMachine,
  FSxVolume,
} from './fsx/index.js'
import type {
  GameLiftAlias,
  GameLiftBuild,
  GameLiftContainerGroupDefinition,
  GameLiftFleet,
  GameLiftGameServerGroup,
  GameLiftGameSessionQueue,
  GameLiftLocation,
  GameLiftMatchmakingConfiguration,
  GameLiftMatchmakingRuleSet,
  GameLiftScript,
} from './gamelift/index.js'
import type {
  GlobalAcceleratorAccelerator,
  GlobalAcceleratorCrossAccountAttachment,
  GlobalAcceleratorEndpointGroup,
  GlobalAcceleratorListener,
} from './globalaccelerator/index.js'
import type {
  GlueClassifier,
  GlueConnection,
  GlueCrawler,
  GlueCustomEntityType,
  GlueDatabase,
  GlueDataCatalogEncryptionSettings,
  GlueDataQualityRuleset,
  GlueDevEndpoint,
  GlueJob,
  GlueMLTransform,
  GluePartition,
  GlueRegistry,
  GlueSchema,
  GlueSchemaVersion,
  GlueSchemaVersionMetadata,
  GlueSecurityConfiguration,
  GlueTable,
  GlueTableOptimizer,
  GlueTrigger,
  GlueWorkflow,
} from './glue/index.js'
import type { GrafanaWorkspace } from './grafana/index.js'
import type {
  GreengrassConnectorDefinition,
  GreengrassConnectorDefinitionVersion,
  GreengrassCoreDefinition,
  GreengrassCoreDefinitionVersion,
  GreengrassDeviceDefinition,
  GreengrassDeviceDefinitionVersion,
  GreengrassFunctionDefinition,
  GreengrassFunctionDefinitionVersion,
  GreengrassGroup,
  GreengrassGroupVersion,
  GreengrassLoggerDefinition,
  GreengrassLoggerDefinitionVersion,
  GreengrassResourceDefinition,
  GreengrassResourceDefinitionVersion,
  GreengrassSubscriptionDefinition,
  GreengrassSubscriptionDefinitionVersion,
} from './greengrass/index.js'
import type { GreengrassV2ComponentVersion, GreengrassV2Deployment } from './greengrassv2/index.js'
import type {
  GroundStationConfig,
  GroundStationDataflowEndpointGroup,
  GroundStationMissionProfile,
} from './groundstation/index.js'
import type {
  GuardDutyDetector,
  GuardDutyFilter,
  GuardDutyIPSet,
  GuardDutyMalwareProtectionPlan,
  GuardDutyMaster,
  GuardDutyMember,
  GuardDutyThreatIntelSet,
} from './guardduty/index.js'
import type { HealthImagingDatastore } from './healthimaging/index.js'
import type { HealthLakeFHIRDatastore } from './healthlake/index.js'
import type {
  IAMAccessKey,
  IAMGroup,
  IAMGroupPolicy,
  IAMInstanceProfile,
  IAMManagedPolicy,
  IAMOIDCProvider,
  IAMPolicy,
  IAMRole,
  IAMRolePolicy,
  IAMSAMLProvider,
  IAMServerCertificate,
  IAMServiceLinkedRole,
  IAMUser,
  IAMUserPolicy,
  IAMUserToGroupAddition,
  IAMVirtualMFADevice,
} from './iam/index.js'
import type { IdentityStoreGroup, IdentityStoreGroupMembership } from './identitystore/index.js'
import type {
  ImageBuilderComponent,
  ImageBuilderContainerRecipe,
  ImageBuilderDistributionConfiguration,
  ImageBuilderImage,
  ImageBuilderImagePipeline,
  ImageBuilderImageRecipe,
  ImageBuilderInfrastructureConfiguration,
  ImageBuilderLifecyclePolicy,
  ImageBuilderWorkflow,
} from './imagebuilder/index.js'
import type {
  InspectorAssessmentTarget,
  InspectorAssessmentTemplate,
  InspectorResourceGroup,
} from './inspector/index.js'
import type { InspectorV2CisScanConfiguration, InspectorV2Filter } from './inspectorv2/index.js'
import type { InternetMonitorMonitor } from './internetmonitor/index.js'
import type {
  IoTAccountAuditConfiguration,
  IoTAuthorizer,
  IoTBillingGroup,
  IoTCACertificate,
  IoTCertificate,
  IoTCertificateProvider,
  IoTCustomMetric,
  IoTDimension,
  IoTDomainConfiguration,
  IoTFleetMetric,
  IoTJobTemplate,
  IoTLogging,
  IoTMitigationAction,
  IoTPolicy,
  IoTPolicyPrincipalAttachment,
  IoTProvisioningTemplate,
  IoTResourceSpecificLogging,
  IoTRoleAlias,
  IoTScheduledAudit,
  IoTSecurityProfile,
  IoTSoftwarePackage,
  IoTSoftwarePackageVersion,
  IoTThing,
  IoTThingGroup,
  IoTThingPrincipalAttachment,
  IoTThingType,
  IoTTopicRule,
  IoTTopicRuleDestination,
} from './iot/index.js'
import type { IoT1ClickDevice, IoT1ClickPlacement, IoT1ClickProject } from './iot1click/index.js'
import type {
  IoTAnalyticsChannel,
  IoTAnalyticsDataset,
  IoTAnalyticsDatastore,
  IoTAnalyticsPipeline,
} from './iotanalytics/index.js'
import type { IoTCoreDeviceAdvisorSuiteDefinition } from './iotcoredeviceadvisor/index.js'
import type { IoTEventsAlarmModel, IoTEventsDetectorModel, IoTEventsInput } from './iotevents/index.js'
import type { IoTFleetHubApplication } from './iotfleethub/index.js'
import type {
  IoTFleetWiseCampaign,
  IoTFleetWiseDecoderManifest,
  IoTFleetWiseFleet,
  IoTFleetWiseModelManifest,
  IoTFleetWiseSignalCatalog,
  IoTFleetWiseVehicle,
} from './iotfleetwise/index.js'
import type {
  IoTSiteWiseAccessPolicy,
  IoTSiteWiseAsset,
  IoTSiteWiseAssetModel,
  IoTSiteWiseDashboard,
  IoTSiteWiseGateway,
  IoTSiteWisePortal,
  IoTSiteWiseProject,
} from './iotsitewise/index.js'
import type {
  IoTTwinMakerComponentType,
  IoTTwinMakerEntity,
  IoTTwinMakerScene,
  IoTTwinMakerSyncJob,
  IoTTwinMakerWorkspace,
} from './iottwinmaker/index.js'
import type {
  IoTWirelessDestination,
  IoTWirelessDeviceProfile,
  IoTWirelessFuotaTask,
  IoTWirelessMulticastGroup,
  IoTWirelessNetworkAnalyzerConfiguration,
  IoTWirelessPartnerAccount,
  IoTWirelessServiceProfile,
  IoTWirelessTaskDefinition,
  IoTWirelessWirelessDevice,
  IoTWirelessWirelessDeviceImportTask,
  IoTWirelessWirelessGateway,
} from './iotwireless/index.js'
import type {
  IVSChannel,
  IVSEncoderConfiguration,
  IVSPlaybackKeyPair,
  IVSPlaybackRestrictionPolicy,
  IVSPublicKey,
  IVSRecordingConfiguration,
  IVSStage,
  IVSStorageConfiguration,
  IVSStreamKey,
} from './ivs/index.js'
import type { IVSChatLoggingConfiguration, IVSChatRoom } from './ivschat/index.js'
import type {
  KafkaConnectConnector,
  KafkaConnectCustomPlugin,
  KafkaConnectWorkerConfiguration,
} from './kafkaconnect/index.js'
import type { KendraDataSource, KendraFaq, KendraIndex } from './kendra/index.js'
import type { KendraRankingExecutionPlan } from './kendraranking/index.js'
import type { KinesisStream, KinesisStreamConsumer } from './kinesis/index.js'
import type {
  KinesisAnalyticsApplication,
  KinesisAnalyticsApplicationOutput,
  KinesisAnalyticsApplicationReferenceDataSource,
} from './kinesisanalytics/index.js'
import type {
  KinesisAnalyticsV2Application,
  KinesisAnalyticsV2ApplicationCloudWatchLoggingOption,
  KinesisAnalyticsV2ApplicationOutput,
  KinesisAnalyticsV2ApplicationReferenceDataSource,
} from './kinesisanalyticsv2/index.js'
import type { KinesisFirehoseDeliveryStream } from './kinesisfirehose/index.js'
import type { KinesisVideoSignalingChannel, KinesisVideoStream } from './kinesisvideo/index.js'
import type { KMSAlias, KMSKey, KMSReplicaKey } from './kms/index.js'
import type {
  LakeFormationDataCellsFilter,
  LakeFormationDataLakeSettings,
  LakeFormationPermissions,
  LakeFormationPrincipalPermissions,
  LakeFormationResource,
  LakeFormationTag,
  LakeFormationTagAssociation,
} from './lakeformation/index.js'
import type {
  LambdaAlias,
  LambdaCodeSigningConfig,
  LambdaEventInvokeConfig,
  LambdaEventSourceMapping,
  LambdaFunction,
  LambdaLayerVersion,
  LambdaLayerVersionPermission,
  LambdaPermission,
  LambdaUrl,
  LambdaVersion,
} from './lambda/index.js'
import type { LaunchWizardDeployment } from './launchwizard/index.js'
import type { LexBot, LexBotAlias, LexBotVersion, LexResourcePolicy } from './lex/index.js'
import type { LicenseManagerGrant, LicenseManagerLicense } from './licensemanager/index.js'
import type {
  LightsailAlarm,
  LightsailBucket,
  LightsailCertificate,
  LightsailContainer,
  LightsailDatabase,
  LightsailDisk,
  LightsailDistribution,
  LightsailInstance,
  LightsailLoadBalancer,
  LightsailLoadBalancerTlsCertificate,
  LightsailStaticIp,
} from './lightsail/index.js'
import type {
  LocationAPIKey,
  LocationGeofenceCollection,
  LocationMap,
  LocationPlaceIndex,
  LocationRouteCalculator,
  LocationTracker,
  LocationTrackerConsumer,
} from './location/index.js'
import type {
  LogsAccountPolicy,
  LogsDelivery,
  LogsDeliveryDestination,
  LogsDeliverySource,
  LogsDestination,
  LogsLogAnomalyDetector,
  LogsLogGroup,
  LogsLogStream,
  LogsMetricFilter,
  LogsQueryDefinition,
  LogsResourcePolicy,
  LogsSubscriptionFilter,
} from './logs/index.js'
import type { LookoutEquipmentInferenceScheduler } from './lookoutequipment/index.js'
import type { LookoutMetricsAlert, LookoutMetricsAnomalyDetector } from './lookoutmetrics/index.js'
import type { LookoutVisionProject } from './lookoutvision/index.js'
import type { M2Application, M2Environment } from './m2/index.js'
import type { MacieAllowList, MacieCustomDataIdentifier, MacieFindingsFilter, MacieSession } from './macie/index.js'
import type {
  ManagedBlockchainAccessor,
  ManagedBlockchainMember,
  ManagedBlockchainNode,
} from './managedblockchain/index.js'
import type {
  MediaConnectBridge,
  MediaConnectBridgeOutput,
  MediaConnectBridgeSource,
  MediaConnectFlow,
  MediaConnectFlowEntitlement,
  MediaConnectFlowOutput,
  MediaConnectFlowSource,
  MediaConnectFlowVpcInterface,
  MediaConnectGateway,
} from './mediaconnect/index.js'
import type { MediaConvertJobTemplate, MediaConvertPreset, MediaConvertQueue } from './mediaconvert/index.js'
import type {
  MediaLiveChannel,
  MediaLiveChannelPlacementGroup,
  MediaLiveCloudWatchAlarmTemplate,
  MediaLiveCloudWatchAlarmTemplateGroup,
  MediaLiveCluster,
  MediaLiveEventBridgeRuleTemplate,
  MediaLiveEventBridgeRuleTemplateGroup,
  MediaLiveInput,
  MediaLiveInputSecurityGroup,
  MediaLiveMultiplex,
  MediaLiveMultiplexprogram,
  MediaLiveNetwork,
  MediaLiveSdiSource,
  MediaLiveSignalMap,
} from './medialive/index.js'
import type {
  MediaPackageAsset,
  MediaPackageChannel,
  MediaPackageOriginEndpoint,
  MediaPackagePackagingConfiguration,
  MediaPackagePackagingGroup,
} from './mediapackage/index.js'
import type {
  MediaPackageV2Channel,
  MediaPackageV2ChannelGroup,
  MediaPackageV2ChannelPolicy,
  MediaPackageV2OriginEndpoint,
  MediaPackageV2OriginEndpointPolicy,
} from './mediapackagev2/index.js'
import type { MediaStoreContainer } from './mediastore/index.js'
import type {
  MediaTailorChannel,
  MediaTailorChannelPolicy,
  MediaTailorLiveSource,
  MediaTailorPlaybackConfiguration,
  MediaTailorSourceLocation,
  MediaTailorVodSource,
} from './mediatailor/index.js'
import type {
  MemoryDBACL,
  MemoryDBCluster,
  MemoryDBParameterGroup,
  MemoryDBSubnetGroup,
  MemoryDBUser,
} from './memorydb/index.js'
import type {
  MSKBatchScramSecret,
  MSKCluster,
  MSKClusterPolicy,
  MSKConfiguration,
  MSKReplicator,
  MSKServerlessCluster,
  MSKVpcConnection,
} from './msk/index.js'
import type { MWAAEnvironment } from './mwaa/index.js'
import type {
  NeptuneDBCluster,
  NeptuneDBClusterParameterGroup,
  NeptuneDBInstance,
  NeptuneDBParameterGroup,
  NeptuneDBSubnetGroup,
  NeptuneEventSubscription,
} from './neptune/index.js'
import type { NeptuneGraphGraph, NeptuneGraphPrivateGraphEndpoint } from './neptunegraph/index.js'
import type {
  NetworkFirewallFirewall,
  NetworkFirewallFirewallPolicy,
  NetworkFirewallLoggingConfiguration,
  NetworkFirewallRuleGroup,
  NetworkFirewallTLSInspectionConfiguration,
} from './networkfirewall/index.js'
import type {
  NetworkManagerConnectAttachment,
  NetworkManagerConnectPeer,
  NetworkManagerCoreNetwork,
  NetworkManagerCustomerGatewayAssociation,
  NetworkManagerDevice,
  NetworkManagerGlobalNetwork,
  NetworkManagerLink,
  NetworkManagerLinkAssociation,
  NetworkManagerSite,
  NetworkManagerSiteToSiteVpnAttachment,
  NetworkManagerTransitGatewayPeering,
  NetworkManagerTransitGatewayRegistration,
  NetworkManagerTransitGatewayRouteTableAttachment,
  NetworkManagerVpcAttachment,
} from './networkmanager/index.js'
import type {
  NimbleStudioLaunchProfile,
  NimbleStudioStreamingImage,
  NimbleStudioStudio,
  NimbleStudioStudioComponent,
} from './nimblestudio/index.js'
import type { OamLink, OamSink } from './oam/index.js'
import type {
  OmicsAnnotationStore,
  OmicsReferenceStore,
  OmicsRunGroup,
  OmicsSequenceStore,
  OmicsVariantStore,
  OmicsWorkflow,
} from './omics/index.js'
import type {
  OpenSearchServerlessAccessPolicy,
  OpenSearchServerlessCollection,
  OpenSearchServerlessLifecyclePolicy,
  OpenSearchServerlessSecurityConfig,
  OpenSearchServerlessSecurityPolicy,
  OpenSearchServerlessVpcEndpoint,
} from './opensearchserverless/index.js'
import type { OpenSearchServiceDomain } from './opensearchservice/index.js'
import type {
  OpsWorksApp,
  OpsWorksElasticLoadBalancerAttachment,
  OpsWorksInstance,
  OpsWorksLayer,
  OpsWorksStack,
  OpsWorksUserProfile,
  OpsWorksVolume,
} from './opsworks/index.js'
import type { OpsWorksCMServer } from './opsworkscm/index.js'
import type {
  OrganizationsAccount,
  OrganizationsOrganization,
  OrganizationsOrganizationalUnit,
  OrganizationsPolicy,
  OrganizationsResourcePolicy,
} from './organizations/index.js'
import type { OSISPipeline } from './osis/index.js'
import type { PanoramaApplicationInstance, PanoramaPackage, PanoramaPackageVersion } from './panorama/index.js'
import type { PaymentCryptographyAlias, PaymentCryptographyKey } from './paymentcryptography/index.js'
import type {
  PCAConnectorADConnector,
  PCAConnectorADDirectoryRegistration,
  PCAConnectorADServicePrincipalName,
  PCAConnectorADTemplate,
  PCAConnectorADTemplateGroupAccessControlEntry,
} from './pcaconnectorad/index.js'
import type { PCAConnectorSCEPChallenge, PCAConnectorSCEPConnector } from './pcaconnectorscep/index.js'
import type {
  PersonalizeDataset,
  PersonalizeDatasetGroup,
  PersonalizeSchema,
  PersonalizeSolution,
} from './personalize/index.js'
import type {
  PinpointADMChannel,
  PinpointAPNSChannel,
  PinpointAPNSSandboxChannel,
  PinpointAPNSVoipChannel,
  PinpointAPNSVoipSandboxChannel,
  PinpointApp,
  PinpointApplicationSettings,
  PinpointBaiduChannel,
  PinpointCampaign,
  PinpointEmailChannel,
  PinpointEmailTemplate,
  PinpointEventStream,
  PinpointGCMChannel,
  PinpointInAppTemplate,
  PinpointPushTemplate,
  PinpointSegment,
  PinpointSMSChannel,
  PinpointSmsTemplate,
  PinpointVoiceChannel,
} from './pinpoint/index.js'
import type {
  PinpointEmailConfigurationSet,
  PinpointEmailConfigurationSetEventDestination,
  PinpointEmailDedicatedIpPool,
  PinpointEmailIdentity,
} from './pinpointemail/index.js'
import type { PipesPipe } from './pipes/index.js'
import type {
  ProtonEnvironmentAccountConnection,
  ProtonEnvironmentTemplate,
  ProtonServiceTemplate,
} from './proton/index.js'
import type {
  QBusinessApplication,
  QBusinessDataSource,
  QBusinessIndex,
  QBusinessPlugin,
  QBusinessRetriever,
  QBusinessWebExperience,
} from './qbusiness/index.js'
import type { QLDBLedger, QLDBStream } from './qldb/index.js'
import type {
  QuickSightAnalysis,
  QuickSightDashboard,
  QuickSightDataSet,
  QuickSightDataSource,
  QuickSightRefreshSchedule,
  QuickSightTemplate,
  QuickSightTheme,
  QuickSightTopic,
  QuickSightVPCConnection,
} from './quicksight/index.js'
import type { RAMPermission, RAMResourceShare } from './ram/index.js'
import type {
  RDSCustomDBEngineVersion,
  RDSDBCluster,
  RDSDBClusterParameterGroup,
  RDSDBInstance,
  RDSDBParameterGroup,
  RDSDBProxy,
  RDSDBProxyEndpoint,
  RDSDBProxyTargetGroup,
  RDSDBSecurityGroup,
  RDSDBSecurityGroupIngress,
  RDSDBSubnetGroup,
  RDSEventSubscription,
  RDSGlobalCluster,
  RDSIntegration,
  RDSOptionGroup,
} from './rds/index.js'
import type {
  RedshiftCluster,
  RedshiftClusterParameterGroup,
  RedshiftClusterSecurityGroup,
  RedshiftClusterSecurityGroupIngress,
  RedshiftClusterSubnetGroup,
  RedshiftEndpointAccess,
  RedshiftEndpointAuthorization,
  RedshiftEventSubscription,
  RedshiftScheduledAction,
} from './redshift/index.js'
import type { RedshiftServerlessNamespace, RedshiftServerlessWorkgroup } from './redshiftserverless/index.js'
import type {
  RefactorSpacesApplication,
  RefactorSpacesEnvironment,
  RefactorSpacesRoute,
  RefactorSpacesService,
} from './refactorspaces/index.js'
import type { RekognitionCollection, RekognitionProject, RekognitionStreamProcessor } from './rekognition/index.js'
import type { ResilienceHubApp, ResilienceHubResiliencyPolicy } from './resiliencehub/index.js'
import type {
  ResourceExplorer2DefaultViewAssociation,
  ResourceExplorer2Index,
  ResourceExplorer2View,
} from './resourceexplorer2/index.js'
import type { ResourceGroupsGroup } from './resourcegroups/index.js'
import type {
  RoboMakerFleet,
  RoboMakerRobot,
  RoboMakerRobotApplication,
  RoboMakerRobotApplicationVersion,
  RoboMakerSimulationApplication,
  RoboMakerSimulationApplicationVersion,
} from './robomaker/index.js'
import type { RolesAnywhereCRL, RolesAnywhereProfile, RolesAnywhereTrustAnchor } from './rolesanywhere/index.js'
import type {
  Route53CidrCollection,
  Route53DNSSEC,
  Route53HealthCheck,
  Route53HostedZone,
  Route53KeySigningKey,
  Route53RecordSet,
  Route53RecordSetGroup,
} from './route53/index.js'
import type {
  Route53ProfilesProfile,
  Route53ProfilesProfileAssociation,
  Route53ProfilesProfileResourceAssociation,
} from './route53profiles/index.js'
import type {
  Route53RecoveryControlCluster,
  Route53RecoveryControlControlPanel,
  Route53RecoveryControlRoutingControl,
  Route53RecoveryControlSafetyRule,
} from './route53recoverycontrol/index.js'
import type {
  Route53RecoveryReadinessCell,
  Route53RecoveryReadinessReadinessCheck,
  Route53RecoveryReadinessRecoveryGroup,
  Route53RecoveryReadinessResourceSet,
} from './route53recoveryreadiness/index.js'
import type {
  Route53ResolverFirewallDomainList,
  Route53ResolverFirewallRuleGroup,
  Route53ResolverFirewallRuleGroupAssociation,
  Route53ResolverOutpostResolver,
  Route53ResolverResolverConfig,
  Route53ResolverResolverDNSSECConfig,
  Route53ResolverResolverEndpoint,
  Route53ResolverResolverQueryLoggingConfig,
  Route53ResolverResolverQueryLoggingConfigAssociation,
  Route53ResolverResolverRule,
  Route53ResolverResolverRuleAssociation,
} from './route53resolver/index.js'
import type { RUMAppMonitor } from './rum/index.js'
import type {
  S3AccessGrant,
  S3AccessGrantsInstance,
  S3AccessGrantsLocation,
  S3AccessPoint,
  S3Bucket,
  S3BucketPolicy,
  S3MultiRegionAccessPoint,
  S3MultiRegionAccessPointPolicy,
  S3StorageLens,
  S3StorageLensGroup,
} from './s3/index.js'
import type { S3ExpressBucketPolicy, S3ExpressDirectoryBucket } from './s3express/index.js'
import type { S3ObjectLambdaAccessPoint, S3ObjectLambdaAccessPointPolicy } from './s3objectlambda/index.js'
import type {
  S3OutpostsAccessPoint,
  S3OutpostsBucket,
  S3OutpostsBucketPolicy,
  S3OutpostsEndpoint,
} from './s3outposts/index.js'
import type {
  SageMakerApp,
  SageMakerAppImageConfig,
  SageMakerCluster,
  SageMakerCodeRepository,
  SageMakerDataQualityJobDefinition,
  SageMakerDevice,
  SageMakerDeviceFleet,
  SageMakerDomain,
  SageMakerEndpoint,
  SageMakerEndpointConfig,
  SageMakerFeatureGroup,
  SageMakerImage,
  SageMakerImageVersion,
  SageMakerInferenceComponent,
  SageMakerInferenceExperiment,
  SageMakerMlflowTrackingServer,
  SageMakerModel,
  SageMakerModelBiasJobDefinition,
  SageMakerModelCard,
  SageMakerModelExplainabilityJobDefinition,
  SageMakerModelPackage,
  SageMakerModelPackageGroup,
  SageMakerModelQualityJobDefinition,
  SageMakerMonitoringSchedule,
  SageMakerNotebookInstance,
  SageMakerNotebookInstanceLifecycleConfig,
  SageMakerPipeline,
  SageMakerProject,
  SageMakerSpace,
  SageMakerStudioLifecycleConfig,
  SageMakerUserProfile,
  SageMakerWorkteam,
} from './sagemaker/index.js'
import type { SchedulerSchedule, SchedulerScheduleGroup } from './scheduler/index.js'
import type { SDBDomain } from './sdb/index.js'
import type {
  SecretsManagerResourcePolicy,
  SecretsManagerRotationSchedule,
  SecretsManagerSecret,
  SecretsManagerSecretTargetAttachment,
} from './secretsmanager/index.js'
import type {
  SecurityHubAutomationRule,
  SecurityHubConfigurationPolicy,
  SecurityHubDelegatedAdmin,
  SecurityHubFindingAggregator,
  SecurityHubHub,
  SecurityHubInsight,
  SecurityHubOrganizationConfiguration,
  SecurityHubPolicyAssociation,
  SecurityHubProductSubscription,
  SecurityHubSecurityControl,
  SecurityHubStandard,
} from './securityhub/index.js'
import type {
  SecurityLakeAwsLogSource,
  SecurityLakeDataLake,
  SecurityLakeSubscriber,
  SecurityLakeSubscriberNotification,
} from './securitylake/index.js'
import type {
  ServiceCatalogAcceptedPortfolioShare,
  ServiceCatalogCloudFormationProduct,
  ServiceCatalogCloudFormationProvisionedProduct,
  ServiceCatalogLaunchNotificationConstraint,
  ServiceCatalogLaunchRoleConstraint,
  ServiceCatalogLaunchTemplateConstraint,
  ServiceCatalogPortfolio,
  ServiceCatalogPortfolioPrincipalAssociation,
  ServiceCatalogPortfolioProductAssociation,
  ServiceCatalogPortfolioShare,
  ServiceCatalogResourceUpdateConstraint,
  ServiceCatalogServiceAction,
  ServiceCatalogServiceActionAssociation,
  ServiceCatalogStackSetConstraint,
  ServiceCatalogTagOption,
  ServiceCatalogTagOptionAssociation,
} from './servicecatalog/index.js'
import type {
  ServiceCatalogAppRegistryApplication,
  ServiceCatalogAppRegistryAttributeGroup,
  ServiceCatalogAppRegistryAttributeGroupAssociation,
  ServiceCatalogAppRegistryResourceAssociation,
} from './servicecatalogappregistry/index.js'
import type {
  ServiceDiscoveryHttpNamespace,
  ServiceDiscoveryInstance,
  ServiceDiscoveryPrivateDnsNamespace,
  ServiceDiscoveryPublicDnsNamespace,
  ServiceDiscoveryService,
} from './servicediscovery/index.js'
import type {
  SESConfigurationSet,
  SESConfigurationSetEventDestination,
  SESContactList,
  SESDedicatedIpPool,
  SESEmailIdentity,
  SESMailManagerAddonInstance,
  SESMailManagerAddonSubscription,
  SESMailManagerArchive,
  SESMailManagerIngressPoint,
  SESMailManagerRelay,
  SESMailManagerRuleSet,
  SESMailManagerTrafficPolicy,
  SESReceiptFilter,
  SESReceiptRule,
  SESReceiptRuleSet,
  SESTemplate,
  SESVdmAttributes,
} from './ses/index.js'
import type {
  ShieldDRTAccess,
  ShieldProactiveEngagement,
  ShieldProtection,
  ShieldProtectionGroup,
} from './shield/index.js'
import type { SignerProfilePermission, SignerSigningProfile } from './signer/index.js'
import type { SimSpaceWeaverSimulation } from './simspaceweaver/index.js'
import type { SNSSubscription, SNSTopic, SNSTopicInlinePolicy, SNSTopicPolicy } from './sns/index.js'
import type { SQSQueue, SQSQueueInlinePolicy, SQSQueuePolicy } from './sqs/index.js'
import type {
  SSMAssociation,
  SSMDocument,
  SSMMaintenanceWindow,
  SSMMaintenanceWindowTarget,
  SSMMaintenanceWindowTask,
  SSMParameter,
  SSMPatchBaseline,
  SSMResourceDataSync,
  SSMResourcePolicy,
} from './ssm/index.js'
import type {
  SSMContactsContact,
  SSMContactsContactChannel,
  SSMContactsPlan,
  SSMContactsRotation,
} from './ssmcontacts/index.js'
import type { SSMIncidentsReplicationSet, SSMIncidentsResponsePlan } from './ssmincidents/index.js'
import type { SSMQuickSetupConfigurationManager } from './ssmquicksetup/index.js'
import type {
  SSOApplication,
  SSOApplicationAssignment,
  SSOAssignment,
  SSOInstance,
  SSOInstanceAccessControlAttributeConfiguration,
  SSOPermissionSet,
} from './sso/index.js'
import type {
  StepFunctionsActivity,
  StepFunctionsStateMachine,
  StepFunctionsStateMachineAlias,
  StepFunctionsStateMachineVersion,
} from './stepfunctions/index.js'
import type {
  SupportAppAccountAlias,
  SupportAppSlackChannelConfiguration,
  SupportAppSlackWorkspaceConfiguration,
} from './supportapp/index.js'
import type { SyntheticsCanary, SyntheticsGroup } from './synthetics/index.js'
import type { SystemsManagerSAPApplication } from './systemsmanagersap/index.js'
import type {
  TimestreamDatabase,
  TimestreamInfluxDBInstance,
  TimestreamScheduledQuery,
  TimestreamTable,
} from './timestream/index.js'
import type {
  TransferAgreement,
  TransferCertificate,
  TransferConnector,
  TransferProfile,
  TransferServer,
  TransferUser,
  TransferWorkflow,
} from './transfer/index.js'
import type {
  VerifiedPermissionsIdentitySource,
  VerifiedPermissionsPolicy,
  VerifiedPermissionsPolicyStore,
  VerifiedPermissionsPolicyTemplate,
} from './verifiedpermissions/index.js'
import type { VoiceIDDomain } from './voiceid/index.js'
import type {
  VpcLatticeAccessLogSubscription,
  VpcLatticeAuthPolicy,
  VpcLatticeListener,
  VpcLatticeResourcePolicy,
  VpcLatticeRule,
  VpcLatticeService,
  VpcLatticeServiceNetwork,
  VpcLatticeServiceNetworkServiceAssociation,
  VpcLatticeServiceNetworkVpcAssociation,
  VpcLatticeTargetGroup,
} from './vpclattice/index.js'
import type {
  WAFByteMatchSet,
  WAFIPSet,
  WAFRule,
  WAFSizeConstraintSet,
  WAFSqlInjectionMatchSet,
  WAFWebACL,
  WAFXssMatchSet,
} from './waf/index.js'
import type {
  WAFRegionalByteMatchSet,
  WAFRegionalGeoMatchSet,
  WAFRegionalIPSet,
  WAFRegionalRateBasedRule,
  WAFRegionalRegexPatternSet,
  WAFRegionalRule,
  WAFRegionalSizeConstraintSet,
  WAFRegionalSqlInjectionMatchSet,
  WAFRegionalWebACL,
  WAFRegionalWebACLAssociation,
  WAFRegionalXssMatchSet,
} from './wafregional/index.js'
import type {
  WAFv2IPSet,
  WAFv2LoggingConfiguration,
  WAFv2RegexPatternSet,
  WAFv2RuleGroup,
  WAFv2WebACL,
  WAFv2WebACLAssociation,
} from './wafv2/index.js'
import type { WisdomAssistant, WisdomAssistantAssociation, WisdomKnowledgeBase } from './wisdom/index.js'
import type { WorkSpacesConnectionAlias, WorkSpacesWorkspace, WorkSpacesWorkspacesPool } from './workspaces/index.js'
import type { WorkSpacesThinClientEnvironment } from './workspacesthinclient/index.js'
import type {
  WorkSpacesWebBrowserSettings,
  WorkSpacesWebIdentityProvider,
  WorkSpacesWebIpAccessSettings,
  WorkSpacesWebNetworkSettings,
  WorkSpacesWebPortal,
  WorkSpacesWebTrustStore,
  WorkSpacesWebUserAccessLoggingSettings,
  WorkSpacesWebUserSettings,
} from './workspacesweb/index.js'
import type { XRayGroup, XRayResourcePolicy, XRaySamplingRule } from './xray/index.js'
export type * as accessanalyzer from './accessanalyzer/index.js'
export type * as acmpca from './acmpca/index.js'
export type * as amazonmq from './amazonmq/index.js'
export type * as amplify from './amplify/index.js'
export type * as amplifyuibuilder from './amplifyuibuilder/index.js'
export type * as apigateway from './apigateway/index.js'
export type * as apigatewayv2 from './apigatewayv2/index.js'
export type * as appconfig from './appconfig/index.js'
export type * as appflow from './appflow/index.js'
export type * as appintegrations from './appintegrations/index.js'
export type * as applicationautoscaling from './applicationautoscaling/index.js'
export type * as applicationinsights from './applicationinsights/index.js'
export type * as applicationsignals from './applicationsignals/index.js'
export type * as appmesh from './appmesh/index.js'
export type * as apprunner from './apprunner/index.js'
export type * as appstream from './appstream/index.js'
export type * as appsync from './appsync/index.js'
export type * as apptest from './apptest/index.js'
export type * as aps from './aps/index.js'
export type * as arczonalshift from './arczonalshift/index.js'
export type * as athena from './athena/index.js'
export type * as auditmanager from './auditmanager/index.js'
export type * as autoscaling from './autoscaling/index.js'
export type * as autoscalingplans from './autoscalingplans/index.js'
export type * as b2bi from './b2bi/index.js'
export type * as backup from './backup/index.js'
export type * as backupgateway from './backupgateway/index.js'
export type * as batch from './batch/index.js'
export type * as bcmdataexports from './bcmdataexports/index.js'
export type * as bedrock from './bedrock/index.js'
export type * as billingconductor from './billingconductor/index.js'
export type * as budgets from './budgets/index.js'
export type * as cassandra from './cassandra/index.js'
export type * as ce from './ce/index.js'
export type * as certificatemanager from './certificatemanager/index.js'
export type * as chatbot from './chatbot/index.js'
export type * as cleanrooms from './cleanrooms/index.js'
export type * as cleanroomsml from './cleanroomsml/index.js'
export type * as cloud9 from './cloud9/index.js'
export type * as cloudformation from './cloudformation/index.js'
export type * as cloudfront from './cloudfront/index.js'
export type * as cloudtrail from './cloudtrail/index.js'
export type * as cloudwatch from './cloudwatch/index.js'
export type * as codeartifact from './codeartifact/index.js'
export type * as codebuild from './codebuild/index.js'
export type * as codecommit from './codecommit/index.js'
export type * as codeconnections from './codeconnections/index.js'
export type * as codedeploy from './codedeploy/index.js'
export type * as codeguruprofiler from './codeguruprofiler/index.js'
export type * as codegurureviewer from './codegurureviewer/index.js'
export type * as codepipeline from './codepipeline/index.js'
export type * as codestar from './codestar/index.js'
export type * as codestarconnections from './codestarconnections/index.js'
export type * as codestarnotifications from './codestarnotifications/index.js'
export type * as cognito from './cognito/index.js'
export type * as comprehend from './comprehend/index.js'
export type * as config from './config/index.js'
export type * as connect from './connect/index.js'
export type * as connectcampaigns from './connectcampaigns/index.js'
export type * as controltower from './controltower/index.js'
export type * as cur from './cur/index.js'
export type * as customerprofiles from './customerprofiles/index.js'
export type * as databrew from './databrew/index.js'
export type * as datapipeline from './datapipeline/index.js'
export type * as datasync from './datasync/index.js'
export type * as datazone from './datazone/index.js'
export type * as dax from './dax/index.js'
export type * as deadline from './deadline/index.js'
export type * as detective from './detective/index.js'
export type * as devicefarm from './devicefarm/index.js'
export type * as devopsguru from './devopsguru/index.js'
export type * as directoryservice from './directoryservice/index.js'
export type * as dlm from './dlm/index.js'
export type * as dms from './dms/index.js'
export type * as docdb from './docdb/index.js'
export type * as docdbelastic from './docdbelastic/index.js'
export type * as dynamodb from './dynamodb/index.js'
export type * as ec2 from './ec2/index.js'
export type * as ecr from './ecr/index.js'
export type * as ecs from './ecs/index.js'
export type * as efs from './efs/index.js'
export type * as eks from './eks/index.js'
export type * as elasticache from './elasticache/index.js'
export type * as elasticbeanstalk from './elasticbeanstalk/index.js'
export type * as elasticloadbalancing from './elasticloadbalancing/index.js'
export type * as elasticloadbalancingv2 from './elasticloadbalancingv2/index.js'
export type * as elasticsearch from './elasticsearch/index.js'
export type * as emr from './emr/index.js'
export type * as emrcontainers from './emrcontainers/index.js'
export type * as emrserverless from './emrserverless/index.js'
export type * as entityresolution from './entityresolution/index.js'
export type * as events from './events/index.js'
export type * as eventschemas from './eventschemas/index.js'
export type * as evidently from './evidently/index.js'
export type * as finspace from './finspace/index.js'
export type * as fis from './fis/index.js'
export type * as fms from './fms/index.js'
export type * as forecast from './forecast/index.js'
export type * as frauddetector from './frauddetector/index.js'
export type * as fsx from './fsx/index.js'
export type * as gamelift from './gamelift/index.js'
export type * as globalaccelerator from './globalaccelerator/index.js'
export type * as glue from './glue/index.js'
export type * as grafana from './grafana/index.js'
export type * as greengrass from './greengrass/index.js'
export type * as greengrassv2 from './greengrassv2/index.js'
export type * as groundstation from './groundstation/index.js'
export type * as guardduty from './guardduty/index.js'
export type * as healthimaging from './healthimaging/index.js'
export type * as healthlake from './healthlake/index.js'
export type * as iam from './iam/index.js'
export type * as identitystore from './identitystore/index.js'
export type * as imagebuilder from './imagebuilder/index.js'
export type * as inspector from './inspector/index.js'
export type * as inspectorv2 from './inspectorv2/index.js'
export type * as internetmonitor from './internetmonitor/index.js'
export type * as iot from './iot/index.js'
export type * as iot1click from './iot1click/index.js'
export type * as iotanalytics from './iotanalytics/index.js'
export type * as iotcoredeviceadvisor from './iotcoredeviceadvisor/index.js'
export type * as iotevents from './iotevents/index.js'
export type * as iotfleethub from './iotfleethub/index.js'
export type * as iotfleetwise from './iotfleetwise/index.js'
export type * as iotsitewise from './iotsitewise/index.js'
export type * as iottwinmaker from './iottwinmaker/index.js'
export type * as iotwireless from './iotwireless/index.js'
export type * as ivs from './ivs/index.js'
export type * as ivschat from './ivschat/index.js'
export type * as kafkaconnect from './kafkaconnect/index.js'
export type * as kendra from './kendra/index.js'
export type * as kendraranking from './kendraranking/index.js'
export type * as kinesis from './kinesis/index.js'
export type * as kinesisanalytics from './kinesisanalytics/index.js'
export type * as kinesisanalyticsv2 from './kinesisanalyticsv2/index.js'
export type * as kinesisfirehose from './kinesisfirehose/index.js'
export type * as kinesisvideo from './kinesisvideo/index.js'
export type * as kms from './kms/index.js'
export type * as lakeformation from './lakeformation/index.js'
export type * as lambda from './lambda/index.js'
export type * as launchwizard from './launchwizard/index.js'
export type * as lex from './lex/index.js'
export type * as licensemanager from './licensemanager/index.js'
export type * as lightsail from './lightsail/index.js'
export type * as location from './location/index.js'
export type * as logs from './logs/index.js'
export type * as lookoutequipment from './lookoutequipment/index.js'
export type * as lookoutmetrics from './lookoutmetrics/index.js'
export type * as lookoutvision from './lookoutvision/index.js'
export type * as m2 from './m2/index.js'
export type * as macie from './macie/index.js'
export type * as managedblockchain from './managedblockchain/index.js'
export type * as mediaconnect from './mediaconnect/index.js'
export type * as mediaconvert from './mediaconvert/index.js'
export type * as medialive from './medialive/index.js'
export type * as mediapackage from './mediapackage/index.js'
export type * as mediapackagev2 from './mediapackagev2/index.js'
export type * as mediastore from './mediastore/index.js'
export type * as mediatailor from './mediatailor/index.js'
export type * as memorydb from './memorydb/index.js'
export type * as msk from './msk/index.js'
export type * as mwaa from './mwaa/index.js'
export type * as neptune from './neptune/index.js'
export type * as neptunegraph from './neptunegraph/index.js'
export type * as networkfirewall from './networkfirewall/index.js'
export type * as networkmanager from './networkmanager/index.js'
export type * as nimblestudio from './nimblestudio/index.js'
export type * as oam from './oam/index.js'
export type * as omics from './omics/index.js'
export type * as opensearchserverless from './opensearchserverless/index.js'
export type * as opensearchservice from './opensearchservice/index.js'
export type * as opsworks from './opsworks/index.js'
export type * as opsworkscm from './opsworkscm/index.js'
export type * as organizations from './organizations/index.js'
export type * as osis from './osis/index.js'
export type * as panorama from './panorama/index.js'
export type * as paymentcryptography from './paymentcryptography/index.js'
export type * as pcaconnectorad from './pcaconnectorad/index.js'
export type * as pcaconnectorscep from './pcaconnectorscep/index.js'
export type * as personalize from './personalize/index.js'
export type * as pinpoint from './pinpoint/index.js'
export type * as pinpointemail from './pinpointemail/index.js'
export type * as pipes from './pipes/index.js'
export type * as proton from './proton/index.js'
export type * as qbusiness from './qbusiness/index.js'
export type * as qldb from './qldb/index.js'
export type * as quicksight from './quicksight/index.js'
export type * as ram from './ram/index.js'
export type * as rds from './rds/index.js'
export type * as redshift from './redshift/index.js'
export type * as redshiftserverless from './redshiftserverless/index.js'
export type * as refactorspaces from './refactorspaces/index.js'
export type * as rekognition from './rekognition/index.js'
export type * as resiliencehub from './resiliencehub/index.js'
export type * as resourceexplorer2 from './resourceexplorer2/index.js'
export type * as resourcegroups from './resourcegroups/index.js'
export type * as robomaker from './robomaker/index.js'
export type * as rolesanywhere from './rolesanywhere/index.js'
export type * as route53 from './route53/index.js'
export type * as route53profiles from './route53profiles/index.js'
export type * as route53recoverycontrol from './route53recoverycontrol/index.js'
export type * as route53recoveryreadiness from './route53recoveryreadiness/index.js'
export type * as route53resolver from './route53resolver/index.js'
export type * as rum from './rum/index.js'
export type * as s3 from './s3/index.js'
export type * as s3express from './s3express/index.js'
export type * as s3objectlambda from './s3objectlambda/index.js'
export type * as s3outposts from './s3outposts/index.js'
export type * as sagemaker from './sagemaker/index.js'
export type * as scheduler from './scheduler/index.js'
export type * as sdb from './sdb/index.js'
export type * as secretsmanager from './secretsmanager/index.js'
export type * as securityhub from './securityhub/index.js'
export type * as securitylake from './securitylake/index.js'
export type * as servicecatalog from './servicecatalog/index.js'
export type * as servicecatalogappregistry from './servicecatalogappregistry/index.js'
export type * as servicediscovery from './servicediscovery/index.js'
export type * as ses from './ses/index.js'
export type * as shield from './shield/index.js'
export type * as signer from './signer/index.js'
export type * as simspaceweaver from './simspaceweaver/index.js'
export type * as sns from './sns/index.js'
export type * as sqs from './sqs/index.js'
export type * as ssm from './ssm/index.js'
export type * as ssmcontacts from './ssmcontacts/index.js'
export type * as ssmincidents from './ssmincidents/index.js'
export type * as ssmquicksetup from './ssmquicksetup/index.js'
export type * as sso from './sso/index.js'
export type * as stepfunctions from './stepfunctions/index.js'
export type * as supportapp from './supportapp/index.js'
export type * as synthetics from './synthetics/index.js'
export type * as systemsmanagersap from './systemsmanagersap/index.js'
export type * as timestream from './timestream/index.js'
export type * as transfer from './transfer/index.js'
export type * as verifiedpermissions from './verifiedpermissions/index.js'
export type * as voiceid from './voiceid/index.js'
export type * as vpclattice from './vpclattice/index.js'
export type * as waf from './waf/index.js'
export type * as wafregional from './wafregional/index.js'
export type * as wafv2 from './wafv2/index.js'
export type * as wisdom from './wisdom/index.js'
export type * as workspaces from './workspaces/index.js'
export type * as workspacesthinclient from './workspacesthinclient/index.js'
export type * as workspacesweb from './workspacesweb/index.js'
export type * as xray from './xray/index.js'

export type CfResource =
  | AmplifyApp
  | AmplifyBranch
  | AmplifyDomain
  | AmplifyUIBuilderComponent
  | AmplifyUIBuilderForm
  | AmplifyUIBuilderTheme
  | ApiGatewayAccount
  | ApiGatewayApiKey
  | ApiGatewayAuthorizer
  | ApiGatewayBasePathMapping
  | ApiGatewayClientCertificate
  | ApiGatewayDeployment
  | ApiGatewayDocumentationPart
  | ApiGatewayDocumentationVersion
  | ApiGatewayDomainName
  | ApiGatewayGatewayResponse
  | ApiGatewayMethod
  | ApiGatewayModel
  | ApiGatewayRequestValidator
  | ApiGatewayResource
  | ApiGatewayRestApi
  | ApiGatewayStage
  | ApiGatewayUsagePlan
  | ApiGatewayUsagePlanKey
  | ApiGatewayVpcLink
  | ApiGatewayV2Api
  | ApiGatewayV2ApiGatewayManagedOverrides
  | ApiGatewayV2ApiMapping
  | ApiGatewayV2Authorizer
  | ApiGatewayV2Deployment
  | ApiGatewayV2DomainName
  | ApiGatewayV2Integration
  | ApiGatewayV2IntegrationResponse
  | ApiGatewayV2Model
  | ApiGatewayV2Route
  | ApiGatewayV2RouteResponse
  | ApiGatewayV2Stage
  | ApiGatewayV2VpcLink
  | AppConfigApplication
  | AppConfigConfigurationProfile
  | AppConfigDeployment
  | AppConfigDeploymentStrategy
  | AppConfigEnvironment
  | AppConfigExtension
  | AppConfigExtensionAssociation
  | AppConfigHostedConfigurationVersion
  | AppFlowConnector
  | AppFlowConnectorProfile
  | AppFlowFlow
  | AppIntegrationsApplication
  | AppIntegrationsDataIntegration
  | AppIntegrationsEventIntegration
  | ApplicationAutoScalingScalableTarget
  | ApplicationAutoScalingScalingPolicy
  | AppMeshGatewayRoute
  | AppMeshMesh
  | AppMeshRoute
  | AppMeshVirtualGateway
  | AppMeshVirtualNode
  | AppMeshVirtualRouter
  | AppMeshVirtualService
  | AppRunnerAutoScalingConfiguration
  | AppRunnerObservabilityConfiguration
  | AppRunnerService
  | AppRunnerVpcConnector
  | AppRunnerVpcIngressConnection
  | AppStreamAppBlock
  | AppStreamAppBlockBuilder
  | AppStreamApplication
  | AppStreamApplicationEntitlementAssociation
  | AppStreamApplicationFleetAssociation
  | AppStreamDirectoryConfig
  | AppStreamEntitlement
  | AppStreamFleet
  | AppStreamImageBuilder
  | AppStreamStack
  | AppStreamStackFleetAssociation
  | AppStreamStackUserAssociation
  | AppStreamUser
  | AppSyncApiCache
  | AppSyncApiKey
  | AppSyncDataSource
  | AppSyncDomainName
  | AppSyncDomainNameApiAssociation
  | AppSyncFunctionConfiguration
  | AppSyncGraphQLApi
  | AppSyncGraphQLSchema
  | AppSyncResolver
  | AppSyncSourceApiAssociation
  | ARCZonalShiftAutoshiftObserverNotificationStatus
  | ARCZonalShiftZonalAutoshiftConfiguration
  | AthenaCapacityReservation
  | AthenaDataCatalog
  | AthenaNamedQuery
  | AthenaPreparedStatement
  | AthenaWorkGroup
  | AuditManagerAssessment
  | AutoScalingPlansScalingPlan
  | B2BICapability
  | B2BIPartnership
  | B2BIProfile
  | B2BITransformer
  | BackupBackupPlan
  | BackupBackupSelection
  | BackupBackupVault
  | BackupFramework
  | BackupReportPlan
  | BackupRestoreTestingPlan
  | BackupRestoreTestingSelection
  | BackupGatewayHypervisor
  | BatchComputeEnvironment
  | BatchJobDefinition
  | BatchJobQueue
  | BatchSchedulingPolicy
  | BedrockAgent
  | BedrockAgentAlias
  | BedrockDataSource
  | BedrockFlow
  | BedrockFlowAlias
  | BedrockFlowVersion
  | BedrockGuardrail
  | BedrockGuardrailVersion
  | BedrockKnowledgeBase
  | BedrockPrompt
  | BedrockPromptVersion
  | BillingConductorBillingGroup
  | BillingConductorCustomLineItem
  | BillingConductorPricingPlan
  | BillingConductorPricingRule
  | BudgetsBudget
  | BudgetsBudgetsAction
  | CertificateManagerAccount
  | CertificateManagerCertificate
  | ChatbotMicrosoftTeamsChannelConfiguration
  | ChatbotSlackChannelConfiguration
  | CleanRoomsAnalysisTemplate
  | CleanRoomsCollaboration
  | CleanRoomsConfiguredTable
  | CleanRoomsConfiguredTableAssociation
  | CleanRoomsIdMappingTable
  | CleanRoomsIdNamespaceAssociation
  | CleanRoomsMembership
  | CleanRoomsPrivacyBudgetTemplate
  | CleanRoomsMLTrainingDataset
  | Cloud9EnvironmentEC2
  | CloudFormationCustomResource
  | CloudFormationHookDefaultVersion
  | CloudFormationHookTypeConfig
  | CloudFormationHookVersion
  | CloudFormationMacro
  | CloudFormationModuleDefaultVersion
  | CloudFormationModuleVersion
  | CloudFormationPublicTypeVersion
  | CloudFormationPublisher
  | CloudFormationResourceDefaultVersion
  | CloudFormationResourceVersion
  | CloudFormationStack
  | CloudFormationStackSet
  | CloudFormationTypeActivation
  | CloudFormationWaitCondition
  | CloudFormationWaitConditionHandle
  | CloudFrontCachePolicy
  | CloudFrontCloudFrontOriginAccessIdentity
  | CloudFrontContinuousDeploymentPolicy
  | CloudFrontDistribution
  | CloudFrontFunction
  | CloudFrontKeyGroup
  | CloudFrontKeyValueStore
  | CloudFrontMonitoringSubscription
  | CloudFrontOriginAccessControl
  | CloudFrontOriginRequestPolicy
  | CloudFrontPublicKey
  | CloudFrontRealtimeLogConfig
  | CloudFrontResponseHeadersPolicy
  | CloudFrontStreamingDistribution
  | ServiceDiscoveryHttpNamespace
  | ServiceDiscoveryInstance
  | ServiceDiscoveryPrivateDnsNamespace
  | ServiceDiscoveryPublicDnsNamespace
  | ServiceDiscoveryService
  | CloudTrailChannel
  | CloudTrailEventDataStore
  | CloudTrailResourcePolicy
  | CloudTrailTrail
  | CloudWatchAlarm
  | CloudWatchAnomalyDetector
  | CloudWatchCompositeAlarm
  | CloudWatchDashboard
  | CloudWatchInsightRule
  | CloudWatchMetricStream
  | ApplicationInsightsApplication
  | ApplicationSignalsServiceLevelObjective
  | EvidentlyExperiment
  | EvidentlyFeature
  | EvidentlyLaunch
  | EvidentlyProject
  | EvidentlySegment
  | InternetMonitorMonitor
  | LogsAccountPolicy
  | LogsDelivery
  | LogsDeliveryDestination
  | LogsDeliverySource
  | LogsDestination
  | LogsLogAnomalyDetector
  | LogsLogGroup
  | LogsLogStream
  | LogsMetricFilter
  | LogsQueryDefinition
  | LogsResourcePolicy
  | LogsSubscriptionFilter
  | SyntheticsCanary
  | SyntheticsGroup
  | CodeArtifactDomain
  | CodeArtifactPackageGroup
  | CodeArtifactRepository
  | CodeBuildFleet
  | CodeBuildProject
  | CodeBuildReportGroup
  | CodeBuildSourceCredential
  | CodeCommitRepository
  | CodeConnectionsConnection
  | CodeDeployApplication
  | CodeDeployDeploymentConfig
  | CodeDeployDeploymentGroup
  | CodeGuruProfilerProfilingGroup
  | CodeGuruReviewerRepositoryAssociation
  | CodePipelineCustomActionType
  | CodePipelinePipeline
  | CodePipelineWebhook
  | CodeStarGitHubRepository
  | CodeStarConnectionsConnection
  | CodeStarConnectionsRepositoryLink
  | CodeStarConnectionsSyncConfiguration
  | CodeStarNotificationsNotificationRule
  | CognitoIdentityPool
  | CognitoIdentityPoolPrincipalTag
  | CognitoIdentityPoolRoleAttachment
  | CognitoLogDeliveryConfiguration
  | CognitoUserPool
  | CognitoUserPoolClient
  | CognitoUserPoolDomain
  | CognitoUserPoolGroup
  | CognitoUserPoolIdentityProvider
  | CognitoUserPoolResourceServer
  | CognitoUserPoolRiskConfigurationAttachment
  | CognitoUserPoolUICustomizationAttachment
  | CognitoUserPoolUser
  | CognitoUserPoolUserToGroupAttachment
  | ComprehendDocumentClassifier
  | ComprehendFlywheel
  | ConfigAggregationAuthorization
  | ConfigConfigRule
  | ConfigConfigurationAggregator
  | ConfigConfigurationRecorder
  | ConfigConformancePack
  | ConfigDeliveryChannel
  | ConfigOrganizationConfigRule
  | ConfigOrganizationConformancePack
  | ConfigRemediationConfiguration
  | ConfigStoredQuery
  | ConnectAgentStatus
  | ConnectApprovedOrigin
  | ConnectContactFlow
  | ConnectContactFlowModule
  | ConnectEvaluationForm
  | ConnectHoursOfOperation
  | ConnectInstance
  | ConnectInstanceStorageConfig
  | ConnectIntegrationAssociation
  | ConnectPhoneNumber
  | ConnectPredefinedAttribute
  | ConnectPrompt
  | ConnectQueue
  | ConnectQuickConnect
  | ConnectRoutingProfile
  | ConnectRule
  | ConnectSecurityKey
  | ConnectSecurityProfile
  | ConnectTaskTemplate
  | ConnectTrafficDistributionGroup
  | ConnectUser
  | ConnectUserHierarchyGroup
  | ConnectUserHierarchyStructure
  | ConnectView
  | ConnectViewVersion
  | ConnectCampaignsCampaign
  | ControlTowerEnabledBaseline
  | ControlTowerEnabledControl
  | ControlTowerLandingZone
  | CustomerProfilesCalculatedAttributeDefinition
  | CustomerProfilesDomain
  | CustomerProfilesEventStream
  | CustomerProfilesIntegration
  | CustomerProfilesObjectType
  | CEAnomalyMonitor
  | CEAnomalySubscription
  | CECostCategory
  | CURReportDefinition
  | BCMDataExportsExport
  | DLMLifecyclePolicy
  | DataPipelinePipeline
  | DataSyncAgent
  | DataSyncLocationAzureBlob
  | DataSyncLocationEFS
  | DataSyncLocationFSxLustre
  | DataSyncLocationFSxONTAP
  | DataSyncLocationFSxOpenZFS
  | DataSyncLocationFSxWindows
  | DataSyncLocationHDFS
  | DataSyncLocationNFS
  | DataSyncLocationObjectStorage
  | DataSyncLocationS3
  | DataSyncLocationSMB
  | DataSyncStorageSystem
  | DataSyncTask
  | DataZoneDataSource
  | DataZoneDomain
  | DataZoneEnvironment
  | DataZoneEnvironmentActions
  | DataZoneEnvironmentBlueprintConfiguration
  | DataZoneEnvironmentProfile
  | DataZoneGroupProfile
  | DataZoneProject
  | DataZoneProjectMembership
  | DataZoneSubscriptionTarget
  | DataZoneUserProfile
  | DeadlineFarm
  | DeadlineFleet
  | DeadlineLicenseEndpoint
  | DeadlineMeteredProduct
  | DeadlineMonitor
  | DeadlineQueue
  | DeadlineQueueEnvironment
  | DeadlineQueueFleetAssociation
  | DeadlineStorageProfile
  | DAXCluster
  | DAXParameterGroup
  | DAXSubnetGroup
  | DetectiveGraph
  | DetectiveMemberInvitation
  | DetectiveOrganizationAdmin
  | DeviceFarmDevicePool
  | DeviceFarmInstanceProfile
  | DeviceFarmNetworkProfile
  | DeviceFarmProject
  | DeviceFarmTestGridProject
  | DeviceFarmVPCEConfiguration
  | DevOpsGuruLogAnomalyDetectionIntegration
  | DevOpsGuruNotificationChannel
  | DevOpsGuruResourceCollection
  | DirectoryServiceMicrosoftAD
  | DirectoryServiceSimpleAD
  | DMSCertificate
  | DMSDataProvider
  | DMSEndpoint
  | DMSEventSubscription
  | DMSInstanceProfile
  | DMSMigrationProject
  | DMSReplicationConfig
  | DMSReplicationInstance
  | DMSReplicationSubnetGroup
  | DMSReplicationTask
  | DocDBDBCluster
  | DocDBDBClusterParameterGroup
  | DocDBDBInstance
  | DocDBDBSubnetGroup
  | DocDBEventSubscription
  | DocDBElasticCluster
  | DynamoDBGlobalTable
  | DynamoDBTable
  | EC2CapacityReservation
  | EC2CapacityReservationFleet
  | EC2CarrierGateway
  | EC2ClientVpnAuthorizationRule
  | EC2ClientVpnEndpoint
  | EC2ClientVpnRoute
  | EC2ClientVpnTargetNetworkAssociation
  | EC2CustomerGateway
  | EC2DHCPOptions
  | EC2EC2Fleet
  | EC2EgressOnlyInternetGateway
  | EC2EIP
  | EC2EIPAssociation
  | EC2EnclaveCertificateIamRoleAssociation
  | EC2FlowLog
  | EC2GatewayRouteTableAssociation
  | EC2Host
  | EC2Instance
  | EC2InstanceConnectEndpoint
  | EC2InternetGateway
  | EC2IPAM
  | EC2IPAMAllocation
  | EC2IPAMPool
  | EC2IPAMPoolCidr
  | EC2IPAMResourceDiscovery
  | EC2IPAMResourceDiscoveryAssociation
  | EC2IPAMScope
  | EC2KeyPair
  | EC2LaunchTemplate
  | EC2LocalGatewayRoute
  | EC2LocalGatewayRouteTable
  | EC2LocalGatewayRouteTableVirtualInterfaceGroupAssociation
  | EC2LocalGatewayRouteTableVPCAssociation
  | EC2NatGateway
  | EC2NetworkAcl
  | EC2NetworkAclEntry
  | EC2NetworkInsightsAccessScope
  | EC2NetworkInsightsAccessScopeAnalysis
  | EC2NetworkInsightsAnalysis
  | EC2NetworkInsightsPath
  | EC2NetworkInterface
  | EC2NetworkInterfaceAttachment
  | EC2NetworkInterfacePermission
  | EC2NetworkPerformanceMetricSubscription
  | EC2PlacementGroup
  | EC2PrefixList
  | EC2Route
  | EC2RouteTable
  | EC2SecurityGroup
  | EC2SecurityGroupEgress
  | EC2SecurityGroupIngress
  | EC2SnapshotBlockPublicAccess
  | EC2SpotFleet
  | EC2Subnet
  | EC2SubnetCidrBlock
  | EC2SubnetNetworkAclAssociation
  | EC2SubnetRouteTableAssociation
  | EC2TrafficMirrorFilter
  | EC2TrafficMirrorFilterRule
  | EC2TrafficMirrorSession
  | EC2TrafficMirrorTarget
  | EC2TransitGateway
  | EC2TransitGatewayAttachment
  | EC2TransitGatewayConnect
  | EC2TransitGatewayMulticastDomain
  | EC2TransitGatewayMulticastDomainAssociation
  | EC2TransitGatewayMulticastGroupMember
  | EC2TransitGatewayMulticastGroupSource
  | EC2TransitGatewayPeeringAttachment
  | EC2TransitGatewayRoute
  | EC2TransitGatewayRouteTable
  | EC2TransitGatewayRouteTableAssociation
  | EC2TransitGatewayRouteTablePropagation
  | EC2TransitGatewayVpcAttachment
  | EC2VerifiedAccessEndpoint
  | EC2VerifiedAccessGroup
  | EC2VerifiedAccessInstance
  | EC2VerifiedAccessTrustProvider
  | EC2Volume
  | EC2VolumeAttachment
  | EC2VPC
  | EC2VPCCidrBlock
  | EC2VPCDHCPOptionsAssociation
  | EC2VPCEndpoint
  | EC2VPCEndpointConnectionNotification
  | EC2VPCEndpointService
  | EC2VPCEndpointServicePermissions
  | EC2VPCGatewayAttachment
  | EC2VPCPeeringConnection
  | EC2VPNConnection
  | EC2VPNConnectionRoute
  | EC2VPNGateway
  | EC2VPNGatewayRoutePropagation
  | AutoScalingAutoScalingGroup
  | AutoScalingLaunchConfiguration
  | AutoScalingLifecycleHook
  | AutoScalingScalingPolicy
  | AutoScalingScheduledAction
  | AutoScalingWarmPool
  | ECRPublicRepository
  | ECRPullThroughCacheRule
  | ECRRegistryPolicy
  | ECRReplicationConfiguration
  | ECRRepository
  | ECRRepositoryCreationTemplate
  | ECSCapacityProvider
  | ECSCluster
  | ECSClusterCapacityProviderAssociations
  | ECSPrimaryTaskSet
  | ECSService
  | ECSTaskDefinition
  | ECSTaskSet
  | EFSAccessPoint
  | EFSFileSystem
  | EFSMountTarget
  | EKSAccessEntry
  | EKSAddon
  | EKSCluster
  | EKSFargateProfile
  | EKSIdentityProviderConfig
  | EKSNodegroup
  | EKSPodIdentityAssociation
  | ElasticBeanstalkApplication
  | ElasticBeanstalkApplicationVersion
  | ElasticBeanstalkConfigurationTemplate
  | ElasticBeanstalkEnvironment
  | ElasticLoadBalancingLoadBalancer
  | ElasticLoadBalancingV2Listener
  | ElasticLoadBalancingV2ListenerCertificate
  | ElasticLoadBalancingV2ListenerRule
  | ElasticLoadBalancingV2LoadBalancer
  | ElasticLoadBalancingV2TargetGroup
  | ElasticLoadBalancingV2TrustStore
  | ElasticLoadBalancingV2TrustStoreRevocation
  | EMRCluster
  | EMRInstanceFleetConfig
  | EMRInstanceGroupConfig
  | EMRSecurityConfiguration
  | EMRStep
  | EMRStudio
  | EMRStudioSessionMapping
  | EMRWALWorkspace
  | EMRServerlessApplication
  | EMRContainersVirtualCluster
  | ElastiCacheCacheCluster
  | ElastiCacheGlobalReplicationGroup
  | ElastiCacheParameterGroup
  | ElastiCacheReplicationGroup
  | ElastiCacheSecurityGroup
  | ElastiCacheSecurityGroupIngress
  | ElastiCacheServerlessCache
  | ElastiCacheSubnetGroup
  | ElastiCacheUser
  | ElastiCacheUserGroup
  | EntityResolutionIdMappingWorkflow
  | EntityResolutionIdNamespace
  | EntityResolutionMatchingWorkflow
  | EntityResolutionPolicyStatement
  | EntityResolutionSchemaMapping
  | EventsApiDestination
  | EventsArchive
  | EventsConnection
  | EventsEndpoint
  | EventsEventBus
  | EventsEventBusPolicy
  | EventsRule
  | PipesPipe
  | SchedulerSchedule
  | SchedulerScheduleGroup
  | EventSchemasDiscoverer
  | EventSchemasRegistry
  | EventSchemasRegistryPolicy
  | EventSchemasSchema
  | FinSpaceEnvironment
  | FISExperimentTemplate
  | FISTargetAccountConfiguration
  | FMSNotificationChannel
  | FMSPolicy
  | FMSResourceSet
  | ForecastDataset
  | ForecastDatasetGroup
  | FraudDetectorDetector
  | FraudDetectorEntityType
  | FraudDetectorEventType
  | FraudDetectorLabel
  | FraudDetectorList
  | FraudDetectorOutcome
  | FraudDetectorVariable
  | FSxDataRepositoryAssociation
  | FSxFileSystem
  | FSxSnapshot
  | FSxStorageVirtualMachine
  | FSxVolume
  | GameLiftAlias
  | GameLiftBuild
  | GameLiftContainerGroupDefinition
  | GameLiftFleet
  | GameLiftGameServerGroup
  | GameLiftGameSessionQueue
  | GameLiftLocation
  | GameLiftMatchmakingConfiguration
  | GameLiftMatchmakingRuleSet
  | GameLiftScript
  | GlobalAcceleratorAccelerator
  | GlobalAcceleratorCrossAccountAttachment
  | GlobalAcceleratorEndpointGroup
  | GlobalAcceleratorListener
  | GlueClassifier
  | GlueConnection
  | GlueCrawler
  | GlueCustomEntityType
  | GlueDatabase
  | GlueDataCatalogEncryptionSettings
  | GlueDataQualityRuleset
  | GlueDevEndpoint
  | GlueJob
  | GlueMLTransform
  | GluePartition
  | GlueRegistry
  | GlueSchema
  | GlueSchemaVersion
  | GlueSchemaVersionMetadata
  | GlueSecurityConfiguration
  | GlueTable
  | GlueTableOptimizer
  | GlueTrigger
  | GlueWorkflow
  | DataBrewDataset
  | DataBrewJob
  | DataBrewProject
  | DataBrewRecipe
  | DataBrewRuleset
  | DataBrewSchedule
  | GrafanaWorkspace
  | GroundStationConfig
  | GroundStationDataflowEndpointGroup
  | GroundStationMissionProfile
  | GuardDutyDetector
  | GuardDutyFilter
  | GuardDutyIPSet
  | GuardDutyMalwareProtectionPlan
  | GuardDutyMaster
  | GuardDutyMember
  | GuardDutyThreatIntelSet
  | HealthImagingDatastore
  | HealthLakeFHIRDatastore
  | IAMAccessKey
  | IAMGroup
  | IAMGroupPolicy
  | IAMInstanceProfile
  | IAMManagedPolicy
  | IAMOIDCProvider
  | IAMPolicy
  | IAMRole
  | IAMRolePolicy
  | IAMSAMLProvider
  | IAMServerCertificate
  | IAMServiceLinkedRole
  | IAMUser
  | IAMUserPolicy
  | IAMUserToGroupAddition
  | IAMVirtualMFADevice
  | SSOApplication
  | SSOApplicationAssignment
  | SSOAssignment
  | SSOInstance
  | SSOInstanceAccessControlAttributeConfiguration
  | SSOPermissionSet
  | IdentityStoreGroup
  | IdentityStoreGroupMembership
  | AccessAnalyzerAnalyzer
  | ImageBuilderComponent
  | ImageBuilderContainerRecipe
  | ImageBuilderDistributionConfiguration
  | ImageBuilderImage
  | ImageBuilderImagePipeline
  | ImageBuilderImageRecipe
  | ImageBuilderInfrastructureConfiguration
  | ImageBuilderLifecyclePolicy
  | ImageBuilderWorkflow
  | SSMIncidentsReplicationSet
  | SSMIncidentsResponsePlan
  | SSMContactsContact
  | SSMContactsContactChannel
  | SSMContactsPlan
  | SSMContactsRotation
  | InspectorAssessmentTarget
  | InspectorAssessmentTemplate
  | InspectorResourceGroup
  | InspectorV2CisScanConfiguration
  | InspectorV2Filter
  | IoTAccountAuditConfiguration
  | IoTAuthorizer
  | IoTBillingGroup
  | IoTCACertificate
  | IoTCertificate
  | IoTCertificateProvider
  | IoTCustomMetric
  | IoTDimension
  | IoTDomainConfiguration
  | IoTFleetMetric
  | IoTJobTemplate
  | IoTLogging
  | IoTMitigationAction
  | IoTPolicy
  | IoTPolicyPrincipalAttachment
  | IoTProvisioningTemplate
  | IoTResourceSpecificLogging
  | IoTRoleAlias
  | IoTScheduledAudit
  | IoTSecurityProfile
  | IoTSoftwarePackage
  | IoTSoftwarePackageVersion
  | IoTThing
  | IoTThingGroup
  | IoTThingPrincipalAttachment
  | IoTThingType
  | IoTTopicRule
  | IoTTopicRuleDestination
  | IoT1ClickDevice
  | IoT1ClickPlacement
  | IoT1ClickProject
  | IoTAnalyticsChannel
  | IoTAnalyticsDataset
  | IoTAnalyticsDatastore
  | IoTAnalyticsPipeline
  | IoTCoreDeviceAdvisorSuiteDefinition
  | IoTEventsAlarmModel
  | IoTEventsDetectorModel
  | IoTEventsInput
  | IoTFleetHubApplication
  | IoTFleetWiseCampaign
  | IoTFleetWiseDecoderManifest
  | IoTFleetWiseFleet
  | IoTFleetWiseModelManifest
  | IoTFleetWiseSignalCatalog
  | IoTFleetWiseVehicle
  | GreengrassConnectorDefinition
  | GreengrassConnectorDefinitionVersion
  | GreengrassCoreDefinition
  | GreengrassCoreDefinitionVersion
  | GreengrassDeviceDefinition
  | GreengrassDeviceDefinitionVersion
  | GreengrassFunctionDefinition
  | GreengrassFunctionDefinitionVersion
  | GreengrassGroup
  | GreengrassGroupVersion
  | GreengrassLoggerDefinition
  | GreengrassLoggerDefinitionVersion
  | GreengrassResourceDefinition
  | GreengrassResourceDefinitionVersion
  | GreengrassSubscriptionDefinition
  | GreengrassSubscriptionDefinitionVersion
  | GreengrassV2ComponentVersion
  | GreengrassV2Deployment
  | IoTSiteWiseAccessPolicy
  | IoTSiteWiseAsset
  | IoTSiteWiseAssetModel
  | IoTSiteWiseDashboard
  | IoTSiteWiseGateway
  | IoTSiteWisePortal
  | IoTSiteWiseProject
  | IoTTwinMakerComponentType
  | IoTTwinMakerEntity
  | IoTTwinMakerScene
  | IoTTwinMakerSyncJob
  | IoTTwinMakerWorkspace
  | IoTWirelessDestination
  | IoTWirelessDeviceProfile
  | IoTWirelessFuotaTask
  | IoTWirelessMulticastGroup
  | IoTWirelessNetworkAnalyzerConfiguration
  | IoTWirelessPartnerAccount
  | IoTWirelessServiceProfile
  | IoTWirelessTaskDefinition
  | IoTWirelessWirelessDevice
  | IoTWirelessWirelessDeviceImportTask
  | IoTWirelessWirelessGateway
  | IVSChannel
  | IVSEncoderConfiguration
  | IVSPlaybackKeyPair
  | IVSPlaybackRestrictionPolicy
  | IVSPublicKey
  | IVSRecordingConfiguration
  | IVSStage
  | IVSStorageConfiguration
  | IVSStreamKey
  | IVSChatLoggingConfiguration
  | IVSChatRoom
  | KendraDataSource
  | KendraFaq
  | KendraIndex
  | KendraRankingExecutionPlan
  | CassandraKeyspace
  | CassandraTable
  | KinesisStream
  | KinesisStreamConsumer
  | KinesisAnalyticsApplication
  | KinesisAnalyticsApplicationOutput
  | KinesisAnalyticsApplicationReferenceDataSource
  | KinesisAnalyticsV2Application
  | KinesisAnalyticsV2ApplicationCloudWatchLoggingOption
  | KinesisAnalyticsV2ApplicationOutput
  | KinesisAnalyticsV2ApplicationReferenceDataSource
  | KinesisFirehoseDeliveryStream
  | KinesisVideoSignalingChannel
  | KinesisVideoStream
  | KMSAlias
  | KMSKey
  | KMSReplicaKey
  | LakeFormationDataCellsFilter
  | LakeFormationDataLakeSettings
  | LakeFormationPermissions
  | LakeFormationPrincipalPermissions
  | LakeFormationResource
  | LakeFormationTag
  | LakeFormationTagAssociation
  | LambdaAlias
  | LambdaCodeSigningConfig
  | LambdaEventInvokeConfig
  | LambdaEventSourceMapping
  | LambdaFunction
  | LambdaLayerVersion
  | LambdaLayerVersionPermission
  | LambdaPermission
  | LambdaUrl
  | LambdaVersion
  | LaunchWizardDeployment
  | LexBot
  | LexBotAlias
  | LexBotVersion
  | LexResourcePolicy
  | LicenseManagerGrant
  | LicenseManagerLicense
  | LightsailAlarm
  | LightsailBucket
  | LightsailCertificate
  | LightsailContainer
  | LightsailDatabase
  | LightsailDisk
  | LightsailDistribution
  | LightsailInstance
  | LightsailLoadBalancer
  | LightsailLoadBalancerTlsCertificate
  | LightsailStaticIp
  | LocationAPIKey
  | LocationGeofenceCollection
  | LocationMap
  | LocationPlaceIndex
  | LocationRouteCalculator
  | LocationTracker
  | LocationTrackerConsumer
  | LookoutEquipmentInferenceScheduler
  | LookoutMetricsAlert
  | LookoutMetricsAnomalyDetector
  | LookoutVisionProject
  | M2Application
  | M2Environment
  | AppTestTestCase
  | MacieAllowList
  | MacieCustomDataIdentifier
  | MacieFindingsFilter
  | MacieSession
  | ManagedBlockchainAccessor
  | ManagedBlockchainMember
  | ManagedBlockchainNode
  | MediaConnectBridge
  | MediaConnectBridgeOutput
  | MediaConnectBridgeSource
  | MediaConnectFlow
  | MediaConnectFlowEntitlement
  | MediaConnectFlowOutput
  | MediaConnectFlowSource
  | MediaConnectFlowVpcInterface
  | MediaConnectGateway
  | MediaConvertJobTemplate
  | MediaConvertPreset
  | MediaConvertQueue
  | MediaLiveChannel
  | MediaLiveChannelPlacementGroup
  | MediaLiveCloudWatchAlarmTemplate
  | MediaLiveCloudWatchAlarmTemplateGroup
  | MediaLiveCluster
  | MediaLiveEventBridgeRuleTemplate
  | MediaLiveEventBridgeRuleTemplateGroup
  | MediaLiveInput
  | MediaLiveInputSecurityGroup
  | MediaLiveMultiplex
  | MediaLiveMultiplexprogram
  | MediaLiveNetwork
  | MediaLiveSdiSource
  | MediaLiveSignalMap
  | MediaPackageAsset
  | MediaPackageChannel
  | MediaPackageOriginEndpoint
  | MediaPackagePackagingConfiguration
  | MediaPackagePackagingGroup
  | MediaPackageV2Channel
  | MediaPackageV2ChannelGroup
  | MediaPackageV2ChannelPolicy
  | MediaPackageV2OriginEndpoint
  | MediaPackageV2OriginEndpointPolicy
  | MediaTailorChannel
  | MediaTailorChannelPolicy
  | MediaTailorLiveSource
  | MediaTailorPlaybackConfiguration
  | MediaTailorSourceLocation
  | MediaTailorVodSource
  | MediaStoreContainer
  | AmazonMQBroker
  | AmazonMQConfiguration
  | AmazonMQConfigurationAssociation
  | MemoryDBACL
  | MemoryDBCluster
  | MemoryDBParameterGroup
  | MemoryDBSubnetGroup
  | MemoryDBUser
  | MSKBatchScramSecret
  | MSKCluster
  | MSKClusterPolicy
  | MSKConfiguration
  | MSKReplicator
  | MSKServerlessCluster
  | MSKVpcConnection
  | KafkaConnectConnector
  | KafkaConnectCustomPlugin
  | KafkaConnectWorkerConfiguration
  | MWAAEnvironment
  | NeptuneDBCluster
  | NeptuneDBClusterParameterGroup
  | NeptuneDBInstance
  | NeptuneDBParameterGroup
  | NeptuneDBSubnetGroup
  | NeptuneEventSubscription
  | NeptuneGraphGraph
  | NeptuneGraphPrivateGraphEndpoint
  | NetworkFirewallFirewall
  | NetworkFirewallFirewallPolicy
  | NetworkFirewallLoggingConfiguration
  | NetworkFirewallRuleGroup
  | NetworkFirewallTLSInspectionConfiguration
  | NetworkManagerConnectAttachment
  | NetworkManagerConnectPeer
  | NetworkManagerCoreNetwork
  | NetworkManagerCustomerGatewayAssociation
  | NetworkManagerDevice
  | NetworkManagerGlobalNetwork
  | NetworkManagerLink
  | NetworkManagerLinkAssociation
  | NetworkManagerSite
  | NetworkManagerSiteToSiteVpnAttachment
  | NetworkManagerTransitGatewayPeering
  | NetworkManagerTransitGatewayRegistration
  | NetworkManagerTransitGatewayRouteTableAttachment
  | NetworkManagerVpcAttachment
  | NimbleStudioLaunchProfile
  | NimbleStudioStreamingImage
  | NimbleStudioStudio
  | NimbleStudioStudioComponent
  | OamLink
  | OamSink
  | OmicsAnnotationStore
  | OmicsReferenceStore
  | OmicsRunGroup
  | OmicsSequenceStore
  | OmicsVariantStore
  | OmicsWorkflow
  | OSISPipeline
  | OpenSearchServiceDomain
  | ElasticsearchDomain
  | OpenSearchServerlessAccessPolicy
  | OpenSearchServerlessCollection
  | OpenSearchServerlessLifecyclePolicy
  | OpenSearchServerlessSecurityConfig
  | OpenSearchServerlessSecurityPolicy
  | OpenSearchServerlessVpcEndpoint
  | OpsWorksApp
  | OpsWorksElasticLoadBalancerAttachment
  | OpsWorksInstance
  | OpsWorksLayer
  | OpsWorksStack
  | OpsWorksUserProfile
  | OpsWorksVolume
  | OpsWorksCMServer
  | OrganizationsAccount
  | OrganizationsOrganization
  | OrganizationsOrganizationalUnit
  | OrganizationsPolicy
  | OrganizationsResourcePolicy
  | PanoramaApplicationInstance
  | PanoramaPackage
  | PanoramaPackageVersion
  | PaymentCryptographyAlias
  | PaymentCryptographyKey
  | PersonalizeDataset
  | PersonalizeDatasetGroup
  | PersonalizeSchema
  | PersonalizeSolution
  | PinpointADMChannel
  | PinpointAPNSChannel
  | PinpointAPNSSandboxChannel
  | PinpointAPNSVoipChannel
  | PinpointAPNSVoipSandboxChannel
  | PinpointApp
  | PinpointApplicationSettings
  | PinpointBaiduChannel
  | PinpointCampaign
  | PinpointEmailChannel
  | PinpointEmailTemplate
  | PinpointEventStream
  | PinpointGCMChannel
  | PinpointInAppTemplate
  | PinpointPushTemplate
  | PinpointSegment
  | PinpointSMSChannel
  | PinpointSmsTemplate
  | PinpointVoiceChannel
  | PinpointEmailConfigurationSet
  | PinpointEmailConfigurationSetEventDestination
  | PinpointEmailDedicatedIpPool
  | PinpointEmailIdentity
  | ACMPCACertificate
  | ACMPCACertificateAuthority
  | ACMPCACertificateAuthorityActivation
  | ACMPCAPermission
  | PCAConnectorADConnector
  | PCAConnectorADDirectoryRegistration
  | PCAConnectorADServicePrincipalName
  | PCAConnectorADTemplate
  | PCAConnectorADTemplateGroupAccessControlEntry
  | PCAConnectorSCEPChallenge
  | PCAConnectorSCEPConnector
  | ProtonEnvironmentAccountConnection
  | ProtonEnvironmentTemplate
  | ProtonServiceTemplate
  | APSRuleGroupsNamespace
  | APSScraper
  | APSWorkspace
  | QBusinessApplication
  | QBusinessDataSource
  | QBusinessIndex
  | QBusinessPlugin
  | QBusinessRetriever
  | QBusinessWebExperience
  | QLDBLedger
  | QLDBStream
  | QuickSightAnalysis
  | QuickSightDashboard
  | QuickSightDataSet
  | QuickSightDataSource
  | QuickSightRefreshSchedule
  | QuickSightTemplate
  | QuickSightTheme
  | QuickSightTopic
  | QuickSightVPCConnection
  | RAMPermission
  | RAMResourceShare
  | RDSCustomDBEngineVersion
  | RDSDBCluster
  | RDSDBClusterParameterGroup
  | RDSDBInstance
  | RDSDBParameterGroup
  | RDSDBProxy
  | RDSDBProxyEndpoint
  | RDSDBProxyTargetGroup
  | RDSDBSecurityGroup
  | RDSDBSecurityGroupIngress
  | RDSDBSubnetGroup
  | RDSEventSubscription
  | RDSGlobalCluster
  | RDSIntegration
  | RDSOptionGroup
  | RedshiftCluster
  | RedshiftClusterParameterGroup
  | RedshiftClusterSecurityGroup
  | RedshiftClusterSecurityGroupIngress
  | RedshiftClusterSubnetGroup
  | RedshiftEndpointAccess
  | RedshiftEndpointAuthorization
  | RedshiftEventSubscription
  | RedshiftScheduledAction
  | RedshiftServerlessNamespace
  | RedshiftServerlessWorkgroup
  | RefactorSpacesApplication
  | RefactorSpacesEnvironment
  | RefactorSpacesRoute
  | RefactorSpacesService
  | RekognitionCollection
  | RekognitionProject
  | RekognitionStreamProcessor
  | ResilienceHubApp
  | ResilienceHubResiliencyPolicy
  | ResourceExplorer2DefaultViewAssociation
  | ResourceExplorer2Index
  | ResourceExplorer2View
  | ResourceGroupsGroup
  | RoboMakerFleet
  | RoboMakerRobot
  | RoboMakerRobotApplication
  | RoboMakerRobotApplicationVersion
  | RoboMakerSimulationApplication
  | RoboMakerSimulationApplicationVersion
  | RolesAnywhereCRL
  | RolesAnywhereProfile
  | RolesAnywhereTrustAnchor
  | Route53CidrCollection
  | Route53DNSSEC
  | Route53HealthCheck
  | Route53HostedZone
  | Route53KeySigningKey
  | Route53RecordSet
  | Route53RecordSetGroup
  | Route53RecoveryControlCluster
  | Route53RecoveryControlControlPanel
  | Route53RecoveryControlRoutingControl
  | Route53RecoveryControlSafetyRule
  | Route53RecoveryReadinessCell
  | Route53RecoveryReadinessReadinessCheck
  | Route53RecoveryReadinessRecoveryGroup
  | Route53RecoveryReadinessResourceSet
  | Route53ResolverFirewallDomainList
  | Route53ResolverFirewallRuleGroup
  | Route53ResolverFirewallRuleGroupAssociation
  | Route53ResolverOutpostResolver
  | Route53ResolverResolverConfig
  | Route53ResolverResolverDNSSECConfig
  | Route53ResolverResolverEndpoint
  | Route53ResolverResolverQueryLoggingConfig
  | Route53ResolverResolverQueryLoggingConfigAssociation
  | Route53ResolverResolverRule
  | Route53ResolverResolverRuleAssociation
  | Route53ProfilesProfile
  | Route53ProfilesProfileAssociation
  | Route53ProfilesProfileResourceAssociation
  | RUMAppMonitor
  | S3AccessGrant
  | S3AccessGrantsInstance
  | S3AccessGrantsLocation
  | S3AccessPoint
  | S3Bucket
  | S3BucketPolicy
  | S3MultiRegionAccessPoint
  | S3MultiRegionAccessPointPolicy
  | S3StorageLens
  | S3StorageLensGroup
  | S3ExpressBucketPolicy
  | S3ExpressDirectoryBucket
  | S3ObjectLambdaAccessPoint
  | S3ObjectLambdaAccessPointPolicy
  | S3OutpostsAccessPoint
  | S3OutpostsBucket
  | S3OutpostsBucketPolicy
  | S3OutpostsEndpoint
  | SageMakerApp
  | SageMakerAppImageConfig
  | SageMakerCluster
  | SageMakerCodeRepository
  | SageMakerDataQualityJobDefinition
  | SageMakerDevice
  | SageMakerDeviceFleet
  | SageMakerDomain
  | SageMakerEndpoint
  | SageMakerEndpointConfig
  | SageMakerFeatureGroup
  | SageMakerImage
  | SageMakerImageVersion
  | SageMakerInferenceComponent
  | SageMakerInferenceExperiment
  | SageMakerMlflowTrackingServer
  | SageMakerModel
  | SageMakerModelBiasJobDefinition
  | SageMakerModelCard
  | SageMakerModelExplainabilityJobDefinition
  | SageMakerModelPackage
  | SageMakerModelPackageGroup
  | SageMakerModelQualityJobDefinition
  | SageMakerMonitoringSchedule
  | SageMakerNotebookInstance
  | SageMakerNotebookInstanceLifecycleConfig
  | SageMakerPipeline
  | SageMakerProject
  | SageMakerSpace
  | SageMakerStudioLifecycleConfig
  | SageMakerUserProfile
  | SageMakerWorkteam
  | SecretsManagerResourcePolicy
  | SecretsManagerRotationSchedule
  | SecretsManagerSecret
  | SecretsManagerSecretTargetAttachment
  | SecurityLakeAwsLogSource
  | SecurityLakeDataLake
  | SecurityLakeSubscriber
  | SecurityLakeSubscriberNotification
  | ServiceCatalogAcceptedPortfolioShare
  | ServiceCatalogCloudFormationProduct
  | ServiceCatalogCloudFormationProvisionedProduct
  | ServiceCatalogLaunchNotificationConstraint
  | ServiceCatalogLaunchRoleConstraint
  | ServiceCatalogLaunchTemplateConstraint
  | ServiceCatalogPortfolio
  | ServiceCatalogPortfolioPrincipalAssociation
  | ServiceCatalogPortfolioProductAssociation
  | ServiceCatalogPortfolioShare
  | ServiceCatalogResourceUpdateConstraint
  | ServiceCatalogServiceAction
  | ServiceCatalogServiceActionAssociation
  | ServiceCatalogStackSetConstraint
  | ServiceCatalogTagOption
  | ServiceCatalogTagOptionAssociation
  | ServiceCatalogAppRegistryApplication
  | ServiceCatalogAppRegistryAttributeGroup
  | ServiceCatalogAppRegistryAttributeGroupAssociation
  | ServiceCatalogAppRegistryResourceAssociation
  | SecurityHubAutomationRule
  | SecurityHubConfigurationPolicy
  | SecurityHubDelegatedAdmin
  | SecurityHubFindingAggregator
  | SecurityHubHub
  | SecurityHubInsight
  | SecurityHubOrganizationConfiguration
  | SecurityHubPolicyAssociation
  | SecurityHubProductSubscription
  | SecurityHubSecurityControl
  | SecurityHubStandard
  | SESConfigurationSet
  | SESConfigurationSetEventDestination
  | SESContactList
  | SESDedicatedIpPool
  | SESEmailIdentity
  | SESMailManagerAddonInstance
  | SESMailManagerAddonSubscription
  | SESMailManagerArchive
  | SESMailManagerIngressPoint
  | SESMailManagerRelay
  | SESMailManagerRuleSet
  | SESMailManagerTrafficPolicy
  | SESReceiptFilter
  | SESReceiptRule
  | SESReceiptRuleSet
  | SESTemplate
  | SESVdmAttributes
  | SDBDomain
  | ShieldDRTAccess
  | ShieldProactiveEngagement
  | ShieldProtection
  | ShieldProtectionGroup
  | SignerProfilePermission
  | SignerSigningProfile
  | SimSpaceWeaverSimulation
  | SNSSubscription
  | SNSTopic
  | SNSTopicInlinePolicy
  | SNSTopicPolicy
  | SQSQueue
  | SQSQueueInlinePolicy
  | SQSQueuePolicy
  | StepFunctionsActivity
  | StepFunctionsStateMachine
  | StepFunctionsStateMachineAlias
  | StepFunctionsStateMachineVersion
  | SSMAssociation
  | SSMDocument
  | SSMMaintenanceWindow
  | SSMMaintenanceWindowTarget
  | SSMMaintenanceWindowTask
  | SSMParameter
  | SSMPatchBaseline
  | SSMResourceDataSync
  | SSMResourcePolicy
  | SSMQuickSetupConfigurationManager
  | SupportAppAccountAlias
  | SupportAppSlackChannelConfiguration
  | SupportAppSlackWorkspaceConfiguration
  | SystemsManagerSAPApplication
  | TimestreamDatabase
  | TimestreamInfluxDBInstance
  | TimestreamScheduledQuery
  | TimestreamTable
  | TransferAgreement
  | TransferCertificate
  | TransferConnector
  | TransferProfile
  | TransferServer
  | TransferUser
  | TransferWorkflow
  | VerifiedPermissionsIdentitySource
  | VerifiedPermissionsPolicy
  | VerifiedPermissionsPolicyStore
  | VerifiedPermissionsPolicyTemplate
  | VoiceIDDomain
  | VpcLatticeAccessLogSubscription
  | VpcLatticeAuthPolicy
  | VpcLatticeListener
  | VpcLatticeResourcePolicy
  | VpcLatticeRule
  | VpcLatticeService
  | VpcLatticeServiceNetwork
  | VpcLatticeServiceNetworkServiceAssociation
  | VpcLatticeServiceNetworkVpcAssociation
  | VpcLatticeTargetGroup
  | WAFByteMatchSet
  | WAFIPSet
  | WAFRule
  | WAFSizeConstraintSet
  | WAFSqlInjectionMatchSet
  | WAFWebACL
  | WAFXssMatchSet
  | WAFRegionalByteMatchSet
  | WAFRegionalGeoMatchSet
  | WAFRegionalIPSet
  | WAFRegionalRateBasedRule
  | WAFRegionalRegexPatternSet
  | WAFRegionalRule
  | WAFRegionalSizeConstraintSet
  | WAFRegionalSqlInjectionMatchSet
  | WAFRegionalWebACL
  | WAFRegionalWebACLAssociation
  | WAFRegionalXssMatchSet
  | WAFv2IPSet
  | WAFv2LoggingConfiguration
  | WAFv2RegexPatternSet
  | WAFv2RuleGroup
  | WAFv2WebACL
  | WAFv2WebACLAssociation
  | WisdomAssistant
  | WisdomAssistantAssociation
  | WisdomKnowledgeBase
  | WorkSpacesConnectionAlias
  | WorkSpacesWorkspace
  | WorkSpacesWorkspacesPool
  | WorkSpacesThinClientEnvironment
  | WorkSpacesWebBrowserSettings
  | WorkSpacesWebIdentityProvider
  | WorkSpacesWebIpAccessSettings
  | WorkSpacesWebNetworkSettings
  | WorkSpacesWebPortal
  | WorkSpacesWebTrustStore
  | WorkSpacesWebUserAccessLoggingSettings
  | WorkSpacesWebUserSettings
  | XRayGroup
  | XRayResourcePolicy
  | XRaySamplingRule
