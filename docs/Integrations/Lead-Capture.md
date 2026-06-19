---
title: Lead-Capture
sidebar_position: 1
---
# Integrations

## Overview

The **Integrations** section allows administrators to connect external systems and data sources with SalesAstra. These integrations help automate data collection, streamline workflows, and ensure that lead information enters the CRM without manual effort.

## Lead Capture

### Overview

Lead Capture enables organizations to automatically collect lead information from external websites, landing pages, and web forms directly into SalesAstra CRM.

Instead of manually entering lead details, administrators can configure a lead capture form, map website form fields to CRM fields, and generate an embed code that can be added to their website.

When a visitor submits a form on the website, the embedded script captures the configured information and automatically creates a Lead record in SalesAstra CRM.

---

## Key Benefits

- Automatically capture leads from websites and landing pages.
- Eliminate manual data entry.
- Map website form fields to CRM fields.
- Assign default lead statuses and sources.
- Generate ready-to-use embed code for website integration.
- Support debugging and validation during implementation.
- Securely identify the organization through a unique tenant configuration.

---

## Accessing Lead Capture

1. Navigate to **Settings**.
2. Expand **Integrations**.
3. Select **Lead Capture**.
4. Click **Create New Configuration** to create a new lead capture setup.

---

## Creating a Lead Capture Configuration

A Lead Capture Configuration defines how data from an external website form will be mapped and submitted to SalesAstra CRM.

### Step 1: Enter Configuration Details

Complete the configuration settings shown in the Configuration section.

| Field | Description |
|---------|-------------|
| Configuration Name | Name used to identify the lead capture configuration |
| Form Class | CSS class of the website form that will be monitored by the script |
| Button Class | CSS class of the form submission button |
| Default Lead Status | Status automatically assigned to captured leads |
| Default Source | Source assigned to incoming leads (e.g., Website, Landing Page, Campaign) |
| Debug Mode | Enables browser console logging for troubleshooting |
| React Form | Enable when integrating with React-based forms |

### Example Configuration

| Field | Value |
|---------|---------|
| Configuration Name | Website Form #1 |
| Form Class | lead-form-class |
| Button Class | submit-lead-button |
| Default Lead Status | New |
| Default Source | Website |

---

![Lead-Capture](/img/Integrations/Lead-Capture.png)

## Field Mapping

Field Mapping determines how information submitted through the website form is stored inside SalesAstra CRM.

Each website field must be mapped to a corresponding CRM field.

### Default Mapping Examples

| Website Field | CRM Field |
|---------------|-----------|
| Create Date | Create Date |
| Email | Email |
| Full Name | Full Name |

---

### Adding Additional Fields

1. Click **+ Add Field**.
2. Select the CRM field to be populated.
3. Enter the corresponding website field name.
4. Save the mapping.

### Supported Use Cases

Organizations can map commonly used fields such as:

- First Name
- Last Name
- Full Name
- Email Address
- Phone Number
- Company Name
- Message
- Lead Source
- Custom CRM Fields

:::note
This flexibility allows organizations to integrate forms from different websites without changing their existing form structure.
:::

---

## Embed Code Generation

Once configuration and field mapping are completed, SalesAstra automatically generates a unique embed script.

The generated script contains:

- CRM tenant identification
- Form and button selectors
- Field mapping configuration
- Secure connection details required to submit lead data

---

### Copying the Embed Code

1. Click **Copy Code**.
2. Paste the copied script into the HTML page containing the website form.
3. Save and publish the website.

The embedded script will begin monitoring configured forms and automatically send lead data to SalesAstra whenever a visitor submits the form.

:::warning
The embed code should be added only to trusted websites owned and managed by your organization.
:::

---

## How Lead Capture Works

The lead capture process follows the workflow below:

1. A visitor fills out a website form.
2. The embedded SalesAstra script detects the form submission.
3. Field values are extracted from the form.
4. Values are mapped to CRM fields based on the configuration.
5. Basic validation is performed.
6. Data is securely submitted to SalesAstra.
7. A new Lead record is created automatically.
8. The lead appears in the Leads module for further qualification and follow-up.

---

## Debug Mode

Debug Mode assists administrators during implementation and testing.

### When Enabled

- Form detection events are logged.
- Field mapping details are displayed.
- Submission success messages are shown.
- Error messages are logged when issues occur.

:::note
Debug information is available in the browser's developer console.
:::

### Typical Uses

- Verifying form detection
- Testing field mappings
- Troubleshooting submission failures
- Confirming successful lead creation

---

## Managing Captured Leads

Once submitted successfully, captured leads are automatically available in the **Leads Module**.

Users can:

- View lead details
- Assign lead owners
- Update lead status
- Convert qualified leads into deals
- Trigger workflows and automations
- Track lead progression through the sales pipeline

---

## Best Practices

- Use meaningful configuration names for easy identification.
- Map all mandatory CRM fields before deployment.
- Test configurations using Debug Mode before publishing.
- Verify field mappings whenever website forms are modified.
- Regularly review lead sources to ensure accurate reporting.
- Use consistent naming conventions across forms and CRM fields.