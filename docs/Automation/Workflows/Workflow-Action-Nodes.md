---
sidebar_position: 4
title: Workflow Action Nodes
---

# Workflow Action Nodes

## Overview

Workflow Action Nodes perform automated operations on Lead records after a Lead reaches a specific point in a workflow.

While **Logic Nodes** determine the path a Lead follows, **Action Nodes** define what happens to the Lead once that path has been selected.

Using Action Nodes, administrators can automatically:

- Update Lead information
- Assign Lead ownership
- Change Lead Stage or Status
- Add or remove Tags
- Create new Lead records
- Update related records
- Maintain Lead lists
- Keep CRM data consistent

These actions reduce manual effort, improve data quality, and ensure that Lead records remain accurate throughout the sales lifecycle.

---

## Available Action Nodes

Lead Workflows support the following action nodes:

| Action | Description |
|----------|-------------|
| Update Field | Update a single Lead field |
| Update Multiple Fields | Update multiple Lead fields simultaneously |
| Assign Owner | Assign or reassign Lead ownership |
| Move Stage | Move a Lead to another pipeline stage |
| Update Status | Update the Lead status |
| Create New Lead | Create a new Lead record |
| Update Related Record | Update associated CRM records |
| Add Tag | Add one or more Tags |
| Remove Tag | Remove existing Tags |

---

## Update Field

### Overview

The **Update Field** action automatically updates a single Lead field.

It is commonly used to modify Lead information based on workflow decisions and business rules.

---

### Configuration

| Setting | Description |
|----------|-------------|
| Field | Select the Lead field to update |
| Value | Specify the new value |

The value input automatically changes depending on the selected field type.

---

### Supported Fields

Administrators can update:

- Standard Lead fields
- Custom fields
- Dropdown fields
- Number fields
- Date fields
- Boolean fields

---

## Examples

### Example 1

```text
IF Budget > 50,000
    ↓
Update Lead Score = 90
```

---

### Example 2

```text
IF Lead Source = Website
    ↓
Update Priority = High
```

---

### Example 3

```text
Update Interested Product = CRM Module
```

---

## Validation Rules

- Values must match the selected field type.
- Read-only system fields cannot be updated.
- Changes become visible immediately after workflow execution.

---

## Common Use Cases

- Updating Lead Scores
- Setting Priority
- Recording Product Interest
- Updating Qualification Indicators

---

## Update Multiple Fields

### Overview

The **Update Multiple Fields** action updates several Lead fields in a single workflow step.

This keeps workflows cleaner and avoids adding multiple Update Field nodes.

---

### Example

```text
IF Industry = Retail

Update:

Lead Status = Qualified

Lead Score = 70

Priority = Medium
```

---

### System Behavior

- All updates execute together.
- Either all updates succeed or none are applied.
- Partial updates are never saved.

---

### Benefits

- Cleaner workflows
- Better performance
- Easier maintenance
- Related updates remain grouped together

---

## Assign Owner

### Overview

The **Assign Owner** action automatically assigns ownership of a Lead.

Assignments can be made to:

- A specific user
- A Team
- Round Robin distribution
- No owner (Unassigned)

---

## Assignment Methods

### Specific User

Assign ownership directly to an individual CRM user.

Example

```text
Assign Owner = John Smith
```

---

### Team Assignment

Assign Leads to a predefined team.

Example

```text
Assign Owner = Website Leads Team
```

---

### Round Robin Assignment

Distribute Leads evenly across multiple users.

Example

```text
Round Robin

User A

User B

User C
```

---

### Unassign Owner

Remove the current owner.

```text
Assign Owner = Empty
```

---

## Common Use Cases

### Website Lead Assignment

```text
IF Lead Source = Website

Assign Owner = Website Sales Team
```

---

### Regional Assignment

```text
IF Country = UAE

Assign Owner = Middle East Sales Team
```

---

### Balanced Distribution

```text
Assign Owner using Round Robin
```

---

## System Behavior

- Ownership changes immediately.
- Round Robin tracks previous assignments.
- All ownership changes are recorded in workflow logs.

---

## Move Stage

### Overview

The **Move Stage** action automatically moves a Lead to another stage within the sales pipeline.

This helps maintain consistent sales progression.

---

### Common Use Cases

- Lead Qualification
- Pipeline Progression
- Opportunity Identification

---

## Example

```text
IF Documents Verified

Move Stage = Qualified
```

---

## Update Status

### Overview

Updates the Lead Status without changing the pipeline stage.

---

### Example

```text
IF Contacted = True

Update Status = Contacted
```

---

### Common Use Cases

- Follow-up Tracking
- Contact Management
- Lifecycle Updates

---

### Validation Rules

- Only valid stage transitions are permitted.
- Stage and Status are independent.
- Changes are reflected immediately.

---

## Create New Lead

### Overview

The **Create New Lead** action automatically creates another Lead record.

Useful for:

- Referral Leads
- Additional Product Requests
- Internal Lead Generation
- Secondary Enquiries

---

### Example

```text
IF Request More Information = True

Create New Lead

Name = Original Lead Name - Additional Request

Source = Internal Auto Creation
```

---

### System Behavior

- New Lead receives a unique Lead ID.
- Appears immediately in CRM.
- Logged in Workflow History.

---

## Update Related Record

### Overview

Updates records associated with the current Lead.

---

### Supported Relationships

Examples include:

- Company
- Account
- Tasks
- Notes

---

### Common Use Cases

- Synchronize Company Information
- Update Account Ownership
- Maintain Relationship Consistency

---

### Validation Rules

- Relationship must exist.
- Target field must be editable.
- Invalid relationships are logged.

---

## Add Tag

### Overview

Automatically adds Tags to categorize Leads.

Tags improve:

- Segmentation
- Reporting
- Filtering
- Automation

---

### Examples

#### Website Leads

```text
IF Lead Source = Website

Add Tag = Website Lead
```

---

#### High Value Leads

```text
IF Budget > 50,000

Add Tag = High Value Lead
```

---

## Remove Tag

### Overview

Removes Tags that are no longer relevant.

---

### Examples

#### Closed Lost

```text
IF Lead Status = Closed Lost

Remove Tag = Hot Lead
```

---

#### Qualified

```text
IF Lead Status = Qualified

Remove Tag = New Lead
```

---

## Benefits

- Better Lead Segmentation
- Cleaner Reporting
- Dynamic Classification

---

## System Behavior

- Tags update immediately.
- Removing a non-existent tag does not generate an error.
- All Tag activities are recorded in Workflow Logs.

---

## Workflow Execution Rules

### Sequential Processing

Workflow actions execute in the same order they appear in the Workflow Builder.

Example

```text
Update Lead Score = 90

↓

IF Lead Score > 80

↓

Assign Owner = Enterprise Team
```

Since the score is updated first, the IF condition uses the updated value.

---

### Data Validation

Before updates are saved:

- Field types are validated.
- Required values are checked.
- Invalid updates are rejected.

Examples:

- Text cannot be stored in Number fields.
- Invalid dropdown values are rejected.
- Date fields require valid dates.

---

### Atomic Updates

When using **Update Multiple Fields**:

- All updates execute together.
- If one update fails, none are applied.

This prevents inconsistent Lead data.

---

## Best Practices

- Use **Update Multiple Fields** instead of multiple Update Field nodes whenever possible.
- Use **Round Robin Assignment** to balance workload.
- Validate Stage movement before publishing workflows.
- Apply meaningful Tags for reporting and segmentation.
- Review Workflow Logs regularly.
- Thoroughly test workflows before activating them in production.

---

## Summary

Workflow Action Nodes automate record updates, ownership management, tagging, stage progression, and related record updates.

By combining these Action Nodes with Logic Nodes and Triggers, administrators can build efficient, consistent, and scalable Lead automation workflows while minimizing manual effort.