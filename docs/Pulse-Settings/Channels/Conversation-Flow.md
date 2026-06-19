---
title: Conversation Flow
sidebar_position: 3
---

# Conversation Flow

## Overview

The Conversation Flow module allows administrators to design guided chatbot journeys using a visual drag-and-drop workflow builder.

The workflow determines how the chatbot interacts with visitors, collects information, answers questions, and transfers conversations to agents.

---

## Purpose

The workflow builder helps organizations:

- Automate customer interactions
- Guide visitors through predefined journeys
- Capture lead information
- Provide AI-powered responses
- Route conversations to agents
- Improve conversion and support efficiency

---

![Conversation-Flow](/img/PulseSettings/conversationFLow.png)

## Workflow Components

### Start Node

Every workflow begins with a Start Node.

The Start Node is automatically triggered when a visitor starts a chatbot session.

---

## Messaging Nodes

### Message Node

Displays a text message.

Examples:

- Welcome messages
- Instructions
- Notifications

---

### Quick Options Node

Presents clickable response options.

Example options:

- Sales
- Support
- Pricing

Each option can direct the visitor to a different workflow path.

---

## User Input Nodes

### Question Node

Captures a single response.

#### Supported Input Types

- Text
- Email
- Phone Number
- Dropdown

---

### Form Node

Collects multiple fields.

Examples:

- Name
- Email
- Phone
- Company

:::note
Collected data can be mapped directly to CRM records.
:::

---

## AI Nodes

### AI Response Node

Allows AI to answer visitor questions using configured knowledge sources.

#### Configuration Options

- AI response generation
- Maximum AI replies
- Fallback actions

---

## Logic Nodes

### Condition Node

Creates branching logic based on visitor responses.

#### Example

- If visitor selects **Pricing** → Pricing Flow
- If visitor selects **Support** → Support Flow

---

### Delay Node

Introduces a configurable delay before the next step.

Example:

> Wait 3 seconds before sending the next message.

---

## Action Nodes

### Agent Handoff Node

Transfers conversations to a human agent.

Example message:

> Connecting you to a support agent.

---

### End Conversation Node

Ends the workflow.

Example message:

> Thank you for contacting us.

---

## Workflow Publishing

### Draft Mode

Workflows can be saved without affecting live chatbot behavior.

### Publish

Only published workflows are used by the chatbot.

#### Validation Checks

Before publishing, Pulse validates:

- Missing connections
- Invalid node configurations
- Workflow loops
- Unreachable paths

---

## Conversation Simulator

The simulator allows administrators to test workflows before publishing.

Administrators can:

- Click response options
- Enter sample responses
- Test branching logic
- Verify chatbot behavior

:::tip
Use the simulator to ensure the workflow functions correctly before going live.
:::