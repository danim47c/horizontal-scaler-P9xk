import { GraphQLClient } from "graphql-request";
import * as Dom from "graphql-request/dist/types.dom";
import gql from "graphql-tag";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. BigInt can represent values between -(2^53) + 1 and 2^53 - 1.  */
  BigInt: any;
  DateTime: any;
  Json: any;
};

export type AccessRule = {
  __typename?: "AccessRule";
  disallowed?: Maybe<Scalars["String"]>;
};

export type AllDomains = {
  __typename?: "AllDomains";
  customDomains: Array<CustomDomain>;
  serviceDomains: Array<ServiceDomain>;
  suggestedServiceDomain: Scalars["String"];
};

export type BanReasonHistory = {
  __typename?: "BanReasonHistory";
  actor?: Maybe<User>;
  banReason?: Maybe<Scalars["String"]>;
  createdAt: Scalars["DateTime"];
  id: Scalars["String"];
};

export type BanReasonHistoryListRelationFilter = {
  every?: InputMaybe<BanReasonHistoryWhereInput>;
  none?: InputMaybe<BanReasonHistoryWhereInput>;
  some?: InputMaybe<BanReasonHistoryWhereInput>;
};

export type BanReasonHistoryOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
  count?: InputMaybe<SortOrder>;
};

export type BanReasonHistoryWhereInput = {
  AND?: InputMaybe<Array<BanReasonHistoryWhereInput>>;
  NOT?: InputMaybe<Array<BanReasonHistoryWhereInput>>;
  OR?: InputMaybe<Array<BanReasonHistoryWhereInput>>;
  actor?: InputMaybe<UserWhereInput>;
  actorId?: InputMaybe<StringNullableFilter>;
  banReason?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserWhereInput>;
  userId?: InputMaybe<StringFilter>;
};

export type BatchEvent = {
  eventName: Scalars["String"];
  properties?: InputMaybe<Scalars["Json"]>;
  ts: Scalars["String"];
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars["Boolean"]>;
  not?: InputMaybe<NestedBoolFilter>;
};

export enum Builder {
  Heroku = "HEROKU",
  Nixpacks = "NIXPACKS",
  Paketo = "PAKETO",
}

export type CnameCheck = {
  __typename?: "CnameCheck";
  link?: Maybe<Scalars["String"]>;
  message: Scalars["String"];
  status: CnameCheckStatus;
};

export enum CnameCheckStatus {
  Error = "ERROR",
  Info = "INFO",
  Invalid = "INVALID",
  Valid = "VALID",
  Waiting = "WAITING",
}

export type ContainerInfo = {
  __typename?: "ContainerInfo";
  internalPorts: Array<Scalars["String"]>;
};

export type ContainerListRelationFilter = {
  every?: InputMaybe<ContainerWhereInput>;
  none?: InputMaybe<ContainerWhereInput>;
  some?: InputMaybe<ContainerWhereInput>;
};

export type ContainerOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
  count?: InputMaybe<SortOrder>;
};

export type ContainerWhereInput = {
  AND?: InputMaybe<Array<ContainerWhereInput>>;
  NOT?: InputMaybe<Array<ContainerWhereInput>>;
  OR?: InputMaybe<Array<ContainerWhereInput>>;
  containerId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  environment?: InputMaybe<EnvironmentWhereInput>;
  environmentId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  plugin?: InputMaybe<PluginWhereInput>;
  pluginId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type CreateProjectFromTemplateResult = {
  __typename?: "CreateProjectFromTemplateResult";
  projectId: Scalars["String"];
  workflowId: Scalars["String"];
};

export type Credit = {
  __typename?: "Credit";
  amount: Scalars["Int"];
  createdAt: Scalars["DateTime"];
  id: Scalars["String"];
  memo?: Maybe<Scalars["String"]>;
  type: CreditType;
  updatedAt: Scalars["DateTime"];
};

export type CreditListRelationFilter = {
  every?: InputMaybe<CreditWhereInput>;
  none?: InputMaybe<CreditWhereInput>;
  some?: InputMaybe<CreditWhereInput>;
};

export type CreditOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
  count?: InputMaybe<SortOrder>;
};

export type CreditOrderByWithRelationInput = {
  amount?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  customer?: InputMaybe<CustomerOrderByWithRelationInput>;
  customerId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  memo?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum CreditType {
  Applied = "APPLIED",
  Credit = "CREDIT",
  Debit = "DEBIT",
  Stripe = "STRIPE",
}

export type CreditWhereInput = {
  AND?: InputMaybe<Array<CreditWhereInput>>;
  NOT?: InputMaybe<Array<CreditWhereInput>>;
  OR?: InputMaybe<Array<CreditWhereInput>>;
  amount?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  customer?: InputMaybe<CustomerWhereInput>;
  customerId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  memo?: InputMaybe<StringNullableFilter>;
  type?: InputMaybe<EnumCreditTypeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type CreditWhereUniqueInput = {
  id?: InputMaybe<Scalars["String"]>;
};

export type CustomDomain = {
  __typename?: "CustomDomain";
  cnameCheck: CnameCheck;
  createdAt: Scalars["DateTime"];
  deletedAt?: Maybe<Scalars["DateTime"]>;
  domain: Scalars["String"];
  environmentId: Scalars["String"];
  id: Scalars["String"];
  serviceId?: Maybe<Scalars["String"]>;
  updatedAt: Scalars["DateTime"];
};

export type CustomDomainDomainDeletedAtCompoundUniqueInput = {
  deletedAt: Scalars["DateTime"];
  domain: Scalars["String"];
};

export type CustomDomainListRelationFilter = {
  every?: InputMaybe<CustomDomainWhereInput>;
  none?: InputMaybe<CustomDomainWhereInput>;
  some?: InputMaybe<CustomDomainWhereInput>;
};

export type CustomDomainOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
  count?: InputMaybe<SortOrder>;
};

export type CustomDomainWhereInput = {
  AND?: InputMaybe<Array<CustomDomainWhereInput>>;
  NOT?: InputMaybe<Array<CustomDomainWhereInput>>;
  OR?: InputMaybe<Array<CustomDomainWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  domain?: InputMaybe<StringFilter>;
  environment?: InputMaybe<EnvironmentWhereInput>;
  environmentId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  service?: InputMaybe<ServiceWhereInput>;
  serviceId?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type CustomDomainWhereUniqueInput = {
  domain_deletedAt?: InputMaybe<CustomDomainDomainDeletedAtCompoundUniqueInput>;
  id?: InputMaybe<Scalars["String"]>;
};

export type Customer = {
  __typename?: "Customer";
  appliedCredits: Scalars["Float"];
  billingEmail?: Maybe<Scalars["String"]>;
  creditBalance: Scalars["Float"];
  credits: Array<Credit>;
  defaultPaymentMethod?: Maybe<PaymentMethod>;
  id: Scalars["String"];
  invoices: Array<CustomerInvoice>;
  isUsageSubscriber: Scalars["Boolean"];
  remainingUsageCreditBalance: Scalars["Float"];
  state: SubscriptionState;
  stripeCustomerId: Scalars["String"];
  stripePaymentMethodId?: Maybe<Scalars["String"]>;
  subscriptions: Array<CustomerSubscription>;
  teamId?: Maybe<Scalars["String"]>;
  usageLimit?: Maybe<Scalars["Float"]>;
  userId?: Maybe<Scalars["String"]>;
};

export type CustomerCreditsArgs = {
  after?: InputMaybe<CreditWhereUniqueInput>;
  before?: InputMaybe<CreditWhereUniqueInput>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<CreditOrderByWithRelationInput>>;
};

export type CustomerInvoice = {
  __typename?: "CustomerInvoice";
  amountPaid: Scalars["Float"];
  hostedURL?: Maybe<Scalars["String"]>;
  invoiceId: Scalars["String"];
  items: Array<SubscriptionItem>;
  paymentIntentStatus?: Maybe<Scalars["String"]>;
  pdfURL?: Maybe<Scalars["String"]>;
  periodEnd: Scalars["String"];
  periodStart: Scalars["String"];
  status?: Maybe<Scalars["String"]>;
  subscriptionId?: Maybe<Scalars["String"]>;
  total: Scalars["Int"];
};

export type CustomerOrderByWithRelationInput = {
  contributions?: InputMaybe<PartnerPayoutOrderByRelationAggregateInput>;
  credits?: InputMaybe<CreditOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  partnerProjects?: InputMaybe<PartnerProjectOrderByRelationAggregateInput>;
  state?: InputMaybe<SortOrder>;
  stripeCustomerId?: InputMaybe<SortOrder>;
  team?: InputMaybe<TeamOrderByWithRelationInput>;
  teamId?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export type CustomerSubscription = {
  __typename?: "CustomerSubscription";
  cancelAt?: Maybe<Scalars["String"]>;
  couponId?: Maybe<Scalars["String"]>;
  id: Scalars["String"];
  items: Array<SubscriptionItem>;
  latestInvoiceId: Scalars["String"];
  nextInvoiceCurrentTotal: Scalars["Int"];
  nextInvoiceDate: Scalars["String"];
  status: Scalars["String"];
};

export type CustomerWhereInput = {
  AND?: InputMaybe<Array<CustomerWhereInput>>;
  NOT?: InputMaybe<Array<CustomerWhereInput>>;
  OR?: InputMaybe<Array<CustomerWhereInput>>;
  contributions?: InputMaybe<PartnerPayoutListRelationFilter>;
  credits?: InputMaybe<CreditListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  partnerProjects?: InputMaybe<PartnerProjectListRelationFilter>;
  state?: InputMaybe<EnumSubscriptionStateFilter>;
  stripeCustomerId?: InputMaybe<StringFilter>;
  team?: InputMaybe<TeamWhereInput>;
  teamId?: InputMaybe<StringNullableFilter>;
  user?: InputMaybe<UserWhereInput>;
  userId?: InputMaybe<StringNullableFilter>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars["DateTime"]>;
  gt?: InputMaybe<Scalars["DateTime"]>;
  gte?: InputMaybe<Scalars["DateTime"]>;
  in?: InputMaybe<Array<Scalars["DateTime"]>>;
  lt?: InputMaybe<Scalars["DateTime"]>;
  lte?: InputMaybe<Scalars["DateTime"]>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars["DateTime"]>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars["DateTime"]>;
  gt?: InputMaybe<Scalars["DateTime"]>;
  gte?: InputMaybe<Scalars["DateTime"]>;
  in?: InputMaybe<Array<Scalars["DateTime"]>>;
  lt?: InputMaybe<Scalars["DateTime"]>;
  lte?: InputMaybe<Scalars["DateTime"]>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["DateTime"]>>;
};

export enum DeployStatus {
  Building = "BUILDING",
  Crashed = "CRASHED",
  Deploying = "DEPLOYING",
  Failed = "FAILED",
  Initializing = "INITIALIZING",
  Removed = "REMOVED",
  Removing = "REMOVING",
  Skipped = "SKIPPED",
  Success = "SUCCESS",
}

export type Deployment = {
  __typename?: "Deployment";
  buildLogs: Scalars["String"];
  canRollback: Scalars["Boolean"];
  containerId?: Maybe<Scalars["String"]>;
  containerInfo: ContainerInfo;
  createdAt: Scalars["DateTime"];
  creator?: Maybe<User>;
  creatorId?: Maybe<Scalars["String"]>;
  deployLogs: Scalars["String"];
  environment: Environment;
  environmentId: Scalars["String"];
  id: Scalars["String"];
  meta?: Maybe<Scalars["Json"]>;
  project: Project;
  projectId: Scalars["String"];
  serviceId?: Maybe<Scalars["String"]>;
  snapshotId?: Maybe<Scalars["String"]>;
  staticUrl?: Maybe<Scalars["String"]>;
  status: DeploymentStatus;
  suggestAddServiceDomain: Scalars["Boolean"];
  url?: Maybe<Scalars["String"]>;
};

export type DeploymentDeployLogsArgs = {
  filter?: InputMaybe<Scalars["String"]>;
};

export type DeploymentByDomain = {
  __typename?: "DeploymentByDomain";
  activeDeployment?: Maybe<Deployment>;
  latestDeployment?: Maybe<Deployment>;
  projectId?: Maybe<Scalars["String"]>;
};

export type DeploymentConnection = {
  __typename?: "DeploymentConnection";
  nodes: Array<Deployment>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type DeploymentListRelationFilter = {
  every?: InputMaybe<DeploymentWhereInput>;
  none?: InputMaybe<DeploymentWhereInput>;
  some?: InputMaybe<DeploymentWhereInput>;
};

export type DeploymentListWhereInput = {
  environmentId?: InputMaybe<Scalars["ID"]>;
  projectId?: InputMaybe<Scalars["ID"]>;
  serviceId?: InputMaybe<Scalars["ID"]>;
  status?: InputMaybe<DeploymentStatusInput>;
};

export type DeploymentOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
  count?: InputMaybe<SortOrder>;
};

export type DeploymentOrderByWithRelationInput = {
  containerId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  creator?: InputMaybe<UserOrderByWithRelationInput>;
  creatorId?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  environment?: InputMaybe<EnvironmentOrderByWithRelationInput>;
  environmentId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  meta?: InputMaybe<SortOrder>;
  project?: InputMaybe<ProjectOrderByWithRelationInput>;
  projectId?: InputMaybe<SortOrder>;
  service?: InputMaybe<ServiceOrderByWithRelationInput>;
  serviceId?: InputMaybe<SortOrder>;
  snapshot?: InputMaybe<DeploymentSnapshotOrderByWithRelationInput>;
  snapshotId?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type DeploymentSnapshot = {
  __typename?: "DeploymentSnapshot";
  createdAt: Scalars["DateTime"];
  id: Scalars["String"];
  updatedAt: Scalars["DateTime"];
};

export type DeploymentSnapshotOrderByWithRelationInput = {
  codeUri?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deployments?: InputMaybe<DeploymentOrderByRelationAggregateInput>;
  encryptedVariables?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imageTag?: InputMaybe<SortOrder>;
  imageType?: InputMaybe<SortOrder>;
  imageUri?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type DeploymentSnapshotWhereInput = {
  AND?: InputMaybe<Array<DeploymentSnapshotWhereInput>>;
  NOT?: InputMaybe<Array<DeploymentSnapshotWhereInput>>;
  OR?: InputMaybe<Array<DeploymentSnapshotWhereInput>>;
  codeUri?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deployments?: InputMaybe<DeploymentListRelationFilter>;
  encryptedVariables?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  imageTag?: InputMaybe<StringNullableFilter>;
  imageType?: InputMaybe<EnumImageTypeNullableFilter>;
  imageUri?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export enum DeploymentStatus {
  Building = "BUILDING",
  Crashed = "CRASHED",
  Deploying = "DEPLOYING",
  Failed = "FAILED",
  Initializing = "INITIALIZING",
  Removed = "REMOVED",
  Removing = "REMOVING",
  Skipped = "SKIPPED",
  Success = "SUCCESS",
}

export type DeploymentStatusInput = {
  in?: InputMaybe<Array<DeployStatus>>;
  notIn?: InputMaybe<Array<DeployStatus>>;
};

export type DeploymentTrigger = {
  __typename?: "DeploymentTrigger";
  baseEnvironmentOverride?: Maybe<Environment>;
  baseEnvironmentOverrideId?: Maybe<Scalars["String"]>;
  branch: Scalars["String"];
  environmentId: Scalars["String"];
  id: Scalars["String"];
  projectId: Scalars["String"];
  provider: Scalars["String"];
  repository: Scalars["String"];
  serviceId?: Maybe<Scalars["String"]>;
};

export type DeploymentTriggerListRelationFilter = {
  every?: InputMaybe<DeploymentTriggerWhereInput>;
  none?: InputMaybe<DeploymentTriggerWhereInput>;
  some?: InputMaybe<DeploymentTriggerWhereInput>;
};

export type DeploymentTriggerOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
  count?: InputMaybe<SortOrder>;
};

export type DeploymentTriggerWhereInput = {
  AND?: InputMaybe<Array<DeploymentTriggerWhereInput>>;
  NOT?: InputMaybe<Array<DeploymentTriggerWhereInput>>;
  OR?: InputMaybe<Array<DeploymentTriggerWhereInput>>;
  baseEnvironmentOverride?: InputMaybe<EnvironmentWhereInput>;
  baseEnvironmentOverrideId?: InputMaybe<StringNullableFilter>;
  branch?: InputMaybe<StringFilter>;
  environment?: InputMaybe<EnvironmentWhereInput>;
  environmentId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  project?: InputMaybe<ProjectWhereInput>;
  projectId?: InputMaybe<StringFilter>;
  provider?: InputMaybe<StringFilter>;
  repository?: InputMaybe<StringFilter>;
  service?: InputMaybe<ServiceWhereInput>;
  serviceId?: InputMaybe<StringNullableFilter>;
};

export type DeploymentTriggerWhereUniqueInput = {
  id?: InputMaybe<Scalars["String"]>;
};

export type DeploymentUsage = {
  __typename?: "DeploymentUsage";
  currentUsage: UsageItem;
  deploymentId: Scalars["ID"];
  endDate: Scalars["String"];
  environmentId: Scalars["ID"];
  estimatedUsage: UsageItem;
  serviceId: Scalars["ID"];
  startDate: Scalars["String"];
};

export type DeploymentWhereInput = {
  AND?: InputMaybe<Array<DeploymentWhereInput>>;
  NOT?: InputMaybe<Array<DeploymentWhereInput>>;
  OR?: InputMaybe<Array<DeploymentWhereInput>>;
  containerId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  creator?: InputMaybe<UserWhereInput>;
  creatorId?: InputMaybe<StringNullableFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  environment?: InputMaybe<EnvironmentWhereInput>;
  environmentId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  meta?: InputMaybe<JsonNullableFilter>;
  project?: InputMaybe<ProjectWhereInput>;
  projectId?: InputMaybe<StringFilter>;
  service?: InputMaybe<ServiceWhereInput>;
  serviceId?: InputMaybe<StringNullableFilter>;
  snapshot?: InputMaybe<DeploymentSnapshotWhereInput>;
  snapshotId?: InputMaybe<StringNullableFilter>;
  status?: InputMaybe<EnumDeploymentStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  url?: InputMaybe<StringNullableFilter>;
};

export type DeploymentWhereUniqueInput = {
  containerId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
};

export type DeploymentWithMetrics = {
  __typename?: "DeploymentWithMetrics";
  deployment: Deployment;
  metrics: Array<Metric>;
};

export type DomainAvailable = {
  __typename?: "DomainAvailable";
  available: Scalars["Boolean"];
  message: Scalars["String"];
};

export type EmailTemplate = {
  __typename?: "EmailTemplate";
  active: Scalars["Boolean"];
  name: Scalars["String"];
  templateId: Scalars["Int"];
};

export type EnumBuilderFilter = {
  equals?: InputMaybe<Builder>;
  in?: InputMaybe<Array<Builder>>;
  not?: InputMaybe<NestedEnumBuilderFilter>;
  notIn?: InputMaybe<Array<Builder>>;
};

export type EnumCreditTypeFilter = {
  equals?: InputMaybe<CreditType>;
  in?: InputMaybe<Array<CreditType>>;
  not?: InputMaybe<NestedEnumCreditTypeFilter>;
  notIn?: InputMaybe<Array<CreditType>>;
};

export type EnumDeploymentStatusFilter = {
  equals?: InputMaybe<DeploymentStatus>;
  in?: InputMaybe<Array<DeploymentStatus>>;
  not?: InputMaybe<NestedEnumDeploymentStatusFilter>;
  notIn?: InputMaybe<Array<DeploymentStatus>>;
};

export type EnumImageTypeNullableFilter = {
  equals?: InputMaybe<ImageType>;
  in?: InputMaybe<Array<ImageType>>;
  not?: InputMaybe<NestedEnumImageTypeNullableFilter>;
  notIn?: InputMaybe<Array<ImageType>>;
};

export type EnumPartnerProjectStatusFilter = {
  equals?: InputMaybe<PartnerProjectStatus>;
  in?: InputMaybe<Array<PartnerProjectStatus>>;
  not?: InputMaybe<NestedEnumPartnerProjectStatusFilter>;
  notIn?: InputMaybe<Array<PartnerProjectStatus>>;
};

export type EnumPlanFilter = {
  equals?: InputMaybe<Plan>;
  in?: InputMaybe<Array<Plan>>;
  not?: InputMaybe<NestedEnumPlanFilter>;
  notIn?: InputMaybe<Array<Plan>>;
};

export type EnumPluginStatusFilter = {
  equals?: InputMaybe<PluginStatus>;
  in?: InputMaybe<Array<PluginStatus>>;
  not?: InputMaybe<NestedEnumPluginStatusFilter>;
  notIn?: InputMaybe<Array<PluginStatus>>;
};

export type EnumPluginTypeFilter = {
  equals?: InputMaybe<PluginType>;
  in?: InputMaybe<Array<PluginType>>;
  not?: InputMaybe<NestedEnumPluginTypeFilter>;
  notIn?: InputMaybe<Array<PluginType>>;
};

export type EnumProjectRoleFilter = {
  equals?: InputMaybe<ProjectRole>;
  in?: InputMaybe<Array<ProjectRole>>;
  not?: InputMaybe<NestedEnumProjectRoleFilter>;
  notIn?: InputMaybe<Array<ProjectRole>>;
};

export type EnumReferralStatusFilter = {
  equals?: InputMaybe<ReferralStatus>;
  in?: InputMaybe<Array<ReferralStatus>>;
  not?: InputMaybe<NestedEnumReferralStatusFilter>;
  notIn?: InputMaybe<Array<ReferralStatus>>;
};

export type EnumRegistrationStatusFilter = {
  equals?: InputMaybe<RegistrationStatus>;
  in?: InputMaybe<Array<RegistrationStatus>>;
  not?: InputMaybe<NestedEnumRegistrationStatusFilter>;
  notIn?: InputMaybe<Array<RegistrationStatus>>;
};

export type EnumRestartPolicyTypeFilter = {
  equals?: InputMaybe<RestartPolicyType>;
  in?: InputMaybe<Array<RestartPolicyType>>;
  not?: InputMaybe<NestedEnumRestartPolicyTypeFilter>;
  notIn?: InputMaybe<Array<RestartPolicyType>>;
};

export type EnumSessionTypeFilter = {
  equals?: InputMaybe<SessionType>;
  in?: InputMaybe<Array<SessionType>>;
  not?: InputMaybe<NestedEnumSessionTypeFilter>;
  notIn?: InputMaybe<Array<SessionType>>;
};

export type EnumSubscriptionStateFilter = {
  equals?: InputMaybe<SubscriptionState>;
  in?: InputMaybe<Array<SubscriptionState>>;
  not?: InputMaybe<NestedEnumSubscriptionStateFilter>;
  notIn?: InputMaybe<Array<SubscriptionState>>;
};

export type EnumTeamRoleFilter = {
  equals?: InputMaybe<TeamRole>;
  in?: InputMaybe<Array<TeamRole>>;
  not?: InputMaybe<NestedEnumTeamRoleFilter>;
  notIn?: InputMaybe<Array<TeamRole>>;
};

export type EnumVerificationAppealStatusFilter = {
  equals?: InputMaybe<VerificationAppealStatus>;
  in?: InputMaybe<Array<VerificationAppealStatus>>;
  not?: InputMaybe<NestedEnumVerificationAppealStatusFilter>;
  notIn?: InputMaybe<Array<VerificationAppealStatus>>;
};

export type Environment = {
  __typename?: "Environment";
  createdAt: Scalars["DateTime"];
  customDomains: Array<CustomDomain>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deploymentTriggers: Array<DeploymentTrigger>;
  deployments: Array<Deployment>;
  id: Scalars["String"];
  isEphemeral: Scalars["Boolean"];
  meta?: Maybe<Scalars["Json"]>;
  name: Scalars["String"];
  projectId: Scalars["String"];
  updatedAt: Scalars["DateTime"];
  variables: Array<Variable>;
};

export type EnvironmentCustomDomainsArgs = {
  after?: InputMaybe<CustomDomainWhereUniqueInput>;
  before?: InputMaybe<CustomDomainWhereUniqueInput>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type EnvironmentDeploymentTriggersArgs = {
  after?: InputMaybe<DeploymentTriggerWhereUniqueInput>;
  before?: InputMaybe<DeploymentTriggerWhereUniqueInput>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type EnvironmentDeploymentsArgs = {
  after?: InputMaybe<DeploymentWhereUniqueInput>;
  before?: InputMaybe<DeploymentWhereUniqueInput>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<DeploymentOrderByWithRelationInput>>;
  where?: InputMaybe<DeploymentWhereInput>;
};

export type EnvironmentVariablesArgs = {
  after?: InputMaybe<VariableWhereUniqueInput>;
  before?: InputMaybe<VariableWhereUniqueInput>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type EnvironmentConnection = {
  __typename?: "EnvironmentConnection";
  nodes: Array<Environment>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type EnvironmentListRelationFilter = {
  every?: InputMaybe<EnvironmentWhereInput>;
  none?: InputMaybe<EnvironmentWhereInput>;
  some?: InputMaybe<EnvironmentWhereInput>;
};

export type EnvironmentListWhereInput = {
  isEphemeral?: InputMaybe<Scalars["Boolean"]>;
  projectId?: InputMaybe<Scalars["ID"]>;
};

export type EnvironmentMetrics = {
  __typename?: "EnvironmentMetrics";
  deployments: Array<DeploymentWithMetrics>;
  plugins: Array<PluginWithMetrics>;
};

export type EnvironmentNameProjectIdCompoundUniqueInput = {
  name: Scalars["String"];
  projectId: Scalars["String"];
};

export type EnvironmentOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
  count?: InputMaybe<SortOrder>;
};

export type EnvironmentOrderByWithRelationInput = {
  Log?: InputMaybe<LogOrderByRelationAggregateInput>;
  containers?: InputMaybe<ContainerOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  customDomains?: InputMaybe<CustomDomainOrderByRelationAggregateInput>;
  deletedAt?: InputMaybe<SortOrder>;
  deploymentTriggers?: InputMaybe<DeploymentTriggerOrderByRelationAggregateInput>;
  deployments?: InputMaybe<DeploymentOrderByRelationAggregateInput>;
  environmentTokens?: InputMaybe<ProjectTokenOrderByRelationAggregateInput>;
  events?: InputMaybe<EventOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  integrations?: InputMaybe<IntegrationOrderByRelationAggregateInput>;
  isEphemeral?: InputMaybe<SortOrder>;
  meta?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  overridenTriggers?: InputMaybe<DeploymentTriggerOrderByRelationAggregateInput>;
  project?: InputMaybe<ProjectOrderByWithRelationInput>;
  projectId?: InputMaybe<SortOrder>;
  serviceDomains?: InputMaybe<ServiceDomainOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
  variables?: InputMaybe<VariableOrderByRelationAggregateInput>;
};

export type EnvironmentWhereInput = {
  AND?: InputMaybe<Array<EnvironmentWhereInput>>;
  Log?: InputMaybe<LogListRelationFilter>;
  NOT?: InputMaybe<Array<EnvironmentWhereInput>>;
  OR?: InputMaybe<Array<EnvironmentWhereInput>>;
  containers?: InputMaybe<ContainerListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  customDomains?: InputMaybe<CustomDomainListRelationFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  deploymentTriggers?: InputMaybe<DeploymentTriggerListRelationFilter>;
  deployments?: InputMaybe<DeploymentListRelationFilter>;
  environmentTokens?: InputMaybe<ProjectTokenListRelationFilter>;
  events?: InputMaybe<EventListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  integrations?: InputMaybe<IntegrationListRelationFilter>;
  isEphemeral?: InputMaybe<BoolFilter>;
  meta?: InputMaybe<JsonNullableFilter>;
  name?: InputMaybe<StringFilter>;
  overridenTriggers?: InputMaybe<DeploymentTriggerListRelationFilter>;
  project?: InputMaybe<ProjectWhereInput>;
  projectId?: InputMaybe<StringFilter>;
  serviceDomains?: InputMaybe<ServiceDomainListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  variables?: InputMaybe<VariableListRelationFilter>;
};

export type EnvironmentWhereUniqueInput = {
  id?: InputMaybe<Scalars["String"]>;
  name_projectId?: InputMaybe<EnvironmentNameProjectIdCompoundUniqueInput>;
};

export type Event = {
  __typename?: "Event";
  action: Scalars["String"];
  createdAt: Scalars["DateTime"];
  environment?: Maybe<Environment>;
  environmentId?: Maybe<Scalars["String"]>;
  id: Scalars["String"];
  object: Scalars["String"];
  payload?: Maybe<Scalars["Json"]>;
  project: Project;
  projectId: Scalars["String"];
};

export type EventListRelationFilter = {
  every?: InputMaybe<EventWhereInput>;
  none?: InputMaybe<EventWhereInput>;
  some?: InputMaybe<EventWhereInput>;
};

export type EventOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
  count?: InputMaybe<SortOrder>;
};

export type EventWhereInput = {
  AND?: InputMaybe<Array<EventWhereInput>>;
  NOT?: InputMaybe<Array<EventWhereInput>>;
  OR?: InputMaybe<Array<EventWhereInput>>;
  action?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  environment?: InputMaybe<EnvironmentWhereInput>;
  environmentId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  object?: InputMaybe<StringFilter>;
  payload?: InputMaybe<JsonNullableFilter>;
  project?: InputMaybe<ProjectWhereInput>;
  projectId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type FloatNullableFilter = {
  equals?: InputMaybe<Scalars["Float"]>;
  gt?: InputMaybe<Scalars["Float"]>;
  gte?: InputMaybe<Scalars["Float"]>;
  in?: InputMaybe<Array<Scalars["Float"]>>;
  lt?: InputMaybe<Scalars["Float"]>;
  lte?: InputMaybe<Scalars["Float"]>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["Float"]>>;
};

export type GenericPlugin = {
  __typename?: "GenericPlugin";
  createdAt: Scalars["DateTime"];
  genericPluginTokens: Array<GenericPluginToken>;
  id: Scalars["String"];
  pluginId: Scalars["String"];
  tabConfig: Array<GenericPluginTabConfiguration>;
  url: Scalars["String"];
};

export type GenericPluginGenericPluginTokensArgs = {
  after?: InputMaybe<GenericPluginTokenWhereUniqueInput>;
  before?: InputMaybe<GenericPluginTokenWhereUniqueInput>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type GenericPluginTabConfigArgs = {
  environmentId: Scalars["ID"];
};

export type GenericPluginOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  genericPluginTokens?: InputMaybe<GenericPluginTokenOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  plugin?: InputMaybe<PluginOrderByWithRelationInput>;
  pluginId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type GenericPluginTabConfiguration = {
  __typename?: "GenericPluginTabConfiguration";
  height?: Maybe<Scalars["String"]>;
  name: Scalars["String"];
  resizable?: Maybe<Scalars["Boolean"]>;
  url: Scalars["String"];
};

export type GenericPluginToken = {
  __typename?: "GenericPluginToken";
  createdAt: Scalars["DateTime"];
  displayToken: Scalars["String"];
  id: Scalars["String"];
};

export type GenericPluginTokenListRelationFilter = {
  every?: InputMaybe<GenericPluginTokenWhereInput>;
  none?: InputMaybe<GenericPluginTokenWhereInput>;
  some?: InputMaybe<GenericPluginTokenWhereInput>;
};

export type GenericPluginTokenOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
  count?: InputMaybe<SortOrder>;
};

export type GenericPluginTokenWhereInput = {
  AND?: InputMaybe<Array<GenericPluginTokenWhereInput>>;
  NOT?: InputMaybe<Array<GenericPluginTokenWhereInput>>;
  OR?: InputMaybe<Array<GenericPluginTokenWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  displayToken?: InputMaybe<StringFilter>;
  genericPlugin?: InputMaybe<GenericPluginWhereInput>;
  genericPluginId?: InputMaybe<StringFilter>;
  hashedToken?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
};

export type GenericPluginTokenWhereUniqueInput = {
  hashedToken?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
};

export type GenericPluginWhereInput = {
  AND?: InputMaybe<Array<GenericPluginWhereInput>>;
  NOT?: InputMaybe<Array<GenericPluginWhereInput>>;
  OR?: InputMaybe<Array<GenericPluginWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  genericPluginTokens?: InputMaybe<GenericPluginTokenListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  plugin?: InputMaybe<PluginWhereInput>;
  pluginId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  url?: InputMaybe<StringFilter>;
};

export type GitHubBranch = {
  __typename?: "GitHubBranch";
  name: Scalars["String"];
};

export type GitHubEvent = {
  __typename?: "GitHubEvent";
  createdAt: Scalars["String"];
  type: Scalars["String"];
};

export type GitHubRepo = {
  __typename?: "GitHubRepo";
  defaultBranch: Scalars["String"];
  fullName: Scalars["String"];
  id: Scalars["Int"];
  installationId: Scalars["String"];
  isPrivate: Scalars["Boolean"];
  name: Scalars["String"];
};

export type HerokuApp = {
  __typename?: "HerokuApp";
  id: Scalars["ID"];
  name: Scalars["String"];
};

export enum ImageType {
  Buildpack = "BUILDPACK",
  Docker = "DOCKER",
  Nixpacks = "NIXPACKS",
}

export type Incident = {
  __typename?: "Incident";
  id: Scalars["String"];
  message: Scalars["String"];
  status: IncidentStatus;
  url: Scalars["String"];
};

export enum IncidentStatus {
  Identified = "IDENTIFIED",
  Investigating = "INVESTIGATING",
  Monitoring = "MONITORING",
  Resolved = "RESOLVED",
}

export type IntFilter = {
  equals?: InputMaybe<Scalars["Int"]>;
  gt?: InputMaybe<Scalars["Int"]>;
  gte?: InputMaybe<Scalars["Int"]>;
  in?: InputMaybe<Array<Scalars["Int"]>>;
  lt?: InputMaybe<Scalars["Int"]>;
  lte?: InputMaybe<Scalars["Int"]>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars["Int"]>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars["Int"]>;
  gt?: InputMaybe<Scalars["Int"]>;
  gte?: InputMaybe<Scalars["Int"]>;
  in?: InputMaybe<Array<Scalars["Int"]>>;
  lt?: InputMaybe<Scalars["Int"]>;
  lte?: InputMaybe<Scalars["Int"]>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["Int"]>>;
};

export type Integration = {
  __typename?: "Integration";
  config: Scalars["Json"];
  id: Scalars["String"];
  name: Scalars["String"];
  projectId: Scalars["String"];
};

export type IntegrationAuth = {
  __typename?: "IntegrationAuth";
  id: Scalars["String"];
  integrations: Array<Integration>;
  provider: Scalars["String"];
  providerId: Scalars["String"];
};

export type IntegrationAuthIntegrationsArgs = {
  after?: InputMaybe<IntegrationWhereUniqueInput>;
  before?: InputMaybe<IntegrationWhereUniqueInput>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type IntegrationAuthListRelationFilter = {
  every?: InputMaybe<IntegrationAuthWhereInput>;
  none?: InputMaybe<IntegrationAuthWhereInput>;
  some?: InputMaybe<IntegrationAuthWhereInput>;
};

export type IntegrationAuthOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
  count?: InputMaybe<SortOrder>;
};

export type IntegrationAuthWhereInput = {
  AND?: InputMaybe<Array<IntegrationAuthWhereInput>>;
  NOT?: InputMaybe<Array<IntegrationAuthWhereInput>>;
  OR?: InputMaybe<Array<IntegrationAuthWhereInput>>;
  accessToken?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  integrations?: InputMaybe<IntegrationListRelationFilter>;
  provider?: InputMaybe<StringFilter>;
  providerId?: InputMaybe<StringFilter>;
  refreshToken?: InputMaybe<StringFilter>;
  teamId?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserWhereInput>;
  userId?: InputMaybe<StringFilter>;
};

export type IntegrationListRelationFilter = {
  every?: InputMaybe<IntegrationWhereInput>;
  none?: InputMaybe<IntegrationWhereInput>;
  some?: InputMaybe<IntegrationWhereInput>;
};

export type IntegrationOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
  count?: InputMaybe<SortOrder>;
};

export type IntegrationWhereInput = {
  AND?: InputMaybe<Array<IntegrationWhereInput>>;
  NOT?: InputMaybe<Array<IntegrationWhereInput>>;
  OR?: InputMaybe<Array<IntegrationWhereInput>>;
  id?: InputMaybe<StringFilter>;
  integrationAuth?: InputMaybe<IntegrationAuthWhereInput>;
  integrationAuthId?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringFilter>;
  project?: InputMaybe<ProjectWhereInput>;
  projectId?: InputMaybe<StringFilter>;
  watchedEnvironments?: InputMaybe<EnvironmentListRelationFilter>;
};

export type IntegrationWhereUniqueInput = {
  id?: InputMaybe<Scalars["String"]>;
};

export type InviteCode = {
  __typename?: "InviteCode";
  code: Scalars["String"];
  createdAt: Scalars["DateTime"];
  id: Scalars["String"];
  project: Project;
  projectId: Scalars["String"];
  role: ProjectRole;
};

export type InviteCodeListRelationFilter = {
  every?: InputMaybe<InviteCodeWhereInput>;
  none?: InputMaybe<InviteCodeWhereInput>;
  some?: InputMaybe<InviteCodeWhereInput>;
};

export type InviteCodeOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
  count?: InputMaybe<SortOrder>;
};

export type InviteCodeWhereInput = {
  AND?: InputMaybe<Array<InviteCodeWhereInput>>;
  NOT?: InputMaybe<Array<InviteCodeWhereInput>>;
  OR?: InputMaybe<Array<InviteCodeWhereInput>>;
  code?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  project?: InputMaybe<ProjectWhereInput>;
  projectId?: InputMaybe<StringFilter>;
  role?: InputMaybe<EnumProjectRoleFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type JsonNullableFilter = {
  array_contains?: InputMaybe<Scalars["Json"]>;
  array_ends_with?: InputMaybe<Scalars["Json"]>;
  array_starts_with?: InputMaybe<Scalars["Json"]>;
  equals?: InputMaybe<Scalars["Json"]>;
  gt?: InputMaybe<Scalars["Json"]>;
  gte?: InputMaybe<Scalars["Json"]>;
  lt?: InputMaybe<Scalars["Json"]>;
  lte?: InputMaybe<Scalars["Json"]>;
  not?: InputMaybe<Scalars["Json"]>;
  path?: InputMaybe<Array<Scalars["String"]>>;
  string_contains?: InputMaybe<Scalars["String"]>;
  string_ends_with?: InputMaybe<Scalars["String"]>;
  string_starts_with?: InputMaybe<Scalars["String"]>;
};

export type LockdownStatus = {
  __typename?: "LockdownStatus";
  allProvisionsDisabledMsg?: Maybe<Scalars["String"]>;
  anonProvisionsDisabledMsg?: Maybe<Scalars["String"]>;
  signupsDisabledMsg?: Maybe<Scalars["String"]>;
};

export type Log = {
  __typename?: "Log";
  message: Scalars["String"];
  timestamp: Scalars["String"];
};

export type LogListRelationFilter = {
  every?: InputMaybe<LogWhereInput>;
  none?: InputMaybe<LogWhereInput>;
  some?: InputMaybe<LogWhereInput>;
};

export type LogOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
  count?: InputMaybe<SortOrder>;
};

export type LogWhereInput = {
  AND?: InputMaybe<Array<LogWhereInput>>;
  NOT?: InputMaybe<Array<LogWhereInput>>;
  OR?: InputMaybe<Array<LogWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  environment?: InputMaybe<EnvironmentWhereInput>;
  environmentId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  message?: InputMaybe<StringFilter>;
  project?: InputMaybe<ProjectWhereInput>;
  projectId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type MagicAuth = {
  __typename?: "MagicAuth";
  email: Scalars["String"];
  id: Scalars["String"];
  userId: Scalars["String"];
};

export type MagicAuthListRelationFilter = {
  every?: InputMaybe<MagicAuthWhereInput>;
  none?: InputMaybe<MagicAuthWhereInput>;
  some?: InputMaybe<MagicAuthWhereInput>;
};

export type MagicAuthOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
  count?: InputMaybe<SortOrder>;
};

export type MagicAuthWhereInput = {
  AND?: InputMaybe<Array<MagicAuthWhereInput>>;
  NOT?: InputMaybe<Array<MagicAuthWhereInput>>;
  OR?: InputMaybe<Array<MagicAuthWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  issuer?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserWhereInput>;
  userId?: InputMaybe<StringFilter>;
};

/** Represents a user that belongs to a project */
export type Member = {
  __typename?: "Member";
  avatar?: Maybe<Scalars["String"]>;
  email: Scalars["String"];
  id: Scalars["String"];
  name?: Maybe<Scalars["String"]>;
  role: ProjectRole;
};

export type Metric = {
  __typename?: "Metric";
  containerId: Scalars["String"];
  cpuPercentVCPU: Scalars["Float"];
  date: Scalars["String"];
  memoryLimitBytes: Scalars["BigInt"];
  memoryUsageBytes: Scalars["BigInt"];
  networkRxBytes: Scalars["BigInt"];
  networkTxBytes: Scalars["BigInt"];
};

/** A collection belonging to a MongoDB database */
export type MongoCollection = {
  __typename?: "MongoCollection";
  data: Scalars["Json"];
  name: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  /** Change the User's account email if there is a valid change email request. */
  accountEmailChange: Scalars["Boolean"];
  /** Add a starter to an existing project */
  addStarterToProject: Scalars["Boolean"];
  /** Deletes the user with the provided userId */
  adminDeleteUser: Scalars["Boolean"];
  /** Agree to the fair use policy for the currently authenticated user */
  agreeFairUse: Scalars["Boolean"];
  /** Alert the team of a missing command palette command */
  alertMissingCommand: Scalars["Boolean"];
  /** Apply a credit to a customer */
  applyCredit: Scalars["Boolean"];
  /** Attach a payment method to a customer */
  attachPaymentMethod: Scalars["Json"];
  /** Auth a login session for a user */
  authLoginSession: Scalars["Boolean"];
  /** Ban user */
  banUser: Scalars["Boolean"];
  /** Cancel a deployment */
  cancelDeployment: Scalars["Boolean"];
  /** Cancel a login session */
  cancelLoginSession: Scalars["Boolean"];
  /** Change the permission of a user in a team */
  changeTeamPermission: Scalars["Boolean"];
  /** Change the role for a user and project */
  changeUserRole: Member;
  /** Convert a public temporary project into a private owned one */
  claimProject: Project;
  /** Confirm the transfer of project ownership */
  confirmOwnershipTransfer: Scalars["Boolean"];
  /** Connect an exist service to a repo */
  connectServiceToRepo: Scalars["Boolean"];
  /** Get a token for a login session if it exists */
  consumeLoginSession?: Maybe<Scalars["String"]>;
  /** Create a custom domain for an environment */
  createCustomDomain: CustomDomain;
  /** Create a billing portal for a Stripe customer */
  createCustomerBillingPortal: Scalars["String"];
  /** Add a deployment trigger */
  createDeploymentTrigger: DeploymentTrigger;
  /** Add an environment to a project */
  createEnvironment: Environment;
  /** Creates an ephemeral environment for a project */
  createEphemeralEnvironment: Environment;
  /** Create new generic plugin and provision containers for all environments in project */
  createGenericPlugin: Plugin;
  /** Create new plugin token for all environments in project */
  createGenericPluginToken: Scalars["String"];
  /** Create an integration for a project */
  createIntegration: Integration;
  /** Get an invite code for a team and role */
  createInviteCodeForTeam: Scalars["String"];
  /** Start a CLI login session */
  createLoginSession: Scalars["String"];
  createPartnerProject: Scalars["Boolean"];
  /** Create new plugin and provision containers for all environments in project */
  createPlugin: Plugin;
  /** Create a new project with plugins */
  createProject: Project;
  /** Create a project and setup a deploy trigger immediately */
  createProjectFromRepo: Project;
  /** Create a project from a template repo and list of plugins */
  createProjectFromTemplate: CreateProjectFromTemplateResult;
  /** Create a token for a project that has access to a specific environment */
  createProjectToken: Scalars["String"];
  /** Create a table in a SQLQL database container */
  createSQLTable: Scalars["Boolean"];
  /** Create a service in a project */
  createService: Service;
  /** Create a subscription for a team */
  createSubscriptionForCustomer: Scalars["Json"];
  /** Create a team */
  createTeam: Team;
  /** Create a service-based template */
  createTemplate: Template;
  /** Create a Verification Appeal for a risky user. */
  createVerificationAppeal: Scalars["Boolean"];
  /** Create a webhook on a project */
  createWebhook: ProjectWebhook;
  /** Purchase credits for a Railway customer */
  customerPurchaseCredits: Scalars["Json"];
  /** Deletes a custom domain for an environment */
  deleteCustomDomain: Scalars["Boolean"];
  /** Deletes Environment and destroys all containers associated with it */
  deleteEnvironment: Scalars["Boolean"];
  /** Delete a plugin token */
  deleteGenericPluginToken: Scalars["Boolean"];
  /** Deletes a plugin and destroys all containers associated with it */
  deletePlugin: Scalars["Boolean"];
  /** Deletes project and destroys all containers associated with it */
  deleteProject: Scalars["Boolean"];
  /** Delete project token */
  deleteProjectToken: Scalars["Boolean"];
  /** Delete rows from a table in a SQL database container */
  deleteSQLRows: Scalars["Boolean"];
  /** Delete a table in a SQL database container */
  deleteSQLTable: Scalars["Boolean"];
  /** Deletes a service */
  deleteService: Scalars["Boolean"];
  /** Delete a session */
  deleteSession: Scalars["Boolean"];
  /** Delete a team and all data associated with it */
  deleteTeam: Scalars["Boolean"];
  /** Deletes the template with the provided ID */
  deleteTemplate: Scalars["Boolean"];
  /** Deletes the currently authenticated user */
  deleteUser: Scalars["Boolean"];
  /** Create or update a variable for a plugin */
  deleteVariable: Scalars["Boolean"];
  /** Delete a webhook from a project */
  deleteWebhook: ProjectWebhook;
  /** Redeploy all triggers that are connected to an environment */
  deployEnvironmentTriggers: Scalars["Boolean"];
  /** Disables all resource provisions across the platform */
  disableAllProvisions: Scalars["Boolean"];
  /** Disables anonymous resource provisions across the platform */
  disableAnonProvisions: Scalars["Boolean"];
  /** Disables signups across the platform */
  disableSignups: Scalars["Boolean"];
  /** Disconnect a service from any source */
  disconnectServiceFromSource: Scalars["Boolean"];
  /** Generate dummy data for a SQLQL database container */
  dummyDataSQL: Scalars["Boolean"];
  /** Enables all resource provisions across the platform */
  enableAllProvisions: Scalars["Boolean"];
  /** Enables anonymous resource provisions across the platform */
  enableAnonProvisions: Scalars["Boolean"];
  /** Disables signups across the platform */
  enableSignups: Scalars["Boolean"];
  /** Create a customer for a user if it doesn't already exist */
  ensureCustomerExists: Scalars["Boolean"];
  /** Generate 2FA app secret for authenticated user */
  generateAuthenticatorAppSecret: QrCode;
  /** Generate a new set of recovery codes for the authenticated user */
  generateRecoveryCodes: RecoveryCodes;
  /** Generate a template for a project */
  generateTemplateForProject: Template;
  /** Get a short-lived URL to download the code for a snapshot */
  getDeploymentSnapshotCodeUrl: Scalars["String"];
  /** Approve a Verification Appeal for a risky user. */
  handleVerificationAppeal: Scalars["Boolean"];
  /** Import variables from a Heroku app into a Railway service. Returns the number of variables imports */
  importVariablesFromHeroku: Scalars["Int"];
  /** Initiate an email change request for a user */
  initiateEmailChange: Scalars["Boolean"];
  /** Initate transfer of project ownership */
  initiateOwnershipTransfer: Scalars["Boolean"];
  /** Insert a column in a table in a SQL database container */
  insertSQLColumn: Scalars["Boolean"];
  /** Insert a row into a SQL database container */
  insertSQLRow: Scalars["Boolean"];
  /** Invite a user by email to a project */
  inviteUserToProject: Scalars["Boolean"];
  /** Invite a user by email to a team */
  inviteUserToTeam: Scalars["Boolean"];
  /** Join a project using an invite code as the currently authenticated user. */
  joinWithInviteCode: Project;
  /** Leave project as currently authenticated user */
  leaveProject: Scalars["Boolean"];
  /** Leave a team */
  leaveTeam: Scalars["Boolean"];
  /** Deletes session for current user if it exists */
  logout: Scalars["Boolean"];
  /** Delete an entire collection from a MongoDB container */
  mongoDeleteCollection: Scalars["Boolean"];
  /** Delete a document from a MongoDB container */
  mongoDeleteDocument: Scalars["Boolean"];
  /** Generate dummy data for a MongoDB container */
  mongoDummyData: Scalars["Boolean"];
  /** Insert a document into a MongoDB container */
  mongoInsertDocument: Scalars["String"];
  /** Update a doucmnet in a MongoDB container */
  mongoUpdateDocument: Scalars["Boolean"];
  /** Delete a key in a Redis container */
  redisDeleteKey: Scalars["Boolean"];
  /** Generate dummy data for a Redis container */
  redisDummyData: Scalars["Boolean"];
  /** Delete values to a hash in a Redis container */
  redisHashDelete: Scalars["Boolean"];
  /** Add values to a hash in a Redis container */
  redisHashSet: Scalars["Boolean"];
  /** Pop a value from a list in a Redis container */
  redisPopList: Scalars["Boolean"];
  /** Push a value to a list in a Redis container */
  redisPushList: Scalars["Boolean"];
  /** Add a value from a set in a Redis container */
  redisSetAdd: Scalars["Boolean"];
  /** Set a keys expire time in seconds in a Redis container */
  redisSetExpire: Scalars["Boolean"];
  /** Set list index to a value Redis container */
  redisSetListIndex: Scalars["Boolean"];
  /** Remove a value from a set in a Redis container */
  redisSetRemove: Scalars["Boolean"];
  /** Set a string value in a Redis container */
  redisStringSet: Scalars["Boolean"];
  /** Remove a deployment */
  removeDeployment: Scalars["Boolean"];
  /** Remove a deployment trigger */
  removeDeploymentTrigger: Scalars["Boolean"];
  /** Remove an integration for a project */
  removeIntegration: Scalars["Boolean"];
  /** Delete a provider auth */
  removeProviderAuth: Scalars["Boolean"];
  /** Removes 2FA for the authenticated user */
  removeTwoFactorAuthentication: Scalars["Boolean"];
  /** Remove user from a project */
  removeUserFromProject: Array<Member>;
  /** Remove a user from a team */
  removeUserFromTeam: Scalars["Boolean"];
  /** Resets the credentials for a plugin in an environment */
  resetPluginCredentialsForEnvironment: Scalars["String"];
  /** Reset envs and container for a plugin in an environment */
  resetPluginForEnvironment: Scalars["Boolean"];
  /** Reset the 2FA code for a user */
  resetTwoFactorInfoForUser: Scalars["Boolean"];
  /** Restart a given deployment */
  restartDeployment: Scalars["Boolean"];
  /** Retry the invoice for a subscription with an updated payment method */
  retryInvoiceForSubscription: Scalars["Json"];
  /** Rollback to a given deployment */
  rollbackDeployment: Scalars["Boolean"];
  /** Run the raw SQL query provided by the user */
  runRawQuery: RawQueryResponse;
  /** Sends an email with the changelog for the provided slug */
  sendChangelogEmail: Scalars["Boolean"];
  /** Send an email with the specified template ID */
  sendCustomEmail: Scalars["Boolean"];
  /** Logs panics from CLI to Datadog */
  sendTelemetry: Scalars["Boolean"];
  /** Creates a service domain */
  serviceDomainCreate: ServiceDomain;
  /** Deletes a service domain by ID */
  serviceDomainDelete: Scalars["Boolean"];
  /** Remove upstream url from service */
  serviceRemoveUpstreamUrl: Scalars["Boolean"];
  /** Set the base environment override of a deployment trigger */
  setBaseEnvironmentOverride: Scalars["Boolean"];
  /** Sets the domain for an environment */
  setDomainForEnvironment: Scalars["Boolean"];
  /** Setup 2FA authorization for authenticated user */
  setupTwoFactorAuth: RecoveryCodes;
  /** Force start a plugin */
  startPlugin: Scalars["Boolean"];
  submitPartnerProject: Scalars["Boolean"];
  /** Track a batch of events for authenticated user */
  trackBatchedEvents: Scalars["Boolean"];
  /** Track event for authenticated user */
  trackEvent: Scalars["Boolean"];
  /** Transfer a project to a user or team */
  transferProjectToTeam: Scalars["Boolean"];
  /** Transfer a project to a user or team */
  transferProjectToUser: Scalars["Boolean"];
  /** Unbans a user */
  unbanUser: Scalars["Boolean"];
  /** Update the billing email for a customer */
  updateBillingEmail: Customer;
  /** Updates a deployment trigger */
  updateDeploymentTrigger: DeploymentTrigger;
  /**
   * Set all variables for a plugin in an environment
   * @deprecated Use setVariablesForPluginEnvironment instead
   */
  updateEnvsForPlugin: Scalars["Json"];
  /** Update an integration for a project */
  updateIntegration: Integration;
  updatePartnerProjectStatus: Scalars["Boolean"];
  /** Update project */
  updateProject: Project;
  /**
   * Updates the last active date on a project
   * @deprecated Use `trackEvent` instead
   */
  updateProjectLastActive: Scalars["DateTime"];
  /** Update the referral code for a user */
  updateReferralCode: Scalars["Boolean"];
  /** Update row in a table in a SQL database container */
  updateSQLRow: Scalars["Boolean"];
  /** Updates a service */
  updateService: Service;
  /** Update a starter project */
  updateStarter: Scalars["Boolean"];
  /** Update a team by id */
  updateTeam: Team;
  /** Update the code of an existing template */
  updateTemplateCode: Scalars["Boolean"];
  /** Update the configuration of an existing template */
  updateTemplateConfiguration: Template;
  /** Update currently logged in user */
  updateUser: User;
  /** Update preferences for logged in user */
  updateUserPreferences: Preferences;
  /** Update the riskLevel for a user */
  updateUserRiskLevel: Scalars["Boolean"];
  /** Update date of TermsAgreedOn */
  updateUserTerms: User;
  /** Update a webhook on a project */
  updateWebhook: ProjectWebhook;
  /** Upgrade the current user from an early adopter plan to usage based plan */
  upgradeFromEarlyAdopterPlan: Scalars["Json"];
  /** Create or update a variable for a plugin */
  upsertVariable: Scalars["Boolean"];
  /** Upsert an object of variables for a plugin in an environment */
  upsertVariablesFromObject: Scalars["Boolean"];
  /** Use an invite code an join a team */
  useTeamInviteCode: Team;
  /** Unsubscribe from the Beta program. */
  userBetaLeave: Scalars["Boolean"];
  /** Disconnect your Railway account from Discord. */
  userDisconnectDiscord: Scalars["Boolean"];
  /** Remove a flag on the user. */
  userRemoveFlags: Scalars["Boolean"];
  /** Create or modify flag on the user. */
  userSetFlags: Scalars["Boolean"];
  /** Use a recovery code for a 2FA action */
  validateRecoveryCode: Scalars["Boolean"];
  /** Validates 2FA token for login */
  validateTwoFactorLogin: Scalars["Boolean"];
  /** Validates token for 2FA */
  validateTwoFactorToken: Scalars["Boolean"];
  /** Set the variables from an object for a plugin or service in an environment */
  variablesSetFromObject: Scalars["Boolean"];
  /** Waitlist the user */
  waitlistUser: User;
};

export type MutationAccountEmailChangeArgs = {
  nonce: Scalars["String"];
};

export type MutationAddStarterToProjectArgs = {
  plugins?: InputMaybe<Array<Scalars["String"]>>;
  projectId: Scalars["ID"];
  services: Array<ServiceTemplateInput>;
};

export type MutationAdminDeleteUserArgs = {
  userId: Scalars["ID"];
};

export type MutationAgreeFairUseArgs = {
  agree: Scalars["Boolean"];
};

export type MutationAlertMissingCommandArgs = {
  page: Scalars["String"];
  text: Scalars["String"];
};

export type MutationApplyCreditArgs = {
  amount: Scalars["Float"];
  customerId: Scalars["String"];
  memo?: InputMaybe<Scalars["String"]>;
};

export type MutationAttachPaymentMethodArgs = {
  customerId: Scalars["String"];
  paymentMethodId: Scalars["String"];
  validateWithHold?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationAuthLoginSessionArgs = {
  code: Scalars["String"];
  hostname?: InputMaybe<Scalars["String"]>;
};

export type MutationBanUserArgs = {
  reason: Scalars["String"];
  userId: Scalars["ID"];
};

export type MutationCancelDeploymentArgs = {
  deploymentId: Scalars["ID"];
  projectId: Scalars["ID"];
};

export type MutationCancelLoginSessionArgs = {
  code: Scalars["String"];
};

export type MutationChangeTeamPermissionArgs = {
  role: TeamRole;
  teamId: Scalars["String"];
  userId: Scalars["String"];
};

export type MutationChangeUserRoleArgs = {
  projectId: Scalars["String"];
  role: Scalars["String"];
  userId: Scalars["String"];
};

export type MutationClaimProjectArgs = {
  projectId: Scalars["String"];
};

export type MutationConfirmOwnershipTransferArgs = {
  ownershipTransferId: Scalars["ID"];
  projectId: Scalars["ID"];
};

export type MutationConnectServiceToRepoArgs = {
  branch: Scalars["String"];
  projectId: Scalars["ID"];
  serviceId: Scalars["ID"];
  source: Scalars["Json"];
};

export type MutationConsumeLoginSessionArgs = {
  code: Scalars["String"];
};

export type MutationCreateCustomDomainArgs = {
  domain: Scalars["String"];
  environmentId: Scalars["String"];
  projectId: Scalars["String"];
  serviceId: Scalars["String"];
};

export type MutationCreateCustomerBillingPortalArgs = {
  customerId: Scalars["String"];
  redirectUrl: Scalars["String"];
};

export type MutationCreateDeploymentTriggerArgs = {
  branch: Scalars["String"];
  environmentId: Scalars["String"];
  projectId: Scalars["String"];
  provider: Scalars["String"];
  repository: Scalars["String"];
  rootDirectory?: InputMaybe<Scalars["String"]>;
  serviceId?: InputMaybe<Scalars["String"]>;
};

export type MutationCreateEnvironmentArgs = {
  name: Scalars["String"];
  projectId: Scalars["String"];
};

export type MutationCreateEphemeralEnvironmentArgs = {
  baseEnvironmentId?: InputMaybe<Scalars["String"]>;
  name: Scalars["String"];
  projectId: Scalars["String"];
};

export type MutationCreateGenericPluginArgs = {
  projectId: Scalars["ID"];
  url: Scalars["String"];
};

export type MutationCreateGenericPluginTokenArgs = {
  genericPluginId: Scalars["ID"];
  projectId: Scalars["ID"];
};

export type MutationCreateIntegrationArgs = {
  config: Scalars["Json"];
  integrationAuthId?: InputMaybe<Scalars["String"]>;
  name: Scalars["String"];
  projectId: Scalars["String"];
};

export type MutationCreateInviteCodeForTeamArgs = {
  role: Scalars["String"];
  teamId: Scalars["String"];
};

export type MutationCreatePartnerProjectArgs = {
  gitUrl: Scalars["String"];
  kickbackPercent: Scalars["Int"];
  name: Scalars["String"];
  partnerId: Scalars["ID"];
};

export type MutationCreatePluginArgs = {
  name: Scalars["String"];
  projectId: Scalars["String"];
};

export type MutationCreateProjectArgs = {
  description?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  plugins?: InputMaybe<Array<Scalars["String"]>>;
  teamId?: InputMaybe<Scalars["String"]>;
};

export type MutationCreateProjectFromRepoArgs = {
  branch: Scalars["String"];
  metro?: InputMaybe<Scalars["Boolean"]>;
  name?: InputMaybe<Scalars["String"]>;
  repo: Scalars["String"];
  teamId?: InputMaybe<Scalars["String"]>;
  variables?: InputMaybe<Scalars["Json"]>;
};

export type MutationCreateProjectFromTemplateArgs = {
  plugins?: InputMaybe<Array<Scalars["String"]>>;
  services: Array<ServiceTemplateInput>;
  teamId?: InputMaybe<Scalars["String"]>;
  templateCode?: InputMaybe<Scalars["String"]>;
};

export type MutationCreateProjectTokenArgs = {
  environmentId: Scalars["String"];
  name: Scalars["String"];
  projectId: Scalars["String"];
};

export type MutationCreateSqlTableArgs = {
  columns: Array<SqlColumnInput>;
  databaseType: Scalars["String"];
  environmentId: Scalars["String"];
  name: Scalars["String"];
  pluginId: Scalars["String"];
  projectId: Scalars["String"];
};

export type MutationCreateServiceArgs = {
  branch?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  projectId: Scalars["ID"];
  source: Scalars["Json"];
};

export type MutationCreateSubscriptionForCustomerArgs = {
  customerId: Scalars["String"];
  paymentMethodId?: InputMaybe<Scalars["String"]>;
};

export type MutationCreateTeamArgs = {
  avatar?: InputMaybe<Scalars["String"]>;
  name: Scalars["String"];
};

export type MutationCreateTemplateArgs = {
  configuration: Scalars["Json"];
  demoProjectId?: InputMaybe<Scalars["String"]>;
};

export type MutationCreateVerificationAppealArgs = {
  repo: Scalars["String"];
  userMessage: Scalars["String"];
};

export type MutationCreateWebhookArgs = {
  projectId: Scalars["ID"];
  url: Scalars["String"];
};

export type MutationCustomerPurchaseCreditsArgs = {
  customerId: Scalars["ID"];
  dollarAmount: Scalars["Int"];
  paymentMethodId?: InputMaybe<Scalars["ID"]>;
};

export type MutationDeleteCustomDomainArgs = {
  customDomainId: Scalars["String"];
  environmentId: Scalars["String"];
  projectId: Scalars["String"];
};

export type MutationDeleteEnvironmentArgs = {
  environmentId: Scalars["String"];
  projectId: Scalars["String"];
};

export type MutationDeleteGenericPluginTokenArgs = {
  genericPluginTokenId: Scalars["ID"];
  projectId: Scalars["ID"];
};

export type MutationDeletePluginArgs = {
  id: Scalars["ID"];
  projectId: Scalars["String"];
};

export type MutationDeleteProjectArgs = {
  projectId: Scalars["String"];
};

export type MutationDeleteProjectTokenArgs = {
  projectId: Scalars["String"];
  tokenId: Scalars["ID"];
};

export type MutationDeleteSqlRowsArgs = {
  columnName: Scalars["String"];
  databaseType: Scalars["String"];
  environmentId: Scalars["String"];
  pluginId: Scalars["String"];
  projectId: Scalars["String"];
  rows: Array<Scalars["String"]>;
  tableName: Scalars["String"];
};

export type MutationDeleteSqlTableArgs = {
  databaseType: Scalars["String"];
  environmentId: Scalars["String"];
  name: Scalars["String"];
  pluginId: Scalars["String"];
  projectId: Scalars["String"];
};

export type MutationDeleteServiceArgs = {
  projectId: Scalars["ID"];
  serviceId: Scalars["ID"];
};

export type MutationDeleteSessionArgs = {
  sessionId: Scalars["ID"];
};

export type MutationDeleteTeamArgs = {
  teamId: Scalars["String"];
};

export type MutationDeleteTemplateArgs = {
  id: Scalars["String"];
};

export type MutationDeleteVariableArgs = {
  environmentId: Scalars["String"];
  name: Scalars["String"];
  pluginId?: InputMaybe<Scalars["String"]>;
  projectId: Scalars["String"];
  serviceId?: InputMaybe<Scalars["String"]>;
};

export type MutationDeleteWebhookArgs = {
  id: Scalars["ID"];
  projectId: Scalars["ID"];
};

export type MutationDeployEnvironmentTriggersArgs = {
  environmentId: Scalars["ID"];
  projectId: Scalars["ID"];
  serviceId: Scalars["ID"];
};

export type MutationDisableAllProvisionsArgs = {
  reason: Scalars["String"];
};

export type MutationDisableAnonProvisionsArgs = {
  reason: Scalars["String"];
};

export type MutationDisableSignupsArgs = {
  reason: Scalars["String"];
};

export type MutationDisconnectServiceFromSourceArgs = {
  projectId: Scalars["ID"];
  serviceId: Scalars["ID"];
};

export type MutationDummyDataSqlArgs = {
  databaseType: Scalars["String"];
  environmentId: Scalars["String"];
  pluginId: Scalars["String"];
  projectId: Scalars["String"];
};

export type MutationEnsureCustomerExistsArgs = {
  userId: Scalars["String"];
};

export type MutationGenerateTemplateForProjectArgs = {
  projectId: Scalars["String"];
};

export type MutationGetDeploymentSnapshotCodeUrlArgs = {
  deploymentId: Scalars["ID"];
  projectId: Scalars["ID"];
};

export type MutationHandleVerificationAppealArgs = {
  approved: Scalars["Boolean"];
  id: Scalars["String"];
};

export type MutationImportVariablesFromHerokuArgs = {
  environmentId: Scalars["ID"];
  herokuAppId: Scalars["ID"];
  projectId: Scalars["ID"];
  serviceId: Scalars["ID"];
};

export type MutationInitiateEmailChangeArgs = {
  newEmail: Scalars["String"];
};

export type MutationInitiateOwnershipTransferArgs = {
  memberId: Scalars["ID"];
  projectId: Scalars["ID"];
};

export type MutationInsertSqlColumnArgs = {
  column: SqlColumnInput;
  databaseType: Scalars["String"];
  environmentId: Scalars["String"];
  pluginId: Scalars["String"];
  projectId: Scalars["String"];
  tableName: Scalars["String"];
};

export type MutationInsertSqlRowArgs = {
  columns: Array<SqlRowInput>;
  databaseType: Scalars["String"];
  environmentId: Scalars["String"];
  pluginId: Scalars["String"];
  projectId: Scalars["String"];
  tableName: Scalars["String"];
};

export type MutationInviteUserToProjectArgs = {
  email: Scalars["String"];
  link: Scalars["String"];
  projectId: Scalars["String"];
};

export type MutationInviteUserToTeamArgs = {
  email: Scalars["String"];
  link: Scalars["String"];
  teamId: Scalars["String"];
};

export type MutationJoinWithInviteCodeArgs = {
  code: Scalars["String"];
};

export type MutationLeaveProjectArgs = {
  projectId: Scalars["String"];
};

export type MutationLeaveTeamArgs = {
  teamId: Scalars["String"];
};

export type MutationMongoDeleteCollectionArgs = {
  database: Scalars["String"];
  environmentId: Scalars["String"];
  name: Scalars["String"];
  pluginId: Scalars["String"];
  projectId: Scalars["String"];
};

export type MutationMongoDeleteDocumentArgs = {
  database: Scalars["String"];
  environmentId: Scalars["String"];
  id: Scalars["String"];
  name: Scalars["String"];
  pluginId: Scalars["String"];
  projectId: Scalars["String"];
};

export type MutationMongoDummyDataArgs = {
  database: Scalars["String"];
  environmentId: Scalars["String"];
  pluginId: Scalars["String"];
  projectId: Scalars["String"];
};

export type MutationMongoInsertDocumentArgs = {
  data: Scalars["Json"];
  database: Scalars["String"];
  environmentId: Scalars["String"];
  name: Scalars["String"];
  pluginId: Scalars["String"];
  projectId: Scalars["String"];
};

export type MutationMongoUpdateDocumentArgs = {
  data: Scalars["Json"];
  database: Scalars["String"];
  environmentId: Scalars["String"];
  id: Scalars["String"];
  name: Scalars["String"];
  pluginId: Scalars["String"];
  projectId: Scalars["String"];
};

export type MutationRedisDeleteKeyArgs = {
  environmentId: Scalars["String"];
  key: Scalars["String"];
  pluginId: Scalars["String"];
  projectId: Scalars["String"];
};

export type MutationRedisDummyDataArgs = {
  environmentId: Scalars["String"];
  pluginId: Scalars["String"];
  projectId: Scalars["String"];
};

export type MutationRedisHashDeleteArgs = {
  environmentId: Scalars["String"];
  key: Scalars["String"];
  pluginId: Scalars["String"];
  projectId: Scalars["String"];
  values: Array<Scalars["String"]>;
};

export type MutationRedisHashSetArgs = {
  environmentId: Scalars["String"];
  key: Scalars["String"];
  pluginId: Scalars["String"];
  projectId: Scalars["String"];
  values: Scalars["Json"];
};

export type MutationRedisPopListArgs = {
  environmentId: Scalars["String"];
  key: Scalars["String"];
  pluginId: Scalars["String"];
  projectId: Scalars["String"];
  side: Scalars["String"];
};

export type MutationRedisPushListArgs = {
  environmentId: Scalars["String"];
  key: Scalars["String"];
  pluginId: Scalars["String"];
  projectId: Scalars["String"];
  side: Scalars["String"];
  values: Array<Scalars["String"]>;
};

export type MutationRedisSetAddArgs = {
  environmentId: Scalars["String"];
  key: Scalars["String"];
  pluginId: Scalars["String"];
  projectId: Scalars["String"];
  values: Array<Scalars["String"]>;
};

export type MutationRedisSetExpireArgs = {
  environmentId: Scalars["String"];
  key: Scalars["String"];
  pluginId: Scalars["String"];
  projectId: Scalars["String"];
  ttl: Scalars["Int"];
};

export type MutationRedisSetListIndexArgs = {
  environmentId: Scalars["String"];
  index: Scalars["Int"];
  key: Scalars["String"];
  pluginId: Scalars["String"];
  projectId: Scalars["String"];
  value: Scalars["String"];
};

export type MutationRedisSetRemoveArgs = {
  environmentId: Scalars["String"];
  key: Scalars["String"];
  pluginId: Scalars["String"];
  projectId: Scalars["String"];
  values: Array<Scalars["String"]>;
};

export type MutationRedisStringSetArgs = {
  environmentId: Scalars["String"];
  key: Scalars["String"];
  pluginId: Scalars["String"];
  projectId: Scalars["String"];
  value: Scalars["String"];
};

export type MutationRemoveDeploymentArgs = {
  deploymentId: Scalars["ID"];
  projectId: Scalars["ID"];
};

export type MutationRemoveDeploymentTriggerArgs = {
  projectId: Scalars["String"];
  triggerId: Scalars["String"];
};

export type MutationRemoveIntegrationArgs = {
  integrationId: Scalars["String"];
  projectId: Scalars["String"];
};

export type MutationRemoveProviderAuthArgs = {
  authId: Scalars["String"];
};

export type MutationRemoveUserFromProjectArgs = {
  projectId: Scalars["String"];
  userId: Scalars["String"];
};

export type MutationRemoveUserFromTeamArgs = {
  teamId: Scalars["String"];
  userId: Scalars["String"];
};

export type MutationResetPluginCredentialsForEnvironmentArgs = {
  environmentId: Scalars["String"];
  pluginId: Scalars["String"];
  projectId: Scalars["String"];
};

export type MutationResetPluginForEnvironmentArgs = {
  environmentId: Scalars["String"];
  pluginId: Scalars["String"];
  projectId: Scalars["String"];
};

export type MutationResetTwoFactorInfoForUserArgs = {
  userId: Scalars["ID"];
};

export type MutationRestartDeploymentArgs = {
  deploymentId: Scalars["ID"];
  projectId: Scalars["ID"];
};

export type MutationRetryInvoiceForSubscriptionArgs = {
  customerId: Scalars["String"];
  invoiceId: Scalars["String"];
  paymentMethodId: Scalars["String"];
};

export type MutationRollbackDeploymentArgs = {
  deploymentId: Scalars["ID"];
  projectId: Scalars["ID"];
};

export type MutationRunRawQueryArgs = {
  databaseType: Scalars["String"];
  environmentId: Scalars["String"];
  pluginId: Scalars["String"];
  projectId: Scalars["String"];
  query: Scalars["String"];
};

export type MutationSendChangelogEmailArgs = {
  changelogId: Scalars["String"];
  changelogSlug: Scalars["String"];
  changelogTitle: Scalars["String"];
  isTestEmail: Scalars["Boolean"];
};

export type MutationSendCustomEmailArgs = {
  includeBannedUsers: Scalars["Boolean"];
  isTestEmail: Scalars["Boolean"];
  onlyDevPlan: Scalars["Boolean"];
  onlyEarlyAdopter: Scalars["Boolean"];
  templateId: Scalars["String"];
};

export type MutationSendTelemetryArgs = {
  command: Scalars["String"];
  environmentId?: InputMaybe<Scalars["String"]>;
  error: Scalars["String"];
  projectId?: InputMaybe<Scalars["String"]>;
  stacktrace: Scalars["String"];
  version?: InputMaybe<Scalars["String"]>;
};

export type MutationServiceDomainCreateArgs = {
  environmentId: Scalars["ID"];
  projectId: Scalars["ID"];
  serviceId: Scalars["ID"];
};

export type MutationServiceDomainDeleteArgs = {
  environmentId: Scalars["ID"];
  id: Scalars["ID"];
  projectId: Scalars["ID"];
};

export type MutationServiceRemoveUpstreamUrlArgs = {
  projectId: Scalars["ID"];
  serviceId: Scalars["ID"];
};

export type MutationSetBaseEnvironmentOverrideArgs = {
  baseEnvironmentOverrideId?: InputMaybe<Scalars["String"]>;
  projectId: Scalars["String"];
  triggerId: Scalars["String"];
};

export type MutationSetDomainForEnvironmentArgs = {
  domain: Scalars["String"];
  environmentId: Scalars["String"];
  projectId: Scalars["String"];
  serviceId: Scalars["String"];
};

export type MutationSetupTwoFactorAuthArgs = {
  token: Scalars["String"];
};

export type MutationStartPluginArgs = {
  environmentId: Scalars["ID"];
  pluginId: Scalars["ID"];
};

export type MutationSubmitPartnerProjectArgs = {
  gitUrl: Scalars["String"];
  name: Scalars["String"];
};

export type MutationTrackBatchedEventsArgs = {
  events: Array<BatchEvent>;
};

export type MutationTrackEventArgs = {
  eventName: Scalars["String"];
  properties?: InputMaybe<Scalars["Json"]>;
};

export type MutationTransferProjectToTeamArgs = {
  projectId: Scalars["String"];
  teamId: Scalars["String"];
};

export type MutationTransferProjectToUserArgs = {
  projectId: Scalars["String"];
};

export type MutationUnbanUserArgs = {
  userId: Scalars["ID"];
};

export type MutationUpdateBillingEmailArgs = {
  billingEmail: Scalars["String"];
  customerId: Scalars["String"];
};

export type MutationUpdateDeploymentTriggerArgs = {
  branch?: InputMaybe<Scalars["String"]>;
  projectId: Scalars["String"];
  repository?: InputMaybe<Scalars["String"]>;
  rootDirectory?: InputMaybe<Scalars["String"]>;
  triggerId: Scalars["String"];
};

export type MutationUpdateEnvsForPluginArgs = {
  environmentId: Scalars["String"];
  envs: Scalars["Json"];
  pluginId: Scalars["String"];
  projectId: Scalars["String"];
};

export type MutationUpdateIntegrationArgs = {
  config: Scalars["Json"];
  integrationAuthId?: InputMaybe<Scalars["String"]>;
  integrationId: Scalars["String"];
  name: Scalars["String"];
  projectId: Scalars["String"];
};

export type MutationUpdatePartnerProjectStatusArgs = {
  id: Scalars["ID"];
  status: Scalars["String"];
};

export type MutationUpdateProjectArgs = {
  description?: InputMaybe<Scalars["String"]>;
  isPublic?: InputMaybe<Scalars["Boolean"]>;
  name?: InputMaybe<Scalars["String"]>;
  prDeploys?: InputMaybe<Scalars["Boolean"]>;
  projectId: Scalars["ID"];
};

export type MutationUpdateProjectLastActiveArgs = {
  projectId: Scalars["String"];
};

export type MutationUpdateReferralCodeArgs = {
  code: Scalars["String"];
};

export type MutationUpdateSqlRowArgs = {
  data: Scalars["Json"];
  databaseType: Scalars["String"];
  environmentId: Scalars["String"];
  pKey: Scalars["String"];
  pKeyValue: Scalars["String"];
  pluginId: Scalars["String"];
  projectId: Scalars["String"];
  tableName: Scalars["String"];
};

export type MutationUpdateServiceArgs = {
  buildCommand?: InputMaybe<Scalars["String"]>;
  builder?: InputMaybe<Builder>;
  healthcheckPath?: InputMaybe<Scalars["String"]>;
  icon?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  projectId: Scalars["ID"];
  restartPolicyMaxRetries?: InputMaybe<Scalars["Int"]>;
  restartPolicyType?: InputMaybe<RestartPolicyType>;
  rootDirectory?: InputMaybe<Scalars["String"]>;
  serviceId: Scalars["ID"];
  source?: InputMaybe<Scalars["Json"]>;
  startCommand?: InputMaybe<Scalars["String"]>;
  watchPatterns?: InputMaybe<Array<Scalars["String"]>>;
  webhookUrl?: InputMaybe<Scalars["String"]>;
};

export type MutationUpdateStarterArgs = {
  projectId: Scalars["String"];
  serviceId?: InputMaybe<Scalars["String"]>;
};

export type MutationUpdateTeamArgs = {
  avatar?: InputMaybe<Scalars["String"]>;
  name: Scalars["String"];
  teamId: Scalars["String"];
};

export type MutationUpdateTemplateCodeArgs = {
  code: Scalars["String"];
  id: Scalars["String"];
};

export type MutationUpdateTemplateConfigurationArgs = {
  configuration: Scalars["Json"];
  demoProjectId?: InputMaybe<Scalars["String"]>;
  id: Scalars["String"];
};

export type MutationUpdateUserArgs = {
  avatar?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
};

export type MutationUpdateUserPreferencesArgs = {
  buildFailedEmail?: InputMaybe<Scalars["Boolean"]>;
  changelogEmail?: InputMaybe<Scalars["Boolean"]>;
  deployCrashedEmail?: InputMaybe<Scalars["Boolean"]>;
  usageEmail?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationUpdateUserRiskLevelArgs = {
  riskLevel?: InputMaybe<Scalars["Float"]>;
  userId: Scalars["ID"];
};

export type MutationUpdateWebhookArgs = {
  id: Scalars["ID"];
  projectId: Scalars["ID"];
  url: Scalars["String"];
};

export type MutationUpgradeFromEarlyAdopterPlanArgs = {
  customerId: Scalars["String"];
};

export type MutationUpsertVariableArgs = {
  environmentId: Scalars["String"];
  name: Scalars["String"];
  pluginId?: InputMaybe<Scalars["String"]>;
  projectId: Scalars["String"];
  serviceId?: InputMaybe<Scalars["String"]>;
  value: Scalars["String"];
};

export type MutationUpsertVariablesFromObjectArgs = {
  environmentId: Scalars["String"];
  pluginId?: InputMaybe<Scalars["String"]>;
  projectId: Scalars["String"];
  serviceId?: InputMaybe<Scalars["String"]>;
  variables: Scalars["Json"];
};

export type MutationUseTeamInviteCodeArgs = {
  code: Scalars["String"];
};

export type MutationUserRemoveFlagsArgs = {
  flags: Array<UserFlag>;
  userId: Scalars["ID"];
};

export type MutationUserSetFlagsArgs = {
  flags: Array<UserFlag>;
  userId: Scalars["ID"];
};

export type MutationValidateRecoveryCodeArgs = {
  code: Scalars["String"];
  twoFactorLinkingKey?: InputMaybe<Scalars["String"]>;
};

export type MutationValidateTwoFactorLoginArgs = {
  token: Scalars["String"];
  twoFactorLinkingKey: Scalars["String"];
};

export type MutationValidateTwoFactorTokenArgs = {
  token: Scalars["String"];
};

export type MutationVariablesSetFromObjectArgs = {
  environmentId: Scalars["String"];
  pluginId?: InputMaybe<Scalars["String"]>;
  projectId: Scalars["String"];
  serviceId?: InputMaybe<Scalars["String"]>;
  variables: Scalars["Json"];
};

export type MutationWaitlistUserArgs = {
  email?: InputMaybe<Scalars["String"]>;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars["Boolean"]>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars["DateTime"]>;
  gt?: InputMaybe<Scalars["DateTime"]>;
  gte?: InputMaybe<Scalars["DateTime"]>;
  in?: InputMaybe<Array<Scalars["DateTime"]>>;
  lt?: InputMaybe<Scalars["DateTime"]>;
  lte?: InputMaybe<Scalars["DateTime"]>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars["DateTime"]>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars["DateTime"]>;
  gt?: InputMaybe<Scalars["DateTime"]>;
  gte?: InputMaybe<Scalars["DateTime"]>;
  in?: InputMaybe<Array<Scalars["DateTime"]>>;
  lt?: InputMaybe<Scalars["DateTime"]>;
  lte?: InputMaybe<Scalars["DateTime"]>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["DateTime"]>>;
};

export type NestedEnumBuilderFilter = {
  equals?: InputMaybe<Builder>;
  in?: InputMaybe<Array<Builder>>;
  not?: InputMaybe<NestedEnumBuilderFilter>;
  notIn?: InputMaybe<Array<Builder>>;
};

export type NestedEnumCreditTypeFilter = {
  equals?: InputMaybe<CreditType>;
  in?: InputMaybe<Array<CreditType>>;
  not?: InputMaybe<NestedEnumCreditTypeFilter>;
  notIn?: InputMaybe<Array<CreditType>>;
};

export type NestedEnumDeploymentStatusFilter = {
  equals?: InputMaybe<DeploymentStatus>;
  in?: InputMaybe<Array<DeploymentStatus>>;
  not?: InputMaybe<NestedEnumDeploymentStatusFilter>;
  notIn?: InputMaybe<Array<DeploymentStatus>>;
};

export type NestedEnumImageTypeNullableFilter = {
  equals?: InputMaybe<ImageType>;
  in?: InputMaybe<Array<ImageType>>;
  not?: InputMaybe<NestedEnumImageTypeNullableFilter>;
  notIn?: InputMaybe<Array<ImageType>>;
};

export type NestedEnumPartnerProjectStatusFilter = {
  equals?: InputMaybe<PartnerProjectStatus>;
  in?: InputMaybe<Array<PartnerProjectStatus>>;
  not?: InputMaybe<NestedEnumPartnerProjectStatusFilter>;
  notIn?: InputMaybe<Array<PartnerProjectStatus>>;
};

export type NestedEnumPlanFilter = {
  equals?: InputMaybe<Plan>;
  in?: InputMaybe<Array<Plan>>;
  not?: InputMaybe<NestedEnumPlanFilter>;
  notIn?: InputMaybe<Array<Plan>>;
};

export type NestedEnumPluginStatusFilter = {
  equals?: InputMaybe<PluginStatus>;
  in?: InputMaybe<Array<PluginStatus>>;
  not?: InputMaybe<NestedEnumPluginStatusFilter>;
  notIn?: InputMaybe<Array<PluginStatus>>;
};

export type NestedEnumPluginTypeFilter = {
  equals?: InputMaybe<PluginType>;
  in?: InputMaybe<Array<PluginType>>;
  not?: InputMaybe<NestedEnumPluginTypeFilter>;
  notIn?: InputMaybe<Array<PluginType>>;
};

export type NestedEnumProjectRoleFilter = {
  equals?: InputMaybe<ProjectRole>;
  in?: InputMaybe<Array<ProjectRole>>;
  not?: InputMaybe<NestedEnumProjectRoleFilter>;
  notIn?: InputMaybe<Array<ProjectRole>>;
};

export type NestedEnumReferralStatusFilter = {
  equals?: InputMaybe<ReferralStatus>;
  in?: InputMaybe<Array<ReferralStatus>>;
  not?: InputMaybe<NestedEnumReferralStatusFilter>;
  notIn?: InputMaybe<Array<ReferralStatus>>;
};

export type NestedEnumRegistrationStatusFilter = {
  equals?: InputMaybe<RegistrationStatus>;
  in?: InputMaybe<Array<RegistrationStatus>>;
  not?: InputMaybe<NestedEnumRegistrationStatusFilter>;
  notIn?: InputMaybe<Array<RegistrationStatus>>;
};

export type NestedEnumRestartPolicyTypeFilter = {
  equals?: InputMaybe<RestartPolicyType>;
  in?: InputMaybe<Array<RestartPolicyType>>;
  not?: InputMaybe<NestedEnumRestartPolicyTypeFilter>;
  notIn?: InputMaybe<Array<RestartPolicyType>>;
};

export type NestedEnumSessionTypeFilter = {
  equals?: InputMaybe<SessionType>;
  in?: InputMaybe<Array<SessionType>>;
  not?: InputMaybe<NestedEnumSessionTypeFilter>;
  notIn?: InputMaybe<Array<SessionType>>;
};

export type NestedEnumSubscriptionStateFilter = {
  equals?: InputMaybe<SubscriptionState>;
  in?: InputMaybe<Array<SubscriptionState>>;
  not?: InputMaybe<NestedEnumSubscriptionStateFilter>;
  notIn?: InputMaybe<Array<SubscriptionState>>;
};

export type NestedEnumTeamRoleFilter = {
  equals?: InputMaybe<TeamRole>;
  in?: InputMaybe<Array<TeamRole>>;
  not?: InputMaybe<NestedEnumTeamRoleFilter>;
  notIn?: InputMaybe<Array<TeamRole>>;
};

export type NestedEnumVerificationAppealStatusFilter = {
  equals?: InputMaybe<VerificationAppealStatus>;
  in?: InputMaybe<Array<VerificationAppealStatus>>;
  not?: InputMaybe<NestedEnumVerificationAppealStatusFilter>;
  notIn?: InputMaybe<Array<VerificationAppealStatus>>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars["Float"]>;
  gt?: InputMaybe<Scalars["Float"]>;
  gte?: InputMaybe<Scalars["Float"]>;
  in?: InputMaybe<Array<Scalars["Float"]>>;
  lt?: InputMaybe<Scalars["Float"]>;
  lte?: InputMaybe<Scalars["Float"]>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["Float"]>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars["Int"]>;
  gt?: InputMaybe<Scalars["Int"]>;
  gte?: InputMaybe<Scalars["Int"]>;
  in?: InputMaybe<Array<Scalars["Int"]>>;
  lt?: InputMaybe<Scalars["Int"]>;
  lte?: InputMaybe<Scalars["Int"]>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars["Int"]>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars["Int"]>;
  gt?: InputMaybe<Scalars["Int"]>;
  gte?: InputMaybe<Scalars["Int"]>;
  in?: InputMaybe<Array<Scalars["Int"]>>;
  lt?: InputMaybe<Scalars["Int"]>;
  lte?: InputMaybe<Scalars["Int"]>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["Int"]>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars["String"]>;
  endsWith?: InputMaybe<Scalars["String"]>;
  equals?: InputMaybe<Scalars["String"]>;
  gt?: InputMaybe<Scalars["String"]>;
  gte?: InputMaybe<Scalars["String"]>;
  in?: InputMaybe<Array<Scalars["String"]>>;
  lt?: InputMaybe<Scalars["String"]>;
  lte?: InputMaybe<Scalars["String"]>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars["String"]>>;
  startsWith?: InputMaybe<Scalars["String"]>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars["String"]>;
  endsWith?: InputMaybe<Scalars["String"]>;
  equals?: InputMaybe<Scalars["String"]>;
  gt?: InputMaybe<Scalars["String"]>;
  gte?: InputMaybe<Scalars["String"]>;
  in?: InputMaybe<Array<Scalars["String"]>>;
  lt?: InputMaybe<Scalars["String"]>;
  lte?: InputMaybe<Scalars["String"]>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["String"]>>;
  startsWith?: InputMaybe<Scalars["String"]>;
};

export type PageInfo = {
  __typename?: "PageInfo";
  endCursor?: Maybe<Scalars["ID"]>;
  hasNextPage: Scalars["Boolean"];
};

export type PaginatedDeploys = {
  __typename?: "PaginatedDeploys";
  itemsPerPage: Scalars["Int"];
  page: Scalars["Int"];
  result: Array<Deployment>;
  totalPages: Scalars["Int"];
};

export type PaginatedEvents = {
  __typename?: "PaginatedEvents";
  itemsPerPage: Scalars["Int"];
  page: Scalars["Int"];
  result: Array<Event>;
  totalPages: Scalars["Int"];
};

export type PaginatedPartnerProjects = {
  __typename?: "PaginatedPartnerProjects";
  itemsPerPage: Scalars["Int"];
  page: Scalars["Int"];
  result: Array<PartnerProject>;
  totalPages: Scalars["Int"];
};

export type PaginatedProjects = {
  __typename?: "PaginatedProjects";
  itemsPerPage: Scalars["Int"];
  page: Scalars["Int"];
  result: Array<Project>;
  totalPages: Scalars["Int"];
};

export type PaginatedTeams = {
  __typename?: "PaginatedTeams";
  itemsPerPage: Scalars["Int"];
  page: Scalars["Int"];
  result: Array<Team>;
  totalPages: Scalars["Int"];
};

export type PaginatedUsers = {
  __typename?: "PaginatedUsers";
  itemsPerPage: Scalars["Int"];
  page: Scalars["Int"];
  result: Array<User>;
  totalPages: Scalars["Int"];
};

export type PaginatedVerificationAppeals = {
  __typename?: "PaginatedVerificationAppeals";
  itemsPerPage: Scalars["Int"];
  page: Scalars["Int"];
  result: Array<VerificationAppeal>;
  totalPages: Scalars["Int"];
};

export enum PaginationOrderBy {
  CreatedAt = "createdAt",
  UpdatedAt = "updatedAt",
}

export type PartnerPayout = {
  __typename?: "PartnerPayout";
  partnerProjects: Scalars["Int"];
  totalCreditsEarned: Scalars["Float"];
  totalEstimatedCreditsEarned: Scalars["Float"];
  totalProjectsActiveThisMonth?: Maybe<Scalars["Int"]>;
};

export type PartnerPayoutForProject = {
  __typename?: "PartnerPayoutForProject";
  contributingProjects: Scalars["Int"];
  estimatedMonthlyCreditsEarned: Scalars["Float"];
  projectsActiveThisMonth: Scalars["Int"];
  totalCreditsEarned: Scalars["Float"];
};

export type PartnerPayoutListRelationFilter = {
  every?: InputMaybe<PartnerPayoutWhereInput>;
  none?: InputMaybe<PartnerPayoutWhereInput>;
  some?: InputMaybe<PartnerPayoutWhereInput>;
};

export type PartnerPayoutOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
  count?: InputMaybe<SortOrder>;
};

export type PartnerPayoutWhereInput = {
  AND?: InputMaybe<Array<PartnerPayoutWhereInput>>;
  NOT?: InputMaybe<Array<PartnerPayoutWhereInput>>;
  OR?: InputMaybe<Array<PartnerPayoutWhereInput>>;
  amount?: InputMaybe<IntFilter>;
  contributor?: InputMaybe<CustomerWhereInput>;
  contributorId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  monthYear?: InputMaybe<StringFilter>;
  partnerProject?: InputMaybe<PartnerProjectWhereInput>;
  partnerProjectId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PartnerProject = {
  __typename?: "PartnerProject";
  activeProjects: Array<Project>;
  createdAt: Scalars["DateTime"];
  gitUrl: Scalars["String"];
  id: Scalars["String"];
  kickbackPercent: Scalars["Int"];
  name: Scalars["String"];
  status: PartnerProjectStatus;
  updatedAt: Scalars["DateTime"];
};

export type PartnerProjectActiveProjectsArgs = {
  after?: InputMaybe<ProjectWhereUniqueInput>;
  before?: InputMaybe<ProjectWhereUniqueInput>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type PartnerProjectListRelationFilter = {
  every?: InputMaybe<PartnerProjectWhereInput>;
  none?: InputMaybe<PartnerProjectWhereInput>;
  some?: InputMaybe<PartnerProjectWhereInput>;
};

export type PartnerProjectOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
  count?: InputMaybe<SortOrder>;
};

export type PartnerProjectOrderByWithRelationInput = {
  activeProjects?: InputMaybe<ProjectOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  gitUrl?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  kickbackPercent?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  partner?: InputMaybe<CustomerOrderByWithRelationInput>;
  partnerId?: InputMaybe<SortOrder>;
  partnerPayouts?: InputMaybe<PartnerPayoutOrderByRelationAggregateInput>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum PartnerProjectStatus {
  Applied = "APPLIED",
  Approved = "APPROVED",
  Rejected = "REJECTED",
}

export type PartnerProjectWhereInput = {
  AND?: InputMaybe<Array<PartnerProjectWhereInput>>;
  NOT?: InputMaybe<Array<PartnerProjectWhereInput>>;
  OR?: InputMaybe<Array<PartnerProjectWhereInput>>;
  activeProjects?: InputMaybe<ProjectListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  gitUrl?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  kickbackPercent?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  partner?: InputMaybe<CustomerWhereInput>;
  partnerId?: InputMaybe<StringFilter>;
  partnerPayouts?: InputMaybe<PartnerPayoutListRelationFilter>;
  status?: InputMaybe<EnumPartnerProjectStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PaymentMethod = {
  __typename?: "PaymentMethod";
  card?: Maybe<PaymentMethodCard>;
  id: Scalars["ID"];
};

export type PaymentMethodCard = {
  __typename?: "PaymentMethodCard";
  brand: Scalars["String"];
  country?: Maybe<Scalars["String"]>;
  last4: Scalars["String"];
};

export enum Plan {
  EarlyAdopter = "EARLY_ADOPTER",
  Free = "FREE",
}

export type PlatformStatus = {
  __typename?: "PlatformStatus";
  incident?: Maybe<Incident>;
  isStable: Scalars["Boolean"];
};

export type Plugin = {
  __typename?: "Plugin";
  createdAt: Scalars["DateTime"];
  deletedAt?: Maybe<Scalars["DateTime"]>;
  id: Scalars["String"];
  logsEnabled: Scalars["Boolean"];
  name: PluginType;
  project: Project;
  projectId: Scalars["String"];
  status: PluginStatus;
  variables: Array<Variable>;
};

export type PluginVariablesArgs = {
  after?: InputMaybe<VariableWhereUniqueInput>;
  before?: InputMaybe<VariableWhereUniqueInput>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type PluginContainerUsage = {
  __typename?: "PluginContainerUsage";
  containerId: Scalars["ID"];
  currentUsage: UsageItem;
  endDate: Scalars["String"];
  environmentId: Scalars["ID"];
  estimatedUsage: UsageItem;
  pluginId: Scalars["ID"];
  startDate: Scalars["String"];
};

export type PluginListRelationFilter = {
  every?: InputMaybe<PluginWhereInput>;
  none?: InputMaybe<PluginWhereInput>;
  some?: InputMaybe<PluginWhereInput>;
};

export type PluginOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
  count?: InputMaybe<SortOrder>;
};

export type PluginOrderByWithRelationInput = {
  containers?: InputMaybe<ContainerOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  genericPlugin?: InputMaybe<GenericPluginOrderByWithRelationInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  project?: InputMaybe<ProjectOrderByWithRelationInput>;
  projectId?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  variables?: InputMaybe<VariableOrderByRelationAggregateInput>;
};

export enum PluginStatus {
  Locked = "LOCKED",
  Removed = "REMOVED",
  Running = "RUNNING",
  Stopped = "STOPPED",
}

export enum PluginType {
  Elastic = "elastic",
  Env = "env",
  Generic = "generic",
  Leveldb = "leveldb",
  Minio = "minio",
  Mongodb = "mongodb",
  Mysql = "mysql",
  Postgresql = "postgresql",
  Redis = "redis",
}

export type PluginUsage = {
  __typename?: "PluginUsage";
  containers: Array<PluginContainerUsage>;
  plugin: Plugin;
};

export type PluginWhereInput = {
  AND?: InputMaybe<Array<PluginWhereInput>>;
  NOT?: InputMaybe<Array<PluginWhereInput>>;
  OR?: InputMaybe<Array<PluginWhereInput>>;
  containers?: InputMaybe<ContainerListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  genericPlugin?: InputMaybe<GenericPluginWhereInput>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<EnumPluginTypeFilter>;
  project?: InputMaybe<ProjectWhereInput>;
  projectId?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumPluginStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  variables?: InputMaybe<VariableListRelationFilter>;
};

export type PluginWhereUniqueInput = {
  id?: InputMaybe<Scalars["String"]>;
};

export type PluginWithMetrics = {
  __typename?: "PluginWithMetrics";
  metrics: Array<Metric>;
  plugin: Plugin;
};

export type Preferences = {
  __typename?: "Preferences";
  buildFailedEmail: Scalars["Boolean"];
  changelogEmail: Scalars["Boolean"];
  deployCrashedEmail: Scalars["Boolean"];
  usageEmail: Scalars["Boolean"];
};

export type PreferencesOrderByWithRelationInput = {
  buildFailedEmail?: InputMaybe<SortOrder>;
  changelogEmail?: InputMaybe<SortOrder>;
  deployCrashedEmail?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  usageEmail?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export type PreferencesWhereInput = {
  AND?: InputMaybe<Array<PreferencesWhereInput>>;
  NOT?: InputMaybe<Array<PreferencesWhereInput>>;
  OR?: InputMaybe<Array<PreferencesWhereInput>>;
  buildFailedEmail?: InputMaybe<BoolFilter>;
  changelogEmail?: InputMaybe<BoolFilter>;
  deployCrashedEmail?: InputMaybe<BoolFilter>;
  id?: InputMaybe<StringFilter>;
  usageEmail?: InputMaybe<BoolFilter>;
  user?: InputMaybe<UserWhereInput>;
  userId?: InputMaybe<StringFilter>;
};

export type Project = {
  __typename?: "Project";
  createdAt: Scalars["DateTime"];
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deploymentTriggers: Array<DeploymentTrigger>;
  deployments: Array<Deployment>;
  description?: Maybe<Scalars["String"]>;
  environments: Array<Environment>;
  expiredAt?: Maybe<Scalars["DateTime"]>;
  id: Scalars["String"];
  isMetrofied: Scalars["Boolean"];
  isPublic: Scalars["Boolean"];
  isTempProject: Scalars["Boolean"];
  isUpdatable: Scalars["Boolean"];
  members: Array<Member>;
  name: Scalars["String"];
  plugins: Array<Plugin>;
  prDeploys: Scalars["Boolean"];
  projectPermissions: Array<ProjectPermission>;
  services: Array<Service>;
  team?: Maybe<ProjectTeam>;
  teamId?: Maybe<Scalars["String"]>;
  updatedAt: Scalars["DateTime"];
  upstreamUrl?: Maybe<Scalars["String"]>;
  webhooks: Array<ProjectWebhook>;
};

export type ProjectDeploymentTriggersArgs = {
  after?: InputMaybe<DeploymentTriggerWhereUniqueInput>;
  before?: InputMaybe<DeploymentTriggerWhereUniqueInput>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type ProjectDeploymentsArgs = {
  after?: InputMaybe<DeploymentWhereUniqueInput>;
  before?: InputMaybe<DeploymentWhereUniqueInput>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<DeploymentOrderByWithRelationInput>>;
  where?: InputMaybe<DeploymentWhereInput>;
};

export type ProjectEnvironmentsArgs = {
  after?: InputMaybe<EnvironmentWhereUniqueInput>;
  before?: InputMaybe<EnvironmentWhereUniqueInput>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type ProjectPluginsArgs = {
  after?: InputMaybe<PluginWhereUniqueInput>;
  before?: InputMaybe<PluginWhereUniqueInput>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<PluginOrderByWithRelationInput>>;
};

export type ProjectProjectPermissionsArgs = {
  after?: InputMaybe<ProjectPermissionWhereUniqueInput>;
  before?: InputMaybe<ProjectPermissionWhereUniqueInput>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type ProjectServicesArgs = {
  after?: InputMaybe<ServiceWhereUniqueInput>;
  before?: InputMaybe<ServiceWhereUniqueInput>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<ServiceOrderByWithRelationInput>>;
};

export type ProjectWebhooksArgs = {
  after?: InputMaybe<ProjectWebhookWhereUniqueInput>;
  before?: InputMaybe<ProjectWebhookWhereUniqueInput>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type ProjectConnection = {
  __typename?: "ProjectConnection";
  nodes: Array<Project>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type ProjectExecutionTime = {
  __typename?: "ProjectExecutionTime";
  services: Array<ServiceExecutionTime>;
  totalMinutes: Scalars["Float"];
};

export type ProjectListRelationFilter = {
  every?: InputMaybe<ProjectWhereInput>;
  none?: InputMaybe<ProjectWhereInput>;
  some?: InputMaybe<ProjectWhereInput>;
};

export type ProjectListWhereInput = {
  teamId?: InputMaybe<Scalars["ID"]>;
};

export type ProjectOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
  count?: InputMaybe<SortOrder>;
};

export type ProjectOrderByWithRelationInput = {
  Log?: InputMaybe<LogOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  deploymentTriggers?: InputMaybe<DeploymentTriggerOrderByRelationAggregateInput>;
  deployments?: InputMaybe<DeploymentOrderByRelationAggregateInput>;
  description?: InputMaybe<SortOrder>;
  environments?: InputMaybe<EnvironmentOrderByRelationAggregateInput>;
  events?: InputMaybe<EventOrderByRelationAggregateInput>;
  expiredAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  integrations?: InputMaybe<IntegrationOrderByRelationAggregateInput>;
  inviteCodes?: InputMaybe<InviteCodeOrderByRelationAggregateInput>;
  isPublic?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  partnerProject?: InputMaybe<PartnerProjectOrderByWithRelationInput>;
  partnerProjectId?: InputMaybe<SortOrder>;
  plugins?: InputMaybe<PluginOrderByRelationAggregateInput>;
  prDeploys?: InputMaybe<SortOrder>;
  projectPermissions?: InputMaybe<ProjectPermissionOrderByRelationAggregateInput>;
  projectTokens?: InputMaybe<ProjectTokenOrderByRelationAggregateInput>;
  services?: InputMaybe<ServiceOrderByRelationAggregateInput>;
  sourceTemplate?: InputMaybe<TemplateOrderByWithRelationInput>;
  team?: InputMaybe<TeamOrderByWithRelationInput>;
  teamId?: InputMaybe<SortOrder>;
  template?: InputMaybe<TemplateOrderByWithRelationInput>;
  templateId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  upstreamUrl?: InputMaybe<SortOrder>;
  users?: InputMaybe<UserOrderByRelationAggregateInput>;
  webhooks?: InputMaybe<ProjectWebhookOrderByRelationAggregateInput>;
};

export type ProjectPermission = {
  __typename?: "ProjectPermission";
  id: Scalars["String"];
  project: Project;
  projectId: Scalars["String"];
  role: ProjectRole;
  user: User;
  userId: Scalars["String"];
};

export type ProjectPermissionListRelationFilter = {
  every?: InputMaybe<ProjectPermissionWhereInput>;
  none?: InputMaybe<ProjectPermissionWhereInput>;
  some?: InputMaybe<ProjectPermissionWhereInput>;
};

export type ProjectPermissionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
  count?: InputMaybe<SortOrder>;
};

export type ProjectPermissionUserIdProjectIdCompoundUniqueInput = {
  projectId: Scalars["String"];
  userId: Scalars["String"];
};

export type ProjectPermissionWhereInput = {
  AND?: InputMaybe<Array<ProjectPermissionWhereInput>>;
  NOT?: InputMaybe<Array<ProjectPermissionWhereInput>>;
  OR?: InputMaybe<Array<ProjectPermissionWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  project?: InputMaybe<ProjectWhereInput>;
  projectId?: InputMaybe<StringFilter>;
  role?: InputMaybe<EnumProjectRoleFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserWhereInput>;
  userId?: InputMaybe<StringFilter>;
};

export type ProjectPermissionWhereUniqueInput = {
  id?: InputMaybe<Scalars["String"]>;
  userId_projectId?: InputMaybe<ProjectPermissionUserIdProjectIdCompoundUniqueInput>;
};

export type ProjectResourceAccess = {
  __typename?: "ProjectResourceAccess";
  customDomain: AccessRule;
  deployment: AccessRule;
  environment: AccessRule;
  plugin: AccessRule;
};

export enum ProjectRole {
  Admin = "ADMIN",
  Member = "MEMBER",
  Viewer = "VIEWER",
}

export type ProjectTeam = {
  __typename?: "ProjectTeam";
  avatar?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  name: Scalars["String"];
};

export type ProjectToken = {
  __typename?: "ProjectToken";
  createdAt: Scalars["DateTime"];
  displayToken: Scalars["String"];
  environment: Environment;
  environmentId: Scalars["String"];
  id: Scalars["String"];
  name: Scalars["String"];
  projectId: Scalars["String"];
};

export type ProjectTokenListRelationFilter = {
  every?: InputMaybe<ProjectTokenWhereInput>;
  none?: InputMaybe<ProjectTokenWhereInput>;
  some?: InputMaybe<ProjectTokenWhereInput>;
};

export type ProjectTokenOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
  count?: InputMaybe<SortOrder>;
};

export type ProjectTokenWhereInput = {
  AND?: InputMaybe<Array<ProjectTokenWhereInput>>;
  NOT?: InputMaybe<Array<ProjectTokenWhereInput>>;
  OR?: InputMaybe<Array<ProjectTokenWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  displayToken?: InputMaybe<StringFilter>;
  environment?: InputMaybe<EnvironmentWhereInput>;
  environmentId?: InputMaybe<StringFilter>;
  hashedToken?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  project?: InputMaybe<ProjectWhereInput>;
  projectId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ProjectUsage = {
  __typename?: "ProjectUsage";
  avgUsage: UsageItem;
  buckets: Array<UsageBucket>;
  currentUsage: UsageItem;
  endDate: Scalars["String"];
  estimatedUsage: UsageItem;
  executionTimeMinutes: Scalars["Float"];
  plugins: Array<PluginUsage>;
  project: Project;
  services: Array<ServiceUsage>;
  startDate: Scalars["String"];
};

export type ProjectWebhook = {
  __typename?: "ProjectWebhook";
  id: Scalars["String"];
  lastStatus?: Maybe<Scalars["Int"]>;
  url: Scalars["String"];
};

export type ProjectWebhookListRelationFilter = {
  every?: InputMaybe<ProjectWebhookWhereInput>;
  none?: InputMaybe<ProjectWebhookWhereInput>;
  some?: InputMaybe<ProjectWebhookWhereInput>;
};

export type ProjectWebhookOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
  count?: InputMaybe<SortOrder>;
};

export type ProjectWebhookWhereInput = {
  AND?: InputMaybe<Array<ProjectWebhookWhereInput>>;
  NOT?: InputMaybe<Array<ProjectWebhookWhereInput>>;
  OR?: InputMaybe<Array<ProjectWebhookWhereInput>>;
  Project?: InputMaybe<ProjectWhereInput>;
  id?: InputMaybe<StringFilter>;
  lastStatus?: InputMaybe<IntNullableFilter>;
  projectId?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type ProjectWebhookWhereUniqueInput = {
  id?: InputMaybe<Scalars["String"]>;
};

export type ProjectWhereInput = {
  AND?: InputMaybe<Array<ProjectWhereInput>>;
  Log?: InputMaybe<LogListRelationFilter>;
  NOT?: InputMaybe<Array<ProjectWhereInput>>;
  OR?: InputMaybe<Array<ProjectWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  deploymentTriggers?: InputMaybe<DeploymentTriggerListRelationFilter>;
  deployments?: InputMaybe<DeploymentListRelationFilter>;
  description?: InputMaybe<StringNullableFilter>;
  environments?: InputMaybe<EnvironmentListRelationFilter>;
  events?: InputMaybe<EventListRelationFilter>;
  expiredAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  integrations?: InputMaybe<IntegrationListRelationFilter>;
  inviteCodes?: InputMaybe<InviteCodeListRelationFilter>;
  isPublic?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringFilter>;
  partnerProject?: InputMaybe<PartnerProjectWhereInput>;
  partnerProjectId?: InputMaybe<StringNullableFilter>;
  plugins?: InputMaybe<PluginListRelationFilter>;
  prDeploys?: InputMaybe<BoolFilter>;
  projectPermissions?: InputMaybe<ProjectPermissionListRelationFilter>;
  projectTokens?: InputMaybe<ProjectTokenListRelationFilter>;
  services?: InputMaybe<ServiceListRelationFilter>;
  sourceTemplate?: InputMaybe<TemplateWhereInput>;
  team?: InputMaybe<TeamWhereInput>;
  teamId?: InputMaybe<StringNullableFilter>;
  template?: InputMaybe<TemplateWhereInput>;
  templateId?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  upstreamUrl?: InputMaybe<StringNullableFilter>;
  users?: InputMaybe<UserListRelationFilter>;
  webhooks?: InputMaybe<ProjectWebhookListRelationFilter>;
};

export type ProjectWhereUniqueInput = {
  id?: InputMaybe<Scalars["String"]>;
};

export type ProviderAuth = {
  __typename?: "ProviderAuth";
  email: Scalars["String"];
  id: Scalars["String"];
  metadata: Scalars["Json"];
  provider: Scalars["String"];
  userId: Scalars["String"];
};

export type ProviderAuthListRelationFilter = {
  every?: InputMaybe<ProviderAuthWhereInput>;
  none?: InputMaybe<ProviderAuthWhereInput>;
  some?: InputMaybe<ProviderAuthWhereInput>;
};

export type ProviderAuthOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
  count?: InputMaybe<SortOrder>;
};

export type ProviderAuthProviderIdDeletedAtCompoundUniqueInput = {
  deletedAt: Scalars["DateTime"];
  providerId: Scalars["String"];
};

export type ProviderAuthWhereInput = {
  AND?: InputMaybe<Array<ProviderAuthWhereInput>>;
  NOT?: InputMaybe<Array<ProviderAuthWhereInput>>;
  OR?: InputMaybe<Array<ProviderAuthWhereInput>>;
  accessToken?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  provider?: InputMaybe<StringFilter>;
  providerId?: InputMaybe<StringFilter>;
  refreshToken?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserWhereInput>;
  userId?: InputMaybe<StringFilter>;
};

export type ProviderAuthWhereUniqueInput = {
  id?: InputMaybe<Scalars["String"]>;
  providerId_deletedAt?: InputMaybe<ProviderAuthProviderIdDeletedAtCompoundUniqueInput>;
};

export type QrCode = {
  __typename?: "QRCode";
  secret: Scalars["String"];
  uri: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
  adminAllServices: ServiceConnection;
  /** Get all custom domains for an environment */
  allCustomDomainsForEnvironment: AllDomains;
  /** Get all deployments */
  allDeployments: PaginatedDeploys;
  /**
   * Get all deployments for an environment
   * @deprecated Use `deployments` instead
   */
  allDeploymentsForEnvironment: Array<Deployment>;
  /**
   * Get all the environment variables that belong to a specific environment
   * @deprecated Use decryptedVariablesQuery instead
   */
  allEnvsForEnvironment: Scalars["Json"];
  /**
   * Get all the environment variables for a plugin in an environment
   * @deprecated Use decryptedVariablesQuery instead instead
   */
  allEnvsForPlugin: Scalars["Json"];
  allProjects: PaginatedProjects;
  /** Return all teams */
  allTeams: PaginatedTeams;
  allUsers: PaginatedUsers;
  /** Get approved templates */
  approvedTemplates: Array<Template>;
  /** Find available plugins by project id */
  availablePluginsForProject: Array<Scalars["String"]>;
  /** Fetch build logs */
  buildLogs: Array<Log>;
  /** Get all the decrypted rendered variables that belong to a plugin in an environment */
  decryptedVariables: Scalars["Json"];
  /** Get all the decrypted variables accessible for a specific service */
  decryptedVariablesForService: Scalars["Json"];
  /** Find a single deployment */
  deployment: Deployment;
  /** Find a deployment by public url */
  deploymentByDomain: DeploymentByDomain;
  /**
   * Find a deployment by id
   * @deprecated Use the `deployment` query instead
   */
  deploymentById: Deployment;
  /** Fetch deploy logs */
  deploymentLogs: Array<Log>;
  deployments: DeploymentConnection;
  /** Find a single environment */
  environment: Environment;
  /**
   * Get an environment by id
   * @deprecated Use the `environment` instead
   */
  environmentById: Environment;
  environments: EnvironmentConnection;
  /** Get an invite code by code */
  findInviteCodeByCode: InviteCode;
  /** Get a team for an invite code */
  findTeamByCode: Team;
  /** Find generic plugin for plugin */
  genericPlugin: GenericPlugin;
  getAllPartnerProjects: PaginatedPartnerProjects;
  /** Get all pending verification appeals. */
  getAllVerificationAppeals: PaginatedVerificationAppeals;
  /** Get list of repos connected by user */
  getAvailableGitHubRepos: Array<GitHubRepo>;
  /** Get the ban reason history for a user */
  getBanReasonHistory: Array<BanReasonHistory>;
  /** Get branches for a github repo */
  getBranchesForGitHubRepo: Array<GitHubBranch>;
  /** Get a customer for a team. Creates customer if it doesn't exist */
  getCustomerForTeam: Customer;
  /** Get a customer for the authenticated user. Creates customer if it doesn't exist */
  getCustomerForUser: Customer;
  /** Get all deployment triggers by projectId */
  getDeploymentTriggersByProject: Array<DeploymentTrigger>;
  /** Gets all email templates from Postmark */
  getEmailTemplates: Array<EmailTemplate>;
  /** Get the lockdown status of the platform */
  getLockdownStatus: LockdownStatus;
  getPartnerPayout: PartnerPayout;
  getPartnerProject: PartnerProject;
  getPayoutForProject: PartnerPayoutForProject;
  /** Get the current status of the platform */
  getPlatformStatus: PlatformStatus;
  getProjectsForPartner: Array<PartnerProject>;
  /** Gets the referral details for a user */
  getReferralDetails: ReferralDetails;
  /** Get rows for a SQLQL table */
  getSQLTable: SqlTable;
  /** Get a list of table names in SQLQL container */
  getSQLTableNames: Array<Scalars["String"]>;
  /** Get all sessions for authenticated user */
  getSessions: Array<Session>;
  /** Get a list of suggested variables for a repo */
  getSuggestedVariables: Scalars["Json"];
  /** Get the configuration for a template */
  getTemplateConfiguration: Template;
  /** Get all the versions for a template */
  getTemplateVersionsByCode: TemplateWithVersions;
  /** Checks 2FA setup status for authenticated user */
  getTwoFactorStatus: TwoFactorInfo;
  /** Get a user by id */
  getUser: User;
  /** Get preferences for logged in user */
  getUserPreferences: Preferences;
  /** Get templates created by a user */
  getUserTemplates: Array<Template>;
  /** Get a Verification Appeal for the authenticated user */
  getUserVerificationAppeal: VerificationAppeal;
  /** Get all users with same hashed IP as specified user */
  getUsersWithClashingIPs: Array<UserWithClashingIp>;
  /** Returns the state of the user's verification status */
  getVerificationStatus: VerificationStatus;
  /** Get the status of a workflow */
  getWorkflowStatus: WorkflowResult;
  /** Get a list of scopes the user has installed the installation to */
  getWritableGithubScopes: Array<Scalars["String"]>;
  githubEvents: Array<GitHubEvent>;
  /** Get the Herokus apps for the current user */
  herokuApps: Array<HerokuApp>;
  /** Get a template from a Heroku template */
  herokuTemplateToRailwayTemplate: Scalars["Json"];
  /** Get an integration auth by provider providerId */
  integrationAuth: IntegrationAuth;
  /** Get all integration auths for a user */
  integrationAuths: Array<IntegrationAuth>;
  /** Get all integrations for a project */
  integrations: Array<Integration>;
  /** Project invite codes for a specifc role */
  inviteCode: InviteCode;
  /** Checks if an environment domain is available */
  isCustomDomainAvailable: DomainAvailable;
  /** Checks if a custom domain is available */
  isEnvironmentDomainAvailable: DomainAvailable;
  /** Returns whether or not a repo name is available for a user */
  isRepoNameAvailable: Scalars["Boolean"];
  /** Get the currently authenticated user */
  me: User;
  metricsForService: EnvironmentMetrics;
  /** Get a collection in a MongoDB container */
  mongoCollectionData: MongoCollection;
  /** Get a list of collection names in a MongoDB container */
  mongoCollectionNames: Array<Scalars["String"]>;
  /** Get a list of database names in a MongoDB container */
  mongoDatabaseNames: Array<Scalars["String"]>;
  /** Fetch plugin logs */
  pluginLogs: Array<Log>;
  /** Find a single project */
  project: Project;
  /**
   * Find a project by id
   * @deprecated Use the `project` query instead
   */
  projectById: Project;
  /** Get all events for a project */
  projectEvents: PaginatedEvents;
  /** Gets users who belong to a project along with their role */
  projectMembers: Array<Member>;
  /** Get resource access rules for project-specific actions */
  projectResourceAccess: ProjectResourceAccess;
  /** Get a single project token by the value in the header */
  projectToken: ProjectToken;
  /** Get all project tokens for a project */
  projectTokens: Array<ProjectToken>;
  /** Get all webhooks belonging to a project */
  projectWebhooks: Array<ProjectWebhook>;
  projects: ProjectConnection;
  /** Get data for key in a Redis container */
  redisGetKey: Scalars["Json"];
  /** Get a list of keys in a Redis container */
  redisKeys: Array<RedisKey>;
  /** Get resource access for the current user or team */
  resourceAccess: ResourceAccess;
  /** Find a single service */
  service: Service;
  /** Check if the upstream repo for a service has an update available */
  serviceIsUpdatable: Scalars["Boolean"];
  services: ServiceConnection;
  /** Get the source template for a project */
  sourceTemplateForProject?: Maybe<Template>;
  stats: Stats;
  /** Find a team by id */
  teamById: Team;
  /** Get metadata for a template */
  templateMetadata: TemplateMetadata;
  topProjects: Array<Project>;
  /** Get the usage stats for a project in the provided date billing period */
  usageForProject: ProjectUsage;
  /** Get the usage in USD for all projects belonging to a team over the last 30 days */
  usageForTeamProjects: Array<ProjectUsage>;
  /** Get the usage in USD for all projects belonging to a user over the last 30 days */
  usageForUserProjects: Array<ProjectUsage>;
  userIdForDiscordId: Scalars["String"];
  vercelInfo: VercelInfo;
  /** Verify if a login session is valid */
  verifyLoginSession: Scalars["Boolean"];
};

export type QueryAdminAllServicesArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  includeDeleted?: InputMaybe<Scalars["Boolean"]>;
  orderBy?: InputMaybe<PaginationOrderBy>;
  where?: InputMaybe<ServiceListWhereInput>;
};

export type QueryAllCustomDomainsForEnvironmentArgs = {
  environmentId: Scalars["String"];
  projectId: Scalars["String"];
  serviceId: Scalars["String"];
};

export type QueryAllDeploymentsArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  status?: InputMaybe<DeployStatus>;
};

export type QueryAllDeploymentsForEnvironmentArgs = {
  environmentId: Scalars["ID"];
  projectId: Scalars["ID"];
};

export type QueryAllEnvsForEnvironmentArgs = {
  environmentId: Scalars["String"];
  projectId: Scalars["String"];
};

export type QueryAllEnvsForPluginArgs = {
  environmentId: Scalars["String"];
  pluginId: Scalars["String"];
  projectId: Scalars["String"];
};

export type QueryAllProjectsArgs = {
  deleted?: InputMaybe<Scalars["Boolean"]>;
  expired?: InputMaybe<Scalars["Boolean"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  query?: InputMaybe<Scalars["String"]>;
};

export type QueryAllTeamsArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  query?: InputMaybe<Scalars["String"]>;
  usageSubscription?: InputMaybe<Scalars["Boolean"]>;
};

export type QueryAllUsersArgs = {
  admin?: InputMaybe<Scalars["Boolean"]>;
  banned?: InputMaybe<Scalars["Boolean"]>;
  earlyAdopter?: InputMaybe<Scalars["Boolean"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  query?: InputMaybe<Scalars["String"]>;
  referredUsers?: InputMaybe<Scalars["Boolean"]>;
  riskLevel?: InputMaybe<Scalars["Float"]>;
  usageSubscription?: InputMaybe<Scalars["Boolean"]>;
};

export type QueryAvailablePluginsForProjectArgs = {
  projectId: Scalars["ID"];
};

export type QueryBuildLogsArgs = {
  deploymentId: Scalars["ID"];
  end?: InputMaybe<Scalars["String"]>;
  filter?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  projectId: Scalars["ID"];
};

export type QueryDecryptedVariablesArgs = {
  environmentId: Scalars["String"];
  pluginId?: InputMaybe<Scalars["String"]>;
  projectId: Scalars["String"];
  serviceId?: InputMaybe<Scalars["String"]>;
  unrendered?: InputMaybe<Scalars["Boolean"]>;
};

export type QueryDecryptedVariablesForServiceArgs = {
  environmentId: Scalars["String"];
  projectId: Scalars["String"];
  serviceId?: InputMaybe<Scalars["String"]>;
};

export type QueryDeploymentArgs = {
  id: Scalars["ID"];
};

export type QueryDeploymentByDomainArgs = {
  domain: Scalars["String"];
};

export type QueryDeploymentByIdArgs = {
  deploymentId: Scalars["ID"];
  projectId: Scalars["ID"];
};

export type QueryDeploymentLogsArgs = {
  deploymentId: Scalars["ID"];
  end?: InputMaybe<Scalars["String"]>;
  filter?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  projectId: Scalars["ID"];
};

export type QueryDeploymentsArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  includeDeleted?: InputMaybe<Scalars["Boolean"]>;
  orderBy?: InputMaybe<PaginationOrderBy>;
  where?: InputMaybe<DeploymentListWhereInput>;
};

export type QueryEnvironmentArgs = {
  id: Scalars["ID"];
};

export type QueryEnvironmentByIdArgs = {
  environmentId: Scalars["String"];
  projectId: Scalars["String"];
};

export type QueryEnvironmentsArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  includeDeleted?: InputMaybe<Scalars["Boolean"]>;
  orderBy?: InputMaybe<PaginationOrderBy>;
  where?: InputMaybe<EnvironmentListWhereInput>;
};

export type QueryFindInviteCodeByCodeArgs = {
  code: Scalars["String"];
};

export type QueryFindTeamByCodeArgs = {
  code: Scalars["String"];
};

export type QueryGenericPluginArgs = {
  pluginId: Scalars["ID"];
  projectId: Scalars["ID"];
};

export type QueryGetAllPartnerProjectsArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  query?: InputMaybe<Scalars["String"]>;
};

export type QueryGetAllVerificationAppealsArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  pending?: InputMaybe<Scalars["Boolean"]>;
  query?: InputMaybe<Scalars["String"]>;
};

export type QueryGetBanReasonHistoryArgs = {
  userId: Scalars["ID"];
};

export type QueryGetBranchesForGitHubRepoArgs = {
  owner: Scalars["String"];
  repo: Scalars["String"];
};

export type QueryGetCustomerForTeamArgs = {
  teamId: Scalars["String"];
};

export type QueryGetDeploymentTriggersByProjectArgs = {
  environmentId?: InputMaybe<Scalars["ID"]>;
  projectId: Scalars["ID"];
  serviceId?: InputMaybe<Scalars["ID"]>;
};

export type QueryGetPartnerPayoutArgs = {
  date: Scalars["String"];
};

export type QueryGetPartnerProjectArgs = {
  id: Scalars["ID"];
};

export type QueryGetPayoutForProjectArgs = {
  kickbackPercent: Scalars["Int"];
  partnerProjectId: Scalars["ID"];
};

export type QueryGetProjectsForPartnerArgs = {
  teamId?: InputMaybe<Scalars["ID"]>;
};

export type QueryGetSqlTableArgs = {
  databaseType: Scalars["String"];
  environmentId: Scalars["String"];
  limit?: InputMaybe<Scalars["Int"]>;
  name: Scalars["String"];
  offset?: InputMaybe<Scalars["Int"]>;
  pluginId: Scalars["String"];
  projectId: Scalars["String"];
};

export type QueryGetSqlTableNamesArgs = {
  databaseType: Scalars["String"];
  environmentId: Scalars["String"];
  pluginId: Scalars["String"];
  projectId: Scalars["String"];
};

export type QueryGetSuggestedVariablesArgs = {
  environmentId: Scalars["ID"];
  projectId: Scalars["ID"];
  serviceId?: InputMaybe<Scalars["ID"]>;
};

export type QueryGetTemplateConfigurationArgs = {
  code: Scalars["String"];
};

export type QueryGetTemplateVersionsByCodeArgs = {
  code: Scalars["String"];
};

export type QueryGetUserArgs = {
  userId: Scalars["String"];
};

export type QueryGetUsersWithClashingIPsArgs = {
  userId: Scalars["ID"];
};

export type QueryGetWorkflowStatusArgs = {
  projectId?: InputMaybe<Scalars["String"]>;
  workflowId: Scalars["String"];
};

export type QueryGithubEventsArgs = {
  userId: Scalars["String"];
};

export type QueryHerokuTemplateToRailwayTemplateArgs = {
  repoUrl: Scalars["String"];
};

export type QueryIntegrationAuthArgs = {
  provider: Scalars["String"];
  providerId: Scalars["String"];
};

export type QueryIntegrationsArgs = {
  projectId: Scalars["String"];
};

export type QueryInviteCodeArgs = {
  projectId: Scalars["String"];
  role: Scalars["String"];
};

export type QueryIsCustomDomainAvailableArgs = {
  domain: Scalars["String"];
};

export type QueryIsEnvironmentDomainAvailableArgs = {
  domain: Scalars["String"];
};

export type QueryIsRepoNameAvailableArgs = {
  fullRepoName: Scalars["String"];
};

export type QueryMetricsForServiceArgs = {
  endDate?: InputMaybe<Scalars["String"]>;
  environmentId: Scalars["ID"];
  pluginId?: InputMaybe<Scalars["ID"]>;
  projectId: Scalars["ID"];
  samplingRate?: InputMaybe<Scalars["Int"]>;
  serviceId?: InputMaybe<Scalars["ID"]>;
  startDate?: InputMaybe<Scalars["String"]>;
};

export type QueryMongoCollectionDataArgs = {
  database: Scalars["String"];
  environmentId: Scalars["String"];
  name: Scalars["String"];
  pluginId: Scalars["String"];
  projectId: Scalars["String"];
};

export type QueryMongoCollectionNamesArgs = {
  database: Scalars["String"];
  environmentId: Scalars["String"];
  pluginId: Scalars["String"];
  projectId: Scalars["String"];
};

export type QueryMongoDatabaseNamesArgs = {
  environmentId: Scalars["String"];
  pluginId: Scalars["String"];
  projectId: Scalars["String"];
};

export type QueryPluginLogsArgs = {
  end?: InputMaybe<Scalars["String"]>;
  environmentId: Scalars["ID"];
  filter?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  pluginId: Scalars["ID"];
  projectId: Scalars["ID"];
};

export type QueryProjectArgs = {
  id: Scalars["ID"];
};

export type QueryProjectByIdArgs = {
  projectId: Scalars["ID"];
};

export type QueryProjectEventsArgs = {
  environmentId?: InputMaybe<Scalars["ID"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  projectId: Scalars["ID"];
};

export type QueryProjectMembersArgs = {
  projectId: Scalars["ID"];
};

export type QueryProjectResourceAccessArgs = {
  projectId: Scalars["ID"];
};

export type QueryProjectTokensArgs = {
  projectId: Scalars["String"];
};

export type QueryProjectWebhooksArgs = {
  projectId: Scalars["ID"];
};

export type QueryProjectsArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  includeDeleted?: InputMaybe<Scalars["Boolean"]>;
  orderBy?: InputMaybe<PaginationOrderBy>;
  where?: InputMaybe<ProjectListWhereInput>;
};

export type QueryRedisGetKeyArgs = {
  environmentId: Scalars["String"];
  key: Scalars["String"];
  pluginId: Scalars["String"];
  projectId: Scalars["String"];
};

export type QueryRedisKeysArgs = {
  environmentId: Scalars["String"];
  pluginId: Scalars["String"];
  projectId: Scalars["String"];
};

export type QueryResourceAccessArgs = {
  explicitResourceOwner?: InputMaybe<ResourceOwnerInput>;
};

export type QueryServiceArgs = {
  id: Scalars["ID"];
};

export type QueryServiceIsUpdatableArgs = {
  projectId: Scalars["ID"];
  serviceId: Scalars["ID"];
};

export type QueryServicesArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  includeDeleted?: InputMaybe<Scalars["Boolean"]>;
  orderBy?: InputMaybe<PaginationOrderBy>;
  where?: InputMaybe<ServiceListWhereInput>;
};

export type QuerySourceTemplateForProjectArgs = {
  projectId: Scalars["String"];
};

export type QueryTeamByIdArgs = {
  teamId: Scalars["ID"];
};

export type QueryTemplateMetadataArgs = {
  code: Scalars["String"];
};

export type QueryTopProjectsArgs = {
  endDate?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
  resource: Scalars["String"];
  startDate?: InputMaybe<Scalars["String"]>;
};

export type QueryUsageForProjectArgs = {
  date?: InputMaybe<Scalars["String"]>;
  projectId: Scalars["String"];
};

export type QueryUsageForTeamProjectsArgs = {
  date?: InputMaybe<Scalars["String"]>;
  teamId: Scalars["String"];
};

export type QueryUsageForUserProjectsArgs = {
  date?: InputMaybe<Scalars["String"]>;
  userId: Scalars["String"];
};

export type QueryUserIdForDiscordIdArgs = {
  discordId: Scalars["ID"];
};

export type QueryVerifyLoginSessionArgs = {
  code: Scalars["String"];
};

export enum QueryMode {
  Default = "default",
  Insensitive = "insensitive",
}

/** Response returned after running a raw query */
export type RawQueryResponse = {
  __typename?: "RawQueryResponse";
  raw: Scalars["Json"];
};

export type RecoveryCodes = {
  __typename?: "RecoveryCodes";
  recoveryCodes: Array<Scalars["String"]>;
};

/** A key and associated type belonging to a Redis database */
export type RedisKey = {
  __typename?: "RedisKey";
  name: Scalars["String"];
  ttl?: Maybe<Scalars["BigInt"]>;
  type: Scalars["String"];
};

export type ReferralDetails = {
  __typename?: "ReferralDetails";
  referralInfo?: Maybe<ReferralInfo>;
  referredUsers: Array<ReferralInfo>;
};

export type ReferralInfo = {
  __typename?: "ReferralInfo";
  code: Scalars["String"];
  id: Scalars["String"];
  status: ReferralStatus;
};

export type ReferralInfoListRelationFilter = {
  every?: InputMaybe<ReferralInfoWhereInput>;
  none?: InputMaybe<ReferralInfoWhereInput>;
  some?: InputMaybe<ReferralInfoWhereInput>;
};

export type ReferralInfoOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
  count?: InputMaybe<SortOrder>;
};

export type ReferralInfoOrderByWithRelationInput = {
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  referrer?: InputMaybe<UserOrderByWithRelationInput>;
  referrerId?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export type ReferralInfoWhereInput = {
  AND?: InputMaybe<Array<ReferralInfoWhereInput>>;
  NOT?: InputMaybe<Array<ReferralInfoWhereInput>>;
  OR?: InputMaybe<Array<ReferralInfoWhereInput>>;
  code?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  referrer?: InputMaybe<UserWhereInput>;
  referrerId?: InputMaybe<StringNullableFilter>;
  status?: InputMaybe<EnumReferralStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserWhereInput>;
  userId?: InputMaybe<StringFilter>;
};

export enum ReferralStatus {
  RefereeCredited = "REFEREE_CREDITED",
  ReferrerCredited = "REFERRER_CREDITED",
  Registered = "REGISTERED",
}

export enum RegistrationStatus {
  Onboarded = "ONBOARDED",
  Registered = "REGISTERED",
  Waitlisted = "WAITLISTED",
}

export type RequestedPluginListRelationFilter = {
  every?: InputMaybe<RequestedPluginWhereInput>;
  none?: InputMaybe<RequestedPluginWhereInput>;
  some?: InputMaybe<RequestedPluginWhereInput>;
};

export type RequestedPluginOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
  count?: InputMaybe<SortOrder>;
};

export type RequestedPluginWhereInput = {
  AND?: InputMaybe<Array<RequestedPluginWhereInput>>;
  NOT?: InputMaybe<Array<RequestedPluginWhereInput>>;
  OR?: InputMaybe<Array<RequestedPluginWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  users?: InputMaybe<UserListRelationFilter>;
};

export type ResourceAccess = {
  __typename?: "ResourceAccess";
  project: AccessRule;
};

export type ResourceOwnerInput = {
  /** The ID of the owner */
  id: Scalars["ID"];
  /** The type of owner */
  type: ResourceOwnerType;
};

export enum ResourceOwnerType {
  Team = "TEAM",
  User = "USER",
}

export enum RestartPolicyType {
  Always = "ALWAYS",
  Never = "NEVER",
  OnFailure = "ON_FAILURE",
}

export type RiskLevelHistoryListRelationFilter = {
  every?: InputMaybe<RiskLevelHistoryWhereInput>;
  none?: InputMaybe<RiskLevelHistoryWhereInput>;
  some?: InputMaybe<RiskLevelHistoryWhereInput>;
};

export type RiskLevelHistoryOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
  count?: InputMaybe<SortOrder>;
};

export type RiskLevelHistoryWhereInput = {
  AND?: InputMaybe<Array<RiskLevelHistoryWhereInput>>;
  NOT?: InputMaybe<Array<RiskLevelHistoryWhereInput>>;
  OR?: InputMaybe<Array<RiskLevelHistoryWhereInput>>;
  actor?: InputMaybe<UserWhereInput>;
  actorId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  riskLevel?: InputMaybe<FloatNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserWhereInput>;
  userId?: InputMaybe<StringFilter>;
};

export type SqlColumnInput = {
  constraint?: InputMaybe<Scalars["String"]>;
  default?: InputMaybe<Scalars["String"]>;
  name: Scalars["String"];
  type: Scalars["String"];
};

export type SqlRowInput = {
  name: Scalars["String"];
  value: Scalars["String"];
};

/** A table belonging to an SQL database */
export type SqlTable = {
  __typename?: "SQLTable";
  columnNames: Array<Scalars["String"]>;
  columnTypes: Array<Scalars["Int"]>;
  name: Scalars["String"];
  primaryKey: Scalars["String"];
  rows: Array<Scalars["Json"]>;
  totalRows: Scalars["Int"];
};

export type Service = {
  __typename?: "Service";
  buildCommand?: Maybe<Scalars["String"]>;
  builder: Builder;
  createdAt: Scalars["DateTime"];
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deployments: Array<Deployment>;
  healthcheckPath?: Maybe<Scalars["String"]>;
  icon?: Maybe<Scalars["String"]>;
  id: Scalars["String"];
  isUpdatable: Scalars["Boolean"];
  name: Scalars["String"];
  project: Project;
  projectId: Scalars["String"];
  repoTriggers: Array<DeploymentTrigger>;
  restartPolicyMaxRetries: Scalars["Int"];
  restartPolicyType: RestartPolicyType;
  rootDirectory?: Maybe<Scalars["String"]>;
  source: Scalars["Json"];
  startCommand?: Maybe<Scalars["String"]>;
  updatedAt: Scalars["DateTime"];
  upstreamUrl?: Maybe<Scalars["String"]>;
  watchPatterns: Array<Scalars["String"]>;
};

export type ServiceDeploymentsArgs = {
  after?: InputMaybe<DeploymentWhereUniqueInput>;
  before?: InputMaybe<DeploymentWhereUniqueInput>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<DeploymentOrderByWithRelationInput>>;
  where?: InputMaybe<DeploymentWhereInput>;
};

export type ServiceRepoTriggersArgs = {
  after?: InputMaybe<DeploymentTriggerWhereUniqueInput>;
  before?: InputMaybe<DeploymentTriggerWhereUniqueInput>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type ServiceConnection = {
  __typename?: "ServiceConnection";
  nodes: Array<Service>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type ServiceDomain = {
  __typename?: "ServiceDomain";
  deletedAt?: Maybe<Scalars["DateTime"]>;
  domain: Scalars["String"];
  environmentId: Scalars["String"];
  id: Scalars["String"];
};

export type ServiceDomainListRelationFilter = {
  every?: InputMaybe<ServiceDomainWhereInput>;
  none?: InputMaybe<ServiceDomainWhereInput>;
  some?: InputMaybe<ServiceDomainWhereInput>;
};

export type ServiceDomainOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
  count?: InputMaybe<SortOrder>;
};

export type ServiceDomainWhereInput = {
  AND?: InputMaybe<Array<ServiceDomainWhereInput>>;
  NOT?: InputMaybe<Array<ServiceDomainWhereInput>>;
  OR?: InputMaybe<Array<ServiceDomainWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  domain?: InputMaybe<StringFilter>;
  environment?: InputMaybe<EnvironmentWhereInput>;
  environmentId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  service?: InputMaybe<ServiceWhereInput>;
  serviceId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ServiceExecutionTime = {
  __typename?: "ServiceExecutionTime";
  totalMinutes: Scalars["Float"];
};

export type ServiceListRelationFilter = {
  every?: InputMaybe<ServiceWhereInput>;
  none?: InputMaybe<ServiceWhereInput>;
  some?: InputMaybe<ServiceWhereInput>;
};

export type ServiceListWhereInput = {
  builder?: InputMaybe<Builder>;
  projectId?: InputMaybe<Scalars["ID"]>;
  query?: InputMaybe<Scalars["String"]>;
};

export type ServiceNameProjectIdCompoundUniqueInput = {
  name: Scalars["String"];
  projectId: Scalars["String"];
};

export type ServiceOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
  count?: InputMaybe<SortOrder>;
};

export type ServiceOrderByWithRelationInput = {
  buildCommand?: InputMaybe<SortOrder>;
  builder?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  customDomains?: InputMaybe<CustomDomainOrderByRelationAggregateInput>;
  deletedAt?: InputMaybe<SortOrder>;
  deployments?: InputMaybe<DeploymentOrderByRelationAggregateInput>;
  healthcheckPath?: InputMaybe<SortOrder>;
  icon?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  project?: InputMaybe<ProjectOrderByWithRelationInput>;
  projectId?: InputMaybe<SortOrder>;
  repoTriggers?: InputMaybe<DeploymentTriggerOrderByRelationAggregateInput>;
  restartPolicyMaxRetries?: InputMaybe<SortOrder>;
  restartPolicyType?: InputMaybe<SortOrder>;
  rootDirectory?: InputMaybe<SortOrder>;
  serviceDomains?: InputMaybe<ServiceDomainOrderByRelationAggregateInput>;
  source?: InputMaybe<SortOrder>;
  startCommand?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  upstreamUrl?: InputMaybe<SortOrder>;
  variables?: InputMaybe<VariableOrderByRelationAggregateInput>;
  watchPatterns?: InputMaybe<SortOrder>;
};

export type ServiceTemplateInput = {
  commit?: InputMaybe<Scalars["String"]>;
  hasDomain?: InputMaybe<Scalars["Boolean"]>;
  healthcheckPath?: InputMaybe<Scalars["String"]>;
  isPrivate?: InputMaybe<Scalars["Boolean"]>;
  name: Scalars["String"];
  owner: Scalars["String"];
  rootDirectory?: InputMaybe<Scalars["String"]>;
  serviceName: Scalars["String"];
  startCommand?: InputMaybe<Scalars["String"]>;
  template: Scalars["String"];
  variables?: InputMaybe<Scalars["Json"]>;
};

export type ServiceUsage = {
  __typename?: "ServiceUsage";
  deployments: Array<DeploymentUsage>;
  service: Service;
};

export type ServiceWhereInput = {
  AND?: InputMaybe<Array<ServiceWhereInput>>;
  NOT?: InputMaybe<Array<ServiceWhereInput>>;
  OR?: InputMaybe<Array<ServiceWhereInput>>;
  buildCommand?: InputMaybe<StringNullableFilter>;
  builder?: InputMaybe<EnumBuilderFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  customDomains?: InputMaybe<CustomDomainListRelationFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  deployments?: InputMaybe<DeploymentListRelationFilter>;
  healthcheckPath?: InputMaybe<StringNullableFilter>;
  icon?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  project?: InputMaybe<ProjectWhereInput>;
  projectId?: InputMaybe<StringFilter>;
  repoTriggers?: InputMaybe<DeploymentTriggerListRelationFilter>;
  restartPolicyMaxRetries?: InputMaybe<IntFilter>;
  restartPolicyType?: InputMaybe<EnumRestartPolicyTypeFilter>;
  rootDirectory?: InputMaybe<StringNullableFilter>;
  serviceDomains?: InputMaybe<ServiceDomainListRelationFilter>;
  startCommand?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  upstreamUrl?: InputMaybe<StringNullableFilter>;
  variables?: InputMaybe<VariableListRelationFilter>;
  watchPatterns?: InputMaybe<StringNullableListFilter>;
};

export type ServiceWhereUniqueInput = {
  id?: InputMaybe<Scalars["String"]>;
  name_projectId?: InputMaybe<ServiceNameProjectIdCompoundUniqueInput>;
};

export type Session = {
  __typename?: "Session";
  createdAt: Scalars["DateTime"];
  expiredAt: Scalars["DateTime"];
  id: Scalars["String"];
  isCurrent: Scalars["Boolean"];
  name: Scalars["String"];
  type: SessionType;
  updatedAt: Scalars["DateTime"];
};

export type SessionListRelationFilter = {
  every?: InputMaybe<SessionWhereInput>;
  none?: InputMaybe<SessionWhereInput>;
  some?: InputMaybe<SessionWhereInput>;
};

export type SessionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
  count?: InputMaybe<SortOrder>;
};

export enum SessionType {
  Browser = "BROWSER",
  Cli = "CLI",
}

export type SessionWhereInput = {
  AND?: InputMaybe<Array<SessionWhereInput>>;
  NOT?: InputMaybe<Array<SessionWhereInput>>;
  OR?: InputMaybe<Array<SessionWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  expiredAt?: InputMaybe<DateTimeFilter>;
  hashedIP?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  type?: InputMaybe<EnumSessionTypeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserWhereInput>;
  userId?: InputMaybe<StringFilter>;
};

export enum SortOrder {
  Asc = "asc",
  Desc = "desc",
}

export type Stats = {
  __typename?: "Stats";
  activeProjects: Array<Project>;
  dailyActiveProjects: Scalars["Int"];
  deploysInProgress: Scalars["Int"];
  deploysLastHour: Scalars["Int"];
  latestDeploys: Array<Deployment>;
  latestProjects: Array<Project>;
  latestUsers: Array<User>;
  numDeploysActive: Scalars["Int"];
  numDeploysTotal: Scalars["Int"];
  numProjects: Scalars["Int"];
  numSubscribed: Scalars["Int"];
  numTeams: Scalars["Int"];
  numUsers: Scalars["Int"];
  numVerifiedUsers: Scalars["Int"];
  totalPlatformUsage?: Maybe<TotalUsage>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars["String"]>;
  endsWith?: InputMaybe<Scalars["String"]>;
  equals?: InputMaybe<Scalars["String"]>;
  gt?: InputMaybe<Scalars["String"]>;
  gte?: InputMaybe<Scalars["String"]>;
  in?: InputMaybe<Array<Scalars["String"]>>;
  lt?: InputMaybe<Scalars["String"]>;
  lte?: InputMaybe<Scalars["String"]>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars["String"]>>;
  startsWith?: InputMaybe<Scalars["String"]>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars["String"]>;
  endsWith?: InputMaybe<Scalars["String"]>;
  equals?: InputMaybe<Scalars["String"]>;
  gt?: InputMaybe<Scalars["String"]>;
  gte?: InputMaybe<Scalars["String"]>;
  in?: InputMaybe<Array<Scalars["String"]>>;
  lt?: InputMaybe<Scalars["String"]>;
  lte?: InputMaybe<Scalars["String"]>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["String"]>>;
  startsWith?: InputMaybe<Scalars["String"]>;
};

export type StringNullableListFilter = {
  equals?: InputMaybe<Array<Scalars["String"]>>;
  has?: InputMaybe<Scalars["String"]>;
  hasEvery?: InputMaybe<Array<Scalars["String"]>>;
  hasSome?: InputMaybe<Array<Scalars["String"]>>;
  isEmpty?: InputMaybe<Scalars["Boolean"]>;
};

export type Subscription = {
  __typename?: "Subscription";
  /** Tail a stream of build logs */
  buildLogs: Array<Log>;
  /** Tail a stream of deploy logs */
  deploymentLogs: Array<Log>;
  /** Tail a stream of plugin logs */
  pluginLogs: Array<Log>;
};

export type SubscriptionBuildLogsArgs = {
  deploymentId: Scalars["ID"];
  filter?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  projectId: Scalars["ID"];
};

export type SubscriptionDeploymentLogsArgs = {
  deploymentId: Scalars["ID"];
  filter?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  projectId: Scalars["ID"];
};

export type SubscriptionPluginLogsArgs = {
  environmentId: Scalars["ID"];
  filter?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  pluginId: Scalars["ID"];
  projectId: Scalars["ID"];
};

export type SubscriptionItem = {
  __typename?: "SubscriptionItem";
  itemId: Scalars["String"];
  priceId: Scalars["String"];
  productId: Scalars["String"];
  quantity?: Maybe<Scalars["BigInt"]>;
};

export enum SubscriptionState {
  Active = "ACTIVE",
  Cancelled = "CANCELLED",
  Inactive = "INACTIVE",
  PastDue = "PAST_DUE",
  Unpaid = "UNPAID",
}

export type Team = {
  __typename?: "Team";
  avatar?: Maybe<Scalars["String"]>;
  createdAt: Scalars["DateTime"];
  customer?: Maybe<Customer>;
  discordRole?: Maybe<Scalars["String"]>;
  id: Scalars["String"];
  members: Array<TeamMember>;
  name: Scalars["String"];
  projects: Array<Project>;
  teamPermissions: Array<TeamPermission>;
  updatedAt: Scalars["DateTime"];
};

export type TeamProjectsArgs = {
  after?: InputMaybe<ProjectWhereUniqueInput>;
  before?: InputMaybe<ProjectWhereUniqueInput>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<ProjectOrderByWithRelationInput>>;
};

export type TeamTeamPermissionsArgs = {
  after?: InputMaybe<TeamPermissionWhereUniqueInput>;
  before?: InputMaybe<TeamPermissionWhereUniqueInput>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type TeamListRelationFilter = {
  every?: InputMaybe<TeamWhereInput>;
  none?: InputMaybe<TeamWhereInput>;
  some?: InputMaybe<TeamWhereInput>;
};

export type TeamMember = {
  __typename?: "TeamMember";
  avatar?: Maybe<Scalars["String"]>;
  email: Scalars["String"];
  id: Scalars["String"];
  name?: Maybe<Scalars["String"]>;
  role: TeamRole;
};

export type TeamOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
  count?: InputMaybe<SortOrder>;
};

export type TeamOrderByWithRelationInput = {
  avatar?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  customer?: InputMaybe<CustomerOrderByWithRelationInput>;
  deletedAt?: InputMaybe<SortOrder>;
  discordRole?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  members?: InputMaybe<UserOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  projects?: InputMaybe<ProjectOrderByRelationAggregateInput>;
  teamPermissions?: InputMaybe<TeamPermissionOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TeamPermission = {
  __typename?: "TeamPermission";
  createdAt: Scalars["DateTime"];
  id: Scalars["String"];
  role: TeamRole;
  teamId: Scalars["String"];
  updatedAt: Scalars["DateTime"];
  userId: Scalars["String"];
};

export type TeamPermissionListRelationFilter = {
  every?: InputMaybe<TeamPermissionWhereInput>;
  none?: InputMaybe<TeamPermissionWhereInput>;
  some?: InputMaybe<TeamPermissionWhereInput>;
};

export type TeamPermissionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
  count?: InputMaybe<SortOrder>;
};

export type TeamPermissionUserIdTeamIdCompoundUniqueInput = {
  teamId: Scalars["String"];
  userId: Scalars["String"];
};

export type TeamPermissionWhereInput = {
  AND?: InputMaybe<Array<TeamPermissionWhereInput>>;
  NOT?: InputMaybe<Array<TeamPermissionWhereInput>>;
  OR?: InputMaybe<Array<TeamPermissionWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  role?: InputMaybe<EnumTeamRoleFilter>;
  team?: InputMaybe<TeamWhereInput>;
  teamId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserWhereInput>;
  userId?: InputMaybe<StringFilter>;
};

export type TeamPermissionWhereUniqueInput = {
  id?: InputMaybe<Scalars["String"]>;
  userId_teamId?: InputMaybe<TeamPermissionUserIdTeamIdCompoundUniqueInput>;
};

export enum TeamRole {
  Admin = "ADMIN",
  Member = "MEMBER",
}

export type TeamWhereInput = {
  AND?: InputMaybe<Array<TeamWhereInput>>;
  NOT?: InputMaybe<Array<TeamWhereInput>>;
  OR?: InputMaybe<Array<TeamWhereInput>>;
  avatar?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  customer?: InputMaybe<CustomerWhereInput>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  discordRole?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  members?: InputMaybe<UserListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  projects?: InputMaybe<ProjectListRelationFilter>;
  teamPermissions?: InputMaybe<TeamPermissionListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type TeamWhereUniqueInput = {
  id?: InputMaybe<Scalars["String"]>;
};

export type Template = {
  __typename?: "Template";
  code: Scalars["String"];
  configuration: Scalars["Json"];
  createdAt: Scalars["DateTime"];
  demoProjectId?: Maybe<Scalars["String"]>;
  id: Scalars["String"];
  projects: Scalars["Int"];
  userId?: Maybe<Scalars["String"]>;
};

export type TemplateListRelationFilter = {
  every?: InputMaybe<TemplateWhereInput>;
  none?: InputMaybe<TemplateWhereInput>;
  some?: InputMaybe<TemplateWhereInput>;
};

export type TemplateMetadata = {
  __typename?: "TemplateMetadata";
  description: Scalars["String"];
  name: Scalars["String"];
  readmeContent: Scalars["String"];
};

export type TemplateOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
  count?: InputMaybe<SortOrder>;
};

export type TemplateOrderByWithRelationInput = {
  code?: InputMaybe<SortOrder>;
  configuration?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  demoProject?: InputMaybe<ProjectOrderByWithRelationInput>;
  demoProjectId?: InputMaybe<SortOrder>;
  deployedProjects?: InputMaybe<ProjectOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  isApproved?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
  versions?: InputMaybe<TemplateVersionOrderByRelationAggregateInput>;
};

export type TemplateVersion = {
  __typename?: "TemplateVersion";
  configuration: Scalars["Json"];
  id: Scalars["String"];
  isLatestCommit: Scalars["Boolean"];
};

export type TemplateVersionListRelationFilter = {
  every?: InputMaybe<TemplateVersionWhereInput>;
  none?: InputMaybe<TemplateVersionWhereInput>;
  some?: InputMaybe<TemplateVersionWhereInput>;
};

export type TemplateVersionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
  count?: InputMaybe<SortOrder>;
};

export type TemplateVersionWhereInput = {
  AND?: InputMaybe<Array<TemplateVersionWhereInput>>;
  NOT?: InputMaybe<Array<TemplateVersionWhereInput>>;
  OR?: InputMaybe<Array<TemplateVersionWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  template?: InputMaybe<TemplateWhereInput>;
  templateId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type TemplateWhereInput = {
  AND?: InputMaybe<Array<TemplateWhereInput>>;
  NOT?: InputMaybe<Array<TemplateWhereInput>>;
  OR?: InputMaybe<Array<TemplateWhereInput>>;
  code?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  demoProject?: InputMaybe<ProjectWhereInput>;
  demoProjectId?: InputMaybe<StringNullableFilter>;
  deployedProjects?: InputMaybe<ProjectListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  isApproved?: InputMaybe<BoolFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserWhereInput>;
  userId?: InputMaybe<StringNullableFilter>;
  versions?: InputMaybe<TemplateVersionListRelationFilter>;
};

export type TemplateWithVersions = {
  __typename?: "TemplateWithVersions";
  code: Scalars["String"];
  configuration: Scalars["Json"];
  demoProjectId?: Maybe<Scalars["String"]>;
  id: Scalars["String"];
  versions: Array<TemplateVersion>;
};

export type TotalUsage = {
  __typename?: "TotalUsage";
  current: Scalars["Float"];
  estimated: Scalars["Float"];
};

export type TwoFactorInfo = {
  __typename?: "TwoFactorInfo";
  hasRecoveryCodes: Scalars["Boolean"];
  isVerified: Scalars["Boolean"];
};

export type TwoFactorInfoOrderByWithRelationInput = {
  authenticatorAppSecret?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isVerified?: InputMaybe<SortOrder>;
  recoveryCodes?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export type TwoFactorInfoWhereInput = {
  AND?: InputMaybe<Array<TwoFactorInfoWhereInput>>;
  NOT?: InputMaybe<Array<TwoFactorInfoWhereInput>>;
  OR?: InputMaybe<Array<TwoFactorInfoWhereInput>>;
  authenticatorAppSecret?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  isVerified?: InputMaybe<BoolFilter>;
  recoveryCodes?: InputMaybe<JsonNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserWhereInput>;
  userId?: InputMaybe<StringFilter>;
};

export type UsageBucket = {
  __typename?: "UsageBucket";
  avgUsage: UsageItem;
  date: Scalars["String"];
  usage: UsageItem;
};

export type UsageItem = {
  __typename?: "UsageItem";
  cpuPercentvCPU: Scalars["Float"];
  memoryUsageGB: Scalars["Float"];
};

export type User = {
  __typename?: "User";
  agreedFairUse: Scalars["Boolean"];
  avatar?: Maybe<Scalars["String"]>;
  banReason?: Maybe<Scalars["String"]>;
  cost: UserCost;
  createdAt: Scalars["DateTime"];
  customer?: Maybe<Customer>;
  discordRoles: Array<Scalars["String"]>;
  email: Scalars["String"];
  executionTime?: Maybe<Scalars["Float"]>;
  flags: Array<UserFlag>;
  has2FA: Scalars["Boolean"];
  id: Scalars["String"];
  isAdmin: Scalars["Boolean"];
  isDevPlan: Scalars["Boolean"];
  isVerified: Scalars["Boolean"];
  lastLogin: Scalars["DateTime"];
  name?: Maybe<Scalars["String"]>;
  plan: Plan;
  preferences?: Maybe<Preferences>;
  projects: Array<Project>;
  providerAuths: Array<ProviderAuth>;
  referredUsers: Array<ReferralInfo>;
  registrationStatus: RegistrationStatus;
  riskLevel?: Maybe<Scalars["Float"]>;
  teams: Array<Team>;
  termsAgreedOn?: Maybe<Scalars["DateTime"]>;
};

export type UserProjectsArgs = {
  after?: InputMaybe<ProjectWhereUniqueInput>;
  before?: InputMaybe<ProjectWhereUniqueInput>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<ProjectOrderByWithRelationInput>>;
};

export type UserProviderAuthsArgs = {
  after?: InputMaybe<ProviderAuthWhereUniqueInput>;
  before?: InputMaybe<ProviderAuthWhereUniqueInput>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type UserTeamsArgs = {
  after?: InputMaybe<TeamWhereUniqueInput>;
  before?: InputMaybe<TeamWhereUniqueInput>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type UserCost = {
  __typename?: "UserCost";
  current: Scalars["Float"];
  estimated: Scalars["Float"];
};

export enum UserFlag { Beta = "BETA" }

export type UserListRelationFilter = {
  every?: InputMaybe<UserWhereInput>;
  none?: InputMaybe<UserWhereInput>;
  some?: InputMaybe<UserWhereInput>;
};

export type UserOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
  count?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  IntegrationAuth?: InputMaybe<IntegrationAuthOrderByRelationAggregateInput>;
  avatar?: InputMaybe<SortOrder>;
  banReason?: InputMaybe<SortOrder>;
  banReasonActions?: InputMaybe<BanReasonHistoryOrderByRelationAggregateInput>;
  banReasonHistory?: InputMaybe<BanReasonHistoryOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  createdTemplates?: InputMaybe<TemplateOrderByRelationAggregateInput>;
  customer?: InputMaybe<CustomerOrderByWithRelationInput>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isAdmin?: InputMaybe<SortOrder>;
  lastLogin?: InputMaybe<SortOrder>;
  magicAuths?: InputMaybe<MagicAuthOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  plan?: InputMaybe<SortOrder>;
  preferences?: InputMaybe<PreferencesOrderByWithRelationInput>;
  projectPermissions?: InputMaybe<ProjectPermissionOrderByRelationAggregateInput>;
  projects?: InputMaybe<ProjectOrderByRelationAggregateInput>;
  providerAuths?: InputMaybe<ProviderAuthOrderByRelationAggregateInput>;
  referralInfo?: InputMaybe<ReferralInfoOrderByWithRelationInput>;
  referredUsers?: InputMaybe<ReferralInfoOrderByRelationAggregateInput>;
  registrationStatus?: InputMaybe<SortOrder>;
  requestedPlugins?: InputMaybe<RequestedPluginOrderByRelationAggregateInput>;
  riskLevel?: InputMaybe<SortOrder>;
  riskLevelActions?: InputMaybe<RiskLevelHistoryOrderByRelationAggregateInput>;
  riskLevelHistory?: InputMaybe<RiskLevelHistoryOrderByRelationAggregateInput>;
  sessions?: InputMaybe<SessionOrderByRelationAggregateInput>;
  teamPermissions?: InputMaybe<TeamPermissionOrderByRelationAggregateInput>;
  teams?: InputMaybe<TeamOrderByRelationAggregateInput>;
  termsAgreedOn?: InputMaybe<SortOrder>;
  tokens?: InputMaybe<UserTokenOrderByRelationAggregateInput>;
  twoFactorInfo?: InputMaybe<TwoFactorInfoOrderByWithRelationInput>;
  upDeployments?: InputMaybe<DeploymentOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
  verificationAppeal?: InputMaybe<VerificationAppealOrderByWithRelationInput>;
};

export type UserTokenListRelationFilter = {
  every?: InputMaybe<UserTokenWhereInput>;
  none?: InputMaybe<UserTokenWhereInput>;
  some?: InputMaybe<UserTokenWhereInput>;
};

export type UserTokenOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
  count?: InputMaybe<SortOrder>;
};

export type UserTokenWhereInput = {
  AND?: InputMaybe<Array<UserTokenWhereInput>>;
  NOT?: InputMaybe<Array<UserTokenWhereInput>>;
  OR?: InputMaybe<Array<UserTokenWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  displayToken?: InputMaybe<StringFilter>;
  hashedToken?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserWhereInput>;
  userId?: InputMaybe<StringFilter>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  IntegrationAuth?: InputMaybe<IntegrationAuthListRelationFilter>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  avatar?: InputMaybe<StringNullableFilter>;
  banReason?: InputMaybe<StringNullableFilter>;
  banReasonActions?: InputMaybe<BanReasonHistoryListRelationFilter>;
  banReasonHistory?: InputMaybe<BanReasonHistoryListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdTemplates?: InputMaybe<TemplateListRelationFilter>;
  customer?: InputMaybe<CustomerWhereInput>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  isAdmin?: InputMaybe<BoolFilter>;
  lastLogin?: InputMaybe<DateTimeFilter>;
  magicAuths?: InputMaybe<MagicAuthListRelationFilter>;
  name?: InputMaybe<StringNullableFilter>;
  plan?: InputMaybe<EnumPlanFilter>;
  preferences?: InputMaybe<PreferencesWhereInput>;
  projectPermissions?: InputMaybe<ProjectPermissionListRelationFilter>;
  projects?: InputMaybe<ProjectListRelationFilter>;
  providerAuths?: InputMaybe<ProviderAuthListRelationFilter>;
  referralInfo?: InputMaybe<ReferralInfoWhereInput>;
  referredUsers?: InputMaybe<ReferralInfoListRelationFilter>;
  registrationStatus?: InputMaybe<EnumRegistrationStatusFilter>;
  requestedPlugins?: InputMaybe<RequestedPluginListRelationFilter>;
  riskLevel?: InputMaybe<FloatNullableFilter>;
  riskLevelActions?: InputMaybe<RiskLevelHistoryListRelationFilter>;
  riskLevelHistory?: InputMaybe<RiskLevelHistoryListRelationFilter>;
  sessions?: InputMaybe<SessionListRelationFilter>;
  teamPermissions?: InputMaybe<TeamPermissionListRelationFilter>;
  teams?: InputMaybe<TeamListRelationFilter>;
  termsAgreedOn?: InputMaybe<DateTimeNullableFilter>;
  tokens?: InputMaybe<UserTokenListRelationFilter>;
  twoFactorInfo?: InputMaybe<TwoFactorInfoWhereInput>;
  upDeployments?: InputMaybe<DeploymentListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  verificationAppeal?: InputMaybe<VerificationAppealWhereInput>;
};

export type UserWithClashingIp = {
  __typename?: "UserWithClashingIP";
  email: Scalars["String"];
  id: Scalars["String"];
  isBanned: Scalars["Boolean"];
};

export type Variable = {
  __typename?: "Variable";
  createdAt: Scalars["DateTime"];
  environment: Environment;
  environmentId: Scalars["String"];
  id: Scalars["String"];
  name: Scalars["String"];
  plugin?: Maybe<Plugin>;
  pluginId?: Maybe<Scalars["String"]>;
  service?: Maybe<Service>;
  serviceId?: Maybe<Scalars["String"]>;
  updatedAt: Scalars["DateTime"];
};

export type VariableListRelationFilter = {
  every?: InputMaybe<VariableWhereInput>;
  none?: InputMaybe<VariableWhereInput>;
  some?: InputMaybe<VariableWhereInput>;
};

export type VariableNamePluginIdEnvironmentIdCompoundUniqueInput = {
  environmentId: Scalars["String"];
  name: Scalars["String"];
  pluginId: Scalars["String"];
};

export type VariableNameServiceIdEnvironmentIdCompoundUniqueInput = {
  environmentId: Scalars["String"];
  name: Scalars["String"];
  serviceId: Scalars["String"];
};

export type VariableOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
  count?: InputMaybe<SortOrder>;
};

export type VariableWhereInput = {
  AND?: InputMaybe<Array<VariableWhereInput>>;
  NOT?: InputMaybe<Array<VariableWhereInput>>;
  OR?: InputMaybe<Array<VariableWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  encryptedValue?: InputMaybe<StringFilter>;
  environment?: InputMaybe<EnvironmentWhereInput>;
  environmentId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  plugin?: InputMaybe<PluginWhereInput>;
  pluginId?: InputMaybe<StringNullableFilter>;
  service?: InputMaybe<ServiceWhereInput>;
  serviceId?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type VariableWhereUniqueInput = {
  id?: InputMaybe<Scalars["String"]>;
  name_pluginId_environmentId?: InputMaybe<VariableNamePluginIdEnvironmentIdCompoundUniqueInput>;
  name_serviceId_environmentId?: InputMaybe<VariableNameServiceIdEnvironmentIdCompoundUniqueInput>;
};

export type VercelAccount = {
  __typename?: "VercelAccount";
  id: Scalars["String"];
  integrationAuthId: Scalars["String"];
  isUser: Scalars["Boolean"];
  name?: Maybe<Scalars["String"]>;
  projects: Array<VercelProject>;
  slug?: Maybe<Scalars["String"]>;
};

export type VercelInfo = {
  __typename?: "VercelInfo";
  accounts: Array<VercelAccount>;
};

export type VercelProject = {
  __typename?: "VercelProject";
  accountId: Scalars["String"];
  id: Scalars["String"];
  name: Scalars["String"];
};

export type VerificationAppeal = {
  __typename?: "VerificationAppeal";
  createdAt: Scalars["DateTime"];
  id: Scalars["String"];
  repo: Scalars["String"];
  status: VerificationAppealStatus;
  updatedAt: Scalars["DateTime"];
  user: User;
  userId: Scalars["String"];
  userMessage?: Maybe<Scalars["String"]>;
};

export type VerificationAppealOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  repo?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
  userMessage?: InputMaybe<SortOrder>;
};

export enum VerificationAppealStatus {
  Applied = "APPLIED",
  Approved = "APPROVED",
  Rejected = "REJECTED",
}

export type VerificationAppealWhereInput = {
  AND?: InputMaybe<Array<VerificationAppealWhereInput>>;
  NOT?: InputMaybe<Array<VerificationAppealWhereInput>>;
  OR?: InputMaybe<Array<VerificationAppealWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  repo?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumVerificationAppealStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserWhereInput>;
  userId?: InputMaybe<StringFilter>;
  userMessage?: InputMaybe<StringNullableFilter>;
};

export type VerificationStatus = {
  __typename?: "VerificationStatus";
  card: Scalars["Boolean"];
  github: Scalars["Boolean"];
};

export type WorkflowResult = {
  __typename?: "WorkflowResult";
  status: WorkflowStatus;
};

export enum WorkflowStatus {
  Complete = "Complete",
  Error = "Error",
  Running = "Running",
}

export type CreateCustomDomainMutationVariables = Exact<
  {
    projectId: Scalars["String"];
    environmentId: Scalars["String"];
    domain: Scalars["String"];
    serviceId: Scalars["String"];
  }
>;

export type CreateCustomDomainMutation = {
  __typename?: "Mutation";
  createCustomDomain: { __typename?: "CustomDomain"; id: string };
};

export type DeleteCustomDomainMutationVariables = Exact<
  {
    projectId: Scalars["String"];
    environmentId: Scalars["String"];
    customDomainId: Scalars["String"];
  }
>;

export type DeleteCustomDomainMutation = {
  __typename?: "Mutation";
  deleteCustomDomain: boolean;
};

export type ServiceDomainCreateMutationVariables = Exact<
  {
    projectId: Scalars["ID"];
    environmentId: Scalars["ID"];
    serviceId: Scalars["ID"];
  }
>;

export type ServiceDomainCreateMutation = {
  __typename?: "Mutation";
  serviceDomainCreate: { __typename?: "ServiceDomain"; domain: string };
};

export type ServiceDomainDeleteMutationVariables = Exact<
  {
    serviceDomainDeleteId: Scalars["ID"];
    projectId: Scalars["ID"];
    environmentId: Scalars["ID"];
  }
>;

export type ServiceDomainDeleteMutation = {
  __typename?: "Mutation";
  serviceDomainDelete: boolean;
};

export type SetDomainForEnvironmentMutationVariables = Exact<
  {
    projectId: Scalars["String"];
    environmentId: Scalars["String"];
    domain: Scalars["String"];
    serviceId: Scalars["String"];
  }
>;

export type SetDomainForEnvironmentMutation = {
  __typename?: "Mutation";
  setDomainForEnvironment: boolean;
};

export type UpdateServiceMutationVariables = Exact<
  {
    projectId: Scalars["ID"];
    serviceId: Scalars["ID"];
    name?: InputMaybe<Scalars["String"]>;
  }
>;

export type UpdateServiceMutation = {
  __typename?: "Mutation";
  updateService: { __typename?: "Service"; id: string };
};

export type ServiceDomainsQueryVariables = Exact<
  {
    projectId: Scalars["String"];
    environmentId: Scalars["String"];
    serviceId: Scalars["String"];
  }
>;

export type ServiceDomainsQuery = {
  __typename?: "Query";
  allCustomDomainsForEnvironment: {
    __typename?: "AllDomains";
    serviceDomains: Array<
      { __typename?: "ServiceDomain"; id: string; domain: string }
    >;
    customDomains: Array<
      { __typename?: "CustomDomain"; id: string; domain: string }
    >;
  };
};

export type ServicesQueryVariables = Exact<
  {
    where?: InputMaybe<ServiceListWhereInput>;
  }
>;

export type ServicesQuery = {
  __typename?: "Query";
  services: {
    __typename?: "ServiceConnection";
    nodes: Array<{ __typename?: "Service"; id: string; name: string }>;
  };
};

export const CreateCustomDomainDocument = gql`
    mutation CreateCustomDomain($projectId: String!, $environmentId: String!, $domain: String!, $serviceId: String!) {
  createCustomDomain(
    projectId: $projectId
    environmentId: $environmentId
    domain: $domain
    serviceId: $serviceId
  ) {
    id
  }
}
    `;
export const DeleteCustomDomainDocument = gql`
    mutation DeleteCustomDomain($projectId: String!, $environmentId: String!, $customDomainId: String!) {
  deleteCustomDomain(
    projectId: $projectId
    environmentId: $environmentId
    customDomainId: $customDomainId
  )
}
    `;
export const ServiceDomainCreateDocument = gql`
    mutation ServiceDomainCreate($projectId: ID!, $environmentId: ID!, $serviceId: ID!) {
  serviceDomainCreate(
    projectId: $projectId
    environmentId: $environmentId
    serviceId: $serviceId
  ) {
    domain
  }
}
    `;
export const ServiceDomainDeleteDocument = gql`
    mutation ServiceDomainDelete($serviceDomainDeleteId: ID!, $projectId: ID!, $environmentId: ID!) {
  serviceDomainDelete(
    id: $serviceDomainDeleteId
    projectId: $projectId
    environmentId: $environmentId
  )
}
    `;
export const SetDomainForEnvironmentDocument = gql`
    mutation SetDomainForEnvironment($projectId: String!, $environmentId: String!, $domain: String!, $serviceId: String!) {
  setDomainForEnvironment(
    projectId: $projectId
    environmentId: $environmentId
    domain: $domain
    serviceId: $serviceId
  )
}
    `;
export const UpdateServiceDocument = gql`
    mutation UpdateService($projectId: ID!, $serviceId: ID!, $name: String) {
  updateService(projectId: $projectId, serviceId: $serviceId, name: $name) {
    id
  }
}
    `;
export const ServiceDomainsDocument = gql`
    query ServiceDomains($projectId: String!, $environmentId: String!, $serviceId: String!) {
  allCustomDomainsForEnvironment(
    projectId: $projectId
    environmentId: $environmentId
    serviceId: $serviceId
  ) {
    serviceDomains {
      id
      domain
    }
    customDomains {
      id
      domain
    }
  }
}
    `;
export const ServicesDocument = gql`
    query Services($where: ServiceListWhereInput) {
  services(where: $where) {
    nodes {
      id
      name
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string,
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (
  action,
  _operationName,
  _operationType,
) => action();

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper,
) {
  return {
    CreateCustomDomain(
      variables: CreateCustomDomainMutationVariables,
      requestHeaders?: Dom.RequestInit["headers"],
    ): Promise<CreateCustomDomainMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CreateCustomDomainMutation>(
            CreateCustomDomainDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        "CreateCustomDomain",
        "mutation",
      );
    },
    DeleteCustomDomain(
      variables: DeleteCustomDomainMutationVariables,
      requestHeaders?: Dom.RequestInit["headers"],
    ): Promise<DeleteCustomDomainMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DeleteCustomDomainMutation>(
            DeleteCustomDomainDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        "DeleteCustomDomain",
        "mutation",
      );
    },
    ServiceDomainCreate(
      variables: ServiceDomainCreateMutationVariables,
      requestHeaders?: Dom.RequestInit["headers"],
    ): Promise<ServiceDomainCreateMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<ServiceDomainCreateMutation>(
            ServiceDomainCreateDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        "ServiceDomainCreate",
        "mutation",
      );
    },
    ServiceDomainDelete(
      variables: ServiceDomainDeleteMutationVariables,
      requestHeaders?: Dom.RequestInit["headers"],
    ): Promise<ServiceDomainDeleteMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<ServiceDomainDeleteMutation>(
            ServiceDomainDeleteDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        "ServiceDomainDelete",
        "mutation",
      );
    },
    SetDomainForEnvironment(
      variables: SetDomainForEnvironmentMutationVariables,
      requestHeaders?: Dom.RequestInit["headers"],
    ): Promise<SetDomainForEnvironmentMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<SetDomainForEnvironmentMutation>(
            SetDomainForEnvironmentDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        "SetDomainForEnvironment",
        "mutation",
      );
    },
    UpdateService(
      variables: UpdateServiceMutationVariables,
      requestHeaders?: Dom.RequestInit["headers"],
    ): Promise<UpdateServiceMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<UpdateServiceMutation>(
            UpdateServiceDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        "UpdateService",
        "mutation",
      );
    },
    ServiceDomains(
      variables: ServiceDomainsQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"],
    ): Promise<ServiceDomainsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<ServiceDomainsQuery>(
            ServiceDomainsDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        "ServiceDomains",
        "query",
      );
    },
    Services(
      variables?: ServicesQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"],
    ): Promise<ServicesQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<ServicesQuery>(ServicesDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "Services",
        "query",
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
