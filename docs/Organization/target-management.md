---
title: Target Management
sidebar_position : 5
description: Learn how administrators can create, manage, and track revenue targets for organizations, teams, and individual users.
---

# Target Management

Target Management allows administrators to create and manage **revenue targets** for the organization, teams, and individual users. Targets help track expected revenue for a specific financial period and provide a basis for measuring performance.

You can access **Target Management** from **Organization Settings**.

Target Management supports creating targets for:

- **Organization** – Set a revenue target for the entire organization.
- **Team** – Set a revenue target for a specific team.
- **User** – Set an individual revenue target for a user.

Targets can be created for the following periods:

- **Monthly**
- **Quarterly**
- **Half-Yearly**
- **Yearly**

:::note
In Version 1, only **Revenue** targets are supported.
:::

## Creating a Target

To create a target:

1. Go to **Organization Settings**.
2. Open **Target Management**.
3. Click **Create Target**.

![create-target](/img/OrganizationSettings/TargetManagement.png) 

4. Enter a **Target Name**.
5. Select the level for which you want to create the target under **Target For**:
   - Organization
   - Team
   - User
6. Select the appropriate target owner.
7. Select the **Financial Year**.
8. Select the required target period:
   - Monthly
   - Quarterly
   - Half-Yearly
   - Yearly
9. Enter the required target value.
10. Click **Create**.

## Target Name

Enter a name that clearly identifies the purpose of the target.

**Example:**

> FY 2026-27 Organization Revenue Target

## Target For

Select the level at which the target needs to be defined.

### Organization

Select **Organization** when the target applies to the entire organization.

**Example:**

> Organization Revenue Target – ₹50,00,000

### Team

Select **Team** when the target applies to a particular team.

**Example:**

> Sales Team Revenue Target – ₹15,00,000

### User

Select **User** when the target applies to an individual user.

**Example:**

> Sales Representative Revenue Target – ₹5,00,000

## Financial Year

The **Financial Year** is automatically based on the financial year configured in **Organization Settings**.

For example, if the organization has configured:

**FY 2026–27 (January 2026 – December 2026)**

the same financial year will be available while creating targets.

## Selecting the Target Period

Select how frequently the target should be measured.

### Monthly

Creates a target for a specific month.

**Example:**

> September 2026 Revenue Target – ₹5,00,000

### Quarterly

Creates a target for a quarter.

**Example:**

> Q2 Revenue Target – ₹15,00,000

### Half-Yearly

Creates a target covering a six-month period.

**Example:**

> H1 Revenue Target – ₹30,00,000

### Yearly

Creates a target for the complete financial year.

**Example:**

> FY 2026–27 Revenue Target – ₹60,00,000

## Target Value

Enter the revenue amount that needs to be achieved for the selected target period.

For example:

**Target Value:** ₹5,00,000

The target value must be greater than zero. Zero or negative values cannot be used as a target.

## Managing Targets

Created targets are displayed in the **Target Management** list.

The list allows administrators to view configured targets and their current status.

Target information includes:

- Target Name
- Target Level
- Owner
- Target Type
- Target Period
- Target Value
- Status
- Effective Dates

Administrators can perform the available actions such as:

- **View** a target
- **Edit** a target
- **Activate** a target
- **Deactivate** a target

## Target Status

A target can have one of the following statuses:

### Upcoming

The target is configured for a future period and is not yet active.

### Active

The target is currently applicable for its configured period.

### Completed

The target period has ended. Completed targets remain available for historical reference and cannot be modified.

## Target Validation

The system validates target details before creating or updating a target.

A target cannot be created when:

- Required fields are left blank.
- The target value is zero or negative.
- An active target already exists for the same owner, target type, and overlapping period.
- The selected period or dates are invalid.

For example, if an active monthly revenue target already exists for a user for September, another overlapping active revenue target cannot be created for the same user and period.

## Viewing Target Details

To view a target:

1. Open **Target Management**.
2. Locate the required target.
3. Click **View**.
4. Review the target configuration and its current status.

The target details include information such as the target level, owner, period, value, status, and effective period.

## Editing a Target

To edit an applicable target:

1. Open **Target Management**.
2. Locate the target.
3. Click **Edit**.
4. Update the required information.
5. Save the changes.

:::note
Completed targets are read-only and cannot be edited.
:::

## Activating or Deactivating a Target

Administrators can activate or deactivate applicable targets using the actions available in the Target Management list.

- **Activate** – Makes the target active for its applicable period.
- **Deactivate** – Makes an active target inactive.

This allows administrators to control which configured targets are currently applicable.

## Target Tracking

Targets configured in Target Management are used to measure revenue performance at the applicable level.

For example:

- A **User** target can be used to track an individual user's revenue performance.
- A **Team** target can be used to track team-level revenue performance.
- An **Organization** target can be used to track overall organizational revenue performance.

Target information can also be used by the system for performance monitoring and reporting.

## Target History

Previously configured targets remain available for historical reference.

This allows administrators to review targets from completed financial periods and understand how targets were configured across different periods.

Completed targets remain **read-only** to preserve the historical target information.