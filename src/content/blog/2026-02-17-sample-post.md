---
title: Sample Blog Post
summary: A short demonstration of markdown features including callouts, code blocks, and images.
tags:
  - demo
  - markdown
  - astro
pubDate: 2026-02-17
---

This is a sample blog post to demonstrate the layout and markdown rendering. It includes several common patterns you'll use when writing technical content.

## Callouts and Blockquotes

> **Note:** This is a blockquote that can be used for callouts, notes, or important highlights. Style it with the prose classes for consistency.

You can use blockquotes for tips, warnings, or general callouts. The typography plugin handles these gracefully.

## Code Blocks

Here's an example of a code block with syntax highlighting:

```bash
# Validate connectivity between lab nodes
ping 10.10.10.11
ping 10.10.10.12
```

And a snippet in Python:

```python
def validate_connectivity(hosts: list[str]) -> bool:
    """Ping each host and return True if all respond."""
    for host in hosts:
        if not ping(host):
            return False
    return True
```

## Images

Images in markdown render with proper sizing:

![Example placeholder](/img/blog/sample-image.svg)

## Lists and Structure

- First item
- Second item with **bold** and *italic*
- Third item with `inline code`

Numbered lists work as expected:

1. Install dependencies
2. Configure environment
3. Run the build

## Conclusion

This post demonstrates the core markdown features. Add more content as needed for your blog.
