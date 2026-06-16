---
title: Access
sidebar_position: 4
---
The Access Tab in the CRM enables administrators to configure organizational access structures, visibility controls, reporting hierarchies, teams, and record-sharing policies. It acts as the central administration area for defining how users collaborate, access records, and manage ownership across the CRM platform. 

The Access module supports: 
- Team Management  
- Reporting Hierarchy Management  
- Hierarchy-Based Record Visibility  
- Sharing Rules Configuration  
- Runtime Sharing Rule Evaluation 

### 1. Team Management 

#### Overview 
The Team Management section allows administrators to create and manage Teams within the CRM so that users can be grouped based on departments, business units, functions, or regions. Teams help improve collaboration, ownership management, visibility configuration, and cross-functional workflows. 

Teams can later be used in: 
- Sharing Rules  
- Record Ownership  
- Visibility Configurations  
- Access Policies  
- Workflow Assignments 

#### Purpose 
This section helps administrators: 
- Organize users into logical groups  
- Assign team leads  
- Enable team-level collaboration  
- Configure future visibility and sharing policies  
- Simplify ownership and assignment management  
- Support cross-functional organizational structures 

### Team Creation 
Administrators can create a new team by providing the following details: 
- Team name 
- Description 
- Team Lead (primary contact)
- Team Members 

![create team](/img/user-management/team.png)

### Invite Team Members 
If the required team members are not already available in the CRM system, the administrator can invite new users directly while creating or editing a team. 

### Invite Member Functionality 

During Team Creation or Team Editing: 
- Admin can enter the email address of a new user who is not yet registered in the CRM.  
- The system provides an “Invite User” option.  
- An invitation email is sent to the provided email address.  
- Once the invited user accepts the invitation and completes registration, they become available as a selectable team member. 

#### Validation Rules 
- Duplicate invitations for the same email should be prevented  
- Existing registered users cannot receive duplicate invites  
- Team Lead cannot remain in pending invitation state if team creation requires active lead assignment  
- Invitation links should expire after configured duration 

#### Available Actions 
Administrators can perform the following actions: 
- View Team  
- Edit Team  
- Activate / Deactivate Team  
- Search Teams  
- Filter Teams  

### Linked References 
The system also displays where the team is currently used: 
- Sharing Rules  
- Record Ownership References  
- Visibility Policies  
- Other Access Configurations  

### Editing Teams 
Administrators can modify: 
- Team Name  
- Description  
- Team Lead  
- Team Members 

#### Validation Rules 
The system validates the following before saving changes: 
- Duplicate team names are not allowed  
- Team lead must remain a member of the team  
- Warning displayed if removing users who own CRM records  
- System validates dependencies before saving updates 

### Team Deactivation 

Teams can be deactivated when no longer required. 

#### Deactivation Validation 
Before deactivation, the system checks: 
- Whether the team is used in Sharing Rules  
- Whether the team owns Leads, Deals, or other records  
- Whether active dependencies exist  
If dependencies are found: 
- System shows a warning message  
- Admin must complete reassignment before deactivation  

#### Inactive Team Behavior 
When a team becomes inactive: 
- It is removed from new assignment dropdowns  
- Existing historical references remain visible  
- Team remains visible in the Team List with **Inactive** status 

### Multi-Team Membership 
The CRM supports assigning users to multiple teams simultaneously. 

Supported Scenarios 
**Examples:** 
- A Sales Manager can belong to:  

1. Regional Sales Team  
2. Executive Leadership Team  
- A Marketing Specialist can belong to:  
1. Digital Marketing Team  
2. Product Launch Team

### 2. Reporting Hierarchy Management 

#### Overview 

The Reporting Hierarchy feature enables organizations to define formal reporting relationships between users. It creates a structured hierarchy tree that supports managerial visibility and downstream reporting access. 

#### Purpose 
This feature helps organizations: 
- Represent real reporting structures  
- Enable manager-level record visibility  
- Support multi-branch organizational structures  
- Manage reporting relationships efficiently 

### Reporting Manager Assignment 
Each user can have: 
- Zero or one reporting manager  
- Multiple direct reports  
- Top-level executives may not require a manager assignment. 

### Hierarchy Tree View 
Administrators can visualize organizational structure through a hierarchical tree view. 

#### Tree Features 
- Expand / Collapse Nodes  
- Multi-level Branch Support  
- User Search  
- Multiple Organizational Branches  
- Quick Change Manager Actions (optional) 

### Updating Reporting Relationships 
Administrators can: 
- Change reporting managers  
- Move users to different branches  
- Reorganize hierarchy structures 

### Hierarchy Validation Rules 
The system enforces strict validation rules: 
#### Blocked Conditions 
- Self-reporting  
- Circular reporting loops  
- Assigning subordinates as managers of their own reporting chain  

**Invalid Example**
A → B → C → A 
This structure is blocked automatically. 

### User Deactivation Handling 
When a manager is deactivated: 
The system requires: 
- Reassignment of subordinates to a new manager  
OR 
- Temporary detachment to top-level hierarchy (based on organizational policy)  
The system never allows invalid hierarchy references. 

### Subscription Gating 
Hierarchy Management is available only if enabled in the organization's subscription plan. 
If disabled: 
- Reporting Manager field is hidden  
- Hierarchy screens are unavailable  
- Hierarchy-based visibility is disabled 

### 3. Hierarchy-Based Record Visibility 

#### Overview 
Hierarchy-Based Visibility automatically expands record visibility for managers so they can view records owned by their direct and indirect subordinates. 
This feature applies only to VIEW permissions. 

#### Supported Modules 
Hierarchy visibility applies to: 
- Leads  
- Deals  
- Contacts  
- Organizations  
- Activities  
- Notes  
- Proposals  
- Quotes  
- Pulse Conversations  
- AI Logs 

### Visibility Logic 
A manager can view records if: 
- Role visibility permits access  
OR 
- Record owner exists within the manager’s subordinate hierarchy tree  

### Important Restrictions 
Hierarchy visibility does NOT grant: 
- Edit Access  
- Delete Access  
- Assign/Reassign Rights  
- Export Permissions  
- Import Permissions  
These permissions remain controlled by Role Permissions only. 

### Module Access Gating 
Hierarchy visibility works only if module access already exists. 

### AI Log Visibility Rules 
AI Logs are additionally restricted by conversation visibility. 

Users can only view AI logs for conversations they are permitted to access. 

### Visibility Recalculation 
Visibility updates immediately whenever: 
- Reporting manager changes  
- Hierarchy structure changes  
- User activation/deactivation changes  
- Role permissions change 

### 4. Sharing Rules Management 

#### Overview 
Sharing Rules allows administrators to share records across roles, teams, and users outside the standard hierarchy structure. 

Sharing Rules expands visibility but never restricts it. 

Sharing Rules are available only in Enterprise subscription plans. 

### Sharing Rule Structure 
- Each sharing rule contains: 
- Rule name – Unique Rule name 
- Source type – Role/Team/User 
- Source entity – Source owner group 
- Target type - Role/Team/User 
- Target entity - Access recipient 
- Modules – Modules included in sharing 
- Access type – view only 
- Status – Active / Disabled 

![sharing rule](/img/user-management/sharing.png)

### Supported Modules 
Rules can apply to: 
- Leads  
- Deals  
- Contacts  
- Organizations  
- Activities  
- Pulse Conversations 

### Sharing Rule Evaluation 
A sharing rule grants visibility when: 
- Record Owner matches Source Definition  
AND 
- Current User matches Target Definition 

### Sharing Rule Types 
#### Source Types 
- Role  
- Team  
- Specific User  
#### Target Types 
- Role  
- Team  
- Specific User 

### Rule Activation 
Rules can be: 
- Active  
- Disabled  

Disabled rules are ignored during visibility evaluation. 

Rule activation and deactivation can be done by the status toggle. If the status is enabled, the rule is in active state and vice versa. 

### Available Actions 
Administrators can: 
- Create Rule  
- Edit Rule  
- Enable / Disable Rule  
- Delete Rule 
### Rule Deletion Safety 
The system prevents deletion when rules are: 
- Referenced in workflows  
- Currently involved in processing dependencies 

### Runtime Evaluation Behavior 
The system: 
- Evaluates only active rules  
- Applies module restrictions  
- Ignores disabled rules  
- Combines results with hierarchy and role visibility 
