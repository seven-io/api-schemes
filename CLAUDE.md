# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the official API schemes repository for seven.io, containing OpenAPI/Swagger definitions for their telecommunications API services (SMS, TTS, HLR, MNP, CNAM). The project converts between Swagger 2.0 and OpenAPI 3.0 formats in both JSON and YAML.

## Build System

The project uses a TypeScript build script (`build.mts`) that:
- Reads the master Swagger 2.0 definition from `yml/swagger.yml`
- Converts and validates between formats using swagger2openapi and @apidevtools/swagger-parser
- Outputs 4 files: `json/openapi.json`, `json/swagger.json`, `yml/openapi.yml`, and regenerates `yml/swagger.yml`
- Formats all outputs using Prettier

## Development Commands

- `npm run build` - Converts and validates API schemas between formats
- The build runs automatically on pre-commit via Husky hooks

## Architecture

### File Structure
- `yml/swagger.yml` - Master Swagger 2.0 definition (source of truth)
- `json/` - Generated JSON files (both OpenAPI 3.0 and Swagger 2.0)
- `yml/openapi.yml` - Generated OpenAPI 3.0 YAML
- `build.mts` - TypeScript build script handling all conversions

### Key Dependencies
- `swagger2openapi` - Converts Swagger 2.0 to OpenAPI 3.0
- `@apidevtools/swagger-parser` - Validates API definitions
- `yamljs` - YAML parsing and stringification
- `prettier` - Code formatting
- `tsx` - TypeScript execution

## Workflow Notes

- All schema changes should be made to `yml/swagger.yml` as it's the source of truth
- Run `npm run build` after any changes to regenerate all output formats
- The build process includes validation to catch schema errors
- Pre-commit hooks ensure the build passes before commits