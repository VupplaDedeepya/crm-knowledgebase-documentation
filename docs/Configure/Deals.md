---
title: Deals
sidebar_position: 3
---
## Deal Pipelines

### Overview

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

**Settings → Deal Settings → Pipelines**

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
---
# Deal Settings

## Overview

Deal Settings allow administrators to configure how Deals behave across the workspace. These settings act as the source of truth for Deal creation, validation requirements, buyer classification, and reporting context.

### Navigate To

**Settings → Configure → Deals → Deal Settings**

The Deal Settings page contains the following sections:

- Sales Model
- Buyer Type Behavior
- Deal Origin

---

## 1. Sales Model

The **Sales Model** determines how your organization sells and controls the Deal creation flow, mandatory fields, and validation requirements.

![Add field](/img/Configure/dealSettings.png)

### Available Options

### B2B (Business-to-Business)

Choose this option if your organization primarily sells to companies or organizations.

#### Behavior

- Buyer Type is automatically set to **Business**.
- Users are not prompted to select a Buyer Type.
- Organization is required.
- Contact is required.

---

### B2C (Business-to-Consumer)

Choose this option if your organization primarily sells directly to individual customers.

#### Behavior

- Buyer Type is automatically set to **Individual**.
- Users are not prompted to select a Buyer Type.
- Contact is required.
- Organization is optional.

---

### Both

Choose this option if your organization sells to both businesses and individuals.

#### Behavior

- Users must select a Buyer Type when creating a Deal.
- Validation rules are applied based on the selected Buyer Type.

### Important Notes

:::warning
The Sales Model is configured at the workspace level.
:::

- Changes affect only newly created Deals.
- Existing Deals remain unchanged.
- A warning is displayed when changing the Sales Model after Deals already exist.

---

## 2. Buyer Type Behavior

Based on the selected Sales Model, the system determines how Buyer Type is handled during Deal creation.

### Buyer Types

| Buyer Type | Contact Required | Organization Required |
|------------|------------------|----------------------|
| Business | Yes | Yes |
| Individual | Yes | No |

### How Buyer Type Works

#### Business

Use the **Business** Buyer Type when the Deal represents a company or organization.

##### Requirements

- Contact must be provided.
- Organization must be provided.

---

#### Individual

Use the **Individual** Buyer Type when the Deal represents a single person.

##### Requirements

- Contact must be provided.
- Organization is optional.

### Important Notes

- Buyer Type is assigned when a Deal is created.
- Each Deal can have only one Buyer Type.
- Buyer Type cannot be modified after Deal creation.
- Validation requirements are automatically enforced based on Buyer Type.

---

## 3. Deal Origin

Deal Origin identifies where a Deal came from. This information is used for reporting, analytics, and AI insights.

:::note
Deal Origin does not affect Deal validation rules.
:::

### Available Origin Types

- Lead
- Contact
- Organization
- Manual
- Referral

### Configuration Options

Administrators can:

- Enable or disable origin values.
- Configure a default Deal Origin.
- Standardize Deal source tracking across the organization.

---

### Why Deal Origin Matters

Capturing Deal Origin helps organizations:

- Understand where opportunities originate.
- Measure source performance.
- Improve reporting accuracy.
- Generate more meaningful AI-driven insights.
- Analyze pipeline trends by acquisition channel.

---

## Best Practices

- Select the Sales Model that reflects your primary sales process.
- Use **Both** only if your organization serves both businesses and individuals.
- Ensure Deal Origins are configured consistently for accurate reporting.
- Review Buyer Type requirements before making configuration changes.
- Communicate any Sales Model updates to sales teams before rollout.

# Deal Scoring

## Overview

Deal Scoring helps organizations assess the likelihood of winning a Deal by combining business-defined scoring rules and AI-driven insights into a single Deal Score.

The final Deal Score is displayed as a percentage and provides sales teams with a simple, consistent measure of Deal quality and win probability.

## Navigate To

**Settings → Configure → Deals → Deal Scoring**

The Deal Scoring page contains the following sections:

- Scoring Model
- AI Scoring
- Score Weightage
- Score Explanation
- Recalculation Triggers

---

## 1. Scoring Model

The **Scoring Model** defines how Deal Scores are generated within the workspace.

Deal Scores are calculated using:

- Manual business rules
- AI-generated insights
- A combination of both

The final Deal Score is displayed as a percentage representing the likelihood of winning the Deal.

![lead scoring](/img/Configure/dealScoring.png)

### Available Scoring Modes

#### Manual Scoring

Scores are generated using administrator-defined business rules and qualification criteria.

#### AI Scoring

Scores are generated using AI-powered analysis of customer engagement and Deal activity.

#### Blended Scoring

Scores are calculated using a combination of Manual Scoring and AI Scoring.

:::note
The selected configuration is displayed within the Scoring Model section for quick reference.
:::

---

## 2. AI Scoring

AI Scoring analyzes Deal activity and engagement signals to predict the likelihood of winning a Deal.

Administrators can enable or disable AI Scoring for the entire workspace.

### Enable AI Scoring

When enabled:

- AI contributes to the Deal Score.
- AI insights are included in score calculations.
- Score predictions adapt to changing customer engagement patterns.

### Disable AI Scoring

When disabled:

- Only manual scoring rules contribute to the Deal Score.
- AI-generated insights are excluded from score calculations.

### Benefits of AI Scoring

- Identifies hidden patterns in Deal activity.
- Improves opportunity prioritization.
- Enhances forecasting accuracy.
- Complements manual business rules.

:::note
AI Scoring does not modify or replace your manual scoring rules.
:::

---

## 3. Score Weightage

Score Weightage determines how Manual Scoring and AI Scoring contribute to the final Deal Score.

Administrators can configure the balance between the two scoring methods.

### Common Weightage Configurations

| Manual Score | AI Score |
|--------------|----------|
| 100% | 0% |
| 80% | 20% |
| 50% | 50% |
| 20% | 80% |
| 0% | 100% |

### Example

If the score weightage is configured as:

- Manual Score = **50%**
- AI Score = **50%**

Both scoring methods contribute equally to the final Deal Score.

### Best Practice

Use a balanced approach when introducing AI Scoring to ensure business expertise and AI insights work together effectively.

---

## 4. Score Explanation

The **Score Explanation** section provides a simplified view of how Deal Scores are calculated.

This section helps administrators understand:

- Which scoring methods are active
- The selected weightage distribution
- How the final Deal Score is derived

### Why This Matters

Score explanations improve transparency and help administrators confidently configure scoring settings across the organization.

---

## 5. Recalculation Triggers

Deal Scores are automatically recalculated when significant changes occur within a Deal.

These updates help ensure Deal Scores remain accurate and reflect the latest information available.

### Examples of Recalculation Triggers

- Deal stage changes
- Activity updates
- Changes to qualification information
- Updates to scoring-related criteria

### Important Note

:::warning
Changes to scoring settings apply to newly evaluated or recalculated Deals. Existing Deal Scores remain unchanged until they are re-evaluated by the system.
:::