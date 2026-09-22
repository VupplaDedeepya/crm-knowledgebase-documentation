---
sidebar_position: 9
title: Organization Import
description: Learn how to import Organization records into SalesAstra using CSV or Excel files, map fields, validate data, manage duplicates, and review import results.
---

# Organization Import

The **Organization Import** feature allows administrators and authorized users to import Organization records into SalesAstra using **CSV or Excel (XLSX)** files.

This feature helps organizations migrate existing company or account data from spreadsheets or other CRM systems while preserving important information such as:

- Organization ownership
- Contact details
- Company information
- Tags
- Notes
- Addresses
- Custom fields

## Importing Organizations

To import Organizations:

1. Open **Settings -> CRM Configuration**.
2. Select **Organizations**.
3. Open the **Import** tab.

![Organizations-Import](/img/Configure/OrganizationsImport.png)

4. Upload a CSV or Excel file containing the Organization data.
5. Map the columns in your file to the corresponding Organization fields.
6. Review the validation results.
7. Review the import summary.
8. Confirm the import.
9. Track the import progress and review the final report.

The Organization Import page guides you through the following steps:

1. **Upload File**
2. **Map Columns**
3. **Validation Preview**
4. **Import Progress**

You can also select **Import History** to review previous Organization imports.

---

## Upload File

Upload a file containing the Organizations you want to import.

SalesAstra supports:

- **CSV**
- **XLSX (Excel)**

The uploaded file should contain column headers so that the system can identify the available Organization information.

The system validates the uploaded file for issues such as:

- Unsupported file format
- Empty files
- Corrupted files
- Duplicate column headers
- Invalid file encoding
- File size exceeding the supported limit

---

## Map Columns

After uploading the file, SalesAstra displays the Organization fields and allows you to map each field to a column from the uploaded file.

![field-mapping](/img/Configure/OrganizationMapping.png)

The mapping screen is divided into:

- **Required Fields**
- **Optional Fields**

Each field displays:

- **Field** – The Organization field in SalesAstra.
- **Imported Column** – The column from your file mapped to the field.
- **Default Value** – A value that can be applied to records when the field is not mapped to an imported column.

### Required Fields

The required fields must be mapped or provided with a valid default value before you can continue with validation.

Based on the Organization Import configuration shown, the required fields include:

#### Organization Name

Enter the name of the Organization being imported.

For example:

- ABC Technologies
- Global Solutions Pvt Ltd

#### Owner

Assign the Organization to an existing SalesAstra user.

The owner can be mapped from a column in the imported file or provided using a default value where supported.

:::note
Required fields must contain valid values before the import can proceed.
:::

---

## Custom Fields

If your organization has configured custom fields for Organizations, active custom fields can also be available for import and mapping.

You can map columns from the uploaded file to the corresponding custom fields.

The imported values must match the configured field type and, where applicable, the available picklist values.

---

## Default Values

The **Default Value** option allows you to specify a value that should be applied to imported Organizations when a field is not mapped to an imported column.

For example, if the imported file does not contain an **Owner** column, you can provide a default owner, where supported.

This is useful when the same value should be assigned to multiple imported records.

---

## Organization Ownership

The **Owner** field determines the SalesAstra user responsible for the Organization.

You can map an owner column from your import file.

The owner information must correspond to a valid SalesAstra user.

If the owner cannot be matched, the affected record is flagged during validation.

---

## Tags

Tags can be imported along with Organizations.

You can use the **Tags** field to assign one or more tags to an Organization.

For example:

> Enterprise, Customer, High Value

The imported tags are associated with the Organization according to the configured tag behavior.

---

## Validation Preview

After mapping the columns, click **Continue to Validation**.

SalesAstra validates the imported Organization data before starting the import.

Validation can include:

- Required fields
- Organization Name
- Owner
- Website format
- Email format
- Phone number format
- Date format
- Industry
- Company Size
- Revenue Band
- Tags
- Custom field values
- Data type validation

The validation preview allows you to identify and resolve issues before importing the Organizations.

---

## Duplicate Detection

The system can identify potential duplicate Organizations during the import process based on the configured duplicate matching rules.

Duplicate matching may use Organization information such as:

- Organization Name
- Website
- Domain
- Other configured Organization identifiers

When duplicate Organizations are identified, the import process can handle them according to the available duplicate options.

Possible actions include:

- **Skip Duplicate** – Do not import the duplicate Organization.
- **Update Existing Organization** – Update the existing Organization with the imported information.
- **Create New Organization** – Create a new Organization.
- **Review Before Import** – Review duplicate records before proceeding.

---

## Import Confirmation

After completing validation, review the import summary before proceeding.

The summary can include:

- **Total Records**
- **Valid Records**
- **Invalid Records**
- **Duplicate Records**
- **Records to Create**
- **Records to Update**
- **Records to Skip**

Review the summary carefully and confirm the import to begin processing.

---

## Import Progress

Organization imports are processed in the background.

The **Import Progress** step allows you to track the import job and view the final report.

The import can have statuses such as:

- **Queued** – The import is waiting to be processed.
- **Processing** – Organizations are currently being imported.
- **Completed** – The import completed successfully.
- **Completed with Errors** – The import completed, but some Organizations could not be imported.
- **Failed** – The import could not be completed.
- **Cancelled** – The import was cancelled.

You can continue using SalesAstra while the import is being processed.

---

## Import Summary

After processing is complete, SalesAstra displays the final import result.

The summary can include:

- **Total Records**
- **Successfully Imported**
- **Updated**
- **Skipped**
- **Failed**
- **Processing Duration**

Review the summary to confirm that the expected number of Organizations was imported.

---

## Error Report

If some Organizations fail validation or cannot be imported, you can download an **Error Report**.

You can correct the affected records using the error report and import them again.

---

## Import History

The **Import History** option allows you to review previous Organization import activities.

Import history can include:

- File Name
- Imported By
- Import Date & Time
- Module
- Total Records
- Success Count
- Failure Count
- Import Status
- Error Report

This helps administrators track previous Organization migration activities and review the outcome of each import.