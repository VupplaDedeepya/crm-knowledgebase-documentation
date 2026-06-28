---
sidebar_position: 10
title: Sequences
---

# Sequences

## Overview

Sequences help sales teams automate and manage structured follow-up activities for Leads and Deals over a period of time.

Unlike **Workflows**, which primarily automate CRM processes and record updates, **Sequences** focus on sales engagement by combining automated outreach, manual tasks, follow-up activities, and time-based actions into a predefined cadence.

Sequences ensure that every Lead or Deal receives timely and consistent engagement throughout the sales cycle.

---

## Benefits of Sequences

Using Sequences helps organizations:

- Standardize sales follow-up processes.
- Reduce missed follow-ups.
- Improve customer engagement.
- Increase response and conversion rates.
- Automate repetitive outreach activities.
- Help sales teams stay organized and productive.

---

## Sequence Management

### Creating a Sequence

To create a new Sequence:

1. Navigate to **Automation → Sequences**.
2. Click **Create Sequence**.
3. Enter a **Sequence Name**.
4. (Optional) Enter a **Description**.
5. Configure the **Sequence Settings**.
6. Add steps using the **Sequence Builder**.
7. Save the sequence as a draft or publish it.

![Create-Sequence](/img/Automation/CreateSequence.png)

---

## Sequence Settings

The **Sequence Settings** panel defines the basic configuration of the sequence.

---

### Target

Choose the record type that can be enrolled into the sequence.

| Option | Description |
|---------|-------------|
| Lead | Sequence can only enroll Lead records. |
| Deal | Sequence can only enroll Deal records. |
| Both | Sequence can enroll both Leads and Deals. |

---

### Owner

Select who owns and manages the sequence.

#### User

Assign the sequence to a specific CRM user.

#### Team

Assign the sequence to a CRM team.

> **Note**
>
> The selected owner is responsible for monitoring and managing sequence-related activities.

---

### Exit Conditions

Exit conditions determine when a record automatically leaves the sequence.

#### Exit on Meeting Booked

When enabled, the sequence automatically stops once a meeting has been scheduled.

This prevents unnecessary follow-up communication after meaningful engagement has been established.

---

## Sequence Builder

The **Sequence Builder** allows users to create a series of automated and manual steps.

Steps are added to the canvas in the order they should execute.

---

### Adding a Step

To add a new step:

1. Click the **+** icon on the canvas.
2. Select the desired step type.
3. Configure the step settings.
4. Save the step.

Each configured step appears as a node within the sequence canvas.

---

## Outreach Actions

Outreach Actions automatically communicate with Leads, Deals, or CRM users.

---

### Send Email (Auto)

Automatically sends an email using a predefined email template.

#### Common Use Cases

- Welcome emails
- Proposal follow-ups
- Reminder emails
- Re-engagement campaigns

---

### Send WhatsApp (Auto)

Automatically sends approved WhatsApp template messages.

#### Common Use Cases

- Instant responses
- Appointment reminders
- Follow-up messages

---

### Internal Notification

Sends in-app notifications to CRM users.

#### Common Use Cases

- New Lead assignments
- Deal alerts
- Follow-up reminders

---

## Manual Actions

Manual Actions require user intervention before the sequence continues.

Supported manual actions include:

| Action | Description |
|---------|-------------|
| Manual Email | Prompt the assigned user to send a personalized email. |
| Manual Call | Create a call activity for the sales representative. |
| Manual WhatsApp | Prompt the assigned user to manually send a WhatsApp message. |
| Create Task | Create a follow-up task. |
| Assign Task | Assign a task to a user or team. |

---

## Timing Controls

Timing controls determine when the next sequence step executes.

---

### Wait for Duration

Pause the sequence for a specific amount of time.

#### Examples

- Wait 1 Day
- Wait 3 Days
- Wait 1 Week

---

### Wait Until Date/Time

Pause execution until a specific date or a record date field.

#### Examples

- Wait Until Demo Date
- Wait Until Renewal Date

---

## Conditions & Logic

Logic steps allow sequences to follow different execution paths based on engagement or CRM data.

Supported logic includes:

- IF
- ELSE IF
- ELSE
- Branching

---

### Engagement Conditions

Sequences can evaluate customer engagement such as:

- Email Opened
- Email Replied
- WhatsApp Replied
- Meeting Booked

#### Example

```text
IF Email Replied

↓

Stop Sequence

ELSE

↓

Send Follow-Up Email
```

---

## CRM Actions

Sequences can update CRM records while executing.

Supported CRM actions include:

- Update Field
- Assign Owner
- Add Tag
- Remove Tag
- Create Note

---

### Example

```text
IF Lead Score > 80

↓

Add Tag

Hot Lead
```

---

## Sequence Controls

Sequence Controls determine how the sequence behaves during execution.

---

### Pause Sequence

Temporarily pauses sequence execution.

---

### Stop Sequence

Immediately ends the sequence.

---

### Exit on Reply

Automatically exits the sequence when the recipient replies.

---

### Exit on Meeting Booked

Automatically exits the sequence when a meeting has been scheduled.

---

### Skip Next Step

Skips the immediately following step and continues with the remaining sequence.

---

## Configuration Panel

Selecting any step on the Sequence Builder opens its **Configuration Panel**.

The Configuration Panel allows users to:

- Configure templates
- Select recipients
- Define delays
- Configure conditions
- Manage CRM actions
- Edit step settings

> **Note**
>
> Changes made in the Configuration Panel apply only to the selected step.

---

## Saving and Publishing

### Save

Stores the sequence as a **Draft**.

Draft sequences cannot enroll Leads or Deals.

---

### Publish

Activates the sequence and makes it available for enrollment.

Only published sequences can execute.

---

### Cancel

Discards all unsaved changes and returns to the Sequence list.

---

## Example Sequence

### New Lead Follow-Up Sequence

```text
Send Welcome Email

↓

Wait 1 Day

↓

Create Follow-Up Task

↓

IF Email Replied

    ↓
    Stop Sequence

ELSE

    ↓
    Send WhatsApp Reminder

↓

Wait 2 Days

↓

Create Call Task
```

This sequence ensures consistent follow-up while automatically stopping once the Lead responds.

---

## Best Practices

- Keep each sequence focused on a single objective.
- Combine automated and manual actions.
- Configure appropriate exit conditions.
- Add delays between outreach attempts to avoid overwhelming recipients.
- Regularly monitor engagement metrics and optimize sequence performance.
- Test every sequence before publishing it to production.

---

## Summary

Sequences help automate structured sales engagement through a combination of automated communication, manual activities, CRM updates, timing controls, and conditional logic.

By using Sequences, sales teams can deliver consistent follow-ups, improve customer engagement, reduce manual effort, and increase conversion rates throughout the sales lifecycle.