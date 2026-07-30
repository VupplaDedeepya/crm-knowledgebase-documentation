---
sidebar_position: 3
title: Bulk Actions
description: Learn how to perform bulk operations on multiple Organization records.
---

# Bulk Actions

The **Bulk Actions** feature allows users to perform the same operation on multiple Organization records simultaneously, reducing repetitive manual work and improving productivity when managing large numbers of accounts.

Bulk actions are applied only to the selected Organization records.

![Bulk Actions](/img/organizations/OrganizationBulkActions.png)

---

## Selecting Organizations

Before performing a bulk action:

1. Navigate to the **Organizations** module.
2. Select one or more Organization records using the checkboxes beside each record.
3. Choose the required action from the **Bulk Actions** menu.

The selected action is applied only to the chosen Organization records.

---

## Available Bulk Actions

The Organizations module supports the following bulk operations:

- Assign Owner
- Add Tags
- Archive
- Merge

---

## Bulk Owner Assignment

The **Assign Owner** action allows users to transfer ownership of multiple Organizations in a single operation.

### Steps

1. Select one or more Organization records.
2. Click **Assign Owner**.
3. Select the new owner.
4. Confirm the action.

The selected Organizations are immediately reassigned to the chosen owner.


---

### Benefits

Bulk Owner Assignment helps organizations:

- Reassign accounts quickly.
- Balance workloads among sales representatives.
- Support territory or team restructuring.
- Improve account ownership management.

---

## Bulk Tag Management

The **Add Tags** action allows users to categorize multiple Organizations simultaneously.

### Steps

1. Select one or more Organization records.
2. Click **Add Tags**.
3. Select existing tags or enter new tags.
4. Click **Save**.

The selected tags are applied to all chosen Organizations.

![AddTag](/img/organizations/AddTag.png)

---

### Common Tag Examples

Organizations may be tagged using labels such as:

- Enterprise Customer
- Manufacturing
- Healthcare
- Partner
- Prospect
- Strategic Account

Tags help improve searching, filtering, reporting, and segmentation.

---

## Bulk Archive

Organizations that are no longer active can be archived in bulk.

### Steps

1. Select one or more Organization records.
2. Click **Archive**.
3. Review the confirmation message.
4. Click **Archive** to confirm.

![BulkArchive](/img/organizations/BulkArchive.png)

---

### Archived Organizations

Archived Organizations:

- Are removed from the default Organization list.
- Remain available through archive filters or archived views.
- Can be restored if required.

> **Note**
>
> A confirmation step is required before Organizations are archived.

---

### When to Archive

Archive is recommended when:

- The Organization is no longer active.
- Historical account information must be retained.
- The account should be removed from day-to-day operations without permanent deletion.

---

## Bulk Merge

When duplicate Organization records exist, users can merge them into a single Organization.

### Steps

1. Select at least two Organization records.
2. Click **Merge**.
3. Review the Organization information.
4. Choose the **Primary Organization**.
5. Review field-level information.
6. Complete the merge process.

The system combines the selected records according to the configured merge rules.


---

### Merge Rules

During the merge process:

- One Organization is selected as the **Primary Organization**.
- Remaining Organizations are merged into the primary record.
- Users can choose which field values should be retained when duplicate information exists.
- Linked Contacts and Deals are preserved according to system configuration.

> **Note**
>
> A minimum of **two Organizations** must be selected before the **Merge** option becomes available.

---

## Delete Organizations

The **Delete** action allows users to permanently remove one or more Organization records from the CRM.

Deleting Organizations should be performed with caution, as the action cannot be undone.

### Steps

1. Select one or more Organization records.
2. Click **Delete** from the **Bulk Actions** menu.
3. Review the confirmation dialog.
4. Click **Delete** to permanently remove the selected Organizations.

![DeleteConfirmation](/img/organizations/DeleteConfirmation.png)

---

### Delete Confirmation

Before deleting Organizations, the system displays a confirmation dialog showing the number of selected records.

If any selected Organization is linked to active Contacts or Deals, the CRM displays a warning message indicating the affected records.

Example warning:

> **Warning:** One or more selected Organizations are linked to active Contacts or Deals. Proceeding with deletion will permanently remove the selected Organization records.

This helps users review the impact before confirming the deletion.

---

## Result

After confirmation:

- The selected Organization records are permanently deleted.
- Associated relationships are removed from the CRM.
- Deleted Organizations cannot be recovered.

---

## Recommendation

Before deleting an Organization:

- Verify that the Organization is no longer required.
- Review any linked Contacts or Deals.
- Consider using **Archive** instead of **Delete** if historical information needs to be preserved.

---

## Export Organizations

The **Export** action allows users to download selected Organization records for reporting, analysis, backup, or external processing.

Users can export one or multiple Organizations directly from the Organizations list.

### Steps

1. Select one or more Organization records.
2. Click **Export** from the **Bulk Actions** menu.
3. The CRM generates an export file containing the selected Organization records.
4. Download the generated file.

---

### Export Benefits

Exporting Organizations helps users:

- Generate business reports.
- Perform data analysis.
- Create offline backups.
- Share Organization information with authorized users.
- Migrate data to external systems.
- Maintain records for auditing purposes.

---

## Best Practices

- Export only the required Organization records.
- Verify the exported data before sharing it externally.
- Ensure compliance with your organization's data security and privacy policies.
- Store exported files securely to prevent unauthorized access.

## Benefits of Bulk Actions

Bulk Actions help users:

- Reduce repetitive manual work.
- Manage multiple Organizations efficiently.
- Maintain accurate ownership.
- Organize accounts using tags.
- Eliminate duplicate Organization records.
- Keep inactive accounts organized through archiving.
- Improve overall account management productivity.