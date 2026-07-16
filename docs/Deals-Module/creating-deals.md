---
sidebar_position: 2
title: Creating Deals
description: Learn how to create and manage Deal records in Sales Astra CRM.
---

# Creating a Deal

The **Deal Creation** form allows users to create and manage new business opportunities within the CRM system.

Deals help sales teams track potential revenue, manage pipeline stages, and monitor customer opportunities throughout the sales lifecycle.

---

## How to Create a Deal

### Step 1: Navigate to Deals Module

- Open the **Deals** module from the sidebar.
- Click the **Create Deal** button.

This opens the **Deal Creation** form.

![Create Deal](/img/Deals/CreateDeal.png)

---

## Configurable Deal Creation Form

The Deal Creation form is fully configurable by CRM administrators.

Administrators can:

- Add or remove fields from the Deal Creation form.
- Configure mandatory and optional fields.
- Create custom fields based on business requirements.
- Organize fields into sections.
- Rearrange the order of sections and fields.
- Control which fields are visible to users.

As a result, the fields displayed in your Deal Creation form may vary depending on your organization's CRM configuration.

> **Note**
>
> The examples provided below represent common fields that may be available in the Deal Creation form. Your CRM administrator may customize the form to meet your business needs.

---

## Common Deal Fields

### Deal Title *

Enter a descriptive name for the business opportunity.

#### Examples

- Mobile App Development Project
- CRM Implementation
- Software Subscription Renewal

#### Validation Rules

- Required field.
- Must contain at least one alphanumeric character.
- Length requirements depend on system configuration.

---

### Buyer Type *

Select the type of buyer associated with the deal.

#### Examples

- Individual
- Business
- Enterprise

---

### Account (Organization)

Select the organization associated with the deal.

Linking a deal to an organization helps maintain complete account-level visibility and reporting.

#### Create Organization from Deal Form

If the required organization does not exist in the dropdown list:

1. Hover over the **Account** field.
2. Click the **+ (Create Organization)** icon.

![create-organization](/img/deals/CreateOrganization.png)

3. Complete the Organization creation form.
4. Save the organization.

The newly created organization becomes available for selection within the deal.

This eliminates the need to leave the Deal Creation screen to create an organization record.

---

### Contact *

Select the primary contact associated with the deal.

The selected contact serves as the main point of communication for the opportunity.

#### Create Contact from Deal Form

If the required contact is not available in the dropdown list:

1. Hover over the **Contact** field.
2. Click the **+ (Create Contact)** icon.

![Create-Contact](/img/deals/CreateContact.png)

3. Complete the Contact creation form.
4. Save the contact.

The newly created contact becomes available for selection within the deal.

This allows users to quickly create missing contacts without interrupting the deal creation process.

---

### Pipeline *

Select the sales pipeline in which the deal will be managed.

Pipelines help organizations track opportunities based on different business processes.

#### Examples

- Sales Pipeline
- Enterprise Pipeline
- Renewal Pipeline
- Real Estate Pipeline

---

### Stage *

Select the current stage of the opportunity within the selected pipeline.

The available stages depend on the pipeline configuration.

#### Example Stages

- Qualification
- Discovery
- Proposal
- Negotiation
- Closed Won
- Closed Lost

---

### Deal Value

Enter the estimated monetary value of the opportunity.

This value is used for forecasting, reporting, and revenue tracking.

---

### Currency

Displays the currency associated with the deal value.

#### Examples

- INR
- USD
- EUR

The available currencies are determined by the CRM configuration.

---

### Status *

Indicates the current status of the deal.

#### Common Statuses

- Open
- Won
- Lost

The available statuses may vary depending on your organization's configuration.

---

### Deal Owner *

Specifies the user responsible for managing the deal.

#### Default Behavior

- The logged-in user may be automatically assigned as the Deal Owner.
- Administrators and managers can reassign ownership when required.

---

### Tags

Tags help categorize and organize deals for easier searching, filtering, and reporting.

#### Example Tags

- Hot Deal
- High Priority
- Enterprise
- Renewal Opportunity

Users can select existing tags or create new tags based on system permissions.

---

### Additional Sections

Depending on your CRM configuration, additional sections may appear in the Deal Creation form.

#### Examples include:

- Property Information
- Product Information
- Financial Details
- Customer Requirements
- Custom Business-Specific Sections

These sections are configurable and may vary across organizations.

---

## Saving the Deal

After entering the required information:

1. Review all entered details.
2. Verify the selected Contact and Organization.
3. Confirm the Pipeline and Stage.
4. Click **Create Deal**.

The deal is created and added to the selected pipeline, where it can be tracked and managed throughout the sales lifecycle.

