---
sidebar_position: 1
title: Lead Import
description: Learn how to import Lead records into SalesAstra using CSV or Excel files, map fields, validate data, manage duplicates, and review import results.
---

# Lead Import

The **Lead Import** feature allows administrators and authorized users to import lead records into SalesAstra using **CSV or Excel (XLSX)** files.

This feature helps organizations migrate existing lead data from spreadsheets or other CRM systems without manually creating each Lead.

During the import process, users can:

- Map file columns to SalesAstra fields.
- Validate the imported data.
- Identify duplicate Leads.
- Assign Lead ownership.
- Review the import preview.
- Monitor import progress.
- Review import results and errors.

## Importing Leads

To import Leads:

1. Open the **Settings** 
2. Select **CRM Configuration** -> **Leads**
3. Select the **Import** option.

![lead-Import](/img/Configure/LeadImport.png)

4. Upload a CSV or XLSX file containing the Lead data.
5. Map the file columns to the corresponding SalesAstra fields.
6. Review the validation results and import preview.
7. Resolve any errors or invalid records, if required.
8. Confirm the import.
9. Monitor the import status from the import progress or import history.

:::note
Users must have the required permission to import Leads.
:::

---

## Supported File Formats

Lead data can be imported using:

- **CSV**
- **XLSX (Excel)**

The uploaded file must contain column headers so that the system can identify and map the Lead information.

The system validates the uploaded file for issues such as:

- Unsupported file format
- Empty file
- Corrupted file
- Duplicate column headers
- Invalid file encoding
- File size exceeding the supported limit

---

## Field Mapping

After uploading the file, SalesAstra displays the columns detected in the uploaded file.

Map each file column to the corresponding SalesAstra field.

![mapping](/img/Configure/Mapping.png)

For example:

| File Column | CRM Field |
|---|---|
| **First Name** | Lead Name |
| **Email Address** | Email |
| **Phone number** | Contact Number |
| **Company** | Company Name |
| **Lead Source** | Lead Source |
| **Sales Owner** | Owner |

Fields that are not required can be left unmapped.

---

## Standard Fields

Lead imports can include standard Lead fields such as:

- Lead Name
- Company Name
- Email
- Phone
- Mobile
- Lead Source
- Status
- Owner
- Industry
- Address
- City
- State
- Country
- Website
- Annual Revenue
- Description

:::note
The exact fields available for mapping may depend on the configuration of the workspace.
:::

---

## Custom Fields

SalesAstra also supports importing data into **custom Lead fields** configured by the organization.

Supported custom field types include:

- Text
- Number
- Currency
- Date
- Date Time
- Checkbox
- Picklist
- Multi Select Picklist
- Lookup, where applicable

Only active custom fields available for Leads are shown for mapping.

For example, if an organization has created a custom field named **Customer Segment**, a file column containing customer segment information can be mapped to that field.

---

## Automatic Field Mapping

SalesAstra can automatically suggest field mappings based on the column names in the uploaded file.

For example:

- Email Address → **Email**
- Mobile Number → **Mobile**
- Company → **Company Name**

Review the suggested mappings before proceeding with the import.

You can modify any automatically suggested mapping if it does not match the intended SalesAstra field.

---

## Data Validation

Before importing the records, SalesAstra validates the mapped data.

Validation can include:

- Mandatory fields
- Data types
- Email format
- Phone format
- Date format
- Currency format
- Picklist values
- Custom field values

Records that do not satisfy the required validation rules are marked as invalid.

### Mandatory Fields

All system-required fields and organization-configured mandatory custom fields must contain valid values.

For example, if a custom Lead field is configured as mandatory, every imported Lead must contain a valid value for that field.

### Picklist Validation

Values imported into Lead picklist fields must match the values configured in SalesAstra.

For example, if the configured Lead Status values are:

- New
- Contacted
- Qualified
- Converted

an imported value such as **In Progress** is flagged as invalid if it is not configured as an available value.

The same validation applies to:

- Lead Status
- Lead Source
- Custom Picklists
- Multi Select Picklists

---

## Duplicate Detection

SalesAstra checks imported records for potential duplicate Leads using the configured matching criteria.

Duplicate matching can be based on:

- Email
- Phone
- Mobile
- Email + Phone

When duplicates are identified, the import process can handle them according to the selected duplicate action.

Available options include:

- **Skip Duplicate** – Do not import the duplicate record.
- **Update Existing Lead** – Update the existing Lead with the imported information.
- **Create New Lead** – Import the record as a new Lead.
- **Review Before Import** – Review duplicate records before proceeding.

:::note
Duplicate handling depends on the duplicate rules and options available in the workspace.
:::

---

## Lead Ownership

Lead ownership can be assigned during import.

You can map an owner column from the file to the **Owner** field.

The imported owner must correspond to an existing SalesAstra user.

If an owner cannot be matched, the record is flagged according to the import validation rules.

A default owner can also be assigned where supported.

---

## Tags

Tags can be imported along with Lead records.

The import supports:

- Existing Tags
- Multiple Tags
- Automatically creating Tags, when enabled

For example:

> Hot Lead, Enterprise, Webinar

can be imported as multiple tags for the Lead.

Invalid or unavailable tags are handled according to the configured import behavior.

---

## Lead Status and Lead Source

Lead **Status** and **Source** can be imported from the file.

The imported values must match the values configured in SalesAstra.

For example:

| Field | Imported Value |
|---|---|
| **Lead Status** | New |
| **Lead Source** | Website |

If an imported value does not match a configured value, the record is flagged during validation.

---

## Import Preview

Before the import begins, SalesAstra displays an **Import Preview**.

The preview provides a summary of the records being processed, including:

- Total Records
- Valid Records
- Invalid Records
- Duplicate Records
- Records to Create
- Records to Update
- Records to Skip

Review the preview carefully before confirming the import.

The import starts only after the user explicitly confirms the operation.

---

## Import Processing

Lead imports are processed in the background.

After confirming the import, you can continue using SalesAstra while the import is being processed.

An import can have one of the following statuses:

- **Queued** – The import is waiting to be processed.
- **Processing** – The system is currently processing the records.
- **Completed** – All applicable records were processed successfully.
- **Completed with Errors** – The import completed, but some records could not be imported.
- **Failed** – The import could not be completed.
- **Cancelled** – The import was cancelled.

---

## Import Summary

After processing is complete, the system displays an import summary.

The summary includes:

- **Total Records**
- **Successfully Imported**
- **Updated**
- **Skipped**
- **Failed**
- **Processing Time**

This allows you to quickly determine the outcome of the import.

---

## Error Report

If some records fail validation or cannot be imported, you can download an **Error Report**.

The Error Report helps identify records that could not be processed and provides information that can be used to correct the source data before attempting another import.

---

## Import History

SalesAstra maintains a history of Lead imports.

The import history includes:

- File Name
- Imported By
- Import Date & Time
- Module
- Total Records
- Success Count
- Failure Count
- Import Status
- Error Report

Where available, you can download the error report associated with an import.

Import history helps administrators track previous data migration activities and review the results of completed imports.

---

## Import Best Practices

Before importing Leads:

- Ensure the file contains valid column headers.
- Remove unnecessary or duplicate columns.
- Verify mandatory fields are populated.
- Check email and phone formats.
- Ensure Lead Status and Lead Source values match SalesAstra configuration.
- Verify that owner values correspond to existing users.
- Check duplicate records before importing.
- Review the Import Preview carefully.
- Download and review the Error Report when an import completes with errors.

:::tip
For large Lead databases, it is recommended to validate a smaller sample file first before importing the complete dataset.
:::