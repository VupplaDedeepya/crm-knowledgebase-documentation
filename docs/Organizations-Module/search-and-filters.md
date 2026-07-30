---
sidebar_position: 5
title: Search and Filters
description: Learn how to search and filter Organization records in the Organizations module.
---

# Search and Filters

The **Organizations** module provides powerful search and filtering capabilities that help users quickly locate, organize, and manage Organization records.

Users can perform **Global Search**, **Column-Specific Search**, **Quick Filters**, and **Advanced Filters** to efficiently work with large datasets.

Search and filters can be used individually or together to quickly locate the required Organization records.

---

## Searching Organizations

The Organizations module includes a powerful search feature that supports both **Global Search** and **Column-Specific Search**, helping users quickly locate records in large datasets.

---

## Global Search

By default, the search bar performs a global search across Organization records.

Users can search using information such as:

- Organization Name
- Website
- Primary Email
- Primary Phone
- Industry
- Other searchable Organization fields

The search supports:

- Partial matches
- Case-insensitive matching
- Real-time results

### Example

Searching for **"Tech"** may return Organizations such as:

- Sun Technologies
- Global Tech Solutions
- Tech Innovations Pvt Ltd

---

## Column-Specific Search

Users can further refine searches by selecting a specific column from the **Select Column** dropdown available beside the search bar.

When a column is selected:

1. Click the **Select Column** dropdown.
2. Choose the desired column.
3. Enter the search value.
4. The system searches only within the selected column.

### Example

If **Industry** is selected and the value **Manufacturing** is entered, only Organizations whose **Industry** field contains **Manufacturing** are displayed.

This allows users to perform more precise searches when working with a large number of Organization records.

> **Note**
>
> Search can be used together with **Quick Filters**, **Advanced Filters**, and **Custom Views** to quickly locate specific Organization records.

![Column Search](/img/organizations/ColumnSearch.png)

---

## Quick Filters

Quick Filters provide a fast way to narrow down Organization records without opening the **Advanced Filters** panel.

These filters are available directly on the Organizations listing page and can be applied with a single click.

---

## Available Quick Filters

### Organization Owner

Use the **Organization Owner** filter to display Organizations assigned to specific users.

This filter helps users quickly identify and manage accounts owned by individual sales representatives or account managers.

Users can:

- Search for an owner using the search box.
- Select one or more owners from the available list.
- View only the Organizations assigned to the selected owner(s).

Selecting an owner immediately updates the Organization list to display only the matching records.

This filter is useful for:

- Viewing your assigned Organizations.
- Monitoring account ownership across the sales team.
- Tracking Organizations managed by specific users.
- Reviewing workload distribution among account owners.
- Managing territory or ownership-based account assignments.

---

### Created Date

Use the **Created Date** filter to display Organizations created within a selected time period.

This filter helps users quickly access:

- Recently created Organizations
- Organizations created during a selected date range
- Historical Organization records

Multiple Quick Filters can be applied together for more refined results.

![Quick Filters](/img/organizations/CreateDate.png)

---
### Last Activity Date

Use the **Last Activity Date** filter to display Organizations based on the date of their most recent activity.

This filter helps users quickly identify recently engaged accounts or Organizations that may require follow-up.

Available options include:

- Today
- Yesterday
- Last 7 Days
- Last 30 Days
- Last 90 Days
- This Month
- This Year

Selecting an option immediately updates the Organization list to display only Organizations whose most recent activity falls within the selected time period.

This filter is useful for:

- Monitoring recently engaged Organizations.
- Identifying inactive accounts that may require follow-up.
- Reviewing account activity within a specific timeframe.
- Prioritizing Organizations based on recent interactions.

![Last Activity Date Filter](/img/organizations/LastActivityDateFilter.png)

---

## Advanced Filters

For more detailed filtering requirements, the Organizations module provides **Advanced Filters**.

Advanced Filters allow users to combine multiple criteria and create highly targeted Organization lists.

---

### Applying Advanced Filters

To apply Advanced Filters:

1. Click **Advanced Filters**.
2. Select the field to filter.
3. Choose the required condition.
4. Specify the filter value.
5. Click **Apply**.

Additional filter conditions can be added using the **Add Filter (+)** option.

![Advanced Filters](/img/organizations/AdvancedFilters.png)

---

### Available Advanced Filters

Depending on your CRM configuration, filters may include:

| Filter | Description |
|---------|-------------|
| Owner | Filter Organizations by assigned owner. |
| Industry | Display Organizations belonging to specific industries. |
| Company Size | Filter Organizations by company size category. |
| Revenue Band | Display Organizations within selected revenue ranges. |
| Tags | Filter Organizations based on assigned tags. |
| Created Date | Filter Organizations by creation date. |
| Last Activity | Filter Organizations based on recent activity. |

---

### Filter Logic

The system evaluates filters using the following logic:

- Different filter categories are combined using **AND** logic.
- Multiple values selected within the same filter use **OR** logic.
- Results update based on all applied criteria.

Filters can be modified, removed, or reset at any time.

#### Example

Display Organizations where:

- Industry = Healthcare
- AND Company Size = Enterprise
- AND Owner = John Smith

Only Organizations matching all configured conditions will be displayed.

---

### Resetting Filters

To remove all active filters and return to the default Organization list:

1. Open **Advanced Filters**.
2. Click **Reset All**.

All active filters are removed, and the complete Organization list is displayed again.

---

## Best Practices

- Use **Global Search** when searching across multiple Organization fields.
- Use **Column-Specific Search** when searching within a known field.
- Combine **Quick Filters** and **Advanced Filters** for more accurate results.
- Save frequently used filter combinations as **Custom Views**.
- Reset filters when switching between different search scenarios to avoid unintended results.