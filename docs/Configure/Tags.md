---
title: Tags
sidebar_position: 4
---
# Tags Management

## Overview

Tags allow administrators to create and manage reusable labels that can be applied across different CRM records. Tags help users categorize, organize, search, filter, and report on records more effectively without creating additional fields or modifying existing data structures.

Tags provide a flexible way to group records based on business needs and can be applied to Leads, Contacts, Organizations, Deals, and Knowledge Base articles.

:::note
Only Administrators and authorized users can create, edit, deactivate, or manage tags.
:::

---

## Accessing Tags

Navigate to:

**Settings → Data Management → Tags**

The Tags screen displays all configured tags along with:

- Tag Name
- Applicable Modules
- Usage Count
- Status
- Created By
- Created Date

Administrators can:

- Create new tags
- Edit existing tags
- Deactivate unused tags
- Review tag usage across the CRM

---

## Purpose of Tags

Tags help organizations:

- Categorize CRM records
- Segment data for reporting
- Improve record searchability
- Create filtered views
- Support workflow automation
- Track business-specific classifications

:::note
Unlike standard fields, tags are dynamic and can be assigned or removed as business needs change.
:::

---

## Creating a Tag

To create a new tag:

1. Navigate to **Settings → Data Management → Tags**
2. Click **Create Tag**
3. Enter the required information
4. Select the applicable modules
5. Save the tag

Once created, the tag becomes available for users within the selected modules.

---

![Tags](/img/Configure/Tags.png)

## Tag Information

### Tag Name

The name used to identify the tag throughout the CRM.

#### Examples

- Hot Lead
- Cold Lead
- Enterprise
- VIP Customer
- Renewal Opportunity
- Strategic Account

---

### Description

Administrators can optionally provide a description explaining the purpose of the tag.

#### Example

> Used to identify leads that require immediate follow-up from the sales team.

Descriptions help maintain consistency when multiple users manage tags.

---

### Applicable Modules

Administrators can specify where a tag can be used.

#### Supported Modules

| Module | Purpose |
|----------|----------|
| Leads | Categorize and prioritize prospects |
| Contacts | Classify customers and stakeholder records |
| Organizations | Segment companies and accounts |
| Deals | Group sales opportunities |
| Knowledge Base | Organize articles and documentation |

:::note
A tag can be assigned to one or multiple modules.
:::

#### Example

**Tag:** Hot Lead

**Applicable To:**

- Leads
- Deals

This allows the same tag to be used consistently across related records.

---

## Tag Usage Across CRM

### Leads

Tags help sales teams prioritize and segment leads.

#### Examples

- Hot Lead
- Cold Lead
- Marketing Qualified
- Sales Qualified
- Event Attendee

#### Common Uses

- Lead prioritization
- Campaign tracking
- Follow-up planning
- Sales segmentation

---

### Contacts

Tags help classify contacts based on roles, importance, or engagement.

#### Examples

- Decision Maker
- Influencer
- Existing Customer
- VIP Customer
- Partner Contact

#### Common Uses

- Relationship management
- Customer segmentation
- Personalized communication

---

### Organizations

Tags help group companies and business accounts.

#### Examples

- Enterprise
- SMB
- Strategic Account
- Partner
- Prospect

#### Common Uses

- Account classification
- Territory planning
- Key account management

---

### Deals

Tags help organize opportunities throughout the sales pipeline.

#### Examples

- High Value
- Renewal
- Upsell
- Cross Sell
- At Risk

#### Common Uses

- Pipeline segmentation
- Revenue forecasting
- Opportunity prioritization

---

### Knowledge Base

Tags help organize and categorize documentation.

#### Examples

- Product Documentation
- FAQ
- Troubleshooting
- Training
- Onboarding

#### Common Uses

- Article categorization
- Improved search experience
- Content organization

---

## Searching and Filtering Using Tags

Tags can be used throughout the CRM to quickly locate records.

#### Examples

- View all Hot Leads
- Find all Renewal Deals
- Display Enterprise Accounts
- Search VIP Customers

Users can apply one or multiple tags as filters when viewing records.

---

## Tag Usage Count

Each tag displays a **Usage Count** value.

The usage count indicates the number of records currently associated with that tag.

Administrators can use this information to:

- Identify frequently used tags
- Remove unused tags
- Maintain clean data standards

---

## Editing Tags

Administrators can modify:

- Tag Name
- Description
- Applicable Modules
- Status

:::note
Changes apply immediately to all records using the tag.
:::

---

## Deactivating Tags

Tags that are no longer needed can be deactivated.

### When a Tag is Deactivated

- Existing tagged records remain unchanged
- Users cannot assign the tag to new records
- Historical reporting remains intact

This prevents accidental data loss while maintaining data integrity.

---

## Best Practices

### Keep Tags Consistent

Create standardized naming conventions across the organization.

#### Example

Use:

- Hot Lead
- Warm Lead
- Cold Lead

Instead of creating multiple variations for the same meaning.

---

### Avoid Excessive Tags

Too many tags can make filtering and reporting difficult.

Create tags only when they provide meaningful business value.

---

### Review Usage Periodically

Regularly review:

- Unused tags
- Duplicate tags
- Outdated classifications

This helps keep CRM data clean and organized.

---

## Security and Permissions

Only Administrators or authorized users can:

- Create tags
- Edit tags
- Deactivate tags
- Manage tag configurations

Standard users can apply available tags to records based on their permissions.

---

## Audit Information

The system maintains the following information for every tag:

- Created By
- Created Date
- Status
- Usage Count

This provides visibility into tag ownership and adoption across the organization.