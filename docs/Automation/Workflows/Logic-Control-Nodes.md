---
sidebar_position: 3
title: Logic & Control Nodes
---

# Logic & Control Nodes

## Overview

After a Lead enters a workflow through a configured trigger and satisfies the entry filters, **Workflow Logic & Control Nodes** determine how the Lead progresses through the workflow.

These nodes enable administrators to build intelligent automation paths without writing code by evaluating Lead data and directing Leads to different workflow actions based on predefined conditions.

Logic Nodes can be used to automate scenarios such as:

- Assigning Leads based on their source.
- Routing high-value opportunities to specialized sales teams.
- Sending different communication templates based on industry.
- Handling alternate business scenarios.
- Stopping workflow execution when specific conditions are met.

---

## Benefits of Logic Nodes

Using Logic Nodes provides several advantages:

- Create dynamic workflow paths.
- Automate business decision-making.
- Reduce manual Lead routing.
- Support multiple outcomes within a single workflow.
- Improve Lead qualification and segmentation.
- Build complex workflows without technical expertise.

---

## IF Condition Node

### Overview

The **IF Condition** node evaluates Lead information and determines whether a Lead should follow a particular workflow path.

It acts as a decision point where workflow execution depends on whether the configured conditions evaluate to **TRUE** or **FALSE**.

---

## How It Works

When a Lead reaches an IF node:

1. The system evaluates all configured conditions.
2. Conditions use **AND** logic.
3. If every condition evaluates to **TRUE**, the Lead follows the **True Path**.
4. If any condition evaluates to **FALSE**, the Lead follows the **False Path**.

---

## Configuring an IF Condition

An IF node may contain:

- A single condition
- Multiple conditions

> **Note**
>
> All configured conditions must evaluate to **TRUE** for the workflow to follow the True Path.

---

## Available Fields

Conditions can use:

- Standard Lead fields
- System fields
- Custom fields
- Hidden Lead fields

---

## Example Use Cases

#   ## Website Lead Assignment

**Condition**

```
Lead Source = Website
```

**Action**

```
Assign Website Sales Representative
```

---

### High-Value Lead Qualification

**Condition**

```
Budget > 50,000
```

**Action**

```
Assign Senior Sales Manager
```

---

### Industry-Specific Routing

**Condition**

```
Industry = Retail
```

**Action**

```
Send Retail Sales Playbook
```

---

## ELSE IF Node

### Overview

The **ELSE IF** node allows additional decision paths when the previous IF condition is not satisfied.

Instead of creating multiple workflows, administrators can evaluate multiple business scenarios sequentially.

---

## How It Works

When an IF condition evaluates to **FALSE**:

1. The first ELSE IF node is evaluated.
2. If its conditions are satisfied, that branch executes.
3. Otherwise, the workflow evaluates the next ELSE IF node.
4. Evaluation continues until a matching condition is found.

Each ELSE IF node contains its own independent set of conditions.

---

## Example

```text
IF Budget > 100,000
    → Enterprise Sales Team

ELSE IF Budget > 50,000
    → Mid-Market Sales Team

ELSE IF Budget > 10,000
    → SMB Sales Team

ELSE
    → General Sales Queue
```

### Result

The Lead is automatically routed based on its Budget value.

---

## ELSE Node

### Overview

The **ELSE** node acts as the default workflow path whenever no IF or ELSE IF conditions are satisfied.

Unlike IF and ELSE IF nodes, the ELSE node contains **no conditions**.

---

## How It Works

The ELSE node:

- Executes only after all IF and ELSE IF conditions fail.
- Acts as the workflow's default route.
- Ensures Leads always continue through the workflow.

---

## Example

```text
IF Industry = Healthcare
    → Send Healthcare Campaign

ELSE IF Industry = Retail
    → Send Retail Campaign

ELSE
    → Send General Campaign
```

### Result

Any Lead that does not belong to Healthcare or Retail automatically follows the ELSE path.

---

## Branch Node

### Overview

A **Branch Node** allows administrators to create multiple workflow routes from a single point without nesting several IF statements.

Each branch has its own condition set.

---

## How Branch Evaluation Works

When a Lead reaches a Branch Node:

1. Branches are evaluated from top to bottom.
2. The first matching branch is selected.
3. Workflow execution continues only within that branch.
4. If no branch matches, the **Default Branch** is executed.

---

> **Important**
>
> Only one branch is executed.
>
> Once a matching branch is found, the remaining branches are ignored.

---

## Example

```text
Branch 1
Country = India

Branch 2
Country = UAE

Branch 3
Country = USA

Default Branch
All Other Countries
```

---

## Stop Workflow Node

### Overview

The **Stop Workflow** node immediately terminates workflow execution.

Once this node is reached:

- No additional actions are executed.
- No further logic nodes are evaluated.
- Workflow processing ends immediately.

---

## How It Works

When a Lead reaches this node:

1. Workflow execution stops.
2. Remaining nodes are skipped.
3. No additional automation is performed.

---

## Example

```text
IF Lead Status = Disqualified
    → Stop Workflow
```

### Result

The Lead exits the workflow immediately without executing any further actions.

---

## Best Practices

- Use **IF** nodes for straightforward business decisions.
- Use **Branch Nodes** when multiple routing options are required.
- Always configure an **ELSE** or **Default Branch** to handle unmatched scenarios.
- Use **Stop Workflow** nodes to prevent unnecessary processing.
- Keep conditions simple and business-focused.
- Test every workflow path before publishing.

---

## Summary

Workflow Logic & Control Nodes provide the intelligence behind workflow automation. By combining **IF**, **ELSE IF**, **ELSE**, **Branch**, and **Stop Workflow** nodes, administrators can create flexible, scalable, and maintainable workflows that automatically guide Leads through the appropriate business process.