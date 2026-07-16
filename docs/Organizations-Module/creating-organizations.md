---
sidebar_position: 2
title: Creating Organizations
description: Learn how to create Organization records in Sales Astra CRM.
---

# Creating Organizations

The **Create Organization** feature allows users to add new company or business account records to the CRM. Organizations can be created directly from the **Organizations** module or inline while creating **Contacts** and **Deals**.

:::note
The **Organization Creation Form** is highly configurable and can be customized by administrators to meet specific business requirements. Depending on your organization's CRM configuration, you may see additional fields, custom sections, or organization-specific attributes beyond those described in this guide.
:::

---

## Organization Creation Entry Points

Organizations can be created from the following locations within Sales Astra CRM:

- Create Organization from the Organizations Module
- Create Organization During Contact Creation
- Create Organization During Deal Creation

---

## 1. Create Organization from the Organizations Module

The **Organizations** module is the primary location for managing company and business account records.

### Steps

1. Navigate to **Organizations** from the main navigation menu.
2. Click **Create Organization**.
3. Enter the required organization information.
4. Complete any additional fields configured for your organization.
5. Click **Save**.

This method is typically used when users need to create a new business account directly within the CRM.

![Create Organization](/img/Organizations/CreateOrganization.png)

---

## 2. Create Organization During Contact Creation

Users can create an Organization while creating a Contact if the required company does not already exist in the CRM.

### Steps

1. Navigate to the **Contacts** module.
2. Click **Create Contact**.
3. Locate the **Organization** field.
4. Click the **+ (Create Organization)** icon.
5. Enter the required Organization details.
6. Click **Save**.
7. Continue creating the Contact.

The newly created Organization is automatically associated with the Contact.


---

# 3. Create Organization During Deal Creation

Organizations can also be created while creating a Deal.

## Steps

1. Navigate to the **Deals** module.
2. Click **Create Deal**.
3. Locate the **Organization** field.
4. Click the **+ (Create Organization)** icon.
5. Enter the required Organization information.
6. Save the Organization.
7. Continue creating the Deal.

The newly created Organization becomes available for selection within the Deal.

---

## Organization Creation Form

The **Organization Creation** form captures all essential business information required to manage customer accounts.

---

### Basic Information

This section captures the core business details of the Organization.

| Field | Description |
|--------|-------------|
| **Organization Name*** | Name of the company or business entity. |
| **Owner*** | User responsible for managing the Organization. |
| Industry | Industry or market segment in which the Organization operates. |
| Company Size | Indicates the size of the Organization based on predefined categories. |
| Revenue Band | Revenue range associated with the Organization. |

> **Note**
>
> **Organization Name** and **Owner** are mandatory fields.

---

### Contact Details

This section stores the primary communication information for the Organization.

| Field | Description |
|--------|-------------|
| Website | Official company website. |
| Primary Email | Main business email address. |
| Primary Phone | Primary contact number for the Organization. |
| LinkedIn Company URL | Company's LinkedIn profile URL. |

---

### Address Information

Use this section to maintain the Organization's business address.

| Field | Description |
|--------|-------------|
| Flat / House No. / Building | Building or premises information. |
| Street | Street address of the Organization. |
| City | City where the Organization is located. |
| State / Province | State or province. |
| Zip / Postal Code | Postal or ZIP code. |
| Country / Region | Country or geographical region. |

---

### Additional Information

Store supplementary information related to the Organization.

| Field | Description |
|--------|-------------|
| Tags | Labels used to categorize and organize Organizations. |
| Notes | Additional comments or business-related information. |

---

## Ownership Assignment

Every Organization must have an assigned owner.

The owner is responsible for managing the account.

During Organization creation:

- The current user may be assigned automatically.
- Ownership can also be selected manually.
- Ownership helps ensure accountability and proper account management.

---

## Duplicate Detection

To maintain clean and reliable account data, the CRM automatically performs duplicate checks before an Organization is saved.

### Duplicate Validation Rules

The system checks for:

- Existing Organizations with the same **Organization Name** (case-insensitive).
- Existing Organizations with the same **Website URL**, when a website is provided.

When a potential duplicate is identified, the system displays relevant information about the existing Organization, including:

- Organization Name
- Website
- Owner
- Linked Contacts
- Linked Deals

Depending on permissions, users may:

- Open the existing Organization record.
- Merge records.
- Continue creating a new Organization.

This process helps reduce duplicate company records and improves overall data quality.

---

## Relationship Management

Organizations act as the central account record for related CRM entities.

After creation:

- An Organization can be linked to multiple Contacts.
- An Organization can be linked to multiple Deals.
- Contacts created under an Organization automatically maintain the relationship.
- Deals associated with an Organization provide complete account-level visibility.

When an Organization is created during Contact or Deal creation, the relationship is established automatically without requiring additional configuration.

---

## Source Tracking and Audit History

The CRM automatically records how an Organization was created.

Possible creation sources include:

- Manual Entry
- Import
- Contact Creation
- Deal Creation

Source information is maintained by the system for auditing and reporting purposes and cannot be modified manually after creation.

---

## Saving the Organization

After entering the required information:

1. Review all entered details.
2. Verify the Organization Name and Owner.
3. Confirm the communication and address information.
4. Click **Save**.

The Organization is successfully created and becomes available for association with Contacts, Deals, Activities, and other CRM records.