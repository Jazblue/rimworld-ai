# RimMind: AI Assistant for RimWorld

## Project Overview

This project documents our exploration of integrating AI with RimWorld through the RimMind mod. RimMind is an AI-powered assistant that interfaces with OpenRouter (specifically configured to use models like `anthropic/claude-sonnet-4-5`) to provide contextual information about a RimWorld colony.

## Why I Built It

I initially set out to investigate whether an AI could actually play RimWorld - making autonomous decisions, controlling colonists, managing resources, and responding to game events without direct player intervention. After installing and configuring RimMind, I discovered an important distinction that became a key learning point of this project.

## What I Originally Expected

I initially thought this project would provide an AI that could actually play RimWorld. For example:
- Decide what to build and where
- Tell colonists what to do and when
- Manage work priorities dynamically
- Mine resources and grow crops automatically
- Research technologies based on colony needs
- Manage combat and respond to raids
- Control the colony autonomously as an AI player

## What RimMind Actually Does

After thorough investigation and setup, I discovered that **RimMind is primarily an AI chatbot/advisor for RimWorld**, not an autonomous AI player.

RimMind provides an AI interface that can:
- Query and understand aspects of the colony through various game-state tools
- Provide advice and information based on current colony conditions
- Communicate with AI models via OpenRouter to answer questions about the colony

It is **not currently an autonomous RimWorld player** that can make and execute decisions without human intervention.

## RimWorld Version

- **RimWorld 1.5.4062** (standalone installation)
- Located at: `C:\Users\Administrator\Desktop\Projects\my-lambda-package\ai images\2025-07\Rimworld.v1.5.4062\game`

## RimMind

- Source: Forked/adapted from [Bwarhness/RimMind](https://github.com/Bwarhness/RimMind)
- Working copy for RimWorld 1.5 compatibility: `C:\Users\Administrator\Desktop\RimMind-1.5`
- Installed as mod: `...\game\Mods\RimMind`
- Successfully compiled against RimWorld 1.5.4062 assemblies with 0 errors and 0 warnings
- Produces `RimMind.dll` installed in the Mods directory

## Harmony

- Official Harmony project: [pardeike/HarmonyRimWorld](https://github.com/pardeike/HarmonyRimWorld)
- Appropriate RimWorld 1.5 Harmony files installed
- Recognized by RimWorld and loads correctly
- Located at: `...\game\Mods\Harmony`

## OpenRouter

- API key configured through RimMind's in-game settings interface
- **Never commit actual API keys to GitHub** - credentials remain private
- Configured model used: `anthropic/claude-sonnet-4-5` (model choice is configurable and not hard-coded)

## Installation/Configuration Experience

1. Used existing RimWorld 1.5.4062 standalone installation (no new purchase/installation)
2. Cloned RimMind GitHub project
3. Created separate working copy for RimWorld 1.5 compatibility (`RimMind-1.5`)
4. Updated assembly references to match actual RimWorld 1.5.4062 DLLs
5. Corrected one real API difference:
   - Original: `map.designationManager.allDesignations`
   - RimWorld 1.5.4062: `map.designationManager.AllDesignations`
6. Successfully built RimMind against RimWorld 1.5.4062 assemblies
7. Installed built `RimMind.dll` into RimWorld Mods directory
8. Installed appropriate Harmony files for RimWorld 1.5
9. Verified RimMind loads correctly in RimWorld 1.5.4062
10. Confirmed Mod Settings page opens successfully
11. Configured OpenRouter API key and model through in-game settings

## Technical Work Performed

### Assembly Reference Updates
- Updated project references to point to actual RimWorld 1.5.4062 game assemblies
- Ensured compatibility with standalone installation rather than Steam/workshop versions

### API Compatibility Fix
- Identified and corrected casing difference in designation manager API:
  - Changed `allDesignations` to `AllDesignations` to match RimWorld 1.5.4062 exposure

### Build Process
- Clean compilation with zero errors and zero warnings
- Verified output DLL functions correctly when loaded by RimWorld

## Current Capabilities (Tools Available)

RimMind provides 24 distinct tools for querying colony information, organized by category:

### Colonist Tools (4)
- `list_colonists` - List all colonists with name, mood, job/activity, mental state
- `get_colonist_details` - Full colonist details: backstory, traits, skills, needs, mood, thoughts
- `get_colonist_health` - Health details: injuries, diseases, immunity, bionics, pain, consciousness
- `get_colonist_health` - Health details for specific colonist

### Social Tools (2)
- `get_relationships` - Colonist's social relationships: opinions, relationship types
- `get_faction_relations` - Relations with all known factions: name, goodwill, status

### Work Tools (3)
- `get_work_priorities` - Work priority grid for all colonists (Doctor, Cook, Hunt, etc.)
- `get_bills` - Active production bills at workbenches: recipe, target count, ingredients, worker, suspended status
- `get_schedules` - Daily schedules for all colonists: hour-by-hour assignments

### Colony Tools (4)
- `get_colony_overview` - High-level overview: colonist count, wealth, days survived, difficulty, storyteller, map tile info
- `get_resources` - Resource counts in stockpiles (filterable by category: food, materials, weapons, apparel, medicine, all)
- `get_rooms` - Info about all rooms: type/role, impressiveness, beauty, cleanliness, space, owner
- `get_stockpiles` - All stockpile zones: name, priority level, cell count, item filters

### Research Tools (3)
- `get_research_status` - Current research: active project, progress %, tech level, available benches
- `get_available_research` - Available (unlocked but incomplete) research projects with cost/prereqs
- `get_completed_research` - List of all completed research projects

### Military Tools (3)
- `get_threats` - Active threats: hostile pawns/factions, sieges, infestations, manhunter animals, mechanoid clusters
- `get_defenses` - Defensive structures: turrets (type, status, ammo), traps, sandbags/barricades with locations
- `get_combat_readiness` - Combat readiness per colonist: weapon, armor, shooting skill, melee skill, combat-relevant traits

### Map Tools (4)
- `get_weather_and_season` - Current weather, outdoor/indoor temperature, season, biome type
- `get_growing_zones` - All growing zones: planted crop, avg growth %, soil fertility, zone size
- `get_power_status` - Power grid status: total generation, consumption, battery levels, disconnected devices
- `get_map_region` - Character-based grid view of map showing buildings, pawns, zones, terrain (configurable region)
- `get_cell_details` - Detailed info about specific map cell/range: terrain, roof, temperature, fertility, room, zone, present things

### Animal Tools (2)
- `list_animals` - List all tamed/colony animals: species, name, assigned master, training completion
- `get_animal_details` - Detailed animal info: health, training progress per skill, food requirements, bonded colonist

### Event Tools (2)
- `get_recent_events` - Recent game events/letters: type, severity, description, occurrence time (configurable count)
- `get_active_alerts` - All currently active game alerts (e.g., 'colonist needs rescue', 'starvation', 'tattered apparel', 'idle colonist')

### Medical Tools (1)
- `get_medical_overview` - Medical overview: patients needing treatment, medicine supply by type, available beds, doctors with medical skill

### Plan Tools (2)
- `place_plans` - Place plan designations on map to mark where structures should be built (visual markers only)
- `remove_plans` - Remove plan designations from map (single cell, rectangular area, or all plans)

**Total: 24 tools**

## Current Limitations

Despite providing rich querying capabilities, RimMind has significant limitations regarding autonomous control:

### What RimMind CANNOT Do
- **Cannot autonomously decide** what to build or when
- **Cannot autonomously assign** work to colonists
- **Cannot autonomously change** work priorities
- **Cannot autonomously create** designations for construction/mining
- **Cannot autonomously order** construction or manufacturing
- **Cannot autonomously manage** growing zones or crop planting
- **Cannot autonomously draft** colonists for combat or training
- **Cannot autonomously move** colonists to specific locations
- **Cannot autonomously make** research decisions
- **Cannot autonomously manage** resource allocation beyond querying
- **Cannot autonomously respond** to threats or emergencies without human interpretation

### Core Limitation
RimMind operates in an **Observe → Explain** cycle only:
1. Observe colony state through tool queries
2. Explain/advise based on AI analysis
3. **Requires human to Decide and Act** on the advice

It lacks the crucial **Decide → Act** components needed for autonomous gameplay.

## Chatbot vs Autonomous AI Explanation

### What I Thought This Was
An AI that could actually play RimWorld - making and executing decisions independently.

### What RimMind Actually Is
**"ChatGPT for your RimWorld colony."**

RimMind provides:
- An AI interface that understands/query aspects of your colony
- Advice and information based on current game state
- Natural language interaction with colony data
- Advisory capabilities similar to an experienced player consulting

It does **not** provide:
- Autonomous decision-making and execution
- Direct control over colonists, construction, or resources
- Independent gameplay without human intervention

This distinction is crucial: RimMind is an **advisor**, not a **player**.

## Lessons Learned

1. **Expectation vs Reality**: The initial expectation of an autonomous AI player differed significantly from RimMind's actual advisor/chatbot nature.

2. **Technical Integration**: Successfully integrating C# .NET Framework 4.7.2 projects with RimWorld 1.5.4062 assemblies requires careful attention to API versions and references.

3. **Tool Limitation Awareness**: Querying game state is fundamentally different from modifying it. The available tools enable observation but not action.

4. **AI Gaming Boundaries**: Current RimWorld modding APIs (via HugsLib/Harmony) provide extensive observation capabilities but limited direct action capabilities for complex AI decision loops.

5. **Configuration Management**: Proper separation of secrets (API keys) from source code is essential - RimMind handles this well through its in-game settings interface.

## Future Direction

### From AI Chatbot to AI Player

If the project continues, investigate whether an additional controlled action layer could allow an AI to move from:
**Observe → Explain**
to:
**Observe → Decide → Act → Observe again**

#### Potential Future Actions (Research Only - Not Implemented)
- Assigning work to colonists
- Changing work priorities dynamically
- Creating designations for construction, mining, farming
- Ordering construction at workbenches
- Managing growing zones (crop selection, soil treatment)
- Managing bills (ingredient requirements, suspension)
- Drafting colonists for combat, training, or specific tasks
- Moving colonists to specific locations or zones
- Research project selection and management
- Emergency response protocols (firefighting, disease treatment)
- Resource allocation and trading decisions

#### Required Investigation Areas
1. **Action API Availability**: Determine which game state modifications are possible through RimWorld's public APIs and Harmony patches
2. **Safety Mechanisms**: Implement safeguards to prevent destructive AI decisions (e.g., deleting essential structures, harming colonists)
3. **Decision Framework**: Develop AI reasoning loop that balances colony needs, resources, threats, and long-term goals
4. **Feedback Systems**: Create meaningful observation of action results to inform subsequent decisions
5. **Human Oversight**: Design intervention points where players can override or guide AI decisions

### Possible Autonomous AI Architecture

A future autonomous AI player might require:
- **Observation Layer**: Existing RimMind tool set for colony state queries
- **Reasoning Engine**: AI model or decision system that processes observations and generates actions
- **Action Layer**: New set of tools/modifications that can effect changes in the game world
- **Execution Controller**: System that sequences actions and manages timing
- **Safety Validator**: Pre-execution checks to prevent harmful or nonsensical actions
- **Learning System**: Mechanism to improve decision-making based on outcomes

## Security/API-key Warning

> **Never commit an OpenRouter API key to GitHub.**

API credentials should remain private and should be stored through:
- RimMind's built-in configuration interface (in-game settings)
- Environment variables or secure secret management systems
- Local configuration files excluded from version control (via .gitignore)

The `.gitignore` file in this repository already excludes common sensitive file patterns, but developers should remain vigilant about not accidentally committing credentials.

## Project Status

- **RimMind.dll**: Successfully built and loads in RimWorld 1.5.4062
- **Harmony**: Correctly installed and recognized
- **OpenRouter Integration**: Configured and functional (API key required)
- **Tool Functionality**: All 24 query tools operational for colony state observation
- **Autonomous Control**: Not implemented - remains future research
- **Documentation**: This README accurately represents capabilities and limitations

### Key Facts Documented
- RimWorld version: 1.5.4062 standalone installation
- Build status: 0 errors, 0 warnings
- Tool count: 24 distinct query capabilities
- Core limitation: Observe-Explain only, no Decide-Act capability
- Primary function: AI-powered colony advisor/chatbot
- Autonomous AI player: Future research goal, not current implementation

### Verification Checks
- `git diff --check`: Passed (no whitespace errors)
- Application code: Unmodified (documentation only changes)
- Working RimWorld installation: Unmodified
- Only documentation files altered: README.md created