---
sidebar_position: 11
title: Scoring
---

# Scoring

## Overview

Scoring helps organizations prioritize Leads and Deals by assigning scores based on predefined business rules and AI-driven insights.

The **Scoring** module enables administrators to create and manage scoring rules that contribute to the overall **Lead Score** or **Deal Score**. These scores help sales teams identify records with the highest potential value and likelihood of conversion.

---

### Supported Scoring Types

The Scoring module supports:

- Lead Scoring
- Deal Scoring
- Manual Scoring Rules
- Rule Management
- Rule Activation & Deactivation

---

## Lead Scoring

### Overview

Lead Scoring allows administrators to assign points based on Lead attributes and predefined business criteria.

Points awarded through these scoring rules contribute to the **Manual Score** component of the overall Lead Score.

---

### Example Scoring Rules

| Rule | Points |
|------|--------:|
| Lead Source = Website | +10 |
| Industry = Healthcare | +15 |
| Country = UAE | +20 |
| Company Size = Enterprise | +25 |

These scores help sales teams quickly identify and prioritize high-value Leads.

---

## Deal Scoring

### Overview

Deal Scoring enables administrators to assign points based on Deal attributes and opportunity-related criteria.

Points awarded through these rules contribute to the **Manual Score** component of the overall Deal Score.

---

### Example Scoring Rules

| Rule | Points |
|------|--------:|
| Deal Value > 100,000 | +30 |
| Pipeline = Enterprise | +20 |
| Industry = Manufacturing | +15 |
| Probability > 75% | +25 |

Deal scores help sales teams focus on high-value opportunities and improve pipeline management.

---

## Viewing Scoring Rules

The **Scoring** page displays all configured scoring rules.

Each rule includes the following information:

| Field | Description |
|---------|-------------|
| Rule Name | Name of the scoring rule |
| Description | Brief explanation of the rule |
| Last Modified Date | Date the rule was last updated |
| Modified By | User who last modified the rule |
| Status | Indicates whether the rule is Active or Inactive |

Administrators can use the **Search** bar to quickly locate specific scoring rules.

---

## Creating a Scoring Rule

To create a new scoring rule:

1. Navigate to **Automation → Scoring**.
2. Select **Lead Scoring** or **Deal Scoring**.
3. Click **New Scoring Rule**.
4. Enter the required rule information.
5. Save the rule.

![Scoring-Rule-Creation](/img/Automation/ScoringRule.png)

---

## Rule Details

When creating a scoring rule, provide the following information.

---

### Scoring Rule Name

Enter a unique and descriptive name for the scoring rule.

#### Examples

- Enterprise Lead Scoring
- Website Lead Rule
- High Value Deal Rule
- Manufacturing Industry Rule

---

### Description

Optionally provide a description explaining the purpose of the scoring rule.

#### Example

> Assigns points to enterprise Leads generated from website enquiries.

Providing meaningful descriptions makes rule management easier for administrators.

---

## Managing Scoring Rules

Administrators can manage scoring rules directly from the Scoring list.

---

### Activate or Deactivate Rule

Use the **Status** toggle to enable or disable a scoring rule.

#### Active Rules

- Included in score calculations.
- Automatically contribute points.

#### Inactive Rules

- Ignored during score calculations.
- Can be re-enabled at any time.

---

### Clone Rule

The **Clone Rule** feature creates a copy of an existing scoring rule.

This allows administrators to create similar rules without starting from scratch.

When a rule is cloned:

- All existing configurations are copied.
- The cloned rule can be modified independently.
- The original rule remains unchanged.

#### Example

Clone the **Enterprise Lead Scoring** rule to create an **SMB Lead Scoring** rule, then update the scoring criteria accordingly.

---

### Delete Rule

Delete scoring rules that are no longer required.

> **Note**
>
> Consider disabling unused rules instead of deleting them if they may be needed in the future.

---

## Searching Scoring Rules

Use the **Search** field to quickly locate scoring rules by name.

Searching is especially useful when managing a large number of scoring configurations.

---

## Lead Scoring Best Practices

- Create scoring rules that reflect your ideal customer profile.
- Assign higher scores to high-quality Lead attributes.
- Regularly review scoring rules to ensure they remain accurate.
- Use meaningful and descriptive rule names.
- Disable unused rules instead of deleting them whenever possible.

---

## Deal Scoring Best Practices

- Prioritize scoring based on Deal Value and Probability.
- Use scoring to identify high-priority opportunities.
- Review scoring rules periodically as sales processes evolve.
- Align scoring criteria with business objectives and revenue targets.

---

## Example Use Cases

### Lead Prioritization

Assign additional points to Leads from preferred industries, regions, or marketing sources.

---

### High-Value Opportunity Identification

Award higher scores to Deals with large contract values and strong conversion potential.

---

### Enterprise Sales Qualification

Increase scores for Leads and Deals that meet enterprise-level qualification criteria.

---

### Sales Team Focus

Help sales representatives prioritize records with the highest potential value, improving productivity and conversion rates.

---

## Summary

The **Scoring** module enables organizations to prioritize Leads and Deals using configurable business rules.

By implementing meaningful Lead and Deal scoring strategies, sales teams can focus on the most promising opportunities, improve qualification accuracy, and drive better sales outcomes while maintaining flexible rule management through activation, cloning, searching, and ongoing optimization.