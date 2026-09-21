---
sidebar_position: 1
title: Support
description: Learn how to create, manage, and track support cases in SalesAstra.
---

# Support

The **Support** module in SalesAstra provides a centralized interface for tenant users to raise and manage support requests directly within the application. Users can report product issues, submit service requests, suggest new features, and raise general support inquiries without relying on external communication channels.

After authentication, authorized tenant users can create tickets, view existing tickets, communicate with the SalesAstra support team, upload supporting files, and track ticket progress.

## Cases

The **Cases** section provides a centralized view of support cases raised by users within the tenant organization.

To access cases:

**Navigate to → Support → Cases**

The Cases page displays the available support cases and provides options to search, filter, create, and manage cases.

## Case Listing

The case listing displays the following information:

| Field | Description |
|---|---|
| **Case** | Unique Case/Ticket number assigned to the support request. |
| **Subject** | Brief summary of the issue or request. |
| **Product Area** | SalesAstra module or area associated with the case. |
| **Status** | Current status of the support case. |
| **Created By** | User who created the case. |
| **Created** | Date and time when the case was created. |
| **Last Activity Date** | Date and time of the most recent activity on the case. |

Click the **Case Number** to open the case and view its details.

## Case Views

Cases can be organized using the available views:

- **All Cases** – Displays all cases accessible to the user.
- **Open Cases** – Displays cases that are currently open.
- **Resolved Cases** – Displays cases that have been resolved.
- **Closed Cases** – Displays cases that have been closed.

These views help users quickly identify active and historical support requests.

## Searching Cases

The **Search** option allows users to quickly locate a specific case.

Users can search using:

- Case Number
- Subject

For example, entering `TICK-0004` can be used to locate a specific case.

## Filtering Cases

Users can refine the case list using the available filters.

### Standard Filters

- Ticket Type
- Product Area
- Status
- Create Date
- Last Activity Date

### Advanced Filters

Use **Advanced Filters** to apply additional filtering criteria available for the support case.

Multiple filters can be applied together to narrow down the displayed cases.

## Creating a Support Case

Users can create a new support case using the **New Case** button.

### To Create a Case

1. Navigate to **Support → Cases**.
2. Click **New Case**.
3. Enter the required case information.
4. Provide workaround information, if applicable.
5. Add supporting attachments, if required.
6. Review the entered information.
7. Click **Create Ticket**.

After successful creation, SalesAstra generates a unique case number for the request.

## Case Information

The **Create Support Ticket** form contains the **Case Information** section.

### Ticket Type

Select the type of support request.

Available options include:

- Product Issue
- Service Request
- Feature Request
- Other

### Product Area

Select the SalesAstra product area associated with the request.

Available product areas include:

- Leads
- Contacts
- Accounts
- Deals
- Activities
- Campaigns
- Pulse Inbox
- Astra AI
- Reporting
- Integrations
- Billing
- User Management
- Other
- Not Applicable

:::note
Product Area can be set to **Not Applicable** when the Ticket Type is **Other**, where applicable.
:::

### Impacted Users

Specify how many users are affected by the reported issue.

Available options are:

- Single User
- Multiple Users
- Entire Organization
- Not Sure

### Contact

The **Contact** field associates the support case with the relevant contact from the organization.

Select the appropriate contact when required.

### Subject

Enter a brief summary of the issue or request.

**Example:**

> Unable to reopen a Deal

### Description

Provide detailed information about the issue or request.

For product issues, include relevant information such as:

- What happened.
- What was expected.
- Steps to reproduce the issue.
- Error messages, if any.
- Any other information useful to the support team.

**Example:**

> The Deal was accidentally closed and cannot be reopened. When attempting to reopen the Deal, the system does not allow the status to be changed.

## Workaround Information

The **Workaround Information** section allows users to indicate whether they have found a temporary solution to the reported issue.

### Workaround Available

Select one of the following:

- **Yes**
- **No**
- **Not Sure**

If **Yes** is selected, users can provide additional information in **Workaround Details**.

### Workaround Details

Describe the temporary workaround used to address or bypass the issue.

**Example:**

> The issue can temporarily be avoided by creating a new Deal instead of reopening the existing Deal.

The workaround details field is optional.

## Attachments

The **Attachments** section allows users to provide additional files that can help the support team investigate the case.

Users can upload:

- Screenshots
- Error logs
- Videos
- Documents
- Other relevant supporting files

### Attachment Actions

Before submitting the case, users can:

- Upload files.
- View uploaded files.
- Remove uploaded files.

Attachment size and file restrictions are controlled by the applicable platform configuration.

## Viewing Case Details

Click a case number from the Cases listing to open the detailed case view.

The case detail page provides information such as:

- Case Number
- Ticket Type
- Product Area
- Contact
- Subject
- Description
- Impacted Users
- Workaround Information
- Status
- Created Date
- Last Activity Date
- Attachments

Users can review the complete information associated with the support request from the case detail page.

## Case Conversation

The case provides a conversation thread between the tenant user and the SalesAstra support team.

The conversation maintains a chronological history of communication related to the case.

The conversation may contain:

- Customer messages
- Support team responses
- System-generated status updates

Each communication is timestamped.

## Reply to a Case

Users can provide additional information through the case conversation.

### To Reply

1. Open the required case.
2. Enter the message in the reply field.
3. Attach supporting files, if required.
4. Submit the reply.

The response is added to the case conversation history.

:::note
A reply cannot be submitted without entering a message.
:::

## Case Status

The status indicates the current progress of the support case.

| Status | Description |
|---|---|
| **Open** | The case has been created and is awaiting support action. |
| **In Progress** | The support team is actively working on the case. |
| **Waiting for customer** | Additional information or action is required from the customer. |
| **Resolved** | The reported issue or request has been addressed. |
| **Closed** | The case has been completed and closed. |

Status changes are displayed in the case timeline where applicable.

## Notifications

Users can receive notifications for important case activities.

Notifications may be generated when:

- A case is created.
- A case is updated.
- A support team response is received.
- The case status changes.
- The case is resolved.
- The case is closed.

Notifications are delivered through the SalesAstra notification framework.

## Case Visibility

Case visibility is controlled by the organization's configured access permissions.

Authorized users may be able to:

- View organization cases.
- Search cases.
- View case details.
- Review case conversations.
- Participate in case conversations.

Users can only access cases permitted by their assigned organization-level permissions.

## Managing Resolved and Closed Cases

### Resolved Cases

Resolved cases remain available for users to review and reference.

Users can:

- View case information.
- Review the conversation history.
- View available attachments.
- Review the resolution provided by the support team.

### Closed Cases

Closed cases remain available as historical records.

Users can view:

- Case details
- Previous conversations
- Attachments
- Status history

:::note
Customers cannot reopen a closed case. If further assistance is required, create a new case.
:::

## Validation Rules

The following fields are mandatory while creating a support case:

- Ticket Type
- Product Area, except when Ticket Type is Other
- Impacted Users
- Subject
- Description

Additional validations include:

- Workaround Details can be provided only when **Workaround Available** is set to **Yes**.
- Attachment size must comply with configured platform limits.
- A case reply cannot be submitted without a message.
- Uploaded attachments must comply with configured file restrictions.

## Support Case Lifecycle

A support case generally follows this lifecycle:

**Create Case → Open → In Progress → Waiting for Customer → Resolved → Closed**

The **Waiting for Customer** stage is used when the support team requires additional information from the tenant user.

The user can track the case throughout its lifecycle from the **Cases** section and review updates through the case conversation and status history.

## Common Support Scenarios

### Product Issue

A user encounters an error while converting a Lead into a Deal.

The user can:

1. Create a new case.
2. Select **Product Issue**.
3. Select **Deals** as the Product Area.
4. Describe the issue.
5. Attach a screenshot or error log.
6. Submit the case.
7. Track responses and status updates.

### Service Request

An administrator requires assistance with user access configuration.

The administrator can create a **Service Request**, select **User Management**, provide the required details, and track the case until completion.

### Feature Request

A customer requires a new reporting capability.

The customer can create a **Feature Request**, select **Reporting**, describe the requested functionality, and track subsequent updates from the support team.

### Integration Issue

A customer experiences an issue with a WhatsApp integration.

The user can create a **Product Issue** under **Integrations**, provide the issue details, attach relevant evidence, and communicate with the support team through the case conversation.

### Billing Inquiry

A customer requires clarification regarding subscription billing.

The customer can create a support case under **Billing**, provide the relevant information, and track the response from the support team.

## Important Notes

- Support cases must be created from within SalesAstra.
- Each case receives a unique case number.
- Case visibility depends on the user's organization-level permissions.
- Closed cases remain available as historical records.
- Closed cases cannot be reopened by customers.
- A new case must be created when additional assistance is required for a closed case.
- If a user who created a case becomes inactive, the case and its conversation history remain available for organizational reference.