---
title: Localization
sidebar_position: 2
---

The **Localization** section allows organizations to configure locale-specific operational settings.

These settings standardize how dates, currencies, time zones, and formatting appear across the CRM.

---

![localization](/img/OrganizationSettings/Localization.png)

## Time Zone Configuration

### Purpose

Time zone settings control how system time is displayed and processed.

Used in:

- Activity timestamps
- Task due dates
- Workflow automations
- Reports and dashboards

### Configuration

Administrators must select a time zone from the supported IANA time zone list.

#### Examples

- Asia/Kolkata
- America/New_York
- Europe/London

---

## Language Settings

### Purpose

Defines the default system language for the organization.

Applies to:

- User interface labels
- System-generated messages
- Notifications

---

## Currency Settings

### Default Currency

Administrators configure the organization's base currency.

Used in:

- Deals
- Reports
- Dashboards
- Revenue calculations

---

### Multi-Currency Support

Organizations can enable or disable multi-currency support.

#### When Enabled

Deals can use multiple currencies.

The system stores:

- Deal currency
- Base organization currency
- Converted reporting value

### Reporting Behavior

Reports display:

- Original entered value
- Converted normalized value

:::note
All analytics are standardized to the organization's base currency.
:::

---

## Date & Number Formatting

Administrators can configure the following formatting preferences:

**Date Format**

Controls how dates are displayed throughout the CRM.

**Time Format**

Controls how time values are displayed throughout the CRM.

**Number Format**

Controls how numeric values are displayed in reports, dashboards, and records.