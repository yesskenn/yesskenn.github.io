import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Yessi Kenney",
  DESCRIPTION: "Web Design and Development",
  AUTHOR: "Yessi Kenney",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

export const SERVICES: Page = {
  TITLE: "Services",
  DESCRIPTION: "How I Can Help.",
}
// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing and thoughts on structure, learning, UX, accessibility, coding, and more.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects.  A mix of designs, code snippets, accessibility improvements, and system-level fixes.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

export const ABOUT: Page = {
  TITLE: "About",
  DESCRIPTION: "How and Why I Do What I Do.",
}

// Credits Page
export const CREDITS: Page = {
  TITLE: "Credits",
  DESCRIPTION: "Resources and tools used to build this site.",
}
// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
    { 
    TEXT: "Services", 
    HREF: "/services", 
  },
     { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
     { 
    TEXT: "About", 
    HREF: "/about", 
  }
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "hi@yessikenney.com",
    HREF: "mailto:hi@yessikenney.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "yesskenn",
    HREF: "https://github.com/yesskenn"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "Yessi Kenney",
    HREF: "https://www.linkedin.com/in/yessirpk/",
  },
]

