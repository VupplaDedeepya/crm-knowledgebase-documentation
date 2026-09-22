---
sidebar_position: 10
title: Activities Import
description: Learn how to import historical Tasks, Notes, Emails, Meetings, and Attachments into SalesAstra and link them to Leads, Deals, or Contacts.
---

# Activities Import

The **Activities Import** feature allows administrators and authorized users to migrate historical customer engagement data into SalesAstra.

This helps retain previous interactions and ensures that users have access to relevant customer history after migrating from another CRM or spreadsheet.

The import supports:

- **Tasks**
- **Notes**
- **Emails**
- **Meetings**
- **Attachments**

Each engagement can be linked to its corresponding **Lead, Deal, or Contact**.

---

## Accessing Activities Import

To import historical engagement data:

1. Open **Settings -> CRM Configuration**.
2. Select **Activities**.
3. Open the **Engagement Import** tab.

![Activities-Import](/img/Configure/ActivitiesImport.png)

4. Follow the import steps:
   1. **Type & Lookup**
   2. **Upload File**
   3. **Map Fields**
   4. **Preview & Match**
5. Review the import results and track the import progress.

You can also select **Import History** to view previous engagement imports.

---

## Type & Lookup

The **Type & Lookup** step allows you to specify the type of historical engagement you want to import and how the related parent record should be identified.

### Engagement Type

Select the type of engagement you want to import:

- **Tasks** – Calls, tasks, to-dos, and reminders.
- **Notes** – Notes associated with Leads, Deals, or Contacts.
- **Emails** – Historical email threads and email logs.
- **Meetings** – Calendar events and logged meetings.
- **Attachments** – Files, documents, and other supported attachments.

### Parent Record Module

Select the module containing the record to which the imported engagement should be linked.

Supported parent modules include:

- Lead
- Deal
- Contact

### Parent Lookup Identifier

Select the identifier that SalesAstra should use to match each imported engagement with its parent record.

Available identifiers may include:

- **Email Address**
- **Record ID**
- **Lead SID**
- **Record Name / Title**
- **Phone Number**

Selecting an appropriate identifier helps ensure that historical engagements are linked to the correct record.

---

## Upload File

After selecting the engagement type and lookup identifier, upload the file containing the historical engagement data.

The import supports:

- **CSV**
- **XLSX (Excel)**

The uploaded file should contain the information required to identify the parent record and the details of the engagement.

---

## Map Fields

After uploading the file, map the columns from the uploaded file to the corresponding SalesAstra fields.

The available fields depend on the selected **Engagement Type**.

For example, an imported Task may contain information such as:

- Subject
- Description
- Status
- Priority
- Owner
- Due Date
- Start Date
- End Date

For Notes, the available fields may include:

- Note Title
- Note Content
- Created By
- Created Date

The system can also support applicable custom fields.

Review the mappings before proceeding to the next step.

---

## Preview & Match

The **Preview & Match** step allows you to review how the imported engagement records will be associated with existing SalesAstra records.

The system checks the selected **Parent Lookup Identifier** and attempts to find the corresponding Lead, Deal, or Contact.

The preview can identify:

- Records with a matching parent
- Records without a matching parent
- Invalid records
- Duplicate records
- Records ready for import

If a parent record cannot be matched, the affected engagement cannot be correctly associated and is reported for review.

---

## Import Processing

After reviewing the preview and confirming the import, the historical engagement data is processed in the background.

Import processing can have the following statuses:

- **Queued** – Waiting to be processed.
- **Processing** – Import is currently in progress.
- **Completed** – Import completed successfully.
- **Completed with Errors** – Import completed with some records that could not be imported.
- **Failed** – Import could not be completed.
- **Cancelled** – Import was cancelled.

You can continue using SalesAstra while the import is being processed.

---

## Import Summary

After processing is complete, the system provides a summary of the imported engagement data.

The summary can include:

- Total Records
- Successfully Imported
- Failed Records
- Activities Imported
- Notes Imported
- Emails Imported
- Meetings Imported
- Attachments Imported
- Processing Duration

---

## Error Report

If some records cannot be imported, an error report can be used to identify the affected records.

The report includes information such as:

- Row Number
- Engagement Type
- Parent Record
- Error Description
- Suggested Resolution

You can correct the affected data and import the records again.

---

## Import History

The **Import History** option allows you to review previous historical engagement imports.

The history provides information such as:

- Import Type
- File Name
- Imported By
- Import Date
- Total Records
- Success Count
- Failure Count
- Processing Status
- Error Report

This helps administrators track historical engagement migration activities and review the outcome of previous imports.

:::note
Imported historical engagement data is associated with the matched parent record, allowing users to access relevant customer interaction history from the corresponding record.
:::