---
sidebar_position: 5
title: Timing & Delay Nodes
---

# Workflow Timing & Delay Nodes

## Overview

Workflow **Timing & Delay Nodes** allow administrators to control **when** workflow actions are executed.

In many business scenarios, actions should not occur immediately after a Lead enters a workflow. Instead, they may need to be delayed for a specific duration or scheduled for a particular date and time.

Timing Nodes help build structured and personalized automation journeys by introducing controlled pauses between workflow steps.

---

## Common Use Cases

Timing Nodes can be used to:

- Send follow-up emails after a delay.
- Create tasks several days after Lead creation.
- Wait until a scheduled demo date.
- Trigger renewal reminders.
- Schedule actions during business hours.

---

## Benefits

Using Timing Nodes helps organizations:

- Build personalized Lead journeys.
- Improve customer engagement.
- Automate scheduled follow-ups.
- Reduce manual scheduling.
- Ensure timely reminders and notifications.

---

## Supported Timing Nodes

Lead Workflows support the following timing controls:

| Timing Node | Description |
|--------------|-------------|
| Wait for Duration | Pause workflow execution for a specified period. |
| Wait Until Date/Time | Pause execution until a specific date, time, or Lead date field. |

Both Timing Nodes can be placed between Actions, Logic Nodes, or other workflow steps.

---

## Wait for Duration

### Overview

The **Wait for Duration** node pauses workflow execution for a configured amount of time before continuing to the next step.

This is useful when follow-up activities should occur after a delay instead of immediately.

---

### Supported Time Units

Administrators can configure delays using:

- Minutes
- Hours
- Days

---

### Examples

#### Example 1

```text
Wait 10 Minutes

↓

Send Welcome Email
```

---

#### Example 2

```text
Wait 2 Days

↓

Create Follow-Up Task
```

---

#### Example 3

```text
IF Lead Status = New

↓

Wait 1 Day

↓

Send Reminder to Lead Owner
```

---

### Common Use Cases

#### Lead Nurturing

Delay educational emails or marketing campaigns.

---

#### Follow-Up Reminders

Allow time for customers to respond before creating a follow-up task.

---

#### Escalation Processes

Escalate unattended Leads after a specified period.

---

#### Sales Engagement

Schedule multiple customer touchpoints over several days.

---

### Validation Rules

- Minimum wait duration is **1 minute**.
- Maximum duration depends on system configuration.
- Workflow resumes automatically after the waiting period.
- Existing waiting Leads continue using their original timer even if the workflow is later modified.

---

## Wait Until Date/Time

### Overview

The **Wait Until Date/Time** node pauses workflow execution until a specific date or time is reached.

Unlike **Wait for Duration**, which uses a relative delay, this node waits until an exact timestamp.

---

### Configuration Options

Administrators can configure the node using:

- Fixed Date & Time
- Lead Date Field

---

## Fixed Date & Time

### Overview

Workflow execution remains paused until the configured calendar date and time is reached.

---

### Example

```text
Wait Until

10 January 2027
09:00 AM

↓

Send Renewal Email
```

---

### Common Use Cases

- Product launches
- Campaign scheduling
- Event reminders
- Renewal notifications

---

## Wait Using Lead Date Fields

### Overview

Instead of a fixed date, workflows can wait until the value stored in a Lead Date field.

---

### Supported Lead Date Fields

### Examples include:

- Created Date
- Demo Date
- Renewal Date
- Contract Expiry Date
- Custom Date Fields

---

#### Example 1

```text
Wait Until

Demo Date

↓

Send Demo Reminder
```

---

### Example 2

```text
Wait Until

Renewal Date

↓

Create Renewal Follow-Up Task
```

---

### Benefits

- Personalized scheduling
- Dynamic workflow execution
- No manual scheduling required
- Automatically adapts to each Lead

---

## Date Field Rules

### Future Date

If the selected date is in the future:

- Workflow enters a waiting state.
- Execution resumes automatically when the date arrives.

---

### Past Date

If the selected date has already passed:

- Wait step is skipped.
- Workflow immediately proceeds to the next action.

---

### Missing Date

If no value exists:

- Wait step is skipped.
- Workflow continues normally.
- A warning is recorded in Workflow Logs.

---

### Expired Fixed Dates

If the configured fixed date has already passed:

- Wait is skipped.
- Workflow continues immediately.

---

## Workflow Waiting State

### Overview

When a Lead reaches a Timing Node:

- Workflow pauses only for that Lead.
- Other Leads continue normally.
- Other workflows continue running.
- No user intervention is required.

Once the configured condition is satisfied, the workflow automatically resumes.

---

### Example

```text
Lead Created

↓

Wait 5 Minutes

↓

Send Product Brochure Email
```

If 100 Leads enter simultaneously:

- Every Lead maintains its own timer.
- Each resumes independently after 5 minutes.

---

## Independent Lead Processing

Timing Nodes affect **only** the Lead currently waiting.

They do **not** pause:

- Other Leads
- Other Workflows
- CRM Background Processes
- Workflow Engine Operations

---

### Example

```text
500 Webinar Registrations

↓

Wait Until Webinar Date

↓

Send Webinar Reminder
```

Each Lead waits independently while other CRM automation continues uninterrupted.

---

## Lead Updates During Waiting

### Overview

A Lead can continue to be updated while waiting inside a Timing Node.

Examples include:

- Owner changes
- Status updates
- Budget changes
- Notes added
- Field updates

These changes **do not restart** or **reset** the waiting period.

---

### Example

```text
Lead Created

↓

Wait 2 Days

↓

Create Follow-Up Task
```

If the Lead Owner changes after one day:

- The timer continues.
- Workflow does not restart.
- Task is created after the original two-day wait.

---

## Long-Term Waiting Periods

### Overview

Workflows support long-duration waiting periods such as:

- Weeks
- Months
- Annual reminders

The system stores waiting information and automatically resumes execution when the scheduled time arrives.

---

### Example

```text
Lead Created

↓

Wait Until Renewal Date

↓

Create Renewal Reminder Task
```

If the renewal date is **11 months away**:

- Lead remains in a waiting state.
- No manual monitoring is required.
- Workflow resumes automatically.

---

### Common Use Cases

#### Subscription Renewals

Notify teams before contract expiration.

#### Insurance Renewals

Generate renewal reminders before policy expiry.

#### Real Estate

Schedule reminders based on property milestones.

#### Annual Maintenance Contracts

Automatically create renewal activities.

---

## Best Practices

- Use short delays for follow-up emails and reminders.
- Use **Wait Until Date** for milestone-based workflows.
- Prefer **Lead Date Fields** for personalized scheduling.
- Ensure date fields contain valid values.
- Review Workflow Logs for skipped waits.
- Test timing scenarios thoroughly before publishing.

---

## Summary

Timing & Delay Nodes allow administrators to schedule workflow actions intelligently.

By combining **Wait for Duration** and **Wait Until Date/Time**, organizations can create personalized customer journeys, automate follow-ups, and ensure timely engagement without manual intervention.