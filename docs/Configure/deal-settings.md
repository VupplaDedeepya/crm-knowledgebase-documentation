---
title: Deal Settings
sidebar_position: 5
description: Learn how to configure Sales Model, Buyer Type Behavior, and Deal Origin in CX Astra CRM.
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
