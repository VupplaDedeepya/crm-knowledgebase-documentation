---
sidebar_position: 3
title: Bulk Actions
description: Learn how to perform bulk operations on multiple Contact records.
---

# Bulk Actions

The **Contacts** module supports **Bulk Actions**, allowing users to perform operations on multiple Contact records simultaneously. This feature helps save time and ensures efficient management of large contact databases.

---

## Accessing Bulk Actions

To access **Bulk Actions**:

1. Navigate to the **Contacts** module.
2. Select one or more Contact records using the checkboxes beside each record.
3. The **Bulk Actions** toolbar appears at the bottom of the screen.
4. Choose the desired action.

![Bulk Actions](/img/contacts/ContactBulkActions.png)

---

## Available Bulk Actions

The following Bulk Actions are available:

- Merge
- Update Engagement Status
- Assign Owner
- Add Tags
- Add to Sequence
- Archive
- Delete
- Export

---

## Merge Contacts

The **Merge** action allows users to combine duplicate Contact records into a single Contact while preserving important information.

### Steps

1. Select two Contact records.
2. Click **Merge**.
3. Review the recommended **Primary Contact**.
4. Optionally select a different Primary Contact.
5. Review field-level values.
6. For each field, choose which Contact's value should be retained.
7. Click **Merge Contacts**.

---

### Primary and Secondary Records

During the merge process:

- The **Primary Contact** becomes the surviving record.
- The **Secondary Contact** is merged into the Primary Contact.
- Associated information is consolidated based on selected field values.

---

### Field-Level Conflict Resolution

When field values differ between Contacts, users can choose which record should provide the final value for fields such as:

- First Name
- Last Name
- Email
- Contact Number
- Company Name
- Designation
- Source
- Website
- Description
- Other configured fields

---

### Merge Result

After a successful merge:

- One consolidated Contact record remains.
- Related records and activity history are preserved according to system configuration.
- The merged record is available for future customer interactions.

---

## Update Engagement Status

Users can update the engagement status of multiple Contacts simultaneously.

### Steps

1. Select one or more Contacts.
2. Click **Engagement Status**.
3. Choose the desired status.

The selected status is applied to all selected Contacts.

---

### Available Engagement Statuses

| Status | Description |
|--------|-------------|
| Active | Contact is actively engaged and eligible for communication. |
| Inactive | Contact is not currently engaged. |
| DNC (Do Not Contact) | Contact should not receive communications. |
| Blocked | Contact is restricted from engagement activities. |

Bulk status updates help maintain accurate communication preferences and customer engagement tracking.

---

## Assign Owner

The **Assign Owner** action allows users to transfer ownership of multiple Contacts to another user.

### Steps

1. Select one or more Contacts.
2. Click **Assign Owner**.
3. Select the new Contact Owner.
4. Confirm the assignment.

---

### Result

- Ownership is updated for all selected Contacts.
- Future activities and accountability are assigned to the selected owner.

---

## Add Tags

Tags help categorize and segment Contacts for filtering, reporting, and automation purposes.

### Steps

1. Select one or more Contacts.
2. Click **Add Tags**.
3. Choose one or more tags from the available list.
4. Click **Add Tags**.

---

### Result

- Selected tags are added to all chosen Contacts.
- Existing tags remain unchanged.
- Multiple tags can be applied simultaneously.

---

### Use Cases

Common tagging examples include:

- VIP Customers
- Prospects
- Partners
- Existing Customers
- Event Attendees
- Campaign Participants

---

## Add to Sequence

The **Add to Sequence** action allows users to enroll multiple Contacts into an existing Sequence.

Sequences automate follow-up communications and customer engagement activities.

### Steps

1. Select one or more Contacts.
2. Click **Add to Sequence**.
3. Select the required Sequence.
4. Confirm the action.

The selected Contacts are successfully added to the chosen Sequence.

---

## Archive Contacts

The **Archive** action removes Contacts from active use while retaining their historical information.

### Steps

1. Select one or more Contacts.
2. Click **Archive**.
3. Review any warning messages.
4. Click **Archive** to confirm.

---

### Archive Warning

If selected Contacts are associated with active Deals, the system displays a warning before proceeding.

---

### Result

- Contacts are moved to an archived state.
- Historical information is retained.
- Archived Contacts are excluded from active working lists based on system configuration.

---

### When to Use Archive

Archive is recommended when:

- Contacts are no longer active.
- Historical data must be preserved.
- Records should be removed from day-to-day operations without permanent deletion.

---

## Delete Contacts

The **Delete** action permanently removes Contact records from the system.

### Steps

1. Select one or more Contacts.
2. Click **Delete**.
3. Review the confirmation message.
4. Click **Delete** to proceed.

---

### Delete Warning

If a Contact is linked to active Deals, the system displays a warning before deletion.

---

### Result

- Selected Contacts are permanently removed.
- Deleted records cannot be recovered.
- Related business processes may be impacted depending on system configuration.

---

### Recommendation

Use **Delete** only when records are no longer required.

If historical information must be retained, consider using **Archive** instead.

---

## Export Contacts

The **Export** action allows users to download selected Contact records for external use.

### Steps

1. Select one or more Contacts.
2. Click **Export**.
3. The system generates an export file containing the selected records.
4. Download the generated file.

---

### Export Benefits

Users can export Contact data for:

- Reporting and analysis.
- Data backups.
- External sharing.
- Migration activities.
- Offline record review.