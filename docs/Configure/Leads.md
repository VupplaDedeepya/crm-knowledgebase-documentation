---
title: Leads
sidebar_position: 2
---
## Lead Scoring

Lead Scoring helps organizations identify and prioritize high-quality leads by assigning a score based on predefined business rules and AI-driven insights.

The system generates a single **Lead Score (%)** that represents the qualification strength of a lead. This score helps sales teams focus on leads that are more likely to convert into opportunities.

## Navigate To

**Settings → Configure → Leads → Lead Scoring**

The Lead Scoring page contains the following sections:

- Scoring Model
- AI Scoring
- Score Weightage
- Score Explanation
- Recalculation Triggers

---
![lead scoring](/img/Configure/leadScoring.png)

## 1. Scoring Model

The **Scoring Model** determines how Lead Scores are calculated across the workspace.

Lead Scores can be generated using:

- Manual Scoring
- AI Scoring
- A combination of Manual and AI Scoring

The selected model is displayed at the top of the page.

### Available Scoring Models

### Manual Only

Lead Scores are calculated exclusively using administrator-defined business rules.

#### Benefits

- Full transparency and control
- Consistent scoring based on business criteria
- Easy to understand and manage

#### Recommended For

- Organizations with well-defined lead qualification processes
- Teams requiring complete visibility into scoring logic

### Blended

Lead Scores are calculated using a combination of manual business rules and AI-driven insights.

#### Benefits

- Balances business expertise with predictive intelligence
- Provides more comprehensive lead evaluation
- Adapts to changing buyer behavior

#### Recommended For

- Organizations seeking a balance between manual control and AI assistance

### AI Only

Lead Scores are generated entirely through AI analysis.

#### Benefits

- Faster setup with minimal manual configuration
- Automatically adapts to engagement patterns
- Reduces administrative effort

#### Recommended For

- High-volume sales environments
- Organizations adopting an AI-first approach

---

## 2. AI Scoring

AI Scoring analyzes lead engagement and behavioral signals to predict qualification strength.

Administrators can enable or disable AI Scoring for the workspace.

### AI Behavior

When enabled, AI Scoring:

- Generates a qualification probability score
- Operates independently of manual scoring rules
- Continuously evaluates new lead activity
- Updates scores as lead engagement changes

:::note
AI Scoring enhances lead evaluation but does not modify manual scoring rules.
:::

---

## 3. Score Weightage

Score Weightage controls how Manual Scoring and AI Scoring contribute to the final Lead Score.

Administrators can use the slider or predefined options to select the desired distribution.

### Common Weightage Configurations

| Manual Score | AI Score |
|--------------|----------|
| 100% | 0% |
| 80% | 20% |
| 50% | 50% |
| 20% | 80% |
| 0% | 100% |

### Example

If the workspace is configured as:

- Manual Score = **80%**
- AI Score = **20%**

The final Lead Score will be calculated using both components according to the selected weightage.

### Best Practice

Start with a balanced model and adjust weightages based on your organization's qualification process and confidence in AI-driven insights.

---

## 4. Score Explanation

The **Score Explanation** section provides a clear summary of how Lead Scores are calculated.

This section helps administrators understand:

- Which scoring model is currently active
- How manual and AI scores contribute to the final score
- The weightage configuration applied to Lead Scoring

### Example

When AI Scoring is disabled:

- Manual Score evaluates configured business rules
- AI Score is not included
- Lead Score is calculated entirely from Manual Scoring

:::note
Sales users see only the final Lead Score (%) and do not have visibility into underlying scoring weights or AI signals.
:::

---

## 5. Recalculation Triggers

Lead Scores are automatically updated when important lead-related events occur.

These triggers ensure that Lead Scores remain current and accurately reflect the latest lead activity.

### Active Triggers

The system can recalculate scores when:

- Lead stage changes
- Manual rule conditions are satisfied
- AI signal updates occur
- Relevant lead activities are recorded

### Important Notes

- Recalculation occurs automatically when active triggers are detected
- Updated scores reflect the most recent lead information available
- Scoring settings apply to new or updated leads

---

## Best Practices

- Review scoring models regularly to ensure they align with business goals
- Use Manual Scoring when transparency and control are top priorities
- Use Blended Scoring to combine business expertise with AI-driven insights
- Monitor lead qualification performance and adjust score weightages when necessary
- Communicate scoring changes to sales teams to maintain consistency in lead evaluation