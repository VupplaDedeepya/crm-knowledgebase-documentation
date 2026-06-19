---
title: Support Availability
sidebar_position: 5
---

# Support Availability

## Overview

Support Availability defines when human agents are available to handle customer conversations and how the system behaves when customers contact your organization outside those hours.

These settings serve as the default availability rules for all Pulse channels. Channels configured to use **Global Defaults** automatically inherit these settings, while channels with custom configurations can override them.

Support Availability consists of three sections:

- Business Hours
- Holidays
- After-Hours Handling

These settings influence:

- Conversation routing
- AI responses
- Lead capture
- Customer communication

---

## Business Hours

The **Business Hours** tab displays the organization's configured working schedule used by Pulse to determine agent availability and after-hours behavior.

This information is inherited from the organization's work schedule and is provided as a read-only reference within Pulse.

![Business-Hours](/img/PulseSettings/businessHours.png)

### Displayed Information

The Business Hours section displays:

- Time Zone
- Working Days
- Working Hours
- Closed Days

### Business Hours Behavior

During business hours:

- Conversations can be routed to available agents.
- Assignment Rules are applied.
- Human support is available based on agent availability.

Outside business hours:

- Pulse follows the configured After-Hours Handling settings.

:::note
To modify the time zone, working days, or business hours, navigate to:

**Organization Settings → Work Schedule**
:::

---

## Holidays

The **Holidays** tab displays the non-working days configured for the organization.

By default, Pulse uses the organization's holiday calendar when **Use Organization Holidays List** is enabled.

The displayed holidays are synchronized from the organization's calendar and are used to determine support availability.

### Examples of Holidays

- Republic Day
- Independence Day
- Christmas
- Organization-specific holidays

![Holidays](/img/PulseSettings/Holidays.png)

### Holiday Behavior

When customers contact support on a configured holiday:

- Pulse treats the interaction as an after-hours conversation.
- After-Hours Handling rules are applied automatically.

:::note
Holiday dates are inherited from the organization's calendar.

Changes made to organization holidays are automatically reflected in Pulse.
:::

---

## After-Hours Handling

After-Hours Handling controls how the system responds when customers contact your organization outside business hours or on holidays.

---

![After-Hour-Handling](/img/PulseSettings/afterHour.png)

### AI Continues Responding

When enabled:

- AI continues answering customer questions even when agents are unavailable.
- Customers receive immediate assistance.
- Support coverage extends beyond normal business hours.

### When Disabled

Customers are shown an after-hours message informing them that support is currently unavailable.

---

### After-Hours Message

The after-hours message is displayed when:

- Customers contact support outside business hours.
- AI responses are unavailable or disabled.

#### Example

> Our support team is currently offline. Please leave your details and we will get back to you.

This helps set clear customer expectations when live support is unavailable.

---

### Ask Customer for Details if AI Cannot Answer

When enabled, the system requests customer information if the AI is unable to resolve the query.

### Typical Information Collected

- Name
- Email Address
- Phone Number
- Inquiry Details

This information can be used by support teams for follow-up communication.

### When Disabled

The chatbot displays a predefined message informing the customer that additional assistance will be provided later.

#### Example

> We are sorry, our Virtual Assistant is unable to help with your question at this time. Please leave your details and our team will contact you.

---

### Queue Conversation for Next Business Day

When enabled:

- Conversations received outside support hours are placed into a queue.
- Queued conversations become available to agents on the next business day.
- Customer inquiries are preserved for follow-up.

### Benefits

- Prevents missed conversations
- Ensures customer follow-up
- Improves support continuity

---

## How Support Availability Works

When a customer starts a conversation:

1. Pulse checks the configured Support Availability settings.
2. During business hours, conversations may be routed to available agents.
3. Outside business hours or on holidays, After-Hours Handling rules are applied.
4. If AI responses are enabled, the chatbot attempts to assist the customer.
5. If AI cannot resolve the request, customer details may be collected for follow-up.
6. Queued conversations can be assigned to agents when support hours resume.

---

## Best Practices

- Keep business hours aligned with actual support availability.
- Maintain an up-to-date holiday calendar.
- Enable AI responses to provide assistance outside business hours.
- Configure meaningful after-hours messages to manage customer expectations.
- Collect customer details when AI cannot resolve requests.
- Use conversation queuing to ensure inquiries are not missed.

:::tip
Properly configured Support Availability settings help ensure a consistent customer experience while managing expectations when support agents are unavailable.
:::