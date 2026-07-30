---
sidebar_position: 4
title: Custom Views
description: Learn how to create and manage Custom Views in the Organizations module.
---

# Custom Views

As the number of Organizations grows, users may need to frequently access specific subsets of records. **Custom Views** allow users to save commonly used filter combinations and quickly switch between different Organization lists without reapplying filters each time.

Custom Views help users organize Organization records based on business requirements and improve productivity by providing quick access to frequently used account segments.

---

## Benefits of Custom Views

Custom Views help users:

- Monitor specific account segments.
- Quickly access frequently used Organization lists.
- Reduce repetitive filtering.
- Improve productivity.
- Organize Organizations based on business requirements.
- Personalize the Organization listing page.

---

## Creating a Custom View

### Steps

1. Navigate to the **Organizations** module.
2. Apply the required filters to display the desired set of Organizations.
3. Click **Add View**.
4. Enter a **View Name**.
5. Define the filter criteria for the view.
6. Optionally enable **Set as Default View** if you want the view to open automatically whenever you access the Organizations module.
7. Click **Create View**.

The newly created view becomes available from the **View Selector** for future use.

![Create Custom View](/img/Organizations/CreateViews.png)

---

### Configuring Filter Criteria

While creating a Custom View, users can define one or more filter conditions.

Each filter consists of:

| Component | Description |
|-----------|-------------|
| Filter | The Organization field used for filtering. |
| Condition | The comparison operator. |
| Value | The value used for comparison. |

Common filters include:

- Organization Owner
- Industry
- Company Size
- Revenue Band
- Tags
- Created Date
- Last Activity

---

## Adding Multiple Conditions

Users can create highly targeted Organization lists by combining multiple filter conditions.

### Steps

1. Configure the first filter.
2. Click the **Add Filter (+)** button.
3. Add additional conditions.
4. Repeat as required.
5. Save the view.

![Conditions](/img/organizations/Conditions.png)

### Example

Display Organizations where:

- Industry = Manufacturing
- AND Company Size = Enterprise
- AND Revenue Band = High

Only Organizations matching all configured conditions will be displayed.

---

## Setting a Default View

Users can designate a Custom View as their default Organization view.

When **Set as Default View** is enabled:

- The selected view opens automatically whenever the Organizations module is accessed.
- Users can immediately view the records most relevant to their daily work.
- Time spent switching between views is reduced.

The default view can be changed at any time.

---

### Example Custom Views

Common examples include:

- My Organizations
- Recently Created Organizations
- Manufacturing Industry Accounts
- Enterprise Customers

---

## Managing Custom Views

Users can manage previously created Custom Views as business requirements change.

Depending on permissions, users may be able to:

- Edit view filters.
- Rename a view.
- Change the default view.
- Delete unused views.

> **Note**
>
> Custom Views are personal by default and are available only to the user who created them.

---

## Best Practices

- Create separate views for different business segments.
- Use meaningful names that clearly describe the purpose of each view.
- Combine multiple filters to create highly targeted Organization lists.
- Set frequently used views as the default for faster access.
- Remove outdated views to keep the View Selector organized.