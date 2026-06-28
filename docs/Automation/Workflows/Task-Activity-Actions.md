---
sidebar_position: 7
title: Task & Activity Actions
---

# Task & Activity Actions

## Overview

Task & Activity Actions automate operational tasks that help sales teams effectively manage Leads throughout the sales process.

While **Communication Actions** focus on engaging Leads, **Task & Activity Actions** ensure that sales representatives have clearly assigned responsibilities, scheduled follow-ups, and complete visibility into Lead-related activities.

These actions help organizations:

- Ensure timely Lead follow-ups.
- Improve sales team accountability.
- Reduce manual task management.
- Standardize sales processes.
- Support SLA compliance.
- Improve pipeline visibility.

---

## Supported Task & Activity Actions

Lead Workflows support the following task and activity actions:

| Action | Description |
|---------|-------------|
| Create Task | Create a new task associated with a Lead |
| Assign Task | Assign or reassign an existing task |
| Update Task | Modify task details |
| Close Task | Automatically close completed or irrelevant tasks |
| Create Activity Log / Note | Add workflow-generated notes and activity records |

---

## Create Task

### Overview

The **Create Task** action automatically creates a new task linked to a Lead.

Tasks help sales teams track important activities such as follow-ups, meetings, phone calls, and customer interactions.

---

### Supported Task Types

Administrators can create:

- Follow-Up Tasks
- Meeting Tasks
- Email Tasks
- Custom Activity Tasks

---

### Examples

#### New Lead Follow-Up

```text
Trigger:
Lead Created

↓

Create Task

Title:
Call New Lead

Due Date:
Today + 1 Day

Assigned To:
Lead Owner
```

---

#### High-Intent Lead

```text
IF Lead Score > 80

↓

Create Task

Title:
Urgent Follow-Up

Priority:
High

Due Date:
Today
```

---

#### Demo Scheduling

```text
IF Demo Requested = True

↓

Create Task

Title:
Schedule Product Demo

Due Date:
Today + 1 Day

Assigned To:
Sales Representative
```

---

### Benefits

- Standardized follow-up process
- Better Lead engagement
- Improved task visibility
- Reduced manual work

---

## Assign Task

### Overview

The **Assign Task** action automatically assigns or reassigns existing tasks to the appropriate user or team.

This ensures task ownership always aligns with business requirements.

---

### Task Selection Options

Administrators can assign:

- Latest Open Task
- Task by Type

---

#### Latest Open Task

The system selects the most recently created open task associated with the Lead.

---

#### Task by Type

The system selects tasks matching the configured task category.

---

### Examples

#### Owner Change

```text
IF Lead Owner Changes

↓

Assign Task

To:
New Lead Owner
```

---

#### Escalation

```text
IF Lead Unattended > 48 Hours

↓

Assign Task

To:
Sales Manager
```

---

#### Regional Assignment

```text
IF Country = UAE

↓

Assign Task

To:
Middle East Sales Team
```

---

### Benefits

- Prevents task ownership issues
- Supports escalation workflows
- Keeps task ownership synchronized with Lead ownership

---

## Update Task

### Overview

The **Update Task** action modifies details of an existing task to keep it aligned with changing Lead information.

---

### Supported Updates

Administrators can update:

- Due Date
- Priority
- Status
- Description

---

### Examples

#### Increase Priority

```text
IF Lead Score > 70

↓

Update Task

Priority:
High

Due Date:
Today
```

---

#### Reschedule Task

```text
IF Demo Date Changes

↓

Update Task

Due Date:
Demo Date - 1 Day
```

---

#### Update Description

```text
IF Product Interest Changes

↓

Update Task Description

Review updated product requirements.
```

---

### Benefits

- Dynamic task management
- Improved responsiveness
- Better sales execution

---

## Close Task

### Overview

The **Close Task** action automatically marks tasks as completed when predefined workflow conditions are met.

This keeps task lists clean and prevents sales teams from working on outdated activities.

---

### Examples

#### Lead Qualified

```text
IF Lead Status = Qualified

↓

Close Task

Initial Follow-Up
```

---

#### Lead Lost

```text
IF Lead Status = Closed Lost

↓

Close All Open Tasks
```

---

#### Opportunity Created

```text
IF Opportunity Created = True

↓

Close Lead Qualification Tasks
```

---

### Benefits

- Reduces task clutter
- Improves task accuracy
- Maintains clean pipelines

---

## Create Activity Log / Note

### Overview

The **Create Activity Log / Note** action records workflow-generated information directly in the Lead timeline.

These logs improve transparency by documenting automated workflow activities.

---

### Examples

#### Workflow Audit Entry

```text
Create Activity Log

Lead automatically qualified based on workflow conditions.
```

---

#### AI Recommendation

```text
Create Note

AI recommended next best action:
Schedule Demo.
```

---

#### Assignment Explanation

```text
Create Note

Assigned to Enterprise Sales Team because Budget exceeded 100,000.
```

---

### Benefits

- Better workflow transparency
- Improved audit tracking
- Enhanced collaboration
- Complete historical activity

---

## Task Selection Rules

### Overview

Certain workflow actions require an existing task before they can execute.

---

### Latest Open Task

The system automatically selects the most recently created task that is still open.

---

### Task by Type

The system selects a task based on the configured task category.

---

## Missing Task Handling

If no matching task exists:

- Update Task is skipped.
- Assign Task is skipped.
- Close Task is skipped.
- Workflow execution continues.
- A warning is recorded in Workflow Logs.

---

## Ownership Synchronization

### Overview

Tasks assigned using **Lead Owner** references automatically stay synchronized with Lead ownership changes.

---

### Example

```text
Lead Owner Changes

↓

Reassign Related Task
```

This ensures task responsibility always remains with the correct user.

---

## Workflow Execution Rules

### Sequential Execution

Task actions execute in the exact order they appear in the workflow.

Example:

```text
Create Task

↓

Wait 2 Days

↓

Update Task Priority

↓

Send Reminder Notification
```

Each action begins only after the previous action has completed.

---

### Atomic Processing

Task updates execute as a single operation.

If validation fails:

- No partial updates occur.
- The action is skipped safely.
- Workflow Logs record the error.

---

## Workflow Attribution

All workflow-generated records clearly indicate they were created by automation.

Examples include:

- Created by Workflow
- Updated by Workflow
- Closed by Workflow

This helps users distinguish automated activities from manual actions.

---

## Best Practices

- Create follow-up tasks immediately after Lead creation.
- Use task priorities to highlight important Leads.
- Automatically close outdated tasks.
- Record important workflow decisions using Activity Logs.
- Keep task ownership synchronized with Lead ownership.
- Regularly review Workflow Logs for skipped actions and configuration issues.
- Thoroughly test task workflows before publishing.

---

## Summary

Workflow Task & Activity Actions automate task creation, assignment, updates, closures, and activity logging.

By integrating these actions with workflow triggers, logic, and timing controls, organizations can ensure consistent follow-up processes, improve accountability, and maintain a complete history of Lead interactions while reducing manual effort.