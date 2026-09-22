---
title: Pipeline
sidebar_position: 4
description: Learn how administrators configure Deal Pipelines and Stages in CX Astra CRM.
---

# Deal Pipelines

## Overview

The **Deal Pipelines & Stages** feature allows administrators to define and manage the sales process followed by their organization. Pipelines represent different sales motions, while stages represent the steps a Deal progresses through from creation to closure.

By configuring pipelines and stages, organizations can:

- Standardize sales execution
- Improve forecasting accuracy
- Enable meaningful reporting
- Provide better insights for AI-driven recommendations and deal analysis

The pipeline structure serves as the foundation for:

- Deal lifecycle management
- Sales forecasting
- Deal progression tracking
- Pipeline reporting
- Trend analysis
- Smart nudges and recommendations
- AI-driven insights

:::note
Only Administrators and authorized users can create and manage pipelines and stages.
:::

---

## Accessing Pipeline Settings

Navigate to:

**Settings → Configure CRM → Deals -> Pipelines**

This section allows administrators to:

- Create pipelines
- Configure stages
- Define stage order
- Set stage probabilities
- Activate or deactivate pipelines
- Configure stage behaviors

---

## Understanding Pipelines

A pipeline represents a complete sales process for a particular business motion.

Organizations may have different sales processes depending on:

- Customer type
- Sales team
- Business unit

Each pipeline contains its own set of stages.

---

## Pipeline Management

### Creating a Pipeline

Administrators can create one or more pipelines based on organizational needs.

![create pipeline](/img/Configure/pipeline.png)

#### Pipeline Information

| Field | Description |
|---------|-------------|
| Pipeline Name | Name of the sales process |
| Status | Active or Inactive |
| Default Pipeline | Determines the default pipeline for new deals |

---

### Default Pipeline

One pipeline can be designated as the default pipeline.

The default pipeline is automatically selected when users create a new Deal unless another pipeline is specified.

---

### Activating and Deactivating Pipelines

#### Active Pipeline

- Available for new Deals
- Appears in Deal creation workflows
- Included in reporting and forecasting

#### Inactive Pipeline

- Hidden from new Deal creation
- Existing Deals remain associated with the pipeline
- Historical reporting remains unaffected

---

### Pipeline Reordering

Pipelines can be reordered to improve usability and display priority.

:::note
Reordering does not affect existing Deals.
:::

---

### Important Rules

- At least one active pipeline must always exist.
- A default pipeline must be available.
- Existing Deals retain their assigned pipeline even if the pipeline is later deactivated.

---

## Stage Configuration

Stages define the individual steps a Deal moves through within a pipeline.

Stages help sales teams understand:

- Where a Deal currently stands
- What actions are required next

---

### Creating Stages

For each pipeline, administrators can create and configure stages.

![stage creation](/img/Configure/addStage.png)

| Field | Description |
|---------|-------------|
| Stage Name | Name displayed to users |
| Stage Type | Open, Closed-Won, or Closed-Lost |
| Probability | Forecasting percentage |
| Status | Active or Inactive |

---

### Examples of Stages

#### SMB Sales Pipeline

1. Discovery
2. Product Demo
3. Proposal Sent
4. Negotiation
5. Closed-Won
6. Closed-Lost

#### Enterprise Sales Pipeline

1. Qualification
2. Technical Evaluation
3. Commercial Review
4. Legal Review
5. Closed-Won
6. Closed-Lost

---

## Stage Types

Each stage must belong to one of the following categories.

### Open Stage

Represents an active Deal that is still progressing through the sales process.

#### Examples

- Discovery
- Demo
- Evaluation
- Proposal Sent

Open stages contribute to:

- Pipeline forecasting
- Active pipeline metrics

---

### Closed-Won Stage

Represents a successfully completed Deal.

#### Examples

- Closed-Won
- Contract Signed
- Renewed

#### Rules

- Exactly one Closed-Won stage must exist per pipeline.
- Closed-Won stages are terminal stages.
- Deals cannot move forward after reaching a Closed-Won stage.

---

### Closed-Lost Stage

Represents an unsuccessful Deal outcome.

#### Examples

- Closed-Lost
- Churned
- Rejected

#### Rules

- At least one Closed-Lost stage must exist in every pipeline.
- Closed-Lost stages are terminal stages.
- Deals cannot move forward after reaching a Closed-Lost stage.

---

## Stage Ordering

Stages follow a left-to-right progression that represents the normal flow of the sales process.

Administrators can:

- Add stages
- Remove stages
- Rename stages
- Reorder stages using drag-and-drop

---

## Stage Probability

Administrators may optionally assign a probability percentage to each stage.

### Purpose

Stage probabilities are used for:

- Revenue forecasting
- Pipeline analysis
- Opportunity weighting

:::note
Stage probabilities are not used as Deal Scores.
:::

### Example

| Stage | Probability |
|---------|-------------|
| Discovery | 10% |
| Demo | 25% |
| Proposal | 50% |
| Negotiation | 75% |
| Closed-Won | 100% |

---

## Stage Behavior Settings

Administrators can configure additional stage behaviors.

### 1. Allow Backward Movement

Determines whether Deals can move back to a previous stage.

#### Enabled

Sales users can move Deals backward if circumstances change.

**Example:**

Negotiation → Proposal

#### Disabled

Deals can only move forward through the pipeline.

---

### 2. Visible in Reports

Determines whether the stage appears in reports and dashboards.

#### Enabled

Stage data contributes to:

- Reporting
- Analytics

#### Disabled

The stage is excluded from selected reporting views.

---

### 3. Active for Pipeline Metrics

Determines whether the stage contributes to active pipeline calculations.

#### Enabled

Included in:

- Active pipeline value
- Forecasting metrics
- Sales performance tracking

#### Disabled

Excluded from active pipeline measurements.

---

## Updating Stages

Users can update the Deal stage through:

- Stage dropdown
- Pipeline progression bar
- Deal detail page

:::note
Configuration settings remain hidden from sales users.
:::

---

## Deactivating a Pipeline with Existing Deals

When a pipeline is deactivated:

- Existing Deals remain associated with their assigned pipeline.
- New Deals cannot use the deactivated pipeline.

---

## Deleting a Pipeline

A pipeline containing active Deals cannot be deleted.

:::warning
Deals must first be reassigned to another pipeline before deletion.
:::

---

## Deleting a Stage

If Deals currently exist in a stage:

- Stage deletion is blocked

**OR**

- Deal reassignment is required before deletion
