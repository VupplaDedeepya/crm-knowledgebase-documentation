---
sidebar_position: 8
title: Contact Import
description: Learn how to import Contact records into SalesAstra using CSV or Excel files, map fields, validate data, manage duplicates, and review import results.
---

# Contact Import

The **Contact Import** feature allows administrators and authorized users to import Contact records into SalesAstra using **CSV or Excel (XLSX)** files.

It helps organizations migrate existing Contact data from spreadsheets or other CRM systems while preserving important information such as:

- Contact ownership
- Personal details
- Organization relationships
- Contact information
- Tags
- Notes
- Custom fields

## Importing Contacts

To import Contacts:

1. Open **Settings -> CRM Configuration**.
2. Select **Contacts**.
3. Open the **Import** tab.

![contact-import](/img/Configure/ContactsImport.png)

4. Upload a CSV or Excel file containing the Contact data.
5. Map the columns in your file to the corresponding Contact fields.
6. Review the validation results.
7. Review the import summary.
8. Confirm the import.
9. Track the import progress and review the final report.

The Contact Import page guides you through the following steps:

1. **Upload File**
2. **Map Columns**
3. **Validation Preview**
4. **Import Progress**

You can also access **Import History** to review previous Contact imports.

---

## Upload File

Upload a file containing the Contacts you want to import.

SalesAstra supports:

- **CSV**
- **XLSX (Excel)**

The uploaded file should contain column headers to allow the system to identify and map the Contact information.

The system validates the uploaded file for issues such as:

- Unsupported file format
- Empty files
- Corrupted files
- Duplicate column headers
- Invalid file encoding
- File size exceeding the supported limit

---

## Map Columns

After uploading the file, SalesAstra displays the fields available for import and allows you to map each field to a column from your uploaded file.

![Field-mapping](/img/Configure/ContactMapping.png)

The mapping screen is divided into:

- **Required Fields**
- **Optional Fields**

Each field displays:

- **Field** – The SalesAstra Contact field.
- **Imported Column** – The column from the uploaded file mapped to the field.
- **Default Value** – A value that can be applied when the field is not mapped to an imported column.

### Required Fields

The required fields must be mapped or provided with an appropriate value before you can continue with validation.

Based on the Contact Import configuration shown, the required fields include:

#### Contact Owner

Assign the Contact to an existing SalesAstra user.

You can map a column containing the owner's information from your import file.

#### First Name

The first name of the Contact.

:::note
Required fields must contain valid values for the import to proceed.
:::

---

## Custom Fields

If your organization has configured custom fields for Contacts, the active custom fields are available during column mapping.

You can map imported columns to the corresponding custom fields.

The values must match the configured field type and, where applicable, the available picklist options.

---

## Default Values

The **Default Value** option allows you to provide a value that is applied to imported records when a field is not mapped to an imported column.

For example, if the **Contact Owner** column is not available in your file, you can provide a default Contact Owner, where supported.

This is useful when the same value should be applied to all imported Contacts.

---

## Organization Mapping

Contacts can be associated with an Organization during import.

Map the **Organization** field to the corresponding column in your file.

The system uses the imported Organization information to establish the Contact's relationship with the appropriate Organization.

If an Organization cannot be matched or the relationship is invalid, the affected record is identified during validation.

---

## Contact Ownership

The **Contact Owner** field determines the SalesAstra user responsible for the Contact.

You can map the owner from an imported column or provide a default owner where supported.

The owner information must correspond to a valid SalesAstra user.

If the owner cannot be identified, the affected Contact is flagged during validation.

---

## Tags

Tags can be imported along with Contacts.

You can use the **Tags** field to assign one or more tags to a Contact.

For example:

> VIP, Enterprise, Existing Customer

The imported tags are associated with the Contact according to the configured tag behavior.

---

## Validation Preview

After mapping the columns, click **Continue to Validation**.

SalesAstra validates the imported Contact data before starting the import.

Validation can include:

- Required fields
- Email format
- Phone number format
- Date format
- Contact Owner
- Organization
- Source
- Tags
- Custom field values
- Data type validation

The validation preview allows you to review potential issues before the records are imported.

---

## Duplicate Detection

The system can identify potential duplicate Contacts during the import process based on the configured duplicate matching rules.

Duplicate matching may use Contact information such as:

- Email
- Phone
- Other configured Contact identifiers

When duplicate records are identified, the import process can handle them according to the available duplicate options.

Possible actions include:

- **Skip Duplicate**
- **Update Existing Contact**
- **Create New Contact**
- **Review Before Import**

---

## Import Confirmation

After reviewing the validation results, review the import summary before proceeding.

The summary can provide information such as:

- Total Records
- Valid Records
- Invalid Records
- Duplicate Records
- Records to Create
- Records to Update
- Records to Skip

Confirm the import to start processing the Contacts.

---

## Import Progress

Contact imports are processed in the background.

The **Import Progress** step allows you to track the import job and view the final result.

The import can have statuses such as:

- **Queued** – The import is waiting to be processed.
- **Processing** – Contacts are currently being imported.
- **Completed** – The import completed successfully.
- **Completed with Errors** – The import completed, but some Contacts could not be imported.
- **Failed** – The import could not be completed.
- **Cancelled** – The import was cancelled.

You can continue using SalesAstra while the import is being processed.

---

## Import Summary

After the import is complete, SalesAstra displays the final import result.

The summary can include:

- **Total Records**
- **Successfully Imported**
- **Updated**
- **Skipped**
- **Failed**
- **Processing Duration**

Review the summary to confirm that the expected number of Contacts was imported.

---

## Error Reporting

If some Contacts fail validation or cannot be imported, SalesAstra provides an error report.

Use the error report to correct the affected records and import them again.

---

## Import History

The **Import History** option allows you to review previous Contact import activities.

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

This allows administrators to track previous Contact migration activities and review the outcome of each import.