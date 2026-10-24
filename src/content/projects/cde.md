---
title: "CDE"
description: "A (proposed) visual redesign of the CDEs public-facing site"
liveUrl: ""
image: {
url: "/cde.png",
alt:  "Screenshot of the revamped homepage for the California Department of Education"
}
---

## Overview

Disclaimer: This is a proposed redesign, I have no implementation access.
Reimagining a large page government website through content strategy, information architecture, and a scalable design system. In other words, this is an exploration of the content, structure, and interface of the CDE website snd related aspects.

## Role

### Rogue User Experience / Design Systems Designer

- I took an existing content ecosystem, audited and structured the information architecture, identified reusable patterns, created a scalable design system, and created a prototype to show what it _could_ be.

## Problem

The site needs a visual update and is confusing to navigate in some ways.

To put it plainly, the California Department of Education's website is stuck in the early 2000s. In the age of AI this could be a nostalgic, intentional vibe - but there are overlooked details that make the style look schlepped together and posted as "good enough". However, I know that this team works really hard to make the site accessible, so that's a plus.

## Approach

I examined the site and considered, very much, how it could support a more scalable and user-centered experience. how the experience could be improved and developed a prototype to demonstrate the proposed system.
Note, I have been thinking about this since I started working here - before the vote to incorporate CDE into the governor's rule/kingdom and always wondered why it didn't match the other ca.gov websites (they use the California State Template).

## Process

### What I Found / The Existing System

PowerMapper helped me visualize the current structure of the folders and pages of the CDE website. It's a lot.

![PowerMapper animation showing the extent of the CDE content][images/cde/tmi-ia.mp4]

Another thing I know of the site's information architecture is that the actual content is organized by topics (and subsequently, sub-topics and sub-sub-topics), not by divisions or departments. That means that two offices or branches within the agency are able to access pages under the same content folder. For example, both a financial regulation office and a curriculum guidance office could both have access to a sub-topic folder in the "Professional Learning" area. This is great for giving web contributors the flexibility to edit the pages they need to without worrying about stepping on toes or waiting for someone to sign off on permissions. I do feel that this can get murky when it comes to a user journey, depending on the user and what they are looking for.

![CDE header with topics](images/cde/ia-topic.png)

Caltrans, another California agency, organizes their web content by its programs.

![Caltrans topics, organized by Departments.](images/cde/ia-program.png)

#### Constraints

The site contains a large volume of content, so I used a representative sampling approach rather than attempting to manually inventory every URL. Additionally, CDE as an organization does not have an established style guide, although they do have [preferred web standards]() for web contributors to use for content they want to publish to the site.

#### Interesting Tidbits

"All websites in the “ca.gov” DNS Zone must contain a direct link to https://www.ca.gov/ and must provide both general information and details on digital services to be used on https://www.ca.gov/."
[State Administrative Manual 519.5](https://www.dgs.ca.gov/Resources/SAM/TOC/5100/5195-1)

Any site with the CA.GOV domain must adhere to certain requirements, see [Website Standards 5190.1](https://www.dgs.ca.gov/Resources/SAM/TOC/5100/5190-1)

http://www.webstandards.ca.gov/

### Observations

information is difficult to locate
// similar content is structure inconsistently
navigation / content hierarchy is unclear
visual patterns vary

### Changes and Why

I used the California State Template as inspiration.

## Outcome

- Established a more scalable content system by creating reusable Sitecore components and page patterns, while refreshing the existing content

## Skill Stack

- Section 508
- WCAG
- Content governance
- Web standards
- Accessible PDF
- HTML / CSS / Javascript
- Sitecore / Drupal
- Figma

## Links

[Figma Link]()

### Resources

[CSS Stats](https://cssstats.com)
[A11y Style Guide](https://a11y-style-guide.com/style-guide/)

### Inspiration

[California State Template](https://www.template.webstandards.ca.gov)
[Utah Design System Guidelines](https://designsystem.utah.gov/guidelinesStandards/designGuidelines/)
