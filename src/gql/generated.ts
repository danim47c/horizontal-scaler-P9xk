import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
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
  __typename?: 'AccessRule';
  disallowed?: Maybe<Scalars['String']>;
};

export type AllDomains = {
  __typename?: 'AllDomains';
  customDomains: Array<CustomDomain>;
  serviceDomains: Array<ServiceDomain>;
  suggestedServiceDomain: Scalars['String'];
};

export type BanReasonHistory = {
  __typename?: 'BanReasonHistory';
  actor?: Maybe<User>;
  banReason?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
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
  eventName: Scalars['String'];
  properties?: InputMaybe<Scalars['Json']>;
  ts: Scalars['String'];
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export enum Builder {
  Heroku = 'HEROKU',
  Nixpacks = 'NIXPACKS',
  Paketo = 'PAKETO'
}

export type CnameCheck = {
  __typename?: 'CnameCheck';
  link?: Maybe<Scalars['String']>;
  message: Scalars['String'];
  status: CnameCheckStatus;
};

export enum CnameCheckStatus {
  Error = 'ERROR',
  Info = 'INFO',
  Invalid = 'INVALID',
  Valid = 'VALID',
  Waiting = 'WAITING'
}

export type ContainerInfo = {
  __typename?: 'ContainerInfo';
  internalPorts: Array<Scalars['String']>;
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
  __typename?: 'CreateProjectFromTemplateResult';
  projectId: Scalars['String'];
  workflowId: Scalars['String'];
};

export type Credit = {
  __typename?: 'Credit';
  amount: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  memo?: Maybe<Scalars['String']>;
  type: CreditType;
  updatedAt: Scalars['DateTime'];
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
  Applied = 'APPLIED',
  Credit = 'CREDIT',
  Debit = 'DEBIT',
  Stripe = 'STRIPE'
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
  id?: InputMaybe<Scalars['String']>;
};

export type CustomDomain = {
  __typename?: 'CustomDomain';
  cnameCheck: CnameCheck;
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  domain: Scalars['String'];
  environmentId: Scalars['String'];
  id: Scalars['String'];
  serviceId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type CustomDomainDomainDeletedAtCompoundUniqueInput = {
  deletedAt: Scalars['DateTime'];
  domain: Scalars['String'];
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
  id?: InputMaybe<Scalars['String']>;
};

export type Customer = {
  __typename?: 'Customer';
  appliedCredits: Scalars['Float'];
  billingEmail?: Maybe<Scalars['String']>;
  creditBalance: Scalars['Float'];
  credits: Array<Credit>;
  defaultPaymentMethod?: Maybe<PaymentMethod>;
  id: Scalars['String'];
  invoices: Array<CustomerInvoice>;
  isUsageSubscriber: Scalars['Boolean'];
  remainingUsageCreditBalance: Scalars['Float'];
  state: SubscriptionState;
  stripeCustomerId: Scalars['String'];
  stripePaymentMethodId?: Maybe<Scalars['String']>;
  subscriptions: Array<CustomerSubscription>;
  teamId?: Maybe<Scalars['String']>;
  usageLimit?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['String']>;
};


export type CustomerCreditsArgs = {
  after?: InputMaybe<CreditWhereUniqueInput>;
  before?: InputMaybe<CreditWhereUniqueInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CreditOrderByWithRelationInput>>;
};

export type CustomerInvoice = {
  __typename?: 'CustomerInvoice';
  amountPaid: Scalars['Float'];
  hostedURL?: Maybe<Scalars['String']>;
  invoiceId: Scalars['String'];
  items: Array<SubscriptionItem>;
  paymentIntentStatus?: Maybe<Scalars['String']>;
  pdfURL?: Maybe<Scalars['String']>;
  periodEnd: Scalars['String'];
  periodStart: Scalars['String'];
  status?: Maybe<Scalars['String']>;
  subscriptionId?: Maybe<Scalars['String']>;
  total: Scalars['Int'];
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
  __typename?: 'CustomerSubscription';
  cancelAt?: Maybe<Scalars['String']>;
  couponId?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  items: Array<SubscriptionItem>;
  latestInvoiceId: Scalars['String'];
  nextInvoiceCurrentTotal: Scalars['Int'];
  nextInvoiceDate: Scalars['String'];
  status: Scalars['String'];
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
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export enum DeployStatus {
  Building = 'BUILDING',
  Crashed = 'CRASHED',
  Deploying = 'DEPLOYING',
  Failed = 'FAILED',
  Initializing = 'INITIALIZING',
  Removed = 'REMOVED',
  Removing = 'REMOVING',
  Skipped = 'SKIPPED',
  Success = 'SUCCESS'
}

export type Deployment = {
  __typename?: 'Deployment';
  buildLogs: Scalars['String'];
  canRollback: Scalars['Boolean'];
  containerId?: Maybe<Scalars['String']>;
  containerInfo: ContainerInfo;
  createdAt: Scalars['DateTime'];
  creator?: Maybe<User>;
  creatorId?: Maybe<Scalars['String']>;
  deployLogs: Scalars['String'];
  environment: Environment;
  environmentId: Scalars['String'];
  id: Scalars['String'];
  meta?: Maybe<Scalars['Json']>;
  project: Project;
  projectId: Scalars['String'];
  serviceId?: Maybe<Scalars['String']>;
  snapshotId?: Maybe<Scalars['String']>;
  staticUrl?: Maybe<Scalars['String']>;
  status: DeploymentStatus;
  suggestAddServiceDomain: Scalars['Boolean'];
  url?: Maybe<Scalars['String']>;
};


export type DeploymentDeployLogsArgs = {
  filter?: InputMaybe<Scalars['String']>;
};

export type DeploymentByDomain = {
  __typename?: 'DeploymentByDomain';
  activeDeployment?: Maybe<Deployment>;
  latestDeployment?: Maybe<Deployment>;
  projectId?: Maybe<Scalars['String']>;
};

export type DeploymentConnection = {
  __typename?: 'DeploymentConnection';
  nodes: Array<Deployment>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type DeploymentListRelationFilter = {
  every?: InputMaybe<DeploymentWhereInput>;
  none?: InputMaybe<DeploymentWhereInput>;
  some?: InputMaybe<DeploymentWhereInput>;
};

export type DeploymentListWhereInput = {
  environmentId?: InputMaybe<Scalars['ID']>;
  projectId?: InputMaybe<Scalars['ID']>;
  serviceId?: InputMaybe<Scalars['ID']>;
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
  __typename?: 'DeploymentSnapshot';
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  updatedAt: Scalars['DateTime'];
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
  Building = 'BUILDING',
  Crashed = 'CRASHED',
  Deploying = 'DEPLOYING',
  Failed = 'FAILED',
  Initializing = 'INITIALIZING',
  Removed = 'REMOVED',
  Removing = 'REMOVING',
  Skipped = 'SKIPPED',
  Success = 'SUCCESS'
}

export type DeploymentStatusInput = {
  in?: InputMaybe<Array<DeployStatus>>;
  notIn?: InputMaybe<Array<DeployStatus>>;
};

export type DeploymentTrigger = {
  __typename?: 'DeploymentTrigger';
  baseEnvironmentOverride?: Maybe<Environment>;
  baseEnvironmentOverrideId?: Maybe<Scalars['String']>;
  branch: Scalars['String'];
  environmentId: Scalars['String'];
  id: Scalars['String'];
  projectId: Scalars['String'];
  provider: Scalars['String'];
  repository: Scalars['String'];
  serviceId?: Maybe<Scalars['String']>;
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
  id?: InputMaybe<Scalars['String']>;
};

export type DeploymentUsage = {
  __typename?: 'DeploymentUsage';
  currentUsage: UsageItem;
  deploymentId: Scalars['ID'];
  endDate: Scalars['String'];
  environmentId: Scalars['ID'];
  estimatedUsage: UsageItem;
  serviceId: Scalars['ID'];
  startDate: Scalars['String'];
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
  containerId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};

export type DeploymentWithMetrics = {
  __typename?: 'DeploymentWithMetrics';
  deployment: Deployment;
  metrics: Array<Metric>;
};

export type DomainAvailable = {
  __typename?: 'DomainAvailable';
  available: Scalars['Boolean'];
  message: Scalars['String'];
};

export type EmailTemplate = {
  __typename?: 'EmailTemplate';
  active: Scalars['Boolean'];
  name: Scalars['String'];
  templateId: Scalars['Int'];
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
  __typename?: 'Environment';
  createdAt: Scalars['DateTime'];
  customDomains: Array<CustomDomain>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  deploymentTriggers: Array<DeploymentTrigger>;
  deployments: Array<Deployment>;
  id: Scalars['String'];
  isEphemeral: Scalars['Boolean'];
  meta?: Maybe<Scalars['Json']>;
  name: Scalars['String'];
  projectId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  variables: Array<Variable>;
};


export type EnvironmentCustomDomainsArgs = {
  after?: InputMaybe<CustomDomainWhereUniqueInput>;
  before?: InputMaybe<CustomDomainWhereUniqueInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type EnvironmentDeploymentTriggersArgs = {
  after?: InputMaybe<DeploymentTriggerWhereUniqueInput>;
  before?: InputMaybe<DeploymentTriggerWhereUniqueInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type EnvironmentDeploymentsArgs = {
  after?: InputMaybe<DeploymentWhereUniqueInput>;
  before?: InputMaybe<DeploymentWhereUniqueInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DeploymentOrderByWithRelationInput>>;
  where?: InputMaybe<DeploymentWhereInput>;
};


export type EnvironmentVariablesArgs = {
  after?: InputMaybe<VariableWhereUniqueInput>;
  before?: InputMaybe<VariableWhereUniqueInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type EnvironmentConnection = {
  __typename?: 'EnvironmentConnection';
  nodes: Array<Environment>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type EnvironmentListRelationFilter = {
  every?: InputMaybe<EnvironmentWhereInput>;
  none?: InputMaybe<EnvironmentWhereInput>;
  some?: InputMaybe<EnvironmentWhereInput>;
};

export type EnvironmentListWhereInput = {
  isEphemeral?: InputMaybe<Scalars['Boolean']>;
  projectId?: InputMaybe<Scalars['ID']>;
};

export type EnvironmentMetrics = {
  __typename?: 'EnvironmentMetrics';
  deployments: Array<DeploymentWithMetrics>;
  plugins: Array<PluginWithMetrics>;
};

export type EnvironmentNameProjectIdCompoundUniqueInput = {
  name: Scalars['String'];
  projectId: Scalars['String'];
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
  id?: InputMaybe<Scalars['String']>;
  name_projectId?: InputMaybe<EnvironmentNameProjectIdCompoundUniqueInput>;
};

export type Event = {
  __typename?: 'Event';
  action: Scalars['String'];
  createdAt: Scalars['DateTime'];
  environment?: Maybe<Environment>;
  environmentId?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  object: Scalars['String'];
  payload?: Maybe<Scalars['Json']>;
  project: Project;
  projectId: Scalars['String'];
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
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type GenericPlugin = {
  __typename?: 'GenericPlugin';
  createdAt: Scalars['DateTime'];
  genericPluginTokens: Array<GenericPluginToken>;
  id: Scalars['String'];
  pluginId: Scalars['String'];
  tabConfig: Array<GenericPluginTabConfiguration>;
  url: Scalars['String'];
};


export type GenericPluginGenericPluginTokensArgs = {
  after?: InputMaybe<GenericPluginTokenWhereUniqueInput>;
  before?: InputMaybe<GenericPluginTokenWhereUniqueInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type GenericPluginTabConfigArgs = {
  environmentId: Scalars['ID'];
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
  __typename?: 'GenericPluginTabConfiguration';
  height?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  resizable?: Maybe<Scalars['Boolean']>;
  url: Scalars['String'];
};

export type GenericPluginToken = {
  __typename?: 'GenericPluginToken';
  createdAt: Scalars['DateTime'];
  displayToken: Scalars['String'];
  id: Scalars['String'];
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
  hashedToken?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
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
  __typename?: 'GitHubBranch';
  name: Scalars['String'];
};

export type GitHubEvent = {
  __typename?: 'GitHubEvent';
  createdAt: Scalars['String'];
  type: Scalars['String'];
};

export type GitHubRepo = {
  __typename?: 'GitHubRepo';
  defaultBranch: Scalars['String'];
  fullName: Scalars['String'];
  id: Scalars['Int'];
  installationId: Scalars['String'];
  isPrivate: Scalars['Boolean'];
  name: Scalars['String'];
};

export type HerokuApp = {
  __typename?: 'HerokuApp';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export enum ImageType {
  Buildpack = 'BUILDPACK',
  Docker = 'DOCKER',
  Nixpacks = 'NIXPACKS'
}

export type Incident = {
  __typename?: 'Incident';
  id: Scalars['String'];
  message: Scalars['String'];
  status: IncidentStatus;
  url: Scalars['String'];
};

export enum IncidentStatus {
  Identified = 'IDENTIFIED',
  Investigating = 'INVESTIGATING',
  Monitoring = 'MONITORING',
  Resolved = 'RESOLVED'
}

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type Integration = {
  __typename?: 'Integration';
  config: Scalars['Json'];
  id: Scalars['String'];
  name: Scalars['String'];
  projectId: Scalars['String'];
};

export type IntegrationAuth = {
  __typename?: 'IntegrationAuth';
  id: Scalars['String'];
  integrations: Array<Integration>;
  provider: Scalars['String'];
  providerId: Scalars['String'];
};


export type IntegrationAuthIntegrationsArgs = {
  after?: InputMaybe<IntegrationWhereUniqueInput>;
  before?: InputMaybe<IntegrationWhereUniqueInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
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
  id?: InputMaybe<Scalars['String']>;
};

export type InviteCode = {
  __typename?: 'InviteCode';
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  project: Project;
  projectId: Scalars['String'];
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
  array_contains?: InputMaybe<Scalars['Json']>;
  array_ends_with?: InputMaybe<Scalars['Json']>;
  array_starts_with?: InputMaybe<Scalars['Json']>;
  equals?: InputMaybe<Scalars['Json']>;
  gt?: InputMaybe<Scalars['Json']>;
  gte?: InputMaybe<Scalars['Json']>;
  lt?: InputMaybe<Scalars['Json']>;
  lte?: InputMaybe<Scalars['Json']>;
  not?: InputMaybe<Scalars['Json']>;
  path?: InputMaybe<Array<Scalars['String']>>;
  string_contains?: InputMaybe<Scalars['String']>;
  string_ends_with?: InputMaybe<Scalars['String']>;
  string_starts_with?: InputMaybe<Scalars['String']>;
};

export type LockdownStatus = {
  __typename?: 'LockdownStatus';
  allProvisionsDisabledMsg?: Maybe<Scalars['String']>;
  anonProvisionsDisabledMsg?: Maybe<Scalars['String']>;
  signupsDisabledMsg?: Maybe<Scalars['String']>;
};

export type Log = {
  __typename?: 'Log';
  message: Scalars['String'];
  timestamp: Scalars['String'];
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
  __typename?: 'MagicAuth';
  email: Scalars['String'];
  id: Scalars['String'];
  userId: Scalars['String'];
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
  __typename?: 'Member';
  avatar?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  role: ProjectRole;
};

export type Metric = {
  __typename?: 'Metric';
  containerId: Scalars['String'];
  cpuPercentVCPU: Scalars['Float'];
  date: Scalars['String'];
  memoryLimitBytes: Scalars['BigInt'];
  memoryUsageBytes: Scalars['BigInt'];
  networkRxBytes: Scalars['BigInt'];
  networkTxBytes: Scalars['BigInt'];
};

/** A collection belonging to a MongoDB database */
export type MongoCollection = {
  __typename?: 'MongoCollection';
  data: Scalars['Json'];
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change the User's account email if there is a valid change email request. */
  accountEmailChange: Scalars['Boolean'];
  /** Add a starter to an existing project */
  addStarterToProject: Scalars['Boolean'];
  /** Deletes the user with the provided userId */
  adminDeleteUser: Scalars['Boolean'];
  /** Agree to the fair use policy for the currently authenticated user */
  agreeFairUse: Scalars['Boolean'];
  /** Alert the team of a missing command palette command */
  alertMissingCommand: Scalars['Boolean'];
  /** Apply a credit to a customer */
  applyCredit: Scalars['Boolean'];
  /** Attach a payment method to a customer */
  attachPaymentMethod: Scalars['Json'];
  /** Auth a login session for a user */
  authLoginSession: Scalars['Boolean'];
  /** Ban user */
  banUser: Scalars['Boolean'];
  /** Cancel a deployment */
  cancelDeployment: Scalars['Boolean'];
  /** Cancel a login session */
  cancelLoginSession: Scalars['Boolean'];
  /** Change the permission of a user in a team */
  changeTeamPermission: Scalars['Boolean'];
  /** Change the role for a user and project */
  changeUserRole: Member;
  /** Convert a public temporary project into a private owned one */
  claimProject: Project;
  /** Confirm the transfer of project ownership */
  confirmOwnershipTransfer: Scalars['Boolean'];
  /** Connect an exist service to a repo */
  connectServiceToRepo: Scalars['Boolean'];
  /** Get a token for a login session if it exists */
  consumeLoginSession?: Maybe<Scalars['String']>;
  /** Create a custom domain for an environment */
  createCustomDomain: CustomDomain;
  /** Create a billing portal for a Stripe customer */
  createCustomerBillingPortal: Scalars['String'];
  /** Add a deployment trigger */
  createDeploymentTrigger: DeploymentTrigger;
  /** Add an environment to a project */
  createEnvironment: Environment;
  /** Creates an ephemeral environment for a project */
  createEphemeralEnvironment: Environment;
  /** Create new generic plugin and provision containers for all environments in project */
  createGenericPlugin: Plugin;
  /** Create new plugin token for all environments in project */
  createGenericPluginToken: Scalars['String'];
  /** Create an integration for a project */
  createIntegration: Integration;
  /** Get an invite code for a team and role */
  createInviteCodeForTeam: Scalars['String'];
  /** Start a CLI login session */
  createLoginSession: Scalars['String'];
  createPartnerProject: Scalars['Boolean'];
  /** Create new plugin and provision containers for all environments in project */
  createPlugin: Plugin;
  /** Create a new project with plugins */
  createProject: Project;
  /** Create a project and setup a deploy trigger immediately */
  createProjectFromRepo: Project;
  /** Create a project from a template repo and list of plugins */
  createProjectFromTemplate: CreateProjectFromTemplateResult;
  /** Create a token for a project that has access to a specific environment */
  createProjectToken: Scalars['String'];
  /** Create a table in a SQLQL database container */
  createSQLTable: Scalars['Boolean'];
  /** Create a service in a project */
  createService: Service;
  /** Create a subscription for a team */
  createSubscriptionForCustomer: Scalars['Json'];
  /** Create a team */
  createTeam: Team;
  /** Create a service-based template */
  createTemplate: Template;
  /** Create a Verification Appeal for a risky user. */
  createVerificationAppeal: Scalars['Boolean'];
  /** Create a webhook on a project */
  createWebhook: ProjectWebhook;
  /** Purchase credits for a Railway customer */
  customerPurchaseCredits: Scalars['Json'];
  /** Deletes a custom domain for an environment */
  deleteCustomDomain: Scalars['Boolean'];
  /** Deletes Environment and destroys all containers associated with it */
  deleteEnvironment: Scalars['Boolean'];
  /** Delete a plugin token */
  deleteGenericPluginToken: Scalars['Boolean'];
  /** Deletes a plugin and destroys all containers associated with it */
  deletePlugin: Scalars['Boolean'];
  /** Deletes project and destroys all containers associated with it */
  deleteProject: Scalars['Boolean'];
  /** Delete project token */
  deleteProjectToken: Scalars['Boolean'];
  /** Delete rows from a table in a SQL database container */
  deleteSQLRows: Scalars['Boolean'];
  /** Delete a table in a SQL database container */
  deleteSQLTable: Scalars['Boolean'];
  /** Deletes a service */
  deleteService: Scalars['Boolean'];
  /** Delete a session */
  deleteSession: Scalars['Boolean'];
  /** Delete a team and all data associated with it */
  deleteTeam: Scalars['Boolean'];
  /** Deletes the template with the provided ID */
  deleteTemplate: Scalars['Boolean'];
  /** Deletes the currently authenticated user */
  deleteUser: Scalars['Boolean'];
  /** Create or update a variable for a plugin */
  deleteVariable: Scalars['Boolean'];
  /** Delete a webhook from a project */
  deleteWebhook: ProjectWebhook;
  /** Redeploy all triggers that are connected to an environment */
  deployEnvironmentTriggers: Scalars['Boolean'];
  /** Disables all resource provisions across the platform */
  disableAllProvisions: Scalars['Boolean'];
  /** Disables anonymous resource provisions across the platform */
  disableAnonProvisions: Scalars['Boolean'];
  /** Disables signups across the platform */
  disableSignups: Scalars['Boolean'];
  /** Disconnect a service from any source */
  disconnectServiceFromSource: Scalars['Boolean'];
  /** Generate dummy data for a SQLQL database container */
  dummyDataSQL: Scalars['Boolean'];
  /** Enables all resource provisions across the platform */
  enableAllProvisions: Scalars['Boolean'];
  /** Enables anonymous resource provisions across the platform */
  enableAnonProvisions: Scalars['Boolean'];
  /** Disables signups across the platform */
  enableSignups: Scalars['Boolean'];
  /** Create a customer for a user if it doesn't already exist */
  ensureCustomerExists: Scalars['Boolean'];
  /** Generate 2FA app secret for authenticated user */
  generateAuthenticatorAppSecret: QrCode;
  /** Generate a new set of recovery codes for the authenticated user */
  generateRecoveryCodes: RecoveryCodes;
  /** Generate a template for a project */
  generateTemplateForProject: Template;
  /** Get a short-lived URL to download the code for a snapshot */
  getDeploymentSnapshotCodeUrl: Scalars['String'];
  /** Approve a Verification Appeal for a risky user. */
  handleVerificationAppeal: Scalars['Boolean'];
  /** Import variables from a Heroku app into a Railway service. Returns the number of variables imports */
  importVariablesFromHeroku: Scalars['Int'];
  /** Initiate an email change request for a user */
  initiateEmailChange: Scalars['Boolean'];
  /** Initate transfer of project ownership */
  initiateOwnershipTransfer: Scalars['Boolean'];
  /** Insert a column in a table in a SQL database container */
  insertSQLColumn: Scalars['Boolean'];
  /** Insert a row into a SQL database container */
  insertSQLRow: Scalars['Boolean'];
  /** Invite a user by email to a project */
  inviteUserToProject: Scalars['Boolean'];
  /** Invite a user by email to a team */
  inviteUserToTeam: Scalars['Boolean'];
  /** Join a project using an invite code as the currently authenticated user. */
  joinWithInviteCode: Project;
  /** Leave project as currently authenticated user */
  leaveProject: Scalars['Boolean'];
  /** Leave a team */
  leaveTeam: Scalars['Boolean'];
  /** Deletes session for current user if it exists */
  logout: Scalars['Boolean'];
  /** Delete an entire collection from a MongoDB container */
  mongoDeleteCollection: Scalars['Boolean'];
  /** Delete a document from a MongoDB container */
  mongoDeleteDocument: Scalars['Boolean'];
  /** Generate dummy data for a MongoDB container */
  mongoDummyData: Scalars['Boolean'];
  /** Insert a document into a MongoDB container */
  mongoInsertDocument: Scalars['String'];
  /** Update a doucmnet in a MongoDB container */
  mongoUpdateDocument: Scalars['Boolean'];
  /** Delete a key in a Redis container */
  redisDeleteKey: Scalars['Boolean'];
  /** Generate dummy data for a Redis container */
  redisDummyData: Scalars['Boolean'];
  /** Delete values to a hash in a Redis container */
  redisHashDelete: Scalars['Boolean'];
  /** Add values to a hash in a Redis container */
  redisHashSet: Scalars['Boolean'];
  /** Pop a value from a list in a Redis container */
  redisPopList: Scalars['Boolean'];
  /** Push a value to a list in a Redis container */
  redisPushList: Scalars['Boolean'];
  /** Add a value from a set in a Redis container */
  redisSetAdd: Scalars['Boolean'];
  /** Set a keys expire time in seconds in a Redis container */
  redisSetExpire: Scalars['Boolean'];
  /** Set list index to a value Redis container */
  redisSetListIndex: Scalars['Boolean'];
  /** Remove a value from a set in a Redis container */
  redisSetRemove: Scalars['Boolean'];
  /** Set a string value in a Redis container */
  redisStringSet: Scalars['Boolean'];
  /** Remove a deployment */
  removeDeployment: Scalars['Boolean'];
  /** Remove a deployment trigger */
  removeDeploymentTrigger: Scalars['Boolean'];
  /** Remove an integration for a project */
  removeIntegration: Scalars['Boolean'];
  /** Delete a provider auth */
  removeProviderAuth: Scalars['Boolean'];
  /** Removes 2FA for the authenticated user */
  removeTwoFactorAuthentication: Scalars['Boolean'];
  /** Remove user from a project */
  removeUserFromProject: Array<Member>;
  /** Remove a user from a team */
  removeUserFromTeam: Scalars['Boolean'];
  /** Resets the credentials for a plugin in an environment */
  resetPluginCredentialsForEnvironment: Scalars['String'];
  /** Reset envs and container for a plugin in an environment */
  resetPluginForEnvironment: Scalars['Boolean'];
  /** Reset the 2FA code for a user */
  resetTwoFactorInfoForUser: Scalars['Boolean'];
  /** Restart a given deployment */
  restartDeployment: Scalars['Boolean'];
  /** Retry the invoice for a subscription with an updated payment method */
  retryInvoiceForSubscription: Scalars['Json'];
  /** Rollback to a given deployment */
  rollbackDeployment: Scalars['Boolean'];
  /** Run the raw SQL query provided by the user */
  runRawQuery: RawQueryResponse;
  /** Sends an email with the changelog for the provided slug */
  sendChangelogEmail: Scalars['Boolean'];
  /** Send an email with the specified template ID */
  sendCustomEmail: Scalars['Boolean'];
  /** Logs panics from CLI to Datadog */
  sendTelemetry: Scalars['Boolean'];
  /** Creates a service domain */
  serviceDomainCreate: ServiceDomain;
  /** Deletes a service domain by ID */
  serviceDomainDelete: Scalars['Boolean'];
  /** Remove upstream url from service */
  serviceRemoveUpstreamUrl: Scalars['Boolean'];
  /** Set the base environment override of a deployment trigger */
  setBaseEnvironmentOverride: Scalars['Boolean'];
  /** Sets the domain for an environment */
  setDomainForEnvironment: Scalars['Boolean'];
  /** Setup 2FA authorization for authenticated user */
  setupTwoFactorAuth: RecoveryCodes;
  /** Force start a plugin */
  startPlugin: Scalars['Boolean'];
  submitPartnerProject: Scalars['Boolean'];
  /** Track a batch of events for authenticated user */
  trackBatchedEvents: Scalars['Boolean'];
  /** Track event for authenticated user */
  trackEvent: Scalars['Boolean'];
  /** Transfer a project to a user or team */
  transferProjectToTeam: Scalars['Boolean'];
  /** Transfer a project to a user or team */
  transferProjectToUser: Scalars['Boolean'];
  /** Unbans a user */
  unbanUser: Scalars['Boolean'];
  /** Update the billing email for a customer */
  updateBillingEmail: Customer;
  /** Updates a deployment trigger */
  updateDeploymentTrigger: DeploymentTrigger;
  /**
   * Set all variables for a plugin in an environment
   * @deprecated Use setVariablesForPluginEnvironment instead
   */
  updateEnvsForPlugin: Scalars['Json'];
  /** Update an integration for a project */
  updateIntegration: Integration;
  updatePartnerProjectStatus: Scalars['Boolean'];
  /** Update project */
  updateProject: Project;
  /**
   * Updates the last active date on a project
   * @deprecated Use `trackEvent` instead
   */
  updateProjectLastActive: Scalars['DateTime'];
  /** Update the referral code for a user */
  updateReferralCode: Scalars['Boolean'];
  /** Update row in a table in a SQL database container */
  updateSQLRow: Scalars['Boolean'];
  /** Updates a service */
  updateService: Service;
  /** Update a starter project */
  updateStarter: Scalars['Boolean'];
  /** Update a team by id */
  updateTeam: Team;
  /** Update the code of an existing template */
  updateTemplateCode: Scalars['Boolean'];
  /** Update the configuration of an existing template */
  updateTemplateConfiguration: Template;
  /** Update currently logged in user */
  updateUser: User;
  /** Update preferences for logged in user */
  updateUserPreferences: Preferences;
  /** Update the riskLevel for a user */
  updateUserRiskLevel: Scalars['Boolean'];
  /** Update date of TermsAgreedOn */
  updateUserTerms: User;
  /** Update a webhook on a project */
  updateWebhook: ProjectWebhook;
  /** Upgrade the current user from an early adopter plan to usage based plan */
  upgradeFromEarlyAdopterPlan: Scalars['Json'];
  /** Create or update a variable for a plugin */
  upsertVariable: Scalars['Boolean'];
  /** Upsert an object of variables for a plugin in an environment */
  upsertVariablesFromObject: Scalars['Boolean'];
  /** Use an invite code an join a team */
  useTeamInviteCode: Team;
  /** Unsubscribe from the Beta program. */
  userBetaLeave: Scalars['Boolean'];
  /** Disconnect your Railway account from Discord. */
  userDisconnectDiscord: Scalars['Boolean'];
  /** Remove a flag on the user. */
  userRemoveFlags: Scalars['Boolean'];
  /** Create or modify flag on the user. */
  userSetFlags: Scalars['Boolean'];
  /** Use a recovery code for a 2FA action */
  validateRecoveryCode: Scalars['Boolean'];
  /** Validates 2FA token for login */
  validateTwoFactorLogin: Scalars['Boolean'];
  /** Validates token for 2FA */
  validateTwoFactorToken: Scalars['Boolean'];
  /** Set the variables from an object for a plugin or service in an environment */
  variablesSetFromObject: Scalars['Boolean'];
  /** Waitlist the user */
  waitlistUser: User;
};


export type MutationAccountEmailChangeArgs = {
  nonce: Scalars['String'];
};


export type MutationAddStarterToProjectArgs = {
  plugins?: InputMaybe<Array<Scalars['String']>>;
  projectId: Scalars['ID'];
  services: Array<ServiceTemplateInput>;
};


export type MutationAdminDeleteUserArgs = {
  userId: Scalars['ID'];
};


export type MutationAgreeFairUseArgs = {
  agree: Scalars['Boolean'];
};


export type MutationAlertMissingCommandArgs = {
  page: Scalars['String'];
  text: Scalars['String'];
};


export type MutationApplyCreditArgs = {
  amount: Scalars['Float'];
  customerId: Scalars['String'];
  memo?: InputMaybe<Scalars['String']>;
};


export type MutationAttachPaymentMethodArgs = {
  customerId: Scalars['String'];
  paymentMethodId: Scalars['String'];
  validateWithHold?: InputMaybe<Scalars['Boolean']>;
};


export type MutationAuthLoginSessionArgs = {
  code: Scalars['String'];
  hostname?: InputMaybe<Scalars['String']>;
};


export type MutationBanUserArgs = {
  reason: Scalars['String'];
  userId: Scalars['ID'];
};


export type MutationCancelDeploymentArgs = {
  deploymentId: Scalars['ID'];
  projectId: Scalars['ID'];
};


export type MutationCancelLoginSessionArgs = {
  code: Scalars['String'];
};


export type MutationChangeTeamPermissionArgs = {
  role: TeamRole;
  teamId: Scalars['String'];
  userId: Scalars['String'];
};


export type MutationChangeUserRoleArgs = {
  projectId: Scalars['String'];
  role: Scalars['String'];
  userId: Scalars['String'];
};


export type MutationClaimProjectArgs = {
  projectId: Scalars['String'];
};


export type MutationConfirmOwnershipTransferArgs = {
  ownershipTransferId: Scalars['ID'];
  projectId: Scalars['ID'];
};


export type MutationConnectServiceToRepoArgs = {
  branch: Scalars['String'];
  projectId: Scalars['ID'];
  serviceId: Scalars['ID'];
  source: Scalars['Json'];
};


export type MutationConsumeLoginSessionArgs = {
  code: Scalars['String'];
};


export type MutationCreateCustomDomainArgs = {
  domain: Scalars['String'];
  environmentId: Scalars['String'];
  projectId: Scalars['String'];
  serviceId: Scalars['String'];
};


export type MutationCreateCustomerBillingPortalArgs = {
  customerId: Scalars['String'];
  redirectUrl: Scalars['String'];
};


export type MutationCreateDeploymentTriggerArgs = {
  branch: Scalars['String'];
  environmentId: Scalars['String'];
  projectId: Scalars['String'];
  provider: Scalars['String'];
  repository: Scalars['String'];
  rootDirectory?: InputMaybe<Scalars['String']>;
  serviceId?: InputMaybe<Scalars['String']>;
};


export type MutationCreateEnvironmentArgs = {
  name: Scalars['String'];
  projectId: Scalars['String'];
};


export type MutationCreateEphemeralEnvironmentArgs = {
  baseEnvironmentId?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  projectId: Scalars['String'];
};


export type MutationCreateGenericPluginArgs = {
  projectId: Scalars['ID'];
  url: Scalars['String'];
};


export type MutationCreateGenericPluginTokenArgs = {
  genericPluginId: Scalars['ID'];
  projectId: Scalars['ID'];
};


export type MutationCreateIntegrationArgs = {
  config: Scalars['Json'];
  integrationAuthId?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  projectId: Scalars['String'];
};


export type MutationCreateInviteCodeForTeamArgs = {
  role: Scalars['String'];
  teamId: Scalars['String'];
};


export type MutationCreatePartnerProjectArgs = {
  gitUrl: Scalars['String'];
  kickbackPercent: Scalars['Int'];
  name: Scalars['String'];
  partnerId: Scalars['ID'];
};


export type MutationCreatePluginArgs = {
  name: Scalars['String'];
  projectId: Scalars['String'];
};


export type MutationCreateProjectArgs = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  plugins?: InputMaybe<Array<Scalars['String']>>;
  teamId?: InputMaybe<Scalars['String']>;
};


export type MutationCreateProjectFromRepoArgs = {
  branch: Scalars['String'];
  metro?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  repo: Scalars['String'];
  teamId?: InputMaybe<Scalars['String']>;
  variables?: InputMaybe<Scalars['Json']>;
};


export type MutationCreateProjectFromTemplateArgs = {
  plugins?: InputMaybe<Array<Scalars['String']>>;
  services: Array<ServiceTemplateInput>;
  teamId?: InputMaybe<Scalars['String']>;
  templateCode?: InputMaybe<Scalars['String']>;
};


export type MutationCreateProjectTokenArgs = {
  environmentId: Scalars['String'];
  name: Scalars['String'];
  projectId: Scalars['String'];
};


export type MutationCreateSqlTableArgs = {
  columns: Array<SqlColumnInput>;
  databaseType: Scalars['String'];
  environmentId: Scalars['String'];
  name: Scalars['String'];
  pluginId: Scalars['String'];
  projectId: Scalars['String'];
};


export type MutationCreateServiceArgs = {
  branch?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  projectId: Scalars['ID'];
  source: Scalars['Json'];
};


export type MutationCreateSubscriptionForCustomerArgs = {
  customerId: Scalars['String'];
  paymentMethodId?: InputMaybe<Scalars['String']>;
};


export type MutationCreateTeamArgs = {
  avatar?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};


export type MutationCreateTemplateArgs = {
  configuration: Scalars['Json'];
  demoProjectId?: InputMaybe<Scalars['String']>;
};


export type MutationCreateVerificationAppealArgs = {
  repo: Scalars['String'];
  userMessage: Scalars['String'];
};


export type MutationCreateWebhookArgs = {
  projectId: Scalars['ID'];
  url: Scalars['String'];
};


export type MutationCustomerPurchaseCreditsArgs = {
  customerId: Scalars['ID'];
  dollarAmount: Scalars['Int'];
  paymentMethodId?: InputMaybe<Scalars['ID']>;
};


export type MutationDeleteCustomDomainArgs = {
  customDomainId: Scalars['String'];
  environmentId: Scalars['String'];
  projectId: Scalars['String'];
};


export type MutationDeleteEnvironmentArgs = {
  environmentId: Scalars['String'];
  projectId: Scalars['String'];
};


export type MutationDeleteGenericPluginTokenArgs = {
  genericPluginTokenId: Scalars['ID'];
  projectId: Scalars['ID'];
};


export type MutationDeletePluginArgs = {
  id: Scalars['ID'];
  projectId: Scalars['String'];
};


export type MutationDeleteProjectArgs = {
  projectId: Scalars['String'];
};


export type MutationDeleteProjectTokenArgs = {
  projectId: Scalars['String'];
  tokenId: Scalars['ID'];
};


export type MutationDeleteSqlRowsArgs = {
  columnName: Scalars['String'];
  databaseType: Scalars['String'];
  environmentId: Scalars['String'];
  pluginId: Scalars['String'];
  projectId: Scalars['String'];
  rows: Array<Scalars['String']>;
  tableName: Scalars['String'];
};


export type MutationDeleteSqlTableArgs = {
  databaseType: Scalars['String'];
  environmentId: Scalars['String'];
  name: Scalars['String'];
  pluginId: Scalars['String'];
  projectId: Scalars['String'];
};


export type MutationDeleteServiceArgs = {
  projectId: Scalars['ID'];
  serviceId: Scalars['ID'];
};


export type MutationDeleteSessionArgs = {
  sessionId: Scalars['ID'];
};


export type MutationDeleteTeamArgs = {
  teamId: Scalars['String'];
};


export type MutationDeleteTemplateArgs = {
  id: Scalars['String'];
};


export type MutationDeleteVariableArgs = {
  environmentId: Scalars['String'];
  name: Scalars['String'];
  pluginId?: InputMaybe<Scalars['String']>;
  projectId: Scalars['String'];
  serviceId?: InputMaybe<Scalars['String']>;
};


export type MutationDeleteWebhookArgs = {
  id: Scalars['ID'];
  projectId: Scalars['ID'];
};


export type MutationDeployEnvironmentTriggersArgs = {
  environmentId: Scalars['ID'];
  projectId: Scalars['ID'];
  serviceId: Scalars['ID'];
};


export type MutationDisableAllProvisionsArgs = {
  reason: Scalars['String'];
};


export type MutationDisableAnonProvisionsArgs = {
  reason: Scalars['String'];
};


export type MutationDisableSignupsArgs = {
  reason: Scalars['String'];
};


export type MutationDisconnectServiceFromSourceArgs = {
  projectId: Scalars['ID'];
  serviceId: Scalars['ID'];
};


export type MutationDummyDataSqlArgs = {
  databaseType: Scalars['String'];
  environmentId: Scalars['String'];
  pluginId: Scalars['String'];
  projectId: Scalars['String'];
};


export type MutationEnsureCustomerExistsArgs = {
  userId: Scalars['String'];
};


export type MutationGenerateTemplateForProjectArgs = {
  projectId: Scalars['String'];
};


export type MutationGetDeploymentSnapshotCodeUrlArgs = {
  deploymentId: Scalars['ID'];
  projectId: Scalars['ID'];
};


export type MutationHandleVerificationAppealArgs = {
  approved: Scalars['Boolean'];
  id: Scalars['String'];
};


export type MutationImportVariablesFromHerokuArgs = {
  environmentId: Scalars['ID'];
  herokuAppId: Scalars['ID'];
  projectId: Scalars['ID'];
  serviceId: Scalars['ID'];
};


export type MutationInitiateEmailChangeArgs = {
  newEmail: Scalars['String'];
};


export type MutationInitiateOwnershipTransferArgs = {
  memberId: Scalars['ID'];
  projectId: Scalars['ID'];
};


export type MutationInsertSqlColumnArgs = {
  column: SqlColumnInput;
  databaseType: Scalars['String'];
  environmentId: Scalars['String'];
  pluginId: Scalars['String'];
  projectId: Scalars['String'];
  tableName: Scalars['String'];
};


export type MutationInsertSqlRowArgs = {
  columns: Array<SqlRowInput>;
  databaseType: Scalars['String'];
  environmentId: Scalars['String'];
  pluginId: Scalars['String'];
  projectId: Scalars['String'];
  tableName: Scalars['String'];
};


export type MutationInviteUserToProjectArgs = {
  email: Scalars['String'];
  link: Scalars['String'];
  projectId: Scalars['String'];
};


export type MutationInviteUserToTeamArgs = {
  email: Scalars['String'];
  link: Scalars['String'];
  teamId: Scalars['String'];
};


export type MutationJoinWithInviteCodeArgs = {
  code: Scalars['String'];
};


export type MutationLeaveProjectArgs = {
  projectId: Scalars['String'];
};


export type MutationLeaveTeamArgs = {
  teamId: Scalars['String'];
};


export type MutationMongoDeleteCollectionArgs = {
  database: Scalars['String'];
  environmentId: Scalars['String'];
  name: Scalars['String'];
  pluginId: Scalars['String'];
  projectId: Scalars['String'];
};


export type MutationMongoDeleteDocumentArgs = {
  database: Scalars['String'];
  environmentId: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  pluginId: Scalars['String'];
  projectId: Scalars['String'];
};


export type MutationMongoDummyDataArgs = {
  database: Scalars['String'];
  environmentId: Scalars['String'];
  pluginId: Scalars['String'];
  projectId: Scalars['String'];
};


export type MutationMongoInsertDocumentArgs = {
  data: Scalars['Json'];
  database: Scalars['String'];
  environmentId: Scalars['String'];
  name: Scalars['String'];
  pluginId: Scalars['String'];
  projectId: Scalars['String'];
};


export type MutationMongoUpdateDocumentArgs = {
  data: Scalars['Json'];
  database: Scalars['String'];
  environmentId: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  pluginId: Scalars['String'];
  projectId: Scalars['String'];
};


export type MutationRedisDeleteKeyArgs = {
  environmentId: Scalars['String'];
  key: Scalars['String'];
  pluginId: Scalars['String'];
  projectId: Scalars['String'];
};


export type MutationRedisDummyDataArgs = {
  environmentId: Scalars['String'];
  pluginId: Scalars['String'];
  projectId: Scalars['String'];
};


export type MutationRedisHashDeleteArgs = {
  environmentId: Scalars['String'];
  key: Scalars['String'];
  pluginId: Scalars['String'];
  projectId: Scalars['String'];
  values: Array<Scalars['String']>;
};


export type MutationRedisHashSetArgs = {
  environmentId: Scalars['String'];
  key: Scalars['String'];
  pluginId: Scalars['String'];
  projectId: Scalars['String'];
  values: Scalars['Json'];
};


export type MutationRedisPopListArgs = {
  environmentId: Scalars['String'];
  key: Scalars['String'];
  pluginId: Scalars['String'];
  projectId: Scalars['String'];
  side: Scalars['String'];
};


export type MutationRedisPushListArgs = {
  environmentId: Scalars['String'];
  key: Scalars['String'];
  pluginId: Scalars['String'];
  projectId: Scalars['String'];
  side: Scalars['String'];
  values: Array<Scalars['String']>;
};


export type MutationRedisSetAddArgs = {
  environmentId: Scalars['String'];
  key: Scalars['String'];
  pluginId: Scalars['String'];
  projectId: Scalars['String'];
  values: Array<Scalars['String']>;
};


export type MutationRedisSetExpireArgs = {
  environmentId: Scalars['String'];
  key: Scalars['String'];
  pluginId: Scalars['String'];
  projectId: Scalars['String'];
  ttl: Scalars['Int'];
};


export type MutationRedisSetListIndexArgs = {
  environmentId: Scalars['String'];
  index: Scalars['Int'];
  key: Scalars['String'];
  pluginId: Scalars['String'];
  projectId: Scalars['String'];
  value: Scalars['String'];
};


export type MutationRedisSetRemoveArgs = {
  environmentId: Scalars['String'];
  key: Scalars['String'];
  pluginId: Scalars['String'];
  projectId: Scalars['String'];
  values: Array<Scalars['String']>;
};


export type MutationRedisStringSetArgs = {
  environmentId: Scalars['String'];
  key: Scalars['String'];
  pluginId: Scalars['String'];
  projectId: Scalars['String'];
  value: Scalars['String'];
};


export type MutationRemoveDeploymentArgs = {
  deploymentId: Scalars['ID'];
  projectId: Scalars['ID'];
};


export type MutationRemoveDeploymentTriggerArgs = {
  projectId: Scalars['String'];
  triggerId: Scalars['String'];
};


export type MutationRemoveIntegrationArgs = {
  integrationId: Scalars['String'];
  projectId: Scalars['String'];
};


export type MutationRemoveProviderAuthArgs = {
  authId: Scalars['String'];
};


export type MutationRemoveUserFromProjectArgs = {
  projectId: Scalars['String'];
  userId: Scalars['String'];
};


export type MutationRemoveUserFromTeamArgs = {
  teamId: Scalars['String'];
  userId: Scalars['String'];
};


export type MutationResetPluginCredentialsForEnvironmentArgs = {
  environmentId: Scalars['String'];
  pluginId: Scalars['String'];
  projectId: Scalars['String'];
};


export type MutationResetPluginForEnvironmentArgs = {
  environmentId: Scalars['String'];
  pluginId: Scalars['String'];
  projectId: Scalars['String'];
};


export type MutationResetTwoFactorInfoForUserArgs = {
  userId: Scalars['ID'];
};


export type MutationRestartDeploymentArgs = {
  deploymentId: Scalars['ID'];
  projectId: Scalars['ID'];
};


export type MutationRetryInvoiceForSubscriptionArgs = {
  customerId: Scalars['String'];
  invoiceId: Scalars['String'];
  paymentMethodId: Scalars['String'];
};


export type MutationRollbackDeploymentArgs = {
  deploymentId: Scalars['ID'];
  projectId: Scalars['ID'];
};


export type MutationRunRawQueryArgs = {
  databaseType: Scalars['String'];
  environmentId: Scalars['String'];
  pluginId: Scalars['String'];
  projectId: Scalars['String'];
  query: Scalars['String'];
};


export type MutationSendChangelogEmailArgs = {
  changelogId: Scalars['String'];
  changelogSlug: Scalars['String'];
  changelogTitle: Scalars['String'];
  isTestEmail: Scalars['Boolean'];
};


export type MutationSendCustomEmailArgs = {
  includeBannedUsers: Scalars['Boolean'];
  isTestEmail: Scalars['Boolean'];
  onlyDevPlan: Scalars['Boolean'];
  onlyEarlyAdopter: Scalars['Boolean'];
  templateId: Scalars['String'];
};


export type MutationSendTelemetryArgs = {
  command: Scalars['String'];
  environmentId?: InputMaybe<Scalars['String']>;
  error: Scalars['String'];
  projectId?: InputMaybe<Scalars['String']>;
  stacktrace: Scalars['String'];
  version?: InputMaybe<Scalars['String']>;
};


export type MutationServiceDomainCreateArgs = {
  environmentId: Scalars['ID'];
  projectId: Scalars['ID'];
  serviceId: Scalars['ID'];
};


export type MutationServiceDomainDeleteArgs = {
  environmentId: Scalars['ID'];
  id: Scalars['ID'];
  projectId: Scalars['ID'];
};


export type MutationServiceRemoveUpstreamUrlArgs = {
  projectId: Scalars['ID'];
  serviceId: Scalars['ID'];
};


export type MutationSetBaseEnvironmentOverrideArgs = {
  baseEnvironmentOverrideId?: InputMaybe<Scalars['String']>;
  projectId: Scalars['String'];
  triggerId: Scalars['String'];
};


export type MutationSetDomainForEnvironmentArgs = {
  domain: Scalars['String'];
  environmentId: Scalars['String'];
  projectId: Scalars['String'];
  serviceId: Scalars['String'];
};


export type MutationSetupTwoFactorAuthArgs = {
  token: Scalars['String'];
};


export type MutationStartPluginArgs = {
  environmentId: Scalars['ID'];
  pluginId: Scalars['ID'];
};


export type MutationSubmitPartnerProjectArgs = {
  gitUrl: Scalars['String'];
  name: Scalars['String'];
};


export type MutationTrackBatchedEventsArgs = {
  events: Array<BatchEvent>;
};


export type MutationTrackEventArgs = {
  eventName: Scalars['String'];
  properties?: InputMaybe<Scalars['Json']>;
};


export type MutationTransferProjectToTeamArgs = {
  projectId: Scalars['String'];
  teamId: Scalars['String'];
};


export type MutationTransferProjectToUserArgs = {
  projectId: Scalars['String'];
};


export type MutationUnbanUserArgs = {
  userId: Scalars['ID'];
};


export type MutationUpdateBillingEmailArgs = {
  billingEmail: Scalars['String'];
  customerId: Scalars['String'];
};


export type MutationUpdateDeploymentTriggerArgs = {
  branch?: InputMaybe<Scalars['String']>;
  projectId: Scalars['String'];
  repository?: InputMaybe<Scalars['String']>;
  rootDirectory?: InputMaybe<Scalars['String']>;
  triggerId: Scalars['String'];
};


export type MutationUpdateEnvsForPluginArgs = {
  environmentId: Scalars['String'];
  envs: Scalars['Json'];
  pluginId: Scalars['String'];
  projectId: Scalars['String'];
};


export type MutationUpdateIntegrationArgs = {
  config: Scalars['Json'];
  integrationAuthId?: InputMaybe<Scalars['String']>;
  integrationId: Scalars['String'];
  name: Scalars['String'];
  projectId: Scalars['String'];
};


export type MutationUpdatePartnerProjectStatusArgs = {
  id: Scalars['ID'];
  status: Scalars['String'];
};


export type MutationUpdateProjectArgs = {
  description?: InputMaybe<Scalars['String']>;
  isPublic?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  prDeploys?: InputMaybe<Scalars['Boolean']>;
  projectId: Scalars['ID'];
};


export type MutationUpdateProjectLastActiveArgs = {
  projectId: Scalars['String'];
};


export type MutationUpdateReferralCodeArgs = {
  code: Scalars['String'];
};


export type MutationUpdateSqlRowArgs = {
  data: Scalars['Json'];
  databaseType: Scalars['String'];
  environmentId: Scalars['String'];
  pKey: Scalars['String'];
  pKeyValue: Scalars['String'];
  pluginId: Scalars['String'];
  projectId: Scalars['String'];
  tableName: Scalars['String'];
};


export type MutationUpdateServiceArgs = {
  buildCommand?: InputMaybe<Scalars['String']>;
  builder?: InputMaybe<Builder>;
  healthcheckPath?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  projectId: Scalars['ID'];
  restartPolicyMaxRetries?: InputMaybe<Scalars['Int']>;
  restartPolicyType?: InputMaybe<RestartPolicyType>;
  rootDirectory?: InputMaybe<Scalars['String']>;
  serviceId: Scalars['ID'];
  source?: InputMaybe<Scalars['Json']>;
  startCommand?: InputMaybe<Scalars['String']>;
  watchPatterns?: InputMaybe<Array<Scalars['String']>>;
  webhookUrl?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateStarterArgs = {
  projectId: Scalars['String'];
  serviceId?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateTeamArgs = {
  avatar?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  teamId: Scalars['String'];
};


export type MutationUpdateTemplateCodeArgs = {
  code: Scalars['String'];
  id: Scalars['String'];
};


export type MutationUpdateTemplateConfigurationArgs = {
  configuration: Scalars['Json'];
  demoProjectId?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
};


export type MutationUpdateUserArgs = {
  avatar?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateUserPreferencesArgs = {
  buildFailedEmail?: InputMaybe<Scalars['Boolean']>;
  changelogEmail?: InputMaybe<Scalars['Boolean']>;
  deployCrashedEmail?: InputMaybe<Scalars['Boolean']>;
  usageEmail?: InputMaybe<Scalars['Boolean']>;
};


export type MutationUpdateUserRiskLevelArgs = {
  riskLevel?: InputMaybe<Scalars['Float']>;
  userId: Scalars['ID'];
};


export type MutationUpdateWebhookArgs = {
  id: Scalars['ID'];
  projectId: Scalars['ID'];
  url: Scalars['String'];
};


export type MutationUpgradeFromEarlyAdopterPlanArgs = {
  customerId: Scalars['String'];
};


export type MutationUpsertVariableArgs = {
  environmentId: Scalars['String'];
  name: Scalars['String'];
  pluginId?: InputMaybe<Scalars['String']>;
  projectId: Scalars['String'];
  serviceId?: InputMaybe<Scalars['String']>;
  value: Scalars['String'];
};


export type MutationUpsertVariablesFromObjectArgs = {
  environmentId: Scalars['String'];
  pluginId?: InputMaybe<Scalars['String']>;
  projectId: Scalars['String'];
  serviceId?: InputMaybe<Scalars['String']>;
  variables: Scalars['Json'];
};


export type MutationUseTeamInviteCodeArgs = {
  code: Scalars['String'];
};


export type MutationUserRemoveFlagsArgs = {
  flags: Array<UserFlag>;
  userId: Scalars['ID'];
};


export type MutationUserSetFlagsArgs = {
  flags: Array<UserFlag>;
  userId: Scalars['ID'];
};


export type MutationValidateRecoveryCodeArgs = {
  code: Scalars['String'];
  twoFactorLinkingKey?: InputMaybe<Scalars['String']>;
};


export type MutationValidateTwoFactorLoginArgs = {
  token: Scalars['String'];
  twoFactorLinkingKey: Scalars['String'];
};


export type MutationValidateTwoFactorTokenArgs = {
  token: Scalars['String'];
};


export type MutationVariablesSetFromObjectArgs = {
  environmentId: Scalars['String'];
  pluginId?: InputMaybe<Scalars['String']>;
  projectId: Scalars['String'];
  serviceId?: InputMaybe<Scalars['String']>;
  variables: Scalars['Json'];
};


export type MutationWaitlistUserArgs = {
  email?: InputMaybe<Scalars['String']>;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
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
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['ID']>;
  hasNextPage: Scalars['Boolean'];
};

export type PaginatedDeploys = {
  __typename?: 'PaginatedDeploys';
  itemsPerPage: Scalars['Int'];
  page: Scalars['Int'];
  result: Array<Deployment>;
  totalPages: Scalars['Int'];
};

export type PaginatedEvents = {
  __typename?: 'PaginatedEvents';
  itemsPerPage: Scalars['Int'];
  page: Scalars['Int'];
  result: Array<Event>;
  totalPages: Scalars['Int'];
};

export type PaginatedPartnerProjects = {
  __typename?: 'PaginatedPartnerProjects';
  itemsPerPage: Scalars['Int'];
  page: Scalars['Int'];
  result: Array<PartnerProject>;
  totalPages: Scalars['Int'];
};

export type PaginatedProjects = {
  __typename?: 'PaginatedProjects';
  itemsPerPage: Scalars['Int'];
  page: Scalars['Int'];
  result: Array<Project>;
  totalPages: Scalars['Int'];
};

export type PaginatedTeams = {
  __typename?: 'PaginatedTeams';
  itemsPerPage: Scalars['Int'];
  page: Scalars['Int'];
  result: Array<Team>;
  totalPages: Scalars['Int'];
};

export type PaginatedUsers = {
  __typename?: 'PaginatedUsers';
  itemsPerPage: Scalars['Int'];
  page: Scalars['Int'];
  result: Array<User>;
  totalPages: Scalars['Int'];
};

export type PaginatedVerificationAppeals = {
  __typename?: 'PaginatedVerificationAppeals';
  itemsPerPage: Scalars['Int'];
  page: Scalars['Int'];
  result: Array<VerificationAppeal>;
  totalPages: Scalars['Int'];
};

export enum PaginationOrderBy {
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

export type PartnerPayout = {
  __typename?: 'PartnerPayout';
  partnerProjects: Scalars['Int'];
  totalCreditsEarned: Scalars['Float'];
  totalEstimatedCreditsEarned: Scalars['Float'];
  totalProjectsActiveThisMonth?: Maybe<Scalars['Int']>;
};

export type PartnerPayoutForProject = {
  __typename?: 'PartnerPayoutForProject';
  contributingProjects: Scalars['Int'];
  estimatedMonthlyCreditsEarned: Scalars['Float'];
  projectsActiveThisMonth: Scalars['Int'];
  totalCreditsEarned: Scalars['Float'];
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
  __typename?: 'PartnerProject';
  activeProjects: Array<Project>;
  createdAt: Scalars['DateTime'];
  gitUrl: Scalars['String'];
  id: Scalars['String'];
  kickbackPercent: Scalars['Int'];
  name: Scalars['String'];
  status: PartnerProjectStatus;
  updatedAt: Scalars['DateTime'];
};


export type PartnerProjectActiveProjectsArgs = {
  after?: InputMaybe<ProjectWhereUniqueInput>;
  before?: InputMaybe<ProjectWhereUniqueInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
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
  Applied = 'APPLIED',
  Approved = 'APPROVED',
  Rejected = 'REJECTED'
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
  __typename?: 'PaymentMethod';
  card?: Maybe<PaymentMethodCard>;
  id: Scalars['ID'];
};

export type PaymentMethodCard = {
  __typename?: 'PaymentMethodCard';
  brand: Scalars['String'];
  country?: Maybe<Scalars['String']>;
  last4: Scalars['String'];
};

export enum Plan {
  EarlyAdopter = 'EARLY_ADOPTER',
  Free = 'FREE'
}

export type PlatformStatus = {
  __typename?: 'PlatformStatus';
  incident?: Maybe<Incident>;
  isStable: Scalars['Boolean'];
};

export type Plugin = {
  __typename?: 'Plugin';
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  logsEnabled: Scalars['Boolean'];
  name: PluginType;
  project: Project;
  projectId: Scalars['String'];
  status: PluginStatus;
  variables: Array<Variable>;
};


export type PluginVariablesArgs = {
  after?: InputMaybe<VariableWhereUniqueInput>;
  before?: InputMaybe<VariableWhereUniqueInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type PluginContainerUsage = {
  __typename?: 'PluginContainerUsage';
  containerId: Scalars['ID'];
  currentUsage: UsageItem;
  endDate: Scalars['String'];
  environmentId: Scalars['ID'];
  estimatedUsage: UsageItem;
  pluginId: Scalars['ID'];
  startDate: Scalars['String'];
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
  Locked = 'LOCKED',
  Removed = 'REMOVED',
  Running = 'RUNNING',
  Stopped = 'STOPPED'
}

export enum PluginType {
  Elastic = 'elastic',
  Env = 'env',
  Generic = 'generic',
  Leveldb = 'leveldb',
  Minio = 'minio',
  Mongodb = 'mongodb',
  Mysql = 'mysql',
  Postgresql = 'postgresql',
  Redis = 'redis'
}

export type PluginUsage = {
  __typename?: 'PluginUsage';
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
  id?: InputMaybe<Scalars['String']>;
};

export type PluginWithMetrics = {
  __typename?: 'PluginWithMetrics';
  metrics: Array<Metric>;
  plugin: Plugin;
};

export type Preferences = {
  __typename?: 'Preferences';
  buildFailedEmail: Scalars['Boolean'];
  changelogEmail: Scalars['Boolean'];
  deployCrashedEmail: Scalars['Boolean'];
  usageEmail: Scalars['Boolean'];
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
  __typename?: 'Project';
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  deploymentTriggers: Array<DeploymentTrigger>;
  deployments: Array<Deployment>;
  description?: Maybe<Scalars['String']>;
  environments: Array<Environment>;
  expiredAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  isMetrofied: Scalars['Boolean'];
  isPublic: Scalars['Boolean'];
  isTempProject: Scalars['Boolean'];
  isUpdatable: Scalars['Boolean'];
  members: Array<Member>;
  name: Scalars['String'];
  plugins: Array<Plugin>;
  prDeploys: Scalars['Boolean'];
  projectPermissions: Array<ProjectPermission>;
  services: Array<Service>;
  team?: Maybe<ProjectTeam>;
  teamId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  upstreamUrl?: Maybe<Scalars['String']>;
  webhooks: Array<ProjectWebhook>;
};


export type ProjectDeploymentTriggersArgs = {
  after?: InputMaybe<DeploymentTriggerWhereUniqueInput>;
  before?: InputMaybe<DeploymentTriggerWhereUniqueInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type ProjectDeploymentsArgs = {
  after?: InputMaybe<DeploymentWhereUniqueInput>;
  before?: InputMaybe<DeploymentWhereUniqueInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DeploymentOrderByWithRelationInput>>;
  where?: InputMaybe<DeploymentWhereInput>;
};


export type ProjectEnvironmentsArgs = {
  after?: InputMaybe<EnvironmentWhereUniqueInput>;
  before?: InputMaybe<EnvironmentWhereUniqueInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type ProjectPluginsArgs = {
  after?: InputMaybe<PluginWhereUniqueInput>;
  before?: InputMaybe<PluginWhereUniqueInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PluginOrderByWithRelationInput>>;
};


export type ProjectProjectPermissionsArgs = {
  after?: InputMaybe<ProjectPermissionWhereUniqueInput>;
  before?: InputMaybe<ProjectPermissionWhereUniqueInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type ProjectServicesArgs = {
  after?: InputMaybe<ServiceWhereUniqueInput>;
  before?: InputMaybe<ServiceWhereUniqueInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ServiceOrderByWithRelationInput>>;
};


export type ProjectWebhooksArgs = {
  after?: InputMaybe<ProjectWebhookWhereUniqueInput>;
  before?: InputMaybe<ProjectWebhookWhereUniqueInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type ProjectConnection = {
  __typename?: 'ProjectConnection';
  nodes: Array<Project>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ProjectExecutionTime = {
  __typename?: 'ProjectExecutionTime';
  services: Array<ServiceExecutionTime>;
  totalMinutes: Scalars['Float'];
};

export type ProjectListRelationFilter = {
  every?: InputMaybe<ProjectWhereInput>;
  none?: InputMaybe<ProjectWhereInput>;
  some?: InputMaybe<ProjectWhereInput>;
};

export type ProjectListWhereInput = {
  teamId?: InputMaybe<Scalars['ID']>;
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
  __typename?: 'ProjectPermission';
  id: Scalars['String'];
  project: Project;
  projectId: Scalars['String'];
  role: ProjectRole;
  user: User;
  userId: Scalars['String'];
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
  projectId: Scalars['String'];
  userId: Scalars['String'];
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
  id?: InputMaybe<Scalars['String']>;
  userId_projectId?: InputMaybe<ProjectPermissionUserIdProjectIdCompoundUniqueInput>;
};

export type ProjectResourceAccess = {
  __typename?: 'ProjectResourceAccess';
  customDomain: AccessRule;
  deployment: AccessRule;
  environment: AccessRule;
  plugin: AccessRule;
};

export enum ProjectRole {
  Admin = 'ADMIN',
  Member = 'MEMBER',
  Viewer = 'VIEWER'
}

export type ProjectTeam = {
  __typename?: 'ProjectTeam';
  avatar?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type ProjectToken = {
  __typename?: 'ProjectToken';
  createdAt: Scalars['DateTime'];
  displayToken: Scalars['String'];
  environment: Environment;
  environmentId: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  projectId: Scalars['String'];
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
  __typename?: 'ProjectUsage';
  avgUsage: UsageItem;
  buckets: Array<UsageBucket>;
  currentUsage: UsageItem;
  endDate: Scalars['String'];
  estimatedUsage: UsageItem;
  executionTimeMinutes: Scalars['Float'];
  plugins: Array<PluginUsage>;
  project: Project;
  services: Array<ServiceUsage>;
  startDate: Scalars['String'];
};

export type ProjectWebhook = {
  __typename?: 'ProjectWebhook';
  id: Scalars['String'];
  lastStatus?: Maybe<Scalars['Int']>;
  url: Scalars['String'];
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
  id?: InputMaybe<Scalars['String']>;
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
  id?: InputMaybe<Scalars['String']>;
};

export type ProviderAuth = {
  __typename?: 'ProviderAuth';
  email: Scalars['String'];
  id: Scalars['String'];
  metadata: Scalars['Json'];
  provider: Scalars['String'];
  userId: Scalars['String'];
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
  deletedAt: Scalars['DateTime'];
  providerId: Scalars['String'];
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
  id?: InputMaybe<Scalars['String']>;
  providerId_deletedAt?: InputMaybe<ProviderAuthProviderIdDeletedAtCompoundUniqueInput>;
};

export type QrCode = {
  __typename?: 'QRCode';
  secret: Scalars['String'];
  uri: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
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
  allEnvsForEnvironment: Scalars['Json'];
  /**
   * Get all the environment variables for a plugin in an environment
   * @deprecated Use decryptedVariablesQuery instead instead
   */
  allEnvsForPlugin: Scalars['Json'];
  allProjects: PaginatedProjects;
  /** Return all teams */
  allTeams: PaginatedTeams;
  allUsers: PaginatedUsers;
  /** Get approved templates */
  approvedTemplates: Array<Template>;
  /** Find available plugins by project id */
  availablePluginsForProject: Array<Scalars['String']>;
  /** Fetch build logs */
  buildLogs: Array<Log>;
  /** Get all the decrypted rendered variables that belong to a plugin in an environment */
  decryptedVariables: Scalars['Json'];
  /** Get all the decrypted variables accessible for a specific service */
  decryptedVariablesForService: Scalars['Json'];
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
  getSQLTableNames: Array<Scalars['String']>;
  /** Get all sessions for authenticated user */
  getSessions: Array<Session>;
  /** Get a list of suggested variables for a repo */
  getSuggestedVariables: Scalars['Json'];
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
  getWritableGithubScopes: Array<Scalars['String']>;
  githubEvents: Array<GitHubEvent>;
  /** Get the Herokus apps for the current user */
  herokuApps: Array<HerokuApp>;
  /** Get a template from a Heroku template */
  herokuTemplateToRailwayTemplate: Scalars['Json'];
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
  isRepoNameAvailable: Scalars['Boolean'];
  /** Get the currently authenticated user */
  me: User;
  metricsForService: EnvironmentMetrics;
  /** Get a collection in a MongoDB container */
  mongoCollectionData: MongoCollection;
  /** Get a list of collection names in a MongoDB container */
  mongoCollectionNames: Array<Scalars['String']>;
  /** Get a list of database names in a MongoDB container */
  mongoDatabaseNames: Array<Scalars['String']>;
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
  redisGetKey: Scalars['Json'];
  /** Get a list of keys in a Redis container */
  redisKeys: Array<RedisKey>;
  /** Get resource access for the current user or team */
  resourceAccess: ResourceAccess;
  /** Find a single service */
  service: Service;
  /** Check if the upstream repo for a service has an update available */
  serviceIsUpdatable: Scalars['Boolean'];
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
  userIdForDiscordId: Scalars['String'];
  vercelInfo: VercelInfo;
  /** Verify if a login session is valid */
  verifyLoginSession: Scalars['Boolean'];
};


export type QueryAdminAllServicesArgs = {
  after?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  includeDeleted?: InputMaybe<Scalars['Boolean']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
  where?: InputMaybe<ServiceListWhereInput>;
};


export type QueryAllCustomDomainsForEnvironmentArgs = {
  environmentId: Scalars['String'];
  projectId: Scalars['String'];
  serviceId: Scalars['String'];
};


export type QueryAllDeploymentsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<DeployStatus>;
};


export type QueryAllDeploymentsForEnvironmentArgs = {
  environmentId: Scalars['ID'];
  projectId: Scalars['ID'];
};


export type QueryAllEnvsForEnvironmentArgs = {
  environmentId: Scalars['String'];
  projectId: Scalars['String'];
};


export type QueryAllEnvsForPluginArgs = {
  environmentId: Scalars['String'];
  pluginId: Scalars['String'];
  projectId: Scalars['String'];
};


export type QueryAllProjectsArgs = {
  deleted?: InputMaybe<Scalars['Boolean']>;
  expired?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};


export type QueryAllTeamsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  usageSubscription?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAllUsersArgs = {
  admin?: InputMaybe<Scalars['Boolean']>;
  banned?: InputMaybe<Scalars['Boolean']>;
  earlyAdopter?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  referredUsers?: InputMaybe<Scalars['Boolean']>;
  riskLevel?: InputMaybe<Scalars['Float']>;
  usageSubscription?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAvailablePluginsForProjectArgs = {
  projectId: Scalars['ID'];
};


export type QueryBuildLogsArgs = {
  deploymentId: Scalars['ID'];
  end?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  projectId: Scalars['ID'];
};


export type QueryDecryptedVariablesArgs = {
  environmentId: Scalars['String'];
  pluginId?: InputMaybe<Scalars['String']>;
  projectId: Scalars['String'];
  serviceId?: InputMaybe<Scalars['String']>;
  unrendered?: InputMaybe<Scalars['Boolean']>;
};


export type QueryDecryptedVariablesForServiceArgs = {
  environmentId: Scalars['String'];
  projectId: Scalars['String'];
  serviceId?: InputMaybe<Scalars['String']>;
};


export type QueryDeploymentArgs = {
  id: Scalars['ID'];
};


export type QueryDeploymentByDomainArgs = {
  domain: Scalars['String'];
};


export type QueryDeploymentByIdArgs = {
  deploymentId: Scalars['ID'];
  projectId: Scalars['ID'];
};


export type QueryDeploymentLogsArgs = {
  deploymentId: Scalars['ID'];
  end?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  projectId: Scalars['ID'];
};


export type QueryDeploymentsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  includeDeleted?: InputMaybe<Scalars['Boolean']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
  where?: InputMaybe<DeploymentListWhereInput>;
};


export type QueryEnvironmentArgs = {
  id: Scalars['ID'];
};


export type QueryEnvironmentByIdArgs = {
  environmentId: Scalars['String'];
  projectId: Scalars['String'];
};


export type QueryEnvironmentsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  includeDeleted?: InputMaybe<Scalars['Boolean']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
  where?: InputMaybe<EnvironmentListWhereInput>;
};


export type QueryFindInviteCodeByCodeArgs = {
  code: Scalars['String'];
};


export type QueryFindTeamByCodeArgs = {
  code: Scalars['String'];
};


export type QueryGenericPluginArgs = {
  pluginId: Scalars['ID'];
  projectId: Scalars['ID'];
};


export type QueryGetAllPartnerProjectsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllVerificationAppealsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  pending?: InputMaybe<Scalars['Boolean']>;
  query?: InputMaybe<Scalars['String']>;
};


export type QueryGetBanReasonHistoryArgs = {
  userId: Scalars['ID'];
};


export type QueryGetBranchesForGitHubRepoArgs = {
  owner: Scalars['String'];
  repo: Scalars['String'];
};


export type QueryGetCustomerForTeamArgs = {
  teamId: Scalars['String'];
};


export type QueryGetDeploymentTriggersByProjectArgs = {
  environmentId?: InputMaybe<Scalars['ID']>;
  projectId: Scalars['ID'];
  serviceId?: InputMaybe<Scalars['ID']>;
};


export type QueryGetPartnerPayoutArgs = {
  date: Scalars['String'];
};


export type QueryGetPartnerProjectArgs = {
  id: Scalars['ID'];
};


export type QueryGetPayoutForProjectArgs = {
  kickbackPercent: Scalars['Int'];
  partnerProjectId: Scalars['ID'];
};


export type QueryGetProjectsForPartnerArgs = {
  teamId?: InputMaybe<Scalars['ID']>;
};


export type QueryGetSqlTableArgs = {
  databaseType: Scalars['String'];
  environmentId: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  offset?: InputMaybe<Scalars['Int']>;
  pluginId: Scalars['String'];
  projectId: Scalars['String'];
};


export type QueryGetSqlTableNamesArgs = {
  databaseType: Scalars['String'];
  environmentId: Scalars['String'];
  pluginId: Scalars['String'];
  projectId: Scalars['String'];
};


export type QueryGetSuggestedVariablesArgs = {
  environmentId: Scalars['ID'];
  projectId: Scalars['ID'];
  serviceId?: InputMaybe<Scalars['ID']>;
};


export type QueryGetTemplateConfigurationArgs = {
  code: Scalars['String'];
};


export type QueryGetTemplateVersionsByCodeArgs = {
  code: Scalars['String'];
};


export type QueryGetUserArgs = {
  userId: Scalars['String'];
};


export type QueryGetUsersWithClashingIPsArgs = {
  userId: Scalars['ID'];
};


export type QueryGetWorkflowStatusArgs = {
  projectId?: InputMaybe<Scalars['String']>;
  workflowId: Scalars['String'];
};


export type QueryGithubEventsArgs = {
  userId: Scalars['String'];
};


export type QueryHerokuTemplateToRailwayTemplateArgs = {
  repoUrl: Scalars['String'];
};


export type QueryIntegrationAuthArgs = {
  provider: Scalars['String'];
  providerId: Scalars['String'];
};


export type QueryIntegrationsArgs = {
  projectId: Scalars['String'];
};


export type QueryInviteCodeArgs = {
  projectId: Scalars['String'];
  role: Scalars['String'];
};


export type QueryIsCustomDomainAvailableArgs = {
  domain: Scalars['String'];
};


export type QueryIsEnvironmentDomainAvailableArgs = {
  domain: Scalars['String'];
};


export type QueryIsRepoNameAvailableArgs = {
  fullRepoName: Scalars['String'];
};


export type QueryMetricsForServiceArgs = {
  endDate?: InputMaybe<Scalars['String']>;
  environmentId: Scalars['ID'];
  pluginId?: InputMaybe<Scalars['ID']>;
  projectId: Scalars['ID'];
  samplingRate?: InputMaybe<Scalars['Int']>;
  serviceId?: InputMaybe<Scalars['ID']>;
  startDate?: InputMaybe<Scalars['String']>;
};


export type QueryMongoCollectionDataArgs = {
  database: Scalars['String'];
  environmentId: Scalars['String'];
  name: Scalars['String'];
  pluginId: Scalars['String'];
  projectId: Scalars['String'];
};


export type QueryMongoCollectionNamesArgs = {
  database: Scalars['String'];
  environmentId: Scalars['String'];
  pluginId: Scalars['String'];
  projectId: Scalars['String'];
};


export type QueryMongoDatabaseNamesArgs = {
  environmentId: Scalars['String'];
  pluginId: Scalars['String'];
  projectId: Scalars['String'];
};


export type QueryPluginLogsArgs = {
  end?: InputMaybe<Scalars['String']>;
  environmentId: Scalars['ID'];
  filter?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  pluginId: Scalars['ID'];
  projectId: Scalars['ID'];
};


export type QueryProjectArgs = {
  id: Scalars['ID'];
};


export type QueryProjectByIdArgs = {
  projectId: Scalars['ID'];
};


export type QueryProjectEventsArgs = {
  environmentId?: InputMaybe<Scalars['ID']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  projectId: Scalars['ID'];
};


export type QueryProjectMembersArgs = {
  projectId: Scalars['ID'];
};


export type QueryProjectResourceAccessArgs = {
  projectId: Scalars['ID'];
};


export type QueryProjectTokensArgs = {
  projectId: Scalars['String'];
};


export type QueryProjectWebhooksArgs = {
  projectId: Scalars['ID'];
};


export type QueryProjectsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  includeDeleted?: InputMaybe<Scalars['Boolean']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
  where?: InputMaybe<ProjectListWhereInput>;
};


export type QueryRedisGetKeyArgs = {
  environmentId: Scalars['String'];
  key: Scalars['String'];
  pluginId: Scalars['String'];
  projectId: Scalars['String'];
};


export type QueryRedisKeysArgs = {
  environmentId: Scalars['String'];
  pluginId: Scalars['String'];
  projectId: Scalars['String'];
};


export type QueryResourceAccessArgs = {
  explicitResourceOwner?: InputMaybe<ResourceOwnerInput>;
};


export type QueryServiceArgs = {
  id: Scalars['ID'];
};


export type QueryServiceIsUpdatableArgs = {
  projectId: Scalars['ID'];
  serviceId: Scalars['ID'];
};


export type QueryServicesArgs = {
  after?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  includeDeleted?: InputMaybe<Scalars['Boolean']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
  where?: InputMaybe<ServiceListWhereInput>;
};


export type QuerySourceTemplateForProjectArgs = {
  projectId: Scalars['String'];
};


export type QueryTeamByIdArgs = {
  teamId: Scalars['ID'];
};


export type QueryTemplateMetadataArgs = {
  code: Scalars['String'];
};


export type QueryTopProjectsArgs = {
  endDate?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  resource: Scalars['String'];
  startDate?: InputMaybe<Scalars['String']>;
};


export type QueryUsageForProjectArgs = {
  date?: InputMaybe<Scalars['String']>;
  projectId: Scalars['String'];
};


export type QueryUsageForTeamProjectsArgs = {
  date?: InputMaybe<Scalars['String']>;
  teamId: Scalars['String'];
};


export type QueryUsageForUserProjectsArgs = {
  date?: InputMaybe<Scalars['String']>;
  userId: Scalars['String'];
};


export type QueryUserIdForDiscordIdArgs = {
  discordId: Scalars['ID'];
};


export type QueryVerifyLoginSessionArgs = {
  code: Scalars['String'];
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

/** Response returned after running a raw query */
export type RawQueryResponse = {
  __typename?: 'RawQueryResponse';
  raw: Scalars['Json'];
};

export type RecoveryCodes = {
  __typename?: 'RecoveryCodes';
  recoveryCodes: Array<Scalars['String']>;
};

/** A key and associated type belonging to a Redis database */
export type RedisKey = {
  __typename?: 'RedisKey';
  name: Scalars['String'];
  ttl?: Maybe<Scalars['BigInt']>;
  type: Scalars['String'];
};

export type ReferralDetails = {
  __typename?: 'ReferralDetails';
  referralInfo?: Maybe<ReferralInfo>;
  referredUsers: Array<ReferralInfo>;
};

export type ReferralInfo = {
  __typename?: 'ReferralInfo';
  code: Scalars['String'];
  id: Scalars['String'];
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
  RefereeCredited = 'REFEREE_CREDITED',
  ReferrerCredited = 'REFERRER_CREDITED',
  Registered = 'REGISTERED'
}

export enum RegistrationStatus {
  Onboarded = 'ONBOARDED',
  Registered = 'REGISTERED',
  Waitlisted = 'WAITLISTED'
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
  __typename?: 'ResourceAccess';
  project: AccessRule;
};

export type ResourceOwnerInput = {
  /** The ID of the owner */
  id: Scalars['ID'];
  /** The type of owner */
  type: ResourceOwnerType;
};

export enum ResourceOwnerType {
  Team = 'TEAM',
  User = 'USER'
}

export enum RestartPolicyType {
  Always = 'ALWAYS',
  Never = 'NEVER',
  OnFailure = 'ON_FAILURE'
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
  constraint?: InputMaybe<Scalars['String']>;
  default?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  type: Scalars['String'];
};

export type SqlRowInput = {
  name: Scalars['String'];
  value: Scalars['String'];
};

/** A table belonging to an SQL database */
export type SqlTable = {
  __typename?: 'SQLTable';
  columnNames: Array<Scalars['String']>;
  columnTypes: Array<Scalars['Int']>;
  name: Scalars['String'];
  primaryKey: Scalars['String'];
  rows: Array<Scalars['Json']>;
  totalRows: Scalars['Int'];
};

export type Service = {
  __typename?: 'Service';
  buildCommand?: Maybe<Scalars['String']>;
  builder: Builder;
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  deployments: Array<Deployment>;
  healthcheckPath?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  isUpdatable: Scalars['Boolean'];
  name: Scalars['String'];
  project: Project;
  projectId: Scalars['String'];
  repoTriggers: Array<DeploymentTrigger>;
  restartPolicyMaxRetries: Scalars['Int'];
  restartPolicyType: RestartPolicyType;
  rootDirectory?: Maybe<Scalars['String']>;
  source: Scalars['Json'];
  startCommand?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  upstreamUrl?: Maybe<Scalars['String']>;
  watchPatterns: Array<Scalars['String']>;
};


export type ServiceDeploymentsArgs = {
  after?: InputMaybe<DeploymentWhereUniqueInput>;
  before?: InputMaybe<DeploymentWhereUniqueInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DeploymentOrderByWithRelationInput>>;
  where?: InputMaybe<DeploymentWhereInput>;
};


export type ServiceRepoTriggersArgs = {
  after?: InputMaybe<DeploymentTriggerWhereUniqueInput>;
  before?: InputMaybe<DeploymentTriggerWhereUniqueInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type ServiceConnection = {
  __typename?: 'ServiceConnection';
  nodes: Array<Service>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ServiceDomain = {
  __typename?: 'ServiceDomain';
  deletedAt?: Maybe<Scalars['DateTime']>;
  domain: Scalars['String'];
  environmentId: Scalars['String'];
  id: Scalars['String'];
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
  __typename?: 'ServiceExecutionTime';
  totalMinutes: Scalars['Float'];
};

export type ServiceListRelationFilter = {
  every?: InputMaybe<ServiceWhereInput>;
  none?: InputMaybe<ServiceWhereInput>;
  some?: InputMaybe<ServiceWhereInput>;
};

export type ServiceListWhereInput = {
  builder?: InputMaybe<Builder>;
  projectId?: InputMaybe<Scalars['ID']>;
  query?: InputMaybe<Scalars['String']>;
};

export type ServiceNameProjectIdCompoundUniqueInput = {
  name: Scalars['String'];
  projectId: Scalars['String'];
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
  commit?: InputMaybe<Scalars['String']>;
  hasDomain?: InputMaybe<Scalars['Boolean']>;
  healthcheckPath?: InputMaybe<Scalars['String']>;
  isPrivate?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  owner: Scalars['String'];
  rootDirectory?: InputMaybe<Scalars['String']>;
  serviceName: Scalars['String'];
  startCommand?: InputMaybe<Scalars['String']>;
  template: Scalars['String'];
  variables?: InputMaybe<Scalars['Json']>;
};

export type ServiceUsage = {
  __typename?: 'ServiceUsage';
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
  id?: InputMaybe<Scalars['String']>;
  name_projectId?: InputMaybe<ServiceNameProjectIdCompoundUniqueInput>;
};

export type Session = {
  __typename?: 'Session';
  createdAt: Scalars['DateTime'];
  expiredAt: Scalars['DateTime'];
  id: Scalars['String'];
  isCurrent: Scalars['Boolean'];
  name: Scalars['String'];
  type: SessionType;
  updatedAt: Scalars['DateTime'];
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
  Browser = 'BROWSER',
  Cli = 'CLI'
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
  Asc = 'asc',
  Desc = 'desc'
}

export type Stats = {
  __typename?: 'Stats';
  activeProjects: Array<Project>;
  dailyActiveProjects: Scalars['Int'];
  deploysInProgress: Scalars['Int'];
  deploysLastHour: Scalars['Int'];
  latestDeploys: Array<Deployment>;
  latestProjects: Array<Project>;
  latestUsers: Array<User>;
  numDeploysActive: Scalars['Int'];
  numDeploysTotal: Scalars['Int'];
  numProjects: Scalars['Int'];
  numSubscribed: Scalars['Int'];
  numTeams: Scalars['Int'];
  numUsers: Scalars['Int'];
  numVerifiedUsers: Scalars['Int'];
  totalPlatformUsage?: Maybe<TotalUsage>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableListFilter = {
  equals?: InputMaybe<Array<Scalars['String']>>;
  has?: InputMaybe<Scalars['String']>;
  hasEvery?: InputMaybe<Array<Scalars['String']>>;
  hasSome?: InputMaybe<Array<Scalars['String']>>;
  isEmpty?: InputMaybe<Scalars['Boolean']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  /** Tail a stream of build logs */
  buildLogs: Array<Log>;
  /** Tail a stream of deploy logs */
  deploymentLogs: Array<Log>;
  /** Tail a stream of plugin logs */
  pluginLogs: Array<Log>;
};


export type SubscriptionBuildLogsArgs = {
  deploymentId: Scalars['ID'];
  filter?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  projectId: Scalars['ID'];
};


export type SubscriptionDeploymentLogsArgs = {
  deploymentId: Scalars['ID'];
  filter?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  projectId: Scalars['ID'];
};


export type SubscriptionPluginLogsArgs = {
  environmentId: Scalars['ID'];
  filter?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  pluginId: Scalars['ID'];
  projectId: Scalars['ID'];
};

export type SubscriptionItem = {
  __typename?: 'SubscriptionItem';
  itemId: Scalars['String'];
  priceId: Scalars['String'];
  productId: Scalars['String'];
  quantity?: Maybe<Scalars['BigInt']>;
};

export enum SubscriptionState {
  Active = 'ACTIVE',
  Cancelled = 'CANCELLED',
  Inactive = 'INACTIVE',
  PastDue = 'PAST_DUE',
  Unpaid = 'UNPAID'
}

export type Team = {
  __typename?: 'Team';
  avatar?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  customer?: Maybe<Customer>;
  discordRole?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  members: Array<TeamMember>;
  name: Scalars['String'];
  projects: Array<Project>;
  teamPermissions: Array<TeamPermission>;
  updatedAt: Scalars['DateTime'];
};


export type TeamProjectsArgs = {
  after?: InputMaybe<ProjectWhereUniqueInput>;
  before?: InputMaybe<ProjectWhereUniqueInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ProjectOrderByWithRelationInput>>;
};


export type TeamTeamPermissionsArgs = {
  after?: InputMaybe<TeamPermissionWhereUniqueInput>;
  before?: InputMaybe<TeamPermissionWhereUniqueInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type TeamListRelationFilter = {
  every?: InputMaybe<TeamWhereInput>;
  none?: InputMaybe<TeamWhereInput>;
  some?: InputMaybe<TeamWhereInput>;
};

export type TeamMember = {
  __typename?: 'TeamMember';
  avatar?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
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
  __typename?: 'TeamPermission';
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  role: TeamRole;
  teamId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['String'];
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
  teamId: Scalars['String'];
  userId: Scalars['String'];
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
  id?: InputMaybe<Scalars['String']>;
  userId_teamId?: InputMaybe<TeamPermissionUserIdTeamIdCompoundUniqueInput>;
};

export enum TeamRole {
  Admin = 'ADMIN',
  Member = 'MEMBER'
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
  id?: InputMaybe<Scalars['String']>;
};

export type Template = {
  __typename?: 'Template';
  code: Scalars['String'];
  configuration: Scalars['Json'];
  createdAt: Scalars['DateTime'];
  demoProjectId?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  projects: Scalars['Int'];
  userId?: Maybe<Scalars['String']>;
};

export type TemplateListRelationFilter = {
  every?: InputMaybe<TemplateWhereInput>;
  none?: InputMaybe<TemplateWhereInput>;
  some?: InputMaybe<TemplateWhereInput>;
};

export type TemplateMetadata = {
  __typename?: 'TemplateMetadata';
  description: Scalars['String'];
  name: Scalars['String'];
  readmeContent: Scalars['String'];
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
  __typename?: 'TemplateVersion';
  configuration: Scalars['Json'];
  id: Scalars['String'];
  isLatestCommit: Scalars['Boolean'];
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
  __typename?: 'TemplateWithVersions';
  code: Scalars['String'];
  configuration: Scalars['Json'];
  demoProjectId?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  versions: Array<TemplateVersion>;
};

export type TotalUsage = {
  __typename?: 'TotalUsage';
  current: Scalars['Float'];
  estimated: Scalars['Float'];
};

export type TwoFactorInfo = {
  __typename?: 'TwoFactorInfo';
  hasRecoveryCodes: Scalars['Boolean'];
  isVerified: Scalars['Boolean'];
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
  __typename?: 'UsageBucket';
  avgUsage: UsageItem;
  date: Scalars['String'];
  usage: UsageItem;
};

export type UsageItem = {
  __typename?: 'UsageItem';
  cpuPercentvCPU: Scalars['Float'];
  memoryUsageGB: Scalars['Float'];
};

export type User = {
  __typename?: 'User';
  agreedFairUse: Scalars['Boolean'];
  avatar?: Maybe<Scalars['String']>;
  banReason?: Maybe<Scalars['String']>;
  cost: UserCost;
  createdAt: Scalars['DateTime'];
  customer?: Maybe<Customer>;
  discordRoles: Array<Scalars['String']>;
  email: Scalars['String'];
  executionTime?: Maybe<Scalars['Float']>;
  flags: Array<UserFlag>;
  has2FA: Scalars['Boolean'];
  id: Scalars['String'];
  isAdmin: Scalars['Boolean'];
  isDevPlan: Scalars['Boolean'];
  isVerified: Scalars['Boolean'];
  lastLogin: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  plan: Plan;
  preferences?: Maybe<Preferences>;
  projects: Array<Project>;
  providerAuths: Array<ProviderAuth>;
  referredUsers: Array<ReferralInfo>;
  registrationStatus: RegistrationStatus;
  riskLevel?: Maybe<Scalars['Float']>;
  teams: Array<Team>;
  termsAgreedOn?: Maybe<Scalars['DateTime']>;
};


export type UserProjectsArgs = {
  after?: InputMaybe<ProjectWhereUniqueInput>;
  before?: InputMaybe<ProjectWhereUniqueInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ProjectOrderByWithRelationInput>>;
};


export type UserProviderAuthsArgs = {
  after?: InputMaybe<ProviderAuthWhereUniqueInput>;
  before?: InputMaybe<ProviderAuthWhereUniqueInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type UserTeamsArgs = {
  after?: InputMaybe<TeamWhereUniqueInput>;
  before?: InputMaybe<TeamWhereUniqueInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type UserCost = {
  __typename?: 'UserCost';
  current: Scalars['Float'];
  estimated: Scalars['Float'];
};

export enum UserFlag {
  Beta = 'BETA'
}

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
  __typename?: 'UserWithClashingIP';
  email: Scalars['String'];
  id: Scalars['String'];
  isBanned: Scalars['Boolean'];
};

export type Variable = {
  __typename?: 'Variable';
  createdAt: Scalars['DateTime'];
  environment: Environment;
  environmentId: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  plugin?: Maybe<Plugin>;
  pluginId?: Maybe<Scalars['String']>;
  service?: Maybe<Service>;
  serviceId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type VariableListRelationFilter = {
  every?: InputMaybe<VariableWhereInput>;
  none?: InputMaybe<VariableWhereInput>;
  some?: InputMaybe<VariableWhereInput>;
};

export type VariableNamePluginIdEnvironmentIdCompoundUniqueInput = {
  environmentId: Scalars['String'];
  name: Scalars['String'];
  pluginId: Scalars['String'];
};

export type VariableNameServiceIdEnvironmentIdCompoundUniqueInput = {
  environmentId: Scalars['String'];
  name: Scalars['String'];
  serviceId: Scalars['String'];
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
  id?: InputMaybe<Scalars['String']>;
  name_pluginId_environmentId?: InputMaybe<VariableNamePluginIdEnvironmentIdCompoundUniqueInput>;
  name_serviceId_environmentId?: InputMaybe<VariableNameServiceIdEnvironmentIdCompoundUniqueInput>;
};

export type VercelAccount = {
  __typename?: 'VercelAccount';
  id: Scalars['String'];
  integrationAuthId: Scalars['String'];
  isUser: Scalars['Boolean'];
  name?: Maybe<Scalars['String']>;
  projects: Array<VercelProject>;
  slug?: Maybe<Scalars['String']>;
};

export type VercelInfo = {
  __typename?: 'VercelInfo';
  accounts: Array<VercelAccount>;
};

export type VercelProject = {
  __typename?: 'VercelProject';
  accountId: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
};

export type VerificationAppeal = {
  __typename?: 'VerificationAppeal';
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  repo: Scalars['String'];
  status: VerificationAppealStatus;
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
  userMessage?: Maybe<Scalars['String']>;
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
  Applied = 'APPLIED',
  Approved = 'APPROVED',
  Rejected = 'REJECTED'
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
  __typename?: 'VerificationStatus';
  card: Scalars['Boolean'];
  github: Scalars['Boolean'];
};

export type WorkflowResult = {
  __typename?: 'WorkflowResult';
  status: WorkflowStatus;
};

export enum WorkflowStatus {
  Complete = 'Complete',
  Error = 'Error',
  Running = 'Running'
}



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AccessRule: ResolverTypeWrapper<AccessRule>;
  AllDomains: ResolverTypeWrapper<AllDomains>;
  BanReasonHistory: ResolverTypeWrapper<BanReasonHistory>;
  BanReasonHistoryListRelationFilter: BanReasonHistoryListRelationFilter;
  BanReasonHistoryOrderByRelationAggregateInput: BanReasonHistoryOrderByRelationAggregateInput;
  BanReasonHistoryWhereInput: BanReasonHistoryWhereInput;
  BatchEvent: BatchEvent;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  BoolFilter: BoolFilter;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Builder: Builder;
  CnameCheck: ResolverTypeWrapper<CnameCheck>;
  CnameCheckStatus: CnameCheckStatus;
  ContainerInfo: ResolverTypeWrapper<ContainerInfo>;
  ContainerListRelationFilter: ContainerListRelationFilter;
  ContainerOrderByRelationAggregateInput: ContainerOrderByRelationAggregateInput;
  ContainerWhereInput: ContainerWhereInput;
  CreateProjectFromTemplateResult: ResolverTypeWrapper<CreateProjectFromTemplateResult>;
  Credit: ResolverTypeWrapper<Credit>;
  CreditListRelationFilter: CreditListRelationFilter;
  CreditOrderByRelationAggregateInput: CreditOrderByRelationAggregateInput;
  CreditOrderByWithRelationInput: CreditOrderByWithRelationInput;
  CreditType: CreditType;
  CreditWhereInput: CreditWhereInput;
  CreditWhereUniqueInput: CreditWhereUniqueInput;
  CustomDomain: ResolverTypeWrapper<CustomDomain>;
  CustomDomainDomainDeletedAtCompoundUniqueInput: CustomDomainDomainDeletedAtCompoundUniqueInput;
  CustomDomainListRelationFilter: CustomDomainListRelationFilter;
  CustomDomainOrderByRelationAggregateInput: CustomDomainOrderByRelationAggregateInput;
  CustomDomainWhereInput: CustomDomainWhereInput;
  CustomDomainWhereUniqueInput: CustomDomainWhereUniqueInput;
  Customer: ResolverTypeWrapper<Customer>;
  CustomerInvoice: ResolverTypeWrapper<CustomerInvoice>;
  CustomerOrderByWithRelationInput: CustomerOrderByWithRelationInput;
  CustomerSubscription: ResolverTypeWrapper<CustomerSubscription>;
  CustomerWhereInput: CustomerWhereInput;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  DateTimeFilter: DateTimeFilter;
  DateTimeNullableFilter: DateTimeNullableFilter;
  DeployStatus: DeployStatus;
  Deployment: ResolverTypeWrapper<Deployment>;
  DeploymentByDomain: ResolverTypeWrapper<DeploymentByDomain>;
  DeploymentConnection: ResolverTypeWrapper<DeploymentConnection>;
  DeploymentListRelationFilter: DeploymentListRelationFilter;
  DeploymentListWhereInput: DeploymentListWhereInput;
  DeploymentOrderByRelationAggregateInput: DeploymentOrderByRelationAggregateInput;
  DeploymentOrderByWithRelationInput: DeploymentOrderByWithRelationInput;
  DeploymentSnapshot: ResolverTypeWrapper<DeploymentSnapshot>;
  DeploymentSnapshotOrderByWithRelationInput: DeploymentSnapshotOrderByWithRelationInput;
  DeploymentSnapshotWhereInput: DeploymentSnapshotWhereInput;
  DeploymentStatus: DeploymentStatus;
  DeploymentStatusInput: DeploymentStatusInput;
  DeploymentTrigger: ResolverTypeWrapper<DeploymentTrigger>;
  DeploymentTriggerListRelationFilter: DeploymentTriggerListRelationFilter;
  DeploymentTriggerOrderByRelationAggregateInput: DeploymentTriggerOrderByRelationAggregateInput;
  DeploymentTriggerWhereInput: DeploymentTriggerWhereInput;
  DeploymentTriggerWhereUniqueInput: DeploymentTriggerWhereUniqueInput;
  DeploymentUsage: ResolverTypeWrapper<DeploymentUsage>;
  DeploymentWhereInput: DeploymentWhereInput;
  DeploymentWhereUniqueInput: DeploymentWhereUniqueInput;
  DeploymentWithMetrics: ResolverTypeWrapper<DeploymentWithMetrics>;
  DomainAvailable: ResolverTypeWrapper<DomainAvailable>;
  EmailTemplate: ResolverTypeWrapper<EmailTemplate>;
  EnumBuilderFilter: EnumBuilderFilter;
  EnumCreditTypeFilter: EnumCreditTypeFilter;
  EnumDeploymentStatusFilter: EnumDeploymentStatusFilter;
  EnumImageTypeNullableFilter: EnumImageTypeNullableFilter;
  EnumPartnerProjectStatusFilter: EnumPartnerProjectStatusFilter;
  EnumPlanFilter: EnumPlanFilter;
  EnumPluginStatusFilter: EnumPluginStatusFilter;
  EnumPluginTypeFilter: EnumPluginTypeFilter;
  EnumProjectRoleFilter: EnumProjectRoleFilter;
  EnumReferralStatusFilter: EnumReferralStatusFilter;
  EnumRegistrationStatusFilter: EnumRegistrationStatusFilter;
  EnumRestartPolicyTypeFilter: EnumRestartPolicyTypeFilter;
  EnumSessionTypeFilter: EnumSessionTypeFilter;
  EnumSubscriptionStateFilter: EnumSubscriptionStateFilter;
  EnumTeamRoleFilter: EnumTeamRoleFilter;
  EnumVerificationAppealStatusFilter: EnumVerificationAppealStatusFilter;
  Environment: ResolverTypeWrapper<Environment>;
  EnvironmentConnection: ResolverTypeWrapper<EnvironmentConnection>;
  EnvironmentListRelationFilter: EnvironmentListRelationFilter;
  EnvironmentListWhereInput: EnvironmentListWhereInput;
  EnvironmentMetrics: ResolverTypeWrapper<EnvironmentMetrics>;
  EnvironmentNameProjectIdCompoundUniqueInput: EnvironmentNameProjectIdCompoundUniqueInput;
  EnvironmentOrderByRelationAggregateInput: EnvironmentOrderByRelationAggregateInput;
  EnvironmentOrderByWithRelationInput: EnvironmentOrderByWithRelationInput;
  EnvironmentWhereInput: EnvironmentWhereInput;
  EnvironmentWhereUniqueInput: EnvironmentWhereUniqueInput;
  Event: ResolverTypeWrapper<Event>;
  EventListRelationFilter: EventListRelationFilter;
  EventOrderByRelationAggregateInput: EventOrderByRelationAggregateInput;
  EventWhereInput: EventWhereInput;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  FloatNullableFilter: FloatNullableFilter;
  GenericPlugin: ResolverTypeWrapper<GenericPlugin>;
  GenericPluginOrderByWithRelationInput: GenericPluginOrderByWithRelationInput;
  GenericPluginTabConfiguration: ResolverTypeWrapper<GenericPluginTabConfiguration>;
  GenericPluginToken: ResolverTypeWrapper<GenericPluginToken>;
  GenericPluginTokenListRelationFilter: GenericPluginTokenListRelationFilter;
  GenericPluginTokenOrderByRelationAggregateInput: GenericPluginTokenOrderByRelationAggregateInput;
  GenericPluginTokenWhereInput: GenericPluginTokenWhereInput;
  GenericPluginTokenWhereUniqueInput: GenericPluginTokenWhereUniqueInput;
  GenericPluginWhereInput: GenericPluginWhereInput;
  GitHubBranch: ResolverTypeWrapper<GitHubBranch>;
  GitHubEvent: ResolverTypeWrapper<GitHubEvent>;
  GitHubRepo: ResolverTypeWrapper<GitHubRepo>;
  HerokuApp: ResolverTypeWrapper<HerokuApp>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  ImageType: ImageType;
  Incident: ResolverTypeWrapper<Incident>;
  IncidentStatus: IncidentStatus;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  IntFilter: IntFilter;
  IntNullableFilter: IntNullableFilter;
  Integration: ResolverTypeWrapper<Integration>;
  IntegrationAuth: ResolverTypeWrapper<IntegrationAuth>;
  IntegrationAuthListRelationFilter: IntegrationAuthListRelationFilter;
  IntegrationAuthOrderByRelationAggregateInput: IntegrationAuthOrderByRelationAggregateInput;
  IntegrationAuthWhereInput: IntegrationAuthWhereInput;
  IntegrationListRelationFilter: IntegrationListRelationFilter;
  IntegrationOrderByRelationAggregateInput: IntegrationOrderByRelationAggregateInput;
  IntegrationWhereInput: IntegrationWhereInput;
  IntegrationWhereUniqueInput: IntegrationWhereUniqueInput;
  InviteCode: ResolverTypeWrapper<InviteCode>;
  InviteCodeListRelationFilter: InviteCodeListRelationFilter;
  InviteCodeOrderByRelationAggregateInput: InviteCodeOrderByRelationAggregateInput;
  InviteCodeWhereInput: InviteCodeWhereInput;
  Json: ResolverTypeWrapper<Scalars['Json']>;
  JsonNullableFilter: JsonNullableFilter;
  LockdownStatus: ResolverTypeWrapper<LockdownStatus>;
  Log: ResolverTypeWrapper<Log>;
  LogListRelationFilter: LogListRelationFilter;
  LogOrderByRelationAggregateInput: LogOrderByRelationAggregateInput;
  LogWhereInput: LogWhereInput;
  MagicAuth: ResolverTypeWrapper<MagicAuth>;
  MagicAuthListRelationFilter: MagicAuthListRelationFilter;
  MagicAuthOrderByRelationAggregateInput: MagicAuthOrderByRelationAggregateInput;
  MagicAuthWhereInput: MagicAuthWhereInput;
  Member: ResolverTypeWrapper<Member>;
  Metric: ResolverTypeWrapper<Metric>;
  MongoCollection: ResolverTypeWrapper<MongoCollection>;
  Mutation: ResolverTypeWrapper<{}>;
  NestedBoolFilter: NestedBoolFilter;
  NestedDateTimeFilter: NestedDateTimeFilter;
  NestedDateTimeNullableFilter: NestedDateTimeNullableFilter;
  NestedEnumBuilderFilter: NestedEnumBuilderFilter;
  NestedEnumCreditTypeFilter: NestedEnumCreditTypeFilter;
  NestedEnumDeploymentStatusFilter: NestedEnumDeploymentStatusFilter;
  NestedEnumImageTypeNullableFilter: NestedEnumImageTypeNullableFilter;
  NestedEnumPartnerProjectStatusFilter: NestedEnumPartnerProjectStatusFilter;
  NestedEnumPlanFilter: NestedEnumPlanFilter;
  NestedEnumPluginStatusFilter: NestedEnumPluginStatusFilter;
  NestedEnumPluginTypeFilter: NestedEnumPluginTypeFilter;
  NestedEnumProjectRoleFilter: NestedEnumProjectRoleFilter;
  NestedEnumReferralStatusFilter: NestedEnumReferralStatusFilter;
  NestedEnumRegistrationStatusFilter: NestedEnumRegistrationStatusFilter;
  NestedEnumRestartPolicyTypeFilter: NestedEnumRestartPolicyTypeFilter;
  NestedEnumSessionTypeFilter: NestedEnumSessionTypeFilter;
  NestedEnumSubscriptionStateFilter: NestedEnumSubscriptionStateFilter;
  NestedEnumTeamRoleFilter: NestedEnumTeamRoleFilter;
  NestedEnumVerificationAppealStatusFilter: NestedEnumVerificationAppealStatusFilter;
  NestedFloatNullableFilter: NestedFloatNullableFilter;
  NestedIntFilter: NestedIntFilter;
  NestedIntNullableFilter: NestedIntNullableFilter;
  NestedStringFilter: NestedStringFilter;
  NestedStringNullableFilter: NestedStringNullableFilter;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  PaginatedDeploys: ResolverTypeWrapper<PaginatedDeploys>;
  PaginatedEvents: ResolverTypeWrapper<PaginatedEvents>;
  PaginatedPartnerProjects: ResolverTypeWrapper<PaginatedPartnerProjects>;
  PaginatedProjects: ResolverTypeWrapper<PaginatedProjects>;
  PaginatedTeams: ResolverTypeWrapper<PaginatedTeams>;
  PaginatedUsers: ResolverTypeWrapper<PaginatedUsers>;
  PaginatedVerificationAppeals: ResolverTypeWrapper<PaginatedVerificationAppeals>;
  PaginationOrderBy: PaginationOrderBy;
  PartnerPayout: ResolverTypeWrapper<PartnerPayout>;
  PartnerPayoutForProject: ResolverTypeWrapper<PartnerPayoutForProject>;
  PartnerPayoutListRelationFilter: PartnerPayoutListRelationFilter;
  PartnerPayoutOrderByRelationAggregateInput: PartnerPayoutOrderByRelationAggregateInput;
  PartnerPayoutWhereInput: PartnerPayoutWhereInput;
  PartnerProject: ResolverTypeWrapper<PartnerProject>;
  PartnerProjectListRelationFilter: PartnerProjectListRelationFilter;
  PartnerProjectOrderByRelationAggregateInput: PartnerProjectOrderByRelationAggregateInput;
  PartnerProjectOrderByWithRelationInput: PartnerProjectOrderByWithRelationInput;
  PartnerProjectStatus: PartnerProjectStatus;
  PartnerProjectWhereInput: PartnerProjectWhereInput;
  PaymentMethod: ResolverTypeWrapper<PaymentMethod>;
  PaymentMethodCard: ResolverTypeWrapper<PaymentMethodCard>;
  Plan: Plan;
  PlatformStatus: ResolverTypeWrapper<PlatformStatus>;
  Plugin: ResolverTypeWrapper<Plugin>;
  PluginContainerUsage: ResolverTypeWrapper<PluginContainerUsage>;
  PluginListRelationFilter: PluginListRelationFilter;
  PluginOrderByRelationAggregateInput: PluginOrderByRelationAggregateInput;
  PluginOrderByWithRelationInput: PluginOrderByWithRelationInput;
  PluginStatus: PluginStatus;
  PluginType: PluginType;
  PluginUsage: ResolverTypeWrapper<PluginUsage>;
  PluginWhereInput: PluginWhereInput;
  PluginWhereUniqueInput: PluginWhereUniqueInput;
  PluginWithMetrics: ResolverTypeWrapper<PluginWithMetrics>;
  Preferences: ResolverTypeWrapper<Preferences>;
  PreferencesOrderByWithRelationInput: PreferencesOrderByWithRelationInput;
  PreferencesWhereInput: PreferencesWhereInput;
  Project: ResolverTypeWrapper<Project>;
  ProjectConnection: ResolverTypeWrapper<ProjectConnection>;
  ProjectExecutionTime: ResolverTypeWrapper<ProjectExecutionTime>;
  ProjectListRelationFilter: ProjectListRelationFilter;
  ProjectListWhereInput: ProjectListWhereInput;
  ProjectOrderByRelationAggregateInput: ProjectOrderByRelationAggregateInput;
  ProjectOrderByWithRelationInput: ProjectOrderByWithRelationInput;
  ProjectPermission: ResolverTypeWrapper<ProjectPermission>;
  ProjectPermissionListRelationFilter: ProjectPermissionListRelationFilter;
  ProjectPermissionOrderByRelationAggregateInput: ProjectPermissionOrderByRelationAggregateInput;
  ProjectPermissionUserIdProjectIdCompoundUniqueInput: ProjectPermissionUserIdProjectIdCompoundUniqueInput;
  ProjectPermissionWhereInput: ProjectPermissionWhereInput;
  ProjectPermissionWhereUniqueInput: ProjectPermissionWhereUniqueInput;
  ProjectResourceAccess: ResolverTypeWrapper<ProjectResourceAccess>;
  ProjectRole: ProjectRole;
  ProjectTeam: ResolverTypeWrapper<ProjectTeam>;
  ProjectToken: ResolverTypeWrapper<ProjectToken>;
  ProjectTokenListRelationFilter: ProjectTokenListRelationFilter;
  ProjectTokenOrderByRelationAggregateInput: ProjectTokenOrderByRelationAggregateInput;
  ProjectTokenWhereInput: ProjectTokenWhereInput;
  ProjectUsage: ResolverTypeWrapper<ProjectUsage>;
  ProjectWebhook: ResolverTypeWrapper<ProjectWebhook>;
  ProjectWebhookListRelationFilter: ProjectWebhookListRelationFilter;
  ProjectWebhookOrderByRelationAggregateInput: ProjectWebhookOrderByRelationAggregateInput;
  ProjectWebhookWhereInput: ProjectWebhookWhereInput;
  ProjectWebhookWhereUniqueInput: ProjectWebhookWhereUniqueInput;
  ProjectWhereInput: ProjectWhereInput;
  ProjectWhereUniqueInput: ProjectWhereUniqueInput;
  ProviderAuth: ResolverTypeWrapper<ProviderAuth>;
  ProviderAuthListRelationFilter: ProviderAuthListRelationFilter;
  ProviderAuthOrderByRelationAggregateInput: ProviderAuthOrderByRelationAggregateInput;
  ProviderAuthProviderIdDeletedAtCompoundUniqueInput: ProviderAuthProviderIdDeletedAtCompoundUniqueInput;
  ProviderAuthWhereInput: ProviderAuthWhereInput;
  ProviderAuthWhereUniqueInput: ProviderAuthWhereUniqueInput;
  QRCode: ResolverTypeWrapper<QrCode>;
  Query: ResolverTypeWrapper<{}>;
  QueryMode: QueryMode;
  RawQueryResponse: ResolverTypeWrapper<RawQueryResponse>;
  RecoveryCodes: ResolverTypeWrapper<RecoveryCodes>;
  RedisKey: ResolverTypeWrapper<RedisKey>;
  ReferralDetails: ResolverTypeWrapper<ReferralDetails>;
  ReferralInfo: ResolverTypeWrapper<ReferralInfo>;
  ReferralInfoListRelationFilter: ReferralInfoListRelationFilter;
  ReferralInfoOrderByRelationAggregateInput: ReferralInfoOrderByRelationAggregateInput;
  ReferralInfoOrderByWithRelationInput: ReferralInfoOrderByWithRelationInput;
  ReferralInfoWhereInput: ReferralInfoWhereInput;
  ReferralStatus: ReferralStatus;
  RegistrationStatus: RegistrationStatus;
  RequestedPluginListRelationFilter: RequestedPluginListRelationFilter;
  RequestedPluginOrderByRelationAggregateInput: RequestedPluginOrderByRelationAggregateInput;
  RequestedPluginWhereInput: RequestedPluginWhereInput;
  ResourceAccess: ResolverTypeWrapper<ResourceAccess>;
  ResourceOwnerInput: ResourceOwnerInput;
  ResourceOwnerType: ResourceOwnerType;
  RestartPolicyType: RestartPolicyType;
  RiskLevelHistoryListRelationFilter: RiskLevelHistoryListRelationFilter;
  RiskLevelHistoryOrderByRelationAggregateInput: RiskLevelHistoryOrderByRelationAggregateInput;
  RiskLevelHistoryWhereInput: RiskLevelHistoryWhereInput;
  SQLColumnInput: SqlColumnInput;
  SQLRowInput: SqlRowInput;
  SQLTable: ResolverTypeWrapper<SqlTable>;
  Service: ResolverTypeWrapper<Service>;
  ServiceConnection: ResolverTypeWrapper<ServiceConnection>;
  ServiceDomain: ResolverTypeWrapper<ServiceDomain>;
  ServiceDomainListRelationFilter: ServiceDomainListRelationFilter;
  ServiceDomainOrderByRelationAggregateInput: ServiceDomainOrderByRelationAggregateInput;
  ServiceDomainWhereInput: ServiceDomainWhereInput;
  ServiceExecutionTime: ResolverTypeWrapper<ServiceExecutionTime>;
  ServiceListRelationFilter: ServiceListRelationFilter;
  ServiceListWhereInput: ServiceListWhereInput;
  ServiceNameProjectIdCompoundUniqueInput: ServiceNameProjectIdCompoundUniqueInput;
  ServiceOrderByRelationAggregateInput: ServiceOrderByRelationAggregateInput;
  ServiceOrderByWithRelationInput: ServiceOrderByWithRelationInput;
  ServiceTemplateInput: ServiceTemplateInput;
  ServiceUsage: ResolverTypeWrapper<ServiceUsage>;
  ServiceWhereInput: ServiceWhereInput;
  ServiceWhereUniqueInput: ServiceWhereUniqueInput;
  Session: ResolverTypeWrapper<Session>;
  SessionListRelationFilter: SessionListRelationFilter;
  SessionOrderByRelationAggregateInput: SessionOrderByRelationAggregateInput;
  SessionType: SessionType;
  SessionWhereInput: SessionWhereInput;
  SortOrder: SortOrder;
  Stats: ResolverTypeWrapper<Stats>;
  String: ResolverTypeWrapper<Scalars['String']>;
  StringFilter: StringFilter;
  StringNullableFilter: StringNullableFilter;
  StringNullableListFilter: StringNullableListFilter;
  Subscription: ResolverTypeWrapper<{}>;
  SubscriptionItem: ResolverTypeWrapper<SubscriptionItem>;
  SubscriptionState: SubscriptionState;
  Team: ResolverTypeWrapper<Team>;
  TeamListRelationFilter: TeamListRelationFilter;
  TeamMember: ResolverTypeWrapper<TeamMember>;
  TeamOrderByRelationAggregateInput: TeamOrderByRelationAggregateInput;
  TeamOrderByWithRelationInput: TeamOrderByWithRelationInput;
  TeamPermission: ResolverTypeWrapper<TeamPermission>;
  TeamPermissionListRelationFilter: TeamPermissionListRelationFilter;
  TeamPermissionOrderByRelationAggregateInput: TeamPermissionOrderByRelationAggregateInput;
  TeamPermissionUserIdTeamIdCompoundUniqueInput: TeamPermissionUserIdTeamIdCompoundUniqueInput;
  TeamPermissionWhereInput: TeamPermissionWhereInput;
  TeamPermissionWhereUniqueInput: TeamPermissionWhereUniqueInput;
  TeamRole: TeamRole;
  TeamWhereInput: TeamWhereInput;
  TeamWhereUniqueInput: TeamWhereUniqueInput;
  Template: ResolverTypeWrapper<Template>;
  TemplateListRelationFilter: TemplateListRelationFilter;
  TemplateMetadata: ResolverTypeWrapper<TemplateMetadata>;
  TemplateOrderByRelationAggregateInput: TemplateOrderByRelationAggregateInput;
  TemplateOrderByWithRelationInput: TemplateOrderByWithRelationInput;
  TemplateVersion: ResolverTypeWrapper<TemplateVersion>;
  TemplateVersionListRelationFilter: TemplateVersionListRelationFilter;
  TemplateVersionOrderByRelationAggregateInput: TemplateVersionOrderByRelationAggregateInput;
  TemplateVersionWhereInput: TemplateVersionWhereInput;
  TemplateWhereInput: TemplateWhereInput;
  TemplateWithVersions: ResolverTypeWrapper<TemplateWithVersions>;
  TotalUsage: ResolverTypeWrapper<TotalUsage>;
  TwoFactorInfo: ResolverTypeWrapper<TwoFactorInfo>;
  TwoFactorInfoOrderByWithRelationInput: TwoFactorInfoOrderByWithRelationInput;
  TwoFactorInfoWhereInput: TwoFactorInfoWhereInput;
  UsageBucket: ResolverTypeWrapper<UsageBucket>;
  UsageItem: ResolverTypeWrapper<UsageItem>;
  User: ResolverTypeWrapper<User>;
  UserCost: ResolverTypeWrapper<UserCost>;
  UserFlag: UserFlag;
  UserListRelationFilter: UserListRelationFilter;
  UserOrderByRelationAggregateInput: UserOrderByRelationAggregateInput;
  UserOrderByWithRelationInput: UserOrderByWithRelationInput;
  UserTokenListRelationFilter: UserTokenListRelationFilter;
  UserTokenOrderByRelationAggregateInput: UserTokenOrderByRelationAggregateInput;
  UserTokenWhereInput: UserTokenWhereInput;
  UserWhereInput: UserWhereInput;
  UserWithClashingIP: ResolverTypeWrapper<UserWithClashingIp>;
  Variable: ResolverTypeWrapper<Variable>;
  VariableListRelationFilter: VariableListRelationFilter;
  VariableNamePluginIdEnvironmentIdCompoundUniqueInput: VariableNamePluginIdEnvironmentIdCompoundUniqueInput;
  VariableNameServiceIdEnvironmentIdCompoundUniqueInput: VariableNameServiceIdEnvironmentIdCompoundUniqueInput;
  VariableOrderByRelationAggregateInput: VariableOrderByRelationAggregateInput;
  VariableWhereInput: VariableWhereInput;
  VariableWhereUniqueInput: VariableWhereUniqueInput;
  VercelAccount: ResolverTypeWrapper<VercelAccount>;
  VercelInfo: ResolverTypeWrapper<VercelInfo>;
  VercelProject: ResolverTypeWrapper<VercelProject>;
  VerificationAppeal: ResolverTypeWrapper<VerificationAppeal>;
  VerificationAppealOrderByWithRelationInput: VerificationAppealOrderByWithRelationInput;
  VerificationAppealStatus: VerificationAppealStatus;
  VerificationAppealWhereInput: VerificationAppealWhereInput;
  VerificationStatus: ResolverTypeWrapper<VerificationStatus>;
  WorkflowResult: ResolverTypeWrapper<WorkflowResult>;
  WorkflowStatus: WorkflowStatus;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AccessRule: AccessRule;
  AllDomains: AllDomains;
  BanReasonHistory: BanReasonHistory;
  BanReasonHistoryListRelationFilter: BanReasonHistoryListRelationFilter;
  BanReasonHistoryOrderByRelationAggregateInput: BanReasonHistoryOrderByRelationAggregateInput;
  BanReasonHistoryWhereInput: BanReasonHistoryWhereInput;
  BatchEvent: BatchEvent;
  BigInt: Scalars['BigInt'];
  BoolFilter: BoolFilter;
  Boolean: Scalars['Boolean'];
  CnameCheck: CnameCheck;
  ContainerInfo: ContainerInfo;
  ContainerListRelationFilter: ContainerListRelationFilter;
  ContainerOrderByRelationAggregateInput: ContainerOrderByRelationAggregateInput;
  ContainerWhereInput: ContainerWhereInput;
  CreateProjectFromTemplateResult: CreateProjectFromTemplateResult;
  Credit: Credit;
  CreditListRelationFilter: CreditListRelationFilter;
  CreditOrderByRelationAggregateInput: CreditOrderByRelationAggregateInput;
  CreditOrderByWithRelationInput: CreditOrderByWithRelationInput;
  CreditWhereInput: CreditWhereInput;
  CreditWhereUniqueInput: CreditWhereUniqueInput;
  CustomDomain: CustomDomain;
  CustomDomainDomainDeletedAtCompoundUniqueInput: CustomDomainDomainDeletedAtCompoundUniqueInput;
  CustomDomainListRelationFilter: CustomDomainListRelationFilter;
  CustomDomainOrderByRelationAggregateInput: CustomDomainOrderByRelationAggregateInput;
  CustomDomainWhereInput: CustomDomainWhereInput;
  CustomDomainWhereUniqueInput: CustomDomainWhereUniqueInput;
  Customer: Customer;
  CustomerInvoice: CustomerInvoice;
  CustomerOrderByWithRelationInput: CustomerOrderByWithRelationInput;
  CustomerSubscription: CustomerSubscription;
  CustomerWhereInput: CustomerWhereInput;
  DateTime: Scalars['DateTime'];
  DateTimeFilter: DateTimeFilter;
  DateTimeNullableFilter: DateTimeNullableFilter;
  Deployment: Deployment;
  DeploymentByDomain: DeploymentByDomain;
  DeploymentConnection: DeploymentConnection;
  DeploymentListRelationFilter: DeploymentListRelationFilter;
  DeploymentListWhereInput: DeploymentListWhereInput;
  DeploymentOrderByRelationAggregateInput: DeploymentOrderByRelationAggregateInput;
  DeploymentOrderByWithRelationInput: DeploymentOrderByWithRelationInput;
  DeploymentSnapshot: DeploymentSnapshot;
  DeploymentSnapshotOrderByWithRelationInput: DeploymentSnapshotOrderByWithRelationInput;
  DeploymentSnapshotWhereInput: DeploymentSnapshotWhereInput;
  DeploymentStatusInput: DeploymentStatusInput;
  DeploymentTrigger: DeploymentTrigger;
  DeploymentTriggerListRelationFilter: DeploymentTriggerListRelationFilter;
  DeploymentTriggerOrderByRelationAggregateInput: DeploymentTriggerOrderByRelationAggregateInput;
  DeploymentTriggerWhereInput: DeploymentTriggerWhereInput;
  DeploymentTriggerWhereUniqueInput: DeploymentTriggerWhereUniqueInput;
  DeploymentUsage: DeploymentUsage;
  DeploymentWhereInput: DeploymentWhereInput;
  DeploymentWhereUniqueInput: DeploymentWhereUniqueInput;
  DeploymentWithMetrics: DeploymentWithMetrics;
  DomainAvailable: DomainAvailable;
  EmailTemplate: EmailTemplate;
  EnumBuilderFilter: EnumBuilderFilter;
  EnumCreditTypeFilter: EnumCreditTypeFilter;
  EnumDeploymentStatusFilter: EnumDeploymentStatusFilter;
  EnumImageTypeNullableFilter: EnumImageTypeNullableFilter;
  EnumPartnerProjectStatusFilter: EnumPartnerProjectStatusFilter;
  EnumPlanFilter: EnumPlanFilter;
  EnumPluginStatusFilter: EnumPluginStatusFilter;
  EnumPluginTypeFilter: EnumPluginTypeFilter;
  EnumProjectRoleFilter: EnumProjectRoleFilter;
  EnumReferralStatusFilter: EnumReferralStatusFilter;
  EnumRegistrationStatusFilter: EnumRegistrationStatusFilter;
  EnumRestartPolicyTypeFilter: EnumRestartPolicyTypeFilter;
  EnumSessionTypeFilter: EnumSessionTypeFilter;
  EnumSubscriptionStateFilter: EnumSubscriptionStateFilter;
  EnumTeamRoleFilter: EnumTeamRoleFilter;
  EnumVerificationAppealStatusFilter: EnumVerificationAppealStatusFilter;
  Environment: Environment;
  EnvironmentConnection: EnvironmentConnection;
  EnvironmentListRelationFilter: EnvironmentListRelationFilter;
  EnvironmentListWhereInput: EnvironmentListWhereInput;
  EnvironmentMetrics: EnvironmentMetrics;
  EnvironmentNameProjectIdCompoundUniqueInput: EnvironmentNameProjectIdCompoundUniqueInput;
  EnvironmentOrderByRelationAggregateInput: EnvironmentOrderByRelationAggregateInput;
  EnvironmentOrderByWithRelationInput: EnvironmentOrderByWithRelationInput;
  EnvironmentWhereInput: EnvironmentWhereInput;
  EnvironmentWhereUniqueInput: EnvironmentWhereUniqueInput;
  Event: Event;
  EventListRelationFilter: EventListRelationFilter;
  EventOrderByRelationAggregateInput: EventOrderByRelationAggregateInput;
  EventWhereInput: EventWhereInput;
  Float: Scalars['Float'];
  FloatNullableFilter: FloatNullableFilter;
  GenericPlugin: GenericPlugin;
  GenericPluginOrderByWithRelationInput: GenericPluginOrderByWithRelationInput;
  GenericPluginTabConfiguration: GenericPluginTabConfiguration;
  GenericPluginToken: GenericPluginToken;
  GenericPluginTokenListRelationFilter: GenericPluginTokenListRelationFilter;
  GenericPluginTokenOrderByRelationAggregateInput: GenericPluginTokenOrderByRelationAggregateInput;
  GenericPluginTokenWhereInput: GenericPluginTokenWhereInput;
  GenericPluginTokenWhereUniqueInput: GenericPluginTokenWhereUniqueInput;
  GenericPluginWhereInput: GenericPluginWhereInput;
  GitHubBranch: GitHubBranch;
  GitHubEvent: GitHubEvent;
  GitHubRepo: GitHubRepo;
  HerokuApp: HerokuApp;
  ID: Scalars['ID'];
  Incident: Incident;
  Int: Scalars['Int'];
  IntFilter: IntFilter;
  IntNullableFilter: IntNullableFilter;
  Integration: Integration;
  IntegrationAuth: IntegrationAuth;
  IntegrationAuthListRelationFilter: IntegrationAuthListRelationFilter;
  IntegrationAuthOrderByRelationAggregateInput: IntegrationAuthOrderByRelationAggregateInput;
  IntegrationAuthWhereInput: IntegrationAuthWhereInput;
  IntegrationListRelationFilter: IntegrationListRelationFilter;
  IntegrationOrderByRelationAggregateInput: IntegrationOrderByRelationAggregateInput;
  IntegrationWhereInput: IntegrationWhereInput;
  IntegrationWhereUniqueInput: IntegrationWhereUniqueInput;
  InviteCode: InviteCode;
  InviteCodeListRelationFilter: InviteCodeListRelationFilter;
  InviteCodeOrderByRelationAggregateInput: InviteCodeOrderByRelationAggregateInput;
  InviteCodeWhereInput: InviteCodeWhereInput;
  Json: Scalars['Json'];
  JsonNullableFilter: JsonNullableFilter;
  LockdownStatus: LockdownStatus;
  Log: Log;
  LogListRelationFilter: LogListRelationFilter;
  LogOrderByRelationAggregateInput: LogOrderByRelationAggregateInput;
  LogWhereInput: LogWhereInput;
  MagicAuth: MagicAuth;
  MagicAuthListRelationFilter: MagicAuthListRelationFilter;
  MagicAuthOrderByRelationAggregateInput: MagicAuthOrderByRelationAggregateInput;
  MagicAuthWhereInput: MagicAuthWhereInput;
  Member: Member;
  Metric: Metric;
  MongoCollection: MongoCollection;
  Mutation: {};
  NestedBoolFilter: NestedBoolFilter;
  NestedDateTimeFilter: NestedDateTimeFilter;
  NestedDateTimeNullableFilter: NestedDateTimeNullableFilter;
  NestedEnumBuilderFilter: NestedEnumBuilderFilter;
  NestedEnumCreditTypeFilter: NestedEnumCreditTypeFilter;
  NestedEnumDeploymentStatusFilter: NestedEnumDeploymentStatusFilter;
  NestedEnumImageTypeNullableFilter: NestedEnumImageTypeNullableFilter;
  NestedEnumPartnerProjectStatusFilter: NestedEnumPartnerProjectStatusFilter;
  NestedEnumPlanFilter: NestedEnumPlanFilter;
  NestedEnumPluginStatusFilter: NestedEnumPluginStatusFilter;
  NestedEnumPluginTypeFilter: NestedEnumPluginTypeFilter;
  NestedEnumProjectRoleFilter: NestedEnumProjectRoleFilter;
  NestedEnumReferralStatusFilter: NestedEnumReferralStatusFilter;
  NestedEnumRegistrationStatusFilter: NestedEnumRegistrationStatusFilter;
  NestedEnumRestartPolicyTypeFilter: NestedEnumRestartPolicyTypeFilter;
  NestedEnumSessionTypeFilter: NestedEnumSessionTypeFilter;
  NestedEnumSubscriptionStateFilter: NestedEnumSubscriptionStateFilter;
  NestedEnumTeamRoleFilter: NestedEnumTeamRoleFilter;
  NestedEnumVerificationAppealStatusFilter: NestedEnumVerificationAppealStatusFilter;
  NestedFloatNullableFilter: NestedFloatNullableFilter;
  NestedIntFilter: NestedIntFilter;
  NestedIntNullableFilter: NestedIntNullableFilter;
  NestedStringFilter: NestedStringFilter;
  NestedStringNullableFilter: NestedStringNullableFilter;
  PageInfo: PageInfo;
  PaginatedDeploys: PaginatedDeploys;
  PaginatedEvents: PaginatedEvents;
  PaginatedPartnerProjects: PaginatedPartnerProjects;
  PaginatedProjects: PaginatedProjects;
  PaginatedTeams: PaginatedTeams;
  PaginatedUsers: PaginatedUsers;
  PaginatedVerificationAppeals: PaginatedVerificationAppeals;
  PartnerPayout: PartnerPayout;
  PartnerPayoutForProject: PartnerPayoutForProject;
  PartnerPayoutListRelationFilter: PartnerPayoutListRelationFilter;
  PartnerPayoutOrderByRelationAggregateInput: PartnerPayoutOrderByRelationAggregateInput;
  PartnerPayoutWhereInput: PartnerPayoutWhereInput;
  PartnerProject: PartnerProject;
  PartnerProjectListRelationFilter: PartnerProjectListRelationFilter;
  PartnerProjectOrderByRelationAggregateInput: PartnerProjectOrderByRelationAggregateInput;
  PartnerProjectOrderByWithRelationInput: PartnerProjectOrderByWithRelationInput;
  PartnerProjectWhereInput: PartnerProjectWhereInput;
  PaymentMethod: PaymentMethod;
  PaymentMethodCard: PaymentMethodCard;
  PlatformStatus: PlatformStatus;
  Plugin: Plugin;
  PluginContainerUsage: PluginContainerUsage;
  PluginListRelationFilter: PluginListRelationFilter;
  PluginOrderByRelationAggregateInput: PluginOrderByRelationAggregateInput;
  PluginOrderByWithRelationInput: PluginOrderByWithRelationInput;
  PluginUsage: PluginUsage;
  PluginWhereInput: PluginWhereInput;
  PluginWhereUniqueInput: PluginWhereUniqueInput;
  PluginWithMetrics: PluginWithMetrics;
  Preferences: Preferences;
  PreferencesOrderByWithRelationInput: PreferencesOrderByWithRelationInput;
  PreferencesWhereInput: PreferencesWhereInput;
  Project: Project;
  ProjectConnection: ProjectConnection;
  ProjectExecutionTime: ProjectExecutionTime;
  ProjectListRelationFilter: ProjectListRelationFilter;
  ProjectListWhereInput: ProjectListWhereInput;
  ProjectOrderByRelationAggregateInput: ProjectOrderByRelationAggregateInput;
  ProjectOrderByWithRelationInput: ProjectOrderByWithRelationInput;
  ProjectPermission: ProjectPermission;
  ProjectPermissionListRelationFilter: ProjectPermissionListRelationFilter;
  ProjectPermissionOrderByRelationAggregateInput: ProjectPermissionOrderByRelationAggregateInput;
  ProjectPermissionUserIdProjectIdCompoundUniqueInput: ProjectPermissionUserIdProjectIdCompoundUniqueInput;
  ProjectPermissionWhereInput: ProjectPermissionWhereInput;
  ProjectPermissionWhereUniqueInput: ProjectPermissionWhereUniqueInput;
  ProjectResourceAccess: ProjectResourceAccess;
  ProjectTeam: ProjectTeam;
  ProjectToken: ProjectToken;
  ProjectTokenListRelationFilter: ProjectTokenListRelationFilter;
  ProjectTokenOrderByRelationAggregateInput: ProjectTokenOrderByRelationAggregateInput;
  ProjectTokenWhereInput: ProjectTokenWhereInput;
  ProjectUsage: ProjectUsage;
  ProjectWebhook: ProjectWebhook;
  ProjectWebhookListRelationFilter: ProjectWebhookListRelationFilter;
  ProjectWebhookOrderByRelationAggregateInput: ProjectWebhookOrderByRelationAggregateInput;
  ProjectWebhookWhereInput: ProjectWebhookWhereInput;
  ProjectWebhookWhereUniqueInput: ProjectWebhookWhereUniqueInput;
  ProjectWhereInput: ProjectWhereInput;
  ProjectWhereUniqueInput: ProjectWhereUniqueInput;
  ProviderAuth: ProviderAuth;
  ProviderAuthListRelationFilter: ProviderAuthListRelationFilter;
  ProviderAuthOrderByRelationAggregateInput: ProviderAuthOrderByRelationAggregateInput;
  ProviderAuthProviderIdDeletedAtCompoundUniqueInput: ProviderAuthProviderIdDeletedAtCompoundUniqueInput;
  ProviderAuthWhereInput: ProviderAuthWhereInput;
  ProviderAuthWhereUniqueInput: ProviderAuthWhereUniqueInput;
  QRCode: QrCode;
  Query: {};
  RawQueryResponse: RawQueryResponse;
  RecoveryCodes: RecoveryCodes;
  RedisKey: RedisKey;
  ReferralDetails: ReferralDetails;
  ReferralInfo: ReferralInfo;
  ReferralInfoListRelationFilter: ReferralInfoListRelationFilter;
  ReferralInfoOrderByRelationAggregateInput: ReferralInfoOrderByRelationAggregateInput;
  ReferralInfoOrderByWithRelationInput: ReferralInfoOrderByWithRelationInput;
  ReferralInfoWhereInput: ReferralInfoWhereInput;
  RequestedPluginListRelationFilter: RequestedPluginListRelationFilter;
  RequestedPluginOrderByRelationAggregateInput: RequestedPluginOrderByRelationAggregateInput;
  RequestedPluginWhereInput: RequestedPluginWhereInput;
  ResourceAccess: ResourceAccess;
  ResourceOwnerInput: ResourceOwnerInput;
  RiskLevelHistoryListRelationFilter: RiskLevelHistoryListRelationFilter;
  RiskLevelHistoryOrderByRelationAggregateInput: RiskLevelHistoryOrderByRelationAggregateInput;
  RiskLevelHistoryWhereInput: RiskLevelHistoryWhereInput;
  SQLColumnInput: SqlColumnInput;
  SQLRowInput: SqlRowInput;
  SQLTable: SqlTable;
  Service: Service;
  ServiceConnection: ServiceConnection;
  ServiceDomain: ServiceDomain;
  ServiceDomainListRelationFilter: ServiceDomainListRelationFilter;
  ServiceDomainOrderByRelationAggregateInput: ServiceDomainOrderByRelationAggregateInput;
  ServiceDomainWhereInput: ServiceDomainWhereInput;
  ServiceExecutionTime: ServiceExecutionTime;
  ServiceListRelationFilter: ServiceListRelationFilter;
  ServiceListWhereInput: ServiceListWhereInput;
  ServiceNameProjectIdCompoundUniqueInput: ServiceNameProjectIdCompoundUniqueInput;
  ServiceOrderByRelationAggregateInput: ServiceOrderByRelationAggregateInput;
  ServiceOrderByWithRelationInput: ServiceOrderByWithRelationInput;
  ServiceTemplateInput: ServiceTemplateInput;
  ServiceUsage: ServiceUsage;
  ServiceWhereInput: ServiceWhereInput;
  ServiceWhereUniqueInput: ServiceWhereUniqueInput;
  Session: Session;
  SessionListRelationFilter: SessionListRelationFilter;
  SessionOrderByRelationAggregateInput: SessionOrderByRelationAggregateInput;
  SessionWhereInput: SessionWhereInput;
  Stats: Stats;
  String: Scalars['String'];
  StringFilter: StringFilter;
  StringNullableFilter: StringNullableFilter;
  StringNullableListFilter: StringNullableListFilter;
  Subscription: {};
  SubscriptionItem: SubscriptionItem;
  Team: Team;
  TeamListRelationFilter: TeamListRelationFilter;
  TeamMember: TeamMember;
  TeamOrderByRelationAggregateInput: TeamOrderByRelationAggregateInput;
  TeamOrderByWithRelationInput: TeamOrderByWithRelationInput;
  TeamPermission: TeamPermission;
  TeamPermissionListRelationFilter: TeamPermissionListRelationFilter;
  TeamPermissionOrderByRelationAggregateInput: TeamPermissionOrderByRelationAggregateInput;
  TeamPermissionUserIdTeamIdCompoundUniqueInput: TeamPermissionUserIdTeamIdCompoundUniqueInput;
  TeamPermissionWhereInput: TeamPermissionWhereInput;
  TeamPermissionWhereUniqueInput: TeamPermissionWhereUniqueInput;
  TeamWhereInput: TeamWhereInput;
  TeamWhereUniqueInput: TeamWhereUniqueInput;
  Template: Template;
  TemplateListRelationFilter: TemplateListRelationFilter;
  TemplateMetadata: TemplateMetadata;
  TemplateOrderByRelationAggregateInput: TemplateOrderByRelationAggregateInput;
  TemplateOrderByWithRelationInput: TemplateOrderByWithRelationInput;
  TemplateVersion: TemplateVersion;
  TemplateVersionListRelationFilter: TemplateVersionListRelationFilter;
  TemplateVersionOrderByRelationAggregateInput: TemplateVersionOrderByRelationAggregateInput;
  TemplateVersionWhereInput: TemplateVersionWhereInput;
  TemplateWhereInput: TemplateWhereInput;
  TemplateWithVersions: TemplateWithVersions;
  TotalUsage: TotalUsage;
  TwoFactorInfo: TwoFactorInfo;
  TwoFactorInfoOrderByWithRelationInput: TwoFactorInfoOrderByWithRelationInput;
  TwoFactorInfoWhereInput: TwoFactorInfoWhereInput;
  UsageBucket: UsageBucket;
  UsageItem: UsageItem;
  User: User;
  UserCost: UserCost;
  UserListRelationFilter: UserListRelationFilter;
  UserOrderByRelationAggregateInput: UserOrderByRelationAggregateInput;
  UserOrderByWithRelationInput: UserOrderByWithRelationInput;
  UserTokenListRelationFilter: UserTokenListRelationFilter;
  UserTokenOrderByRelationAggregateInput: UserTokenOrderByRelationAggregateInput;
  UserTokenWhereInput: UserTokenWhereInput;
  UserWhereInput: UserWhereInput;
  UserWithClashingIP: UserWithClashingIp;
  Variable: Variable;
  VariableListRelationFilter: VariableListRelationFilter;
  VariableNamePluginIdEnvironmentIdCompoundUniqueInput: VariableNamePluginIdEnvironmentIdCompoundUniqueInput;
  VariableNameServiceIdEnvironmentIdCompoundUniqueInput: VariableNameServiceIdEnvironmentIdCompoundUniqueInput;
  VariableOrderByRelationAggregateInput: VariableOrderByRelationAggregateInput;
  VariableWhereInput: VariableWhereInput;
  VariableWhereUniqueInput: VariableWhereUniqueInput;
  VercelAccount: VercelAccount;
  VercelInfo: VercelInfo;
  VercelProject: VercelProject;
  VerificationAppeal: VerificationAppeal;
  VerificationAppealOrderByWithRelationInput: VerificationAppealOrderByWithRelationInput;
  VerificationAppealWhereInput: VerificationAppealWhereInput;
  VerificationStatus: VerificationStatus;
  WorkflowResult: WorkflowResult;
};

export type AccessRuleResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccessRule'] = ResolversParentTypes['AccessRule']> = {
  disallowed?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AllDomainsResolvers<ContextType = any, ParentType extends ResolversParentTypes['AllDomains'] = ResolversParentTypes['AllDomains']> = {
  customDomains?: Resolver<Array<ResolversTypes['CustomDomain']>, ParentType, ContextType>;
  serviceDomains?: Resolver<Array<ResolversTypes['ServiceDomain']>, ParentType, ContextType>;
  suggestedServiceDomain?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BanReasonHistoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['BanReasonHistory'] = ResolversParentTypes['BanReasonHistory']> = {
  actor?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  banReason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export type CnameCheckResolvers<ContextType = any, ParentType extends ResolversParentTypes['CnameCheck'] = ResolversParentTypes['CnameCheck']> = {
  link?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['CnameCheckStatus'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContainerInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContainerInfo'] = ResolversParentTypes['ContainerInfo']> = {
  internalPorts?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateProjectFromTemplateResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateProjectFromTemplateResult'] = ResolversParentTypes['CreateProjectFromTemplateResult']> = {
  projectId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  workflowId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreditResolvers<ContextType = any, ParentType extends ResolversParentTypes['Credit'] = ResolversParentTypes['Credit']> = {
  amount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  memo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['CreditType'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomDomainResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomDomain'] = ResolversParentTypes['CustomDomain']> = {
  cnameCheck?: Resolver<ResolversTypes['CnameCheck'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  domain?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  environmentId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  serviceId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Customer'] = ResolversParentTypes['Customer']> = {
  appliedCredits?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  billingEmail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  creditBalance?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  credits?: Resolver<Array<ResolversTypes['Credit']>, ParentType, ContextType, Partial<CustomerCreditsArgs>>;
  defaultPaymentMethod?: Resolver<Maybe<ResolversTypes['PaymentMethod']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  invoices?: Resolver<Array<ResolversTypes['CustomerInvoice']>, ParentType, ContextType>;
  isUsageSubscriber?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  remainingUsageCreditBalance?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  state?: Resolver<ResolversTypes['SubscriptionState'], ParentType, ContextType>;
  stripeCustomerId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stripePaymentMethodId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subscriptions?: Resolver<Array<ResolversTypes['CustomerSubscription']>, ParentType, ContextType>;
  teamId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  usageLimit?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerInvoiceResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomerInvoice'] = ResolversParentTypes['CustomerInvoice']> = {
  amountPaid?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  hostedURL?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  invoiceId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  items?: Resolver<Array<ResolversTypes['SubscriptionItem']>, ParentType, ContextType>;
  paymentIntentStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pdfURL?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  periodEnd?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  periodStart?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subscriptionId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerSubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomerSubscription'] = ResolversParentTypes['CustomerSubscription']> = {
  cancelAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  couponId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  items?: Resolver<Array<ResolversTypes['SubscriptionItem']>, ParentType, ContextType>;
  latestInvoiceId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nextInvoiceCurrentTotal?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  nextInvoiceDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type DeploymentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Deployment'] = ResolversParentTypes['Deployment']> = {
  buildLogs?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  canRollback?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  containerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  containerInfo?: Resolver<ResolversTypes['ContainerInfo'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  creator?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  creatorId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deployLogs?: Resolver<ResolversTypes['String'], ParentType, ContextType, Partial<DeploymentDeployLogsArgs>>;
  environment?: Resolver<ResolversTypes['Environment'], ParentType, ContextType>;
  environmentId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>;
  project?: Resolver<ResolversTypes['Project'], ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  serviceId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  snapshotId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  staticUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['DeploymentStatus'], ParentType, ContextType>;
  suggestAddServiceDomain?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeploymentByDomainResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeploymentByDomain'] = ResolversParentTypes['DeploymentByDomain']> = {
  activeDeployment?: Resolver<Maybe<ResolversTypes['Deployment']>, ParentType, ContextType>;
  latestDeployment?: Resolver<Maybe<ResolversTypes['Deployment']>, ParentType, ContextType>;
  projectId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeploymentConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeploymentConnection'] = ResolversParentTypes['DeploymentConnection']> = {
  nodes?: Resolver<Array<ResolversTypes['Deployment']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeploymentSnapshotResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeploymentSnapshot'] = ResolversParentTypes['DeploymentSnapshot']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeploymentTriggerResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeploymentTrigger'] = ResolversParentTypes['DeploymentTrigger']> = {
  baseEnvironmentOverride?: Resolver<Maybe<ResolversTypes['Environment']>, ParentType, ContextType>;
  baseEnvironmentOverrideId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  branch?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  environmentId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  provider?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  repository?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  serviceId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeploymentUsageResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeploymentUsage'] = ResolversParentTypes['DeploymentUsage']> = {
  currentUsage?: Resolver<ResolversTypes['UsageItem'], ParentType, ContextType>;
  deploymentId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  endDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  environmentId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  estimatedUsage?: Resolver<ResolversTypes['UsageItem'], ParentType, ContextType>;
  serviceId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  startDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeploymentWithMetricsResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeploymentWithMetrics'] = ResolversParentTypes['DeploymentWithMetrics']> = {
  deployment?: Resolver<ResolversTypes['Deployment'], ParentType, ContextType>;
  metrics?: Resolver<Array<ResolversTypes['Metric']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DomainAvailableResolvers<ContextType = any, ParentType extends ResolversParentTypes['DomainAvailable'] = ResolversParentTypes['DomainAvailable']> = {
  available?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EmailTemplateResolvers<ContextType = any, ParentType extends ResolversParentTypes['EmailTemplate'] = ResolversParentTypes['EmailTemplate']> = {
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  templateId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EnvironmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Environment'] = ResolversParentTypes['Environment']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customDomains?: Resolver<Array<ResolversTypes['CustomDomain']>, ParentType, ContextType, Partial<EnvironmentCustomDomainsArgs>>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deploymentTriggers?: Resolver<Array<ResolversTypes['DeploymentTrigger']>, ParentType, ContextType, Partial<EnvironmentDeploymentTriggersArgs>>;
  deployments?: Resolver<Array<ResolversTypes['Deployment']>, ParentType, ContextType, Partial<EnvironmentDeploymentsArgs>>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isEphemeral?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  variables?: Resolver<Array<ResolversTypes['Variable']>, ParentType, ContextType, Partial<EnvironmentVariablesArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EnvironmentConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['EnvironmentConnection'] = ResolversParentTypes['EnvironmentConnection']> = {
  nodes?: Resolver<Array<ResolversTypes['Environment']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EnvironmentMetricsResolvers<ContextType = any, ParentType extends ResolversParentTypes['EnvironmentMetrics'] = ResolversParentTypes['EnvironmentMetrics']> = {
  deployments?: Resolver<Array<ResolversTypes['DeploymentWithMetrics']>, ParentType, ContextType>;
  plugins?: Resolver<Array<ResolversTypes['PluginWithMetrics']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EventResolvers<ContextType = any, ParentType extends ResolversParentTypes['Event'] = ResolversParentTypes['Event']> = {
  action?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  environment?: Resolver<Maybe<ResolversTypes['Environment']>, ParentType, ContextType>;
  environmentId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  object?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  payload?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>;
  project?: Resolver<ResolversTypes['Project'], ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GenericPluginResolvers<ContextType = any, ParentType extends ResolversParentTypes['GenericPlugin'] = ResolversParentTypes['GenericPlugin']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  genericPluginTokens?: Resolver<Array<ResolversTypes['GenericPluginToken']>, ParentType, ContextType, Partial<GenericPluginGenericPluginTokensArgs>>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pluginId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tabConfig?: Resolver<Array<ResolversTypes['GenericPluginTabConfiguration']>, ParentType, ContextType, RequireFields<GenericPluginTabConfigArgs, 'environmentId'>>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GenericPluginTabConfigurationResolvers<ContextType = any, ParentType extends ResolversParentTypes['GenericPluginTabConfiguration'] = ResolversParentTypes['GenericPluginTabConfiguration']> = {
  height?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  resizable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GenericPluginTokenResolvers<ContextType = any, ParentType extends ResolversParentTypes['GenericPluginToken'] = ResolversParentTypes['GenericPluginToken']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  displayToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GitHubBranchResolvers<ContextType = any, ParentType extends ResolversParentTypes['GitHubBranch'] = ResolversParentTypes['GitHubBranch']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GitHubEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['GitHubEvent'] = ResolversParentTypes['GitHubEvent']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GitHubRepoResolvers<ContextType = any, ParentType extends ResolversParentTypes['GitHubRepo'] = ResolversParentTypes['GitHubRepo']> = {
  defaultBranch?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fullName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  installationId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isPrivate?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HerokuAppResolvers<ContextType = any, ParentType extends ResolversParentTypes['HerokuApp'] = ResolversParentTypes['HerokuApp']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IncidentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Incident'] = ResolversParentTypes['Incident']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['IncidentStatus'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IntegrationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Integration'] = ResolversParentTypes['Integration']> = {
  config?: Resolver<ResolversTypes['Json'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IntegrationAuthResolvers<ContextType = any, ParentType extends ResolversParentTypes['IntegrationAuth'] = ResolversParentTypes['IntegrationAuth']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  integrations?: Resolver<Array<ResolversTypes['Integration']>, ParentType, ContextType, Partial<IntegrationAuthIntegrationsArgs>>;
  provider?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  providerId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InviteCodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['InviteCode'] = ResolversParentTypes['InviteCode']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  project?: Resolver<ResolversTypes['Project'], ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['ProjectRole'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Json'], any> {
  name: 'Json';
}

export type LockdownStatusResolvers<ContextType = any, ParentType extends ResolversParentTypes['LockdownStatus'] = ResolversParentTypes['LockdownStatus']> = {
  allProvisionsDisabledMsg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  anonProvisionsDisabledMsg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  signupsDisabledMsg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LogResolvers<ContextType = any, ParentType extends ResolversParentTypes['Log'] = ResolversParentTypes['Log']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MagicAuthResolvers<ContextType = any, ParentType extends ResolversParentTypes['MagicAuth'] = ResolversParentTypes['MagicAuth']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberResolvers<ContextType = any, ParentType extends ResolversParentTypes['Member'] = ResolversParentTypes['Member']> = {
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<ResolversTypes['ProjectRole'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MetricResolvers<ContextType = any, ParentType extends ResolversParentTypes['Metric'] = ResolversParentTypes['Metric']> = {
  containerId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  cpuPercentVCPU?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  memoryLimitBytes?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  memoryUsageBytes?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  networkRxBytes?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  networkTxBytes?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MongoCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MongoCollection'] = ResolversParentTypes['MongoCollection']> = {
  data?: Resolver<ResolversTypes['Json'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  accountEmailChange?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationAccountEmailChangeArgs, 'nonce'>>;
  addStarterToProject?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationAddStarterToProjectArgs, 'projectId' | 'services'>>;
  adminDeleteUser?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationAdminDeleteUserArgs, 'userId'>>;
  agreeFairUse?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationAgreeFairUseArgs, 'agree'>>;
  alertMissingCommand?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationAlertMissingCommandArgs, 'page' | 'text'>>;
  applyCredit?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationApplyCreditArgs, 'amount' | 'customerId'>>;
  attachPaymentMethod?: Resolver<ResolversTypes['Json'], ParentType, ContextType, RequireFields<MutationAttachPaymentMethodArgs, 'customerId' | 'paymentMethodId'>>;
  authLoginSession?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationAuthLoginSessionArgs, 'code'>>;
  banUser?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationBanUserArgs, 'reason' | 'userId'>>;
  cancelDeployment?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationCancelDeploymentArgs, 'deploymentId' | 'projectId'>>;
  cancelLoginSession?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationCancelLoginSessionArgs, 'code'>>;
  changeTeamPermission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationChangeTeamPermissionArgs, 'role' | 'teamId' | 'userId'>>;
  changeUserRole?: Resolver<ResolversTypes['Member'], ParentType, ContextType, RequireFields<MutationChangeUserRoleArgs, 'projectId' | 'role' | 'userId'>>;
  claimProject?: Resolver<ResolversTypes['Project'], ParentType, ContextType, RequireFields<MutationClaimProjectArgs, 'projectId'>>;
  confirmOwnershipTransfer?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationConfirmOwnershipTransferArgs, 'ownershipTransferId' | 'projectId'>>;
  connectServiceToRepo?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationConnectServiceToRepoArgs, 'branch' | 'projectId' | 'serviceId' | 'source'>>;
  consumeLoginSession?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationConsumeLoginSessionArgs, 'code'>>;
  createCustomDomain?: Resolver<ResolversTypes['CustomDomain'], ParentType, ContextType, RequireFields<MutationCreateCustomDomainArgs, 'domain' | 'environmentId' | 'projectId' | 'serviceId'>>;
  createCustomerBillingPortal?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationCreateCustomerBillingPortalArgs, 'customerId' | 'redirectUrl'>>;
  createDeploymentTrigger?: Resolver<ResolversTypes['DeploymentTrigger'], ParentType, ContextType, RequireFields<MutationCreateDeploymentTriggerArgs, 'branch' | 'environmentId' | 'projectId' | 'provider' | 'repository'>>;
  createEnvironment?: Resolver<ResolversTypes['Environment'], ParentType, ContextType, RequireFields<MutationCreateEnvironmentArgs, 'name' | 'projectId'>>;
  createEphemeralEnvironment?: Resolver<ResolversTypes['Environment'], ParentType, ContextType, RequireFields<MutationCreateEphemeralEnvironmentArgs, 'name' | 'projectId'>>;
  createGenericPlugin?: Resolver<ResolversTypes['Plugin'], ParentType, ContextType, RequireFields<MutationCreateGenericPluginArgs, 'projectId' | 'url'>>;
  createGenericPluginToken?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationCreateGenericPluginTokenArgs, 'genericPluginId' | 'projectId'>>;
  createIntegration?: Resolver<ResolversTypes['Integration'], ParentType, ContextType, RequireFields<MutationCreateIntegrationArgs, 'config' | 'name' | 'projectId'>>;
  createInviteCodeForTeam?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationCreateInviteCodeForTeamArgs, 'role' | 'teamId'>>;
  createLoginSession?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createPartnerProject?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationCreatePartnerProjectArgs, 'gitUrl' | 'kickbackPercent' | 'name' | 'partnerId'>>;
  createPlugin?: Resolver<ResolversTypes['Plugin'], ParentType, ContextType, RequireFields<MutationCreatePluginArgs, 'name' | 'projectId'>>;
  createProject?: Resolver<ResolversTypes['Project'], ParentType, ContextType, Partial<MutationCreateProjectArgs>>;
  createProjectFromRepo?: Resolver<ResolversTypes['Project'], ParentType, ContextType, RequireFields<MutationCreateProjectFromRepoArgs, 'branch' | 'repo'>>;
  createProjectFromTemplate?: Resolver<ResolversTypes['CreateProjectFromTemplateResult'], ParentType, ContextType, RequireFields<MutationCreateProjectFromTemplateArgs, 'services'>>;
  createProjectToken?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationCreateProjectTokenArgs, 'environmentId' | 'name' | 'projectId'>>;
  createSQLTable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationCreateSqlTableArgs, 'columns' | 'databaseType' | 'environmentId' | 'name' | 'pluginId' | 'projectId'>>;
  createService?: Resolver<ResolversTypes['Service'], ParentType, ContextType, RequireFields<MutationCreateServiceArgs, 'projectId' | 'source'>>;
  createSubscriptionForCustomer?: Resolver<ResolversTypes['Json'], ParentType, ContextType, RequireFields<MutationCreateSubscriptionForCustomerArgs, 'customerId'>>;
  createTeam?: Resolver<ResolversTypes['Team'], ParentType, ContextType, RequireFields<MutationCreateTeamArgs, 'name'>>;
  createTemplate?: Resolver<ResolversTypes['Template'], ParentType, ContextType, RequireFields<MutationCreateTemplateArgs, 'configuration'>>;
  createVerificationAppeal?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationCreateVerificationAppealArgs, 'repo' | 'userMessage'>>;
  createWebhook?: Resolver<ResolversTypes['ProjectWebhook'], ParentType, ContextType, RequireFields<MutationCreateWebhookArgs, 'projectId' | 'url'>>;
  customerPurchaseCredits?: Resolver<ResolversTypes['Json'], ParentType, ContextType, RequireFields<MutationCustomerPurchaseCreditsArgs, 'customerId' | 'dollarAmount'>>;
  deleteCustomDomain?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteCustomDomainArgs, 'customDomainId' | 'environmentId' | 'projectId'>>;
  deleteEnvironment?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteEnvironmentArgs, 'environmentId' | 'projectId'>>;
  deleteGenericPluginToken?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteGenericPluginTokenArgs, 'genericPluginTokenId' | 'projectId'>>;
  deletePlugin?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeletePluginArgs, 'id' | 'projectId'>>;
  deleteProject?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteProjectArgs, 'projectId'>>;
  deleteProjectToken?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteProjectTokenArgs, 'projectId' | 'tokenId'>>;
  deleteSQLRows?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteSqlRowsArgs, 'columnName' | 'databaseType' | 'environmentId' | 'pluginId' | 'projectId' | 'rows' | 'tableName'>>;
  deleteSQLTable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteSqlTableArgs, 'databaseType' | 'environmentId' | 'name' | 'pluginId' | 'projectId'>>;
  deleteService?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteServiceArgs, 'projectId' | 'serviceId'>>;
  deleteSession?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteSessionArgs, 'sessionId'>>;
  deleteTeam?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteTeamArgs, 'teamId'>>;
  deleteTemplate?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteTemplateArgs, 'id'>>;
  deleteUser?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  deleteVariable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteVariableArgs, 'environmentId' | 'name' | 'projectId'>>;
  deleteWebhook?: Resolver<ResolversTypes['ProjectWebhook'], ParentType, ContextType, RequireFields<MutationDeleteWebhookArgs, 'id' | 'projectId'>>;
  deployEnvironmentTriggers?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeployEnvironmentTriggersArgs, 'environmentId' | 'projectId' | 'serviceId'>>;
  disableAllProvisions?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDisableAllProvisionsArgs, 'reason'>>;
  disableAnonProvisions?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDisableAnonProvisionsArgs, 'reason'>>;
  disableSignups?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDisableSignupsArgs, 'reason'>>;
  disconnectServiceFromSource?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDisconnectServiceFromSourceArgs, 'projectId' | 'serviceId'>>;
  dummyDataSQL?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDummyDataSqlArgs, 'databaseType' | 'environmentId' | 'pluginId' | 'projectId'>>;
  enableAllProvisions?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  enableAnonProvisions?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  enableSignups?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  ensureCustomerExists?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationEnsureCustomerExistsArgs, 'userId'>>;
  generateAuthenticatorAppSecret?: Resolver<ResolversTypes['QRCode'], ParentType, ContextType>;
  generateRecoveryCodes?: Resolver<ResolversTypes['RecoveryCodes'], ParentType, ContextType>;
  generateTemplateForProject?: Resolver<ResolversTypes['Template'], ParentType, ContextType, RequireFields<MutationGenerateTemplateForProjectArgs, 'projectId'>>;
  getDeploymentSnapshotCodeUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationGetDeploymentSnapshotCodeUrlArgs, 'deploymentId' | 'projectId'>>;
  handleVerificationAppeal?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationHandleVerificationAppealArgs, 'approved' | 'id'>>;
  importVariablesFromHeroku?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationImportVariablesFromHerokuArgs, 'environmentId' | 'herokuAppId' | 'projectId' | 'serviceId'>>;
  initiateEmailChange?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationInitiateEmailChangeArgs, 'newEmail'>>;
  initiateOwnershipTransfer?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationInitiateOwnershipTransferArgs, 'memberId' | 'projectId'>>;
  insertSQLColumn?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationInsertSqlColumnArgs, 'column' | 'databaseType' | 'environmentId' | 'pluginId' | 'projectId' | 'tableName'>>;
  insertSQLRow?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationInsertSqlRowArgs, 'columns' | 'databaseType' | 'environmentId' | 'pluginId' | 'projectId' | 'tableName'>>;
  inviteUserToProject?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationInviteUserToProjectArgs, 'email' | 'link' | 'projectId'>>;
  inviteUserToTeam?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationInviteUserToTeamArgs, 'email' | 'link' | 'teamId'>>;
  joinWithInviteCode?: Resolver<ResolversTypes['Project'], ParentType, ContextType, RequireFields<MutationJoinWithInviteCodeArgs, 'code'>>;
  leaveProject?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationLeaveProjectArgs, 'projectId'>>;
  leaveTeam?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationLeaveTeamArgs, 'teamId'>>;
  logout?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  mongoDeleteCollection?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationMongoDeleteCollectionArgs, 'database' | 'environmentId' | 'name' | 'pluginId' | 'projectId'>>;
  mongoDeleteDocument?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationMongoDeleteDocumentArgs, 'database' | 'environmentId' | 'id' | 'name' | 'pluginId' | 'projectId'>>;
  mongoDummyData?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationMongoDummyDataArgs, 'database' | 'environmentId' | 'pluginId' | 'projectId'>>;
  mongoInsertDocument?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationMongoInsertDocumentArgs, 'data' | 'database' | 'environmentId' | 'name' | 'pluginId' | 'projectId'>>;
  mongoUpdateDocument?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationMongoUpdateDocumentArgs, 'data' | 'database' | 'environmentId' | 'id' | 'name' | 'pluginId' | 'projectId'>>;
  redisDeleteKey?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationRedisDeleteKeyArgs, 'environmentId' | 'key' | 'pluginId' | 'projectId'>>;
  redisDummyData?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationRedisDummyDataArgs, 'environmentId' | 'pluginId' | 'projectId'>>;
  redisHashDelete?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationRedisHashDeleteArgs, 'environmentId' | 'key' | 'pluginId' | 'projectId' | 'values'>>;
  redisHashSet?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationRedisHashSetArgs, 'environmentId' | 'key' | 'pluginId' | 'projectId' | 'values'>>;
  redisPopList?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationRedisPopListArgs, 'environmentId' | 'key' | 'pluginId' | 'projectId' | 'side'>>;
  redisPushList?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationRedisPushListArgs, 'environmentId' | 'key' | 'pluginId' | 'projectId' | 'side' | 'values'>>;
  redisSetAdd?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationRedisSetAddArgs, 'environmentId' | 'key' | 'pluginId' | 'projectId' | 'values'>>;
  redisSetExpire?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationRedisSetExpireArgs, 'environmentId' | 'key' | 'pluginId' | 'projectId' | 'ttl'>>;
  redisSetListIndex?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationRedisSetListIndexArgs, 'environmentId' | 'index' | 'key' | 'pluginId' | 'projectId' | 'value'>>;
  redisSetRemove?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationRedisSetRemoveArgs, 'environmentId' | 'key' | 'pluginId' | 'projectId' | 'values'>>;
  redisStringSet?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationRedisStringSetArgs, 'environmentId' | 'key' | 'pluginId' | 'projectId' | 'value'>>;
  removeDeployment?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationRemoveDeploymentArgs, 'deploymentId' | 'projectId'>>;
  removeDeploymentTrigger?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationRemoveDeploymentTriggerArgs, 'projectId' | 'triggerId'>>;
  removeIntegration?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationRemoveIntegrationArgs, 'integrationId' | 'projectId'>>;
  removeProviderAuth?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationRemoveProviderAuthArgs, 'authId'>>;
  removeTwoFactorAuthentication?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  removeUserFromProject?: Resolver<Array<ResolversTypes['Member']>, ParentType, ContextType, RequireFields<MutationRemoveUserFromProjectArgs, 'projectId' | 'userId'>>;
  removeUserFromTeam?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationRemoveUserFromTeamArgs, 'teamId' | 'userId'>>;
  resetPluginCredentialsForEnvironment?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationResetPluginCredentialsForEnvironmentArgs, 'environmentId' | 'pluginId' | 'projectId'>>;
  resetPluginForEnvironment?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationResetPluginForEnvironmentArgs, 'environmentId' | 'pluginId' | 'projectId'>>;
  resetTwoFactorInfoForUser?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationResetTwoFactorInfoForUserArgs, 'userId'>>;
  restartDeployment?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationRestartDeploymentArgs, 'deploymentId' | 'projectId'>>;
  retryInvoiceForSubscription?: Resolver<ResolversTypes['Json'], ParentType, ContextType, RequireFields<MutationRetryInvoiceForSubscriptionArgs, 'customerId' | 'invoiceId' | 'paymentMethodId'>>;
  rollbackDeployment?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationRollbackDeploymentArgs, 'deploymentId' | 'projectId'>>;
  runRawQuery?: Resolver<ResolversTypes['RawQueryResponse'], ParentType, ContextType, RequireFields<MutationRunRawQueryArgs, 'databaseType' | 'environmentId' | 'pluginId' | 'projectId' | 'query'>>;
  sendChangelogEmail?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationSendChangelogEmailArgs, 'changelogId' | 'changelogSlug' | 'changelogTitle' | 'isTestEmail'>>;
  sendCustomEmail?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationSendCustomEmailArgs, 'includeBannedUsers' | 'isTestEmail' | 'onlyDevPlan' | 'onlyEarlyAdopter' | 'templateId'>>;
  sendTelemetry?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationSendTelemetryArgs, 'command' | 'error' | 'stacktrace'>>;
  serviceDomainCreate?: Resolver<ResolversTypes['ServiceDomain'], ParentType, ContextType, RequireFields<MutationServiceDomainCreateArgs, 'environmentId' | 'projectId' | 'serviceId'>>;
  serviceDomainDelete?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationServiceDomainDeleteArgs, 'environmentId' | 'id' | 'projectId'>>;
  serviceRemoveUpstreamUrl?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationServiceRemoveUpstreamUrlArgs, 'projectId' | 'serviceId'>>;
  setBaseEnvironmentOverride?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationSetBaseEnvironmentOverrideArgs, 'projectId' | 'triggerId'>>;
  setDomainForEnvironment?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationSetDomainForEnvironmentArgs, 'domain' | 'environmentId' | 'projectId' | 'serviceId'>>;
  setupTwoFactorAuth?: Resolver<ResolversTypes['RecoveryCodes'], ParentType, ContextType, RequireFields<MutationSetupTwoFactorAuthArgs, 'token'>>;
  startPlugin?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationStartPluginArgs, 'environmentId' | 'pluginId'>>;
  submitPartnerProject?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationSubmitPartnerProjectArgs, 'gitUrl' | 'name'>>;
  trackBatchedEvents?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationTrackBatchedEventsArgs, 'events'>>;
  trackEvent?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationTrackEventArgs, 'eventName'>>;
  transferProjectToTeam?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationTransferProjectToTeamArgs, 'projectId' | 'teamId'>>;
  transferProjectToUser?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationTransferProjectToUserArgs, 'projectId'>>;
  unbanUser?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationUnbanUserArgs, 'userId'>>;
  updateBillingEmail?: Resolver<ResolversTypes['Customer'], ParentType, ContextType, RequireFields<MutationUpdateBillingEmailArgs, 'billingEmail' | 'customerId'>>;
  updateDeploymentTrigger?: Resolver<ResolversTypes['DeploymentTrigger'], ParentType, ContextType, RequireFields<MutationUpdateDeploymentTriggerArgs, 'projectId' | 'triggerId'>>;
  updateEnvsForPlugin?: Resolver<ResolversTypes['Json'], ParentType, ContextType, RequireFields<MutationUpdateEnvsForPluginArgs, 'environmentId' | 'envs' | 'pluginId' | 'projectId'>>;
  updateIntegration?: Resolver<ResolversTypes['Integration'], ParentType, ContextType, RequireFields<MutationUpdateIntegrationArgs, 'config' | 'integrationId' | 'name' | 'projectId'>>;
  updatePartnerProjectStatus?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationUpdatePartnerProjectStatusArgs, 'id' | 'status'>>;
  updateProject?: Resolver<ResolversTypes['Project'], ParentType, ContextType, RequireFields<MutationUpdateProjectArgs, 'projectId'>>;
  updateProjectLastActive?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType, RequireFields<MutationUpdateProjectLastActiveArgs, 'projectId'>>;
  updateReferralCode?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationUpdateReferralCodeArgs, 'code'>>;
  updateSQLRow?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationUpdateSqlRowArgs, 'data' | 'databaseType' | 'environmentId' | 'pKey' | 'pKeyValue' | 'pluginId' | 'projectId' | 'tableName'>>;
  updateService?: Resolver<ResolversTypes['Service'], ParentType, ContextType, RequireFields<MutationUpdateServiceArgs, 'projectId' | 'serviceId'>>;
  updateStarter?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationUpdateStarterArgs, 'projectId'>>;
  updateTeam?: Resolver<ResolversTypes['Team'], ParentType, ContextType, RequireFields<MutationUpdateTeamArgs, 'name' | 'teamId'>>;
  updateTemplateCode?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationUpdateTemplateCodeArgs, 'code' | 'id'>>;
  updateTemplateConfiguration?: Resolver<ResolversTypes['Template'], ParentType, ContextType, RequireFields<MutationUpdateTemplateConfigurationArgs, 'configuration' | 'id'>>;
  updateUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, Partial<MutationUpdateUserArgs>>;
  updateUserPreferences?: Resolver<ResolversTypes['Preferences'], ParentType, ContextType, Partial<MutationUpdateUserPreferencesArgs>>;
  updateUserRiskLevel?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationUpdateUserRiskLevelArgs, 'userId'>>;
  updateUserTerms?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  updateWebhook?: Resolver<ResolversTypes['ProjectWebhook'], ParentType, ContextType, RequireFields<MutationUpdateWebhookArgs, 'id' | 'projectId' | 'url'>>;
  upgradeFromEarlyAdopterPlan?: Resolver<ResolversTypes['Json'], ParentType, ContextType, RequireFields<MutationUpgradeFromEarlyAdopterPlanArgs, 'customerId'>>;
  upsertVariable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationUpsertVariableArgs, 'environmentId' | 'name' | 'projectId' | 'value'>>;
  upsertVariablesFromObject?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationUpsertVariablesFromObjectArgs, 'environmentId' | 'projectId' | 'variables'>>;
  useTeamInviteCode?: Resolver<ResolversTypes['Team'], ParentType, ContextType, RequireFields<MutationUseTeamInviteCodeArgs, 'code'>>;
  userBetaLeave?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  userDisconnectDiscord?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  userRemoveFlags?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationUserRemoveFlagsArgs, 'flags' | 'userId'>>;
  userSetFlags?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationUserSetFlagsArgs, 'flags' | 'userId'>>;
  validateRecoveryCode?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationValidateRecoveryCodeArgs, 'code'>>;
  validateTwoFactorLogin?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationValidateTwoFactorLoginArgs, 'token' | 'twoFactorLinkingKey'>>;
  validateTwoFactorToken?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationValidateTwoFactorTokenArgs, 'token'>>;
  variablesSetFromObject?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationVariablesSetFromObjectArgs, 'environmentId' | 'projectId' | 'variables'>>;
  waitlistUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, Partial<MutationWaitlistUserArgs>>;
};

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  endCursor?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginatedDeploysResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaginatedDeploys'] = ResolversParentTypes['PaginatedDeploys']> = {
  itemsPerPage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  page?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  result?: Resolver<Array<ResolversTypes['Deployment']>, ParentType, ContextType>;
  totalPages?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginatedEventsResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaginatedEvents'] = ResolversParentTypes['PaginatedEvents']> = {
  itemsPerPage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  page?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  result?: Resolver<Array<ResolversTypes['Event']>, ParentType, ContextType>;
  totalPages?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginatedPartnerProjectsResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaginatedPartnerProjects'] = ResolversParentTypes['PaginatedPartnerProjects']> = {
  itemsPerPage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  page?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  result?: Resolver<Array<ResolversTypes['PartnerProject']>, ParentType, ContextType>;
  totalPages?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginatedProjectsResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaginatedProjects'] = ResolversParentTypes['PaginatedProjects']> = {
  itemsPerPage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  page?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  result?: Resolver<Array<ResolversTypes['Project']>, ParentType, ContextType>;
  totalPages?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginatedTeamsResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaginatedTeams'] = ResolversParentTypes['PaginatedTeams']> = {
  itemsPerPage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  page?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  result?: Resolver<Array<ResolversTypes['Team']>, ParentType, ContextType>;
  totalPages?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginatedUsersResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaginatedUsers'] = ResolversParentTypes['PaginatedUsers']> = {
  itemsPerPage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  page?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  result?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  totalPages?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginatedVerificationAppealsResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaginatedVerificationAppeals'] = ResolversParentTypes['PaginatedVerificationAppeals']> = {
  itemsPerPage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  page?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  result?: Resolver<Array<ResolversTypes['VerificationAppeal']>, ParentType, ContextType>;
  totalPages?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PartnerPayoutResolvers<ContextType = any, ParentType extends ResolversParentTypes['PartnerPayout'] = ResolversParentTypes['PartnerPayout']> = {
  partnerProjects?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalCreditsEarned?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  totalEstimatedCreditsEarned?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  totalProjectsActiveThisMonth?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PartnerPayoutForProjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['PartnerPayoutForProject'] = ResolversParentTypes['PartnerPayoutForProject']> = {
  contributingProjects?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  estimatedMonthlyCreditsEarned?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  projectsActiveThisMonth?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalCreditsEarned?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PartnerProjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['PartnerProject'] = ResolversParentTypes['PartnerProject']> = {
  activeProjects?: Resolver<Array<ResolversTypes['Project']>, ParentType, ContextType, Partial<PartnerProjectActiveProjectsArgs>>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  gitUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  kickbackPercent?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['PartnerProjectStatus'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentMethodResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaymentMethod'] = ResolversParentTypes['PaymentMethod']> = {
  card?: Resolver<Maybe<ResolversTypes['PaymentMethodCard']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentMethodCardResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaymentMethodCard'] = ResolversParentTypes['PaymentMethodCard']> = {
  brand?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  last4?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlatformStatusResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlatformStatus'] = ResolversParentTypes['PlatformStatus']> = {
  incident?: Resolver<Maybe<ResolversTypes['Incident']>, ParentType, ContextType>;
  isStable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PluginResolvers<ContextType = any, ParentType extends ResolversParentTypes['Plugin'] = ResolversParentTypes['Plugin']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  logsEnabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['PluginType'], ParentType, ContextType>;
  project?: Resolver<ResolversTypes['Project'], ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['PluginStatus'], ParentType, ContextType>;
  variables?: Resolver<Array<ResolversTypes['Variable']>, ParentType, ContextType, Partial<PluginVariablesArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PluginContainerUsageResolvers<ContextType = any, ParentType extends ResolversParentTypes['PluginContainerUsage'] = ResolversParentTypes['PluginContainerUsage']> = {
  containerId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  currentUsage?: Resolver<ResolversTypes['UsageItem'], ParentType, ContextType>;
  endDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  environmentId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  estimatedUsage?: Resolver<ResolversTypes['UsageItem'], ParentType, ContextType>;
  pluginId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  startDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PluginUsageResolvers<ContextType = any, ParentType extends ResolversParentTypes['PluginUsage'] = ResolversParentTypes['PluginUsage']> = {
  containers?: Resolver<Array<ResolversTypes['PluginContainerUsage']>, ParentType, ContextType>;
  plugin?: Resolver<ResolversTypes['Plugin'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PluginWithMetricsResolvers<ContextType = any, ParentType extends ResolversParentTypes['PluginWithMetrics'] = ResolversParentTypes['PluginWithMetrics']> = {
  metrics?: Resolver<Array<ResolversTypes['Metric']>, ParentType, ContextType>;
  plugin?: Resolver<ResolversTypes['Plugin'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PreferencesResolvers<ContextType = any, ParentType extends ResolversParentTypes['Preferences'] = ResolversParentTypes['Preferences']> = {
  buildFailedEmail?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  changelogEmail?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  deployCrashedEmail?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  usageEmail?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['Project'] = ResolversParentTypes['Project']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deploymentTriggers?: Resolver<Array<ResolversTypes['DeploymentTrigger']>, ParentType, ContextType, Partial<ProjectDeploymentTriggersArgs>>;
  deployments?: Resolver<Array<ResolversTypes['Deployment']>, ParentType, ContextType, Partial<ProjectDeploymentsArgs>>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  environments?: Resolver<Array<ResolversTypes['Environment']>, ParentType, ContextType, Partial<ProjectEnvironmentsArgs>>;
  expiredAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isMetrofied?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isPublic?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isTempProject?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isUpdatable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  members?: Resolver<Array<ResolversTypes['Member']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  plugins?: Resolver<Array<ResolversTypes['Plugin']>, ParentType, ContextType, Partial<ProjectPluginsArgs>>;
  prDeploys?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  projectPermissions?: Resolver<Array<ResolversTypes['ProjectPermission']>, ParentType, ContextType, Partial<ProjectProjectPermissionsArgs>>;
  services?: Resolver<Array<ResolversTypes['Service']>, ParentType, ContextType, Partial<ProjectServicesArgs>>;
  team?: Resolver<Maybe<ResolversTypes['ProjectTeam']>, ParentType, ContextType>;
  teamId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  upstreamUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  webhooks?: Resolver<Array<ResolversTypes['ProjectWebhook']>, ParentType, ContextType, Partial<ProjectWebhooksArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectConnection'] = ResolversParentTypes['ProjectConnection']> = {
  nodes?: Resolver<Array<ResolversTypes['Project']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectExecutionTimeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectExecutionTime'] = ResolversParentTypes['ProjectExecutionTime']> = {
  services?: Resolver<Array<ResolversTypes['ServiceExecutionTime']>, ParentType, ContextType>;
  totalMinutes?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectPermissionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectPermission'] = ResolversParentTypes['ProjectPermission']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  project?: Resolver<ResolversTypes['Project'], ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['ProjectRole'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectResourceAccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectResourceAccess'] = ResolversParentTypes['ProjectResourceAccess']> = {
  customDomain?: Resolver<ResolversTypes['AccessRule'], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes['AccessRule'], ParentType, ContextType>;
  environment?: Resolver<ResolversTypes['AccessRule'], ParentType, ContextType>;
  plugin?: Resolver<ResolversTypes['AccessRule'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectTeamResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectTeam'] = ResolversParentTypes['ProjectTeam']> = {
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectTokenResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectToken'] = ResolversParentTypes['ProjectToken']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  displayToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  environment?: Resolver<ResolversTypes['Environment'], ParentType, ContextType>;
  environmentId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectUsageResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectUsage'] = ResolversParentTypes['ProjectUsage']> = {
  avgUsage?: Resolver<ResolversTypes['UsageItem'], ParentType, ContextType>;
  buckets?: Resolver<Array<ResolversTypes['UsageBucket']>, ParentType, ContextType>;
  currentUsage?: Resolver<ResolversTypes['UsageItem'], ParentType, ContextType>;
  endDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  estimatedUsage?: Resolver<ResolversTypes['UsageItem'], ParentType, ContextType>;
  executionTimeMinutes?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  plugins?: Resolver<Array<ResolversTypes['PluginUsage']>, ParentType, ContextType>;
  project?: Resolver<ResolversTypes['Project'], ParentType, ContextType>;
  services?: Resolver<Array<ResolversTypes['ServiceUsage']>, ParentType, ContextType>;
  startDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectWebhookResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectWebhook'] = ResolversParentTypes['ProjectWebhook']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastStatus?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProviderAuthResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProviderAuth'] = ResolversParentTypes['ProviderAuth']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  metadata?: Resolver<ResolversTypes['Json'], ParentType, ContextType>;
  provider?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QrCodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['QRCode'] = ResolversParentTypes['QRCode']> = {
  secret?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  adminAllServices?: Resolver<ResolversTypes['ServiceConnection'], ParentType, ContextType, Partial<QueryAdminAllServicesArgs>>;
  allCustomDomainsForEnvironment?: Resolver<ResolversTypes['AllDomains'], ParentType, ContextType, RequireFields<QueryAllCustomDomainsForEnvironmentArgs, 'environmentId' | 'projectId' | 'serviceId'>>;
  allDeployments?: Resolver<ResolversTypes['PaginatedDeploys'], ParentType, ContextType, Partial<QueryAllDeploymentsArgs>>;
  allDeploymentsForEnvironment?: Resolver<Array<ResolversTypes['Deployment']>, ParentType, ContextType, RequireFields<QueryAllDeploymentsForEnvironmentArgs, 'environmentId' | 'projectId'>>;
  allEnvsForEnvironment?: Resolver<ResolversTypes['Json'], ParentType, ContextType, RequireFields<QueryAllEnvsForEnvironmentArgs, 'environmentId' | 'projectId'>>;
  allEnvsForPlugin?: Resolver<ResolversTypes['Json'], ParentType, ContextType, RequireFields<QueryAllEnvsForPluginArgs, 'environmentId' | 'pluginId' | 'projectId'>>;
  allProjects?: Resolver<ResolversTypes['PaginatedProjects'], ParentType, ContextType, Partial<QueryAllProjectsArgs>>;
  allTeams?: Resolver<ResolversTypes['PaginatedTeams'], ParentType, ContextType, Partial<QueryAllTeamsArgs>>;
  allUsers?: Resolver<ResolversTypes['PaginatedUsers'], ParentType, ContextType, Partial<QueryAllUsersArgs>>;
  approvedTemplates?: Resolver<Array<ResolversTypes['Template']>, ParentType, ContextType>;
  availablePluginsForProject?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<QueryAvailablePluginsForProjectArgs, 'projectId'>>;
  buildLogs?: Resolver<Array<ResolversTypes['Log']>, ParentType, ContextType, RequireFields<QueryBuildLogsArgs, 'deploymentId' | 'projectId'>>;
  decryptedVariables?: Resolver<ResolversTypes['Json'], ParentType, ContextType, RequireFields<QueryDecryptedVariablesArgs, 'environmentId' | 'projectId'>>;
  decryptedVariablesForService?: Resolver<ResolversTypes['Json'], ParentType, ContextType, RequireFields<QueryDecryptedVariablesForServiceArgs, 'environmentId' | 'projectId'>>;
  deployment?: Resolver<ResolversTypes['Deployment'], ParentType, ContextType, RequireFields<QueryDeploymentArgs, 'id'>>;
  deploymentByDomain?: Resolver<ResolversTypes['DeploymentByDomain'], ParentType, ContextType, RequireFields<QueryDeploymentByDomainArgs, 'domain'>>;
  deploymentById?: Resolver<ResolversTypes['Deployment'], ParentType, ContextType, RequireFields<QueryDeploymentByIdArgs, 'deploymentId' | 'projectId'>>;
  deploymentLogs?: Resolver<Array<ResolversTypes['Log']>, ParentType, ContextType, RequireFields<QueryDeploymentLogsArgs, 'deploymentId' | 'projectId'>>;
  deployments?: Resolver<ResolversTypes['DeploymentConnection'], ParentType, ContextType, Partial<QueryDeploymentsArgs>>;
  environment?: Resolver<ResolversTypes['Environment'], ParentType, ContextType, RequireFields<QueryEnvironmentArgs, 'id'>>;
  environmentById?: Resolver<ResolversTypes['Environment'], ParentType, ContextType, RequireFields<QueryEnvironmentByIdArgs, 'environmentId' | 'projectId'>>;
  environments?: Resolver<ResolversTypes['EnvironmentConnection'], ParentType, ContextType, Partial<QueryEnvironmentsArgs>>;
  findInviteCodeByCode?: Resolver<ResolversTypes['InviteCode'], ParentType, ContextType, RequireFields<QueryFindInviteCodeByCodeArgs, 'code'>>;
  findTeamByCode?: Resolver<ResolversTypes['Team'], ParentType, ContextType, RequireFields<QueryFindTeamByCodeArgs, 'code'>>;
  genericPlugin?: Resolver<ResolversTypes['GenericPlugin'], ParentType, ContextType, RequireFields<QueryGenericPluginArgs, 'pluginId' | 'projectId'>>;
  getAllPartnerProjects?: Resolver<ResolversTypes['PaginatedPartnerProjects'], ParentType, ContextType, Partial<QueryGetAllPartnerProjectsArgs>>;
  getAllVerificationAppeals?: Resolver<ResolversTypes['PaginatedVerificationAppeals'], ParentType, ContextType, Partial<QueryGetAllVerificationAppealsArgs>>;
  getAvailableGitHubRepos?: Resolver<Array<ResolversTypes['GitHubRepo']>, ParentType, ContextType>;
  getBanReasonHistory?: Resolver<Array<ResolversTypes['BanReasonHistory']>, ParentType, ContextType, RequireFields<QueryGetBanReasonHistoryArgs, 'userId'>>;
  getBranchesForGitHubRepo?: Resolver<Array<ResolversTypes['GitHubBranch']>, ParentType, ContextType, RequireFields<QueryGetBranchesForGitHubRepoArgs, 'owner' | 'repo'>>;
  getCustomerForTeam?: Resolver<ResolversTypes['Customer'], ParentType, ContextType, RequireFields<QueryGetCustomerForTeamArgs, 'teamId'>>;
  getCustomerForUser?: Resolver<ResolversTypes['Customer'], ParentType, ContextType>;
  getDeploymentTriggersByProject?: Resolver<Array<ResolversTypes['DeploymentTrigger']>, ParentType, ContextType, RequireFields<QueryGetDeploymentTriggersByProjectArgs, 'projectId'>>;
  getEmailTemplates?: Resolver<Array<ResolversTypes['EmailTemplate']>, ParentType, ContextType>;
  getLockdownStatus?: Resolver<ResolversTypes['LockdownStatus'], ParentType, ContextType>;
  getPartnerPayout?: Resolver<ResolversTypes['PartnerPayout'], ParentType, ContextType, RequireFields<QueryGetPartnerPayoutArgs, 'date'>>;
  getPartnerProject?: Resolver<ResolversTypes['PartnerProject'], ParentType, ContextType, RequireFields<QueryGetPartnerProjectArgs, 'id'>>;
  getPayoutForProject?: Resolver<ResolversTypes['PartnerPayoutForProject'], ParentType, ContextType, RequireFields<QueryGetPayoutForProjectArgs, 'kickbackPercent' | 'partnerProjectId'>>;
  getPlatformStatus?: Resolver<ResolversTypes['PlatformStatus'], ParentType, ContextType>;
  getProjectsForPartner?: Resolver<Array<ResolversTypes['PartnerProject']>, ParentType, ContextType, Partial<QueryGetProjectsForPartnerArgs>>;
  getReferralDetails?: Resolver<ResolversTypes['ReferralDetails'], ParentType, ContextType>;
  getSQLTable?: Resolver<ResolversTypes['SQLTable'], ParentType, ContextType, RequireFields<QueryGetSqlTableArgs, 'databaseType' | 'environmentId' | 'name' | 'pluginId' | 'projectId'>>;
  getSQLTableNames?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<QueryGetSqlTableNamesArgs, 'databaseType' | 'environmentId' | 'pluginId' | 'projectId'>>;
  getSessions?: Resolver<Array<ResolversTypes['Session']>, ParentType, ContextType>;
  getSuggestedVariables?: Resolver<ResolversTypes['Json'], ParentType, ContextType, RequireFields<QueryGetSuggestedVariablesArgs, 'environmentId' | 'projectId'>>;
  getTemplateConfiguration?: Resolver<ResolversTypes['Template'], ParentType, ContextType, RequireFields<QueryGetTemplateConfigurationArgs, 'code'>>;
  getTemplateVersionsByCode?: Resolver<ResolversTypes['TemplateWithVersions'], ParentType, ContextType, RequireFields<QueryGetTemplateVersionsByCodeArgs, 'code'>>;
  getTwoFactorStatus?: Resolver<ResolversTypes['TwoFactorInfo'], ParentType, ContextType>;
  getUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<QueryGetUserArgs, 'userId'>>;
  getUserPreferences?: Resolver<ResolversTypes['Preferences'], ParentType, ContextType>;
  getUserTemplates?: Resolver<Array<ResolversTypes['Template']>, ParentType, ContextType>;
  getUserVerificationAppeal?: Resolver<ResolversTypes['VerificationAppeal'], ParentType, ContextType>;
  getUsersWithClashingIPs?: Resolver<Array<ResolversTypes['UserWithClashingIP']>, ParentType, ContextType, RequireFields<QueryGetUsersWithClashingIPsArgs, 'userId'>>;
  getVerificationStatus?: Resolver<ResolversTypes['VerificationStatus'], ParentType, ContextType>;
  getWorkflowStatus?: Resolver<ResolversTypes['WorkflowResult'], ParentType, ContextType, RequireFields<QueryGetWorkflowStatusArgs, 'workflowId'>>;
  getWritableGithubScopes?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  githubEvents?: Resolver<Array<ResolversTypes['GitHubEvent']>, ParentType, ContextType, RequireFields<QueryGithubEventsArgs, 'userId'>>;
  herokuApps?: Resolver<Array<ResolversTypes['HerokuApp']>, ParentType, ContextType>;
  herokuTemplateToRailwayTemplate?: Resolver<ResolversTypes['Json'], ParentType, ContextType, RequireFields<QueryHerokuTemplateToRailwayTemplateArgs, 'repoUrl'>>;
  integrationAuth?: Resolver<ResolversTypes['IntegrationAuth'], ParentType, ContextType, RequireFields<QueryIntegrationAuthArgs, 'provider' | 'providerId'>>;
  integrationAuths?: Resolver<Array<ResolversTypes['IntegrationAuth']>, ParentType, ContextType>;
  integrations?: Resolver<Array<ResolversTypes['Integration']>, ParentType, ContextType, RequireFields<QueryIntegrationsArgs, 'projectId'>>;
  inviteCode?: Resolver<ResolversTypes['InviteCode'], ParentType, ContextType, RequireFields<QueryInviteCodeArgs, 'projectId' | 'role'>>;
  isCustomDomainAvailable?: Resolver<ResolversTypes['DomainAvailable'], ParentType, ContextType, RequireFields<QueryIsCustomDomainAvailableArgs, 'domain'>>;
  isEnvironmentDomainAvailable?: Resolver<ResolversTypes['DomainAvailable'], ParentType, ContextType, RequireFields<QueryIsEnvironmentDomainAvailableArgs, 'domain'>>;
  isRepoNameAvailable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<QueryIsRepoNameAvailableArgs, 'fullRepoName'>>;
  me?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  metricsForService?: Resolver<ResolversTypes['EnvironmentMetrics'], ParentType, ContextType, RequireFields<QueryMetricsForServiceArgs, 'environmentId' | 'projectId'>>;
  mongoCollectionData?: Resolver<ResolversTypes['MongoCollection'], ParentType, ContextType, RequireFields<QueryMongoCollectionDataArgs, 'database' | 'environmentId' | 'name' | 'pluginId' | 'projectId'>>;
  mongoCollectionNames?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<QueryMongoCollectionNamesArgs, 'database' | 'environmentId' | 'pluginId' | 'projectId'>>;
  mongoDatabaseNames?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<QueryMongoDatabaseNamesArgs, 'environmentId' | 'pluginId' | 'projectId'>>;
  pluginLogs?: Resolver<Array<ResolversTypes['Log']>, ParentType, ContextType, RequireFields<QueryPluginLogsArgs, 'environmentId' | 'pluginId' | 'projectId'>>;
  project?: Resolver<ResolversTypes['Project'], ParentType, ContextType, RequireFields<QueryProjectArgs, 'id'>>;
  projectById?: Resolver<ResolversTypes['Project'], ParentType, ContextType, RequireFields<QueryProjectByIdArgs, 'projectId'>>;
  projectEvents?: Resolver<ResolversTypes['PaginatedEvents'], ParentType, ContextType, RequireFields<QueryProjectEventsArgs, 'projectId'>>;
  projectMembers?: Resolver<Array<ResolversTypes['Member']>, ParentType, ContextType, RequireFields<QueryProjectMembersArgs, 'projectId'>>;
  projectResourceAccess?: Resolver<ResolversTypes['ProjectResourceAccess'], ParentType, ContextType, RequireFields<QueryProjectResourceAccessArgs, 'projectId'>>;
  projectToken?: Resolver<ResolversTypes['ProjectToken'], ParentType, ContextType>;
  projectTokens?: Resolver<Array<ResolversTypes['ProjectToken']>, ParentType, ContextType, RequireFields<QueryProjectTokensArgs, 'projectId'>>;
  projectWebhooks?: Resolver<Array<ResolversTypes['ProjectWebhook']>, ParentType, ContextType, RequireFields<QueryProjectWebhooksArgs, 'projectId'>>;
  projects?: Resolver<ResolversTypes['ProjectConnection'], ParentType, ContextType, Partial<QueryProjectsArgs>>;
  redisGetKey?: Resolver<ResolversTypes['Json'], ParentType, ContextType, RequireFields<QueryRedisGetKeyArgs, 'environmentId' | 'key' | 'pluginId' | 'projectId'>>;
  redisKeys?: Resolver<Array<ResolversTypes['RedisKey']>, ParentType, ContextType, RequireFields<QueryRedisKeysArgs, 'environmentId' | 'pluginId' | 'projectId'>>;
  resourceAccess?: Resolver<ResolversTypes['ResourceAccess'], ParentType, ContextType, Partial<QueryResourceAccessArgs>>;
  service?: Resolver<ResolversTypes['Service'], ParentType, ContextType, RequireFields<QueryServiceArgs, 'id'>>;
  serviceIsUpdatable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<QueryServiceIsUpdatableArgs, 'projectId' | 'serviceId'>>;
  services?: Resolver<ResolversTypes['ServiceConnection'], ParentType, ContextType, Partial<QueryServicesArgs>>;
  sourceTemplateForProject?: Resolver<Maybe<ResolversTypes['Template']>, ParentType, ContextType, RequireFields<QuerySourceTemplateForProjectArgs, 'projectId'>>;
  stats?: Resolver<ResolversTypes['Stats'], ParentType, ContextType>;
  teamById?: Resolver<ResolversTypes['Team'], ParentType, ContextType, RequireFields<QueryTeamByIdArgs, 'teamId'>>;
  templateMetadata?: Resolver<ResolversTypes['TemplateMetadata'], ParentType, ContextType, RequireFields<QueryTemplateMetadataArgs, 'code'>>;
  topProjects?: Resolver<Array<ResolversTypes['Project']>, ParentType, ContextType, RequireFields<QueryTopProjectsArgs, 'resource'>>;
  usageForProject?: Resolver<ResolversTypes['ProjectUsage'], ParentType, ContextType, RequireFields<QueryUsageForProjectArgs, 'projectId'>>;
  usageForTeamProjects?: Resolver<Array<ResolversTypes['ProjectUsage']>, ParentType, ContextType, RequireFields<QueryUsageForTeamProjectsArgs, 'teamId'>>;
  usageForUserProjects?: Resolver<Array<ResolversTypes['ProjectUsage']>, ParentType, ContextType, RequireFields<QueryUsageForUserProjectsArgs, 'userId'>>;
  userIdForDiscordId?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<QueryUserIdForDiscordIdArgs, 'discordId'>>;
  vercelInfo?: Resolver<ResolversTypes['VercelInfo'], ParentType, ContextType>;
  verifyLoginSession?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<QueryVerifyLoginSessionArgs, 'code'>>;
};

export type RawQueryResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['RawQueryResponse'] = ResolversParentTypes['RawQueryResponse']> = {
  raw?: Resolver<ResolversTypes['Json'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RecoveryCodesResolvers<ContextType = any, ParentType extends ResolversParentTypes['RecoveryCodes'] = ResolversParentTypes['RecoveryCodes']> = {
  recoveryCodes?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RedisKeyResolvers<ContextType = any, ParentType extends ResolversParentTypes['RedisKey'] = ResolversParentTypes['RedisKey']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ttl?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReferralDetailsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReferralDetails'] = ResolversParentTypes['ReferralDetails']> = {
  referralInfo?: Resolver<Maybe<ResolversTypes['ReferralInfo']>, ParentType, ContextType>;
  referredUsers?: Resolver<Array<ResolversTypes['ReferralInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReferralInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReferralInfo'] = ResolversParentTypes['ReferralInfo']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['ReferralStatus'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ResourceAccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResourceAccess'] = ResolversParentTypes['ResourceAccess']> = {
  project?: Resolver<ResolversTypes['AccessRule'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SqlTableResolvers<ContextType = any, ParentType extends ResolversParentTypes['SQLTable'] = ResolversParentTypes['SQLTable']> = {
  columnNames?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  columnTypes?: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  primaryKey?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rows?: Resolver<Array<ResolversTypes['Json']>, ParentType, ContextType>;
  totalRows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ServiceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Service'] = ResolversParentTypes['Service']> = {
  buildCommand?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  builder?: Resolver<ResolversTypes['Builder'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deployments?: Resolver<Array<ResolversTypes['Deployment']>, ParentType, ContextType, Partial<ServiceDeploymentsArgs>>;
  healthcheckPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isUpdatable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  project?: Resolver<ResolversTypes['Project'], ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  repoTriggers?: Resolver<Array<ResolversTypes['DeploymentTrigger']>, ParentType, ContextType, Partial<ServiceRepoTriggersArgs>>;
  restartPolicyMaxRetries?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  restartPolicyType?: Resolver<ResolversTypes['RestartPolicyType'], ParentType, ContextType>;
  rootDirectory?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  source?: Resolver<ResolversTypes['Json'], ParentType, ContextType>;
  startCommand?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  upstreamUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  watchPatterns?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ServiceConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ServiceConnection'] = ResolversParentTypes['ServiceConnection']> = {
  nodes?: Resolver<Array<ResolversTypes['Service']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ServiceDomainResolvers<ContextType = any, ParentType extends ResolversParentTypes['ServiceDomain'] = ResolversParentTypes['ServiceDomain']> = {
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  domain?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  environmentId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ServiceExecutionTimeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ServiceExecutionTime'] = ResolversParentTypes['ServiceExecutionTime']> = {
  totalMinutes?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ServiceUsageResolvers<ContextType = any, ParentType extends ResolversParentTypes['ServiceUsage'] = ResolversParentTypes['ServiceUsage']> = {
  deployments?: Resolver<Array<ResolversTypes['DeploymentUsage']>, ParentType, ContextType>;
  service?: Resolver<ResolversTypes['Service'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SessionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Session'] = ResolversParentTypes['Session']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  expiredAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isCurrent?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SessionType'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StatsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Stats'] = ResolversParentTypes['Stats']> = {
  activeProjects?: Resolver<Array<ResolversTypes['Project']>, ParentType, ContextType>;
  dailyActiveProjects?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  deploysInProgress?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  deploysLastHour?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  latestDeploys?: Resolver<Array<ResolversTypes['Deployment']>, ParentType, ContextType>;
  latestProjects?: Resolver<Array<ResolversTypes['Project']>, ParentType, ContextType>;
  latestUsers?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  numDeploysActive?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  numDeploysTotal?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  numProjects?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  numSubscribed?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  numTeams?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  numUsers?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  numVerifiedUsers?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalPlatformUsage?: Resolver<Maybe<ResolversTypes['TotalUsage']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
  buildLogs?: SubscriptionResolver<Array<ResolversTypes['Log']>, "buildLogs", ParentType, ContextType, RequireFields<SubscriptionBuildLogsArgs, 'deploymentId' | 'projectId'>>;
  deploymentLogs?: SubscriptionResolver<Array<ResolversTypes['Log']>, "deploymentLogs", ParentType, ContextType, RequireFields<SubscriptionDeploymentLogsArgs, 'deploymentId' | 'projectId'>>;
  pluginLogs?: SubscriptionResolver<Array<ResolversTypes['Log']>, "pluginLogs", ParentType, ContextType, RequireFields<SubscriptionPluginLogsArgs, 'environmentId' | 'pluginId' | 'projectId'>>;
};

export type SubscriptionItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['SubscriptionItem'] = ResolversParentTypes['SubscriptionItem']> = {
  itemId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  priceId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  productId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TeamResolvers<ContextType = any, ParentType extends ResolversParentTypes['Team'] = ResolversParentTypes['Team']> = {
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customer?: Resolver<Maybe<ResolversTypes['Customer']>, ParentType, ContextType>;
  discordRole?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  members?: Resolver<Array<ResolversTypes['TeamMember']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  projects?: Resolver<Array<ResolversTypes['Project']>, ParentType, ContextType, Partial<TeamProjectsArgs>>;
  teamPermissions?: Resolver<Array<ResolversTypes['TeamPermission']>, ParentType, ContextType, Partial<TeamTeamPermissionsArgs>>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TeamMemberResolvers<ContextType = any, ParentType extends ResolversParentTypes['TeamMember'] = ResolversParentTypes['TeamMember']> = {
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<ResolversTypes['TeamRole'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TeamPermissionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TeamPermission'] = ResolversParentTypes['TeamPermission']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['TeamRole'], ParentType, ContextType>;
  teamId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TemplateResolvers<ContextType = any, ParentType extends ResolversParentTypes['Template'] = ResolversParentTypes['Template']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  configuration?: Resolver<ResolversTypes['Json'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  demoProjectId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  projects?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TemplateMetadataResolvers<ContextType = any, ParentType extends ResolversParentTypes['TemplateMetadata'] = ResolversParentTypes['TemplateMetadata']> = {
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  readmeContent?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TemplateVersionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TemplateVersion'] = ResolversParentTypes['TemplateVersion']> = {
  configuration?: Resolver<ResolversTypes['Json'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isLatestCommit?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TemplateWithVersionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['TemplateWithVersions'] = ResolversParentTypes['TemplateWithVersions']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  configuration?: Resolver<ResolversTypes['Json'], ParentType, ContextType>;
  demoProjectId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  versions?: Resolver<Array<ResolversTypes['TemplateVersion']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TotalUsageResolvers<ContextType = any, ParentType extends ResolversParentTypes['TotalUsage'] = ResolversParentTypes['TotalUsage']> = {
  current?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  estimated?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TwoFactorInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['TwoFactorInfo'] = ResolversParentTypes['TwoFactorInfo']> = {
  hasRecoveryCodes?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isVerified?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsageBucketResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsageBucket'] = ResolversParentTypes['UsageBucket']> = {
  avgUsage?: Resolver<ResolversTypes['UsageItem'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  usage?: Resolver<ResolversTypes['UsageItem'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsageItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsageItem'] = ResolversParentTypes['UsageItem']> = {
  cpuPercentvCPU?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  memoryUsageGB?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  agreedFairUse?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  banReason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cost?: Resolver<ResolversTypes['UserCost'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customer?: Resolver<Maybe<ResolversTypes['Customer']>, ParentType, ContextType>;
  discordRoles?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  executionTime?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  flags?: Resolver<Array<ResolversTypes['UserFlag']>, ParentType, ContextType>;
  has2FA?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isAdmin?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isDevPlan?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isVerified?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  lastLogin?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  plan?: Resolver<ResolversTypes['Plan'], ParentType, ContextType>;
  preferences?: Resolver<Maybe<ResolversTypes['Preferences']>, ParentType, ContextType>;
  projects?: Resolver<Array<ResolversTypes['Project']>, ParentType, ContextType, Partial<UserProjectsArgs>>;
  providerAuths?: Resolver<Array<ResolversTypes['ProviderAuth']>, ParentType, ContextType, Partial<UserProviderAuthsArgs>>;
  referredUsers?: Resolver<Array<ResolversTypes['ReferralInfo']>, ParentType, ContextType>;
  registrationStatus?: Resolver<ResolversTypes['RegistrationStatus'], ParentType, ContextType>;
  riskLevel?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  teams?: Resolver<Array<ResolversTypes['Team']>, ParentType, ContextType, Partial<UserTeamsArgs>>;
  termsAgreedOn?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserCostResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserCost'] = ResolversParentTypes['UserCost']> = {
  current?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  estimated?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserWithClashingIpResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserWithClashingIP'] = ResolversParentTypes['UserWithClashingIP']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isBanned?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VariableResolvers<ContextType = any, ParentType extends ResolversParentTypes['Variable'] = ResolversParentTypes['Variable']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  environment?: Resolver<ResolversTypes['Environment'], ParentType, ContextType>;
  environmentId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  plugin?: Resolver<Maybe<ResolversTypes['Plugin']>, ParentType, ContextType>;
  pluginId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  service?: Resolver<Maybe<ResolversTypes['Service']>, ParentType, ContextType>;
  serviceId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VercelAccountResolvers<ContextType = any, ParentType extends ResolversParentTypes['VercelAccount'] = ResolversParentTypes['VercelAccount']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  integrationAuthId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isUser?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  projects?: Resolver<Array<ResolversTypes['VercelProject']>, ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VercelInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['VercelInfo'] = ResolversParentTypes['VercelInfo']> = {
  accounts?: Resolver<Array<ResolversTypes['VercelAccount']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VercelProjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['VercelProject'] = ResolversParentTypes['VercelProject']> = {
  accountId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VerificationAppealResolvers<ContextType = any, ParentType extends ResolversParentTypes['VerificationAppeal'] = ResolversParentTypes['VerificationAppeal']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  repo?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['VerificationAppealStatus'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VerificationStatusResolvers<ContextType = any, ParentType extends ResolversParentTypes['VerificationStatus'] = ResolversParentTypes['VerificationStatus']> = {
  card?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  github?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WorkflowResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['WorkflowResult'] = ResolversParentTypes['WorkflowResult']> = {
  status?: Resolver<ResolversTypes['WorkflowStatus'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AccessRule?: AccessRuleResolvers<ContextType>;
  AllDomains?: AllDomainsResolvers<ContextType>;
  BanReasonHistory?: BanReasonHistoryResolvers<ContextType>;
  BigInt?: GraphQLScalarType;
  CnameCheck?: CnameCheckResolvers<ContextType>;
  ContainerInfo?: ContainerInfoResolvers<ContextType>;
  CreateProjectFromTemplateResult?: CreateProjectFromTemplateResultResolvers<ContextType>;
  Credit?: CreditResolvers<ContextType>;
  CustomDomain?: CustomDomainResolvers<ContextType>;
  Customer?: CustomerResolvers<ContextType>;
  CustomerInvoice?: CustomerInvoiceResolvers<ContextType>;
  CustomerSubscription?: CustomerSubscriptionResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Deployment?: DeploymentResolvers<ContextType>;
  DeploymentByDomain?: DeploymentByDomainResolvers<ContextType>;
  DeploymentConnection?: DeploymentConnectionResolvers<ContextType>;
  DeploymentSnapshot?: DeploymentSnapshotResolvers<ContextType>;
  DeploymentTrigger?: DeploymentTriggerResolvers<ContextType>;
  DeploymentUsage?: DeploymentUsageResolvers<ContextType>;
  DeploymentWithMetrics?: DeploymentWithMetricsResolvers<ContextType>;
  DomainAvailable?: DomainAvailableResolvers<ContextType>;
  EmailTemplate?: EmailTemplateResolvers<ContextType>;
  Environment?: EnvironmentResolvers<ContextType>;
  EnvironmentConnection?: EnvironmentConnectionResolvers<ContextType>;
  EnvironmentMetrics?: EnvironmentMetricsResolvers<ContextType>;
  Event?: EventResolvers<ContextType>;
  GenericPlugin?: GenericPluginResolvers<ContextType>;
  GenericPluginTabConfiguration?: GenericPluginTabConfigurationResolvers<ContextType>;
  GenericPluginToken?: GenericPluginTokenResolvers<ContextType>;
  GitHubBranch?: GitHubBranchResolvers<ContextType>;
  GitHubEvent?: GitHubEventResolvers<ContextType>;
  GitHubRepo?: GitHubRepoResolvers<ContextType>;
  HerokuApp?: HerokuAppResolvers<ContextType>;
  Incident?: IncidentResolvers<ContextType>;
  Integration?: IntegrationResolvers<ContextType>;
  IntegrationAuth?: IntegrationAuthResolvers<ContextType>;
  InviteCode?: InviteCodeResolvers<ContextType>;
  Json?: GraphQLScalarType;
  LockdownStatus?: LockdownStatusResolvers<ContextType>;
  Log?: LogResolvers<ContextType>;
  MagicAuth?: MagicAuthResolvers<ContextType>;
  Member?: MemberResolvers<ContextType>;
  Metric?: MetricResolvers<ContextType>;
  MongoCollection?: MongoCollectionResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  PaginatedDeploys?: PaginatedDeploysResolvers<ContextType>;
  PaginatedEvents?: PaginatedEventsResolvers<ContextType>;
  PaginatedPartnerProjects?: PaginatedPartnerProjectsResolvers<ContextType>;
  PaginatedProjects?: PaginatedProjectsResolvers<ContextType>;
  PaginatedTeams?: PaginatedTeamsResolvers<ContextType>;
  PaginatedUsers?: PaginatedUsersResolvers<ContextType>;
  PaginatedVerificationAppeals?: PaginatedVerificationAppealsResolvers<ContextType>;
  PartnerPayout?: PartnerPayoutResolvers<ContextType>;
  PartnerPayoutForProject?: PartnerPayoutForProjectResolvers<ContextType>;
  PartnerProject?: PartnerProjectResolvers<ContextType>;
  PaymentMethod?: PaymentMethodResolvers<ContextType>;
  PaymentMethodCard?: PaymentMethodCardResolvers<ContextType>;
  PlatformStatus?: PlatformStatusResolvers<ContextType>;
  Plugin?: PluginResolvers<ContextType>;
  PluginContainerUsage?: PluginContainerUsageResolvers<ContextType>;
  PluginUsage?: PluginUsageResolvers<ContextType>;
  PluginWithMetrics?: PluginWithMetricsResolvers<ContextType>;
  Preferences?: PreferencesResolvers<ContextType>;
  Project?: ProjectResolvers<ContextType>;
  ProjectConnection?: ProjectConnectionResolvers<ContextType>;
  ProjectExecutionTime?: ProjectExecutionTimeResolvers<ContextType>;
  ProjectPermission?: ProjectPermissionResolvers<ContextType>;
  ProjectResourceAccess?: ProjectResourceAccessResolvers<ContextType>;
  ProjectTeam?: ProjectTeamResolvers<ContextType>;
  ProjectToken?: ProjectTokenResolvers<ContextType>;
  ProjectUsage?: ProjectUsageResolvers<ContextType>;
  ProjectWebhook?: ProjectWebhookResolvers<ContextType>;
  ProviderAuth?: ProviderAuthResolvers<ContextType>;
  QRCode?: QrCodeResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RawQueryResponse?: RawQueryResponseResolvers<ContextType>;
  RecoveryCodes?: RecoveryCodesResolvers<ContextType>;
  RedisKey?: RedisKeyResolvers<ContextType>;
  ReferralDetails?: ReferralDetailsResolvers<ContextType>;
  ReferralInfo?: ReferralInfoResolvers<ContextType>;
  ResourceAccess?: ResourceAccessResolvers<ContextType>;
  SQLTable?: SqlTableResolvers<ContextType>;
  Service?: ServiceResolvers<ContextType>;
  ServiceConnection?: ServiceConnectionResolvers<ContextType>;
  ServiceDomain?: ServiceDomainResolvers<ContextType>;
  ServiceExecutionTime?: ServiceExecutionTimeResolvers<ContextType>;
  ServiceUsage?: ServiceUsageResolvers<ContextType>;
  Session?: SessionResolvers<ContextType>;
  Stats?: StatsResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  SubscriptionItem?: SubscriptionItemResolvers<ContextType>;
  Team?: TeamResolvers<ContextType>;
  TeamMember?: TeamMemberResolvers<ContextType>;
  TeamPermission?: TeamPermissionResolvers<ContextType>;
  Template?: TemplateResolvers<ContextType>;
  TemplateMetadata?: TemplateMetadataResolvers<ContextType>;
  TemplateVersion?: TemplateVersionResolvers<ContextType>;
  TemplateWithVersions?: TemplateWithVersionsResolvers<ContextType>;
  TotalUsage?: TotalUsageResolvers<ContextType>;
  TwoFactorInfo?: TwoFactorInfoResolvers<ContextType>;
  UsageBucket?: UsageBucketResolvers<ContextType>;
  UsageItem?: UsageItemResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserCost?: UserCostResolvers<ContextType>;
  UserWithClashingIP?: UserWithClashingIpResolvers<ContextType>;
  Variable?: VariableResolvers<ContextType>;
  VercelAccount?: VercelAccountResolvers<ContextType>;
  VercelInfo?: VercelInfoResolvers<ContextType>;
  VercelProject?: VercelProjectResolvers<ContextType>;
  VerificationAppeal?: VerificationAppealResolvers<ContextType>;
  VerificationStatus?: VerificationStatusResolvers<ContextType>;
  WorkflowResult?: WorkflowResultResolvers<ContextType>;
};

