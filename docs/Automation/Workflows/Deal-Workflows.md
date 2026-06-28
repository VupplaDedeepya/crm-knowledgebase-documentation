---
sidebar_position: 9
title: Deal Workflows
---

# Deal Workflows

## Overview

Deal Workflows help automate activities and business processes related to Deals throughout the sales pipeline.

By automating repetitive tasks, organizations can reduce manual effort, improve consistency, and help sales teams manage opportunities more efficiently.

Deal Workflows use the same workflow builder and automation capabilities available in **Lead Workflows**. The primary difference is that Deal Workflows operate on **Deal records** and **Deal-specific fields**.

Examples of Deal-specific fields include:

- Deal Value
- Deal Stage
- Deal Pipeline
- Probability
- Expected Close Date
- Deal Owner

---

## Benefits

Deal Workflows help organizations:

- Automate repetitive sales processes.
- Improve pipeline consistency.
- Ensure timely follow-ups.
- Reduce manual updates.
- Improve collaboration between sales teams.
- Increase visibility into the sales pipeline.

---

## Deal Workflow Triggers

A Deal Workflow begins when a configured trigger event occurs.

### Supported Triggers

| Trigger | Description |
|----------|-------------|
| Deal Created | Starts when a new Deal is created |
| Deal Updated | Starts when an existing Deal is updated |
| Deal Stage Changed | Starts when a Deal moves between stages |
| Time-Based Deal Scan | Executes on a scheduled basis |
| Webhook (Deal Creation/Update) | Starts when a Deal is created or updated through an external integration |

---

### Example Scenarios

A workflow can automatically start when:

- A new Deal is created.
- A Deal moves from **Proposal** to **Negotiation**.
- A Deal value exceeds a predefined amount.
- A Deal reaches its expected close date.
- A Deal is received through an external API.

---

## Entry Filters

### Overview

Entry Filters determine which Deals are eligible to enter a workflow.

Administrators can configure one or more conditions.

> **Note**
>
> All configured conditions must evaluate to **TRUE** before a Deal enters the workflow.

---

### Example

Run a workflow only when:

| Field | Condition | Value |
|---------|-----------|-------|
| Pipeline | Equals | Enterprise Sales |
| Deal Value | Greater Than | 100,000 |
| Country | Equals | India |

Only Deals matching all configured conditions will enter the workflow.

---

## Logic & Control Nodes

Deal Workflows support the same Logic & Control Nodes available in Lead Workflows.

### Supported Nodes

- IF
- ELSE IF
- ELSE
- Branch
- Stop Workflow

These nodes enable intelligent routing and automation based on Deal information.

---

### Example

```text
IF Deal Value > 100,000

↓

Assign Enterprise Sales Team

ELSE

↓

Assign Standard Sales Team
```

---

### Common Use Cases

- High-value Deal routing
- Pipeline-specific automation
- Stage-based business rules
- Workflow termination for Closed Lost Deals

---

## Data Update Actions

Deal Workflows support automated updates to Deal records.

### Supported Actions

| Action | Description |
|---------|-------------|
| Update Field | Update a single Deal field |
| Update Multiple Fields | Update multiple fields together |
| Assign Owner | Assign or change the Deal Owner |
| Move Stage | Move the Deal to another stage |
| Update Status | Update the Deal status |
| Add Tag | Add Tags |
| Remove Tag | Remove Tags |
| Create New Deal | Create another Deal |
| Update Related Records | Update linked CRM records |

---

### Example

```text
IF Deal Value > 100,000

↓

Update Priority = High

↓

Assign Enterprise Sales Manager
```

---

## Communication Actions

Deal Workflows can automatically communicate with customers and CRM users.

### Supported Communication Actions

- Send Email
- Send Internal Notification
- Send WhatsApp Message
- Send SMS

---

### Example

```text
When Deal Stage = Proposal

↓

Send Proposal Email

↓

Notify Deal Owner
```

---

### Common Use Cases

- Proposal notifications
- Deal approval emails
- Customer follow-ups
- Internal sales alerts
- Closing reminders

---

## Timing Controls

Timing Nodes allow Deal actions to be delayed or scheduled.

### Supported Timing Nodes

| Timing Node | Description |
|--------------|-------------|
| Wait for Duration | Delay workflow execution for a specified period |
| Wait Until Date/Time | Resume workflow on a specific date or Deal date field |

---

### Example 1

```text
Wait 2 Days

↓

Create Follow-Up Task
```

---

### Example 2

```text
Wait Until Expected Close Date

↓

Notify Deal Owner
```

---

### Common Use Cases

- Proposal follow-ups
- Contract reminders
- Renewal notifications
- Deal review meetings
- Payment reminders

---

## Task & Activity Actions

Deal Workflows automatically create and manage sales activities.

### Supported Actions

| Action | Description |
|---------|-------------|
| Create Task | Create Deal-related tasks |
| Assign Task | Assign tasks to users |
| Update Task | Modify task details |
| Close Task | Close completed tasks |
| Create Activity Log | Record workflow activity |
| Create Note | Add notes to the Deal timeline |

---

### Example

#### When a Deal is Created

```text
Create Follow-Up Task
```

---

#### When a Deal is Closed Won

```text
Close Open Tasks

↓

Create Activity Note
```

---

### Common Use Cases

- Sales follow-up tasks
- Renewal reminders
- Customer meetings
- Proposal reviews
- Closing activities

---

## Integration Actions

Deal Workflows support outbound integrations using Webhooks.

These integrations allow Deal information to be shared with external systems.

---

### Common Integrations

- Marketing Platforms
- ERP Systems
- Analytics Platforms
- Internal Business Applications

---

### Example

```text
IF Deal Value > 100,000

↓

Call Webhook

↓

Send Deal Data to Analytics Platform
```

---

### Benefits

- Synchronize Deal data across systems.
- Improve reporting.
- Automate downstream business processes.
- Eliminate manual data entry.

---

## Best Practices

- Use Entry Filters to target only relevant Deals.
- Automate Deal assignment whenever possible.
- Create follow-up tasks automatically.
- Configure reminders for stalled Deals.
- Notify sales teams about high-value opportunities.
- Use Tags for segmentation and reporting.
- Integrate Deal Workflows with external systems when required.
- Review workflow execution logs regularly.
- Thoroughly test workflows before activating them in production.

---

## Summary

Deal Workflows extend workflow automation to the Deal lifecycle by providing automated triggers, intelligent routing, data updates, communication actions, timing controls, task management, and system integrations.

By combining these capabilities, organizations can automate repetitive sales processes, maintain consistent pipeline management, improve collaboration, and ensure opportunities move efficiently through every stage of the sales cycle.