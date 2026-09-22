---
sidebar_position: 7
title: Deal Import
description: Learn how to import Deal records into SalesAstra using CSV or Excel files, map fields, validate data, manage duplicates, and review import results.
---

# Deal Import

The **Deal Import** feature allows administrators and authorized users to import existing Deal records into SalesAstra using **CSV or Excel (XLSX)** files.

This feature helps organizations migrate their sales pipeline, opportunities, and historical Deals from spreadsheets or other CRM systems while retaining important Deal information such as:

- Pipeline
- Stage
- Amount
- Ownership
- Customer relationships
- Tags
- Custom fields

## Importing Deals

To import Deals:

1. Open the **Settings -> Configure CRM -> Deals** 
2. Select the **Import** option.

![Deal-Import](/img/Configure/DealImport.png)

3. Upload a CSV or XLSX file containing the Deal data.
4. Map the file columns to the corresponding SalesAstra Deal fields.
5. Review the validation results and import preview.
6. Resolve any errors or invalid records, if required.
7. Confirm the import.
8. Monitor the import status and review the import summary after processing.

:::note
You must have the required permission to import Deals.
:::

---

## Supported File Formats

Deals can be imported using:

- **CSV**
- **XLSX (Excel)**

The uploaded file should contain column headers so that SalesAstra can identify the data available for mapping.

The system validates the uploaded file for issues such as:

- Unsupported file format
- Empty file
- Corrupted file
- Duplicate column headers
- Invalid file encoding
- File size exceeding the supported limit

---

## Field Mapping

After uploading the file, SalesAstra displays the columns detected in the file.

![field-mapping](/img/Configure/DealMapping.png)

Map each file column to the corresponding Deal field in SalesAstra.

For example:

| File Column | SalesAstra Field |
|---|---|
| **Opportunity Name** | Deal Name |
| **Amount** | Deal Value |
| **Sales Pipeline** | Pipeline |
| **Deal Stage** | Deal Stage |
| **Close Date** | Close Date |
| **Deal Owner** | Deal Owner |
| **Description** | Description |

You can change the suggested mapping before starting the import.

---

## Standard Deal Fields

The import can include standard Deal information such as:

- Deal Name
- Deal Amount
- Currency
- Pipeline
- Stage
- Expected Close Date
- Deal Owner
- Deal Source
- Probability, where applicable
- Description
- Tags

:::note
The fields available for mapping may depend on the configuration of the workspace.
:::

---

## Custom Deal Fields

SalesAstra supports importing data into active **custom Deal fields** configured by the organization.

Supported custom field types include:

- Text
- Number
- Currency
- Date
- Date & Time
- Checkbox
- Picklist
- Multi-select Picklist

For example, if the organization has a custom Deal field called **Contract Type**, a corresponding column in the import file can be mapped to this field.

Only active Deal custom fields are available for mapping.

---

## Relationship Mapping

Imported Deals can be associated with existing:

- **Organizations**
- **Contacts**

Relationship information can be mapped from the import file using supported identifiers.

Depending on the configured mapping options, relationships can be identified using information such as:

- External ID
- Email
- Phone
- Organization Name
- Domain
- CRM Identifier

The system attempts to associate the Deal with the corresponding Organization and Contact.

If a required relationship cannot be established, the affected record is flagged during validation.

---

## Pipeline and Stage

Every imported Deal must use a valid **Pipeline** and **Stage** configured in SalesAstra.

The selected Stage must belong to the selected Pipeline.

For example:

> **Pipeline:** Enterprise Sales  
> **Stage:** Proposal

If the imported file contains a Pipeline or Stage that does not exist, or if the Stage does not belong to the selected Pipeline, the record is flagged as invalid.

---

## Deal Validation

Before importing the records, SalesAstra validates the Deal information.

Validation can include:

- Mandatory Deal fields
- Mandatory custom fields
- Pipeline
- Stage
- Deal Amount
- Currency
- Expected Close Date
- Deal Owner
- Sales Model, where applicable
- Contact relationship
- Organization relationship
- Custom field values

Records that fail validation are identified before they are imported.

### Mandatory Fields

All required Deal fields must contain valid values.

Organization-configured mandatory custom fields must also be populated.

For example, if **Deal Type** is configured as a mandatory custom field, every imported Deal must contain a valid Deal Type value.

### Currency and Amount

The imported Deal Amount must contain a valid numeric value.

Where currency is required, the imported currency must be valid according to the organization's configuration.

For example:

> **Deal Amount:** ₹25,00,000  
> **Currency:** INR

Invalid amount or currency values are flagged during validation.

### Expected Close Date

The **Expected Close Date** must contain a valid date in a supported format.

Invalid or incorrectly formatted dates are flagged before the import is executed.

### Deal Owner

Deal ownership can be assigned during import.

You can map a column from the import file to the **Deal Owner** field.

The owner must correspond to an active SalesAstra user.

Where supported, a default owner can be assigned to imported Deals.

If the specified owner cannot be matched, the affected record is flagged during validation.

---

## Tags

Tags can be imported along with Deals.

The import supports:

- Existing Tags
- Multiple Tags
- Automatically creating Tags, when enabled

For example:

> Enterprise, Renewal, High Value

can be imported as multiple tags for a Deal.

Invalid tags are handled according to the configured import behavior.

---

## Duplicate Detection

SalesAstra checks imported Deals for potential duplicates based on the available duplicate matching criteria.

Matching can include:

- External ID
- Deal Name + Organization
- Organization-defined duplicate rules, where supported

When duplicates are detected, you can choose the appropriate action:

- **Skip Duplicate** – Do not import the duplicate Deal.
- **Update Existing Deal** – Update the existing Deal using the imported information.
- **Create New Deal** – Create a new Deal from the imported record.
- **Review Before Import** – Review duplicate records before proceeding.

---

## Import Preview

Before the import starts, SalesAstra displays an **Import Preview**.

The preview provides a summary of the records that will be processed, including:

- Total Records
- Valid Records
- Invalid Records
- Duplicate Records
- Records to Create
- Records to Update
- Records to Skip

Review the preview carefully before confirming the import.

The import starts only after you explicitly confirm the operation.

---

## Import Summary

After the import is processed, SalesAstra displays an import summary.

The summary includes:

- **Total Records**
- **Created**
- **Updated**
- **Skipped**
- **Failed**
- **Processing Duration**

This allows you to review the outcome of the import without manually checking each Deal.

---

## Error Report

If some Deals cannot be imported, you can download an **Error Report**.

You can correct the affected records using the error report and import them again.

---

## Import History

SalesAstra maintains a history of Deal imports.

The import history includes:

- File Name
- Imported By
- Import Date & Time
- Total Records
- Success Count
- Failure Count
- Import Status
- Error Report

You can use the import history to review previous Deal migration activities and identify the outcome of each import.