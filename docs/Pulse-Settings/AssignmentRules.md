---
title: Assignment Rules
sidebar_position: 3
---

# Assignment Rules

## Overview

Assignment Rules determine how incoming customer conversations are routed and assigned to agents within Pulse Inbox.

These rules help ensure conversations are distributed efficiently, response times are maintained, and agent workloads are balanced.

Assignment Rules act as the default routing configuration for all Pulse channels. Channels configured to use **Global Defaults** automatically inherit these settings, while channels with custom configurations can override them.

---

![Assignmnet](/img/PulseSettings/Assignment.png)

## Conversation Assignment Flow

The Assignment Rules page provides a visual representation of how conversations move through the assignment process.

```text
New Conversation
        ↓
    Agent Queue
        ↓
   Online Agents
        ↓
  Queue Fallback
```

### New Conversation

A conversation is received from a connected channel such as:

- WhatsApp
- Instagram
- Messenger
- Web Chat

### Agent Queue

The system evaluates assignment rules and identifies eligible agents.

### Online Agents

Conversations are assigned based on the configured assignment mode and agent availability.

### Queue Fallback

If no eligible agent is available, the system applies the configured fallback behavior.

---

## Assignment Mode

Assignment Mode determines how conversations are distributed among agents.

### Manual Assignment

Conversations are not automatically assigned.

Instead, they appear in the unassigned queue, allowing agents or supervisors to manually assign them.

This mode is useful when conversations require review before assignment or when managers prefer full control over workload distribution.

---

### Round Robin

Conversations are assigned sequentially among available agents.

#### Example

```text
Agent A → Agent B → Agent C → Agent A
```

This approach ensures a fair and balanced distribution of conversations across the team.

---

### Load Balanced

Conversations are automatically assigned to the agent with the lowest number of active conversations.

This method helps prevent agent overload and optimize workload distribution.

---

## Maximum Conversations per Agent

This setting limits the number of active conversations that can be assigned to a single agent at one time.

### Max Conversations

Specify the maximum number of concurrent conversations an agent can handle.

#### Example

```text
Max Conversations = 10
```

When an agent reaches this limit, new conversations are routed to other eligible agents or handled using the configured fallback behavior.

### Benefits

- Preventing agent overload
- Improving response quality
- Ensuring fair workload distribution

---

## Agent Status Filter

The Agent Status Filter determines which agents are eligible to receive new conversations.

### Assign Only to Online Agents

Conversations are assigned only to agents currently marked as online.

This option helps ensure customers are connected to agents who are available to respond immediately.

---

### Assign Regardless of Status

Conversations may be assigned regardless of an agent's current status.

This option is useful when organizations want all assigned agents to receive conversations, even if they are temporarily unavailable.

---

### Assign to Agents with Specific Status

This option allows conversations to be assigned only to agents with selected availability statuses.

Administrators can choose one or more statuses such as:

- In the Office
- Work from Home
- On Break
- Out for Lunch
- Do Not Disturb
- Out Sick
- Out of Office

This helps ensure conversations are routed according to the organization's workforce availability and operational requirements.

#### Example

Conversations can be assigned only to agents who are:

- In the Office
- Working from Home

while excluding agents who are unavailable.

---

## Fallback Handling

Fallback Handling defines what happens when no eligible agent is available to receive a conversation.

### Queue Conversation

The conversation is placed in a queue until an eligible agent becomes available.

Customers remain in the queue and are connected as soon as an agent can accept the conversation.

---

### Custom Message

The system displays a predefined message to the customer when agents are unavailable.

#### Example

> All agents are occupied at the moment. Please share your contact details and our team will get back to you.

This option helps manage customer expectations while collecting information for follow-up.

---

### AI Response

The AI assistant continues interacting with the customer until a human agent becomes available.

This option helps provide immediate assistance during:

- After-hours support
- Peak traffic periods
- Temporary agent shortages

---

## How Assignment Rules Work

When a new conversation is received:

1. Pulse identifies the channel from which the conversation originated.
2. The system checks whether the channel uses Global Assignment Rules or channel-specific rules.
3. Eligible agents are identified based on assignment settings and agent availability.
4. Conversations are distributed according to the selected Assignment Mode.
5. The system verifies that the assigned agent has not exceeded the maximum conversation limit.
6. If no eligible agent is available, the configured Fallback Handling option is applied.
7. The conversation appears in the assigned agent's Pulse Inbox.

---

## Best Practices

- Use **Round Robin** for fair workload distribution across support teams.
- Use **Load Balanced** assignment when conversation volumes vary significantly.
- Configure a reasonable maximum conversation limit to prevent agent overload.
- Use **Assign Only to Online Agents** for real-time support environments.
- Configure **AI Response** or **Custom Message** fallback options to ensure customers always receive a response when agents are unavailable.

:::tip
Properly configured Assignment Rules help improve response times, balance workloads, and provide a consistent customer experience across all communication channels.
:::