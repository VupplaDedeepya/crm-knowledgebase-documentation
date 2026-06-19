---
title: Global Settings
sidebar_position: 6
---

# Global Settings

## Overview

Global Settings define the default behavior of the Pulse system across all communication channels. These settings provide centralized control over messaging, session management, AI behavior, and lead creation.

Channels configured to use **Global Defaults** automatically inherit these settings. Individual channels can override these values by disabling the **Use Global Defaults** option within their channel configuration.

Global Settings help ensure consistent customer experiences and standardized automation across all channels.

---

![Global-Settings](/img/PulseSettings/globalSettings.png)

## Default Messages

Default Messages define the system-generated messages used throughout customer conversations.

### Welcome Message

The first message displayed when a customer starts a conversation.

#### Example

> Hello! How can we help you today?

---

### First AI Response Message

The introductory message used when the AI assistant begins interacting with a customer.

#### Example

> Hi! I'm the virtual assistant. Let me help you.

---

### Fallback Message (Agent Handoff)

Displayed when the AI cannot confidently answer a customer's question and the conversation needs to be transferred to a human agent.

#### Example

> I'm not sure if I understood that. Let me connect you to a human agent.

---

### Offline Message

Displayed when customers contact support outside business hours and live support is unavailable.

#### Example

> Our support team is currently offline. Please leave your details and we will get back to you.

---

### Lead Capture Prompt

Used when the system requests customer information for lead generation or follow-up purposes.

#### Example

> Please share your name and contact details so we can assist you further.

---

## Session Settings

Session Settings control how customer conversations are managed and when they are considered complete.

### Session Ends When

Administrators can configure one or both of the following conditions:

- Agent ends the conversation
- Inactivity timeout is reached

---

### Inactivity Timeout

Automatically closes inactive conversations after the configured period.

#### Example

```text
30 Minutes
```

---

### Reopen Conversation on New Message

When enabled, a closed conversation is automatically reopened if the customer sends a new message.

#### Benefits

- Maintains conversation continuity
- Prevents duplicate conversations
- Improves customer experience

---

## AI Defaults

AI Defaults define how the AI assistant behaves across channels.

### Enable AI Responses by Default

When enabled, AI automatically responds to incoming customer messages unless overridden at the channel level.

---

### AI Confidence Threshold

Defines the minimum confidence level required before AI responds automatically.

#### Lower Threshold

- More automated responses
- Faster interactions
- Increased risk of inaccurate responses

#### Higher Threshold

- More accurate responses
- Increased human involvement
- Reduced automation

---

### Allow AI → Agent Handoff

When enabled, conversations can be transferred to a human agent when the AI is unable to confidently resolve a customer query.

---

### Maximum AI Responses per Conversation

Defines the maximum number of AI-generated responses allowed within a single conversation.

#### Configuration

- **0** = Unlimited AI responses
- Any positive value = Maximum number of AI responses allowed

#### Purpose

This setting helps:

- Control automation levels
- Prevent excessive AI interactions
- Determine when escalation should occur

---

## Lead Creation Defaults

Lead Creation Defaults determine how leads are generated from customer conversations.

### Lead Creation Mode

Select how leads should be created across Pulse channels.

#### Automated Lead Creation (AI)

The system automatically creates a lead when predefined lead creation conditions are met.

#### Best For

Organizations that want fully automated lead capture.

---

#### Agent Assisted Lead Creation

AI assists agents by identifying potential leads and providing recommendations, while agents review and confirm lead creation.

#### Best For

Organizations seeking a balance between automation and human oversight.

---

#### Manual Lead Creation

Leads are created only when users manually create them from the CRM interface.

#### Best For

Organizations requiring complete control over lead creation.

---

### Attach Conversation Summary to Lead

When enabled, the system generates an AI-powered summary of the conversation and attaches it to the lead record.

#### Benefits

- Faster lead qualification
- Better conversation context
- Reduced manual note-taking

---

### Avoid Lead Creation for Specific Tags

Administrators can define tags for which automatic lead creation should be skipped.

#### Example Tags

- Junk
- Spam
- Insufficient Data

:::note
If a conversation is classified with one of these tags, lead creation will not be triggered automatically.
:::

---

### Lead Creation Trigger

Defines when lead creation should occur.

#### When Session Ends

The lead is created after the conversation session is completed.

---

#### When Customer Provides Contact Details

The lead is created as soon as the customer submits contact information such as:

- Name
- Email Address
- Phone Number

---

## How Global Settings Work

Global Settings serve as the default configuration layer for Pulse.

When a channel is configured to use **Global Defaults**, the channel automatically inherits:

- Default Messages
- Session Settings
- AI Defaults
- Lead Creation Defaults

If a channel disables **Use Global Defaults**, administrators can configure channel-specific behavior without affecting other channels.

---

## Benefits of Global Settings

- Consistent customer experiences
- Centralized configuration management
- Reduced administrative effort
- Standardized automation behavior
- Simplified channel setup
- Flexible channel-level customization

:::tip
This centralized approach helps maintain consistency while still providing flexibility for individual channel requirements.
:::