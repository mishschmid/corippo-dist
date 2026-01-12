# Corippo Distribution Repository

This repository contains the **static build output** for the [Corippo tourism website](https://corippo.com).

## Purpose

This is an automated deployment repository that serves the production site via GitHub Pages. It contains only the compiled, production-ready static files generated from the main [corippo](https://github.com/mishschmid/corippo) repository.

## Deployment Process

The build artifacts are automatically synchronized from the main repository using:
- Nuxt static site generation (`yarn generate`)
- Automated deployment script that uses rsync with checksum comparison
- A local `.deploy-cache` to speed up subsequent deployments

**Do not edit files directly in this repository.** All changes should be made in the main [corippo](https://github.com/mishschmid/corippo) repository and deployed through the standard deployment process.

## Technology

- **Framework**: Nuxt 3 (static site generation)
- **Images**: Served from Cloudinary CDN
- **Hosting**: GitHub Pages (this repository)
- **Domain**: [corippo.com](https://corippo.com)

## Related Resources

- Main repository: [mishschmid/corippo](https://github.com/mishschmid/corippo)
- Live site: [corippo.com](https://corippo.com)
