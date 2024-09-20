import { Intrinsic } from '../intrinsic/index.js'

export interface CreationPolicy {
  AutoScalingCreationPolicy?: {
    MinSuccessfulInstancesPercent: number
  }
  ResourceSignal?: {
    Count: number
    Timeout: string
  }
}

export type DeletionPolicy = 'Delete' | 'Retain' | 'Snapshot' | 'RetainExceptOnCreate'

export type DependsOn = (string | Intrinsic) | (string | Intrinsic)[]

export type Metadata = { [key: string]: string | Intrinsic }

export interface UpdatePolicy {
  AutoScalingRollingUpdate?: {
    MaxBatchSize?: number
    MinActiveInstancesPercent?: number
    MinInstancesInService?: number
    MinSuccessfulInstancesPercent?: number
    PauseTime?: string
    SuspendProcesses?: string[]
    WaitOnResourceSignals?: boolean
  }
  AutoScalingScheduledAction?: {
    IgnoreUnmodifiedGroupSizeProperties?: boolean
  }
}

export type UpdateReplacePolicy = 'Delete' | 'Retain' | 'Snapshot'

export interface ResourceAttributes {
  CreationPolicy?: CreationPolicy
  DeletionPolicy?: DeletionPolicy
  DependsOn?: DependsOn
  Metadata?: Metadata
  UpdatePolicy?: UpdatePolicy
  UpdateReplacePolicy?: UpdateReplacePolicy
}
