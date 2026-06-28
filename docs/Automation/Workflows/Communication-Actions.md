---
sidebar_position: 6
title: Communication Actions
---

# Communication Actions

## Overview

Communication Actions enable workflows to automatically send messages and notifications to Leads and internal CRM users throughout the Lead lifecycle.

By automating communication, organizations can ensure that important messages are delivered consistently without requiring manual intervention.

Communication Actions can be combined with **Triggers**, **Logic Nodes**, **Action Nodes**, and **Timing Nodes** to create complete Lead engagement journeys.

---

## Benefits

Workflow Communication Actions help organizations:

- Respond instantly to new Leads.
- Automate follow-up communication.
- Notify sales representatives about important Lead events.
- Improve customer engagement.
- Maintain consistent messaging.
- Reduce manual communication efforts.

---

## Supported Communication Actions

Lead Workflows support the following communication actions:

| Action | Description |
|---------|-------------|
| Send Email | Send emails to Leads or CRM users |
| Send Internal Notification | Send in-app notifications to CRM users |
| Send WhatsApp Message | Send template-based WhatsApp messages |
| Send SMS | Send SMS messages to Leads |

---

## Send Email

### Overview

The **Send Email** action automatically delivers email messages using predefined email templates.

Emails can be sent to Leads or internal CRM users based on workflow conditions.

---

### Recipient Types

Emails can be sent to:

- Lead Email Address
- Lead Owner
- Specific CRM User

---

### Common Use Cases

#### Lead Acknowledgement

**Trigger:** Lead Created

```text
Send Email

Subject:
Thank You for Contacting Us

Body:
Thank you for contacting us.
Our team will reach out shortly.
```

---

#### Delayed Follow-Up

```text
Wait 1 Day

↓

Send Follow-Up Email
```

Example Message:

> Just checking in regarding your enquiry. Please let us know if you have any questions.

---

#### High-Intent Lead Alert

```text
IF Lead Score > 80

↓

Send Email to Lead Owner
```

Subject:

```
High-Intent Lead Assigned
```

---

### Email Personalization

Email templates support merge fields such as:

- Lead Name
- Company Name
- Lead Source
- Lead Owner
- Email Address
- Custom Fields

Example:

```text
Hello {{Lead Name}},

Thank you for your interest in our services.

Our team will contact you shortly.
```

---

### Benefits

- Immediate customer engagement
- Consistent communication
- Automated nurturing campaigns
- Reduced manual effort

---

## Send Internal Notification

### Overview

The **Send Internal Notification** action sends in-app notifications to CRM users.

These notifications help sales teams respond quickly without relying on external communication channels.

---

### Recipient Options

Notifications can be sent to:

- Lead Owner
- Team
- Specific CRM User

---

### Examples

#### New Lead Assignment

```text
Trigger:
Lead Created

↓

Notify Lead Owner

Message:
New Lead assigned to you.
```

---

#### SLA Warning

```text
IF Last Activity > 2 Days

↓

Notify Manager

Message:
Lead unattended for more than 48 hours.
```

---

#### High Priority Lead

```text
IF Budget > 50,000

↓

Notify Sales Manager
```

Message:

```
High-value Lead requires immediate attention.
```

---

### Notification Behavior

- Appears in the CRM Notification Center.
- Users can view notification history.
- Priority indicators highlight urgent notifications.

---

## Send WhatsApp Message

### Overview

The **Send WhatsApp Message** action automatically sends approved WhatsApp Business template messages.

Using templates ensures reliable and compliant communication.

---

### Common Use Cases

#### Website Lead Response

```text
Trigger:
Lead Created

IF Lead Source = Website

↓

Send WhatsApp Message
```

Example:

> Thank you for contacting us. Our team will reach out shortly.

---

#### Demo Reminder

```text
Wait Until Demo Date

↓

Send WhatsApp Reminder
```

---

#### High-Intent Engagement

```text
IF Lead Score > 90

↓

Send WhatsApp Message
```

Example:

> Would you like to schedule a quick consultation call?

---

### Template Variables

WhatsApp templates support merge fields such as:

- Lead Name
- Appointment Date
- Product Name
- Owner Name
- Company Name

Example:

```text
Hello {{Lead Name}},

Your demo is scheduled for {{Demo Date}}.
```

---

### Benefits

- Faster response times
- Higher customer engagement
- Mobile-first communication
- Consistent template-driven messaging

---

## Send SMS

### Overview

The **Send SMS** action sends text messages directly to Leads.

SMS is best suited for urgent notifications, appointment reminders, and verification messages.

---

### Common Use Cases

#### Verification Message

```text
Trigger:
Lead Created

↓

Send SMS
```

Example:

> Your verification code is **482930**.

---

#### Appointment Reminder

```text
Wait 30 Minutes Before Call

↓

Send SMS
```

Example:

> Your scheduled call begins in 30 minutes.

---

#### Follow-Up Reminder

```text
Wait 2 Days

↓

Send SMS
```

Example:

> Our team is still available to assist with your enquiry.

---

### SMS Personalization

SMS templates support merge fields including:

- Lead Name
- Appointment Date
- Owner Name
- Company Name

Example:

```text
Hello {{Lead Name}},

Your consultation is scheduled for {{Appointment Date}}.
```

---

### Benefits

- High visibility
- Immediate delivery
- Suitable for urgent communications
- Effective appointment reminders

---

## Delivery Failure Handling

### Overview

If a communication channel fails:

- The failure is recorded in Workflow Logs.
- Optional fallback actions may execute.
- Administrators can review delivery status.

---

### Example

```text
WhatsApp Delivery Failed

↓

Send Email Instead
```

---

## Rate Limiting

Communication Actions respect messaging provider limitations.

If provider limits are reached:

- Messages are automatically queued.
- Delivery resumes when limits allow.

No manual intervention is required.

---

## Best Practices

- Use **Email** for detailed communication and Lead nurturing.
- Use **WhatsApp** for quick customer engagement.
- Use **SMS** for urgent reminders and confirmations.
- Use **Internal Notifications** for sales team coordination.
- Always use approved communication templates.
- Personalize messages using merge fields.
- Review communication logs regularly.
- Configure fallback actions for important communications.

---

## Summary

Workflow Communication Actions help organizations automate customer and internal communications throughout the Lead lifecycle.

By combining Email, WhatsApp, SMS, and Internal Notifications with workflow logic and timing controls, organizations can improve response times, enhance customer engagement, and ensure consistent communication across every stage of the sales process.