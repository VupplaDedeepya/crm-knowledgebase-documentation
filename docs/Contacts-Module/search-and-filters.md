---
sidebar_position: 7
title: Search and Filters
description: Learn how to search and filter Contact records in the Contacts module.
---

# Searching and Filtering Contacts

The **Contacts** module provides powerful search and filtering capabilities that help users quickly locate, segment, and manage customer records.

Users can perform global searches, search within specific fields, apply quick filters, and create advanced filter combinations to work efficiently with large Contact datasets.

Searches and filters can be used independently or together to create highly targeted Contact lists.

---

## Searching Contacts

The search functionality enables users to quickly locate Contact records without manually browsing through the entire Contact database.

The **Search** bar is available at the top of the Contacts listing page.

Users can perform:

- Global Search
- Column-Specific Search

---

## Global Search

By default, users can enter a keyword directly into the Search box without selecting a specific column.

The system searches across multiple Contact fields and returns matching results.

### Benefits

- Quickly locate records.
- Search across multiple fields simultaneously.
- Useful when the exact field containing the information is unknown.

---

## Column-Specific Search

For more targeted searches, users can utilize the **Select Column** dropdown located beside the Search box.

This feature allows users to restrict the search to a specific Contact field.

### Steps

1. Navigate to the **Contacts** module.
2. Click the **Select Column** dropdown.
3. Choose the field to search.
4. Enter the desired search value.
5. Matching records are displayed.

> **Note**
>
> Selecting a column is optional.
>
> Users may either:
>
> - Search directly using the Search box, or
> - Select a specific column to perform a more focused search.
>
> This flexibility allows users to quickly locate information regardless of the size of the Contact database.

![Contact Search](/img/Contacts/SearchContacts.png)

---

## Filtering Contacts

Filters allow users to narrow down Contact records based on specific business criteria.

Filtering helps users:

- Segment Contacts.
- Identify target customer groups.
- Monitor ownership and engagement.
- Analyze customer records.
- Build focused working lists.

The Contacts module supports both **Quick Filters** and **Advanced Filters**.

---

## Quick Filters

Frequently used filters are available directly above the Contact listing.

These filters provide quick access to commonly used segmentation options without opening the Advanced Filter panel.

## Available Quick Filters

### Contact Owner

Displays Contacts assigned to specific users.

#### Examples

- My Contacts
- Contacts owned by a particular sales representative

---

### Created Date

Displays Contacts based on creation date.

#### Examples

- Created Today
- Created This Week
- Created This Month
- Custom Date Range

---

### Last Activity

Displays Contacts based on recent activity or engagement.

#### Examples

- Activity within the last 7 days
- Recently updated Contacts
- Contacts with no recent activity

---

## Advanced Filters

Advanced Filters allow users to create highly targeted Contact segments using multiple filter conditions.

Users can combine multiple conditions to create sophisticated customer segments and working lists.

---

## Opening Advanced Filters

1. Navigate to the **Contacts** module.
2. Click **Advanced Filters**.
3. The **Advanced Filter** panel opens.
4. Configure the desired filter criteria.
5. Click **Apply**.

The Contact list immediately updates to display matching records.

![Advanced Filters](/img/Contacts/ContactsAdvFilters.png)

---

## Building Filter Conditions

Each filter condition contains three components:

| Component | Description |
|-----------|-------------|
| Field | The Contact field to evaluate. |
| Condition | The comparison operator. |
| Value | The value used for filtering. |

### Example

| Field | Condition | Value |
|--------|-----------|-------|
| Engagement Status | Equals | Active |
| Contact Owner | Equals | John |

Only records matching the configured criteria are displayed.

---

## Adding Multiple Filter Conditions

Users can create complex filters by adding multiple conditions.

### Steps

1. Configure the first filter condition.
2. Click the **+** icon.
3. Add additional filter conditions.
4. Repeat as required.
5. Click **Apply**.

Multiple conditions help create highly targeted Contact lists.

---

### Available Filter Criteria

Depending on your organization's configuration, users may be able to filter Contacts using:

| Filter | Description |
|---------|-------------|
| Contact Owner | Assigned owner of the Contact. |
| Organization | Associated organization. |
| Tags | Contact tags and classifications. |
| Engagement Status | Current engagement state. |
| Original Source | Source from which the Contact originated. |
| Created Date | Date the Contact was created. |
| Last Activity | Most recent interaction date. |

---

## Filter Logic

Advanced Filters use **AND** logic between filter conditions.

This means a Contact must satisfy **all configured conditions** to appear in the results.

### Example

Display Contacts where:

- Contact Owner = John Smith
- AND Engagement Status = Active
- AND Organization = ABC Technologies

Only Contacts meeting all three conditions will be displayed.

---

## Removing Filter Conditions

Users can remove individual filter conditions using the **Delete** icon available beside each filter row.

This allows users to quickly refine existing filter configurations without rebuilding them from scratch.

---

## Resetting Filters

The Advanced Filter panel includes a **Reset All** option.

### Steps

1. Open **Advanced Filters**.
2. Click **Reset All**.
3. All configured filter conditions are removed.
4. The Contact list returns to its unfiltered state.

---

## Best Practices

- Use **Global Search** when searching across multiple Contact fields.
- Use **Column-Specific Search** when searching for information in a known field.
- Combine **Quick Filters** and **Advanced Filters** to create precise Contact lists.
- Save frequently used filter combinations as **Custom Views** to improve productivity.
- Reset filters when switching between different search scenarios to avoid unintended results.