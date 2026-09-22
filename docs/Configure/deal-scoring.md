---
title: Deal Scoring
sidebar_position: 6
description: Learn how to configure Deal Scoring using Manual Scoring, AI Scoring, and score weightage in CX Astra CRM.
---

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

![deal scoring](/img/Configure/dealScoring.png)

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
