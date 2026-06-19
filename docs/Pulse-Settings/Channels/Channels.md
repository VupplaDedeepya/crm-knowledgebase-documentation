---
title: Channels
sidebar_position: 2
---
# Channels

## Overview

Channels represent the communication platforms through which customers interact with your business using Pulse. Each channel can be independently configured to control AI responses, lead creation, conversation assignment, session management, business-hour behavior, and user access.

Pulse supports multiple communication channels, enabling organizations to manage customer interactions from a single platform while maintaining channel-specific behavior.

### Supported Channels

- WhatsApp
- Instagram
- Facebook Messenger
- Pulse Web Chat (Chatbot)

Each channel can be:

- Connected or disconnected
- Enabled or disabled
- AI-enabled or AI-disabled
- Assigned to specific users
- Configured independently from other channels

---

## Channels List

The Channels List page provides a centralized view of all configured communication channels.

![Channels](/img/PulseSettings/channels.png)

### Channel Summary

The dashboard displays channel statistics including:

| Metric | Description |
|----------|-------------|
| Total Channels | Shows the total number of channels configured within Pulse |
| Connected | Displays the number of channels currently connected and available for communication |
| Enabled | Shows the number of channels that are active and visible to users |
| AI Enabled | Displays channels where AI-powered responses are enabled |
| Needs Attention | Indicates channels that require configuration updates or have connection issues |

---

### Channel Information

Each channel card displays:

| Field | Description |
|---------|-------------|
| Channel Name | Name of communication channel |
| Display Name | Connected account or channel identifier |
| Connection Status | Indicates whether the channel is connected |
| AI Status | Shows if AI responses are enabled |
| Channel Status | Shows if channel is enabled |
| Assigned Users | Number of users assigned to the channel |

---

# Channel Configuration

Selecting a channel opens the Channel Configuration page.

Although every channel follows the same configuration structure, settings can be customized independently for each channel.

---

## 1. Channel Overview

The Channel Overview section displays basic information about the selected channel.

### Available Information

| Field | Description |
|---------|-------------|
| Channel Name | Name of connected channel |
| Platform | Communication platform type |
| Connected Account | Linked account information |
| Connection Status | Current channel connection status |

### Enable Channel

Controls whether the channel is available within Pulse.

#### When Disabled

- Channel becomes unavailable in Pulse Inbox
- Users cannot receive conversations from the channel
- Existing configuration remains intact

---

## 2. AI Response Settings

This section controls how AI handles customer conversations for the selected channel.

### Use Global AI Response Settings

When enabled, the channel inherits AI settings configured in Global Settings.

When disabled, channel-specific AI settings can be configured.

### Enable AI Responses

Allows AI to automatically respond to incoming customer messages.

#### Benefits

- Faster response times
- Reduced agent workload
- 24/7 customer engagement

### AI Confidence Threshold

Determines the confidence level required before AI sends a response.

#### Lower Threshold

- More AI responses
- Higher automation
- Increased risk of inaccurate responses

#### Higher Threshold

- More accurate responses
- More human intervention

### Allow AI → Agent Handoff

When enabled, conversations are automatically transferred to a human agent if AI cannot confidently resolve the customer's query.

---

## 3. Lead Creation Settings

Controls how leads are created from customer conversations.

### Use Global Lead Creation Settings

Allows the channel to inherit lead creation rules from Global Settings.

### Lead Creation Modes

#### Automated Lead Creation (AI)

AI automatically creates leads when predefined criteria are met.

#### Agent Assisted Lead Creation

Agents review conversations and create leads manually with AI assistance.

#### Manual Lead Creation

Leads are created only when users explicitly create them.

### Attach Conversation Summary to Lead

Automatically generates and attaches an AI-created conversation summary to the lead record.

#### Benefits

- Better context for sales teams
- Reduced manual note-taking
- Faster lead qualification

---

## 4. Session Settings

Controls how conversations are managed and closed.

### Use Global Session Settings

Applies organization-wide session settings.

### Session Ends When

#### Agent Ends Conversation

Conversation closes when the assigned agent ends the chat.

#### Inactivity Timeout

Automatically closes conversations after a specified period of inactivity.

##### Examples

- 30 Minutes
- 60 Minutes

### Reopen Conversation on New Message

Automatically reopens closed conversations when the customer sends a new message.

---

## 5. User Assignment

Controls which users can handle conversations from the selected channel.

### Use Global User Assignment

Inherits user channel mapping from Global Settings.

### User Mapping

Administrators can assign users individually to the channel.

:::note
Only assigned users can receive conversations from the channel.
:::

---

## 6. Assignment Rules

Determines how conversations are distributed among available agents.

### Use Global Assignment Rules

Applies organization-wide assignment logic.

### Assignment Modes

#### Manual Assignment

Conversations are manually assigned by supervisors or agents.

#### Round Robin

Conversations are distributed evenly among available agents in sequence.

**Example:**

Agent A → Agent B → Agent C → Agent A

#### Load Balanced

Conversations are assigned based on the current workload of each agent.

**Example:**

| Agent | Active Conversations |
|---------|---------------------|
| Agent A | 10 |
| Agent B | 2 |
| Agent C | 4 |

**New Conversation → Agent B**

### Max Conversations Per Agent

Defines the maximum number of active conversations an agent can handle simultaneously.

### Agent Status Filter

Determines which agents are eligible for assignment.

#### Examples

- Available Agents Only
- Online Agents Only
- Assign Regardless of Status

---

## 7. Business Hours Behavior

Controls how conversations are handled outside normal business hours.

### Use Global Business Hours Behavior

Uses organization-wide business hour settings.

### Business Hours

Example:

**Monday – Friday**  
**9:00 AM – 6:00 PM**

### AI Continues Responding

Allows AI to continue handling customer conversations outside business hours.

### Ask Customer for Details if AI Cannot Answer

Collects customer information when AI cannot resolve a query.

#### Typical Information Collected

- Name
- Email
- Phone Number
- Query Details

### Create Lead from After-Hours Conversation

Automatically creates leads from conversations received outside business hours.

---

## 8. Compliance & Data Settings

Controls channel-specific compliance and data management behavior.

### Use Global Compliance & Data Settings

Applies organization-wide compliance rules.

These settings help ensure:

- Data privacy compliance
- Secure conversation handling
- Regulatory adherence
- Consistent data retention policies

---

# Channel-Specific Notes

## WhatsApp

Designed for customer conversations through WhatsApp Business.

### Best Used For

- Customer support
- Lead qualification
- Appointment booking
- Sales inquiries

---

## Instagram

Handles messages received through Instagram Business accounts.

### Best Used For

- Social media engagement
- Product inquiries
- Campaign responses
- Marketing interactions

---

## Messenger

Handles conversations from Facebook Messenger.

### Best Used For

- Customer support
- Marketing campaigns
- Lead generation
- Community engagement

---